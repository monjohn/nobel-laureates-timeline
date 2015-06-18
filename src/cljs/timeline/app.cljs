(ns timeline.app
  (:require 
   [cljs.core.async :refer [>! <! chan]]
   [cljs-http.client :as http]
   [timeline.data :as data]
   [timeline.render :as render])
  (:require-macros [cljs.core.async.macros :refer [go] ]))

(enable-console-print!)

(defn nobel-heading [data]
  (:category  (first data)))

(defn format-nobel-people [people]
  (map (fn [x] 
         (let [laureates (map #( str  (:firstname %) " " (:surname %))   (:laureates x))
               title  (if (> (count laureates) 1) (clojure.string/join " & " laureates) (first laureates) )
               content  (str "Prize: " (:motivation (first (:laureates x))))]
           (assoc x :title title :content content ))) people))


; [1934 [{:category "physics"...}]]
(defn format-nobel-data [data]
  (let [formatted (format-nobel-people data)
        sorted (into (sorted-map) (group-by :year formatted))]
    (map #(hash-map :section-title (first %) 
                    :visible? true 
                    :data (second %)) sorted)))

(defn get-nobel-data [response-chan] 
  (go (let [response (<! (http/get "http://api.nobelprize.org/v1/prize.json?year=1915&yearTo=1927&category=physics" 
                                   {:with-credentials? false} ))]
        (>! response-chan (get-in response [:body :prizes])))))

(defn handle-response [state body]
  (let [heading (nobel-heading body)]
    (assoc state :heading heading 
           :data (format-nobel-data body))))

(defn toggle-show-all [state bool]
  (let [data (map #(update-in % [:visible?] not) (:data state))]
    (assoc state :data data)))

(defn toggle-section-visibility [state section]
  (assoc state :data  (map #(if (=  section (:section-title %))
                              (update-in %  [:visible?] not )
                              %) (:data state))))

(defn load-app []
  {:state (atom {:show-all? false}) ; (atom (update-in (data/data) [:data]  #(seq (into (sorted-map) %))))
   :channels {:show-all? (chan)
              :http-response (chan)
              :toggle-section-visibility (chan)
              :toggle (chan)}
   :consumers {:show-all? toggle-show-all
                           :http-response handle-response
                           :toggle-section-visibility toggle-section-visibility
                           }})

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
