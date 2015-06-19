(ns timeline.render
  (:require [cljs.core.async :as a]
            [quiescent.core :as q :include-macros true]
            [quiescent.dom :as d])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(q/defcomponent Event [ev channels]
  (let [show-class (if (:visible? ev) "vis" " invis " )]
    (d/div {:className show-class}
           (d/dt {:className "timeline-event"}
                 (d/a nil (:title ev)))
           (d/dd {:className (str show-class "timeline-event-content")}
                 (d/p nil (:content ev))
                 (d/br {:className "clear"})))))


(q/defcomponent Section [section channels ]
  (d/div {:className "timeline-wrapper" }
  (d/a {:name (:section-title section)})
 ; (d/a {:href (str "#" (:section-title section))}         
       (d/h2 {:className "timeline-time"
              :onClick #(go (>! (:toggle-section-visibility channels) (:section-title section)) nil)
              }
             (d/span nil (:section-title section)))
                                        ;
  ;) 
  (apply d/dl {:className "timeline-series"}
         (map  #(Event (assoc % :visible? (:visible? section)) channels) (:data section)))))
 

(q/defcomponent Timeline [state channels]
  (d/div {:id "timeline" :className "timeline-container"}
         (d/button {:className "timeline-toggle"
                    :onClick  #(go (>! (:show-all? channels) true))}
                   "+ expand all")
         (d/br "clear")
         (d/h1 nil (:heading state))
         (apply d/div nil
                (map #(Section % channels) (:data state)))
         (d/br {:classNameName "clear"})))


;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn request-render
    "Render the given application state tree."
    [app]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
                              (fn []
                                (q/render (Timeline @(:state app) (:channels app))
                                          (.getElementById js/document "qui"))
                                (reset! render-pending? false))))))
