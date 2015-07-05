(ns timeline.app
  (:require 
   [cljs.core.async :refer [>! <! chan]]
   [cljs-http.client :as http]
   [timeline.data :as data]
   [timeline.render :as render]
   [timeline.wikipedia :refer [wikidata]])
  (:require-macros [cljs.core.async.macros :refer [go] ]))

(enable-console-print!)

(declare format-nobel-data)

(defn get-nobel-data [response-chan] 
  (go (let [response (<! (http/get "http://api.nobelprize.org/v1/prize.json" 
                                   {:with-credentials? false} ))]
        (>! response-chan (get-in response [:body :prizes])))))

(defn sample-data [response-chan]
  (>! response-chan (data/data)))

(defn format-nobel-people [people]
  (map (fn [x] 
         (let [laureates (map #(assoc % :visible? false)    (:laureates x))
               prize  (str (:motivation (first (:laureates x))))]
           (assoc x :laureates laureates :prize prize ))) people))

(defn format-nobel-data [data]
  (let [sorted (into (sorted-map) (group-by :year data))]
    (map #(hash-map :section-title (first %) 
                    :data (second %)) sorted)))

(defn filter-by-category [state category]
  (let [data (filter #(= category (:category %)) (:data state))]
    (assoc state :filtered (format-nobel-data data)
           :filter category)))

(defn make-invisible [laureates]
  (map (fn [x] assoc x :visible? true) laureates))

; [1934 [{:category "physics"...}]]
(defn init-nobel-data [data]
  (let [sorted (into (sorted-map) (group-by :year data))]
    (map #(let [NOT-USED (map (fn [prize] 
                                   (update prize :laureates make-invisible)) 
                                 (second %))] 
            (hash-map :section-title (first %) 
                      :data data)) sorted))) 

(defn handle-response [state data]
  (let [formatted (-> data
                      format-nobel-people
                      init-nobel-data)
        categories (keys (group-by :category data))]
    (filter-by-category (assoc state :categories categories
                               :data (format-nobel-people data) 
                               :filter "physics"
                               :filtered formatted) "physics" )))

(defn laureate-vis [laureates id]
   (map #(if (=  id (:id %)) 
           (update %  :visible? not )
           %) 
        laureates)) 

(defn laureates-visibility [prizes id]
  (map #(update % :laureates laureate-vis id) prizes))

(defn toggle-detail-visibility [state id]
  (let [filtered (:filtered state)]   
    (assoc state :filtered (map #(update-in % [:data] laureates-visibility id)  
                                 (:filtered state)))))

(defn load-app []
  {:state (atom {:wikidata wikidata}) 
   :channels {:toggle-details (chan)
              :filter-by-category (chan)
              :http-response (chan)}
   :consumers {:toggle-details toggle-detail-visibility
               :filter-by-category filter-by-category
               :http-response handle-response}})
 
(defn init-updates
  "For every entry in a map of channel identifiers to consumers,
  initiate a channel listener which will update the application state
  using the appropriate function whenever a value is recieved, as
  well as triggering a render."
  [app]
  (doseq [[ch update-fn] (:consumers app)]
    (go (while true
          (let [val (<! (get (:channels app) ch))
                _ (println (str "on channel [" ch "], received value [" val "]"))
                new-state (swap! (:state app) update-fn val)]
            (render/request-render app))))))

(defn ^:export init
  "Application entry point"
  []
  (let [app (load-app)]
    (init-updates app)
    (get-nobel-data (get-in app [:channels :http-response]))
    (render/request-render app)))
