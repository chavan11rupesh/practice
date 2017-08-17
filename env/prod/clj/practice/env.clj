(ns practice.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[practice started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[practice has shut down successfully]=-"))
   :middleware identity})
