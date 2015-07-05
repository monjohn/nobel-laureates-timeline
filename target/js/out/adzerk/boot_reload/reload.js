// Compiled by ClojureScript 0.0-2760 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.async.DeferredList');
goog.require('goog.Uri');
goog.require('clojure.string');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__11093_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__11093_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){
var sheets = document.styleSheets;
var seq__11098 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__11099 = null;
var count__11100 = (0);
var i__11101 = (0);
while(true){
if((i__11101 < count__11100)){
var s = cljs.core._nth.call(null,chunk__11099,i__11101);
var temp__4126__auto___11102 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___11102)){
var sheet_11103 = temp__4126__auto___11102;
var temp__4126__auto___11104__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_11103.href,changed);
if(cljs.core.truth_(temp__4126__auto___11104__$1)){
var href_uri_11105 = temp__4126__auto___11104__$1;
sheet_11103.ownerNode.href = href_uri_11105.makeUnique().toString();
} else {
}
} else {
}

var G__11106 = seq__11098;
var G__11107 = chunk__11099;
var G__11108 = count__11100;
var G__11109 = (i__11101 + (1));
seq__11098 = G__11106;
chunk__11099 = G__11107;
count__11100 = G__11108;
i__11101 = G__11109;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11098);
if(temp__4126__auto__){
var seq__11098__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11098__$1)){
var c__4522__auto__ = cljs.core.chunk_first.call(null,seq__11098__$1);
var G__11110 = cljs.core.chunk_rest.call(null,seq__11098__$1);
var G__11111 = c__4522__auto__;
var G__11112 = cljs.core.count.call(null,c__4522__auto__);
var G__11113 = (0);
seq__11098 = G__11110;
chunk__11099 = G__11111;
count__11100 = G__11112;
i__11101 = G__11113;
continue;
} else {
var s = cljs.core.first.call(null,seq__11098__$1);
var temp__4126__auto___11114__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___11114__$1)){
var sheet_11115 = temp__4126__auto___11114__$1;
var temp__4126__auto___11116__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_11115.href,changed);
if(cljs.core.truth_(temp__4126__auto___11116__$2)){
var href_uri_11117 = temp__4126__auto___11116__$2;
sheet_11115.ownerNode.href = href_uri_11117.makeUnique().toString();
} else {
}
} else {
}

var G__11118 = cljs.core.next.call(null,seq__11098__$1);
var G__11119 = null;
var G__11120 = (0);
var G__11121 = (0);
seq__11098 = G__11118;
chunk__11099 = G__11119;
count__11100 = G__11120;
i__11101 = G__11121;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){
var images = document.images;
var seq__11126 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__11127 = null;
var count__11128 = (0);
var i__11129 = (0);
while(true){
if((i__11129 < count__11128)){
var s = cljs.core._nth.call(null,chunk__11127,i__11129);
var temp__4126__auto___11130 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___11130)){
var image_11131 = temp__4126__auto___11130;
var temp__4126__auto___11132__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_11131.src,changed);
if(cljs.core.truth_(temp__4126__auto___11132__$1)){
var href_uri_11133 = temp__4126__auto___11132__$1;
image_11131.src = href_uri_11133.makeUnique().toString();
} else {
}
} else {
}

var G__11134 = seq__11126;
var G__11135 = chunk__11127;
var G__11136 = count__11128;
var G__11137 = (i__11129 + (1));
seq__11126 = G__11134;
chunk__11127 = G__11135;
count__11128 = G__11136;
i__11129 = G__11137;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11126);
if(temp__4126__auto__){
var seq__11126__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11126__$1)){
var c__4522__auto__ = cljs.core.chunk_first.call(null,seq__11126__$1);
var G__11138 = cljs.core.chunk_rest.call(null,seq__11126__$1);
var G__11139 = c__4522__auto__;
var G__11140 = cljs.core.count.call(null,c__4522__auto__);
var G__11141 = (0);
seq__11126 = G__11138;
chunk__11127 = G__11139;
count__11128 = G__11140;
i__11129 = G__11141;
continue;
} else {
var s = cljs.core.first.call(null,seq__11126__$1);
var temp__4126__auto___11142__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___11142__$1)){
var image_11143 = temp__4126__auto___11142__$1;
var temp__4126__auto___11144__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_11143.src,changed);
if(cljs.core.truth_(temp__4126__auto___11144__$2)){
var href_uri_11145 = temp__4126__auto___11144__$2;
image_11143.src = href_uri_11145.makeUnique().toString();
} else {
}
} else {
}

