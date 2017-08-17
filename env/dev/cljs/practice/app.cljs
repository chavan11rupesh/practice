(ns ^:figwheel-no-load practice.app
  (:require [practice.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
