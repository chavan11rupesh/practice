(ns figwheel.connect.build-app (:require [practice.core] [figwheel.client] [figwheel.client.utils] [practice.app]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/practice.core.mount-components (apply js/practice.core.mount-components x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'practice.core/mount-components' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

