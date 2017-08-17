(ns user
  (:require [mount.core :as mount]
            [practice.figwheel :refer [start-fw stop-fw cljs]]
            practice.core))

(defn start []
  (mount/start-without #'practice.core/repl-server))

(defn stop []
  (mount/stop-except #'practice.core/repl-server))

(defn restart []
  (stop)
  (start))


