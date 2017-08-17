// Compiled by ClojureScript 1.9.854 {}
goog.provide('practice.handlers');
goog.require('cljs.core');
goog.require('practice.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return practice.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__44536){
var vec__44537 = p__44536;
var _ = cljs.core.nth.call(null,vec__44537,(0),null);
var page = cljs.core.nth.call(null,vec__44537,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__44540){
var vec__44541 = p__44540;
var _ = cljs.core.nth.call(null,vec__44541,(0),null);
var docs = cljs.core.nth.call(null,vec__44541,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));

//# sourceMappingURL=handlers.js.map?rel=1502732686150