var G__11146 = cljs.core.next.call(null,seq__11126__$1);
var G__11147 = null;
var G__11148 = (0);
var G__11149 = (0);
seq__11126 = G__11146;
chunk__11127 = G__11147;
count__11128 = G__11148;
i__11129 = G__11149;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__11152){
var map__11154 = p__11152;
var map__11154__$1 = ((cljs.core.seq_QMARK_.call(null,map__11154))?cljs.core.apply.call(null,cljs.core.hash_map,map__11154):map__11154);
var on_jsload = cljs.core.get.call(null,map__11154__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__11154,map__11154__$1,on_jsload){
return (function (p1__11150_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__11150_SHARP_,".js");
});})(map__11154,map__11154__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__11154,map__11154__$1,on_jsload){
return (function (p1__11151_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__11151_SHARP_).makeUnique());
});})(js_files,map__11154,map__11154__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__11154,map__11154__$1,on_jsload){
return (function() { 
var G__11155__delegate = function (_){
return on_jsload.call(null);
};
var G__11155 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__11156__i = 0, G__11156__a = new Array(arguments.length -  0);
while (G__11156__i < G__11156__a.length) {G__11156__a[G__11156__i] = arguments[G__11156__i + 0]; ++G__11156__i;}
  _ = new cljs.core.IndexedSeq(G__11156__a,0);
} 
return G__11155__delegate.call(this,_);};
G__11155.cljs$lang$maxFixedArity = 0;
G__11155.cljs$lang$applyTo = (function (arglist__11157){
var _ = cljs.core.seq(arglist__11157);
return G__11155__delegate(_);
});
G__11155.cljs$core$IFn$_invoke$arity$variadic = G__11155__delegate;
return G__11155;
})()
;})(js_files,map__11154,map__11154__$1,on_jsload))
,((function (js_files,map__11154,map__11154__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__11154,map__11154__$1,on_jsload))
);
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__11162_11166 = cljs.core.seq.call(null,things_to_log);
var chunk__11163_11167 = null;
var count__11164_11168 = (0);
var i__11165_11169 = (0);
while(true){
if((i__11165_11169 < count__11164_11168)){
var t_11170 = cljs.core._nth.call(null,chunk__11163_11167,i__11165_11169);
console.log(t_11170);

var G__11171 = seq__11162_11166;
var G__11172 = chunk__11163_11167;
var G__11173 = count__11164_11168;
var G__11174 = (i__11165_11169 + (1));
seq__11162_11166 = G__11171;
chunk__11163_11167 = G__11172;
count__11164_11168 = G__11173;
i__11165_11169 = G__11174;
continue;
} else {
var temp__4126__auto___11175 = cljs.core.seq.call(null,seq__11162_11166);
if(temp__4126__auto___11175){
var seq__11162_11176__$1 = temp__4126__auto___11175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11162_11176__$1)){
var c__4522__auto___11177 = cljs.core.chunk_first.call(null,seq__11162_11176__$1);
var G__11178 = cljs.core.chunk_rest.call(null,seq__11162_11176__$1);
var G__11179 = c__4522__auto___11177;
var G__11180 = cljs.core.count.call(null,c__4522__auto___11177);
var G__11181 = (0);
seq__11162_11166 = G__11178;
chunk__11163_11167 = G__11179;
count__11164_11168 = G__11180;
i__11165_11169 = G__11181;
continue;
} else {
var t_11182 = cljs.core.first.call(null,seq__11162_11176__$1);
console.log(t_11182);

var G__11183 = cljs.core.next.call(null,seq__11162_11176__$1);
var G__11184 = null;
var G__11185 = (0);
var G__11186 = (0);
seq__11162_11166 = G__11183;
chunk__11163_11167 = G__11184;
count__11164_11168 = G__11185;
i__11165_11169 = G__11186;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__11188 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__11188,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__11188);

adzerk.boot_reload.reload.reload_css.call(null,G__11188);

adzerk.boot_reload.reload.reload_img.call(null,G__11188);

return G__11188;
});

//# sourceMappingURL=reload.js.map