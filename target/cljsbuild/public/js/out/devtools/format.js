// Compiled by ClojureScript 1.9.854 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__40293__auto__ = (((value == null))?null:value);
var m__40294__auto__ = (devtools.format._header[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,value);
} else {
var m__40294__auto____$1 = (devtools.format._header["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__40293__auto__ = (((value == null))?null:value);
var m__40294__auto__ = (devtools.format._has_body[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,value);
} else {
var m__40294__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__40293__auto__ = (((value == null))?null:value);
var m__40294__auto__ = (devtools.format._body[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,value);
} else {
var m__40294__auto____$1 = (devtools.format._body["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51475 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51475["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51476 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51476["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51477 = temp__4655__auto____$2;
return (o51477["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51478 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51478["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51479 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51479["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51480 = temp__4655__auto____$2;
return (o51480["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51481 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51481["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51482 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51482["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51483 = temp__4655__auto____$2;
return (o51483["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51484 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51484["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51485 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51485["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51486 = temp__4655__auto____$2;
return (o51486["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51487 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51487["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51488 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51488["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51489 = temp__4655__auto____$2;
return (o51489["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51490 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51490["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51491 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51491["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51492 = temp__4655__auto____$2;
return (o51492["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o51493 = temp__4655__auto__;
var temp__4655__auto____$1 = (o51493["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o51494 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o51494["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o51495 = temp__4655__auto____$2;
return (o51495["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51497 = arguments.length;
var i__40775__auto___51498 = (0);
while(true){
if((i__40775__auto___51498 < len__40774__auto___51497)){
args__40781__auto__.push((arguments[i__40775__auto___51498]));

var G__51499 = (i__40775__auto___51498 + (1));
i__40775__auto___51498 = G__51499;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq51496){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51496));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51501 = arguments.length;
var i__40775__auto___51502 = (0);
while(true){
if((i__40775__auto___51502 < len__40774__auto___51501)){
args__40781__auto__.push((arguments[i__40775__auto___51502]));

var G__51503 = (i__40775__auto___51502 + (1));
i__40775__auto___51502 = G__51503;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq51500){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51500));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51505 = arguments.length;
var i__40775__auto___51506 = (0);
while(true){
if((i__40775__auto___51506 < len__40774__auto___51505)){
args__40781__auto__.push((arguments[i__40775__auto___51506]));

var G__51507 = (i__40775__auto___51506 + (1));
i__40775__auto___51506 = G__51507;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq51504){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51504));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51509 = arguments.length;
var i__40775__auto___51510 = (0);
while(true){
if((i__40775__auto___51510 < len__40774__auto___51509)){
args__40781__auto__.push((arguments[i__40775__auto___51510]));

var G__51511 = (i__40775__auto___51510 + (1));
i__40775__auto___51510 = G__51511;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq51508){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51508));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51513 = arguments.length;
var i__40775__auto___51514 = (0);
while(true){
if((i__40775__auto___51514 < len__40774__auto___51513)){
args__40781__auto__.push((arguments[i__40775__auto___51514]));

var G__51515 = (i__40775__auto___51514 + (1));
i__40775__auto___51514 = G__51515;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq51512){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51512));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51517 = arguments.length;
var i__40775__auto___51518 = (0);
while(true){
if((i__40775__auto___51518 < len__40774__auto___51517)){
args__40781__auto__.push((arguments[i__40775__auto___51518]));

var G__51519 = (i__40775__auto___51518 + (1));
i__40775__auto___51518 = G__51519;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq51516){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51516));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51521 = arguments.length;
var i__40775__auto___51522 = (0);
while(true){
if((i__40775__auto___51522 < len__40774__auto___51521)){
args__40781__auto__.push((arguments[i__40775__auto___51522]));

var G__51523 = (i__40775__auto___51522 + (1));
i__40775__auto___51522 = G__51523;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq51520){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51520));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51531 = arguments.length;
var i__40775__auto___51532 = (0);
while(true){
if((i__40775__auto___51532 < len__40774__auto___51531)){
args__40781__auto__.push((arguments[i__40775__auto___51532]));

var G__51533 = (i__40775__auto___51532 + (1));
i__40775__auto___51532 = G__51533;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((1) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40782__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__51527){
var vec__51528 = p__51527;
var state_override = cljs.core.nth.call(null,vec__51528,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__51528,state_override){
return (function (p1__51524_SHARP_){
return cljs.core.merge.call(null,p1__51524_SHARP_,state_override);
});})(vec__51528,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq51525){
var G__51526 = cljs.core.first.call(null,seq51525);
var seq51525__$1 = cljs.core.next.call(null,seq51525);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__51526,seq51525__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51535 = arguments.length;
var i__40775__auto___51536 = (0);
while(true){
if((i__40775__auto___51536 < len__40774__auto___51535)){
args__40781__auto__.push((arguments[i__40775__auto___51536]));

var G__51537 = (i__40775__auto___51536 + (1));
i__40775__auto___51536 = G__51537;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq51534){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51534));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51540 = arguments.length;
var i__40775__auto___51541 = (0);
while(true){
if((i__40775__auto___51541 < len__40774__auto___51540)){
args__40781__auto__.push((arguments[i__40775__auto___51541]));

var G__51542 = (i__40775__auto___51541 + (1));
i__40775__auto___51541 = G__51542;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((1) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40782__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq51538){
var G__51539 = cljs.core.first.call(null,seq51538);
var seq51538__$1 = cljs.core.next.call(null,seq51538);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__51539,seq51538__$1);
});


//# sourceMappingURL=format.js.map?rel=1502732697120
