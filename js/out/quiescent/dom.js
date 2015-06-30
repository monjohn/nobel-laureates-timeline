// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('quiescent.dom');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27278_28226 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27279_28227 = null;
var count__27280_28228 = (0);
var i__27281_28229 = (0);
while(true){
if((i__27281_28229 < count__27280_28228)){
var arg__14299__auto___28230 = chunk__27279_28227.cljs$core$IIndexed$_nth$arity$2(null,i__27281_28229);
a__14298__auto__.push(arg__14299__auto___28230);

var G__28231 = seq__27278_28226;
var G__28232 = chunk__27279_28227;
var G__28233 = count__27280_28228;
var G__28234 = (i__27281_28229 + (1));
seq__27278_28226 = G__28231;
chunk__27279_28227 = G__28232;
count__27280_28228 = G__28233;
i__27281_28229 = G__28234;
continue;
} else {
var temp__4126__auto___28235 = cljs.core.seq(seq__27278_28226);
if(temp__4126__auto___28235){
var seq__27278_28236__$1 = temp__4126__auto___28235;
if(cljs.core.chunked_seq_QMARK_(seq__27278_28236__$1)){
var c__4522__auto___28237 = cljs.core.chunk_first(seq__27278_28236__$1);
var G__28238 = cljs.core.chunk_rest(seq__27278_28236__$1);
var G__28239 = c__4522__auto___28237;
var G__28240 = cljs.core.count(c__4522__auto___28237);
var G__28241 = (0);
seq__27278_28226 = G__28238;
chunk__27279_28227 = G__28239;
count__27280_28228 = G__28240;
i__27281_28229 = G__28241;
continue;
} else {
var arg__14299__auto___28242 = cljs.core.first(seq__27278_28236__$1);
a__14298__auto__.push(arg__14299__auto___28242);

var G__28243 = cljs.core.next(seq__27278_28236__$1);
var G__28244 = null;
var G__28245 = (0);
var G__28246 = (0);
seq__27278_28226 = G__28243;
chunk__27279_28227 = G__28244;
count__27280_28228 = G__28245;
i__27281_28229 = G__28246;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,a__14298__auto__);
};
var a = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28247__i = 0, G__28247__a = new Array(arguments.length -  0);
while (G__28247__i < G__28247__a.length) {G__28247__a[G__28247__i] = arguments[G__28247__i + 0]; ++G__28247__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28247__a,0);
} 
return a__delegate.call(this,args__14297__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__28248){
var args__14297__auto__ = cljs.core.seq(arglist__28248);
return a__delegate(args__14297__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27286_28249 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27287_28250 = null;
var count__27288_28251 = (0);
var i__27289_28252 = (0);
while(true){
if((i__27289_28252 < count__27288_28251)){
var arg__14299__auto___28253 = chunk__27287_28250.cljs$core$IIndexed$_nth$arity$2(null,i__27289_28252);
a__14298__auto__.push(arg__14299__auto___28253);

var G__28254 = seq__27286_28249;
var G__28255 = chunk__27287_28250;
var G__28256 = count__27288_28251;
var G__28257 = (i__27289_28252 + (1));
seq__27286_28249 = G__28254;
chunk__27287_28250 = G__28255;
count__27288_28251 = G__28256;
i__27289_28252 = G__28257;
continue;
} else {
var temp__4126__auto___28258 = cljs.core.seq(seq__27286_28249);
if(temp__4126__auto___28258){
var seq__27286_28259__$1 = temp__4126__auto___28258;
if(cljs.core.chunked_seq_QMARK_(seq__27286_28259__$1)){
var c__4522__auto___28260 = cljs.core.chunk_first(seq__27286_28259__$1);
var G__28261 = cljs.core.chunk_rest(seq__27286_28259__$1);
var G__28262 = c__4522__auto___28260;
var G__28263 = cljs.core.count(c__4522__auto___28260);
var G__28264 = (0);
seq__27286_28249 = G__28261;
chunk__27287_28250 = G__28262;
count__27288_28251 = G__28263;
i__27289_28252 = G__28264;
continue;
} else {
var arg__14299__auto___28265 = cljs.core.first(seq__27286_28259__$1);
a__14298__auto__.push(arg__14299__auto___28265);

var G__28266 = cljs.core.next(seq__27286_28259__$1);
var G__28267 = null;
var G__28268 = (0);
var G__28269 = (0);
seq__27286_28249 = G__28266;
chunk__27287_28250 = G__28267;
count__27288_28251 = G__28268;
i__27289_28252 = G__28269;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,a__14298__auto__);
};
var abbr = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28270__i = 0, G__28270__a = new Array(arguments.length -  0);
while (G__28270__i < G__28270__a.length) {G__28270__a[G__28270__i] = arguments[G__28270__i + 0]; ++G__28270__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28270__a,0);
} 
return abbr__delegate.call(this,args__14297__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__28271){
var args__14297__auto__ = cljs.core.seq(arglist__28271);
return abbr__delegate(args__14297__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27294_28272 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27295_28273 = null;
var count__27296_28274 = (0);
var i__27297_28275 = (0);
while(true){
if((i__27297_28275 < count__27296_28274)){
var arg__14299__auto___28276 = chunk__27295_28273.cljs$core$IIndexed$_nth$arity$2(null,i__27297_28275);
a__14298__auto__.push(arg__14299__auto___28276);

var G__28277 = seq__27294_28272;
var G__28278 = chunk__27295_28273;
var G__28279 = count__27296_28274;
var G__28280 = (i__27297_28275 + (1));
seq__27294_28272 = G__28277;
chunk__27295_28273 = G__28278;
count__27296_28274 = G__28279;
i__27297_28275 = G__28280;
continue;
} else {
var temp__4126__auto___28281 = cljs.core.seq(seq__27294_28272);
if(temp__4126__auto___28281){
var seq__27294_28282__$1 = temp__4126__auto___28281;
if(cljs.core.chunked_seq_QMARK_(seq__27294_28282__$1)){
var c__4522__auto___28283 = cljs.core.chunk_first(seq__27294_28282__$1);
var G__28284 = cljs.core.chunk_rest(seq__27294_28282__$1);
var G__28285 = c__4522__auto___28283;
var G__28286 = cljs.core.count(c__4522__auto___28283);
var G__28287 = (0);
seq__27294_28272 = G__28284;
chunk__27295_28273 = G__28285;
count__27296_28274 = G__28286;
i__27297_28275 = G__28287;
continue;
} else {
var arg__14299__auto___28288 = cljs.core.first(seq__27294_28282__$1);
a__14298__auto__.push(arg__14299__auto___28288);

var G__28289 = cljs.core.next(seq__27294_28282__$1);
var G__28290 = null;
var G__28291 = (0);
var G__28292 = (0);
seq__27294_28272 = G__28289;
chunk__27295_28273 = G__28290;
count__27296_28274 = G__28291;
i__27297_28275 = G__28292;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,a__14298__auto__);
};
var address = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28293__i = 0, G__28293__a = new Array(arguments.length -  0);
while (G__28293__i < G__28293__a.length) {G__28293__a[G__28293__i] = arguments[G__28293__i + 0]; ++G__28293__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28293__a,0);
} 
return address__delegate.call(this,args__14297__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__28294){
var args__14297__auto__ = cljs.core.seq(arglist__28294);
return address__delegate(args__14297__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27302_28295 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27303_28296 = null;
var count__27304_28297 = (0);
var i__27305_28298 = (0);
while(true){
if((i__27305_28298 < count__27304_28297)){
var arg__14299__auto___28299 = chunk__27303_28296.cljs$core$IIndexed$_nth$arity$2(null,i__27305_28298);
a__14298__auto__.push(arg__14299__auto___28299);

var G__28300 = seq__27302_28295;
var G__28301 = chunk__27303_28296;
var G__28302 = count__27304_28297;
var G__28303 = (i__27305_28298 + (1));
seq__27302_28295 = G__28300;
chunk__27303_28296 = G__28301;
count__27304_28297 = G__28302;
i__27305_28298 = G__28303;
continue;
} else {
var temp__4126__auto___28304 = cljs.core.seq(seq__27302_28295);
if(temp__4126__auto___28304){
var seq__27302_28305__$1 = temp__4126__auto___28304;
if(cljs.core.chunked_seq_QMARK_(seq__27302_28305__$1)){
var c__4522__auto___28306 = cljs.core.chunk_first(seq__27302_28305__$1);
var G__28307 = cljs.core.chunk_rest(seq__27302_28305__$1);
var G__28308 = c__4522__auto___28306;
var G__28309 = cljs.core.count(c__4522__auto___28306);
var G__28310 = (0);
seq__27302_28295 = G__28307;
chunk__27303_28296 = G__28308;
count__27304_28297 = G__28309;
i__27305_28298 = G__28310;
continue;
} else {
var arg__14299__auto___28311 = cljs.core.first(seq__27302_28305__$1);
a__14298__auto__.push(arg__14299__auto___28311);

var G__28312 = cljs.core.next(seq__27302_28305__$1);
var G__28313 = null;
var G__28314 = (0);
var G__28315 = (0);
seq__27302_28295 = G__28312;
chunk__27303_28296 = G__28313;
count__27304_28297 = G__28314;
i__27305_28298 = G__28315;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,a__14298__auto__);
};
var area = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28316__i = 0, G__28316__a = new Array(arguments.length -  0);
while (G__28316__i < G__28316__a.length) {G__28316__a[G__28316__i] = arguments[G__28316__i + 0]; ++G__28316__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28316__a,0);
} 
return area__delegate.call(this,args__14297__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__28317){
var args__14297__auto__ = cljs.core.seq(arglist__28317);
return area__delegate(args__14297__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27310_28318 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27311_28319 = null;
var count__27312_28320 = (0);
var i__27313_28321 = (0);
while(true){
if((i__27313_28321 < count__27312_28320)){
var arg__14299__auto___28322 = chunk__27311_28319.cljs$core$IIndexed$_nth$arity$2(null,i__27313_28321);
a__14298__auto__.push(arg__14299__auto___28322);

var G__28323 = seq__27310_28318;
var G__28324 = chunk__27311_28319;
var G__28325 = count__27312_28320;
var G__28326 = (i__27313_28321 + (1));
seq__27310_28318 = G__28323;
chunk__27311_28319 = G__28324;
count__27312_28320 = G__28325;
i__27313_28321 = G__28326;
continue;
} else {
var temp__4126__auto___28327 = cljs.core.seq(seq__27310_28318);
if(temp__4126__auto___28327){
var seq__27310_28328__$1 = temp__4126__auto___28327;
if(cljs.core.chunked_seq_QMARK_(seq__27310_28328__$1)){
var c__4522__auto___28329 = cljs.core.chunk_first(seq__27310_28328__$1);
var G__28330 = cljs.core.chunk_rest(seq__27310_28328__$1);
var G__28331 = c__4522__auto___28329;
var G__28332 = cljs.core.count(c__4522__auto___28329);
var G__28333 = (0);
seq__27310_28318 = G__28330;
chunk__27311_28319 = G__28331;
count__27312_28320 = G__28332;
i__27313_28321 = G__28333;
continue;
} else {
var arg__14299__auto___28334 = cljs.core.first(seq__27310_28328__$1);
a__14298__auto__.push(arg__14299__auto___28334);

var G__28335 = cljs.core.next(seq__27310_28328__$1);
var G__28336 = null;
var G__28337 = (0);
var G__28338 = (0);
seq__27310_28318 = G__28335;
chunk__27311_28319 = G__28336;
count__27312_28320 = G__28337;
i__27313_28321 = G__28338;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,a__14298__auto__);
};
var article = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28339__i = 0, G__28339__a = new Array(arguments.length -  0);
while (G__28339__i < G__28339__a.length) {G__28339__a[G__28339__i] = arguments[G__28339__i + 0]; ++G__28339__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28339__a,0);
} 
return article__delegate.call(this,args__14297__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__28340){
var args__14297__auto__ = cljs.core.seq(arglist__28340);
return article__delegate(args__14297__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27318_28341 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27319_28342 = null;
var count__27320_28343 = (0);
var i__27321_28344 = (0);
while(true){
if((i__27321_28344 < count__27320_28343)){
var arg__14299__auto___28345 = chunk__27319_28342.cljs$core$IIndexed$_nth$arity$2(null,i__27321_28344);
a__14298__auto__.push(arg__14299__auto___28345);

var G__28346 = seq__27318_28341;
var G__28347 = chunk__27319_28342;
var G__28348 = count__27320_28343;
var G__28349 = (i__27321_28344 + (1));
seq__27318_28341 = G__28346;
chunk__27319_28342 = G__28347;
count__27320_28343 = G__28348;
i__27321_28344 = G__28349;
continue;
} else {
var temp__4126__auto___28350 = cljs.core.seq(seq__27318_28341);
if(temp__4126__auto___28350){
var seq__27318_28351__$1 = temp__4126__auto___28350;
if(cljs.core.chunked_seq_QMARK_(seq__27318_28351__$1)){
var c__4522__auto___28352 = cljs.core.chunk_first(seq__27318_28351__$1);
var G__28353 = cljs.core.chunk_rest(seq__27318_28351__$1);
var G__28354 = c__4522__auto___28352;
var G__28355 = cljs.core.count(c__4522__auto___28352);
var G__28356 = (0);
seq__27318_28341 = G__28353;
chunk__27319_28342 = G__28354;
count__27320_28343 = G__28355;
i__27321_28344 = G__28356;
continue;
} else {
var arg__14299__auto___28357 = cljs.core.first(seq__27318_28351__$1);
a__14298__auto__.push(arg__14299__auto___28357);

var G__28358 = cljs.core.next(seq__27318_28351__$1);
var G__28359 = null;
var G__28360 = (0);
var G__28361 = (0);
seq__27318_28341 = G__28358;
chunk__27319_28342 = G__28359;
count__27320_28343 = G__28360;
i__27321_28344 = G__28361;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,a__14298__auto__);
};
var aside = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28362__i = 0, G__28362__a = new Array(arguments.length -  0);
while (G__28362__i < G__28362__a.length) {G__28362__a[G__28362__i] = arguments[G__28362__i + 0]; ++G__28362__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28362__a,0);
} 
return aside__delegate.call(this,args__14297__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__28363){
var args__14297__auto__ = cljs.core.seq(arglist__28363);
return aside__delegate(args__14297__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27326_28364 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27327_28365 = null;
var count__27328_28366 = (0);
var i__27329_28367 = (0);
while(true){
if((i__27329_28367 < count__27328_28366)){
var arg__14299__auto___28368 = chunk__27327_28365.cljs$core$IIndexed$_nth$arity$2(null,i__27329_28367);
a__14298__auto__.push(arg__14299__auto___28368);

var G__28369 = seq__27326_28364;
var G__28370 = chunk__27327_28365;
var G__28371 = count__27328_28366;
var G__28372 = (i__27329_28367 + (1));
seq__27326_28364 = G__28369;
chunk__27327_28365 = G__28370;
count__27328_28366 = G__28371;
i__27329_28367 = G__28372;
continue;
} else {
var temp__4126__auto___28373 = cljs.core.seq(seq__27326_28364);
if(temp__4126__auto___28373){
var seq__27326_28374__$1 = temp__4126__auto___28373;
if(cljs.core.chunked_seq_QMARK_(seq__27326_28374__$1)){
var c__4522__auto___28375 = cljs.core.chunk_first(seq__27326_28374__$1);
var G__28376 = cljs.core.chunk_rest(seq__27326_28374__$1);
var G__28377 = c__4522__auto___28375;
var G__28378 = cljs.core.count(c__4522__auto___28375);
var G__28379 = (0);
seq__27326_28364 = G__28376;
chunk__27327_28365 = G__28377;
count__27328_28366 = G__28378;
i__27329_28367 = G__28379;
continue;
} else {
var arg__14299__auto___28380 = cljs.core.first(seq__27326_28374__$1);
a__14298__auto__.push(arg__14299__auto___28380);

var G__28381 = cljs.core.next(seq__27326_28374__$1);
var G__28382 = null;
var G__28383 = (0);
var G__28384 = (0);
seq__27326_28364 = G__28381;
chunk__27327_28365 = G__28382;
count__27328_28366 = G__28383;
i__27329_28367 = G__28384;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,a__14298__auto__);
};
var audio = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28385__i = 0, G__28385__a = new Array(arguments.length -  0);
while (G__28385__i < G__28385__a.length) {G__28385__a[G__28385__i] = arguments[G__28385__i + 0]; ++G__28385__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28385__a,0);
} 
return audio__delegate.call(this,args__14297__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__28386){
var args__14297__auto__ = cljs.core.seq(arglist__28386);
return audio__delegate(args__14297__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27334_28387 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27335_28388 = null;
var count__27336_28389 = (0);
var i__27337_28390 = (0);
while(true){
if((i__27337_28390 < count__27336_28389)){
var arg__14299__auto___28391 = chunk__27335_28388.cljs$core$IIndexed$_nth$arity$2(null,i__27337_28390);
a__14298__auto__.push(arg__14299__auto___28391);

var G__28392 = seq__27334_28387;
var G__28393 = chunk__27335_28388;
var G__28394 = count__27336_28389;
var G__28395 = (i__27337_28390 + (1));
seq__27334_28387 = G__28392;
chunk__27335_28388 = G__28393;
count__27336_28389 = G__28394;
i__27337_28390 = G__28395;
continue;
} else {
var temp__4126__auto___28396 = cljs.core.seq(seq__27334_28387);
if(temp__4126__auto___28396){
var seq__27334_28397__$1 = temp__4126__auto___28396;
if(cljs.core.chunked_seq_QMARK_(seq__27334_28397__$1)){
var c__4522__auto___28398 = cljs.core.chunk_first(seq__27334_28397__$1);
var G__28399 = cljs.core.chunk_rest(seq__27334_28397__$1);
var G__28400 = c__4522__auto___28398;
var G__28401 = cljs.core.count(c__4522__auto___28398);
var G__28402 = (0);
seq__27334_28387 = G__28399;
chunk__27335_28388 = G__28400;
count__27336_28389 = G__28401;
i__27337_28390 = G__28402;
continue;
} else {
var arg__14299__auto___28403 = cljs.core.first(seq__27334_28397__$1);
a__14298__auto__.push(arg__14299__auto___28403);

var G__28404 = cljs.core.next(seq__27334_28397__$1);
var G__28405 = null;
var G__28406 = (0);
var G__28407 = (0);
seq__27334_28387 = G__28404;
chunk__27335_28388 = G__28405;
count__27336_28389 = G__28406;
i__27337_28390 = G__28407;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,a__14298__auto__);
};
var b = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28408__i = 0, G__28408__a = new Array(arguments.length -  0);
while (G__28408__i < G__28408__a.length) {G__28408__a[G__28408__i] = arguments[G__28408__i + 0]; ++G__28408__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28408__a,0);
} 
return b__delegate.call(this,args__14297__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__28409){
var args__14297__auto__ = cljs.core.seq(arglist__28409);
return b__delegate(args__14297__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27342_28410 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27343_28411 = null;
var count__27344_28412 = (0);
var i__27345_28413 = (0);
while(true){
if((i__27345_28413 < count__27344_28412)){
var arg__14299__auto___28414 = chunk__27343_28411.cljs$core$IIndexed$_nth$arity$2(null,i__27345_28413);
a__14298__auto__.push(arg__14299__auto___28414);

var G__28415 = seq__27342_28410;
var G__28416 = chunk__27343_28411;
var G__28417 = count__27344_28412;
var G__28418 = (i__27345_28413 + (1));
seq__27342_28410 = G__28415;
chunk__27343_28411 = G__28416;
count__27344_28412 = G__28417;
i__27345_28413 = G__28418;
continue;
} else {
var temp__4126__auto___28419 = cljs.core.seq(seq__27342_28410);
if(temp__4126__auto___28419){
var seq__27342_28420__$1 = temp__4126__auto___28419;
if(cljs.core.chunked_seq_QMARK_(seq__27342_28420__$1)){
var c__4522__auto___28421 = cljs.core.chunk_first(seq__27342_28420__$1);
var G__28422 = cljs.core.chunk_rest(seq__27342_28420__$1);
var G__28423 = c__4522__auto___28421;
var G__28424 = cljs.core.count(c__4522__auto___28421);
var G__28425 = (0);
seq__27342_28410 = G__28422;
chunk__27343_28411 = G__28423;
count__27344_28412 = G__28424;
i__27345_28413 = G__28425;
continue;
} else {
var arg__14299__auto___28426 = cljs.core.first(seq__27342_28420__$1);
a__14298__auto__.push(arg__14299__auto___28426);

var G__28427 = cljs.core.next(seq__27342_28420__$1);
var G__28428 = null;
var G__28429 = (0);
var G__28430 = (0);
seq__27342_28410 = G__28427;
chunk__27343_28411 = G__28428;
count__27344_28412 = G__28429;
i__27345_28413 = G__28430;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,a__14298__auto__);
};
var base = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28431__i = 0, G__28431__a = new Array(arguments.length -  0);
while (G__28431__i < G__28431__a.length) {G__28431__a[G__28431__i] = arguments[G__28431__i + 0]; ++G__28431__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28431__a,0);
} 
return base__delegate.call(this,args__14297__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__28432){
var args__14297__auto__ = cljs.core.seq(arglist__28432);
return base__delegate(args__14297__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27350_28433 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27351_28434 = null;
var count__27352_28435 = (0);
var i__27353_28436 = (0);
while(true){
if((i__27353_28436 < count__27352_28435)){
var arg__14299__auto___28437 = chunk__27351_28434.cljs$core$IIndexed$_nth$arity$2(null,i__27353_28436);
a__14298__auto__.push(arg__14299__auto___28437);

var G__28438 = seq__27350_28433;
var G__28439 = chunk__27351_28434;
var G__28440 = count__27352_28435;
var G__28441 = (i__27353_28436 + (1));
seq__27350_28433 = G__28438;
chunk__27351_28434 = G__28439;
count__27352_28435 = G__28440;
i__27353_28436 = G__28441;
continue;
} else {
var temp__4126__auto___28442 = cljs.core.seq(seq__27350_28433);
if(temp__4126__auto___28442){
var seq__27350_28443__$1 = temp__4126__auto___28442;
if(cljs.core.chunked_seq_QMARK_(seq__27350_28443__$1)){
var c__4522__auto___28444 = cljs.core.chunk_first(seq__27350_28443__$1);
var G__28445 = cljs.core.chunk_rest(seq__27350_28443__$1);
var G__28446 = c__4522__auto___28444;
var G__28447 = cljs.core.count(c__4522__auto___28444);
var G__28448 = (0);
seq__27350_28433 = G__28445;
chunk__27351_28434 = G__28446;
count__27352_28435 = G__28447;
i__27353_28436 = G__28448;
continue;
} else {
var arg__14299__auto___28449 = cljs.core.first(seq__27350_28443__$1);
a__14298__auto__.push(arg__14299__auto___28449);

var G__28450 = cljs.core.next(seq__27350_28443__$1);
var G__28451 = null;
var G__28452 = (0);
var G__28453 = (0);
seq__27350_28433 = G__28450;
chunk__27351_28434 = G__28451;
count__27352_28435 = G__28452;
i__27353_28436 = G__28453;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,a__14298__auto__);
};
var bdi = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28454__i = 0, G__28454__a = new Array(arguments.length -  0);
while (G__28454__i < G__28454__a.length) {G__28454__a[G__28454__i] = arguments[G__28454__i + 0]; ++G__28454__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28454__a,0);
} 
return bdi__delegate.call(this,args__14297__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__28455){
var args__14297__auto__ = cljs.core.seq(arglist__28455);
return bdi__delegate(args__14297__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27358_28456 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27359_28457 = null;
var count__27360_28458 = (0);
var i__27361_28459 = (0);
while(true){
if((i__27361_28459 < count__27360_28458)){
var arg__14299__auto___28460 = chunk__27359_28457.cljs$core$IIndexed$_nth$arity$2(null,i__27361_28459);
a__14298__auto__.push(arg__14299__auto___28460);

var G__28461 = seq__27358_28456;
var G__28462 = chunk__27359_28457;
var G__28463 = count__27360_28458;
var G__28464 = (i__27361_28459 + (1));
seq__27358_28456 = G__28461;
chunk__27359_28457 = G__28462;
count__27360_28458 = G__28463;
i__27361_28459 = G__28464;
continue;
} else {
var temp__4126__auto___28465 = cljs.core.seq(seq__27358_28456);
if(temp__4126__auto___28465){
var seq__27358_28466__$1 = temp__4126__auto___28465;
if(cljs.core.chunked_seq_QMARK_(seq__27358_28466__$1)){
var c__4522__auto___28467 = cljs.core.chunk_first(seq__27358_28466__$1);
var G__28468 = cljs.core.chunk_rest(seq__27358_28466__$1);
var G__28469 = c__4522__auto___28467;
var G__28470 = cljs.core.count(c__4522__auto___28467);
var G__28471 = (0);
seq__27358_28456 = G__28468;
chunk__27359_28457 = G__28469;
count__27360_28458 = G__28470;
i__27361_28459 = G__28471;
continue;
} else {
var arg__14299__auto___28472 = cljs.core.first(seq__27358_28466__$1);
a__14298__auto__.push(arg__14299__auto___28472);

var G__28473 = cljs.core.next(seq__27358_28466__$1);
var G__28474 = null;
var G__28475 = (0);
var G__28476 = (0);
seq__27358_28456 = G__28473;
chunk__27359_28457 = G__28474;
count__27360_28458 = G__28475;
i__27361_28459 = G__28476;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,a__14298__auto__);
};
var bdo = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28477__i = 0, G__28477__a = new Array(arguments.length -  0);
while (G__28477__i < G__28477__a.length) {G__28477__a[G__28477__i] = arguments[G__28477__i + 0]; ++G__28477__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28477__a,0);
} 
return bdo__delegate.call(this,args__14297__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__28478){
var args__14297__auto__ = cljs.core.seq(arglist__28478);
return bdo__delegate(args__14297__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27366_28479 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27367_28480 = null;
var count__27368_28481 = (0);
var i__27369_28482 = (0);
while(true){
if((i__27369_28482 < count__27368_28481)){
var arg__14299__auto___28483 = chunk__27367_28480.cljs$core$IIndexed$_nth$arity$2(null,i__27369_28482);
a__14298__auto__.push(arg__14299__auto___28483);

var G__28484 = seq__27366_28479;
var G__28485 = chunk__27367_28480;
var G__28486 = count__27368_28481;
var G__28487 = (i__27369_28482 + (1));
seq__27366_28479 = G__28484;
chunk__27367_28480 = G__28485;
count__27368_28481 = G__28486;
i__27369_28482 = G__28487;
continue;
} else {
var temp__4126__auto___28488 = cljs.core.seq(seq__27366_28479);
if(temp__4126__auto___28488){
var seq__27366_28489__$1 = temp__4126__auto___28488;
if(cljs.core.chunked_seq_QMARK_(seq__27366_28489__$1)){
var c__4522__auto___28490 = cljs.core.chunk_first(seq__27366_28489__$1);
var G__28491 = cljs.core.chunk_rest(seq__27366_28489__$1);
var G__28492 = c__4522__auto___28490;
var G__28493 = cljs.core.count(c__4522__auto___28490);
var G__28494 = (0);
seq__27366_28479 = G__28491;
chunk__27367_28480 = G__28492;
count__27368_28481 = G__28493;
i__27369_28482 = G__28494;
continue;
} else {
var arg__14299__auto___28495 = cljs.core.first(seq__27366_28489__$1);
a__14298__auto__.push(arg__14299__auto___28495);

var G__28496 = cljs.core.next(seq__27366_28489__$1);
var G__28497 = null;
var G__28498 = (0);
var G__28499 = (0);
seq__27366_28479 = G__28496;
chunk__27367_28480 = G__28497;
count__27368_28481 = G__28498;
i__27369_28482 = G__28499;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,a__14298__auto__);
};
var big = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28500__i = 0, G__28500__a = new Array(arguments.length -  0);
while (G__28500__i < G__28500__a.length) {G__28500__a[G__28500__i] = arguments[G__28500__i + 0]; ++G__28500__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28500__a,0);
} 
return big__delegate.call(this,args__14297__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__28501){
var args__14297__auto__ = cljs.core.seq(arglist__28501);
return big__delegate(args__14297__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27374_28502 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27375_28503 = null;
var count__27376_28504 = (0);
var i__27377_28505 = (0);
while(true){
if((i__27377_28505 < count__27376_28504)){
var arg__14299__auto___28506 = chunk__27375_28503.cljs$core$IIndexed$_nth$arity$2(null,i__27377_28505);
a__14298__auto__.push(arg__14299__auto___28506);

var G__28507 = seq__27374_28502;
var G__28508 = chunk__27375_28503;
var G__28509 = count__27376_28504;
var G__28510 = (i__27377_28505 + (1));
seq__27374_28502 = G__28507;
chunk__27375_28503 = G__28508;
count__27376_28504 = G__28509;
i__27377_28505 = G__28510;
continue;
} else {
var temp__4126__auto___28511 = cljs.core.seq(seq__27374_28502);
if(temp__4126__auto___28511){
var seq__27374_28512__$1 = temp__4126__auto___28511;
if(cljs.core.chunked_seq_QMARK_(seq__27374_28512__$1)){
var c__4522__auto___28513 = cljs.core.chunk_first(seq__27374_28512__$1);
var G__28514 = cljs.core.chunk_rest(seq__27374_28512__$1);
var G__28515 = c__4522__auto___28513;
var G__28516 = cljs.core.count(c__4522__auto___28513);
var G__28517 = (0);
seq__27374_28502 = G__28514;
chunk__27375_28503 = G__28515;
count__27376_28504 = G__28516;
i__27377_28505 = G__28517;
continue;
} else {
var arg__14299__auto___28518 = cljs.core.first(seq__27374_28512__$1);
a__14298__auto__.push(arg__14299__auto___28518);

var G__28519 = cljs.core.next(seq__27374_28512__$1);
var G__28520 = null;
var G__28521 = (0);
var G__28522 = (0);
seq__27374_28502 = G__28519;
chunk__27375_28503 = G__28520;
count__27376_28504 = G__28521;
i__27377_28505 = G__28522;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,a__14298__auto__);
};
var blockquote = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28523__i = 0, G__28523__a = new Array(arguments.length -  0);
while (G__28523__i < G__28523__a.length) {G__28523__a[G__28523__i] = arguments[G__28523__i + 0]; ++G__28523__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28523__a,0);
} 
return blockquote__delegate.call(this,args__14297__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__28524){
var args__14297__auto__ = cljs.core.seq(arglist__28524);
return blockquote__delegate(args__14297__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27382_28525 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27383_28526 = null;
var count__27384_28527 = (0);
var i__27385_28528 = (0);
while(true){
if((i__27385_28528 < count__27384_28527)){
var arg__14299__auto___28529 = chunk__27383_28526.cljs$core$IIndexed$_nth$arity$2(null,i__27385_28528);
a__14298__auto__.push(arg__14299__auto___28529);

var G__28530 = seq__27382_28525;
var G__28531 = chunk__27383_28526;
var G__28532 = count__27384_28527;
var G__28533 = (i__27385_28528 + (1));
seq__27382_28525 = G__28530;
chunk__27383_28526 = G__28531;
count__27384_28527 = G__28532;
i__27385_28528 = G__28533;
continue;
} else {
var temp__4126__auto___28534 = cljs.core.seq(seq__27382_28525);
if(temp__4126__auto___28534){
var seq__27382_28535__$1 = temp__4126__auto___28534;
if(cljs.core.chunked_seq_QMARK_(seq__27382_28535__$1)){
var c__4522__auto___28536 = cljs.core.chunk_first(seq__27382_28535__$1);
var G__28537 = cljs.core.chunk_rest(seq__27382_28535__$1);
var G__28538 = c__4522__auto___28536;
var G__28539 = cljs.core.count(c__4522__auto___28536);
var G__28540 = (0);
seq__27382_28525 = G__28537;
chunk__27383_28526 = G__28538;
count__27384_28527 = G__28539;
i__27385_28528 = G__28540;
continue;
} else {
var arg__14299__auto___28541 = cljs.core.first(seq__27382_28535__$1);
a__14298__auto__.push(arg__14299__auto___28541);

var G__28542 = cljs.core.next(seq__27382_28535__$1);
var G__28543 = null;
var G__28544 = (0);
var G__28545 = (0);
seq__27382_28525 = G__28542;
chunk__27383_28526 = G__28543;
count__27384_28527 = G__28544;
i__27385_28528 = G__28545;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,a__14298__auto__);
};
var body = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28546__i = 0, G__28546__a = new Array(arguments.length -  0);
while (G__28546__i < G__28546__a.length) {G__28546__a[G__28546__i] = arguments[G__28546__i + 0]; ++G__28546__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28546__a,0);
} 
return body__delegate.call(this,args__14297__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__28547){
var args__14297__auto__ = cljs.core.seq(arglist__28547);
return body__delegate(args__14297__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27390_28548 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27391_28549 = null;
var count__27392_28550 = (0);
var i__27393_28551 = (0);
while(true){
if((i__27393_28551 < count__27392_28550)){
var arg__14299__auto___28552 = chunk__27391_28549.cljs$core$IIndexed$_nth$arity$2(null,i__27393_28551);
a__14298__auto__.push(arg__14299__auto___28552);

var G__28553 = seq__27390_28548;
var G__28554 = chunk__27391_28549;
var G__28555 = count__27392_28550;
var G__28556 = (i__27393_28551 + (1));
seq__27390_28548 = G__28553;
chunk__27391_28549 = G__28554;
count__27392_28550 = G__28555;
i__27393_28551 = G__28556;
continue;
} else {
var temp__4126__auto___28557 = cljs.core.seq(seq__27390_28548);
if(temp__4126__auto___28557){
var seq__27390_28558__$1 = temp__4126__auto___28557;
if(cljs.core.chunked_seq_QMARK_(seq__27390_28558__$1)){
var c__4522__auto___28559 = cljs.core.chunk_first(seq__27390_28558__$1);
var G__28560 = cljs.core.chunk_rest(seq__27390_28558__$1);
var G__28561 = c__4522__auto___28559;
var G__28562 = cljs.core.count(c__4522__auto___28559);
var G__28563 = (0);
seq__27390_28548 = G__28560;
chunk__27391_28549 = G__28561;
count__27392_28550 = G__28562;
i__27393_28551 = G__28563;
continue;
} else {
var arg__14299__auto___28564 = cljs.core.first(seq__27390_28558__$1);
a__14298__auto__.push(arg__14299__auto___28564);

var G__28565 = cljs.core.next(seq__27390_28558__$1);
var G__28566 = null;
var G__28567 = (0);
var G__28568 = (0);
seq__27390_28548 = G__28565;
chunk__27391_28549 = G__28566;
count__27392_28550 = G__28567;
i__27393_28551 = G__28568;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,a__14298__auto__);
};
var br = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28569__i = 0, G__28569__a = new Array(arguments.length -  0);
while (G__28569__i < G__28569__a.length) {G__28569__a[G__28569__i] = arguments[G__28569__i + 0]; ++G__28569__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28569__a,0);
} 
return br__delegate.call(this,args__14297__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__28570){
var args__14297__auto__ = cljs.core.seq(arglist__28570);
return br__delegate(args__14297__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27398_28571 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27399_28572 = null;
var count__27400_28573 = (0);
var i__27401_28574 = (0);
while(true){
if((i__27401_28574 < count__27400_28573)){
var arg__14299__auto___28575 = chunk__27399_28572.cljs$core$IIndexed$_nth$arity$2(null,i__27401_28574);
a__14298__auto__.push(arg__14299__auto___28575);

var G__28576 = seq__27398_28571;
var G__28577 = chunk__27399_28572;
var G__28578 = count__27400_28573;
var G__28579 = (i__27401_28574 + (1));
seq__27398_28571 = G__28576;
chunk__27399_28572 = G__28577;
count__27400_28573 = G__28578;
i__27401_28574 = G__28579;
continue;
} else {
var temp__4126__auto___28580 = cljs.core.seq(seq__27398_28571);
if(temp__4126__auto___28580){
var seq__27398_28581__$1 = temp__4126__auto___28580;
if(cljs.core.chunked_seq_QMARK_(seq__27398_28581__$1)){
var c__4522__auto___28582 = cljs.core.chunk_first(seq__27398_28581__$1);
var G__28583 = cljs.core.chunk_rest(seq__27398_28581__$1);
var G__28584 = c__4522__auto___28582;
var G__28585 = cljs.core.count(c__4522__auto___28582);
var G__28586 = (0);
seq__27398_28571 = G__28583;
chunk__27399_28572 = G__28584;
count__27400_28573 = G__28585;
i__27401_28574 = G__28586;
continue;
} else {
var arg__14299__auto___28587 = cljs.core.first(seq__27398_28581__$1);
a__14298__auto__.push(arg__14299__auto___28587);

var G__28588 = cljs.core.next(seq__27398_28581__$1);
var G__28589 = null;
var G__28590 = (0);
var G__28591 = (0);
seq__27398_28571 = G__28588;
chunk__27399_28572 = G__28589;
count__27400_28573 = G__28590;
i__27401_28574 = G__28591;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,a__14298__auto__);
};
var button = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28592__i = 0, G__28592__a = new Array(arguments.length -  0);
while (G__28592__i < G__28592__a.length) {G__28592__a[G__28592__i] = arguments[G__28592__i + 0]; ++G__28592__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28592__a,0);
} 
return button__delegate.call(this,args__14297__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__28593){
var args__14297__auto__ = cljs.core.seq(arglist__28593);
return button__delegate(args__14297__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27406_28594 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27407_28595 = null;
var count__27408_28596 = (0);
var i__27409_28597 = (0);
while(true){
if((i__27409_28597 < count__27408_28596)){
var arg__14299__auto___28598 = chunk__27407_28595.cljs$core$IIndexed$_nth$arity$2(null,i__27409_28597);
a__14298__auto__.push(arg__14299__auto___28598);

var G__28599 = seq__27406_28594;
var G__28600 = chunk__27407_28595;
var G__28601 = count__27408_28596;
var G__28602 = (i__27409_28597 + (1));
seq__27406_28594 = G__28599;
chunk__27407_28595 = G__28600;
count__27408_28596 = G__28601;
i__27409_28597 = G__28602;
continue;
} else {
var temp__4126__auto___28603 = cljs.core.seq(seq__27406_28594);
if(temp__4126__auto___28603){
var seq__27406_28604__$1 = temp__4126__auto___28603;
if(cljs.core.chunked_seq_QMARK_(seq__27406_28604__$1)){
var c__4522__auto___28605 = cljs.core.chunk_first(seq__27406_28604__$1);
var G__28606 = cljs.core.chunk_rest(seq__27406_28604__$1);
var G__28607 = c__4522__auto___28605;
var G__28608 = cljs.core.count(c__4522__auto___28605);
var G__28609 = (0);
seq__27406_28594 = G__28606;
chunk__27407_28595 = G__28607;
count__27408_28596 = G__28608;
i__27409_28597 = G__28609;
continue;
} else {
var arg__14299__auto___28610 = cljs.core.first(seq__27406_28604__$1);
a__14298__auto__.push(arg__14299__auto___28610);

var G__28611 = cljs.core.next(seq__27406_28604__$1);
var G__28612 = null;
var G__28613 = (0);
var G__28614 = (0);
seq__27406_28594 = G__28611;
chunk__27407_28595 = G__28612;
count__27408_28596 = G__28613;
i__27409_28597 = G__28614;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,a__14298__auto__);
};
var canvas = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28615__i = 0, G__28615__a = new Array(arguments.length -  0);
while (G__28615__i < G__28615__a.length) {G__28615__a[G__28615__i] = arguments[G__28615__i + 0]; ++G__28615__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28615__a,0);
} 
return canvas__delegate.call(this,args__14297__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__28616){
var args__14297__auto__ = cljs.core.seq(arglist__28616);
return canvas__delegate(args__14297__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27414_28617 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27415_28618 = null;
var count__27416_28619 = (0);
var i__27417_28620 = (0);
while(true){
if((i__27417_28620 < count__27416_28619)){
var arg__14299__auto___28621 = chunk__27415_28618.cljs$core$IIndexed$_nth$arity$2(null,i__27417_28620);
a__14298__auto__.push(arg__14299__auto___28621);

var G__28622 = seq__27414_28617;
var G__28623 = chunk__27415_28618;
var G__28624 = count__27416_28619;
var G__28625 = (i__27417_28620 + (1));
seq__27414_28617 = G__28622;
chunk__27415_28618 = G__28623;
count__27416_28619 = G__28624;
i__27417_28620 = G__28625;
continue;
} else {
var temp__4126__auto___28626 = cljs.core.seq(seq__27414_28617);
if(temp__4126__auto___28626){
var seq__27414_28627__$1 = temp__4126__auto___28626;
if(cljs.core.chunked_seq_QMARK_(seq__27414_28627__$1)){
var c__4522__auto___28628 = cljs.core.chunk_first(seq__27414_28627__$1);
var G__28629 = cljs.core.chunk_rest(seq__27414_28627__$1);
var G__28630 = c__4522__auto___28628;
var G__28631 = cljs.core.count(c__4522__auto___28628);
var G__28632 = (0);
seq__27414_28617 = G__28629;
chunk__27415_28618 = G__28630;
count__27416_28619 = G__28631;
i__27417_28620 = G__28632;
continue;
} else {
var arg__14299__auto___28633 = cljs.core.first(seq__27414_28627__$1);
a__14298__auto__.push(arg__14299__auto___28633);

var G__28634 = cljs.core.next(seq__27414_28627__$1);
var G__28635 = null;
var G__28636 = (0);
var G__28637 = (0);
seq__27414_28617 = G__28634;
chunk__27415_28618 = G__28635;
count__27416_28619 = G__28636;
i__27417_28620 = G__28637;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,a__14298__auto__);
};
var caption = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28638__i = 0, G__28638__a = new Array(arguments.length -  0);
while (G__28638__i < G__28638__a.length) {G__28638__a[G__28638__i] = arguments[G__28638__i + 0]; ++G__28638__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28638__a,0);
} 
return caption__delegate.call(this,args__14297__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__28639){
var args__14297__auto__ = cljs.core.seq(arglist__28639);
return caption__delegate(args__14297__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27422_28640 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27423_28641 = null;
var count__27424_28642 = (0);
var i__27425_28643 = (0);
while(true){
if((i__27425_28643 < count__27424_28642)){
var arg__14299__auto___28644 = chunk__27423_28641.cljs$core$IIndexed$_nth$arity$2(null,i__27425_28643);
a__14298__auto__.push(arg__14299__auto___28644);

var G__28645 = seq__27422_28640;
var G__28646 = chunk__27423_28641;
var G__28647 = count__27424_28642;
var G__28648 = (i__27425_28643 + (1));
seq__27422_28640 = G__28645;
chunk__27423_28641 = G__28646;
count__27424_28642 = G__28647;
i__27425_28643 = G__28648;
continue;
} else {
var temp__4126__auto___28649 = cljs.core.seq(seq__27422_28640);
if(temp__4126__auto___28649){
var seq__27422_28650__$1 = temp__4126__auto___28649;
if(cljs.core.chunked_seq_QMARK_(seq__27422_28650__$1)){
var c__4522__auto___28651 = cljs.core.chunk_first(seq__27422_28650__$1);
var G__28652 = cljs.core.chunk_rest(seq__27422_28650__$1);
var G__28653 = c__4522__auto___28651;
var G__28654 = cljs.core.count(c__4522__auto___28651);
var G__28655 = (0);
seq__27422_28640 = G__28652;
chunk__27423_28641 = G__28653;
count__27424_28642 = G__28654;
i__27425_28643 = G__28655;
continue;
} else {
var arg__14299__auto___28656 = cljs.core.first(seq__27422_28650__$1);
a__14298__auto__.push(arg__14299__auto___28656);

var G__28657 = cljs.core.next(seq__27422_28650__$1);
var G__28658 = null;
var G__28659 = (0);
var G__28660 = (0);
seq__27422_28640 = G__28657;
chunk__27423_28641 = G__28658;
count__27424_28642 = G__28659;
i__27425_28643 = G__28660;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,a__14298__auto__);
};
var cite = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28661__i = 0, G__28661__a = new Array(arguments.length -  0);
while (G__28661__i < G__28661__a.length) {G__28661__a[G__28661__i] = arguments[G__28661__i + 0]; ++G__28661__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28661__a,0);
} 
return cite__delegate.call(this,args__14297__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__28662){
var args__14297__auto__ = cljs.core.seq(arglist__28662);
return cite__delegate(args__14297__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27430_28663 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27431_28664 = null;
var count__27432_28665 = (0);
var i__27433_28666 = (0);
while(true){
if((i__27433_28666 < count__27432_28665)){
var arg__14299__auto___28667 = chunk__27431_28664.cljs$core$IIndexed$_nth$arity$2(null,i__27433_28666);
a__14298__auto__.push(arg__14299__auto___28667);

var G__28668 = seq__27430_28663;
var G__28669 = chunk__27431_28664;
var G__28670 = count__27432_28665;
var G__28671 = (i__27433_28666 + (1));
seq__27430_28663 = G__28668;
chunk__27431_28664 = G__28669;
count__27432_28665 = G__28670;
i__27433_28666 = G__28671;
continue;
} else {
var temp__4126__auto___28672 = cljs.core.seq(seq__27430_28663);
if(temp__4126__auto___28672){
var seq__27430_28673__$1 = temp__4126__auto___28672;
if(cljs.core.chunked_seq_QMARK_(seq__27430_28673__$1)){
var c__4522__auto___28674 = cljs.core.chunk_first(seq__27430_28673__$1);
var G__28675 = cljs.core.chunk_rest(seq__27430_28673__$1);
var G__28676 = c__4522__auto___28674;
var G__28677 = cljs.core.count(c__4522__auto___28674);
var G__28678 = (0);
seq__27430_28663 = G__28675;
chunk__27431_28664 = G__28676;
count__27432_28665 = G__28677;
i__27433_28666 = G__28678;
continue;
} else {
var arg__14299__auto___28679 = cljs.core.first(seq__27430_28673__$1);
a__14298__auto__.push(arg__14299__auto___28679);

var G__28680 = cljs.core.next(seq__27430_28673__$1);
var G__28681 = null;
var G__28682 = (0);
var G__28683 = (0);
seq__27430_28663 = G__28680;
chunk__27431_28664 = G__28681;
count__27432_28665 = G__28682;
i__27433_28666 = G__28683;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,a__14298__auto__);
};
var code = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28684__i = 0, G__28684__a = new Array(arguments.length -  0);
while (G__28684__i < G__28684__a.length) {G__28684__a[G__28684__i] = arguments[G__28684__i + 0]; ++G__28684__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28684__a,0);
} 
return code__delegate.call(this,args__14297__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__28685){
var args__14297__auto__ = cljs.core.seq(arglist__28685);
return code__delegate(args__14297__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27438_28686 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27439_28687 = null;
var count__27440_28688 = (0);
var i__27441_28689 = (0);
while(true){
if((i__27441_28689 < count__27440_28688)){
var arg__14299__auto___28690 = chunk__27439_28687.cljs$core$IIndexed$_nth$arity$2(null,i__27441_28689);
a__14298__auto__.push(arg__14299__auto___28690);

var G__28691 = seq__27438_28686;
var G__28692 = chunk__27439_28687;
var G__28693 = count__27440_28688;
var G__28694 = (i__27441_28689 + (1));
seq__27438_28686 = G__28691;
chunk__27439_28687 = G__28692;
count__27440_28688 = G__28693;
i__27441_28689 = G__28694;
continue;
} else {
var temp__4126__auto___28695 = cljs.core.seq(seq__27438_28686);
if(temp__4126__auto___28695){
var seq__27438_28696__$1 = temp__4126__auto___28695;
if(cljs.core.chunked_seq_QMARK_(seq__27438_28696__$1)){
var c__4522__auto___28697 = cljs.core.chunk_first(seq__27438_28696__$1);
var G__28698 = cljs.core.chunk_rest(seq__27438_28696__$1);
var G__28699 = c__4522__auto___28697;
var G__28700 = cljs.core.count(c__4522__auto___28697);
var G__28701 = (0);
seq__27438_28686 = G__28698;
chunk__27439_28687 = G__28699;
count__27440_28688 = G__28700;
i__27441_28689 = G__28701;
continue;
} else {
var arg__14299__auto___28702 = cljs.core.first(seq__27438_28696__$1);
a__14298__auto__.push(arg__14299__auto___28702);

var G__28703 = cljs.core.next(seq__27438_28696__$1);
var G__28704 = null;
var G__28705 = (0);
var G__28706 = (0);
seq__27438_28686 = G__28703;
chunk__27439_28687 = G__28704;
count__27440_28688 = G__28705;
i__27441_28689 = G__28706;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,a__14298__auto__);
};
var col = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28707__i = 0, G__28707__a = new Array(arguments.length -  0);
while (G__28707__i < G__28707__a.length) {G__28707__a[G__28707__i] = arguments[G__28707__i + 0]; ++G__28707__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28707__a,0);
} 
return col__delegate.call(this,args__14297__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__28708){
var args__14297__auto__ = cljs.core.seq(arglist__28708);
return col__delegate(args__14297__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27446_28709 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27447_28710 = null;
var count__27448_28711 = (0);
var i__27449_28712 = (0);
while(true){
if((i__27449_28712 < count__27448_28711)){
var arg__14299__auto___28713 = chunk__27447_28710.cljs$core$IIndexed$_nth$arity$2(null,i__27449_28712);
a__14298__auto__.push(arg__14299__auto___28713);

var G__28714 = seq__27446_28709;
var G__28715 = chunk__27447_28710;
var G__28716 = count__27448_28711;
var G__28717 = (i__27449_28712 + (1));
seq__27446_28709 = G__28714;
chunk__27447_28710 = G__28715;
count__27448_28711 = G__28716;
i__27449_28712 = G__28717;
continue;
} else {
var temp__4126__auto___28718 = cljs.core.seq(seq__27446_28709);
if(temp__4126__auto___28718){
var seq__27446_28719__$1 = temp__4126__auto___28718;
if(cljs.core.chunked_seq_QMARK_(seq__27446_28719__$1)){
var c__4522__auto___28720 = cljs.core.chunk_first(seq__27446_28719__$1);
var G__28721 = cljs.core.chunk_rest(seq__27446_28719__$1);
var G__28722 = c__4522__auto___28720;
var G__28723 = cljs.core.count(c__4522__auto___28720);
var G__28724 = (0);
seq__27446_28709 = G__28721;
chunk__27447_28710 = G__28722;
count__27448_28711 = G__28723;
i__27449_28712 = G__28724;
continue;
} else {
var arg__14299__auto___28725 = cljs.core.first(seq__27446_28719__$1);
a__14298__auto__.push(arg__14299__auto___28725);

var G__28726 = cljs.core.next(seq__27446_28719__$1);
var G__28727 = null;
var G__28728 = (0);
var G__28729 = (0);
seq__27446_28709 = G__28726;
chunk__27447_28710 = G__28727;
count__27448_28711 = G__28728;
i__27449_28712 = G__28729;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,a__14298__auto__);
};
var colgroup = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28730__i = 0, G__28730__a = new Array(arguments.length -  0);
while (G__28730__i < G__28730__a.length) {G__28730__a[G__28730__i] = arguments[G__28730__i + 0]; ++G__28730__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28730__a,0);
} 
return colgroup__delegate.call(this,args__14297__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__28731){
var args__14297__auto__ = cljs.core.seq(arglist__28731);
return colgroup__delegate(args__14297__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27454_28732 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27455_28733 = null;
var count__27456_28734 = (0);
var i__27457_28735 = (0);
while(true){
if((i__27457_28735 < count__27456_28734)){
var arg__14299__auto___28736 = chunk__27455_28733.cljs$core$IIndexed$_nth$arity$2(null,i__27457_28735);
a__14298__auto__.push(arg__14299__auto___28736);

var G__28737 = seq__27454_28732;
var G__28738 = chunk__27455_28733;
var G__28739 = count__27456_28734;
var G__28740 = (i__27457_28735 + (1));
seq__27454_28732 = G__28737;
chunk__27455_28733 = G__28738;
count__27456_28734 = G__28739;
i__27457_28735 = G__28740;
continue;
} else {
var temp__4126__auto___28741 = cljs.core.seq(seq__27454_28732);
if(temp__4126__auto___28741){
var seq__27454_28742__$1 = temp__4126__auto___28741;
if(cljs.core.chunked_seq_QMARK_(seq__27454_28742__$1)){
var c__4522__auto___28743 = cljs.core.chunk_first(seq__27454_28742__$1);
var G__28744 = cljs.core.chunk_rest(seq__27454_28742__$1);
var G__28745 = c__4522__auto___28743;
var G__28746 = cljs.core.count(c__4522__auto___28743);
var G__28747 = (0);
seq__27454_28732 = G__28744;
chunk__27455_28733 = G__28745;
count__27456_28734 = G__28746;
i__27457_28735 = G__28747;
continue;
} else {
var arg__14299__auto___28748 = cljs.core.first(seq__27454_28742__$1);
a__14298__auto__.push(arg__14299__auto___28748);

var G__28749 = cljs.core.next(seq__27454_28742__$1);
var G__28750 = null;
var G__28751 = (0);
var G__28752 = (0);
seq__27454_28732 = G__28749;
chunk__27455_28733 = G__28750;
count__27456_28734 = G__28751;
i__27457_28735 = G__28752;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,a__14298__auto__);
};
var data = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28753__i = 0, G__28753__a = new Array(arguments.length -  0);
while (G__28753__i < G__28753__a.length) {G__28753__a[G__28753__i] = arguments[G__28753__i + 0]; ++G__28753__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28753__a,0);
} 
return data__delegate.call(this,args__14297__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__28754){
var args__14297__auto__ = cljs.core.seq(arglist__28754);
return data__delegate(args__14297__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27462_28755 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27463_28756 = null;
var count__27464_28757 = (0);
var i__27465_28758 = (0);
while(true){
if((i__27465_28758 < count__27464_28757)){
var arg__14299__auto___28759 = chunk__27463_28756.cljs$core$IIndexed$_nth$arity$2(null,i__27465_28758);
a__14298__auto__.push(arg__14299__auto___28759);

var G__28760 = seq__27462_28755;
var G__28761 = chunk__27463_28756;
var G__28762 = count__27464_28757;
var G__28763 = (i__27465_28758 + (1));
seq__27462_28755 = G__28760;
chunk__27463_28756 = G__28761;
count__27464_28757 = G__28762;
i__27465_28758 = G__28763;
continue;
} else {
var temp__4126__auto___28764 = cljs.core.seq(seq__27462_28755);
if(temp__4126__auto___28764){
var seq__27462_28765__$1 = temp__4126__auto___28764;
if(cljs.core.chunked_seq_QMARK_(seq__27462_28765__$1)){
var c__4522__auto___28766 = cljs.core.chunk_first(seq__27462_28765__$1);
var G__28767 = cljs.core.chunk_rest(seq__27462_28765__$1);
var G__28768 = c__4522__auto___28766;
var G__28769 = cljs.core.count(c__4522__auto___28766);
var G__28770 = (0);
seq__27462_28755 = G__28767;
chunk__27463_28756 = G__28768;
count__27464_28757 = G__28769;
i__27465_28758 = G__28770;
continue;
} else {
var arg__14299__auto___28771 = cljs.core.first(seq__27462_28765__$1);
a__14298__auto__.push(arg__14299__auto___28771);

var G__28772 = cljs.core.next(seq__27462_28765__$1);
var G__28773 = null;
var G__28774 = (0);
var G__28775 = (0);
seq__27462_28755 = G__28772;
chunk__27463_28756 = G__28773;
count__27464_28757 = G__28774;
i__27465_28758 = G__28775;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,a__14298__auto__);
};
var datalist = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28776__i = 0, G__28776__a = new Array(arguments.length -  0);
while (G__28776__i < G__28776__a.length) {G__28776__a[G__28776__i] = arguments[G__28776__i + 0]; ++G__28776__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28776__a,0);
} 
return datalist__delegate.call(this,args__14297__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__28777){
var args__14297__auto__ = cljs.core.seq(arglist__28777);
return datalist__delegate(args__14297__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27470_28778 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27471_28779 = null;
var count__27472_28780 = (0);
var i__27473_28781 = (0);
while(true){
if((i__27473_28781 < count__27472_28780)){
var arg__14299__auto___28782 = chunk__27471_28779.cljs$core$IIndexed$_nth$arity$2(null,i__27473_28781);
a__14298__auto__.push(arg__14299__auto___28782);

var G__28783 = seq__27470_28778;
var G__28784 = chunk__27471_28779;
var G__28785 = count__27472_28780;
var G__28786 = (i__27473_28781 + (1));
seq__27470_28778 = G__28783;
chunk__27471_28779 = G__28784;
count__27472_28780 = G__28785;
i__27473_28781 = G__28786;
continue;
} else {
var temp__4126__auto___28787 = cljs.core.seq(seq__27470_28778);
if(temp__4126__auto___28787){
var seq__27470_28788__$1 = temp__4126__auto___28787;
if(cljs.core.chunked_seq_QMARK_(seq__27470_28788__$1)){
var c__4522__auto___28789 = cljs.core.chunk_first(seq__27470_28788__$1);
var G__28790 = cljs.core.chunk_rest(seq__27470_28788__$1);
var G__28791 = c__4522__auto___28789;
var G__28792 = cljs.core.count(c__4522__auto___28789);
var G__28793 = (0);
seq__27470_28778 = G__28790;
chunk__27471_28779 = G__28791;
count__27472_28780 = G__28792;
i__27473_28781 = G__28793;
continue;
} else {
var arg__14299__auto___28794 = cljs.core.first(seq__27470_28788__$1);
a__14298__auto__.push(arg__14299__auto___28794);

var G__28795 = cljs.core.next(seq__27470_28788__$1);
var G__28796 = null;
var G__28797 = (0);
var G__28798 = (0);
seq__27470_28778 = G__28795;
chunk__27471_28779 = G__28796;
count__27472_28780 = G__28797;
i__27473_28781 = G__28798;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,a__14298__auto__);
};
var dd = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28799__i = 0, G__28799__a = new Array(arguments.length -  0);
while (G__28799__i < G__28799__a.length) {G__28799__a[G__28799__i] = arguments[G__28799__i + 0]; ++G__28799__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28799__a,0);
} 
return dd__delegate.call(this,args__14297__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__28800){
var args__14297__auto__ = cljs.core.seq(arglist__28800);
return dd__delegate(args__14297__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27478_28801 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27479_28802 = null;
var count__27480_28803 = (0);
var i__27481_28804 = (0);
while(true){
if((i__27481_28804 < count__27480_28803)){
var arg__14299__auto___28805 = chunk__27479_28802.cljs$core$IIndexed$_nth$arity$2(null,i__27481_28804);
a__14298__auto__.push(arg__14299__auto___28805);

var G__28806 = seq__27478_28801;
var G__28807 = chunk__27479_28802;
var G__28808 = count__27480_28803;
var G__28809 = (i__27481_28804 + (1));
seq__27478_28801 = G__28806;
chunk__27479_28802 = G__28807;
count__27480_28803 = G__28808;
i__27481_28804 = G__28809;
continue;
} else {
var temp__4126__auto___28810 = cljs.core.seq(seq__27478_28801);
if(temp__4126__auto___28810){
var seq__27478_28811__$1 = temp__4126__auto___28810;
if(cljs.core.chunked_seq_QMARK_(seq__27478_28811__$1)){
var c__4522__auto___28812 = cljs.core.chunk_first(seq__27478_28811__$1);
var G__28813 = cljs.core.chunk_rest(seq__27478_28811__$1);
var G__28814 = c__4522__auto___28812;
var G__28815 = cljs.core.count(c__4522__auto___28812);
var G__28816 = (0);
seq__27478_28801 = G__28813;
chunk__27479_28802 = G__28814;
count__27480_28803 = G__28815;
i__27481_28804 = G__28816;
continue;
} else {
var arg__14299__auto___28817 = cljs.core.first(seq__27478_28811__$1);
a__14298__auto__.push(arg__14299__auto___28817);

var G__28818 = cljs.core.next(seq__27478_28811__$1);
var G__28819 = null;
var G__28820 = (0);
var G__28821 = (0);
seq__27478_28801 = G__28818;
chunk__27479_28802 = G__28819;
count__27480_28803 = G__28820;
i__27481_28804 = G__28821;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,a__14298__auto__);
};
var del = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28822__i = 0, G__28822__a = new Array(arguments.length -  0);
while (G__28822__i < G__28822__a.length) {G__28822__a[G__28822__i] = arguments[G__28822__i + 0]; ++G__28822__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28822__a,0);
} 
return del__delegate.call(this,args__14297__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__28823){
var args__14297__auto__ = cljs.core.seq(arglist__28823);
return del__delegate(args__14297__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27486_28824 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27487_28825 = null;
var count__27488_28826 = (0);
var i__27489_28827 = (0);
while(true){
if((i__27489_28827 < count__27488_28826)){
var arg__14299__auto___28828 = chunk__27487_28825.cljs$core$IIndexed$_nth$arity$2(null,i__27489_28827);
a__14298__auto__.push(arg__14299__auto___28828);

var G__28829 = seq__27486_28824;
var G__28830 = chunk__27487_28825;
var G__28831 = count__27488_28826;
var G__28832 = (i__27489_28827 + (1));
seq__27486_28824 = G__28829;
chunk__27487_28825 = G__28830;
count__27488_28826 = G__28831;
i__27489_28827 = G__28832;
continue;
} else {
var temp__4126__auto___28833 = cljs.core.seq(seq__27486_28824);
if(temp__4126__auto___28833){
var seq__27486_28834__$1 = temp__4126__auto___28833;
if(cljs.core.chunked_seq_QMARK_(seq__27486_28834__$1)){
var c__4522__auto___28835 = cljs.core.chunk_first(seq__27486_28834__$1);
var G__28836 = cljs.core.chunk_rest(seq__27486_28834__$1);
var G__28837 = c__4522__auto___28835;
var G__28838 = cljs.core.count(c__4522__auto___28835);
var G__28839 = (0);
seq__27486_28824 = G__28836;
chunk__27487_28825 = G__28837;
count__27488_28826 = G__28838;
i__27489_28827 = G__28839;
continue;
} else {
var arg__14299__auto___28840 = cljs.core.first(seq__27486_28834__$1);
a__14298__auto__.push(arg__14299__auto___28840);

var G__28841 = cljs.core.next(seq__27486_28834__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__27486_28824 = G__28841;
chunk__27487_28825 = G__28842;
count__27488_28826 = G__28843;
i__27489_28827 = G__28844;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,a__14298__auto__);
};
var details = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28845__i = 0, G__28845__a = new Array(arguments.length -  0);
while (G__28845__i < G__28845__a.length) {G__28845__a[G__28845__i] = arguments[G__28845__i + 0]; ++G__28845__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28845__a,0);
} 
return details__delegate.call(this,args__14297__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__28846){
var args__14297__auto__ = cljs.core.seq(arglist__28846);
return details__delegate(args__14297__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27494_28847 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27495_28848 = null;
var count__27496_28849 = (0);
var i__27497_28850 = (0);
while(true){
if((i__27497_28850 < count__27496_28849)){
var arg__14299__auto___28851 = chunk__27495_28848.cljs$core$IIndexed$_nth$arity$2(null,i__27497_28850);
a__14298__auto__.push(arg__14299__auto___28851);

var G__28852 = seq__27494_28847;
var G__28853 = chunk__27495_28848;
var G__28854 = count__27496_28849;
var G__28855 = (i__27497_28850 + (1));
seq__27494_28847 = G__28852;
chunk__27495_28848 = G__28853;
count__27496_28849 = G__28854;
i__27497_28850 = G__28855;
continue;
} else {
var temp__4126__auto___28856 = cljs.core.seq(seq__27494_28847);
if(temp__4126__auto___28856){
var seq__27494_28857__$1 = temp__4126__auto___28856;
if(cljs.core.chunked_seq_QMARK_(seq__27494_28857__$1)){
var c__4522__auto___28858 = cljs.core.chunk_first(seq__27494_28857__$1);
var G__28859 = cljs.core.chunk_rest(seq__27494_28857__$1);
var G__28860 = c__4522__auto___28858;
var G__28861 = cljs.core.count(c__4522__auto___28858);
var G__28862 = (0);
seq__27494_28847 = G__28859;
chunk__27495_28848 = G__28860;
count__27496_28849 = G__28861;
i__27497_28850 = G__28862;
continue;
} else {
var arg__14299__auto___28863 = cljs.core.first(seq__27494_28857__$1);
a__14298__auto__.push(arg__14299__auto___28863);

var G__28864 = cljs.core.next(seq__27494_28857__$1);
var G__28865 = null;
var G__28866 = (0);
var G__28867 = (0);
seq__27494_28847 = G__28864;
chunk__27495_28848 = G__28865;
count__27496_28849 = G__28866;
i__27497_28850 = G__28867;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,a__14298__auto__);
};
var dfn = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28868__i = 0, G__28868__a = new Array(arguments.length -  0);
while (G__28868__i < G__28868__a.length) {G__28868__a[G__28868__i] = arguments[G__28868__i + 0]; ++G__28868__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28868__a,0);
} 
return dfn__delegate.call(this,args__14297__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__28869){
var args__14297__auto__ = cljs.core.seq(arglist__28869);
return dfn__delegate(args__14297__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27502_28870 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27503_28871 = null;
var count__27504_28872 = (0);
var i__27505_28873 = (0);
while(true){
if((i__27505_28873 < count__27504_28872)){
var arg__14299__auto___28874 = chunk__27503_28871.cljs$core$IIndexed$_nth$arity$2(null,i__27505_28873);
a__14298__auto__.push(arg__14299__auto___28874);

var G__28875 = seq__27502_28870;
var G__28876 = chunk__27503_28871;
var G__28877 = count__27504_28872;
var G__28878 = (i__27505_28873 + (1));
seq__27502_28870 = G__28875;
chunk__27503_28871 = G__28876;
count__27504_28872 = G__28877;
i__27505_28873 = G__28878;
continue;
} else {
var temp__4126__auto___28879 = cljs.core.seq(seq__27502_28870);
if(temp__4126__auto___28879){
var seq__27502_28880__$1 = temp__4126__auto___28879;
if(cljs.core.chunked_seq_QMARK_(seq__27502_28880__$1)){
var c__4522__auto___28881 = cljs.core.chunk_first(seq__27502_28880__$1);
var G__28882 = cljs.core.chunk_rest(seq__27502_28880__$1);
var G__28883 = c__4522__auto___28881;
var G__28884 = cljs.core.count(c__4522__auto___28881);
var G__28885 = (0);
seq__27502_28870 = G__28882;
chunk__27503_28871 = G__28883;
count__27504_28872 = G__28884;
i__27505_28873 = G__28885;
continue;
} else {
var arg__14299__auto___28886 = cljs.core.first(seq__27502_28880__$1);
a__14298__auto__.push(arg__14299__auto___28886);

var G__28887 = cljs.core.next(seq__27502_28880__$1);
var G__28888 = null;
var G__28889 = (0);
var G__28890 = (0);
seq__27502_28870 = G__28887;
chunk__27503_28871 = G__28888;
count__27504_28872 = G__28889;
i__27505_28873 = G__28890;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,a__14298__auto__);
};
var div = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28891__i = 0, G__28891__a = new Array(arguments.length -  0);
while (G__28891__i < G__28891__a.length) {G__28891__a[G__28891__i] = arguments[G__28891__i + 0]; ++G__28891__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28891__a,0);
} 
return div__delegate.call(this,args__14297__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__28892){
var args__14297__auto__ = cljs.core.seq(arglist__28892);
return div__delegate(args__14297__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27510_28893 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27511_28894 = null;
var count__27512_28895 = (0);
var i__27513_28896 = (0);
while(true){
if((i__27513_28896 < count__27512_28895)){
var arg__14299__auto___28897 = chunk__27511_28894.cljs$core$IIndexed$_nth$arity$2(null,i__27513_28896);
a__14298__auto__.push(arg__14299__auto___28897);

var G__28898 = seq__27510_28893;
var G__28899 = chunk__27511_28894;
var G__28900 = count__27512_28895;
var G__28901 = (i__27513_28896 + (1));
seq__27510_28893 = G__28898;
chunk__27511_28894 = G__28899;
count__27512_28895 = G__28900;
i__27513_28896 = G__28901;
continue;
} else {
var temp__4126__auto___28902 = cljs.core.seq(seq__27510_28893);
if(temp__4126__auto___28902){
var seq__27510_28903__$1 = temp__4126__auto___28902;
if(cljs.core.chunked_seq_QMARK_(seq__27510_28903__$1)){
var c__4522__auto___28904 = cljs.core.chunk_first(seq__27510_28903__$1);
var G__28905 = cljs.core.chunk_rest(seq__27510_28903__$1);
var G__28906 = c__4522__auto___28904;
var G__28907 = cljs.core.count(c__4522__auto___28904);
var G__28908 = (0);
seq__27510_28893 = G__28905;
chunk__27511_28894 = G__28906;
count__27512_28895 = G__28907;
i__27513_28896 = G__28908;
continue;
} else {
var arg__14299__auto___28909 = cljs.core.first(seq__27510_28903__$1);
a__14298__auto__.push(arg__14299__auto___28909);

var G__28910 = cljs.core.next(seq__27510_28903__$1);
var G__28911 = null;
var G__28912 = (0);
var G__28913 = (0);
seq__27510_28893 = G__28910;
chunk__27511_28894 = G__28911;
count__27512_28895 = G__28912;
i__27513_28896 = G__28913;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,a__14298__auto__);
};
var dl = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28914__i = 0, G__28914__a = new Array(arguments.length -  0);
while (G__28914__i < G__28914__a.length) {G__28914__a[G__28914__i] = arguments[G__28914__i + 0]; ++G__28914__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28914__a,0);
} 
return dl__delegate.call(this,args__14297__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__28915){
var args__14297__auto__ = cljs.core.seq(arglist__28915);
return dl__delegate(args__14297__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27518_28916 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27519_28917 = null;
var count__27520_28918 = (0);
var i__27521_28919 = (0);
while(true){
if((i__27521_28919 < count__27520_28918)){
var arg__14299__auto___28920 = chunk__27519_28917.cljs$core$IIndexed$_nth$arity$2(null,i__27521_28919);
a__14298__auto__.push(arg__14299__auto___28920);

var G__28921 = seq__27518_28916;
var G__28922 = chunk__27519_28917;
var G__28923 = count__27520_28918;
var G__28924 = (i__27521_28919 + (1));
seq__27518_28916 = G__28921;
chunk__27519_28917 = G__28922;
count__27520_28918 = G__28923;
i__27521_28919 = G__28924;
continue;
} else {
var temp__4126__auto___28925 = cljs.core.seq(seq__27518_28916);
if(temp__4126__auto___28925){
var seq__27518_28926__$1 = temp__4126__auto___28925;
if(cljs.core.chunked_seq_QMARK_(seq__27518_28926__$1)){
var c__4522__auto___28927 = cljs.core.chunk_first(seq__27518_28926__$1);
var G__28928 = cljs.core.chunk_rest(seq__27518_28926__$1);
var G__28929 = c__4522__auto___28927;
var G__28930 = cljs.core.count(c__4522__auto___28927);
var G__28931 = (0);
seq__27518_28916 = G__28928;
chunk__27519_28917 = G__28929;
count__27520_28918 = G__28930;
i__27521_28919 = G__28931;
continue;
} else {
var arg__14299__auto___28932 = cljs.core.first(seq__27518_28926__$1);
a__14298__auto__.push(arg__14299__auto___28932);

var G__28933 = cljs.core.next(seq__27518_28926__$1);
var G__28934 = null;
var G__28935 = (0);
var G__28936 = (0);
seq__27518_28916 = G__28933;
chunk__27519_28917 = G__28934;
count__27520_28918 = G__28935;
i__27521_28919 = G__28936;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,a__14298__auto__);
};
var dt = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28937__i = 0, G__28937__a = new Array(arguments.length -  0);
while (G__28937__i < G__28937__a.length) {G__28937__a[G__28937__i] = arguments[G__28937__i + 0]; ++G__28937__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28937__a,0);
} 
return dt__delegate.call(this,args__14297__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__28938){
var args__14297__auto__ = cljs.core.seq(arglist__28938);
return dt__delegate(args__14297__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27526_28939 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27527_28940 = null;
var count__27528_28941 = (0);
var i__27529_28942 = (0);
while(true){
if((i__27529_28942 < count__27528_28941)){
var arg__14299__auto___28943 = chunk__27527_28940.cljs$core$IIndexed$_nth$arity$2(null,i__27529_28942);
a__14298__auto__.push(arg__14299__auto___28943);

var G__28944 = seq__27526_28939;
var G__28945 = chunk__27527_28940;
var G__28946 = count__27528_28941;
var G__28947 = (i__27529_28942 + (1));
seq__27526_28939 = G__28944;
chunk__27527_28940 = G__28945;
count__27528_28941 = G__28946;
i__27529_28942 = G__28947;
continue;
} else {
var temp__4126__auto___28948 = cljs.core.seq(seq__27526_28939);
if(temp__4126__auto___28948){
var seq__27526_28949__$1 = temp__4126__auto___28948;
if(cljs.core.chunked_seq_QMARK_(seq__27526_28949__$1)){
var c__4522__auto___28950 = cljs.core.chunk_first(seq__27526_28949__$1);
var G__28951 = cljs.core.chunk_rest(seq__27526_28949__$1);
var G__28952 = c__4522__auto___28950;
var G__28953 = cljs.core.count(c__4522__auto___28950);
var G__28954 = (0);
seq__27526_28939 = G__28951;
chunk__27527_28940 = G__28952;
count__27528_28941 = G__28953;
i__27529_28942 = G__28954;
continue;
} else {
var arg__14299__auto___28955 = cljs.core.first(seq__27526_28949__$1);
a__14298__auto__.push(arg__14299__auto___28955);

var G__28956 = cljs.core.next(seq__27526_28949__$1);
var G__28957 = null;
var G__28958 = (0);
var G__28959 = (0);
seq__27526_28939 = G__28956;
chunk__27527_28940 = G__28957;
count__27528_28941 = G__28958;
i__27529_28942 = G__28959;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,a__14298__auto__);
};
var em = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28960__i = 0, G__28960__a = new Array(arguments.length -  0);
while (G__28960__i < G__28960__a.length) {G__28960__a[G__28960__i] = arguments[G__28960__i + 0]; ++G__28960__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28960__a,0);
} 
return em__delegate.call(this,args__14297__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__28961){
var args__14297__auto__ = cljs.core.seq(arglist__28961);
return em__delegate(args__14297__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27542_28962 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27543_28963 = null;
var count__27544_28964 = (0);
var i__27545_28965 = (0);
while(true){
if((i__27545_28965 < count__27544_28964)){
var arg__14299__auto___28966 = chunk__27543_28963.cljs$core$IIndexed$_nth$arity$2(null,i__27545_28965);
a__14298__auto__.push(arg__14299__auto___28966);

var G__28967 = seq__27542_28962;
var G__28968 = chunk__27543_28963;
var G__28969 = count__27544_28964;
var G__28970 = (i__27545_28965 + (1));
seq__27542_28962 = G__28967;
chunk__27543_28963 = G__28968;
count__27544_28964 = G__28969;
i__27545_28965 = G__28970;
continue;
} else {
var temp__4126__auto___28971 = cljs.core.seq(seq__27542_28962);
if(temp__4126__auto___28971){
var seq__27542_28972__$1 = temp__4126__auto___28971;
if(cljs.core.chunked_seq_QMARK_(seq__27542_28972__$1)){
var c__4522__auto___28973 = cljs.core.chunk_first(seq__27542_28972__$1);
var G__28974 = cljs.core.chunk_rest(seq__27542_28972__$1);
var G__28975 = c__4522__auto___28973;
var G__28976 = cljs.core.count(c__4522__auto___28973);
var G__28977 = (0);
seq__27542_28962 = G__28974;
chunk__27543_28963 = G__28975;
count__27544_28964 = G__28976;
i__27545_28965 = G__28977;
continue;
} else {
var arg__14299__auto___28978 = cljs.core.first(seq__27542_28972__$1);
a__14298__auto__.push(arg__14299__auto___28978);

var G__28979 = cljs.core.next(seq__27542_28972__$1);
var G__28980 = null;
var G__28981 = (0);
var G__28982 = (0);
seq__27542_28962 = G__28979;
chunk__27543_28963 = G__28980;
count__27544_28964 = G__28981;
i__27545_28965 = G__28982;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,a__14298__auto__);
};
var embed = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__28983__i = 0, G__28983__a = new Array(arguments.length -  0);
while (G__28983__i < G__28983__a.length) {G__28983__a[G__28983__i] = arguments[G__28983__i + 0]; ++G__28983__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__28983__a,0);
} 
return embed__delegate.call(this,args__14297__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__28984){
var args__14297__auto__ = cljs.core.seq(arglist__28984);
return embed__delegate(args__14297__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27550_28985 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27551_28986 = null;
var count__27552_28987 = (0);
var i__27553_28988 = (0);
while(true){
if((i__27553_28988 < count__27552_28987)){
var arg__14299__auto___28989 = chunk__27551_28986.cljs$core$IIndexed$_nth$arity$2(null,i__27553_28988);
a__14298__auto__.push(arg__14299__auto___28989);

var G__28990 = seq__27550_28985;
var G__28991 = chunk__27551_28986;
var G__28992 = count__27552_28987;
var G__28993 = (i__27553_28988 + (1));
seq__27550_28985 = G__28990;
chunk__27551_28986 = G__28991;
count__27552_28987 = G__28992;
i__27553_28988 = G__28993;
continue;
} else {
var temp__4126__auto___28994 = cljs.core.seq(seq__27550_28985);
if(temp__4126__auto___28994){
var seq__27550_28995__$1 = temp__4126__auto___28994;
if(cljs.core.chunked_seq_QMARK_(seq__27550_28995__$1)){
var c__4522__auto___28996 = cljs.core.chunk_first(seq__27550_28995__$1);
var G__28997 = cljs.core.chunk_rest(seq__27550_28995__$1);
var G__28998 = c__4522__auto___28996;
var G__28999 = cljs.core.count(c__4522__auto___28996);
var G__29000 = (0);
seq__27550_28985 = G__28997;
chunk__27551_28986 = G__28998;
count__27552_28987 = G__28999;
i__27553_28988 = G__29000;
continue;
} else {
var arg__14299__auto___29001 = cljs.core.first(seq__27550_28995__$1);
a__14298__auto__.push(arg__14299__auto___29001);

var G__29002 = cljs.core.next(seq__27550_28995__$1);
var G__29003 = null;
var G__29004 = (0);
var G__29005 = (0);
seq__27550_28985 = G__29002;
chunk__27551_28986 = G__29003;
count__27552_28987 = G__29004;
i__27553_28988 = G__29005;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,a__14298__auto__);
};
var fieldset = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29006__i = 0, G__29006__a = new Array(arguments.length -  0);
while (G__29006__i < G__29006__a.length) {G__29006__a[G__29006__i] = arguments[G__29006__i + 0]; ++G__29006__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29006__a,0);
} 
return fieldset__delegate.call(this,args__14297__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__29007){
var args__14297__auto__ = cljs.core.seq(arglist__29007);
return fieldset__delegate(args__14297__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27558_29008 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27559_29009 = null;
var count__27560_29010 = (0);
var i__27561_29011 = (0);
while(true){
if((i__27561_29011 < count__27560_29010)){
var arg__14299__auto___29012 = chunk__27559_29009.cljs$core$IIndexed$_nth$arity$2(null,i__27561_29011);
a__14298__auto__.push(arg__14299__auto___29012);

var G__29013 = seq__27558_29008;
var G__29014 = chunk__27559_29009;
var G__29015 = count__27560_29010;
var G__29016 = (i__27561_29011 + (1));
seq__27558_29008 = G__29013;
chunk__27559_29009 = G__29014;
count__27560_29010 = G__29015;
i__27561_29011 = G__29016;
continue;
} else {
var temp__4126__auto___29017 = cljs.core.seq(seq__27558_29008);
if(temp__4126__auto___29017){
var seq__27558_29018__$1 = temp__4126__auto___29017;
if(cljs.core.chunked_seq_QMARK_(seq__27558_29018__$1)){
var c__4522__auto___29019 = cljs.core.chunk_first(seq__27558_29018__$1);
var G__29020 = cljs.core.chunk_rest(seq__27558_29018__$1);
var G__29021 = c__4522__auto___29019;
var G__29022 = cljs.core.count(c__4522__auto___29019);
var G__29023 = (0);
seq__27558_29008 = G__29020;
chunk__27559_29009 = G__29021;
count__27560_29010 = G__29022;
i__27561_29011 = G__29023;
continue;
} else {
var arg__14299__auto___29024 = cljs.core.first(seq__27558_29018__$1);
a__14298__auto__.push(arg__14299__auto___29024);

var G__29025 = cljs.core.next(seq__27558_29018__$1);
var G__29026 = null;
var G__29027 = (0);
var G__29028 = (0);
seq__27558_29008 = G__29025;
chunk__27559_29009 = G__29026;
count__27560_29010 = G__29027;
i__27561_29011 = G__29028;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,a__14298__auto__);
};
var figcaption = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29029__i = 0, G__29029__a = new Array(arguments.length -  0);
while (G__29029__i < G__29029__a.length) {G__29029__a[G__29029__i] = arguments[G__29029__i + 0]; ++G__29029__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29029__a,0);
} 
return figcaption__delegate.call(this,args__14297__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__29030){
var args__14297__auto__ = cljs.core.seq(arglist__29030);
return figcaption__delegate(args__14297__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27566_29031 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27567_29032 = null;
var count__27568_29033 = (0);
var i__27569_29034 = (0);
while(true){
if((i__27569_29034 < count__27568_29033)){
var arg__14299__auto___29035 = chunk__27567_29032.cljs$core$IIndexed$_nth$arity$2(null,i__27569_29034);
a__14298__auto__.push(arg__14299__auto___29035);

var G__29036 = seq__27566_29031;
var G__29037 = chunk__27567_29032;
var G__29038 = count__27568_29033;
var G__29039 = (i__27569_29034 + (1));
seq__27566_29031 = G__29036;
chunk__27567_29032 = G__29037;
count__27568_29033 = G__29038;
i__27569_29034 = G__29039;
continue;
} else {
var temp__4126__auto___29040 = cljs.core.seq(seq__27566_29031);
if(temp__4126__auto___29040){
var seq__27566_29041__$1 = temp__4126__auto___29040;
if(cljs.core.chunked_seq_QMARK_(seq__27566_29041__$1)){
var c__4522__auto___29042 = cljs.core.chunk_first(seq__27566_29041__$1);
var G__29043 = cljs.core.chunk_rest(seq__27566_29041__$1);
var G__29044 = c__4522__auto___29042;
var G__29045 = cljs.core.count(c__4522__auto___29042);
var G__29046 = (0);
seq__27566_29031 = G__29043;
chunk__27567_29032 = G__29044;
count__27568_29033 = G__29045;
i__27569_29034 = G__29046;
continue;
} else {
var arg__14299__auto___29047 = cljs.core.first(seq__27566_29041__$1);
a__14298__auto__.push(arg__14299__auto___29047);

var G__29048 = cljs.core.next(seq__27566_29041__$1);
var G__29049 = null;
var G__29050 = (0);
var G__29051 = (0);
seq__27566_29031 = G__29048;
chunk__27567_29032 = G__29049;
count__27568_29033 = G__29050;
i__27569_29034 = G__29051;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,a__14298__auto__);
};
var figure = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29052__i = 0, G__29052__a = new Array(arguments.length -  0);
while (G__29052__i < G__29052__a.length) {G__29052__a[G__29052__i] = arguments[G__29052__i + 0]; ++G__29052__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29052__a,0);
} 
return figure__delegate.call(this,args__14297__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__29053){
var args__14297__auto__ = cljs.core.seq(arglist__29053);
return figure__delegate(args__14297__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27574_29054 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27575_29055 = null;
var count__27576_29056 = (0);
var i__27577_29057 = (0);
while(true){
if((i__27577_29057 < count__27576_29056)){
var arg__14299__auto___29058 = chunk__27575_29055.cljs$core$IIndexed$_nth$arity$2(null,i__27577_29057);
a__14298__auto__.push(arg__14299__auto___29058);

var G__29059 = seq__27574_29054;
var G__29060 = chunk__27575_29055;
var G__29061 = count__27576_29056;
var G__29062 = (i__27577_29057 + (1));
seq__27574_29054 = G__29059;
chunk__27575_29055 = G__29060;
count__27576_29056 = G__29061;
i__27577_29057 = G__29062;
continue;
} else {
var temp__4126__auto___29063 = cljs.core.seq(seq__27574_29054);
if(temp__4126__auto___29063){
var seq__27574_29064__$1 = temp__4126__auto___29063;
if(cljs.core.chunked_seq_QMARK_(seq__27574_29064__$1)){
var c__4522__auto___29065 = cljs.core.chunk_first(seq__27574_29064__$1);
var G__29066 = cljs.core.chunk_rest(seq__27574_29064__$1);
var G__29067 = c__4522__auto___29065;
var G__29068 = cljs.core.count(c__4522__auto___29065);
var G__29069 = (0);
seq__27574_29054 = G__29066;
chunk__27575_29055 = G__29067;
count__27576_29056 = G__29068;
i__27577_29057 = G__29069;
continue;
} else {
var arg__14299__auto___29070 = cljs.core.first(seq__27574_29064__$1);
a__14298__auto__.push(arg__14299__auto___29070);

var G__29071 = cljs.core.next(seq__27574_29064__$1);
var G__29072 = null;
var G__29073 = (0);
var G__29074 = (0);
seq__27574_29054 = G__29071;
chunk__27575_29055 = G__29072;
count__27576_29056 = G__29073;
i__27577_29057 = G__29074;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,a__14298__auto__);
};
var footer = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29075__i = 0, G__29075__a = new Array(arguments.length -  0);
while (G__29075__i < G__29075__a.length) {G__29075__a[G__29075__i] = arguments[G__29075__i + 0]; ++G__29075__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29075__a,0);
} 
return footer__delegate.call(this,args__14297__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__29076){
var args__14297__auto__ = cljs.core.seq(arglist__29076);
return footer__delegate(args__14297__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27582_29077 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27583_29078 = null;
var count__27584_29079 = (0);
var i__27585_29080 = (0);
while(true){
if((i__27585_29080 < count__27584_29079)){
var arg__14299__auto___29081 = chunk__27583_29078.cljs$core$IIndexed$_nth$arity$2(null,i__27585_29080);
a__14298__auto__.push(arg__14299__auto___29081);

var G__29082 = seq__27582_29077;
var G__29083 = chunk__27583_29078;
var G__29084 = count__27584_29079;
var G__29085 = (i__27585_29080 + (1));
seq__27582_29077 = G__29082;
chunk__27583_29078 = G__29083;
count__27584_29079 = G__29084;
i__27585_29080 = G__29085;
continue;
} else {
var temp__4126__auto___29086 = cljs.core.seq(seq__27582_29077);
if(temp__4126__auto___29086){
var seq__27582_29087__$1 = temp__4126__auto___29086;
if(cljs.core.chunked_seq_QMARK_(seq__27582_29087__$1)){
var c__4522__auto___29088 = cljs.core.chunk_first(seq__27582_29087__$1);
var G__29089 = cljs.core.chunk_rest(seq__27582_29087__$1);
var G__29090 = c__4522__auto___29088;
var G__29091 = cljs.core.count(c__4522__auto___29088);
var G__29092 = (0);
seq__27582_29077 = G__29089;
chunk__27583_29078 = G__29090;
count__27584_29079 = G__29091;
i__27585_29080 = G__29092;
continue;
} else {
var arg__14299__auto___29093 = cljs.core.first(seq__27582_29087__$1);
a__14298__auto__.push(arg__14299__auto___29093);

var G__29094 = cljs.core.next(seq__27582_29087__$1);
var G__29095 = null;
var G__29096 = (0);
var G__29097 = (0);
seq__27582_29077 = G__29094;
chunk__27583_29078 = G__29095;
count__27584_29079 = G__29096;
i__27585_29080 = G__29097;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,a__14298__auto__);
};
var form = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29098__i = 0, G__29098__a = new Array(arguments.length -  0);
while (G__29098__i < G__29098__a.length) {G__29098__a[G__29098__i] = arguments[G__29098__i + 0]; ++G__29098__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29098__a,0);
} 
return form__delegate.call(this,args__14297__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__29099){
var args__14297__auto__ = cljs.core.seq(arglist__29099);
return form__delegate(args__14297__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27590_29100 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27591_29101 = null;
var count__27592_29102 = (0);
var i__27593_29103 = (0);
while(true){
if((i__27593_29103 < count__27592_29102)){
var arg__14299__auto___29104 = chunk__27591_29101.cljs$core$IIndexed$_nth$arity$2(null,i__27593_29103);
a__14298__auto__.push(arg__14299__auto___29104);

var G__29105 = seq__27590_29100;
var G__29106 = chunk__27591_29101;
var G__29107 = count__27592_29102;
var G__29108 = (i__27593_29103 + (1));
seq__27590_29100 = G__29105;
chunk__27591_29101 = G__29106;
count__27592_29102 = G__29107;
i__27593_29103 = G__29108;
continue;
} else {
var temp__4126__auto___29109 = cljs.core.seq(seq__27590_29100);
if(temp__4126__auto___29109){
var seq__27590_29110__$1 = temp__4126__auto___29109;
if(cljs.core.chunked_seq_QMARK_(seq__27590_29110__$1)){
var c__4522__auto___29111 = cljs.core.chunk_first(seq__27590_29110__$1);
var G__29112 = cljs.core.chunk_rest(seq__27590_29110__$1);
var G__29113 = c__4522__auto___29111;
var G__29114 = cljs.core.count(c__4522__auto___29111);
var G__29115 = (0);
seq__27590_29100 = G__29112;
chunk__27591_29101 = G__29113;
count__27592_29102 = G__29114;
i__27593_29103 = G__29115;
continue;
} else {
var arg__14299__auto___29116 = cljs.core.first(seq__27590_29110__$1);
a__14298__auto__.push(arg__14299__auto___29116);

var G__29117 = cljs.core.next(seq__27590_29110__$1);
var G__29118 = null;
var G__29119 = (0);
var G__29120 = (0);
seq__27590_29100 = G__29117;
chunk__27591_29101 = G__29118;
count__27592_29102 = G__29119;
i__27593_29103 = G__29120;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,a__14298__auto__);
};
var h1 = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29121__i = 0, G__29121__a = new Array(arguments.length -  0);
while (G__29121__i < G__29121__a.length) {G__29121__a[G__29121__i] = arguments[G__29121__i + 0]; ++G__29121__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29121__a,0);
} 
return h1__delegate.call(this,args__14297__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__29122){
var args__14297__auto__ = cljs.core.seq(arglist__29122);
return h1__delegate(args__14297__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27598_29123 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27599_29124 = null;
var count__27600_29125 = (0);
var i__27601_29126 = (0);
while(true){
if((i__27601_29126 < count__27600_29125)){
var arg__14299__auto___29127 = chunk__27599_29124.cljs$core$IIndexed$_nth$arity$2(null,i__27601_29126);
a__14298__auto__.push(arg__14299__auto___29127);

var G__29128 = seq__27598_29123;
var G__29129 = chunk__27599_29124;
var G__29130 = count__27600_29125;
var G__29131 = (i__27601_29126 + (1));
seq__27598_29123 = G__29128;
chunk__27599_29124 = G__29129;
count__27600_29125 = G__29130;
i__27601_29126 = G__29131;
continue;
} else {
var temp__4126__auto___29132 = cljs.core.seq(seq__27598_29123);
if(temp__4126__auto___29132){
var seq__27598_29133__$1 = temp__4126__auto___29132;
if(cljs.core.chunked_seq_QMARK_(seq__27598_29133__$1)){
var c__4522__auto___29134 = cljs.core.chunk_first(seq__27598_29133__$1);
var G__29135 = cljs.core.chunk_rest(seq__27598_29133__$1);
var G__29136 = c__4522__auto___29134;
var G__29137 = cljs.core.count(c__4522__auto___29134);
var G__29138 = (0);
seq__27598_29123 = G__29135;
chunk__27599_29124 = G__29136;
count__27600_29125 = G__29137;
i__27601_29126 = G__29138;
continue;
} else {
var arg__14299__auto___29139 = cljs.core.first(seq__27598_29133__$1);
a__14298__auto__.push(arg__14299__auto___29139);

var G__29140 = cljs.core.next(seq__27598_29133__$1);
var G__29141 = null;
var G__29142 = (0);
var G__29143 = (0);
seq__27598_29123 = G__29140;
chunk__27599_29124 = G__29141;
count__27600_29125 = G__29142;
i__27601_29126 = G__29143;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,a__14298__auto__);
};
var h2 = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29144__i = 0, G__29144__a = new Array(arguments.length -  0);
while (G__29144__i < G__29144__a.length) {G__29144__a[G__29144__i] = arguments[G__29144__i + 0]; ++G__29144__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29144__a,0);
} 
return h2__delegate.call(this,args__14297__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__29145){
var args__14297__auto__ = cljs.core.seq(arglist__29145);
return h2__delegate(args__14297__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27606_29146 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27607_29147 = null;
var count__27608_29148 = (0);
var i__27609_29149 = (0);
while(true){
if((i__27609_29149 < count__27608_29148)){
var arg__14299__auto___29150 = chunk__27607_29147.cljs$core$IIndexed$_nth$arity$2(null,i__27609_29149);
a__14298__auto__.push(arg__14299__auto___29150);

var G__29151 = seq__27606_29146;
var G__29152 = chunk__27607_29147;
var G__29153 = count__27608_29148;
var G__29154 = (i__27609_29149 + (1));
seq__27606_29146 = G__29151;
chunk__27607_29147 = G__29152;
count__27608_29148 = G__29153;
i__27609_29149 = G__29154;
continue;
} else {
var temp__4126__auto___29155 = cljs.core.seq(seq__27606_29146);
if(temp__4126__auto___29155){
var seq__27606_29156__$1 = temp__4126__auto___29155;
if(cljs.core.chunked_seq_QMARK_(seq__27606_29156__$1)){
var c__4522__auto___29157 = cljs.core.chunk_first(seq__27606_29156__$1);
var G__29158 = cljs.core.chunk_rest(seq__27606_29156__$1);
var G__29159 = c__4522__auto___29157;
var G__29160 = cljs.core.count(c__4522__auto___29157);
var G__29161 = (0);
seq__27606_29146 = G__29158;
chunk__27607_29147 = G__29159;
count__27608_29148 = G__29160;
i__27609_29149 = G__29161;
continue;
} else {
var arg__14299__auto___29162 = cljs.core.first(seq__27606_29156__$1);
a__14298__auto__.push(arg__14299__auto___29162);

var G__29163 = cljs.core.next(seq__27606_29156__$1);
var G__29164 = null;
var G__29165 = (0);
var G__29166 = (0);
seq__27606_29146 = G__29163;
chunk__27607_29147 = G__29164;
count__27608_29148 = G__29165;
i__27609_29149 = G__29166;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,a__14298__auto__);
};
var h3 = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29167__i = 0, G__29167__a = new Array(arguments.length -  0);
while (G__29167__i < G__29167__a.length) {G__29167__a[G__29167__i] = arguments[G__29167__i + 0]; ++G__29167__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29167__a,0);
} 
return h3__delegate.call(this,args__14297__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__29168){
var args__14297__auto__ = cljs.core.seq(arglist__29168);
return h3__delegate(args__14297__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27614_29169 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27615_29170 = null;
var count__27616_29171 = (0);
var i__27617_29172 = (0);
while(true){
if((i__27617_29172 < count__27616_29171)){
var arg__14299__auto___29173 = chunk__27615_29170.cljs$core$IIndexed$_nth$arity$2(null,i__27617_29172);
a__14298__auto__.push(arg__14299__auto___29173);

var G__29174 = seq__27614_29169;
var G__29175 = chunk__27615_29170;
var G__29176 = count__27616_29171;
var G__29177 = (i__27617_29172 + (1));
seq__27614_29169 = G__29174;
chunk__27615_29170 = G__29175;
count__27616_29171 = G__29176;
i__27617_29172 = G__29177;
continue;
} else {
var temp__4126__auto___29178 = cljs.core.seq(seq__27614_29169);
if(temp__4126__auto___29178){
var seq__27614_29179__$1 = temp__4126__auto___29178;
if(cljs.core.chunked_seq_QMARK_(seq__27614_29179__$1)){
var c__4522__auto___29180 = cljs.core.chunk_first(seq__27614_29179__$1);
var G__29181 = cljs.core.chunk_rest(seq__27614_29179__$1);
var G__29182 = c__4522__auto___29180;
var G__29183 = cljs.core.count(c__4522__auto___29180);
var G__29184 = (0);
seq__27614_29169 = G__29181;
chunk__27615_29170 = G__29182;
count__27616_29171 = G__29183;
i__27617_29172 = G__29184;
continue;
} else {
var arg__14299__auto___29185 = cljs.core.first(seq__27614_29179__$1);
a__14298__auto__.push(arg__14299__auto___29185);

var G__29186 = cljs.core.next(seq__27614_29179__$1);
var G__29187 = null;
var G__29188 = (0);
var G__29189 = (0);
seq__27614_29169 = G__29186;
chunk__27615_29170 = G__29187;
count__27616_29171 = G__29188;
i__27617_29172 = G__29189;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,a__14298__auto__);
};
var h4 = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29190__i = 0, G__29190__a = new Array(arguments.length -  0);
while (G__29190__i < G__29190__a.length) {G__29190__a[G__29190__i] = arguments[G__29190__i + 0]; ++G__29190__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29190__a,0);
} 
return h4__delegate.call(this,args__14297__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__29191){
var args__14297__auto__ = cljs.core.seq(arglist__29191);
return h4__delegate(args__14297__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27622_29192 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27623_29193 = null;
var count__27624_29194 = (0);
var i__27625_29195 = (0);
while(true){
if((i__27625_29195 < count__27624_29194)){
var arg__14299__auto___29196 = chunk__27623_29193.cljs$core$IIndexed$_nth$arity$2(null,i__27625_29195);
a__14298__auto__.push(arg__14299__auto___29196);

var G__29197 = seq__27622_29192;
var G__29198 = chunk__27623_29193;
var G__29199 = count__27624_29194;
var G__29200 = (i__27625_29195 + (1));
seq__27622_29192 = G__29197;
chunk__27623_29193 = G__29198;
count__27624_29194 = G__29199;
i__27625_29195 = G__29200;
continue;
} else {
var temp__4126__auto___29201 = cljs.core.seq(seq__27622_29192);
if(temp__4126__auto___29201){
var seq__27622_29202__$1 = temp__4126__auto___29201;
if(cljs.core.chunked_seq_QMARK_(seq__27622_29202__$1)){
var c__4522__auto___29203 = cljs.core.chunk_first(seq__27622_29202__$1);
var G__29204 = cljs.core.chunk_rest(seq__27622_29202__$1);
var G__29205 = c__4522__auto___29203;
var G__29206 = cljs.core.count(c__4522__auto___29203);
var G__29207 = (0);
seq__27622_29192 = G__29204;
chunk__27623_29193 = G__29205;
count__27624_29194 = G__29206;
i__27625_29195 = G__29207;
continue;
} else {
var arg__14299__auto___29208 = cljs.core.first(seq__27622_29202__$1);
a__14298__auto__.push(arg__14299__auto___29208);

var G__29209 = cljs.core.next(seq__27622_29202__$1);
var G__29210 = null;
var G__29211 = (0);
var G__29212 = (0);
seq__27622_29192 = G__29209;
chunk__27623_29193 = G__29210;
count__27624_29194 = G__29211;
i__27625_29195 = G__29212;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,a__14298__auto__);
};
var h5 = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29213__i = 0, G__29213__a = new Array(arguments.length -  0);
while (G__29213__i < G__29213__a.length) {G__29213__a[G__29213__i] = arguments[G__29213__i + 0]; ++G__29213__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29213__a,0);
} 
return h5__delegate.call(this,args__14297__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__29214){
var args__14297__auto__ = cljs.core.seq(arglist__29214);
return h5__delegate(args__14297__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27630_29215 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27631_29216 = null;
var count__27632_29217 = (0);
var i__27633_29218 = (0);
while(true){
if((i__27633_29218 < count__27632_29217)){
var arg__14299__auto___29219 = chunk__27631_29216.cljs$core$IIndexed$_nth$arity$2(null,i__27633_29218);
a__14298__auto__.push(arg__14299__auto___29219);

var G__29220 = seq__27630_29215;
var G__29221 = chunk__27631_29216;
var G__29222 = count__27632_29217;
var G__29223 = (i__27633_29218 + (1));
seq__27630_29215 = G__29220;
chunk__27631_29216 = G__29221;
count__27632_29217 = G__29222;
i__27633_29218 = G__29223;
continue;
} else {
var temp__4126__auto___29224 = cljs.core.seq(seq__27630_29215);
if(temp__4126__auto___29224){
var seq__27630_29225__$1 = temp__4126__auto___29224;
if(cljs.core.chunked_seq_QMARK_(seq__27630_29225__$1)){
var c__4522__auto___29226 = cljs.core.chunk_first(seq__27630_29225__$1);
var G__29227 = cljs.core.chunk_rest(seq__27630_29225__$1);
var G__29228 = c__4522__auto___29226;
var G__29229 = cljs.core.count(c__4522__auto___29226);
var G__29230 = (0);
seq__27630_29215 = G__29227;
chunk__27631_29216 = G__29228;
count__27632_29217 = G__29229;
i__27633_29218 = G__29230;
continue;
} else {
var arg__14299__auto___29231 = cljs.core.first(seq__27630_29225__$1);
a__14298__auto__.push(arg__14299__auto___29231);

var G__29232 = cljs.core.next(seq__27630_29225__$1);
var G__29233 = null;
var G__29234 = (0);
var G__29235 = (0);
seq__27630_29215 = G__29232;
chunk__27631_29216 = G__29233;
count__27632_29217 = G__29234;
i__27633_29218 = G__29235;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,a__14298__auto__);
};
var h6 = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29236__i = 0, G__29236__a = new Array(arguments.length -  0);
while (G__29236__i < G__29236__a.length) {G__29236__a[G__29236__i] = arguments[G__29236__i + 0]; ++G__29236__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29236__a,0);
} 
return h6__delegate.call(this,args__14297__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__29237){
var args__14297__auto__ = cljs.core.seq(arglist__29237);
return h6__delegate(args__14297__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27638_29238 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27639_29239 = null;
var count__27640_29240 = (0);
var i__27641_29241 = (0);
while(true){
if((i__27641_29241 < count__27640_29240)){
var arg__14299__auto___29242 = chunk__27639_29239.cljs$core$IIndexed$_nth$arity$2(null,i__27641_29241);
a__14298__auto__.push(arg__14299__auto___29242);

var G__29243 = seq__27638_29238;
var G__29244 = chunk__27639_29239;
var G__29245 = count__27640_29240;
var G__29246 = (i__27641_29241 + (1));
seq__27638_29238 = G__29243;
chunk__27639_29239 = G__29244;
count__27640_29240 = G__29245;
i__27641_29241 = G__29246;
continue;
} else {
var temp__4126__auto___29247 = cljs.core.seq(seq__27638_29238);
if(temp__4126__auto___29247){
var seq__27638_29248__$1 = temp__4126__auto___29247;
if(cljs.core.chunked_seq_QMARK_(seq__27638_29248__$1)){
var c__4522__auto___29249 = cljs.core.chunk_first(seq__27638_29248__$1);
var G__29250 = cljs.core.chunk_rest(seq__27638_29248__$1);
var G__29251 = c__4522__auto___29249;
var G__29252 = cljs.core.count(c__4522__auto___29249);
var G__29253 = (0);
seq__27638_29238 = G__29250;
chunk__27639_29239 = G__29251;
count__27640_29240 = G__29252;
i__27641_29241 = G__29253;
continue;
} else {
var arg__14299__auto___29254 = cljs.core.first(seq__27638_29248__$1);
a__14298__auto__.push(arg__14299__auto___29254);

var G__29255 = cljs.core.next(seq__27638_29248__$1);
var G__29256 = null;
var G__29257 = (0);
var G__29258 = (0);
seq__27638_29238 = G__29255;
chunk__27639_29239 = G__29256;
count__27640_29240 = G__29257;
i__27641_29241 = G__29258;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,a__14298__auto__);
};
var head = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29259__i = 0, G__29259__a = new Array(arguments.length -  0);
while (G__29259__i < G__29259__a.length) {G__29259__a[G__29259__i] = arguments[G__29259__i + 0]; ++G__29259__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29259__a,0);
} 
return head__delegate.call(this,args__14297__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__29260){
var args__14297__auto__ = cljs.core.seq(arglist__29260);
return head__delegate(args__14297__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27646_29261 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27647_29262 = null;
var count__27648_29263 = (0);
var i__27649_29264 = (0);
while(true){
if((i__27649_29264 < count__27648_29263)){
var arg__14299__auto___29265 = chunk__27647_29262.cljs$core$IIndexed$_nth$arity$2(null,i__27649_29264);
a__14298__auto__.push(arg__14299__auto___29265);

var G__29266 = seq__27646_29261;
var G__29267 = chunk__27647_29262;
var G__29268 = count__27648_29263;
var G__29269 = (i__27649_29264 + (1));
seq__27646_29261 = G__29266;
chunk__27647_29262 = G__29267;
count__27648_29263 = G__29268;
i__27649_29264 = G__29269;
continue;
} else {
var temp__4126__auto___29270 = cljs.core.seq(seq__27646_29261);
if(temp__4126__auto___29270){
var seq__27646_29271__$1 = temp__4126__auto___29270;
if(cljs.core.chunked_seq_QMARK_(seq__27646_29271__$1)){
var c__4522__auto___29272 = cljs.core.chunk_first(seq__27646_29271__$1);
var G__29273 = cljs.core.chunk_rest(seq__27646_29271__$1);
var G__29274 = c__4522__auto___29272;
var G__29275 = cljs.core.count(c__4522__auto___29272);
var G__29276 = (0);
seq__27646_29261 = G__29273;
chunk__27647_29262 = G__29274;
count__27648_29263 = G__29275;
i__27649_29264 = G__29276;
continue;
} else {
var arg__14299__auto___29277 = cljs.core.first(seq__27646_29271__$1);
a__14298__auto__.push(arg__14299__auto___29277);

var G__29278 = cljs.core.next(seq__27646_29271__$1);
var G__29279 = null;
var G__29280 = (0);
var G__29281 = (0);
seq__27646_29261 = G__29278;
chunk__27647_29262 = G__29279;
count__27648_29263 = G__29280;
i__27649_29264 = G__29281;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,a__14298__auto__);
};
var header = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29282__i = 0, G__29282__a = new Array(arguments.length -  0);
while (G__29282__i < G__29282__a.length) {G__29282__a[G__29282__i] = arguments[G__29282__i + 0]; ++G__29282__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29282__a,0);
} 
return header__delegate.call(this,args__14297__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__29283){
var args__14297__auto__ = cljs.core.seq(arglist__29283);
return header__delegate(args__14297__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27654_29284 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27655_29285 = null;
var count__27656_29286 = (0);
var i__27657_29287 = (0);
while(true){
if((i__27657_29287 < count__27656_29286)){
var arg__14299__auto___29288 = chunk__27655_29285.cljs$core$IIndexed$_nth$arity$2(null,i__27657_29287);
a__14298__auto__.push(arg__14299__auto___29288);

var G__29289 = seq__27654_29284;
var G__29290 = chunk__27655_29285;
var G__29291 = count__27656_29286;
var G__29292 = (i__27657_29287 + (1));
seq__27654_29284 = G__29289;
chunk__27655_29285 = G__29290;
count__27656_29286 = G__29291;
i__27657_29287 = G__29292;
continue;
} else {
var temp__4126__auto___29293 = cljs.core.seq(seq__27654_29284);
if(temp__4126__auto___29293){
var seq__27654_29294__$1 = temp__4126__auto___29293;
if(cljs.core.chunked_seq_QMARK_(seq__27654_29294__$1)){
var c__4522__auto___29295 = cljs.core.chunk_first(seq__27654_29294__$1);
var G__29296 = cljs.core.chunk_rest(seq__27654_29294__$1);
var G__29297 = c__4522__auto___29295;
var G__29298 = cljs.core.count(c__4522__auto___29295);
var G__29299 = (0);
seq__27654_29284 = G__29296;
chunk__27655_29285 = G__29297;
count__27656_29286 = G__29298;
i__27657_29287 = G__29299;
continue;
} else {
var arg__14299__auto___29300 = cljs.core.first(seq__27654_29294__$1);
a__14298__auto__.push(arg__14299__auto___29300);

var G__29301 = cljs.core.next(seq__27654_29294__$1);
var G__29302 = null;
var G__29303 = (0);
var G__29304 = (0);
seq__27654_29284 = G__29301;
chunk__27655_29285 = G__29302;
count__27656_29286 = G__29303;
i__27657_29287 = G__29304;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,a__14298__auto__);
};
var hr = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29305__i = 0, G__29305__a = new Array(arguments.length -  0);
while (G__29305__i < G__29305__a.length) {G__29305__a[G__29305__i] = arguments[G__29305__i + 0]; ++G__29305__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29305__a,0);
} 
return hr__delegate.call(this,args__14297__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__29306){
var args__14297__auto__ = cljs.core.seq(arglist__29306);
return hr__delegate(args__14297__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27662_29307 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27663_29308 = null;
var count__27664_29309 = (0);
var i__27665_29310 = (0);
while(true){
if((i__27665_29310 < count__27664_29309)){
var arg__14299__auto___29311 = chunk__27663_29308.cljs$core$IIndexed$_nth$arity$2(null,i__27665_29310);
a__14298__auto__.push(arg__14299__auto___29311);

var G__29312 = seq__27662_29307;
var G__29313 = chunk__27663_29308;
var G__29314 = count__27664_29309;
var G__29315 = (i__27665_29310 + (1));
seq__27662_29307 = G__29312;
chunk__27663_29308 = G__29313;
count__27664_29309 = G__29314;
i__27665_29310 = G__29315;
continue;
} else {
var temp__4126__auto___29316 = cljs.core.seq(seq__27662_29307);
if(temp__4126__auto___29316){
var seq__27662_29317__$1 = temp__4126__auto___29316;
if(cljs.core.chunked_seq_QMARK_(seq__27662_29317__$1)){
var c__4522__auto___29318 = cljs.core.chunk_first(seq__27662_29317__$1);
var G__29319 = cljs.core.chunk_rest(seq__27662_29317__$1);
var G__29320 = c__4522__auto___29318;
var G__29321 = cljs.core.count(c__4522__auto___29318);
var G__29322 = (0);
seq__27662_29307 = G__29319;
chunk__27663_29308 = G__29320;
count__27664_29309 = G__29321;
i__27665_29310 = G__29322;
continue;
} else {
var arg__14299__auto___29323 = cljs.core.first(seq__27662_29317__$1);
a__14298__auto__.push(arg__14299__auto___29323);

var G__29324 = cljs.core.next(seq__27662_29317__$1);
var G__29325 = null;
var G__29326 = (0);
var G__29327 = (0);
seq__27662_29307 = G__29324;
chunk__27663_29308 = G__29325;
count__27664_29309 = G__29326;
i__27665_29310 = G__29327;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,a__14298__auto__);
};
var html = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29328__i = 0, G__29328__a = new Array(arguments.length -  0);
while (G__29328__i < G__29328__a.length) {G__29328__a[G__29328__i] = arguments[G__29328__i + 0]; ++G__29328__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29328__a,0);
} 
return html__delegate.call(this,args__14297__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__29329){
var args__14297__auto__ = cljs.core.seq(arglist__29329);
return html__delegate(args__14297__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27670_29330 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27671_29331 = null;
var count__27672_29332 = (0);
var i__27673_29333 = (0);
while(true){
if((i__27673_29333 < count__27672_29332)){
var arg__14299__auto___29334 = chunk__27671_29331.cljs$core$IIndexed$_nth$arity$2(null,i__27673_29333);
a__14298__auto__.push(arg__14299__auto___29334);

var G__29335 = seq__27670_29330;
var G__29336 = chunk__27671_29331;
var G__29337 = count__27672_29332;
var G__29338 = (i__27673_29333 + (1));
seq__27670_29330 = G__29335;
chunk__27671_29331 = G__29336;
count__27672_29332 = G__29337;
i__27673_29333 = G__29338;
continue;
} else {
var temp__4126__auto___29339 = cljs.core.seq(seq__27670_29330);
if(temp__4126__auto___29339){
var seq__27670_29340__$1 = temp__4126__auto___29339;
if(cljs.core.chunked_seq_QMARK_(seq__27670_29340__$1)){
var c__4522__auto___29341 = cljs.core.chunk_first(seq__27670_29340__$1);
var G__29342 = cljs.core.chunk_rest(seq__27670_29340__$1);
var G__29343 = c__4522__auto___29341;
var G__29344 = cljs.core.count(c__4522__auto___29341);
var G__29345 = (0);
seq__27670_29330 = G__29342;
chunk__27671_29331 = G__29343;
count__27672_29332 = G__29344;
i__27673_29333 = G__29345;
continue;
} else {
var arg__14299__auto___29346 = cljs.core.first(seq__27670_29340__$1);
a__14298__auto__.push(arg__14299__auto___29346);

var G__29347 = cljs.core.next(seq__27670_29340__$1);
var G__29348 = null;
var G__29349 = (0);
var G__29350 = (0);
seq__27670_29330 = G__29347;
chunk__27671_29331 = G__29348;
count__27672_29332 = G__29349;
i__27673_29333 = G__29350;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,a__14298__auto__);
};
var i = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29351__i = 0, G__29351__a = new Array(arguments.length -  0);
while (G__29351__i < G__29351__a.length) {G__29351__a[G__29351__i] = arguments[G__29351__i + 0]; ++G__29351__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29351__a,0);
} 
return i__delegate.call(this,args__14297__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__29352){
var args__14297__auto__ = cljs.core.seq(arglist__29352);
return i__delegate(args__14297__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27678_29353 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27679_29354 = null;
var count__27680_29355 = (0);
var i__27681_29356 = (0);
while(true){
if((i__27681_29356 < count__27680_29355)){
var arg__14299__auto___29357 = chunk__27679_29354.cljs$core$IIndexed$_nth$arity$2(null,i__27681_29356);
a__14298__auto__.push(arg__14299__auto___29357);

var G__29358 = seq__27678_29353;
var G__29359 = chunk__27679_29354;
var G__29360 = count__27680_29355;
var G__29361 = (i__27681_29356 + (1));
seq__27678_29353 = G__29358;
chunk__27679_29354 = G__29359;
count__27680_29355 = G__29360;
i__27681_29356 = G__29361;
continue;
} else {
var temp__4126__auto___29362 = cljs.core.seq(seq__27678_29353);
if(temp__4126__auto___29362){
var seq__27678_29363__$1 = temp__4126__auto___29362;
if(cljs.core.chunked_seq_QMARK_(seq__27678_29363__$1)){
var c__4522__auto___29364 = cljs.core.chunk_first(seq__27678_29363__$1);
var G__29365 = cljs.core.chunk_rest(seq__27678_29363__$1);
var G__29366 = c__4522__auto___29364;
var G__29367 = cljs.core.count(c__4522__auto___29364);
var G__29368 = (0);
seq__27678_29353 = G__29365;
chunk__27679_29354 = G__29366;
count__27680_29355 = G__29367;
i__27681_29356 = G__29368;
continue;
} else {
var arg__14299__auto___29369 = cljs.core.first(seq__27678_29363__$1);
a__14298__auto__.push(arg__14299__auto___29369);

var G__29370 = cljs.core.next(seq__27678_29363__$1);
var G__29371 = null;
var G__29372 = (0);
var G__29373 = (0);
seq__27678_29353 = G__29370;
chunk__27679_29354 = G__29371;
count__27680_29355 = G__29372;
i__27681_29356 = G__29373;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,a__14298__auto__);
};
var iframe = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29374__i = 0, G__29374__a = new Array(arguments.length -  0);
while (G__29374__i < G__29374__a.length) {G__29374__a[G__29374__i] = arguments[G__29374__i + 0]; ++G__29374__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29374__a,0);
} 
return iframe__delegate.call(this,args__14297__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__29375){
var args__14297__auto__ = cljs.core.seq(arglist__29375);
return iframe__delegate(args__14297__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27686_29376 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27687_29377 = null;
var count__27688_29378 = (0);
var i__27689_29379 = (0);
while(true){
if((i__27689_29379 < count__27688_29378)){
var arg__14299__auto___29380 = chunk__27687_29377.cljs$core$IIndexed$_nth$arity$2(null,i__27689_29379);
a__14298__auto__.push(arg__14299__auto___29380);

var G__29381 = seq__27686_29376;
var G__29382 = chunk__27687_29377;
var G__29383 = count__27688_29378;
var G__29384 = (i__27689_29379 + (1));
seq__27686_29376 = G__29381;
chunk__27687_29377 = G__29382;
count__27688_29378 = G__29383;
i__27689_29379 = G__29384;
continue;
} else {
var temp__4126__auto___29385 = cljs.core.seq(seq__27686_29376);
if(temp__4126__auto___29385){
var seq__27686_29386__$1 = temp__4126__auto___29385;
if(cljs.core.chunked_seq_QMARK_(seq__27686_29386__$1)){
var c__4522__auto___29387 = cljs.core.chunk_first(seq__27686_29386__$1);
var G__29388 = cljs.core.chunk_rest(seq__27686_29386__$1);
var G__29389 = c__4522__auto___29387;
var G__29390 = cljs.core.count(c__4522__auto___29387);
var G__29391 = (0);
seq__27686_29376 = G__29388;
chunk__27687_29377 = G__29389;
count__27688_29378 = G__29390;
i__27689_29379 = G__29391;
continue;
} else {
var arg__14299__auto___29392 = cljs.core.first(seq__27686_29386__$1);
a__14298__auto__.push(arg__14299__auto___29392);

var G__29393 = cljs.core.next(seq__27686_29386__$1);
var G__29394 = null;
var G__29395 = (0);
var G__29396 = (0);
seq__27686_29376 = G__29393;
chunk__27687_29377 = G__29394;
count__27688_29378 = G__29395;
i__27689_29379 = G__29396;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,a__14298__auto__);
};
var img = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29397__i = 0, G__29397__a = new Array(arguments.length -  0);
while (G__29397__i < G__29397__a.length) {G__29397__a[G__29397__i] = arguments[G__29397__i + 0]; ++G__29397__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29397__a,0);
} 
return img__delegate.call(this,args__14297__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__29398){
var args__14297__auto__ = cljs.core.seq(arglist__29398);
return img__delegate(args__14297__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27694_29399 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27695_29400 = null;
var count__27696_29401 = (0);
var i__27697_29402 = (0);
while(true){
if((i__27697_29402 < count__27696_29401)){
var arg__14299__auto___29403 = chunk__27695_29400.cljs$core$IIndexed$_nth$arity$2(null,i__27697_29402);
a__14298__auto__.push(arg__14299__auto___29403);

var G__29404 = seq__27694_29399;
var G__29405 = chunk__27695_29400;
var G__29406 = count__27696_29401;
var G__29407 = (i__27697_29402 + (1));
seq__27694_29399 = G__29404;
chunk__27695_29400 = G__29405;
count__27696_29401 = G__29406;
i__27697_29402 = G__29407;
continue;
} else {
var temp__4126__auto___29408 = cljs.core.seq(seq__27694_29399);
if(temp__4126__auto___29408){
var seq__27694_29409__$1 = temp__4126__auto___29408;
if(cljs.core.chunked_seq_QMARK_(seq__27694_29409__$1)){
var c__4522__auto___29410 = cljs.core.chunk_first(seq__27694_29409__$1);
var G__29411 = cljs.core.chunk_rest(seq__27694_29409__$1);
var G__29412 = c__4522__auto___29410;
var G__29413 = cljs.core.count(c__4522__auto___29410);
var G__29414 = (0);
seq__27694_29399 = G__29411;
chunk__27695_29400 = G__29412;
count__27696_29401 = G__29413;
i__27697_29402 = G__29414;
continue;
} else {
var arg__14299__auto___29415 = cljs.core.first(seq__27694_29409__$1);
a__14298__auto__.push(arg__14299__auto___29415);

var G__29416 = cljs.core.next(seq__27694_29409__$1);
var G__29417 = null;
var G__29418 = (0);
var G__29419 = (0);
seq__27694_29399 = G__29416;
chunk__27695_29400 = G__29417;
count__27696_29401 = G__29418;
i__27697_29402 = G__29419;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,a__14298__auto__);
};
var input = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29420__i = 0, G__29420__a = new Array(arguments.length -  0);
while (G__29420__i < G__29420__a.length) {G__29420__a[G__29420__i] = arguments[G__29420__i + 0]; ++G__29420__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29420__a,0);
} 
return input__delegate.call(this,args__14297__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__29421){
var args__14297__auto__ = cljs.core.seq(arglist__29421);
return input__delegate(args__14297__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27702_29422 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27703_29423 = null;
var count__27704_29424 = (0);
var i__27705_29425 = (0);
while(true){
if((i__27705_29425 < count__27704_29424)){
var arg__14299__auto___29426 = chunk__27703_29423.cljs$core$IIndexed$_nth$arity$2(null,i__27705_29425);
a__14298__auto__.push(arg__14299__auto___29426);

var G__29427 = seq__27702_29422;
var G__29428 = chunk__27703_29423;
var G__29429 = count__27704_29424;
var G__29430 = (i__27705_29425 + (1));
seq__27702_29422 = G__29427;
chunk__27703_29423 = G__29428;
count__27704_29424 = G__29429;
i__27705_29425 = G__29430;
continue;
} else {
var temp__4126__auto___29431 = cljs.core.seq(seq__27702_29422);
if(temp__4126__auto___29431){
var seq__27702_29432__$1 = temp__4126__auto___29431;
if(cljs.core.chunked_seq_QMARK_(seq__27702_29432__$1)){
var c__4522__auto___29433 = cljs.core.chunk_first(seq__27702_29432__$1);
var G__29434 = cljs.core.chunk_rest(seq__27702_29432__$1);
var G__29435 = c__4522__auto___29433;
var G__29436 = cljs.core.count(c__4522__auto___29433);
var G__29437 = (0);
seq__27702_29422 = G__29434;
chunk__27703_29423 = G__29435;
count__27704_29424 = G__29436;
i__27705_29425 = G__29437;
continue;
} else {
var arg__14299__auto___29438 = cljs.core.first(seq__27702_29432__$1);
a__14298__auto__.push(arg__14299__auto___29438);

var G__29439 = cljs.core.next(seq__27702_29432__$1);
var G__29440 = null;
var G__29441 = (0);
var G__29442 = (0);
seq__27702_29422 = G__29439;
chunk__27703_29423 = G__29440;
count__27704_29424 = G__29441;
i__27705_29425 = G__29442;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,a__14298__auto__);
};
var ins = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29443__i = 0, G__29443__a = new Array(arguments.length -  0);
while (G__29443__i < G__29443__a.length) {G__29443__a[G__29443__i] = arguments[G__29443__i + 0]; ++G__29443__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29443__a,0);
} 
return ins__delegate.call(this,args__14297__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__29444){
var args__14297__auto__ = cljs.core.seq(arglist__29444);
return ins__delegate(args__14297__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27710_29445 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27711_29446 = null;
var count__27712_29447 = (0);
var i__27713_29448 = (0);
while(true){
if((i__27713_29448 < count__27712_29447)){
var arg__14299__auto___29449 = chunk__27711_29446.cljs$core$IIndexed$_nth$arity$2(null,i__27713_29448);
a__14298__auto__.push(arg__14299__auto___29449);

var G__29450 = seq__27710_29445;
var G__29451 = chunk__27711_29446;
var G__29452 = count__27712_29447;
var G__29453 = (i__27713_29448 + (1));
seq__27710_29445 = G__29450;
chunk__27711_29446 = G__29451;
count__27712_29447 = G__29452;
i__27713_29448 = G__29453;
continue;
} else {
var temp__4126__auto___29454 = cljs.core.seq(seq__27710_29445);
if(temp__4126__auto___29454){
var seq__27710_29455__$1 = temp__4126__auto___29454;
if(cljs.core.chunked_seq_QMARK_(seq__27710_29455__$1)){
var c__4522__auto___29456 = cljs.core.chunk_first(seq__27710_29455__$1);
var G__29457 = cljs.core.chunk_rest(seq__27710_29455__$1);
var G__29458 = c__4522__auto___29456;
var G__29459 = cljs.core.count(c__4522__auto___29456);
var G__29460 = (0);
seq__27710_29445 = G__29457;
chunk__27711_29446 = G__29458;
count__27712_29447 = G__29459;
i__27713_29448 = G__29460;
continue;
} else {
var arg__14299__auto___29461 = cljs.core.first(seq__27710_29455__$1);
a__14298__auto__.push(arg__14299__auto___29461);

var G__29462 = cljs.core.next(seq__27710_29455__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__27710_29445 = G__29462;
chunk__27711_29446 = G__29463;
count__27712_29447 = G__29464;
i__27713_29448 = G__29465;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,a__14298__auto__);
};
var kbd = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29466__i = 0, G__29466__a = new Array(arguments.length -  0);
while (G__29466__i < G__29466__a.length) {G__29466__a[G__29466__i] = arguments[G__29466__i + 0]; ++G__29466__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29466__a,0);
} 
return kbd__delegate.call(this,args__14297__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__29467){
var args__14297__auto__ = cljs.core.seq(arglist__29467);
return kbd__delegate(args__14297__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27718_29468 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27719_29469 = null;
var count__27720_29470 = (0);
var i__27721_29471 = (0);
while(true){
if((i__27721_29471 < count__27720_29470)){
var arg__14299__auto___29472 = chunk__27719_29469.cljs$core$IIndexed$_nth$arity$2(null,i__27721_29471);
a__14298__auto__.push(arg__14299__auto___29472);

var G__29473 = seq__27718_29468;
var G__29474 = chunk__27719_29469;
var G__29475 = count__27720_29470;
var G__29476 = (i__27721_29471 + (1));
seq__27718_29468 = G__29473;
chunk__27719_29469 = G__29474;
count__27720_29470 = G__29475;
i__27721_29471 = G__29476;
continue;
} else {
var temp__4126__auto___29477 = cljs.core.seq(seq__27718_29468);
if(temp__4126__auto___29477){
var seq__27718_29478__$1 = temp__4126__auto___29477;
if(cljs.core.chunked_seq_QMARK_(seq__27718_29478__$1)){
var c__4522__auto___29479 = cljs.core.chunk_first(seq__27718_29478__$1);
var G__29480 = cljs.core.chunk_rest(seq__27718_29478__$1);
var G__29481 = c__4522__auto___29479;
var G__29482 = cljs.core.count(c__4522__auto___29479);
var G__29483 = (0);
seq__27718_29468 = G__29480;
chunk__27719_29469 = G__29481;
count__27720_29470 = G__29482;
i__27721_29471 = G__29483;
continue;
} else {
var arg__14299__auto___29484 = cljs.core.first(seq__27718_29478__$1);
a__14298__auto__.push(arg__14299__auto___29484);

var G__29485 = cljs.core.next(seq__27718_29478__$1);
var G__29486 = null;
var G__29487 = (0);
var G__29488 = (0);
seq__27718_29468 = G__29485;
chunk__27719_29469 = G__29486;
count__27720_29470 = G__29487;
i__27721_29471 = G__29488;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,a__14298__auto__);
};
var keygen = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29489__i = 0, G__29489__a = new Array(arguments.length -  0);
while (G__29489__i < G__29489__a.length) {G__29489__a[G__29489__i] = arguments[G__29489__i + 0]; ++G__29489__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29489__a,0);
} 
return keygen__delegate.call(this,args__14297__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__29490){
var args__14297__auto__ = cljs.core.seq(arglist__29490);
return keygen__delegate(args__14297__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27726_29491 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27727_29492 = null;
var count__27728_29493 = (0);
var i__27729_29494 = (0);
while(true){
if((i__27729_29494 < count__27728_29493)){
var arg__14299__auto___29495 = chunk__27727_29492.cljs$core$IIndexed$_nth$arity$2(null,i__27729_29494);
a__14298__auto__.push(arg__14299__auto___29495);

var G__29496 = seq__27726_29491;
var G__29497 = chunk__27727_29492;
var G__29498 = count__27728_29493;
var G__29499 = (i__27729_29494 + (1));
seq__27726_29491 = G__29496;
chunk__27727_29492 = G__29497;
count__27728_29493 = G__29498;
i__27729_29494 = G__29499;
continue;
} else {
var temp__4126__auto___29500 = cljs.core.seq(seq__27726_29491);
if(temp__4126__auto___29500){
var seq__27726_29501__$1 = temp__4126__auto___29500;
if(cljs.core.chunked_seq_QMARK_(seq__27726_29501__$1)){
var c__4522__auto___29502 = cljs.core.chunk_first(seq__27726_29501__$1);
var G__29503 = cljs.core.chunk_rest(seq__27726_29501__$1);
var G__29504 = c__4522__auto___29502;
var G__29505 = cljs.core.count(c__4522__auto___29502);
var G__29506 = (0);
seq__27726_29491 = G__29503;
chunk__27727_29492 = G__29504;
count__27728_29493 = G__29505;
i__27729_29494 = G__29506;
continue;
} else {
var arg__14299__auto___29507 = cljs.core.first(seq__27726_29501__$1);
a__14298__auto__.push(arg__14299__auto___29507);

var G__29508 = cljs.core.next(seq__27726_29501__$1);
var G__29509 = null;
var G__29510 = (0);
var G__29511 = (0);
seq__27726_29491 = G__29508;
chunk__27727_29492 = G__29509;
count__27728_29493 = G__29510;
i__27729_29494 = G__29511;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,a__14298__auto__);
};
var label = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29512__i = 0, G__29512__a = new Array(arguments.length -  0);
while (G__29512__i < G__29512__a.length) {G__29512__a[G__29512__i] = arguments[G__29512__i + 0]; ++G__29512__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29512__a,0);
} 
return label__delegate.call(this,args__14297__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__29513){
var args__14297__auto__ = cljs.core.seq(arglist__29513);
return label__delegate(args__14297__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27734_29514 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27735_29515 = null;
var count__27736_29516 = (0);
var i__27737_29517 = (0);
while(true){
if((i__27737_29517 < count__27736_29516)){
var arg__14299__auto___29518 = chunk__27735_29515.cljs$core$IIndexed$_nth$arity$2(null,i__27737_29517);
a__14298__auto__.push(arg__14299__auto___29518);

var G__29519 = seq__27734_29514;
var G__29520 = chunk__27735_29515;
var G__29521 = count__27736_29516;
var G__29522 = (i__27737_29517 + (1));
seq__27734_29514 = G__29519;
chunk__27735_29515 = G__29520;
count__27736_29516 = G__29521;
i__27737_29517 = G__29522;
continue;
} else {
var temp__4126__auto___29523 = cljs.core.seq(seq__27734_29514);
if(temp__4126__auto___29523){
var seq__27734_29524__$1 = temp__4126__auto___29523;
if(cljs.core.chunked_seq_QMARK_(seq__27734_29524__$1)){
var c__4522__auto___29525 = cljs.core.chunk_first(seq__27734_29524__$1);
var G__29526 = cljs.core.chunk_rest(seq__27734_29524__$1);
var G__29527 = c__4522__auto___29525;
var G__29528 = cljs.core.count(c__4522__auto___29525);
var G__29529 = (0);
seq__27734_29514 = G__29526;
chunk__27735_29515 = G__29527;
count__27736_29516 = G__29528;
i__27737_29517 = G__29529;
continue;
} else {
var arg__14299__auto___29530 = cljs.core.first(seq__27734_29524__$1);
a__14298__auto__.push(arg__14299__auto___29530);

var G__29531 = cljs.core.next(seq__27734_29524__$1);
var G__29532 = null;
var G__29533 = (0);
var G__29534 = (0);
seq__27734_29514 = G__29531;
chunk__27735_29515 = G__29532;
count__27736_29516 = G__29533;
i__27737_29517 = G__29534;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,a__14298__auto__);
};
var legend = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29535__i = 0, G__29535__a = new Array(arguments.length -  0);
while (G__29535__i < G__29535__a.length) {G__29535__a[G__29535__i] = arguments[G__29535__i + 0]; ++G__29535__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29535__a,0);
} 
return legend__delegate.call(this,args__14297__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__29536){
var args__14297__auto__ = cljs.core.seq(arglist__29536);
return legend__delegate(args__14297__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27742_29537 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27743_29538 = null;
var count__27744_29539 = (0);
var i__27745_29540 = (0);
while(true){
if((i__27745_29540 < count__27744_29539)){
var arg__14299__auto___29541 = chunk__27743_29538.cljs$core$IIndexed$_nth$arity$2(null,i__27745_29540);
a__14298__auto__.push(arg__14299__auto___29541);

var G__29542 = seq__27742_29537;
var G__29543 = chunk__27743_29538;
var G__29544 = count__27744_29539;
var G__29545 = (i__27745_29540 + (1));
seq__27742_29537 = G__29542;
chunk__27743_29538 = G__29543;
count__27744_29539 = G__29544;
i__27745_29540 = G__29545;
continue;
} else {
var temp__4126__auto___29546 = cljs.core.seq(seq__27742_29537);
if(temp__4126__auto___29546){
var seq__27742_29547__$1 = temp__4126__auto___29546;
if(cljs.core.chunked_seq_QMARK_(seq__27742_29547__$1)){
var c__4522__auto___29548 = cljs.core.chunk_first(seq__27742_29547__$1);
var G__29549 = cljs.core.chunk_rest(seq__27742_29547__$1);
var G__29550 = c__4522__auto___29548;
var G__29551 = cljs.core.count(c__4522__auto___29548);
var G__29552 = (0);
seq__27742_29537 = G__29549;
chunk__27743_29538 = G__29550;
count__27744_29539 = G__29551;
i__27745_29540 = G__29552;
continue;
} else {
var arg__14299__auto___29553 = cljs.core.first(seq__27742_29547__$1);
a__14298__auto__.push(arg__14299__auto___29553);

var G__29554 = cljs.core.next(seq__27742_29547__$1);
var G__29555 = null;
var G__29556 = (0);
var G__29557 = (0);
seq__27742_29537 = G__29554;
chunk__27743_29538 = G__29555;
count__27744_29539 = G__29556;
i__27745_29540 = G__29557;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,a__14298__auto__);
};
var li = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29558__i = 0, G__29558__a = new Array(arguments.length -  0);
while (G__29558__i < G__29558__a.length) {G__29558__a[G__29558__i] = arguments[G__29558__i + 0]; ++G__29558__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29558__a,0);
} 
return li__delegate.call(this,args__14297__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__29559){
var args__14297__auto__ = cljs.core.seq(arglist__29559);
return li__delegate(args__14297__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27750_29560 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27751_29561 = null;
var count__27752_29562 = (0);
var i__27753_29563 = (0);
while(true){
if((i__27753_29563 < count__27752_29562)){
var arg__14299__auto___29564 = chunk__27751_29561.cljs$core$IIndexed$_nth$arity$2(null,i__27753_29563);
a__14298__auto__.push(arg__14299__auto___29564);

var G__29565 = seq__27750_29560;
var G__29566 = chunk__27751_29561;
var G__29567 = count__27752_29562;
var G__29568 = (i__27753_29563 + (1));
seq__27750_29560 = G__29565;
chunk__27751_29561 = G__29566;
count__27752_29562 = G__29567;
i__27753_29563 = G__29568;
continue;
} else {
var temp__4126__auto___29569 = cljs.core.seq(seq__27750_29560);
if(temp__4126__auto___29569){
var seq__27750_29570__$1 = temp__4126__auto___29569;
if(cljs.core.chunked_seq_QMARK_(seq__27750_29570__$1)){
var c__4522__auto___29571 = cljs.core.chunk_first(seq__27750_29570__$1);
var G__29572 = cljs.core.chunk_rest(seq__27750_29570__$1);
var G__29573 = c__4522__auto___29571;
var G__29574 = cljs.core.count(c__4522__auto___29571);
var G__29575 = (0);
seq__27750_29560 = G__29572;
chunk__27751_29561 = G__29573;
count__27752_29562 = G__29574;
i__27753_29563 = G__29575;
continue;
} else {
var arg__14299__auto___29576 = cljs.core.first(seq__27750_29570__$1);
a__14298__auto__.push(arg__14299__auto___29576);

var G__29577 = cljs.core.next(seq__27750_29570__$1);
var G__29578 = null;
var G__29579 = (0);
var G__29580 = (0);
seq__27750_29560 = G__29577;
chunk__27751_29561 = G__29578;
count__27752_29562 = G__29579;
i__27753_29563 = G__29580;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,a__14298__auto__);
};
var link = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29581__i = 0, G__29581__a = new Array(arguments.length -  0);
while (G__29581__i < G__29581__a.length) {G__29581__a[G__29581__i] = arguments[G__29581__i + 0]; ++G__29581__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29581__a,0);
} 
return link__delegate.call(this,args__14297__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__29582){
var args__14297__auto__ = cljs.core.seq(arglist__29582);
return link__delegate(args__14297__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27758_29583 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27759_29584 = null;
var count__27760_29585 = (0);
var i__27761_29586 = (0);
while(true){
if((i__27761_29586 < count__27760_29585)){
var arg__14299__auto___29587 = chunk__27759_29584.cljs$core$IIndexed$_nth$arity$2(null,i__27761_29586);
a__14298__auto__.push(arg__14299__auto___29587);

var G__29588 = seq__27758_29583;
var G__29589 = chunk__27759_29584;
var G__29590 = count__27760_29585;
var G__29591 = (i__27761_29586 + (1));
seq__27758_29583 = G__29588;
chunk__27759_29584 = G__29589;
count__27760_29585 = G__29590;
i__27761_29586 = G__29591;
continue;
} else {
var temp__4126__auto___29592 = cljs.core.seq(seq__27758_29583);
if(temp__4126__auto___29592){
var seq__27758_29593__$1 = temp__4126__auto___29592;
if(cljs.core.chunked_seq_QMARK_(seq__27758_29593__$1)){
var c__4522__auto___29594 = cljs.core.chunk_first(seq__27758_29593__$1);
var G__29595 = cljs.core.chunk_rest(seq__27758_29593__$1);
var G__29596 = c__4522__auto___29594;
var G__29597 = cljs.core.count(c__4522__auto___29594);
var G__29598 = (0);
seq__27758_29583 = G__29595;
chunk__27759_29584 = G__29596;
count__27760_29585 = G__29597;
i__27761_29586 = G__29598;
continue;
} else {
var arg__14299__auto___29599 = cljs.core.first(seq__27758_29593__$1);
a__14298__auto__.push(arg__14299__auto___29599);

var G__29600 = cljs.core.next(seq__27758_29593__$1);
var G__29601 = null;
var G__29602 = (0);
var G__29603 = (0);
seq__27758_29583 = G__29600;
chunk__27759_29584 = G__29601;
count__27760_29585 = G__29602;
i__27761_29586 = G__29603;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,a__14298__auto__);
};
var main = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29604__i = 0, G__29604__a = new Array(arguments.length -  0);
while (G__29604__i < G__29604__a.length) {G__29604__a[G__29604__i] = arguments[G__29604__i + 0]; ++G__29604__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29604__a,0);
} 
return main__delegate.call(this,args__14297__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__29605){
var args__14297__auto__ = cljs.core.seq(arglist__29605);
return main__delegate(args__14297__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27766_29606 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27767_29607 = null;
var count__27768_29608 = (0);
var i__27769_29609 = (0);
while(true){
if((i__27769_29609 < count__27768_29608)){
var arg__14299__auto___29610 = chunk__27767_29607.cljs$core$IIndexed$_nth$arity$2(null,i__27769_29609);
a__14298__auto__.push(arg__14299__auto___29610);

var G__29611 = seq__27766_29606;
var G__29612 = chunk__27767_29607;
var G__29613 = count__27768_29608;
var G__29614 = (i__27769_29609 + (1));
seq__27766_29606 = G__29611;
chunk__27767_29607 = G__29612;
count__27768_29608 = G__29613;
i__27769_29609 = G__29614;
continue;
} else {
var temp__4126__auto___29615 = cljs.core.seq(seq__27766_29606);
if(temp__4126__auto___29615){
var seq__27766_29616__$1 = temp__4126__auto___29615;
if(cljs.core.chunked_seq_QMARK_(seq__27766_29616__$1)){
var c__4522__auto___29617 = cljs.core.chunk_first(seq__27766_29616__$1);
var G__29618 = cljs.core.chunk_rest(seq__27766_29616__$1);
var G__29619 = c__4522__auto___29617;
var G__29620 = cljs.core.count(c__4522__auto___29617);
var G__29621 = (0);
seq__27766_29606 = G__29618;
chunk__27767_29607 = G__29619;
count__27768_29608 = G__29620;
i__27769_29609 = G__29621;
continue;
} else {
var arg__14299__auto___29622 = cljs.core.first(seq__27766_29616__$1);
a__14298__auto__.push(arg__14299__auto___29622);

var G__29623 = cljs.core.next(seq__27766_29616__$1);
var G__29624 = null;
var G__29625 = (0);
var G__29626 = (0);
seq__27766_29606 = G__29623;
chunk__27767_29607 = G__29624;
count__27768_29608 = G__29625;
i__27769_29609 = G__29626;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,a__14298__auto__);
};
var map = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29627__i = 0, G__29627__a = new Array(arguments.length -  0);
while (G__29627__i < G__29627__a.length) {G__29627__a[G__29627__i] = arguments[G__29627__i + 0]; ++G__29627__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29627__a,0);
} 
return map__delegate.call(this,args__14297__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__29628){
var args__14297__auto__ = cljs.core.seq(arglist__29628);
return map__delegate(args__14297__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27774_29629 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27775_29630 = null;
var count__27776_29631 = (0);
var i__27777_29632 = (0);
while(true){
if((i__27777_29632 < count__27776_29631)){
var arg__14299__auto___29633 = chunk__27775_29630.cljs$core$IIndexed$_nth$arity$2(null,i__27777_29632);
a__14298__auto__.push(arg__14299__auto___29633);

var G__29634 = seq__27774_29629;
var G__29635 = chunk__27775_29630;
var G__29636 = count__27776_29631;
var G__29637 = (i__27777_29632 + (1));
seq__27774_29629 = G__29634;
chunk__27775_29630 = G__29635;
count__27776_29631 = G__29636;
i__27777_29632 = G__29637;
continue;
} else {
var temp__4126__auto___29638 = cljs.core.seq(seq__27774_29629);
if(temp__4126__auto___29638){
var seq__27774_29639__$1 = temp__4126__auto___29638;
if(cljs.core.chunked_seq_QMARK_(seq__27774_29639__$1)){
var c__4522__auto___29640 = cljs.core.chunk_first(seq__27774_29639__$1);
var G__29641 = cljs.core.chunk_rest(seq__27774_29639__$1);
var G__29642 = c__4522__auto___29640;
var G__29643 = cljs.core.count(c__4522__auto___29640);
var G__29644 = (0);
seq__27774_29629 = G__29641;
chunk__27775_29630 = G__29642;
count__27776_29631 = G__29643;
i__27777_29632 = G__29644;
continue;
} else {
var arg__14299__auto___29645 = cljs.core.first(seq__27774_29639__$1);
a__14298__auto__.push(arg__14299__auto___29645);

var G__29646 = cljs.core.next(seq__27774_29639__$1);
var G__29647 = null;
var G__29648 = (0);
var G__29649 = (0);
seq__27774_29629 = G__29646;
chunk__27775_29630 = G__29647;
count__27776_29631 = G__29648;
i__27777_29632 = G__29649;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,a__14298__auto__);
};
var mark = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29650__i = 0, G__29650__a = new Array(arguments.length -  0);
while (G__29650__i < G__29650__a.length) {G__29650__a[G__29650__i] = arguments[G__29650__i + 0]; ++G__29650__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29650__a,0);
} 
return mark__delegate.call(this,args__14297__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__29651){
var args__14297__auto__ = cljs.core.seq(arglist__29651);
return mark__delegate(args__14297__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27782_29652 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27783_29653 = null;
var count__27784_29654 = (0);
var i__27785_29655 = (0);
while(true){
if((i__27785_29655 < count__27784_29654)){
var arg__14299__auto___29656 = chunk__27783_29653.cljs$core$IIndexed$_nth$arity$2(null,i__27785_29655);
a__14298__auto__.push(arg__14299__auto___29656);

var G__29657 = seq__27782_29652;
var G__29658 = chunk__27783_29653;
var G__29659 = count__27784_29654;
var G__29660 = (i__27785_29655 + (1));
seq__27782_29652 = G__29657;
chunk__27783_29653 = G__29658;
count__27784_29654 = G__29659;
i__27785_29655 = G__29660;
continue;
} else {
var temp__4126__auto___29661 = cljs.core.seq(seq__27782_29652);
if(temp__4126__auto___29661){
var seq__27782_29662__$1 = temp__4126__auto___29661;
if(cljs.core.chunked_seq_QMARK_(seq__27782_29662__$1)){
var c__4522__auto___29663 = cljs.core.chunk_first(seq__27782_29662__$1);
var G__29664 = cljs.core.chunk_rest(seq__27782_29662__$1);
var G__29665 = c__4522__auto___29663;
var G__29666 = cljs.core.count(c__4522__auto___29663);
var G__29667 = (0);
seq__27782_29652 = G__29664;
chunk__27783_29653 = G__29665;
count__27784_29654 = G__29666;
i__27785_29655 = G__29667;
continue;
} else {
var arg__14299__auto___29668 = cljs.core.first(seq__27782_29662__$1);
a__14298__auto__.push(arg__14299__auto___29668);

var G__29669 = cljs.core.next(seq__27782_29662__$1);
var G__29670 = null;
var G__29671 = (0);
var G__29672 = (0);
seq__27782_29652 = G__29669;
chunk__27783_29653 = G__29670;
count__27784_29654 = G__29671;
i__27785_29655 = G__29672;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,a__14298__auto__);
};
var menu = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29673__i = 0, G__29673__a = new Array(arguments.length -  0);
while (G__29673__i < G__29673__a.length) {G__29673__a[G__29673__i] = arguments[G__29673__i + 0]; ++G__29673__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29673__a,0);
} 
return menu__delegate.call(this,args__14297__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__29674){
var args__14297__auto__ = cljs.core.seq(arglist__29674);
return menu__delegate(args__14297__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27790_29675 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27791_29676 = null;
var count__27792_29677 = (0);
var i__27793_29678 = (0);
while(true){
if((i__27793_29678 < count__27792_29677)){
var arg__14299__auto___29679 = chunk__27791_29676.cljs$core$IIndexed$_nth$arity$2(null,i__27793_29678);
a__14298__auto__.push(arg__14299__auto___29679);

var G__29680 = seq__27790_29675;
var G__29681 = chunk__27791_29676;
var G__29682 = count__27792_29677;
var G__29683 = (i__27793_29678 + (1));
seq__27790_29675 = G__29680;
chunk__27791_29676 = G__29681;
count__27792_29677 = G__29682;
i__27793_29678 = G__29683;
continue;
} else {
var temp__4126__auto___29684 = cljs.core.seq(seq__27790_29675);
if(temp__4126__auto___29684){
var seq__27790_29685__$1 = temp__4126__auto___29684;
if(cljs.core.chunked_seq_QMARK_(seq__27790_29685__$1)){
var c__4522__auto___29686 = cljs.core.chunk_first(seq__27790_29685__$1);
var G__29687 = cljs.core.chunk_rest(seq__27790_29685__$1);
var G__29688 = c__4522__auto___29686;
var G__29689 = cljs.core.count(c__4522__auto___29686);
var G__29690 = (0);
seq__27790_29675 = G__29687;
chunk__27791_29676 = G__29688;
count__27792_29677 = G__29689;
i__27793_29678 = G__29690;
continue;
} else {
var arg__14299__auto___29691 = cljs.core.first(seq__27790_29685__$1);
a__14298__auto__.push(arg__14299__auto___29691);

var G__29692 = cljs.core.next(seq__27790_29685__$1);
var G__29693 = null;
var G__29694 = (0);
var G__29695 = (0);
seq__27790_29675 = G__29692;
chunk__27791_29676 = G__29693;
count__27792_29677 = G__29694;
i__27793_29678 = G__29695;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,a__14298__auto__);
};
var menuitem = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29696__i = 0, G__29696__a = new Array(arguments.length -  0);
while (G__29696__i < G__29696__a.length) {G__29696__a[G__29696__i] = arguments[G__29696__i + 0]; ++G__29696__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29696__a,0);
} 
return menuitem__delegate.call(this,args__14297__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__29697){
var args__14297__auto__ = cljs.core.seq(arglist__29697);
return menuitem__delegate(args__14297__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27798_29698 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27799_29699 = null;
var count__27800_29700 = (0);
var i__27801_29701 = (0);
while(true){
if((i__27801_29701 < count__27800_29700)){
var arg__14299__auto___29702 = chunk__27799_29699.cljs$core$IIndexed$_nth$arity$2(null,i__27801_29701);
a__14298__auto__.push(arg__14299__auto___29702);

var G__29703 = seq__27798_29698;
var G__29704 = chunk__27799_29699;
var G__29705 = count__27800_29700;
var G__29706 = (i__27801_29701 + (1));
seq__27798_29698 = G__29703;
chunk__27799_29699 = G__29704;
count__27800_29700 = G__29705;
i__27801_29701 = G__29706;
continue;
} else {
var temp__4126__auto___29707 = cljs.core.seq(seq__27798_29698);
if(temp__4126__auto___29707){
var seq__27798_29708__$1 = temp__4126__auto___29707;
if(cljs.core.chunked_seq_QMARK_(seq__27798_29708__$1)){
var c__4522__auto___29709 = cljs.core.chunk_first(seq__27798_29708__$1);
var G__29710 = cljs.core.chunk_rest(seq__27798_29708__$1);
var G__29711 = c__4522__auto___29709;
var G__29712 = cljs.core.count(c__4522__auto___29709);
var G__29713 = (0);
seq__27798_29698 = G__29710;
chunk__27799_29699 = G__29711;
count__27800_29700 = G__29712;
i__27801_29701 = G__29713;
continue;
} else {
var arg__14299__auto___29714 = cljs.core.first(seq__27798_29708__$1);
a__14298__auto__.push(arg__14299__auto___29714);

var G__29715 = cljs.core.next(seq__27798_29708__$1);
var G__29716 = null;
var G__29717 = (0);
var G__29718 = (0);
seq__27798_29698 = G__29715;
chunk__27799_29699 = G__29716;
count__27800_29700 = G__29717;
i__27801_29701 = G__29718;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,a__14298__auto__);
};
var meta = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29719__i = 0, G__29719__a = new Array(arguments.length -  0);
while (G__29719__i < G__29719__a.length) {G__29719__a[G__29719__i] = arguments[G__29719__i + 0]; ++G__29719__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29719__a,0);
} 
return meta__delegate.call(this,args__14297__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__29720){
var args__14297__auto__ = cljs.core.seq(arglist__29720);
return meta__delegate(args__14297__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27806_29721 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27807_29722 = null;
var count__27808_29723 = (0);
var i__27809_29724 = (0);
while(true){
if((i__27809_29724 < count__27808_29723)){
var arg__14299__auto___29725 = chunk__27807_29722.cljs$core$IIndexed$_nth$arity$2(null,i__27809_29724);
a__14298__auto__.push(arg__14299__auto___29725);

var G__29726 = seq__27806_29721;
var G__29727 = chunk__27807_29722;
var G__29728 = count__27808_29723;
var G__29729 = (i__27809_29724 + (1));
seq__27806_29721 = G__29726;
chunk__27807_29722 = G__29727;
count__27808_29723 = G__29728;
i__27809_29724 = G__29729;
continue;
} else {
var temp__4126__auto___29730 = cljs.core.seq(seq__27806_29721);
if(temp__4126__auto___29730){
var seq__27806_29731__$1 = temp__4126__auto___29730;
if(cljs.core.chunked_seq_QMARK_(seq__27806_29731__$1)){
var c__4522__auto___29732 = cljs.core.chunk_first(seq__27806_29731__$1);
var G__29733 = cljs.core.chunk_rest(seq__27806_29731__$1);
var G__29734 = c__4522__auto___29732;
var G__29735 = cljs.core.count(c__4522__auto___29732);
var G__29736 = (0);
seq__27806_29721 = G__29733;
chunk__27807_29722 = G__29734;
count__27808_29723 = G__29735;
i__27809_29724 = G__29736;
continue;
} else {
var arg__14299__auto___29737 = cljs.core.first(seq__27806_29731__$1);
a__14298__auto__.push(arg__14299__auto___29737);

var G__29738 = cljs.core.next(seq__27806_29731__$1);
var G__29739 = null;
var G__29740 = (0);
var G__29741 = (0);
seq__27806_29721 = G__29738;
chunk__27807_29722 = G__29739;
count__27808_29723 = G__29740;
i__27809_29724 = G__29741;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,a__14298__auto__);
};
var meter = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29742__i = 0, G__29742__a = new Array(arguments.length -  0);
while (G__29742__i < G__29742__a.length) {G__29742__a[G__29742__i] = arguments[G__29742__i + 0]; ++G__29742__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29742__a,0);
} 
return meter__delegate.call(this,args__14297__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__29743){
var args__14297__auto__ = cljs.core.seq(arglist__29743);
return meter__delegate(args__14297__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27814_29744 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27815_29745 = null;
var count__27816_29746 = (0);
var i__27817_29747 = (0);
while(true){
if((i__27817_29747 < count__27816_29746)){
var arg__14299__auto___29748 = chunk__27815_29745.cljs$core$IIndexed$_nth$arity$2(null,i__27817_29747);
a__14298__auto__.push(arg__14299__auto___29748);

var G__29749 = seq__27814_29744;
var G__29750 = chunk__27815_29745;
var G__29751 = count__27816_29746;
var G__29752 = (i__27817_29747 + (1));
seq__27814_29744 = G__29749;
chunk__27815_29745 = G__29750;
count__27816_29746 = G__29751;
i__27817_29747 = G__29752;
continue;
} else {
var temp__4126__auto___29753 = cljs.core.seq(seq__27814_29744);
if(temp__4126__auto___29753){
var seq__27814_29754__$1 = temp__4126__auto___29753;
if(cljs.core.chunked_seq_QMARK_(seq__27814_29754__$1)){
var c__4522__auto___29755 = cljs.core.chunk_first(seq__27814_29754__$1);
var G__29756 = cljs.core.chunk_rest(seq__27814_29754__$1);
var G__29757 = c__4522__auto___29755;
var G__29758 = cljs.core.count(c__4522__auto___29755);
var G__29759 = (0);
seq__27814_29744 = G__29756;
chunk__27815_29745 = G__29757;
count__27816_29746 = G__29758;
i__27817_29747 = G__29759;
continue;
} else {
var arg__14299__auto___29760 = cljs.core.first(seq__27814_29754__$1);
a__14298__auto__.push(arg__14299__auto___29760);

var G__29761 = cljs.core.next(seq__27814_29754__$1);
var G__29762 = null;
var G__29763 = (0);
var G__29764 = (0);
seq__27814_29744 = G__29761;
chunk__27815_29745 = G__29762;
count__27816_29746 = G__29763;
i__27817_29747 = G__29764;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,a__14298__auto__);
};
var nav = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29765__i = 0, G__29765__a = new Array(arguments.length -  0);
while (G__29765__i < G__29765__a.length) {G__29765__a[G__29765__i] = arguments[G__29765__i + 0]; ++G__29765__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29765__a,0);
} 
return nav__delegate.call(this,args__14297__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__29766){
var args__14297__auto__ = cljs.core.seq(arglist__29766);
return nav__delegate(args__14297__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27822_29767 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27823_29768 = null;
var count__27824_29769 = (0);
var i__27825_29770 = (0);
while(true){
if((i__27825_29770 < count__27824_29769)){
var arg__14299__auto___29771 = chunk__27823_29768.cljs$core$IIndexed$_nth$arity$2(null,i__27825_29770);
a__14298__auto__.push(arg__14299__auto___29771);

var G__29772 = seq__27822_29767;
var G__29773 = chunk__27823_29768;
var G__29774 = count__27824_29769;
var G__29775 = (i__27825_29770 + (1));
seq__27822_29767 = G__29772;
chunk__27823_29768 = G__29773;
count__27824_29769 = G__29774;
i__27825_29770 = G__29775;
continue;
} else {
var temp__4126__auto___29776 = cljs.core.seq(seq__27822_29767);
if(temp__4126__auto___29776){
var seq__27822_29777__$1 = temp__4126__auto___29776;
if(cljs.core.chunked_seq_QMARK_(seq__27822_29777__$1)){
var c__4522__auto___29778 = cljs.core.chunk_first(seq__27822_29777__$1);
var G__29779 = cljs.core.chunk_rest(seq__27822_29777__$1);
var G__29780 = c__4522__auto___29778;
var G__29781 = cljs.core.count(c__4522__auto___29778);
var G__29782 = (0);
seq__27822_29767 = G__29779;
chunk__27823_29768 = G__29780;
count__27824_29769 = G__29781;
i__27825_29770 = G__29782;
continue;
} else {
var arg__14299__auto___29783 = cljs.core.first(seq__27822_29777__$1);
a__14298__auto__.push(arg__14299__auto___29783);

var G__29784 = cljs.core.next(seq__27822_29777__$1);
var G__29785 = null;
var G__29786 = (0);
var G__29787 = (0);
seq__27822_29767 = G__29784;
chunk__27823_29768 = G__29785;
count__27824_29769 = G__29786;
i__27825_29770 = G__29787;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,a__14298__auto__);
};
var noscript = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29788__i = 0, G__29788__a = new Array(arguments.length -  0);
while (G__29788__i < G__29788__a.length) {G__29788__a[G__29788__i] = arguments[G__29788__i + 0]; ++G__29788__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29788__a,0);
} 
return noscript__delegate.call(this,args__14297__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__29789){
var args__14297__auto__ = cljs.core.seq(arglist__29789);
return noscript__delegate(args__14297__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27830_29790 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27831_29791 = null;
var count__27832_29792 = (0);
var i__27833_29793 = (0);
while(true){
if((i__27833_29793 < count__27832_29792)){
var arg__14299__auto___29794 = chunk__27831_29791.cljs$core$IIndexed$_nth$arity$2(null,i__27833_29793);
a__14298__auto__.push(arg__14299__auto___29794);

var G__29795 = seq__27830_29790;
var G__29796 = chunk__27831_29791;
var G__29797 = count__27832_29792;
var G__29798 = (i__27833_29793 + (1));
seq__27830_29790 = G__29795;
chunk__27831_29791 = G__29796;
count__27832_29792 = G__29797;
i__27833_29793 = G__29798;
continue;
} else {
var temp__4126__auto___29799 = cljs.core.seq(seq__27830_29790);
if(temp__4126__auto___29799){
var seq__27830_29800__$1 = temp__4126__auto___29799;
if(cljs.core.chunked_seq_QMARK_(seq__27830_29800__$1)){
var c__4522__auto___29801 = cljs.core.chunk_first(seq__27830_29800__$1);
var G__29802 = cljs.core.chunk_rest(seq__27830_29800__$1);
var G__29803 = c__4522__auto___29801;
var G__29804 = cljs.core.count(c__4522__auto___29801);
var G__29805 = (0);
seq__27830_29790 = G__29802;
chunk__27831_29791 = G__29803;
count__27832_29792 = G__29804;
i__27833_29793 = G__29805;
continue;
} else {
var arg__14299__auto___29806 = cljs.core.first(seq__27830_29800__$1);
a__14298__auto__.push(arg__14299__auto___29806);

var G__29807 = cljs.core.next(seq__27830_29800__$1);
var G__29808 = null;
var G__29809 = (0);
var G__29810 = (0);
seq__27830_29790 = G__29807;
chunk__27831_29791 = G__29808;
count__27832_29792 = G__29809;
i__27833_29793 = G__29810;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,a__14298__auto__);
};
var object = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29811__i = 0, G__29811__a = new Array(arguments.length -  0);
while (G__29811__i < G__29811__a.length) {G__29811__a[G__29811__i] = arguments[G__29811__i + 0]; ++G__29811__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29811__a,0);
} 
return object__delegate.call(this,args__14297__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__29812){
var args__14297__auto__ = cljs.core.seq(arglist__29812);
return object__delegate(args__14297__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27838_29813 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27839_29814 = null;
var count__27840_29815 = (0);
var i__27841_29816 = (0);
while(true){
if((i__27841_29816 < count__27840_29815)){
var arg__14299__auto___29817 = chunk__27839_29814.cljs$core$IIndexed$_nth$arity$2(null,i__27841_29816);
a__14298__auto__.push(arg__14299__auto___29817);

var G__29818 = seq__27838_29813;
var G__29819 = chunk__27839_29814;
var G__29820 = count__27840_29815;
var G__29821 = (i__27841_29816 + (1));
seq__27838_29813 = G__29818;
chunk__27839_29814 = G__29819;
count__27840_29815 = G__29820;
i__27841_29816 = G__29821;
continue;
} else {
var temp__4126__auto___29822 = cljs.core.seq(seq__27838_29813);
if(temp__4126__auto___29822){
var seq__27838_29823__$1 = temp__4126__auto___29822;
if(cljs.core.chunked_seq_QMARK_(seq__27838_29823__$1)){
var c__4522__auto___29824 = cljs.core.chunk_first(seq__27838_29823__$1);
var G__29825 = cljs.core.chunk_rest(seq__27838_29823__$1);
var G__29826 = c__4522__auto___29824;
var G__29827 = cljs.core.count(c__4522__auto___29824);
var G__29828 = (0);
seq__27838_29813 = G__29825;
chunk__27839_29814 = G__29826;
count__27840_29815 = G__29827;
i__27841_29816 = G__29828;
continue;
} else {
var arg__14299__auto___29829 = cljs.core.first(seq__27838_29823__$1);
a__14298__auto__.push(arg__14299__auto___29829);

var G__29830 = cljs.core.next(seq__27838_29823__$1);
var G__29831 = null;
var G__29832 = (0);
var G__29833 = (0);
seq__27838_29813 = G__29830;
chunk__27839_29814 = G__29831;
count__27840_29815 = G__29832;
i__27841_29816 = G__29833;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,a__14298__auto__);
};
var ol = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29834__i = 0, G__29834__a = new Array(arguments.length -  0);
while (G__29834__i < G__29834__a.length) {G__29834__a[G__29834__i] = arguments[G__29834__i + 0]; ++G__29834__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29834__a,0);
} 
return ol__delegate.call(this,args__14297__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__29835){
var args__14297__auto__ = cljs.core.seq(arglist__29835);
return ol__delegate(args__14297__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27846_29836 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27847_29837 = null;
var count__27848_29838 = (0);
var i__27849_29839 = (0);
while(true){
if((i__27849_29839 < count__27848_29838)){
var arg__14299__auto___29840 = chunk__27847_29837.cljs$core$IIndexed$_nth$arity$2(null,i__27849_29839);
a__14298__auto__.push(arg__14299__auto___29840);

var G__29841 = seq__27846_29836;
var G__29842 = chunk__27847_29837;
var G__29843 = count__27848_29838;
var G__29844 = (i__27849_29839 + (1));
seq__27846_29836 = G__29841;
chunk__27847_29837 = G__29842;
count__27848_29838 = G__29843;
i__27849_29839 = G__29844;
continue;
} else {
var temp__4126__auto___29845 = cljs.core.seq(seq__27846_29836);
if(temp__4126__auto___29845){
var seq__27846_29846__$1 = temp__4126__auto___29845;
if(cljs.core.chunked_seq_QMARK_(seq__27846_29846__$1)){
var c__4522__auto___29847 = cljs.core.chunk_first(seq__27846_29846__$1);
var G__29848 = cljs.core.chunk_rest(seq__27846_29846__$1);
var G__29849 = c__4522__auto___29847;
var G__29850 = cljs.core.count(c__4522__auto___29847);
var G__29851 = (0);
seq__27846_29836 = G__29848;
chunk__27847_29837 = G__29849;
count__27848_29838 = G__29850;
i__27849_29839 = G__29851;
continue;
} else {
var arg__14299__auto___29852 = cljs.core.first(seq__27846_29846__$1);
a__14298__auto__.push(arg__14299__auto___29852);

var G__29853 = cljs.core.next(seq__27846_29846__$1);
var G__29854 = null;
var G__29855 = (0);
var G__29856 = (0);
seq__27846_29836 = G__29853;
chunk__27847_29837 = G__29854;
count__27848_29838 = G__29855;
i__27849_29839 = G__29856;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,a__14298__auto__);
};
var optgroup = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29857__i = 0, G__29857__a = new Array(arguments.length -  0);
while (G__29857__i < G__29857__a.length) {G__29857__a[G__29857__i] = arguments[G__29857__i + 0]; ++G__29857__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29857__a,0);
} 
return optgroup__delegate.call(this,args__14297__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__29858){
var args__14297__auto__ = cljs.core.seq(arglist__29858);
return optgroup__delegate(args__14297__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27854_29859 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27855_29860 = null;
var count__27856_29861 = (0);
var i__27857_29862 = (0);
while(true){
if((i__27857_29862 < count__27856_29861)){
var arg__14299__auto___29863 = chunk__27855_29860.cljs$core$IIndexed$_nth$arity$2(null,i__27857_29862);
a__14298__auto__.push(arg__14299__auto___29863);

var G__29864 = seq__27854_29859;
var G__29865 = chunk__27855_29860;
var G__29866 = count__27856_29861;
var G__29867 = (i__27857_29862 + (1));
seq__27854_29859 = G__29864;
chunk__27855_29860 = G__29865;
count__27856_29861 = G__29866;
i__27857_29862 = G__29867;
continue;
} else {
var temp__4126__auto___29868 = cljs.core.seq(seq__27854_29859);
if(temp__4126__auto___29868){
var seq__27854_29869__$1 = temp__4126__auto___29868;
if(cljs.core.chunked_seq_QMARK_(seq__27854_29869__$1)){
var c__4522__auto___29870 = cljs.core.chunk_first(seq__27854_29869__$1);
var G__29871 = cljs.core.chunk_rest(seq__27854_29869__$1);
var G__29872 = c__4522__auto___29870;
var G__29873 = cljs.core.count(c__4522__auto___29870);
var G__29874 = (0);
seq__27854_29859 = G__29871;
chunk__27855_29860 = G__29872;
count__27856_29861 = G__29873;
i__27857_29862 = G__29874;
continue;
} else {
var arg__14299__auto___29875 = cljs.core.first(seq__27854_29869__$1);
a__14298__auto__.push(arg__14299__auto___29875);

var G__29876 = cljs.core.next(seq__27854_29869__$1);
var G__29877 = null;
var G__29878 = (0);
var G__29879 = (0);
seq__27854_29859 = G__29876;
chunk__27855_29860 = G__29877;
count__27856_29861 = G__29878;
i__27857_29862 = G__29879;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,a__14298__auto__);
};
var option = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29880__i = 0, G__29880__a = new Array(arguments.length -  0);
while (G__29880__i < G__29880__a.length) {G__29880__a[G__29880__i] = arguments[G__29880__i + 0]; ++G__29880__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29880__a,0);
} 
return option__delegate.call(this,args__14297__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__29881){
var args__14297__auto__ = cljs.core.seq(arglist__29881);
return option__delegate(args__14297__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27862_29882 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27863_29883 = null;
var count__27864_29884 = (0);
var i__27865_29885 = (0);
while(true){
if((i__27865_29885 < count__27864_29884)){
var arg__14299__auto___29886 = chunk__27863_29883.cljs$core$IIndexed$_nth$arity$2(null,i__27865_29885);
a__14298__auto__.push(arg__14299__auto___29886);

var G__29887 = seq__27862_29882;
var G__29888 = chunk__27863_29883;
var G__29889 = count__27864_29884;
var G__29890 = (i__27865_29885 + (1));
seq__27862_29882 = G__29887;
chunk__27863_29883 = G__29888;
count__27864_29884 = G__29889;
i__27865_29885 = G__29890;
continue;
} else {
var temp__4126__auto___29891 = cljs.core.seq(seq__27862_29882);
if(temp__4126__auto___29891){
var seq__27862_29892__$1 = temp__4126__auto___29891;
if(cljs.core.chunked_seq_QMARK_(seq__27862_29892__$1)){
var c__4522__auto___29893 = cljs.core.chunk_first(seq__27862_29892__$1);
var G__29894 = cljs.core.chunk_rest(seq__27862_29892__$1);
var G__29895 = c__4522__auto___29893;
var G__29896 = cljs.core.count(c__4522__auto___29893);
var G__29897 = (0);
seq__27862_29882 = G__29894;
chunk__27863_29883 = G__29895;
count__27864_29884 = G__29896;
i__27865_29885 = G__29897;
continue;
} else {
var arg__14299__auto___29898 = cljs.core.first(seq__27862_29892__$1);
a__14298__auto__.push(arg__14299__auto___29898);

var G__29899 = cljs.core.next(seq__27862_29892__$1);
var G__29900 = null;
var G__29901 = (0);
var G__29902 = (0);
seq__27862_29882 = G__29899;
chunk__27863_29883 = G__29900;
count__27864_29884 = G__29901;
i__27865_29885 = G__29902;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,a__14298__auto__);
};
var output = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29903__i = 0, G__29903__a = new Array(arguments.length -  0);
while (G__29903__i < G__29903__a.length) {G__29903__a[G__29903__i] = arguments[G__29903__i + 0]; ++G__29903__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29903__a,0);
} 
return output__delegate.call(this,args__14297__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__29904){
var args__14297__auto__ = cljs.core.seq(arglist__29904);
return output__delegate(args__14297__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27870_29905 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27871_29906 = null;
var count__27872_29907 = (0);
var i__27873_29908 = (0);
while(true){
if((i__27873_29908 < count__27872_29907)){
var arg__14299__auto___29909 = chunk__27871_29906.cljs$core$IIndexed$_nth$arity$2(null,i__27873_29908);
a__14298__auto__.push(arg__14299__auto___29909);

var G__29910 = seq__27870_29905;
var G__29911 = chunk__27871_29906;
var G__29912 = count__27872_29907;
var G__29913 = (i__27873_29908 + (1));
seq__27870_29905 = G__29910;
chunk__27871_29906 = G__29911;
count__27872_29907 = G__29912;
i__27873_29908 = G__29913;
continue;
} else {
var temp__4126__auto___29914 = cljs.core.seq(seq__27870_29905);
if(temp__4126__auto___29914){
var seq__27870_29915__$1 = temp__4126__auto___29914;
if(cljs.core.chunked_seq_QMARK_(seq__27870_29915__$1)){
var c__4522__auto___29916 = cljs.core.chunk_first(seq__27870_29915__$1);
var G__29917 = cljs.core.chunk_rest(seq__27870_29915__$1);
var G__29918 = c__4522__auto___29916;
var G__29919 = cljs.core.count(c__4522__auto___29916);
var G__29920 = (0);
seq__27870_29905 = G__29917;
chunk__27871_29906 = G__29918;
count__27872_29907 = G__29919;
i__27873_29908 = G__29920;
continue;
} else {
var arg__14299__auto___29921 = cljs.core.first(seq__27870_29915__$1);
a__14298__auto__.push(arg__14299__auto___29921);

var G__29922 = cljs.core.next(seq__27870_29915__$1);
var G__29923 = null;
var G__29924 = (0);
var G__29925 = (0);
seq__27870_29905 = G__29922;
chunk__27871_29906 = G__29923;
count__27872_29907 = G__29924;
i__27873_29908 = G__29925;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,a__14298__auto__);
};
var p = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29926__i = 0, G__29926__a = new Array(arguments.length -  0);
while (G__29926__i < G__29926__a.length) {G__29926__a[G__29926__i] = arguments[G__29926__i + 0]; ++G__29926__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29926__a,0);
} 
return p__delegate.call(this,args__14297__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__29927){
var args__14297__auto__ = cljs.core.seq(arglist__29927);
return p__delegate(args__14297__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27878_29928 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27879_29929 = null;
var count__27880_29930 = (0);
var i__27881_29931 = (0);
while(true){
if((i__27881_29931 < count__27880_29930)){
var arg__14299__auto___29932 = chunk__27879_29929.cljs$core$IIndexed$_nth$arity$2(null,i__27881_29931);
a__14298__auto__.push(arg__14299__auto___29932);

var G__29933 = seq__27878_29928;
var G__29934 = chunk__27879_29929;
var G__29935 = count__27880_29930;
var G__29936 = (i__27881_29931 + (1));
seq__27878_29928 = G__29933;
chunk__27879_29929 = G__29934;
count__27880_29930 = G__29935;
i__27881_29931 = G__29936;
continue;
} else {
var temp__4126__auto___29937 = cljs.core.seq(seq__27878_29928);
if(temp__4126__auto___29937){
var seq__27878_29938__$1 = temp__4126__auto___29937;
if(cljs.core.chunked_seq_QMARK_(seq__27878_29938__$1)){
var c__4522__auto___29939 = cljs.core.chunk_first(seq__27878_29938__$1);
var G__29940 = cljs.core.chunk_rest(seq__27878_29938__$1);
var G__29941 = c__4522__auto___29939;
var G__29942 = cljs.core.count(c__4522__auto___29939);
var G__29943 = (0);
seq__27878_29928 = G__29940;
chunk__27879_29929 = G__29941;
count__27880_29930 = G__29942;
i__27881_29931 = G__29943;
continue;
} else {
var arg__14299__auto___29944 = cljs.core.first(seq__27878_29938__$1);
a__14298__auto__.push(arg__14299__auto___29944);

var G__29945 = cljs.core.next(seq__27878_29938__$1);
var G__29946 = null;
var G__29947 = (0);
var G__29948 = (0);
seq__27878_29928 = G__29945;
chunk__27879_29929 = G__29946;
count__27880_29930 = G__29947;
i__27881_29931 = G__29948;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,a__14298__auto__);
};
var param = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29949__i = 0, G__29949__a = new Array(arguments.length -  0);
while (G__29949__i < G__29949__a.length) {G__29949__a[G__29949__i] = arguments[G__29949__i + 0]; ++G__29949__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29949__a,0);
} 
return param__delegate.call(this,args__14297__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__29950){
var args__14297__auto__ = cljs.core.seq(arglist__29950);
return param__delegate(args__14297__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27886_29951 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27887_29952 = null;
var count__27888_29953 = (0);
var i__27889_29954 = (0);
while(true){
if((i__27889_29954 < count__27888_29953)){
var arg__14299__auto___29955 = chunk__27887_29952.cljs$core$IIndexed$_nth$arity$2(null,i__27889_29954);
a__14298__auto__.push(arg__14299__auto___29955);

var G__29956 = seq__27886_29951;
var G__29957 = chunk__27887_29952;
var G__29958 = count__27888_29953;
var G__29959 = (i__27889_29954 + (1));
seq__27886_29951 = G__29956;
chunk__27887_29952 = G__29957;
count__27888_29953 = G__29958;
i__27889_29954 = G__29959;
continue;
} else {
var temp__4126__auto___29960 = cljs.core.seq(seq__27886_29951);
if(temp__4126__auto___29960){
var seq__27886_29961__$1 = temp__4126__auto___29960;
if(cljs.core.chunked_seq_QMARK_(seq__27886_29961__$1)){
var c__4522__auto___29962 = cljs.core.chunk_first(seq__27886_29961__$1);
var G__29963 = cljs.core.chunk_rest(seq__27886_29961__$1);
var G__29964 = c__4522__auto___29962;
var G__29965 = cljs.core.count(c__4522__auto___29962);
var G__29966 = (0);
seq__27886_29951 = G__29963;
chunk__27887_29952 = G__29964;
count__27888_29953 = G__29965;
i__27889_29954 = G__29966;
continue;
} else {
var arg__14299__auto___29967 = cljs.core.first(seq__27886_29961__$1);
a__14298__auto__.push(arg__14299__auto___29967);

var G__29968 = cljs.core.next(seq__27886_29961__$1);
var G__29969 = null;
var G__29970 = (0);
var G__29971 = (0);
seq__27886_29951 = G__29968;
chunk__27887_29952 = G__29969;
count__27888_29953 = G__29970;
i__27889_29954 = G__29971;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,a__14298__auto__);
};
var pre = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29972__i = 0, G__29972__a = new Array(arguments.length -  0);
while (G__29972__i < G__29972__a.length) {G__29972__a[G__29972__i] = arguments[G__29972__i + 0]; ++G__29972__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29972__a,0);
} 
return pre__delegate.call(this,args__14297__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__29973){
var args__14297__auto__ = cljs.core.seq(arglist__29973);
return pre__delegate(args__14297__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27894_29974 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27895_29975 = null;
var count__27896_29976 = (0);
var i__27897_29977 = (0);
while(true){
if((i__27897_29977 < count__27896_29976)){
var arg__14299__auto___29978 = chunk__27895_29975.cljs$core$IIndexed$_nth$arity$2(null,i__27897_29977);
a__14298__auto__.push(arg__14299__auto___29978);

var G__29979 = seq__27894_29974;
var G__29980 = chunk__27895_29975;
var G__29981 = count__27896_29976;
var G__29982 = (i__27897_29977 + (1));
seq__27894_29974 = G__29979;
chunk__27895_29975 = G__29980;
count__27896_29976 = G__29981;
i__27897_29977 = G__29982;
continue;
} else {
var temp__4126__auto___29983 = cljs.core.seq(seq__27894_29974);
if(temp__4126__auto___29983){
var seq__27894_29984__$1 = temp__4126__auto___29983;
if(cljs.core.chunked_seq_QMARK_(seq__27894_29984__$1)){
var c__4522__auto___29985 = cljs.core.chunk_first(seq__27894_29984__$1);
var G__29986 = cljs.core.chunk_rest(seq__27894_29984__$1);
var G__29987 = c__4522__auto___29985;
var G__29988 = cljs.core.count(c__4522__auto___29985);
var G__29989 = (0);
seq__27894_29974 = G__29986;
chunk__27895_29975 = G__29987;
count__27896_29976 = G__29988;
i__27897_29977 = G__29989;
continue;
} else {
var arg__14299__auto___29990 = cljs.core.first(seq__27894_29984__$1);
a__14298__auto__.push(arg__14299__auto___29990);

var G__29991 = cljs.core.next(seq__27894_29984__$1);
var G__29992 = null;
var G__29993 = (0);
var G__29994 = (0);
seq__27894_29974 = G__29991;
chunk__27895_29975 = G__29992;
count__27896_29976 = G__29993;
i__27897_29977 = G__29994;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,a__14298__auto__);
};
var progress = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__29995__i = 0, G__29995__a = new Array(arguments.length -  0);
while (G__29995__i < G__29995__a.length) {G__29995__a[G__29995__i] = arguments[G__29995__i + 0]; ++G__29995__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__29995__a,0);
} 
return progress__delegate.call(this,args__14297__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__29996){
var args__14297__auto__ = cljs.core.seq(arglist__29996);
return progress__delegate(args__14297__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27902_29997 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27903_29998 = null;
var count__27904_29999 = (0);
var i__27905_30000 = (0);
while(true){
if((i__27905_30000 < count__27904_29999)){
var arg__14299__auto___30001 = chunk__27903_29998.cljs$core$IIndexed$_nth$arity$2(null,i__27905_30000);
a__14298__auto__.push(arg__14299__auto___30001);

var G__30002 = seq__27902_29997;
var G__30003 = chunk__27903_29998;
var G__30004 = count__27904_29999;
var G__30005 = (i__27905_30000 + (1));
seq__27902_29997 = G__30002;
chunk__27903_29998 = G__30003;
count__27904_29999 = G__30004;
i__27905_30000 = G__30005;
continue;
} else {
var temp__4126__auto___30006 = cljs.core.seq(seq__27902_29997);
if(temp__4126__auto___30006){
var seq__27902_30007__$1 = temp__4126__auto___30006;
if(cljs.core.chunked_seq_QMARK_(seq__27902_30007__$1)){
var c__4522__auto___30008 = cljs.core.chunk_first(seq__27902_30007__$1);
var G__30009 = cljs.core.chunk_rest(seq__27902_30007__$1);
var G__30010 = c__4522__auto___30008;
var G__30011 = cljs.core.count(c__4522__auto___30008);
var G__30012 = (0);
seq__27902_29997 = G__30009;
chunk__27903_29998 = G__30010;
count__27904_29999 = G__30011;
i__27905_30000 = G__30012;
continue;
} else {
var arg__14299__auto___30013 = cljs.core.first(seq__27902_30007__$1);
a__14298__auto__.push(arg__14299__auto___30013);

var G__30014 = cljs.core.next(seq__27902_30007__$1);
var G__30015 = null;
var G__30016 = (0);
var G__30017 = (0);
seq__27902_29997 = G__30014;
chunk__27903_29998 = G__30015;
count__27904_29999 = G__30016;
i__27905_30000 = G__30017;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,a__14298__auto__);
};
var q = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30018__i = 0, G__30018__a = new Array(arguments.length -  0);
while (G__30018__i < G__30018__a.length) {G__30018__a[G__30018__i] = arguments[G__30018__i + 0]; ++G__30018__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30018__a,0);
} 
return q__delegate.call(this,args__14297__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__30019){
var args__14297__auto__ = cljs.core.seq(arglist__30019);
return q__delegate(args__14297__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27910_30020 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27911_30021 = null;
var count__27912_30022 = (0);
var i__27913_30023 = (0);
while(true){
if((i__27913_30023 < count__27912_30022)){
var arg__14299__auto___30024 = chunk__27911_30021.cljs$core$IIndexed$_nth$arity$2(null,i__27913_30023);
a__14298__auto__.push(arg__14299__auto___30024);

var G__30025 = seq__27910_30020;
var G__30026 = chunk__27911_30021;
var G__30027 = count__27912_30022;
var G__30028 = (i__27913_30023 + (1));
seq__27910_30020 = G__30025;
chunk__27911_30021 = G__30026;
count__27912_30022 = G__30027;
i__27913_30023 = G__30028;
continue;
} else {
var temp__4126__auto___30029 = cljs.core.seq(seq__27910_30020);
if(temp__4126__auto___30029){
var seq__27910_30030__$1 = temp__4126__auto___30029;
if(cljs.core.chunked_seq_QMARK_(seq__27910_30030__$1)){
var c__4522__auto___30031 = cljs.core.chunk_first(seq__27910_30030__$1);
var G__30032 = cljs.core.chunk_rest(seq__27910_30030__$1);
var G__30033 = c__4522__auto___30031;
var G__30034 = cljs.core.count(c__4522__auto___30031);
var G__30035 = (0);
seq__27910_30020 = G__30032;
chunk__27911_30021 = G__30033;
count__27912_30022 = G__30034;
i__27913_30023 = G__30035;
continue;
} else {
var arg__14299__auto___30036 = cljs.core.first(seq__27910_30030__$1);
a__14298__auto__.push(arg__14299__auto___30036);

var G__30037 = cljs.core.next(seq__27910_30030__$1);
var G__30038 = null;
var G__30039 = (0);
var G__30040 = (0);
seq__27910_30020 = G__30037;
chunk__27911_30021 = G__30038;
count__27912_30022 = G__30039;
i__27913_30023 = G__30040;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,a__14298__auto__);
};
var rp = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30041__i = 0, G__30041__a = new Array(arguments.length -  0);
while (G__30041__i < G__30041__a.length) {G__30041__a[G__30041__i] = arguments[G__30041__i + 0]; ++G__30041__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30041__a,0);
} 
return rp__delegate.call(this,args__14297__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__30042){
var args__14297__auto__ = cljs.core.seq(arglist__30042);
return rp__delegate(args__14297__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27918_30043 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27919_30044 = null;
var count__27920_30045 = (0);
var i__27921_30046 = (0);
while(true){
if((i__27921_30046 < count__27920_30045)){
var arg__14299__auto___30047 = chunk__27919_30044.cljs$core$IIndexed$_nth$arity$2(null,i__27921_30046);
a__14298__auto__.push(arg__14299__auto___30047);

var G__30048 = seq__27918_30043;
var G__30049 = chunk__27919_30044;
var G__30050 = count__27920_30045;
var G__30051 = (i__27921_30046 + (1));
seq__27918_30043 = G__30048;
chunk__27919_30044 = G__30049;
count__27920_30045 = G__30050;
i__27921_30046 = G__30051;
continue;
} else {
var temp__4126__auto___30052 = cljs.core.seq(seq__27918_30043);
if(temp__4126__auto___30052){
var seq__27918_30053__$1 = temp__4126__auto___30052;
if(cljs.core.chunked_seq_QMARK_(seq__27918_30053__$1)){
var c__4522__auto___30054 = cljs.core.chunk_first(seq__27918_30053__$1);
var G__30055 = cljs.core.chunk_rest(seq__27918_30053__$1);
var G__30056 = c__4522__auto___30054;
var G__30057 = cljs.core.count(c__4522__auto___30054);
var G__30058 = (0);
seq__27918_30043 = G__30055;
chunk__27919_30044 = G__30056;
count__27920_30045 = G__30057;
i__27921_30046 = G__30058;
continue;
} else {
var arg__14299__auto___30059 = cljs.core.first(seq__27918_30053__$1);
a__14298__auto__.push(arg__14299__auto___30059);

var G__30060 = cljs.core.next(seq__27918_30053__$1);
var G__30061 = null;
var G__30062 = (0);
var G__30063 = (0);
seq__27918_30043 = G__30060;
chunk__27919_30044 = G__30061;
count__27920_30045 = G__30062;
i__27921_30046 = G__30063;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,a__14298__auto__);
};
var rt = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30064__i = 0, G__30064__a = new Array(arguments.length -  0);
while (G__30064__i < G__30064__a.length) {G__30064__a[G__30064__i] = arguments[G__30064__i + 0]; ++G__30064__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30064__a,0);
} 
return rt__delegate.call(this,args__14297__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__30065){
var args__14297__auto__ = cljs.core.seq(arglist__30065);
return rt__delegate(args__14297__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27926_30066 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27927_30067 = null;
var count__27928_30068 = (0);
var i__27929_30069 = (0);
while(true){
if((i__27929_30069 < count__27928_30068)){
var arg__14299__auto___30070 = chunk__27927_30067.cljs$core$IIndexed$_nth$arity$2(null,i__27929_30069);
a__14298__auto__.push(arg__14299__auto___30070);

var G__30071 = seq__27926_30066;
var G__30072 = chunk__27927_30067;
var G__30073 = count__27928_30068;
var G__30074 = (i__27929_30069 + (1));
seq__27926_30066 = G__30071;
chunk__27927_30067 = G__30072;
count__27928_30068 = G__30073;
i__27929_30069 = G__30074;
continue;
} else {
var temp__4126__auto___30075 = cljs.core.seq(seq__27926_30066);
if(temp__4126__auto___30075){
var seq__27926_30076__$1 = temp__4126__auto___30075;
if(cljs.core.chunked_seq_QMARK_(seq__27926_30076__$1)){
var c__4522__auto___30077 = cljs.core.chunk_first(seq__27926_30076__$1);
var G__30078 = cljs.core.chunk_rest(seq__27926_30076__$1);
var G__30079 = c__4522__auto___30077;
var G__30080 = cljs.core.count(c__4522__auto___30077);
var G__30081 = (0);
seq__27926_30066 = G__30078;
chunk__27927_30067 = G__30079;
count__27928_30068 = G__30080;
i__27929_30069 = G__30081;
continue;
} else {
var arg__14299__auto___30082 = cljs.core.first(seq__27926_30076__$1);
a__14298__auto__.push(arg__14299__auto___30082);

var G__30083 = cljs.core.next(seq__27926_30076__$1);
var G__30084 = null;
var G__30085 = (0);
var G__30086 = (0);
seq__27926_30066 = G__30083;
chunk__27927_30067 = G__30084;
count__27928_30068 = G__30085;
i__27929_30069 = G__30086;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,a__14298__auto__);
};
var ruby = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30087__i = 0, G__30087__a = new Array(arguments.length -  0);
while (G__30087__i < G__30087__a.length) {G__30087__a[G__30087__i] = arguments[G__30087__i + 0]; ++G__30087__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30087__a,0);
} 
return ruby__delegate.call(this,args__14297__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__30088){
var args__14297__auto__ = cljs.core.seq(arglist__30088);
return ruby__delegate(args__14297__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27934_30089 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27935_30090 = null;
var count__27936_30091 = (0);
var i__27937_30092 = (0);
while(true){
if((i__27937_30092 < count__27936_30091)){
var arg__14299__auto___30093 = chunk__27935_30090.cljs$core$IIndexed$_nth$arity$2(null,i__27937_30092);
a__14298__auto__.push(arg__14299__auto___30093);

var G__30094 = seq__27934_30089;
var G__30095 = chunk__27935_30090;
var G__30096 = count__27936_30091;
var G__30097 = (i__27937_30092 + (1));
seq__27934_30089 = G__30094;
chunk__27935_30090 = G__30095;
count__27936_30091 = G__30096;
i__27937_30092 = G__30097;
continue;
} else {
var temp__4126__auto___30098 = cljs.core.seq(seq__27934_30089);
if(temp__4126__auto___30098){
var seq__27934_30099__$1 = temp__4126__auto___30098;
if(cljs.core.chunked_seq_QMARK_(seq__27934_30099__$1)){
var c__4522__auto___30100 = cljs.core.chunk_first(seq__27934_30099__$1);
var G__30101 = cljs.core.chunk_rest(seq__27934_30099__$1);
var G__30102 = c__4522__auto___30100;
var G__30103 = cljs.core.count(c__4522__auto___30100);
var G__30104 = (0);
seq__27934_30089 = G__30101;
chunk__27935_30090 = G__30102;
count__27936_30091 = G__30103;
i__27937_30092 = G__30104;
continue;
} else {
var arg__14299__auto___30105 = cljs.core.first(seq__27934_30099__$1);
a__14298__auto__.push(arg__14299__auto___30105);

var G__30106 = cljs.core.next(seq__27934_30099__$1);
var G__30107 = null;
var G__30108 = (0);
var G__30109 = (0);
seq__27934_30089 = G__30106;
chunk__27935_30090 = G__30107;
count__27936_30091 = G__30108;
i__27937_30092 = G__30109;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,a__14298__auto__);
};
var s = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30110__i = 0, G__30110__a = new Array(arguments.length -  0);
while (G__30110__i < G__30110__a.length) {G__30110__a[G__30110__i] = arguments[G__30110__i + 0]; ++G__30110__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30110__a,0);
} 
return s__delegate.call(this,args__14297__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__30111){
var args__14297__auto__ = cljs.core.seq(arglist__30111);
return s__delegate(args__14297__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27942_30112 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27943_30113 = null;
var count__27944_30114 = (0);
var i__27945_30115 = (0);
while(true){
if((i__27945_30115 < count__27944_30114)){
var arg__14299__auto___30116 = chunk__27943_30113.cljs$core$IIndexed$_nth$arity$2(null,i__27945_30115);
a__14298__auto__.push(arg__14299__auto___30116);

var G__30117 = seq__27942_30112;
var G__30118 = chunk__27943_30113;
var G__30119 = count__27944_30114;
var G__30120 = (i__27945_30115 + (1));
seq__27942_30112 = G__30117;
chunk__27943_30113 = G__30118;
count__27944_30114 = G__30119;
i__27945_30115 = G__30120;
continue;
} else {
var temp__4126__auto___30121 = cljs.core.seq(seq__27942_30112);
if(temp__4126__auto___30121){
var seq__27942_30122__$1 = temp__4126__auto___30121;
if(cljs.core.chunked_seq_QMARK_(seq__27942_30122__$1)){
var c__4522__auto___30123 = cljs.core.chunk_first(seq__27942_30122__$1);
var G__30124 = cljs.core.chunk_rest(seq__27942_30122__$1);
var G__30125 = c__4522__auto___30123;
var G__30126 = cljs.core.count(c__4522__auto___30123);
var G__30127 = (0);
seq__27942_30112 = G__30124;
chunk__27943_30113 = G__30125;
count__27944_30114 = G__30126;
i__27945_30115 = G__30127;
continue;
} else {
var arg__14299__auto___30128 = cljs.core.first(seq__27942_30122__$1);
a__14298__auto__.push(arg__14299__auto___30128);

var G__30129 = cljs.core.next(seq__27942_30122__$1);
var G__30130 = null;
var G__30131 = (0);
var G__30132 = (0);
seq__27942_30112 = G__30129;
chunk__27943_30113 = G__30130;
count__27944_30114 = G__30131;
i__27945_30115 = G__30132;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,a__14298__auto__);
};
var samp = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30133__i = 0, G__30133__a = new Array(arguments.length -  0);
while (G__30133__i < G__30133__a.length) {G__30133__a[G__30133__i] = arguments[G__30133__i + 0]; ++G__30133__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30133__a,0);
} 
return samp__delegate.call(this,args__14297__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__30134){
var args__14297__auto__ = cljs.core.seq(arglist__30134);
return samp__delegate(args__14297__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27950_30135 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27951_30136 = null;
var count__27952_30137 = (0);
var i__27953_30138 = (0);
while(true){
if((i__27953_30138 < count__27952_30137)){
var arg__14299__auto___30139 = chunk__27951_30136.cljs$core$IIndexed$_nth$arity$2(null,i__27953_30138);
a__14298__auto__.push(arg__14299__auto___30139);

var G__30140 = seq__27950_30135;
var G__30141 = chunk__27951_30136;
var G__30142 = count__27952_30137;
var G__30143 = (i__27953_30138 + (1));
seq__27950_30135 = G__30140;
chunk__27951_30136 = G__30141;
count__27952_30137 = G__30142;
i__27953_30138 = G__30143;
continue;
} else {
var temp__4126__auto___30144 = cljs.core.seq(seq__27950_30135);
if(temp__4126__auto___30144){
var seq__27950_30145__$1 = temp__4126__auto___30144;
if(cljs.core.chunked_seq_QMARK_(seq__27950_30145__$1)){
var c__4522__auto___30146 = cljs.core.chunk_first(seq__27950_30145__$1);
var G__30147 = cljs.core.chunk_rest(seq__27950_30145__$1);
var G__30148 = c__4522__auto___30146;
var G__30149 = cljs.core.count(c__4522__auto___30146);
var G__30150 = (0);
seq__27950_30135 = G__30147;
chunk__27951_30136 = G__30148;
count__27952_30137 = G__30149;
i__27953_30138 = G__30150;
continue;
} else {
var arg__14299__auto___30151 = cljs.core.first(seq__27950_30145__$1);
a__14298__auto__.push(arg__14299__auto___30151);

var G__30152 = cljs.core.next(seq__27950_30145__$1);
var G__30153 = null;
var G__30154 = (0);
var G__30155 = (0);
seq__27950_30135 = G__30152;
chunk__27951_30136 = G__30153;
count__27952_30137 = G__30154;
i__27953_30138 = G__30155;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,a__14298__auto__);
};
var script = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30156__i = 0, G__30156__a = new Array(arguments.length -  0);
while (G__30156__i < G__30156__a.length) {G__30156__a[G__30156__i] = arguments[G__30156__i + 0]; ++G__30156__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30156__a,0);
} 
return script__delegate.call(this,args__14297__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__30157){
var args__14297__auto__ = cljs.core.seq(arglist__30157);
return script__delegate(args__14297__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27958_30158 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27959_30159 = null;
var count__27960_30160 = (0);
var i__27961_30161 = (0);
while(true){
if((i__27961_30161 < count__27960_30160)){
var arg__14299__auto___30162 = chunk__27959_30159.cljs$core$IIndexed$_nth$arity$2(null,i__27961_30161);
a__14298__auto__.push(arg__14299__auto___30162);

var G__30163 = seq__27958_30158;
var G__30164 = chunk__27959_30159;
var G__30165 = count__27960_30160;
var G__30166 = (i__27961_30161 + (1));
seq__27958_30158 = G__30163;
chunk__27959_30159 = G__30164;
count__27960_30160 = G__30165;
i__27961_30161 = G__30166;
continue;
} else {
var temp__4126__auto___30167 = cljs.core.seq(seq__27958_30158);
if(temp__4126__auto___30167){
var seq__27958_30168__$1 = temp__4126__auto___30167;
if(cljs.core.chunked_seq_QMARK_(seq__27958_30168__$1)){
var c__4522__auto___30169 = cljs.core.chunk_first(seq__27958_30168__$1);
var G__30170 = cljs.core.chunk_rest(seq__27958_30168__$1);
var G__30171 = c__4522__auto___30169;
var G__30172 = cljs.core.count(c__4522__auto___30169);
var G__30173 = (0);
seq__27958_30158 = G__30170;
chunk__27959_30159 = G__30171;
count__27960_30160 = G__30172;
i__27961_30161 = G__30173;
continue;
} else {
var arg__14299__auto___30174 = cljs.core.first(seq__27958_30168__$1);
a__14298__auto__.push(arg__14299__auto___30174);

var G__30175 = cljs.core.next(seq__27958_30168__$1);
var G__30176 = null;
var G__30177 = (0);
var G__30178 = (0);
seq__27958_30158 = G__30175;
chunk__27959_30159 = G__30176;
count__27960_30160 = G__30177;
i__27961_30161 = G__30178;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,a__14298__auto__);
};
var section = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30179__i = 0, G__30179__a = new Array(arguments.length -  0);
while (G__30179__i < G__30179__a.length) {G__30179__a[G__30179__i] = arguments[G__30179__i + 0]; ++G__30179__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30179__a,0);
} 
return section__delegate.call(this,args__14297__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__30180){
var args__14297__auto__ = cljs.core.seq(arglist__30180);
return section__delegate(args__14297__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27966_30181 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27967_30182 = null;
var count__27968_30183 = (0);
var i__27969_30184 = (0);
while(true){
if((i__27969_30184 < count__27968_30183)){
var arg__14299__auto___30185 = chunk__27967_30182.cljs$core$IIndexed$_nth$arity$2(null,i__27969_30184);
a__14298__auto__.push(arg__14299__auto___30185);

var G__30186 = seq__27966_30181;
var G__30187 = chunk__27967_30182;
var G__30188 = count__27968_30183;
var G__30189 = (i__27969_30184 + (1));
seq__27966_30181 = G__30186;
chunk__27967_30182 = G__30187;
count__27968_30183 = G__30188;
i__27969_30184 = G__30189;
continue;
} else {
var temp__4126__auto___30190 = cljs.core.seq(seq__27966_30181);
if(temp__4126__auto___30190){
var seq__27966_30191__$1 = temp__4126__auto___30190;
if(cljs.core.chunked_seq_QMARK_(seq__27966_30191__$1)){
var c__4522__auto___30192 = cljs.core.chunk_first(seq__27966_30191__$1);
var G__30193 = cljs.core.chunk_rest(seq__27966_30191__$1);
var G__30194 = c__4522__auto___30192;
var G__30195 = cljs.core.count(c__4522__auto___30192);
var G__30196 = (0);
seq__27966_30181 = G__30193;
chunk__27967_30182 = G__30194;
count__27968_30183 = G__30195;
i__27969_30184 = G__30196;
continue;
} else {
var arg__14299__auto___30197 = cljs.core.first(seq__27966_30191__$1);
a__14298__auto__.push(arg__14299__auto___30197);

var G__30198 = cljs.core.next(seq__27966_30191__$1);
var G__30199 = null;
var G__30200 = (0);
var G__30201 = (0);
seq__27966_30181 = G__30198;
chunk__27967_30182 = G__30199;
count__27968_30183 = G__30200;
i__27969_30184 = G__30201;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,a__14298__auto__);
};
var select = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30202__i = 0, G__30202__a = new Array(arguments.length -  0);
while (G__30202__i < G__30202__a.length) {G__30202__a[G__30202__i] = arguments[G__30202__i + 0]; ++G__30202__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30202__a,0);
} 
return select__delegate.call(this,args__14297__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__30203){
var args__14297__auto__ = cljs.core.seq(arglist__30203);
return select__delegate(args__14297__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27974_30204 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27975_30205 = null;
var count__27976_30206 = (0);
var i__27977_30207 = (0);
while(true){
if((i__27977_30207 < count__27976_30206)){
var arg__14299__auto___30208 = chunk__27975_30205.cljs$core$IIndexed$_nth$arity$2(null,i__27977_30207);
a__14298__auto__.push(arg__14299__auto___30208);

var G__30209 = seq__27974_30204;
var G__30210 = chunk__27975_30205;
var G__30211 = count__27976_30206;
var G__30212 = (i__27977_30207 + (1));
seq__27974_30204 = G__30209;
chunk__27975_30205 = G__30210;
count__27976_30206 = G__30211;
i__27977_30207 = G__30212;
continue;
} else {
var temp__4126__auto___30213 = cljs.core.seq(seq__27974_30204);
if(temp__4126__auto___30213){
var seq__27974_30214__$1 = temp__4126__auto___30213;
if(cljs.core.chunked_seq_QMARK_(seq__27974_30214__$1)){
var c__4522__auto___30215 = cljs.core.chunk_first(seq__27974_30214__$1);
var G__30216 = cljs.core.chunk_rest(seq__27974_30214__$1);
var G__30217 = c__4522__auto___30215;
var G__30218 = cljs.core.count(c__4522__auto___30215);
var G__30219 = (0);
seq__27974_30204 = G__30216;
chunk__27975_30205 = G__30217;
count__27976_30206 = G__30218;
i__27977_30207 = G__30219;
continue;
} else {
var arg__14299__auto___30220 = cljs.core.first(seq__27974_30214__$1);
a__14298__auto__.push(arg__14299__auto___30220);

var G__30221 = cljs.core.next(seq__27974_30214__$1);
var G__30222 = null;
var G__30223 = (0);
var G__30224 = (0);
seq__27974_30204 = G__30221;
chunk__27975_30205 = G__30222;
count__27976_30206 = G__30223;
i__27977_30207 = G__30224;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,a__14298__auto__);
};
var small = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30225__i = 0, G__30225__a = new Array(arguments.length -  0);
while (G__30225__i < G__30225__a.length) {G__30225__a[G__30225__i] = arguments[G__30225__i + 0]; ++G__30225__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30225__a,0);
} 
return small__delegate.call(this,args__14297__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__30226){
var args__14297__auto__ = cljs.core.seq(arglist__30226);
return small__delegate(args__14297__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27982_30227 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27983_30228 = null;
var count__27984_30229 = (0);
var i__27985_30230 = (0);
while(true){
if((i__27985_30230 < count__27984_30229)){
var arg__14299__auto___30231 = chunk__27983_30228.cljs$core$IIndexed$_nth$arity$2(null,i__27985_30230);
a__14298__auto__.push(arg__14299__auto___30231);

var G__30232 = seq__27982_30227;
var G__30233 = chunk__27983_30228;
var G__30234 = count__27984_30229;
var G__30235 = (i__27985_30230 + (1));
seq__27982_30227 = G__30232;
chunk__27983_30228 = G__30233;
count__27984_30229 = G__30234;
i__27985_30230 = G__30235;
continue;
} else {
var temp__4126__auto___30236 = cljs.core.seq(seq__27982_30227);
if(temp__4126__auto___30236){
var seq__27982_30237__$1 = temp__4126__auto___30236;
if(cljs.core.chunked_seq_QMARK_(seq__27982_30237__$1)){
var c__4522__auto___30238 = cljs.core.chunk_first(seq__27982_30237__$1);
var G__30239 = cljs.core.chunk_rest(seq__27982_30237__$1);
var G__30240 = c__4522__auto___30238;
var G__30241 = cljs.core.count(c__4522__auto___30238);
var G__30242 = (0);
seq__27982_30227 = G__30239;
chunk__27983_30228 = G__30240;
count__27984_30229 = G__30241;
i__27985_30230 = G__30242;
continue;
} else {
var arg__14299__auto___30243 = cljs.core.first(seq__27982_30237__$1);
a__14298__auto__.push(arg__14299__auto___30243);

var G__30244 = cljs.core.next(seq__27982_30237__$1);
var G__30245 = null;
var G__30246 = (0);
var G__30247 = (0);
seq__27982_30227 = G__30244;
chunk__27983_30228 = G__30245;
count__27984_30229 = G__30246;
i__27985_30230 = G__30247;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,a__14298__auto__);
};
var source = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30248__i = 0, G__30248__a = new Array(arguments.length -  0);
while (G__30248__i < G__30248__a.length) {G__30248__a[G__30248__i] = arguments[G__30248__i + 0]; ++G__30248__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30248__a,0);
} 
return source__delegate.call(this,args__14297__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__30249){
var args__14297__auto__ = cljs.core.seq(arglist__30249);
return source__delegate(args__14297__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27990_30250 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27991_30251 = null;
var count__27992_30252 = (0);
var i__27993_30253 = (0);
while(true){
if((i__27993_30253 < count__27992_30252)){
var arg__14299__auto___30254 = chunk__27991_30251.cljs$core$IIndexed$_nth$arity$2(null,i__27993_30253);
a__14298__auto__.push(arg__14299__auto___30254);

var G__30255 = seq__27990_30250;
var G__30256 = chunk__27991_30251;
var G__30257 = count__27992_30252;
var G__30258 = (i__27993_30253 + (1));
seq__27990_30250 = G__30255;
chunk__27991_30251 = G__30256;
count__27992_30252 = G__30257;
i__27993_30253 = G__30258;
continue;
} else {
var temp__4126__auto___30259 = cljs.core.seq(seq__27990_30250);
if(temp__4126__auto___30259){
var seq__27990_30260__$1 = temp__4126__auto___30259;
if(cljs.core.chunked_seq_QMARK_(seq__27990_30260__$1)){
var c__4522__auto___30261 = cljs.core.chunk_first(seq__27990_30260__$1);
var G__30262 = cljs.core.chunk_rest(seq__27990_30260__$1);
var G__30263 = c__4522__auto___30261;
var G__30264 = cljs.core.count(c__4522__auto___30261);
var G__30265 = (0);
seq__27990_30250 = G__30262;
chunk__27991_30251 = G__30263;
count__27992_30252 = G__30264;
i__27993_30253 = G__30265;
continue;
} else {
var arg__14299__auto___30266 = cljs.core.first(seq__27990_30260__$1);
a__14298__auto__.push(arg__14299__auto___30266);

var G__30267 = cljs.core.next(seq__27990_30260__$1);
var G__30268 = null;
var G__30269 = (0);
var G__30270 = (0);
seq__27990_30250 = G__30267;
chunk__27991_30251 = G__30268;
count__27992_30252 = G__30269;
i__27993_30253 = G__30270;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,a__14298__auto__);
};
var span = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30271__i = 0, G__30271__a = new Array(arguments.length -  0);
while (G__30271__i < G__30271__a.length) {G__30271__a[G__30271__i] = arguments[G__30271__i + 0]; ++G__30271__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30271__a,0);
} 
return span__delegate.call(this,args__14297__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__30272){
var args__14297__auto__ = cljs.core.seq(arglist__30272);
return span__delegate(args__14297__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27998_30273 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27999_30274 = null;
var count__28000_30275 = (0);
var i__28001_30276 = (0);
while(true){
if((i__28001_30276 < count__28000_30275)){
var arg__14299__auto___30277 = chunk__27999_30274.cljs$core$IIndexed$_nth$arity$2(null,i__28001_30276);
a__14298__auto__.push(arg__14299__auto___30277);

var G__30278 = seq__27998_30273;
var G__30279 = chunk__27999_30274;
var G__30280 = count__28000_30275;
var G__30281 = (i__28001_30276 + (1));
seq__27998_30273 = G__30278;
chunk__27999_30274 = G__30279;
count__28000_30275 = G__30280;
i__28001_30276 = G__30281;
continue;
} else {
var temp__4126__auto___30282 = cljs.core.seq(seq__27998_30273);
if(temp__4126__auto___30282){
var seq__27998_30283__$1 = temp__4126__auto___30282;
if(cljs.core.chunked_seq_QMARK_(seq__27998_30283__$1)){
var c__4522__auto___30284 = cljs.core.chunk_first(seq__27998_30283__$1);
var G__30285 = cljs.core.chunk_rest(seq__27998_30283__$1);
var G__30286 = c__4522__auto___30284;
var G__30287 = cljs.core.count(c__4522__auto___30284);
var G__30288 = (0);
seq__27998_30273 = G__30285;
chunk__27999_30274 = G__30286;
count__28000_30275 = G__30287;
i__28001_30276 = G__30288;
continue;
} else {
var arg__14299__auto___30289 = cljs.core.first(seq__27998_30283__$1);
a__14298__auto__.push(arg__14299__auto___30289);

var G__30290 = cljs.core.next(seq__27998_30283__$1);
var G__30291 = null;
var G__30292 = (0);
var G__30293 = (0);
seq__27998_30273 = G__30290;
chunk__27999_30274 = G__30291;
count__28000_30275 = G__30292;
i__28001_30276 = G__30293;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,a__14298__auto__);
};
var strong = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30294__i = 0, G__30294__a = new Array(arguments.length -  0);
while (G__30294__i < G__30294__a.length) {G__30294__a[G__30294__i] = arguments[G__30294__i + 0]; ++G__30294__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30294__a,0);
} 
return strong__delegate.call(this,args__14297__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__30295){
var args__14297__auto__ = cljs.core.seq(arglist__30295);
return strong__delegate(args__14297__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28006_30296 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28007_30297 = null;
var count__28008_30298 = (0);
var i__28009_30299 = (0);
while(true){
if((i__28009_30299 < count__28008_30298)){
var arg__14299__auto___30300 = chunk__28007_30297.cljs$core$IIndexed$_nth$arity$2(null,i__28009_30299);
a__14298__auto__.push(arg__14299__auto___30300);

var G__30301 = seq__28006_30296;
var G__30302 = chunk__28007_30297;
var G__30303 = count__28008_30298;
var G__30304 = (i__28009_30299 + (1));
seq__28006_30296 = G__30301;
chunk__28007_30297 = G__30302;
count__28008_30298 = G__30303;
i__28009_30299 = G__30304;
continue;
} else {
var temp__4126__auto___30305 = cljs.core.seq(seq__28006_30296);
if(temp__4126__auto___30305){
var seq__28006_30306__$1 = temp__4126__auto___30305;
if(cljs.core.chunked_seq_QMARK_(seq__28006_30306__$1)){
var c__4522__auto___30307 = cljs.core.chunk_first(seq__28006_30306__$1);
var G__30308 = cljs.core.chunk_rest(seq__28006_30306__$1);
var G__30309 = c__4522__auto___30307;
var G__30310 = cljs.core.count(c__4522__auto___30307);
var G__30311 = (0);
seq__28006_30296 = G__30308;
chunk__28007_30297 = G__30309;
count__28008_30298 = G__30310;
i__28009_30299 = G__30311;
continue;
} else {
var arg__14299__auto___30312 = cljs.core.first(seq__28006_30306__$1);
a__14298__auto__.push(arg__14299__auto___30312);

var G__30313 = cljs.core.next(seq__28006_30306__$1);
var G__30314 = null;
var G__30315 = (0);
var G__30316 = (0);
seq__28006_30296 = G__30313;
chunk__28007_30297 = G__30314;
count__28008_30298 = G__30315;
i__28009_30299 = G__30316;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,a__14298__auto__);
};
var style = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30317__i = 0, G__30317__a = new Array(arguments.length -  0);
while (G__30317__i < G__30317__a.length) {G__30317__a[G__30317__i] = arguments[G__30317__i + 0]; ++G__30317__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30317__a,0);
} 
return style__delegate.call(this,args__14297__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__30318){
var args__14297__auto__ = cljs.core.seq(arglist__30318);
return style__delegate(args__14297__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28014_30319 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28015_30320 = null;
var count__28016_30321 = (0);
var i__28017_30322 = (0);
while(true){
if((i__28017_30322 < count__28016_30321)){
var arg__14299__auto___30323 = chunk__28015_30320.cljs$core$IIndexed$_nth$arity$2(null,i__28017_30322);
a__14298__auto__.push(arg__14299__auto___30323);

var G__30324 = seq__28014_30319;
var G__30325 = chunk__28015_30320;
var G__30326 = count__28016_30321;
var G__30327 = (i__28017_30322 + (1));
seq__28014_30319 = G__30324;
chunk__28015_30320 = G__30325;
count__28016_30321 = G__30326;
i__28017_30322 = G__30327;
continue;
} else {
var temp__4126__auto___30328 = cljs.core.seq(seq__28014_30319);
if(temp__4126__auto___30328){
var seq__28014_30329__$1 = temp__4126__auto___30328;
if(cljs.core.chunked_seq_QMARK_(seq__28014_30329__$1)){
var c__4522__auto___30330 = cljs.core.chunk_first(seq__28014_30329__$1);
var G__30331 = cljs.core.chunk_rest(seq__28014_30329__$1);
var G__30332 = c__4522__auto___30330;
var G__30333 = cljs.core.count(c__4522__auto___30330);
var G__30334 = (0);
seq__28014_30319 = G__30331;
chunk__28015_30320 = G__30332;
count__28016_30321 = G__30333;
i__28017_30322 = G__30334;
continue;
} else {
var arg__14299__auto___30335 = cljs.core.first(seq__28014_30329__$1);
a__14298__auto__.push(arg__14299__auto___30335);

var G__30336 = cljs.core.next(seq__28014_30329__$1);
var G__30337 = null;
var G__30338 = (0);
var G__30339 = (0);
seq__28014_30319 = G__30336;
chunk__28015_30320 = G__30337;
count__28016_30321 = G__30338;
i__28017_30322 = G__30339;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,a__14298__auto__);
};
var sub = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30340__i = 0, G__30340__a = new Array(arguments.length -  0);
while (G__30340__i < G__30340__a.length) {G__30340__a[G__30340__i] = arguments[G__30340__i + 0]; ++G__30340__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30340__a,0);
} 
return sub__delegate.call(this,args__14297__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__30341){
var args__14297__auto__ = cljs.core.seq(arglist__30341);
return sub__delegate(args__14297__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28022_30342 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28023_30343 = null;
var count__28024_30344 = (0);
var i__28025_30345 = (0);
while(true){
if((i__28025_30345 < count__28024_30344)){
var arg__14299__auto___30346 = chunk__28023_30343.cljs$core$IIndexed$_nth$arity$2(null,i__28025_30345);
a__14298__auto__.push(arg__14299__auto___30346);

var G__30347 = seq__28022_30342;
var G__30348 = chunk__28023_30343;
var G__30349 = count__28024_30344;
var G__30350 = (i__28025_30345 + (1));
seq__28022_30342 = G__30347;
chunk__28023_30343 = G__30348;
count__28024_30344 = G__30349;
i__28025_30345 = G__30350;
continue;
} else {
var temp__4126__auto___30351 = cljs.core.seq(seq__28022_30342);
if(temp__4126__auto___30351){
var seq__28022_30352__$1 = temp__4126__auto___30351;
if(cljs.core.chunked_seq_QMARK_(seq__28022_30352__$1)){
var c__4522__auto___30353 = cljs.core.chunk_first(seq__28022_30352__$1);
var G__30354 = cljs.core.chunk_rest(seq__28022_30352__$1);
var G__30355 = c__4522__auto___30353;
var G__30356 = cljs.core.count(c__4522__auto___30353);
var G__30357 = (0);
seq__28022_30342 = G__30354;
chunk__28023_30343 = G__30355;
count__28024_30344 = G__30356;
i__28025_30345 = G__30357;
continue;
} else {
var arg__14299__auto___30358 = cljs.core.first(seq__28022_30352__$1);
a__14298__auto__.push(arg__14299__auto___30358);

var G__30359 = cljs.core.next(seq__28022_30352__$1);
var G__30360 = null;
var G__30361 = (0);
var G__30362 = (0);
seq__28022_30342 = G__30359;
chunk__28023_30343 = G__30360;
count__28024_30344 = G__30361;
i__28025_30345 = G__30362;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,a__14298__auto__);
};
var summary = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30363__i = 0, G__30363__a = new Array(arguments.length -  0);
while (G__30363__i < G__30363__a.length) {G__30363__a[G__30363__i] = arguments[G__30363__i + 0]; ++G__30363__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30363__a,0);
} 
return summary__delegate.call(this,args__14297__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__30364){
var args__14297__auto__ = cljs.core.seq(arglist__30364);
return summary__delegate(args__14297__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28030_30365 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28031_30366 = null;
var count__28032_30367 = (0);
var i__28033_30368 = (0);
while(true){
if((i__28033_30368 < count__28032_30367)){
var arg__14299__auto___30369 = chunk__28031_30366.cljs$core$IIndexed$_nth$arity$2(null,i__28033_30368);
a__14298__auto__.push(arg__14299__auto___30369);

var G__30370 = seq__28030_30365;
var G__30371 = chunk__28031_30366;
var G__30372 = count__28032_30367;
var G__30373 = (i__28033_30368 + (1));
seq__28030_30365 = G__30370;
chunk__28031_30366 = G__30371;
count__28032_30367 = G__30372;
i__28033_30368 = G__30373;
continue;
} else {
var temp__4126__auto___30374 = cljs.core.seq(seq__28030_30365);
if(temp__4126__auto___30374){
var seq__28030_30375__$1 = temp__4126__auto___30374;
if(cljs.core.chunked_seq_QMARK_(seq__28030_30375__$1)){
var c__4522__auto___30376 = cljs.core.chunk_first(seq__28030_30375__$1);
var G__30377 = cljs.core.chunk_rest(seq__28030_30375__$1);
var G__30378 = c__4522__auto___30376;
var G__30379 = cljs.core.count(c__4522__auto___30376);
var G__30380 = (0);
seq__28030_30365 = G__30377;
chunk__28031_30366 = G__30378;
count__28032_30367 = G__30379;
i__28033_30368 = G__30380;
continue;
} else {
var arg__14299__auto___30381 = cljs.core.first(seq__28030_30375__$1);
a__14298__auto__.push(arg__14299__auto___30381);

var G__30382 = cljs.core.next(seq__28030_30375__$1);
var G__30383 = null;
var G__30384 = (0);
var G__30385 = (0);
seq__28030_30365 = G__30382;
chunk__28031_30366 = G__30383;
count__28032_30367 = G__30384;
i__28033_30368 = G__30385;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,a__14298__auto__);
};
var sup = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30386__i = 0, G__30386__a = new Array(arguments.length -  0);
while (G__30386__i < G__30386__a.length) {G__30386__a[G__30386__i] = arguments[G__30386__i + 0]; ++G__30386__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30386__a,0);
} 
return sup__delegate.call(this,args__14297__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__30387){
var args__14297__auto__ = cljs.core.seq(arglist__30387);
return sup__delegate(args__14297__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28038_30388 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28039_30389 = null;
var count__28040_30390 = (0);
var i__28041_30391 = (0);
while(true){
if((i__28041_30391 < count__28040_30390)){
var arg__14299__auto___30392 = chunk__28039_30389.cljs$core$IIndexed$_nth$arity$2(null,i__28041_30391);
a__14298__auto__.push(arg__14299__auto___30392);

var G__30393 = seq__28038_30388;
var G__30394 = chunk__28039_30389;
var G__30395 = count__28040_30390;
var G__30396 = (i__28041_30391 + (1));
seq__28038_30388 = G__30393;
chunk__28039_30389 = G__30394;
count__28040_30390 = G__30395;
i__28041_30391 = G__30396;
continue;
} else {
var temp__4126__auto___30397 = cljs.core.seq(seq__28038_30388);
if(temp__4126__auto___30397){
var seq__28038_30398__$1 = temp__4126__auto___30397;
if(cljs.core.chunked_seq_QMARK_(seq__28038_30398__$1)){
var c__4522__auto___30399 = cljs.core.chunk_first(seq__28038_30398__$1);
var G__30400 = cljs.core.chunk_rest(seq__28038_30398__$1);
var G__30401 = c__4522__auto___30399;
var G__30402 = cljs.core.count(c__4522__auto___30399);
var G__30403 = (0);
seq__28038_30388 = G__30400;
chunk__28039_30389 = G__30401;
count__28040_30390 = G__30402;
i__28041_30391 = G__30403;
continue;
} else {
var arg__14299__auto___30404 = cljs.core.first(seq__28038_30398__$1);
a__14298__auto__.push(arg__14299__auto___30404);

var G__30405 = cljs.core.next(seq__28038_30398__$1);
var G__30406 = null;
var G__30407 = (0);
var G__30408 = (0);
seq__28038_30388 = G__30405;
chunk__28039_30389 = G__30406;
count__28040_30390 = G__30407;
i__28041_30391 = G__30408;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,a__14298__auto__);
};
var table = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30409__i = 0, G__30409__a = new Array(arguments.length -  0);
while (G__30409__i < G__30409__a.length) {G__30409__a[G__30409__i] = arguments[G__30409__i + 0]; ++G__30409__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30409__a,0);
} 
return table__delegate.call(this,args__14297__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__30410){
var args__14297__auto__ = cljs.core.seq(arglist__30410);
return table__delegate(args__14297__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28046_30411 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28047_30412 = null;
var count__28048_30413 = (0);
var i__28049_30414 = (0);
while(true){
if((i__28049_30414 < count__28048_30413)){
var arg__14299__auto___30415 = chunk__28047_30412.cljs$core$IIndexed$_nth$arity$2(null,i__28049_30414);
a__14298__auto__.push(arg__14299__auto___30415);

var G__30416 = seq__28046_30411;
var G__30417 = chunk__28047_30412;
var G__30418 = count__28048_30413;
var G__30419 = (i__28049_30414 + (1));
seq__28046_30411 = G__30416;
chunk__28047_30412 = G__30417;
count__28048_30413 = G__30418;
i__28049_30414 = G__30419;
continue;
} else {
var temp__4126__auto___30420 = cljs.core.seq(seq__28046_30411);
if(temp__4126__auto___30420){
var seq__28046_30421__$1 = temp__4126__auto___30420;
if(cljs.core.chunked_seq_QMARK_(seq__28046_30421__$1)){
var c__4522__auto___30422 = cljs.core.chunk_first(seq__28046_30421__$1);
var G__30423 = cljs.core.chunk_rest(seq__28046_30421__$1);
var G__30424 = c__4522__auto___30422;
var G__30425 = cljs.core.count(c__4522__auto___30422);
var G__30426 = (0);
seq__28046_30411 = G__30423;
chunk__28047_30412 = G__30424;
count__28048_30413 = G__30425;
i__28049_30414 = G__30426;
continue;
} else {
var arg__14299__auto___30427 = cljs.core.first(seq__28046_30421__$1);
a__14298__auto__.push(arg__14299__auto___30427);

var G__30428 = cljs.core.next(seq__28046_30421__$1);
var G__30429 = null;
var G__30430 = (0);
var G__30431 = (0);
seq__28046_30411 = G__30428;
chunk__28047_30412 = G__30429;
count__28048_30413 = G__30430;
i__28049_30414 = G__30431;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,a__14298__auto__);
};
var tbody = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30432__i = 0, G__30432__a = new Array(arguments.length -  0);
while (G__30432__i < G__30432__a.length) {G__30432__a[G__30432__i] = arguments[G__30432__i + 0]; ++G__30432__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30432__a,0);
} 
return tbody__delegate.call(this,args__14297__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__30433){
var args__14297__auto__ = cljs.core.seq(arglist__30433);
return tbody__delegate(args__14297__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28054_30434 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28055_30435 = null;
var count__28056_30436 = (0);
var i__28057_30437 = (0);
while(true){
if((i__28057_30437 < count__28056_30436)){
var arg__14299__auto___30438 = chunk__28055_30435.cljs$core$IIndexed$_nth$arity$2(null,i__28057_30437);
a__14298__auto__.push(arg__14299__auto___30438);

var G__30439 = seq__28054_30434;
var G__30440 = chunk__28055_30435;
var G__30441 = count__28056_30436;
var G__30442 = (i__28057_30437 + (1));
seq__28054_30434 = G__30439;
chunk__28055_30435 = G__30440;
count__28056_30436 = G__30441;
i__28057_30437 = G__30442;
continue;
} else {
var temp__4126__auto___30443 = cljs.core.seq(seq__28054_30434);
if(temp__4126__auto___30443){
var seq__28054_30444__$1 = temp__4126__auto___30443;
if(cljs.core.chunked_seq_QMARK_(seq__28054_30444__$1)){
var c__4522__auto___30445 = cljs.core.chunk_first(seq__28054_30444__$1);
var G__30446 = cljs.core.chunk_rest(seq__28054_30444__$1);
var G__30447 = c__4522__auto___30445;
var G__30448 = cljs.core.count(c__4522__auto___30445);
var G__30449 = (0);
seq__28054_30434 = G__30446;
chunk__28055_30435 = G__30447;
count__28056_30436 = G__30448;
i__28057_30437 = G__30449;
continue;
} else {
var arg__14299__auto___30450 = cljs.core.first(seq__28054_30444__$1);
a__14298__auto__.push(arg__14299__auto___30450);

var G__30451 = cljs.core.next(seq__28054_30444__$1);
var G__30452 = null;
var G__30453 = (0);
var G__30454 = (0);
seq__28054_30434 = G__30451;
chunk__28055_30435 = G__30452;
count__28056_30436 = G__30453;
i__28057_30437 = G__30454;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,a__14298__auto__);
};
var td = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30455__i = 0, G__30455__a = new Array(arguments.length -  0);
while (G__30455__i < G__30455__a.length) {G__30455__a[G__30455__i] = arguments[G__30455__i + 0]; ++G__30455__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30455__a,0);
} 
return td__delegate.call(this,args__14297__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__30456){
var args__14297__auto__ = cljs.core.seq(arglist__30456);
return td__delegate(args__14297__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28062_30457 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28063_30458 = null;
var count__28064_30459 = (0);
var i__28065_30460 = (0);
while(true){
if((i__28065_30460 < count__28064_30459)){
var arg__14299__auto___30461 = chunk__28063_30458.cljs$core$IIndexed$_nth$arity$2(null,i__28065_30460);
a__14298__auto__.push(arg__14299__auto___30461);

var G__30462 = seq__28062_30457;
var G__30463 = chunk__28063_30458;
var G__30464 = count__28064_30459;
var G__30465 = (i__28065_30460 + (1));
seq__28062_30457 = G__30462;
chunk__28063_30458 = G__30463;
count__28064_30459 = G__30464;
i__28065_30460 = G__30465;
continue;
} else {
var temp__4126__auto___30466 = cljs.core.seq(seq__28062_30457);
if(temp__4126__auto___30466){
var seq__28062_30467__$1 = temp__4126__auto___30466;
if(cljs.core.chunked_seq_QMARK_(seq__28062_30467__$1)){
var c__4522__auto___30468 = cljs.core.chunk_first(seq__28062_30467__$1);
var G__30469 = cljs.core.chunk_rest(seq__28062_30467__$1);
var G__30470 = c__4522__auto___30468;
var G__30471 = cljs.core.count(c__4522__auto___30468);
var G__30472 = (0);
seq__28062_30457 = G__30469;
chunk__28063_30458 = G__30470;
count__28064_30459 = G__30471;
i__28065_30460 = G__30472;
continue;
} else {
var arg__14299__auto___30473 = cljs.core.first(seq__28062_30467__$1);
a__14298__auto__.push(arg__14299__auto___30473);

var G__30474 = cljs.core.next(seq__28062_30467__$1);
var G__30475 = null;
var G__30476 = (0);
var G__30477 = (0);
seq__28062_30457 = G__30474;
chunk__28063_30458 = G__30475;
count__28064_30459 = G__30476;
i__28065_30460 = G__30477;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,a__14298__auto__);
};
var textarea = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30478__i = 0, G__30478__a = new Array(arguments.length -  0);
while (G__30478__i < G__30478__a.length) {G__30478__a[G__30478__i] = arguments[G__30478__i + 0]; ++G__30478__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30478__a,0);
} 
return textarea__delegate.call(this,args__14297__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__30479){
var args__14297__auto__ = cljs.core.seq(arglist__30479);
return textarea__delegate(args__14297__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28070_30480 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28071_30481 = null;
var count__28072_30482 = (0);
var i__28073_30483 = (0);
while(true){
if((i__28073_30483 < count__28072_30482)){
var arg__14299__auto___30484 = chunk__28071_30481.cljs$core$IIndexed$_nth$arity$2(null,i__28073_30483);
a__14298__auto__.push(arg__14299__auto___30484);

var G__30485 = seq__28070_30480;
var G__30486 = chunk__28071_30481;
var G__30487 = count__28072_30482;
var G__30488 = (i__28073_30483 + (1));
seq__28070_30480 = G__30485;
chunk__28071_30481 = G__30486;
count__28072_30482 = G__30487;
i__28073_30483 = G__30488;
continue;
} else {
var temp__4126__auto___30489 = cljs.core.seq(seq__28070_30480);
if(temp__4126__auto___30489){
var seq__28070_30490__$1 = temp__4126__auto___30489;
if(cljs.core.chunked_seq_QMARK_(seq__28070_30490__$1)){
var c__4522__auto___30491 = cljs.core.chunk_first(seq__28070_30490__$1);
var G__30492 = cljs.core.chunk_rest(seq__28070_30490__$1);
var G__30493 = c__4522__auto___30491;
var G__30494 = cljs.core.count(c__4522__auto___30491);
var G__30495 = (0);
seq__28070_30480 = G__30492;
chunk__28071_30481 = G__30493;
count__28072_30482 = G__30494;
i__28073_30483 = G__30495;
continue;
} else {
var arg__14299__auto___30496 = cljs.core.first(seq__28070_30490__$1);
a__14298__auto__.push(arg__14299__auto___30496);

var G__30497 = cljs.core.next(seq__28070_30490__$1);
var G__30498 = null;
var G__30499 = (0);
var G__30500 = (0);
seq__28070_30480 = G__30497;
chunk__28071_30481 = G__30498;
count__28072_30482 = G__30499;
i__28073_30483 = G__30500;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,a__14298__auto__);
};
var tfoot = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30501__i = 0, G__30501__a = new Array(arguments.length -  0);
while (G__30501__i < G__30501__a.length) {G__30501__a[G__30501__i] = arguments[G__30501__i + 0]; ++G__30501__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30501__a,0);
} 
return tfoot__delegate.call(this,args__14297__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__30502){
var args__14297__auto__ = cljs.core.seq(arglist__30502);
return tfoot__delegate(args__14297__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28078_30503 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28079_30504 = null;
var count__28080_30505 = (0);
var i__28081_30506 = (0);
while(true){
if((i__28081_30506 < count__28080_30505)){
var arg__14299__auto___30507 = chunk__28079_30504.cljs$core$IIndexed$_nth$arity$2(null,i__28081_30506);
a__14298__auto__.push(arg__14299__auto___30507);

var G__30508 = seq__28078_30503;
var G__30509 = chunk__28079_30504;
var G__30510 = count__28080_30505;
var G__30511 = (i__28081_30506 + (1));
seq__28078_30503 = G__30508;
chunk__28079_30504 = G__30509;
count__28080_30505 = G__30510;
i__28081_30506 = G__30511;
continue;
} else {
var temp__4126__auto___30512 = cljs.core.seq(seq__28078_30503);
if(temp__4126__auto___30512){
var seq__28078_30513__$1 = temp__4126__auto___30512;
if(cljs.core.chunked_seq_QMARK_(seq__28078_30513__$1)){
var c__4522__auto___30514 = cljs.core.chunk_first(seq__28078_30513__$1);
var G__30515 = cljs.core.chunk_rest(seq__28078_30513__$1);
var G__30516 = c__4522__auto___30514;
var G__30517 = cljs.core.count(c__4522__auto___30514);
var G__30518 = (0);
seq__28078_30503 = G__30515;
chunk__28079_30504 = G__30516;
count__28080_30505 = G__30517;
i__28081_30506 = G__30518;
continue;
} else {
var arg__14299__auto___30519 = cljs.core.first(seq__28078_30513__$1);
a__14298__auto__.push(arg__14299__auto___30519);

var G__30520 = cljs.core.next(seq__28078_30513__$1);
var G__30521 = null;
var G__30522 = (0);
var G__30523 = (0);
seq__28078_30503 = G__30520;
chunk__28079_30504 = G__30521;
count__28080_30505 = G__30522;
i__28081_30506 = G__30523;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,a__14298__auto__);
};
var th = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30524__i = 0, G__30524__a = new Array(arguments.length -  0);
while (G__30524__i < G__30524__a.length) {G__30524__a[G__30524__i] = arguments[G__30524__i + 0]; ++G__30524__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30524__a,0);
} 
return th__delegate.call(this,args__14297__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__30525){
var args__14297__auto__ = cljs.core.seq(arglist__30525);
return th__delegate(args__14297__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28086_30526 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28087_30527 = null;
var count__28088_30528 = (0);
var i__28089_30529 = (0);
while(true){
if((i__28089_30529 < count__28088_30528)){
var arg__14299__auto___30530 = chunk__28087_30527.cljs$core$IIndexed$_nth$arity$2(null,i__28089_30529);
a__14298__auto__.push(arg__14299__auto___30530);

var G__30531 = seq__28086_30526;
var G__30532 = chunk__28087_30527;
var G__30533 = count__28088_30528;
var G__30534 = (i__28089_30529 + (1));
seq__28086_30526 = G__30531;
chunk__28087_30527 = G__30532;
count__28088_30528 = G__30533;
i__28089_30529 = G__30534;
continue;
} else {
var temp__4126__auto___30535 = cljs.core.seq(seq__28086_30526);
if(temp__4126__auto___30535){
var seq__28086_30536__$1 = temp__4126__auto___30535;
if(cljs.core.chunked_seq_QMARK_(seq__28086_30536__$1)){
var c__4522__auto___30537 = cljs.core.chunk_first(seq__28086_30536__$1);
var G__30538 = cljs.core.chunk_rest(seq__28086_30536__$1);
var G__30539 = c__4522__auto___30537;
var G__30540 = cljs.core.count(c__4522__auto___30537);
var G__30541 = (0);
seq__28086_30526 = G__30538;
chunk__28087_30527 = G__30539;
count__28088_30528 = G__30540;
i__28089_30529 = G__30541;
continue;
} else {
var arg__14299__auto___30542 = cljs.core.first(seq__28086_30536__$1);
a__14298__auto__.push(arg__14299__auto___30542);

var G__30543 = cljs.core.next(seq__28086_30536__$1);
var G__30544 = null;
var G__30545 = (0);
var G__30546 = (0);
seq__28086_30526 = G__30543;
chunk__28087_30527 = G__30544;
count__28088_30528 = G__30545;
i__28089_30529 = G__30546;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,a__14298__auto__);
};
var thead = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30547__i = 0, G__30547__a = new Array(arguments.length -  0);
while (G__30547__i < G__30547__a.length) {G__30547__a[G__30547__i] = arguments[G__30547__i + 0]; ++G__30547__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30547__a,0);
} 
return thead__delegate.call(this,args__14297__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__30548){
var args__14297__auto__ = cljs.core.seq(arglist__30548);
return thead__delegate(args__14297__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28094_30549 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28095_30550 = null;
var count__28096_30551 = (0);
var i__28097_30552 = (0);
while(true){
if((i__28097_30552 < count__28096_30551)){
var arg__14299__auto___30553 = chunk__28095_30550.cljs$core$IIndexed$_nth$arity$2(null,i__28097_30552);
a__14298__auto__.push(arg__14299__auto___30553);

var G__30554 = seq__28094_30549;
var G__30555 = chunk__28095_30550;
var G__30556 = count__28096_30551;
var G__30557 = (i__28097_30552 + (1));
seq__28094_30549 = G__30554;
chunk__28095_30550 = G__30555;
count__28096_30551 = G__30556;
i__28097_30552 = G__30557;
continue;
} else {
var temp__4126__auto___30558 = cljs.core.seq(seq__28094_30549);
if(temp__4126__auto___30558){
var seq__28094_30559__$1 = temp__4126__auto___30558;
if(cljs.core.chunked_seq_QMARK_(seq__28094_30559__$1)){
var c__4522__auto___30560 = cljs.core.chunk_first(seq__28094_30559__$1);
var G__30561 = cljs.core.chunk_rest(seq__28094_30559__$1);
var G__30562 = c__4522__auto___30560;
var G__30563 = cljs.core.count(c__4522__auto___30560);
var G__30564 = (0);
seq__28094_30549 = G__30561;
chunk__28095_30550 = G__30562;
count__28096_30551 = G__30563;
i__28097_30552 = G__30564;
continue;
} else {
var arg__14299__auto___30565 = cljs.core.first(seq__28094_30559__$1);
a__14298__auto__.push(arg__14299__auto___30565);

var G__30566 = cljs.core.next(seq__28094_30559__$1);
var G__30567 = null;
var G__30568 = (0);
var G__30569 = (0);
seq__28094_30549 = G__30566;
chunk__28095_30550 = G__30567;
count__28096_30551 = G__30568;
i__28097_30552 = G__30569;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,a__14298__auto__);
};
var time = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30570__i = 0, G__30570__a = new Array(arguments.length -  0);
while (G__30570__i < G__30570__a.length) {G__30570__a[G__30570__i] = arguments[G__30570__i + 0]; ++G__30570__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30570__a,0);
} 
return time__delegate.call(this,args__14297__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__30571){
var args__14297__auto__ = cljs.core.seq(arglist__30571);
return time__delegate(args__14297__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28102_30572 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28103_30573 = null;
var count__28104_30574 = (0);
var i__28105_30575 = (0);
while(true){
if((i__28105_30575 < count__28104_30574)){
var arg__14299__auto___30576 = chunk__28103_30573.cljs$core$IIndexed$_nth$arity$2(null,i__28105_30575);
a__14298__auto__.push(arg__14299__auto___30576);

var G__30577 = seq__28102_30572;
var G__30578 = chunk__28103_30573;
var G__30579 = count__28104_30574;
var G__30580 = (i__28105_30575 + (1));
seq__28102_30572 = G__30577;
chunk__28103_30573 = G__30578;
count__28104_30574 = G__30579;
i__28105_30575 = G__30580;
continue;
} else {
var temp__4126__auto___30581 = cljs.core.seq(seq__28102_30572);
if(temp__4126__auto___30581){
var seq__28102_30582__$1 = temp__4126__auto___30581;
if(cljs.core.chunked_seq_QMARK_(seq__28102_30582__$1)){
var c__4522__auto___30583 = cljs.core.chunk_first(seq__28102_30582__$1);
var G__30584 = cljs.core.chunk_rest(seq__28102_30582__$1);
var G__30585 = c__4522__auto___30583;
var G__30586 = cljs.core.count(c__4522__auto___30583);
var G__30587 = (0);
seq__28102_30572 = G__30584;
chunk__28103_30573 = G__30585;
count__28104_30574 = G__30586;
i__28105_30575 = G__30587;
continue;
} else {
var arg__14299__auto___30588 = cljs.core.first(seq__28102_30582__$1);
a__14298__auto__.push(arg__14299__auto___30588);

var G__30589 = cljs.core.next(seq__28102_30582__$1);
var G__30590 = null;
var G__30591 = (0);
var G__30592 = (0);
seq__28102_30572 = G__30589;
chunk__28103_30573 = G__30590;
count__28104_30574 = G__30591;
i__28105_30575 = G__30592;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,a__14298__auto__);
};
var title = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30593__i = 0, G__30593__a = new Array(arguments.length -  0);
while (G__30593__i < G__30593__a.length) {G__30593__a[G__30593__i] = arguments[G__30593__i + 0]; ++G__30593__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30593__a,0);
} 
return title__delegate.call(this,args__14297__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__30594){
var args__14297__auto__ = cljs.core.seq(arglist__30594);
return title__delegate(args__14297__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28110_30595 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28111_30596 = null;
var count__28112_30597 = (0);
var i__28113_30598 = (0);
while(true){
if((i__28113_30598 < count__28112_30597)){
var arg__14299__auto___30599 = chunk__28111_30596.cljs$core$IIndexed$_nth$arity$2(null,i__28113_30598);
a__14298__auto__.push(arg__14299__auto___30599);

var G__30600 = seq__28110_30595;
var G__30601 = chunk__28111_30596;
var G__30602 = count__28112_30597;
var G__30603 = (i__28113_30598 + (1));
seq__28110_30595 = G__30600;
chunk__28111_30596 = G__30601;
count__28112_30597 = G__30602;
i__28113_30598 = G__30603;
continue;
} else {
var temp__4126__auto___30604 = cljs.core.seq(seq__28110_30595);
if(temp__4126__auto___30604){
var seq__28110_30605__$1 = temp__4126__auto___30604;
if(cljs.core.chunked_seq_QMARK_(seq__28110_30605__$1)){
var c__4522__auto___30606 = cljs.core.chunk_first(seq__28110_30605__$1);
var G__30607 = cljs.core.chunk_rest(seq__28110_30605__$1);
var G__30608 = c__4522__auto___30606;
var G__30609 = cljs.core.count(c__4522__auto___30606);
var G__30610 = (0);
seq__28110_30595 = G__30607;
chunk__28111_30596 = G__30608;
count__28112_30597 = G__30609;
i__28113_30598 = G__30610;
continue;
} else {
var arg__14299__auto___30611 = cljs.core.first(seq__28110_30605__$1);
a__14298__auto__.push(arg__14299__auto___30611);

var G__30612 = cljs.core.next(seq__28110_30605__$1);
var G__30613 = null;
var G__30614 = (0);
var G__30615 = (0);
seq__28110_30595 = G__30612;
chunk__28111_30596 = G__30613;
count__28112_30597 = G__30614;
i__28113_30598 = G__30615;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,a__14298__auto__);
};
var tr = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30616__i = 0, G__30616__a = new Array(arguments.length -  0);
while (G__30616__i < G__30616__a.length) {G__30616__a[G__30616__i] = arguments[G__30616__i + 0]; ++G__30616__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30616__a,0);
} 
return tr__delegate.call(this,args__14297__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__30617){
var args__14297__auto__ = cljs.core.seq(arglist__30617);
return tr__delegate(args__14297__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28118_30618 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28119_30619 = null;
var count__28120_30620 = (0);
var i__28121_30621 = (0);
while(true){
if((i__28121_30621 < count__28120_30620)){
var arg__14299__auto___30622 = chunk__28119_30619.cljs$core$IIndexed$_nth$arity$2(null,i__28121_30621);
a__14298__auto__.push(arg__14299__auto___30622);

var G__30623 = seq__28118_30618;
var G__30624 = chunk__28119_30619;
var G__30625 = count__28120_30620;
var G__30626 = (i__28121_30621 + (1));
seq__28118_30618 = G__30623;
chunk__28119_30619 = G__30624;
count__28120_30620 = G__30625;
i__28121_30621 = G__30626;
continue;
} else {
var temp__4126__auto___30627 = cljs.core.seq(seq__28118_30618);
if(temp__4126__auto___30627){
var seq__28118_30628__$1 = temp__4126__auto___30627;
if(cljs.core.chunked_seq_QMARK_(seq__28118_30628__$1)){
var c__4522__auto___30629 = cljs.core.chunk_first(seq__28118_30628__$1);
var G__30630 = cljs.core.chunk_rest(seq__28118_30628__$1);
var G__30631 = c__4522__auto___30629;
var G__30632 = cljs.core.count(c__4522__auto___30629);
var G__30633 = (0);
seq__28118_30618 = G__30630;
chunk__28119_30619 = G__30631;
count__28120_30620 = G__30632;
i__28121_30621 = G__30633;
continue;
} else {
var arg__14299__auto___30634 = cljs.core.first(seq__28118_30628__$1);
a__14298__auto__.push(arg__14299__auto___30634);

var G__30635 = cljs.core.next(seq__28118_30628__$1);
var G__30636 = null;
var G__30637 = (0);
var G__30638 = (0);
seq__28118_30618 = G__30635;
chunk__28119_30619 = G__30636;
count__28120_30620 = G__30637;
i__28121_30621 = G__30638;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,a__14298__auto__);
};
var track = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30639__i = 0, G__30639__a = new Array(arguments.length -  0);
while (G__30639__i < G__30639__a.length) {G__30639__a[G__30639__i] = arguments[G__30639__i + 0]; ++G__30639__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30639__a,0);
} 
return track__delegate.call(this,args__14297__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__30640){
var args__14297__auto__ = cljs.core.seq(arglist__30640);
return track__delegate(args__14297__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28126_30641 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28127_30642 = null;
var count__28128_30643 = (0);
var i__28129_30644 = (0);
while(true){
if((i__28129_30644 < count__28128_30643)){
var arg__14299__auto___30645 = chunk__28127_30642.cljs$core$IIndexed$_nth$arity$2(null,i__28129_30644);
a__14298__auto__.push(arg__14299__auto___30645);

var G__30646 = seq__28126_30641;
var G__30647 = chunk__28127_30642;
var G__30648 = count__28128_30643;
var G__30649 = (i__28129_30644 + (1));
seq__28126_30641 = G__30646;
chunk__28127_30642 = G__30647;
count__28128_30643 = G__30648;
i__28129_30644 = G__30649;
continue;
} else {
var temp__4126__auto___30650 = cljs.core.seq(seq__28126_30641);
if(temp__4126__auto___30650){
var seq__28126_30651__$1 = temp__4126__auto___30650;
if(cljs.core.chunked_seq_QMARK_(seq__28126_30651__$1)){
var c__4522__auto___30652 = cljs.core.chunk_first(seq__28126_30651__$1);
var G__30653 = cljs.core.chunk_rest(seq__28126_30651__$1);
var G__30654 = c__4522__auto___30652;
var G__30655 = cljs.core.count(c__4522__auto___30652);
var G__30656 = (0);
seq__28126_30641 = G__30653;
chunk__28127_30642 = G__30654;
count__28128_30643 = G__30655;
i__28129_30644 = G__30656;
continue;
} else {
var arg__14299__auto___30657 = cljs.core.first(seq__28126_30651__$1);
a__14298__auto__.push(arg__14299__auto___30657);

var G__30658 = cljs.core.next(seq__28126_30651__$1);
var G__30659 = null;
var G__30660 = (0);
var G__30661 = (0);
seq__28126_30641 = G__30658;
chunk__28127_30642 = G__30659;
count__28128_30643 = G__30660;
i__28129_30644 = G__30661;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,a__14298__auto__);
};
var u = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30662__i = 0, G__30662__a = new Array(arguments.length -  0);
while (G__30662__i < G__30662__a.length) {G__30662__a[G__30662__i] = arguments[G__30662__i + 0]; ++G__30662__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30662__a,0);
} 
return u__delegate.call(this,args__14297__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__30663){
var args__14297__auto__ = cljs.core.seq(arglist__30663);
return u__delegate(args__14297__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28134_30664 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28135_30665 = null;
var count__28136_30666 = (0);
var i__28137_30667 = (0);
while(true){
if((i__28137_30667 < count__28136_30666)){
var arg__14299__auto___30668 = chunk__28135_30665.cljs$core$IIndexed$_nth$arity$2(null,i__28137_30667);
a__14298__auto__.push(arg__14299__auto___30668);

var G__30669 = seq__28134_30664;
var G__30670 = chunk__28135_30665;
var G__30671 = count__28136_30666;
var G__30672 = (i__28137_30667 + (1));
seq__28134_30664 = G__30669;
chunk__28135_30665 = G__30670;
count__28136_30666 = G__30671;
i__28137_30667 = G__30672;
continue;
} else {
var temp__4126__auto___30673 = cljs.core.seq(seq__28134_30664);
if(temp__4126__auto___30673){
var seq__28134_30674__$1 = temp__4126__auto___30673;
if(cljs.core.chunked_seq_QMARK_(seq__28134_30674__$1)){
var c__4522__auto___30675 = cljs.core.chunk_first(seq__28134_30674__$1);
var G__30676 = cljs.core.chunk_rest(seq__28134_30674__$1);
var G__30677 = c__4522__auto___30675;
var G__30678 = cljs.core.count(c__4522__auto___30675);
var G__30679 = (0);
seq__28134_30664 = G__30676;
chunk__28135_30665 = G__30677;
count__28136_30666 = G__30678;
i__28137_30667 = G__30679;
continue;
} else {
var arg__14299__auto___30680 = cljs.core.first(seq__28134_30674__$1);
a__14298__auto__.push(arg__14299__auto___30680);

var G__30681 = cljs.core.next(seq__28134_30674__$1);
var G__30682 = null;
var G__30683 = (0);
var G__30684 = (0);
seq__28134_30664 = G__30681;
chunk__28135_30665 = G__30682;
count__28136_30666 = G__30683;
i__28137_30667 = G__30684;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,a__14298__auto__);
};
var ul = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30685__i = 0, G__30685__a = new Array(arguments.length -  0);
while (G__30685__i < G__30685__a.length) {G__30685__a[G__30685__i] = arguments[G__30685__i + 0]; ++G__30685__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30685__a,0);
} 
return ul__delegate.call(this,args__14297__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__30686){
var args__14297__auto__ = cljs.core.seq(arglist__30686);
return ul__delegate(args__14297__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28142_30687 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28143_30688 = null;
var count__28144_30689 = (0);
var i__28145_30690 = (0);
while(true){
if((i__28145_30690 < count__28144_30689)){
var arg__14299__auto___30691 = chunk__28143_30688.cljs$core$IIndexed$_nth$arity$2(null,i__28145_30690);
a__14298__auto__.push(arg__14299__auto___30691);

var G__30692 = seq__28142_30687;
var G__30693 = chunk__28143_30688;
var G__30694 = count__28144_30689;
var G__30695 = (i__28145_30690 + (1));
seq__28142_30687 = G__30692;
chunk__28143_30688 = G__30693;
count__28144_30689 = G__30694;
i__28145_30690 = G__30695;
continue;
} else {
var temp__4126__auto___30696 = cljs.core.seq(seq__28142_30687);
if(temp__4126__auto___30696){
var seq__28142_30697__$1 = temp__4126__auto___30696;
if(cljs.core.chunked_seq_QMARK_(seq__28142_30697__$1)){
var c__4522__auto___30698 = cljs.core.chunk_first(seq__28142_30697__$1);
var G__30699 = cljs.core.chunk_rest(seq__28142_30697__$1);
var G__30700 = c__4522__auto___30698;
var G__30701 = cljs.core.count(c__4522__auto___30698);
var G__30702 = (0);
seq__28142_30687 = G__30699;
chunk__28143_30688 = G__30700;
count__28144_30689 = G__30701;
i__28145_30690 = G__30702;
continue;
} else {
var arg__14299__auto___30703 = cljs.core.first(seq__28142_30697__$1);
a__14298__auto__.push(arg__14299__auto___30703);

var G__30704 = cljs.core.next(seq__28142_30697__$1);
var G__30705 = null;
var G__30706 = (0);
var G__30707 = (0);
seq__28142_30687 = G__30704;
chunk__28143_30688 = G__30705;
count__28144_30689 = G__30706;
i__28145_30690 = G__30707;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,a__14298__auto__);
};
var var$ = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30708__i = 0, G__30708__a = new Array(arguments.length -  0);
while (G__30708__i < G__30708__a.length) {G__30708__a[G__30708__i] = arguments[G__30708__i + 0]; ++G__30708__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30708__a,0);
} 
return var$__delegate.call(this,args__14297__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__30709){
var args__14297__auto__ = cljs.core.seq(arglist__30709);
return var$__delegate(args__14297__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28150_30710 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28151_30711 = null;
var count__28152_30712 = (0);
var i__28153_30713 = (0);
while(true){
if((i__28153_30713 < count__28152_30712)){
var arg__14299__auto___30714 = chunk__28151_30711.cljs$core$IIndexed$_nth$arity$2(null,i__28153_30713);
a__14298__auto__.push(arg__14299__auto___30714);

var G__30715 = seq__28150_30710;
var G__30716 = chunk__28151_30711;
var G__30717 = count__28152_30712;
var G__30718 = (i__28153_30713 + (1));
seq__28150_30710 = G__30715;
chunk__28151_30711 = G__30716;
count__28152_30712 = G__30717;
i__28153_30713 = G__30718;
continue;
} else {
var temp__4126__auto___30719 = cljs.core.seq(seq__28150_30710);
if(temp__4126__auto___30719){
var seq__28150_30720__$1 = temp__4126__auto___30719;
if(cljs.core.chunked_seq_QMARK_(seq__28150_30720__$1)){
var c__4522__auto___30721 = cljs.core.chunk_first(seq__28150_30720__$1);
var G__30722 = cljs.core.chunk_rest(seq__28150_30720__$1);
var G__30723 = c__4522__auto___30721;
var G__30724 = cljs.core.count(c__4522__auto___30721);
var G__30725 = (0);
seq__28150_30710 = G__30722;
chunk__28151_30711 = G__30723;
count__28152_30712 = G__30724;
i__28153_30713 = G__30725;
continue;
} else {
var arg__14299__auto___30726 = cljs.core.first(seq__28150_30720__$1);
a__14298__auto__.push(arg__14299__auto___30726);

var G__30727 = cljs.core.next(seq__28150_30720__$1);
var G__30728 = null;
var G__30729 = (0);
var G__30730 = (0);
seq__28150_30710 = G__30727;
chunk__28151_30711 = G__30728;
count__28152_30712 = G__30729;
i__28153_30713 = G__30730;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,a__14298__auto__);
};
var video = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30731__i = 0, G__30731__a = new Array(arguments.length -  0);
while (G__30731__i < G__30731__a.length) {G__30731__a[G__30731__i] = arguments[G__30731__i + 0]; ++G__30731__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30731__a,0);
} 
return video__delegate.call(this,args__14297__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__30732){
var args__14297__auto__ = cljs.core.seq(arglist__30732);
return video__delegate(args__14297__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28158_30733 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28159_30734 = null;
var count__28160_30735 = (0);
var i__28161_30736 = (0);
while(true){
if((i__28161_30736 < count__28160_30735)){
var arg__14299__auto___30737 = chunk__28159_30734.cljs$core$IIndexed$_nth$arity$2(null,i__28161_30736);
a__14298__auto__.push(arg__14299__auto___30737);

var G__30738 = seq__28158_30733;
var G__30739 = chunk__28159_30734;
var G__30740 = count__28160_30735;
var G__30741 = (i__28161_30736 + (1));
seq__28158_30733 = G__30738;
chunk__28159_30734 = G__30739;
count__28160_30735 = G__30740;
i__28161_30736 = G__30741;
continue;
} else {
var temp__4126__auto___30742 = cljs.core.seq(seq__28158_30733);
if(temp__4126__auto___30742){
var seq__28158_30743__$1 = temp__4126__auto___30742;
if(cljs.core.chunked_seq_QMARK_(seq__28158_30743__$1)){
var c__4522__auto___30744 = cljs.core.chunk_first(seq__28158_30743__$1);
var G__30745 = cljs.core.chunk_rest(seq__28158_30743__$1);
var G__30746 = c__4522__auto___30744;
var G__30747 = cljs.core.count(c__4522__auto___30744);
var G__30748 = (0);
seq__28158_30733 = G__30745;
chunk__28159_30734 = G__30746;
count__28160_30735 = G__30747;
i__28161_30736 = G__30748;
continue;
} else {
var arg__14299__auto___30749 = cljs.core.first(seq__28158_30743__$1);
a__14298__auto__.push(arg__14299__auto___30749);

var G__30750 = cljs.core.next(seq__28158_30743__$1);
var G__30751 = null;
var G__30752 = (0);
var G__30753 = (0);
seq__28158_30733 = G__30750;
chunk__28159_30734 = G__30751;
count__28160_30735 = G__30752;
i__28161_30736 = G__30753;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,a__14298__auto__);
};
var wbr = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30754__i = 0, G__30754__a = new Array(arguments.length -  0);
while (G__30754__i < G__30754__a.length) {G__30754__a[G__30754__i] = arguments[G__30754__i + 0]; ++G__30754__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30754__a,0);
} 
return wbr__delegate.call(this,args__14297__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__30755){
var args__14297__auto__ = cljs.core.seq(arglist__30755);
return wbr__delegate(args__14297__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28166_30756 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28167_30757 = null;
var count__28168_30758 = (0);
var i__28169_30759 = (0);
while(true){
if((i__28169_30759 < count__28168_30758)){
var arg__14299__auto___30760 = chunk__28167_30757.cljs$core$IIndexed$_nth$arity$2(null,i__28169_30759);
a__14298__auto__.push(arg__14299__auto___30760);

var G__30761 = seq__28166_30756;
var G__30762 = chunk__28167_30757;
var G__30763 = count__28168_30758;
var G__30764 = (i__28169_30759 + (1));
seq__28166_30756 = G__30761;
chunk__28167_30757 = G__30762;
count__28168_30758 = G__30763;
i__28169_30759 = G__30764;
continue;
} else {
var temp__4126__auto___30765 = cljs.core.seq(seq__28166_30756);
if(temp__4126__auto___30765){
var seq__28166_30766__$1 = temp__4126__auto___30765;
if(cljs.core.chunked_seq_QMARK_(seq__28166_30766__$1)){
var c__4522__auto___30767 = cljs.core.chunk_first(seq__28166_30766__$1);
var G__30768 = cljs.core.chunk_rest(seq__28166_30766__$1);
var G__30769 = c__4522__auto___30767;
var G__30770 = cljs.core.count(c__4522__auto___30767);
var G__30771 = (0);
seq__28166_30756 = G__30768;
chunk__28167_30757 = G__30769;
count__28168_30758 = G__30770;
i__28169_30759 = G__30771;
continue;
} else {
var arg__14299__auto___30772 = cljs.core.first(seq__28166_30766__$1);
a__14298__auto__.push(arg__14299__auto___30772);

var G__30773 = cljs.core.next(seq__28166_30766__$1);
var G__30774 = null;
var G__30775 = (0);
var G__30776 = (0);
seq__28166_30756 = G__30773;
chunk__28167_30757 = G__30774;
count__28168_30758 = G__30775;
i__28169_30759 = G__30776;
continue;
}
} else {
}
}
break;
}

return React.DOM.circle.apply(null,a__14298__auto__);
};
var circle = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30777__i = 0, G__30777__a = new Array(arguments.length -  0);
while (G__30777__i < G__30777__a.length) {G__30777__a[G__30777__i] = arguments[G__30777__i + 0]; ++G__30777__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30777__a,0);
} 
return circle__delegate.call(this,args__14297__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__30778){
var args__14297__auto__ = cljs.core.seq(arglist__30778);
return circle__delegate(args__14297__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28174_30779 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28175_30780 = null;
var count__28176_30781 = (0);
var i__28177_30782 = (0);
while(true){
if((i__28177_30782 < count__28176_30781)){
var arg__14299__auto___30783 = chunk__28175_30780.cljs$core$IIndexed$_nth$arity$2(null,i__28177_30782);
a__14298__auto__.push(arg__14299__auto___30783);

var G__30784 = seq__28174_30779;
var G__30785 = chunk__28175_30780;
var G__30786 = count__28176_30781;
var G__30787 = (i__28177_30782 + (1));
seq__28174_30779 = G__30784;
chunk__28175_30780 = G__30785;
count__28176_30781 = G__30786;
i__28177_30782 = G__30787;
continue;
} else {
var temp__4126__auto___30788 = cljs.core.seq(seq__28174_30779);
if(temp__4126__auto___30788){
var seq__28174_30789__$1 = temp__4126__auto___30788;
if(cljs.core.chunked_seq_QMARK_(seq__28174_30789__$1)){
var c__4522__auto___30790 = cljs.core.chunk_first(seq__28174_30789__$1);
var G__30791 = cljs.core.chunk_rest(seq__28174_30789__$1);
var G__30792 = c__4522__auto___30790;
var G__30793 = cljs.core.count(c__4522__auto___30790);
var G__30794 = (0);
seq__28174_30779 = G__30791;
chunk__28175_30780 = G__30792;
count__28176_30781 = G__30793;
i__28177_30782 = G__30794;
continue;
} else {
var arg__14299__auto___30795 = cljs.core.first(seq__28174_30789__$1);
a__14298__auto__.push(arg__14299__auto___30795);

var G__30796 = cljs.core.next(seq__28174_30789__$1);
var G__30797 = null;
var G__30798 = (0);
var G__30799 = (0);
seq__28174_30779 = G__30796;
chunk__28175_30780 = G__30797;
count__28176_30781 = G__30798;
i__28177_30782 = G__30799;
continue;
}
} else {
}
}
break;
}

return React.DOM.g.apply(null,a__14298__auto__);
};
var g = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30800__i = 0, G__30800__a = new Array(arguments.length -  0);
while (G__30800__i < G__30800__a.length) {G__30800__a[G__30800__i] = arguments[G__30800__i + 0]; ++G__30800__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30800__a,0);
} 
return g__delegate.call(this,args__14297__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__30801){
var args__14297__auto__ = cljs.core.seq(arglist__30801);
return g__delegate(args__14297__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28182_30802 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28183_30803 = null;
var count__28184_30804 = (0);
var i__28185_30805 = (0);
while(true){
if((i__28185_30805 < count__28184_30804)){
var arg__14299__auto___30806 = chunk__28183_30803.cljs$core$IIndexed$_nth$arity$2(null,i__28185_30805);
a__14298__auto__.push(arg__14299__auto___30806);

var G__30807 = seq__28182_30802;
var G__30808 = chunk__28183_30803;
var G__30809 = count__28184_30804;
var G__30810 = (i__28185_30805 + (1));
seq__28182_30802 = G__30807;
chunk__28183_30803 = G__30808;
count__28184_30804 = G__30809;
i__28185_30805 = G__30810;
continue;
} else {
var temp__4126__auto___30811 = cljs.core.seq(seq__28182_30802);
if(temp__4126__auto___30811){
var seq__28182_30812__$1 = temp__4126__auto___30811;
if(cljs.core.chunked_seq_QMARK_(seq__28182_30812__$1)){
var c__4522__auto___30813 = cljs.core.chunk_first(seq__28182_30812__$1);
var G__30814 = cljs.core.chunk_rest(seq__28182_30812__$1);
var G__30815 = c__4522__auto___30813;
var G__30816 = cljs.core.count(c__4522__auto___30813);
var G__30817 = (0);
seq__28182_30802 = G__30814;
chunk__28183_30803 = G__30815;
count__28184_30804 = G__30816;
i__28185_30805 = G__30817;
continue;
} else {
var arg__14299__auto___30818 = cljs.core.first(seq__28182_30812__$1);
a__14298__auto__.push(arg__14299__auto___30818);

var G__30819 = cljs.core.next(seq__28182_30812__$1);
var G__30820 = null;
var G__30821 = (0);
var G__30822 = (0);
seq__28182_30802 = G__30819;
chunk__28183_30803 = G__30820;
count__28184_30804 = G__30821;
i__28185_30805 = G__30822;
continue;
}
} else {
}
}
break;
}

return React.DOM.line.apply(null,a__14298__auto__);
};
var line = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30823__i = 0, G__30823__a = new Array(arguments.length -  0);
while (G__30823__i < G__30823__a.length) {G__30823__a[G__30823__i] = arguments[G__30823__i + 0]; ++G__30823__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30823__a,0);
} 
return line__delegate.call(this,args__14297__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__30824){
var args__14297__auto__ = cljs.core.seq(arglist__30824);
return line__delegate(args__14297__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28190_30825 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28191_30826 = null;
var count__28192_30827 = (0);
var i__28193_30828 = (0);
while(true){
if((i__28193_30828 < count__28192_30827)){
var arg__14299__auto___30829 = chunk__28191_30826.cljs$core$IIndexed$_nth$arity$2(null,i__28193_30828);
a__14298__auto__.push(arg__14299__auto___30829);

var G__30830 = seq__28190_30825;
var G__30831 = chunk__28191_30826;
var G__30832 = count__28192_30827;
var G__30833 = (i__28193_30828 + (1));
seq__28190_30825 = G__30830;
chunk__28191_30826 = G__30831;
count__28192_30827 = G__30832;
i__28193_30828 = G__30833;
continue;
} else {
var temp__4126__auto___30834 = cljs.core.seq(seq__28190_30825);
if(temp__4126__auto___30834){
var seq__28190_30835__$1 = temp__4126__auto___30834;
if(cljs.core.chunked_seq_QMARK_(seq__28190_30835__$1)){
var c__4522__auto___30836 = cljs.core.chunk_first(seq__28190_30835__$1);
var G__30837 = cljs.core.chunk_rest(seq__28190_30835__$1);
var G__30838 = c__4522__auto___30836;
var G__30839 = cljs.core.count(c__4522__auto___30836);
var G__30840 = (0);
seq__28190_30825 = G__30837;
chunk__28191_30826 = G__30838;
count__28192_30827 = G__30839;
i__28193_30828 = G__30840;
continue;
} else {
var arg__14299__auto___30841 = cljs.core.first(seq__28190_30835__$1);
a__14298__auto__.push(arg__14299__auto___30841);

var G__30842 = cljs.core.next(seq__28190_30835__$1);
var G__30843 = null;
var G__30844 = (0);
var G__30845 = (0);
seq__28190_30825 = G__30842;
chunk__28191_30826 = G__30843;
count__28192_30827 = G__30844;
i__28193_30828 = G__30845;
continue;
}
} else {
}
}
break;
}

return React.DOM.path.apply(null,a__14298__auto__);
};
var path = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30846__i = 0, G__30846__a = new Array(arguments.length -  0);
while (G__30846__i < G__30846__a.length) {G__30846__a[G__30846__i] = arguments[G__30846__i + 0]; ++G__30846__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30846__a,0);
} 
return path__delegate.call(this,args__14297__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__30847){
var args__14297__auto__ = cljs.core.seq(arglist__30847);
return path__delegate(args__14297__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28198_30848 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28199_30849 = null;
var count__28200_30850 = (0);
var i__28201_30851 = (0);
while(true){
if((i__28201_30851 < count__28200_30850)){
var arg__14299__auto___30852 = chunk__28199_30849.cljs$core$IIndexed$_nth$arity$2(null,i__28201_30851);
a__14298__auto__.push(arg__14299__auto___30852);

var G__30853 = seq__28198_30848;
var G__30854 = chunk__28199_30849;
var G__30855 = count__28200_30850;
var G__30856 = (i__28201_30851 + (1));
seq__28198_30848 = G__30853;
chunk__28199_30849 = G__30854;
count__28200_30850 = G__30855;
i__28201_30851 = G__30856;
continue;
} else {
var temp__4126__auto___30857 = cljs.core.seq(seq__28198_30848);
if(temp__4126__auto___30857){
var seq__28198_30858__$1 = temp__4126__auto___30857;
if(cljs.core.chunked_seq_QMARK_(seq__28198_30858__$1)){
var c__4522__auto___30859 = cljs.core.chunk_first(seq__28198_30858__$1);
var G__30860 = cljs.core.chunk_rest(seq__28198_30858__$1);
var G__30861 = c__4522__auto___30859;
var G__30862 = cljs.core.count(c__4522__auto___30859);
var G__30863 = (0);
seq__28198_30848 = G__30860;
chunk__28199_30849 = G__30861;
count__28200_30850 = G__30862;
i__28201_30851 = G__30863;
continue;
} else {
var arg__14299__auto___30864 = cljs.core.first(seq__28198_30858__$1);
a__14298__auto__.push(arg__14299__auto___30864);

var G__30865 = cljs.core.next(seq__28198_30858__$1);
var G__30866 = null;
var G__30867 = (0);
var G__30868 = (0);
seq__28198_30848 = G__30865;
chunk__28199_30849 = G__30866;
count__28200_30850 = G__30867;
i__28201_30851 = G__30868;
continue;
}
} else {
}
}
break;
}

return React.DOM.polygon.apply(null,a__14298__auto__);
};
var polygon = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30869__i = 0, G__30869__a = new Array(arguments.length -  0);
while (G__30869__i < G__30869__a.length) {G__30869__a[G__30869__i] = arguments[G__30869__i + 0]; ++G__30869__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30869__a,0);
} 
return polygon__delegate.call(this,args__14297__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__30870){
var args__14297__auto__ = cljs.core.seq(arglist__30870);
return polygon__delegate(args__14297__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28206_30871 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28207_30872 = null;
var count__28208_30873 = (0);
var i__28209_30874 = (0);
while(true){
if((i__28209_30874 < count__28208_30873)){
var arg__14299__auto___30875 = chunk__28207_30872.cljs$core$IIndexed$_nth$arity$2(null,i__28209_30874);
a__14298__auto__.push(arg__14299__auto___30875);

var G__30876 = seq__28206_30871;
var G__30877 = chunk__28207_30872;
var G__30878 = count__28208_30873;
var G__30879 = (i__28209_30874 + (1));
seq__28206_30871 = G__30876;
chunk__28207_30872 = G__30877;
count__28208_30873 = G__30878;
i__28209_30874 = G__30879;
continue;
} else {
var temp__4126__auto___30880 = cljs.core.seq(seq__28206_30871);
if(temp__4126__auto___30880){
var seq__28206_30881__$1 = temp__4126__auto___30880;
if(cljs.core.chunked_seq_QMARK_(seq__28206_30881__$1)){
var c__4522__auto___30882 = cljs.core.chunk_first(seq__28206_30881__$1);
var G__30883 = cljs.core.chunk_rest(seq__28206_30881__$1);
var G__30884 = c__4522__auto___30882;
var G__30885 = cljs.core.count(c__4522__auto___30882);
var G__30886 = (0);
seq__28206_30871 = G__30883;
chunk__28207_30872 = G__30884;
count__28208_30873 = G__30885;
i__28209_30874 = G__30886;
continue;
} else {
var arg__14299__auto___30887 = cljs.core.first(seq__28206_30881__$1);
a__14298__auto__.push(arg__14299__auto___30887);

var G__30888 = cljs.core.next(seq__28206_30881__$1);
var G__30889 = null;
var G__30890 = (0);
var G__30891 = (0);
seq__28206_30871 = G__30888;
chunk__28207_30872 = G__30889;
count__28208_30873 = G__30890;
i__28209_30874 = G__30891;
continue;
}
} else {
}
}
break;
}

return React.DOM.polyline.apply(null,a__14298__auto__);
};
var polyline = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30892__i = 0, G__30892__a = new Array(arguments.length -  0);
while (G__30892__i < G__30892__a.length) {G__30892__a[G__30892__i] = arguments[G__30892__i + 0]; ++G__30892__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30892__a,0);
} 
return polyline__delegate.call(this,args__14297__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__30893){
var args__14297__auto__ = cljs.core.seq(arglist__30893);
return polyline__delegate(args__14297__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28214_30894 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28215_30895 = null;
var count__28216_30896 = (0);
var i__28217_30897 = (0);
while(true){
if((i__28217_30897 < count__28216_30896)){
var arg__14299__auto___30898 = chunk__28215_30895.cljs$core$IIndexed$_nth$arity$2(null,i__28217_30897);
a__14298__auto__.push(arg__14299__auto___30898);

var G__30899 = seq__28214_30894;
var G__30900 = chunk__28215_30895;
var G__30901 = count__28216_30896;
var G__30902 = (i__28217_30897 + (1));
seq__28214_30894 = G__30899;
chunk__28215_30895 = G__30900;
count__28216_30896 = G__30901;
i__28217_30897 = G__30902;
continue;
} else {
var temp__4126__auto___30903 = cljs.core.seq(seq__28214_30894);
if(temp__4126__auto___30903){
var seq__28214_30904__$1 = temp__4126__auto___30903;
if(cljs.core.chunked_seq_QMARK_(seq__28214_30904__$1)){
var c__4522__auto___30905 = cljs.core.chunk_first(seq__28214_30904__$1);
var G__30906 = cljs.core.chunk_rest(seq__28214_30904__$1);
var G__30907 = c__4522__auto___30905;
var G__30908 = cljs.core.count(c__4522__auto___30905);
var G__30909 = (0);
seq__28214_30894 = G__30906;
chunk__28215_30895 = G__30907;
count__28216_30896 = G__30908;
i__28217_30897 = G__30909;
continue;
} else {
var arg__14299__auto___30910 = cljs.core.first(seq__28214_30904__$1);
a__14298__auto__.push(arg__14299__auto___30910);

var G__30911 = cljs.core.next(seq__28214_30904__$1);
var G__30912 = null;
var G__30913 = (0);
var G__30914 = (0);
seq__28214_30894 = G__30911;
chunk__28215_30895 = G__30912;
count__28216_30896 = G__30913;
i__28217_30897 = G__30914;
continue;
}
} else {
}
}
break;
}

return React.DOM.rect.apply(null,a__14298__auto__);
};
var rect = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30915__i = 0, G__30915__a = new Array(arguments.length -  0);
while (G__30915__i < G__30915__a.length) {G__30915__a[G__30915__i] = arguments[G__30915__i + 0]; ++G__30915__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30915__a,0);
} 
return rect__delegate.call(this,args__14297__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__30916){
var args__14297__auto__ = cljs.core.seq(arglist__30916);
return rect__delegate(args__14297__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__28222_30917 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__28223_30918 = null;
var count__28224_30919 = (0);
var i__28225_30920 = (0);
while(true){
if((i__28225_30920 < count__28224_30919)){
var arg__14299__auto___30921 = chunk__28223_30918.cljs$core$IIndexed$_nth$arity$2(null,i__28225_30920);
a__14298__auto__.push(arg__14299__auto___30921);

var G__30922 = seq__28222_30917;
var G__30923 = chunk__28223_30918;
var G__30924 = count__28224_30919;
var G__30925 = (i__28225_30920 + (1));
seq__28222_30917 = G__30922;
chunk__28223_30918 = G__30923;
count__28224_30919 = G__30924;
i__28225_30920 = G__30925;
continue;
} else {
var temp__4126__auto___30926 = cljs.core.seq(seq__28222_30917);
if(temp__4126__auto___30926){
var seq__28222_30927__$1 = temp__4126__auto___30926;
if(cljs.core.chunked_seq_QMARK_(seq__28222_30927__$1)){
var c__4522__auto___30928 = cljs.core.chunk_first(seq__28222_30927__$1);
var G__30929 = cljs.core.chunk_rest(seq__28222_30927__$1);
var G__30930 = c__4522__auto___30928;
var G__30931 = cljs.core.count(c__4522__auto___30928);
var G__30932 = (0);
seq__28222_30917 = G__30929;
chunk__28223_30918 = G__30930;
count__28224_30919 = G__30931;
i__28225_30920 = G__30932;
continue;
} else {
var arg__14299__auto___30933 = cljs.core.first(seq__28222_30927__$1);
a__14298__auto__.push(arg__14299__auto___30933);

var G__30934 = cljs.core.next(seq__28222_30927__$1);
var G__30935 = null;
var G__30936 = (0);
var G__30937 = (0);
seq__28222_30917 = G__30934;
chunk__28223_30918 = G__30935;
count__28224_30919 = G__30936;
i__28225_30920 = G__30937;
continue;
}
} else {
}
}
break;
}

return React.DOM.svg.apply(null,a__14298__auto__);
};
var svg = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30938__i = 0, G__30938__a = new Array(arguments.length -  0);
while (G__30938__i < G__30938__a.length) {G__30938__a[G__30938__i] = arguments[G__30938__i + 0]; ++G__30938__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30938__a,0);
} 
return svg__delegate.call(this,args__14297__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__30939){
var args__14297__auto__ = cljs.core.seq(arglist__30939);
return svg__delegate(args__14297__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__14297__auto__){

var a__14298__auto__ = [];
a__14298__auto__.push(cljs.core.clj__GT_js(cljs.core.first(args__14297__auto__)));

var seq__27534_30940 = cljs.core.seq(cljs.core.rest(args__14297__auto__));
var chunk__27535_30941 = null;
var count__27536_30942 = (0);
var i__27537_30943 = (0);
while(true){
if((i__27537_30943 < count__27536_30942)){
var arg__14299__auto___30944 = chunk__27535_30941.cljs$core$IIndexed$_nth$arity$2(null,i__27537_30943);
a__14298__auto__.push(arg__14299__auto___30944);

var G__30945 = seq__27534_30940;
var G__30946 = chunk__27535_30941;
var G__30947 = count__27536_30942;
var G__30948 = (i__27537_30943 + (1));
seq__27534_30940 = G__30945;
chunk__27535_30941 = G__30946;
count__27536_30942 = G__30947;
i__27537_30943 = G__30948;
continue;
} else {
var temp__4126__auto___30949 = cljs.core.seq(seq__27534_30940);
if(temp__4126__auto___30949){
var seq__27534_30950__$1 = temp__4126__auto___30949;
if(cljs.core.chunked_seq_QMARK_(seq__27534_30950__$1)){
var c__4522__auto___30951 = cljs.core.chunk_first(seq__27534_30950__$1);
var G__30952 = cljs.core.chunk_rest(seq__27534_30950__$1);
var G__30953 = c__4522__auto___30951;
var G__30954 = cljs.core.count(c__4522__auto___30951);
var G__30955 = (0);
seq__27534_30940 = G__30952;
chunk__27535_30941 = G__30953;
count__27536_30942 = G__30954;
i__27537_30943 = G__30955;
continue;
} else {
var arg__14299__auto___30956 = cljs.core.first(seq__27534_30950__$1);
a__14298__auto__.push(arg__14299__auto___30956);

var G__30957 = cljs.core.next(seq__27534_30950__$1);
var G__30958 = null;
var G__30959 = (0);
var G__30960 = (0);
seq__27534_30940 = G__30957;
chunk__27535_30941 = G__30958;
count__27536_30942 = G__30959;
i__27537_30943 = G__30960;
continue;
}
} else {
}
}
break;
}

return React.DOM.text.apply(null,a__14298__auto__);
};
var text = function (var_args){
var args__14297__auto__ = null;
if (arguments.length > 0) {
var G__30961__i = 0, G__30961__a = new Array(arguments.length -  0);
while (G__30961__i < G__30961__a.length) {G__30961__a[G__30961__i] = arguments[G__30961__i + 0]; ++G__30961__i;}
  args__14297__auto__ = new cljs.core.IndexedSeq(G__30961__a,0);
} 
return text__delegate.call(this,args__14297__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__30962){
var args__14297__auto__ = cljs.core.seq(arglist__30962);
return text__delegate(args__14297__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$74,cljs.core.constant$keyword$75,cljs.core.constant$keyword$76,cljs.core.constant$keyword$77,cljs.core.constant$keyword$78,cljs.core.constant$keyword$79,cljs.core.constant$keyword$80,cljs.core.constant$keyword$81,cljs.core.constant$keyword$82,cljs.core.constant$keyword$83,cljs.core.constant$keyword$84,cljs.core.constant$keyword$85,cljs.core.constant$keyword$86,cljs.core.constant$keyword$87,cljs.core.constant$keyword$88,cljs.core.constant$keyword$3,cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91,cljs.core.constant$keyword$92,cljs.core.constant$keyword$93,cljs.core.constant$keyword$94,cljs.core.constant$keyword$95,cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104,cljs.core.constant$keyword$105,cljs.core.constant$keyword$106,cljs.core.constant$keyword$107,cljs.core.constant$keyword$108,cljs.core.constant$keyword$109,cljs.core.constant$keyword$110,cljs.core.constant$keyword$111,cljs.core.constant$keyword$112,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114,cljs.core.constant$keyword$115,cljs.core.constant$keyword$116,cljs.core.constant$keyword$117,cljs.core.constant$keyword$118,cljs.core.constant$keyword$119,cljs.core.constant$keyword$120,cljs.core.constant$keyword$121,cljs.core.constant$keyword$122,cljs.core.constant$keyword$123,cljs.core.constant$keyword$124,cljs.core.constant$keyword$125,cljs.core.constant$keyword$126,cljs.core.constant$keyword$127,cljs.core.constant$keyword$128,cljs.core.constant$keyword$129,cljs.core.constant$keyword$130,cljs.core.constant$keyword$131,cljs.core.constant$keyword$132,cljs.core.constant$keyword$133,cljs.core.constant$keyword$134,cljs.core.constant$keyword$135,cljs.core.constant$keyword$136,cljs.core.constant$keyword$137,cljs.core.constant$keyword$138,cljs.core.constant$keyword$139,cljs.core.constant$keyword$140,cljs.core.constant$keyword$11,cljs.core.constant$keyword$141,cljs.core.constant$keyword$142,cljs.core.constant$keyword$143,cljs.core.constant$keyword$144,cljs.core.constant$keyword$145,cljs.core.constant$keyword$146,cljs.core.constant$keyword$147,cljs.core.constant$keyword$148,cljs.core.constant$keyword$149,cljs.core.constant$keyword$150,cljs.core.constant$keyword$151,cljs.core.constant$keyword$152,cljs.core.constant$keyword$153,cljs.core.constant$keyword$154,cljs.core.constant$keyword$155,cljs.core.constant$keyword$156,cljs.core.constant$keyword$157,cljs.core.constant$keyword$158,cljs.core.constant$keyword$159,cljs.core.constant$keyword$160,cljs.core.constant$keyword$161,cljs.core.constant$keyword$162,cljs.core.constant$keyword$163,cljs.core.constant$keyword$164,cljs.core.constant$keyword$165,cljs.core.constant$keyword$166,cljs.core.constant$keyword$167,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169,cljs.core.constant$keyword$170,cljs.core.constant$keyword$171,cljs.core.constant$keyword$172,cljs.core.constant$keyword$173,cljs.core.constant$keyword$174,cljs.core.constant$keyword$175,cljs.core.constant$keyword$176,cljs.core.constant$keyword$177,cljs.core.constant$keyword$178,cljs.core.constant$keyword$179,cljs.core.constant$keyword$180,cljs.core.constant$keyword$181,cljs.core.constant$keyword$182,cljs.core.constant$keyword$183,cljs.core.constant$keyword$184,cljs.core.constant$keyword$185,cljs.core.constant$keyword$186,cljs.core.constant$keyword$187,cljs.core.constant$keyword$188,cljs.core.constant$keyword$189,cljs.core.constant$keyword$190],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);
