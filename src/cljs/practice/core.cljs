(ns practice.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [practice.ajax :refer [load-interceptors!]]
            [practice.handlers]
            [practice.subscriptions])
  (:import goog.History))

(defn nav-link [uri title page collapsed?]
  (let [selected-page (rf/subscribe [:page])]
    [:li.nav-item
     {:class (when (= page @selected-page) "active")}
     [:a.nav-link
      {:href uri
       :on-click #(reset! collapsed? true)} title]]))

(defn navbar []
  (r/with-let [collapsed? (r/atom true)]
    [:nav.navbar.navbar-dark.bg-primary
     [:button.navbar-toggler.hidden-sm-up
      {:on-click #(swap! collapsed? not)} "☰"]
     [:div.collapse.navbar-toggleable-xs
      (when-not @collapsed? {:class "in"})
      [:a.navbar-brand {:href "#/"} "practice"]
      [:ul.nav.navbar-nav
       [nav-link "#/" "Home" :home collapsed?]
       [nav-link "#/about" "About" :about collapsed?]]]]))

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(defn home-page []
  #_[:h2 "dwd"]
  [:div.ui.container
   [:button.ui.primary.button "Click me"]
   [:button.ui.animated.button 
    [:span.visible.content "Next"]
    [:span.hidden.content [:i.right.arrow.icon]]]
   [:div.huge.ui.red.buttons
    [:button.ui.button
     [:i.pause.icon]]
    [:button.ui.button
     [:i.play.icon]]
    [:button.ui.button
     [:i.stop.icon]]]
   [:button.ui.loading.button "loading"]]


  #_[:div.ui.container
   [:div.ui.grid
    [:div.four.wide.column
     [:button.ui.fluid.button]]
    [:div.eight.wide.column
     [:button.ui.fluid.button]]
    [:div.four.wide.column
     [:button.ui.fluid.button]]]]
  
  ;;complete website practice
  [:div
   [:header
    [:div.row
     [:div.logo
      [:img {:src (str js/context "/img/logo.jpeg")}]]
     [:ul.main-nav
      [:li
       [:a {:href ""} "FOOD DELIEVERY"]]
      [:li
       [:a {:href ""} "FOOD ORDERS"]]
      [:li
       [:a {:href ""} "TESTIMONIALS"]]
      [:li
       [:a {:href ""} "OUR CITIES"]]]]
    [:div.hero
     [:h1 "GOODBYE JUNKFOOD" [:br] "HELLO SUPER HEALTHY MEALS"]
     [:div.button-awesome
      [:a.btn.btn-half {:href ""} "Show more"]
      [:a.btn.btn-full {:href ""} "I am hungry"]]]]
   [:section.features
    [:h3 [:center "GET FOOD FAST NOT THE FAST FOOD"]]
    [:p.copy "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set."]]])

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [:div
   [(pages @(rf/subscribe [:page]))]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:set-active-page :home]))

(secretary/defroute "/about" []
  (rf/dispatch [:set-active-page :about]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(rf/dispatch [:set-docs %])}))

(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:initialize-db])
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
