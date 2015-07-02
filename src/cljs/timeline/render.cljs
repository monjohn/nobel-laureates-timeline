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
  (let [laureates (:laureates ev)
        make-url #(str "http://wikipedia.com/" % )]
    (d/div {:className "cd-timeline-content"}
           (apply d/div nil 
                  (map  #(let [wdata (get wikidata (:id %))
                               show-class (if (:visible? %) "vis" " invis " )]  
                           (d/a {:href (make-url (:url wdata)) :className "tooltip"}  
                                             (d/h3 nil 
                                                   (str (:firstname %) " " (:surname %))) 
                                             (d/span {:className "tooltip-content"
                                                      } 
                                                     (:initial-paragraph wdata) )))   laureates)) 
         (d/p nil (:prize ev))
           (d/span {:className "cd-date"} (:category ev)))))


(q/defcomponent Section [section wikidata channels ]
  (d/div {:className "cd-timeline-block" }
         (d/div {:className "cd-timeline-img cd-picture"
                :onClick #(go (>! (:toggle-section-visibility channels) (:section-title section)) nil)}
                (d/span nil 
                        (:section-title section)))
         (apply d/div {:className "timeline-series"}
                (map  #(Event (assoc % :visible? (:visible? section)) wikidata channels) (:data section)))))


(q/defcomponent Timeline [state channels]
  (d/div nil
         (apply d/div {:className "button-row"}
                (map  #(Button % (:filter-by-category channels)) (:categories state))
                )
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
