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

(defn filter-by-category [state category]
  (let [data (if (= "all" category) (:data state)
                 (filter #(= category (:category %)) (:data state)))]
    (assoc state :filtered (format-nobel-data data)
           :filter nil)))

(defn format-nobel-people [people]
  (map (fn [x] 
         (let [laureates (map #( str  (:firstname %) " " (:surname %))   (:laureates x))
               title  (if (> (count laureates) 1) (clojure.string/join " & " laureates) (first laureates) )
               prize  (str  (:motivation (first (:laureates x))))]
           (assoc x :title title :prize prize))) people))

(defn format-nobel-data [data]
  (let [sorted (into (sorted-map) (group-by :year data))]
    (map #(hash-map :section-title (first %) 
                    :data (second %)) sorted)))

; [1934 [{:category "physics"...}]]
(defn init-nobel-data [data]
  (let [sorted (into (sorted-map) (group-by :year data))]
    (map #(hash-map :section-title (first %) 
                   :visible? true
                    :data (second %)) sorted)))

(defn handle-response [state data]
  (let [formatted (-> data
                      format-nobel-people
                      init-nobel-data)
        categories (keys (group-by :category data))]
    (filter-by-category (assoc state :categories categories
                               :data (format-nobel-people data) 
                               :filter "physics"
                               :filtered formatted) "physics" )))



(defn toggle-section-visibility [state section]
  (assoc state :filtered  (map #(if (=  section (:section-title %))
                              (update-in %  [:visible?] not )
                              %) (:filtered state))))

(defn get-nobel-data [response-chan] 
  (go (let [response (<! (http/get "http://api.nobelprize.org/v1/prize.json" 
                                   {:with-credentials? false} ))]
        (>! response-chan (get-in response [:body :prizes])))))

(defn get-saved-data [response-chan]
  (>! response-chan (data/data)))

(defn load-app []
  {:state (atom {:wikidata wikidata
                 :show-all? false}) ; (atom (update-in (data/data) [:data]  #(seq (into (sorted-map) %))))
   :channels {:filter-by-category (chan)
              :http-response (chan)}
   :consumers {:filter-by-category filter-by-category
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
