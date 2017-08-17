// Compiled by ClojureScript 1.9.854 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__43067){
var map__43068 = p__43067;
var map__43068__$1 = ((((!((map__43068 == null)))?((((map__43068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43068):map__43068);
var replacement_transformers = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__43068,map__43068__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_43070 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__43071 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_43070,map__43068,map__43068__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__43074,transformer){
var vec__43075 = p__43074;
var text = cljs.core.nth.call(null,vec__43075,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__43075,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_43070,map__43068,map__43068__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__39610__auto__ = replacement_transformers;
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__43071,(0),null);
var new_state = cljs.core.nth.call(null,vec__43071,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_43070;
}});
;})(map__43068,map__43068__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__40781__auto__ = [];
var len__40774__auto___43080 = arguments.length;
var i__40775__auto___43081 = (0);
while(true){
if((i__40775__auto___43081 < len__40774__auto___43080)){
args__40781__auto__.push((arguments[i__40775__auto___43081]));

var G__43082 = (i__40775__auto___43081 + (1));
i__40775__auto___43081 = G__43082;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((1) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40782__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq43078){
var G__43079 = cljs.core.first.call(null,seq43078);
var seq43078__$1 = cljs.core.next.call(null,seq43078);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__43079,seq43078__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__43083_43087 = cljs.core.seq.call(null,lines);
var chunk__43084_43088 = null;
var count__43085_43089 = (0);
var i__43086_43090 = (0);
while(true){
if((i__43086_43090 < count__43085_43089)){
var line_43091 = cljs.core._nth.call(null,chunk__43084_43088,i__43086_43090);
markdown.links.parse_reference_link.call(null,line_43091,references);

var G__43092 = seq__43083_43087;
var G__43093 = chunk__43084_43088;
var G__43094 = count__43085_43089;
var G__43095 = (i__43086_43090 + (1));
seq__43083_43087 = G__43092;
chunk__43084_43088 = G__43093;
count__43085_43089 = G__43094;
i__43086_43090 = G__43095;
continue;
} else {
var temp__4657__auto___43096 = cljs.core.seq.call(null,seq__43083_43087);
if(temp__4657__auto___43096){
var seq__43083_43097__$1 = temp__4657__auto___43096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43083_43097__$1)){
var c__40444__auto___43098 = cljs.core.chunk_first.call(null,seq__43083_43097__$1);
var G__43099 = cljs.core.chunk_rest.call(null,seq__43083_43097__$1);
var G__43100 = c__40444__auto___43098;
var G__43101 = cljs.core.count.call(null,c__40444__auto___43098);
var G__43102 = (0);
seq__43083_43087 = G__43099;
chunk__43084_43088 = G__43100;
count__43085_43089 = G__43101;
i__43086_43090 = G__43102;
continue;
} else {
var line_43103 = cljs.core.first.call(null,seq__43083_43097__$1);
markdown.links.parse_reference_link.call(null,line_43103,references);

var G__43104 = cljs.core.next.call(null,seq__43083_43097__$1);
var G__43105 = null;
var G__43106 = (0);
var G__43107 = (0);
seq__43083_43087 = G__43104;
chunk__43084_43088 = G__43105;
count__43085_43089 = G__43106;
i__43086_43090 = G__43107;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__43108_43112 = cljs.core.seq.call(null,lines);
var chunk__43109_43113 = null;
var count__43110_43114 = (0);
var i__43111_43115 = (0);
while(true){
if((i__43111_43115 < count__43110_43114)){
var line_43116 = cljs.core._nth.call(null,chunk__43109_43113,i__43111_43115);
markdown.links.parse_footnote_link.call(null,line_43116,footnotes);

var G__43117 = seq__43108_43112;
var G__43118 = chunk__43109_43113;
var G__43119 = count__43110_43114;
var G__43120 = (i__43111_43115 + (1));
seq__43108_43112 = G__43117;
chunk__43109_43113 = G__43118;
count__43110_43114 = G__43119;
i__43111_43115 = G__43120;
continue;
} else {
var temp__4657__auto___43121 = cljs.core.seq.call(null,seq__43108_43112);
if(temp__4657__auto___43121){
var seq__43108_43122__$1 = temp__4657__auto___43121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43108_43122__$1)){
var c__40444__auto___43123 = cljs.core.chunk_first.call(null,seq__43108_43122__$1);
var G__43124 = cljs.core.chunk_rest.call(null,seq__43108_43122__$1);
var G__43125 = c__40444__auto___43123;
var G__43126 = cljs.core.count.call(null,c__40444__auto___43123);
var G__43127 = (0);
seq__43108_43112 = G__43124;
chunk__43109_43113 = G__43125;
count__43110_43114 = G__43126;
i__43111_43115 = G__43127;
continue;
} else {
var line_43128 = cljs.core.first.call(null,seq__43108_43122__$1);
markdown.links.parse_footnote_link.call(null,line_43128,footnotes);

var G__43129 = cljs.core.next.call(null,seq__43108_43122__$1);
var G__43130 = null;
var G__43131 = (0);
var G__43132 = (0);
seq__43108_43112 = G__43129;
chunk__43109_43113 = G__43130;
count__43110_43114 = G__43131;
i__43111_43115 = G__43132;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__43134 = cljs.core.split_with.call(null,(function (p1__43133_SHARP_){
return cljs.core.not_empty.call(null,p1__43133_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__43134,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__43134,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_43137 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_43138 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_43137,_STAR_formatter_STAR_43138){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_43137,_STAR_formatter_STAR_43138))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__43139 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__43139,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__43139,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__43145_43152 = lines__$1;
var vec__43146_43153 = G__43145_43152;
var seq__43147_43154 = cljs.core.seq.call(null,vec__43146_43153);
var first__43148_43155 = cljs.core.first.call(null,seq__43147_43154);
var seq__43147_43156__$1 = cljs.core.next.call(null,seq__43147_43154);
var line_43157 = first__43148_43155;
var more_43158 = seq__43147_43156__$1;
var state_43159 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__43145_43160__$1 = G__43145_43152;
var state_43161__$1 = state_43159;
while(true){
var vec__43149_43162 = G__43145_43160__$1;
var seq__43150_43163 = cljs.core.seq.call(null,vec__43149_43162);
var first__43151_43164 = cljs.core.first.call(null,seq__43150_43163);
var seq__43150_43165__$1 = cljs.core.next.call(null,seq__43150_43163);
var line_43166__$1 = first__43151_43164;
var more_43167__$1 = seq__43150_43165__$1;
var state_43168__$2 = state_43161__$1;
var line_43169__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_43168__$2))?"":line_43166__$1);
var state_43170__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_43168__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_43168__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_43168__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_43168__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_43168__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_43167__$1))){
var G__43171 = more_43167__$1;
var G__43172 = cljs.core.assoc.call(null,transformer.call(null,html,line_43169__$2,cljs.core.first.call(null,more_43167__$1),cljs.core.dissoc.call(null,state_43170__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_43169__$2));
G__43145_43160__$1 = G__43171;
state_43161__$1 = G__43172;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_43170__$3))),line_43169__$2,"",cljs.core.assoc.call(null,state_43170__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_43138;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_43137;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__40781__auto__ = [];
var len__40774__auto___43175 = arguments.length;
var i__40775__auto___43176 = (0);
while(true){
if((i__40775__auto___43176 < len__40774__auto___43175)){
args__40781__auto__.push((arguments[i__40775__auto___43176]));

var G__43177 = (i__40775__auto___43176 + (1));
i__40775__auto___43176 = G__43177;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((1) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40782__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq43173){
var G__43174 = cljs.core.first.call(null,seq43173);
var seq43173__$1 = cljs.core.next.call(null,seq43173);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__43174,seq43173__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__40781__auto__ = [];
var len__40774__auto___43180 = arguments.length;
var i__40775__auto___43181 = (0);
while(true){
if((i__40775__auto___43181 < len__40774__auto___43180)){
args__40781__auto__.push((arguments[i__40775__auto___43181]));

var G__43182 = (i__40775__auto___43181 + (1));
i__40775__auto___43181 = G__43182;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((1) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40782__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq43178){
var G__43179 = cljs.core.first.call(null,seq43178);
var seq43178__$1 = cljs.core.next.call(null,seq43178);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__43179,seq43178__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__40781__auto__ = [];
var len__40774__auto___43184 = arguments.length;
var i__40775__auto___43185 = (0);
while(true){
if((i__40775__auto___43185 < len__40774__auto___43184)){
args__40781__auto__.push((arguments[i__40775__auto___43185]));

var G__43186 = (i__40775__auto___43185 + (1));
i__40775__auto___43185 = G__43186;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq43183){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43183));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__40781__auto__ = [];
var len__40774__auto___43188 = arguments.length;
var i__40775__auto___43189 = (0);
while(true){
if((i__40775__auto___43189 < len__40774__auto___43188)){
args__40781__auto__.push((arguments[i__40775__auto___43189]));

var G__43190 = (i__40775__auto___43189 + (1));
i__40775__auto___43189 = G__43190;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq43187){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43187));
});


//# sourceMappingURL=core.js.map?rel=1502732683008
