(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] timeline.app))
(when-not (client/alive?) (client/connect "ws://localhost:58356" {:on-jsload (fn* [] (timeline.app/init))}))