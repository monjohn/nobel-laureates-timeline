(ns timeline.render
  (:require [cljs.core.async :refer [>! <! chan]]
            [quiescent.core :as q :include-macros true]
            [quiescent.dom :as d])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(q/defcomponent Button [category channel]
  (d/button {:className "buttons"
             :onClick #(go (>! channel category))}
            category))

(q/defcomponent Event [ev wikidata channels]
  (let [make-url (fn [s] (str "http://wikipedia.com" s) )]
    (d/div {:className "cd-timeline-content"}
           (apply d/div nil 
                  (map  #(let [wdata (get wikidata (:id %))
                               show-class (if (:visible? %) "vis" " invis " )]
                           (d/div nil 
                                  (d/a {:onClick (fn [_] (go (>! (:toggle-details channels) (:id %))))}
                                       (d/h2 {:className "title"} (str (:firstname %) " " (:surname %)))) 
                                  (d/p {:className show-class} 
                                       (:initial-paragraph wdata)
                                       (d/a {:href (make-url (:url wdata)) 
                                             :className "cd-read-more"} "Learn more") ))) (:laureates ev))) 
           (d/p nil (:prize ev))
           (d/span {:className "cd-date"} (:category ev)))))


(q/defcomponent Section [section wikidata channels ]
  (d/div {:className "cd-timeline-block" }
         (d/div {:className "cd-timeline-img cd-picture"}
                (d/span nil (:section-title section)))
         (apply d/div {:className "timeline-series"}
                (map  #(Event % wikidata channels) (:data section)))))


(q/defcomponent Timeline [state channels]
  (d/div nil
         (apply d/div {:className "button-row"}
                (map  #(Button % (:filter-by-category channels)) (:categories state)))
         (d/section {:id "cd-timeline" :className ""}
                    (apply d/div {:className "cd-container"}
                           (map #(Section % (:wikidata state) channels) (:filtered state))) )))


(q/defcomponent App [state channels]
  (d/div {:className ""}
         (d/header nil
                   (d/h1 nil "Nobel Prize Winners"))
         (Timeline state channels)
         (d/footer nil
                   (d/p nil "Design from http://codyhouse.co/gem/vertical-timeline/")
                   )))

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn request-render
    "Render the given application state tree."
    [app]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
                              (fn []
                                (q/render (App @(:state app) (:channels app))
                                          (.getElementById js/document "qui"))
                                (reset! render-pending? false))))))
