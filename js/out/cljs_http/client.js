// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__3723__auto__ = v;
if(cljs.core.truth_(and__3723__auto__)){
return (v > (0));
} else {
return and__3723__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){
if(cljs.core.not(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26173_SHARP_,p2__26172_SHARP_){
var vec__26175 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__26172_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26175,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26173_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not(clojure.string.blank_QMARK_(url))){
var uri = (function (){var G__26177 = url;
return goog.Uri.parse(G__26177);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$213,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$216,uri.getDomain(),cljs.core.constant$keyword$217,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$218,uri.getPath(),cljs.core.constant$keyword$220,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$212,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26178_SHARP_){
return cljs_http.client.encode_val(k,p1__26178_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__26179){
var vec__26181 = p__26179;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26181,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__26182_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__26182_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3723__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$137,request_method);
if(and__3723__auto__){
var and__3723__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(response));
if(and__3723__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3723__auto____$1;
}
} else {
return and__3723__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167], null),decode_fn);
} else {
return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__26185 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$251),cljs.core.constant$keyword$167,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26185) : client.call(null,G__26185));
} else {
var G__26186 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26186) : client.call(null,G__26186));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26187_SHARP_){
return cljs_http.client.decode_body(p1__26187_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26189 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26189) : client.call(null,G__26189));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_default_headers = (function() { 
var wrap_default_headers__delegate = function (client,p__26190){
var vec__26194 = p__26190;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26194,(0),null);
return ((function (vec__26194,default_headers){
return (function (request){
var temp__4124__auto__ = (function (){var or__3735__auto__ = cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var default_headers__$1 = temp__4124__auto__;
var G__26195 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.constant$keyword$229,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26195) : client.call(null,G__26195));
} else {
var G__26196 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26196) : client.call(null,G__26196));
}
});
;})(vec__26194,default_headers))
};
var wrap_default_headers = function (client,var_args){
var p__26190 = null;
if (arguments.length > 1) {
var G__26197__i = 0, G__26197__a = new Array(arguments.length -  1);
while (G__26197__i < G__26197__a.length) {G__26197__a[G__26197__i] = arguments[G__26197__i + 1]; ++G__26197__i;}
  p__26190 = new cljs.core.IndexedSeq(G__26197__a,0);
} 
return wrap_default_headers__delegate.call(this,client,p__26190);};
wrap_default_headers.cljs$lang$maxFixedArity = 1;
wrap_default_headers.cljs$lang$applyTo = (function (arglist__26198){
var client = cljs.core.first(arglist__26198);
var p__26190 = cljs.core.rest(arglist__26198);
return wrap_default_headers__delegate(client,p__26190);
});
wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = wrap_default_headers__delegate;
return wrap_default_headers;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__26199){
var vec__26203 = p__26199;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26203,(0),null);
return ((function (vec__26203,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3735__auto__ = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__26204 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26204) : client.call(null,G__26204));
} else {
var G__26205 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26205) : client.call(null,G__26205));
}
});
;})(vec__26203,accept))
};
var wrap_accept = function (client,var_args){
var p__26199 = null;
if (arguments.length > 1) {
var G__26206__i = 0, G__26206__a = new Array(arguments.length -  1);
while (G__26206__i < G__26206__a.length) {G__26206__a[G__26206__i] = arguments[G__26206__i + 1]; ++G__26206__i;}
  p__26199 = new cljs.core.IndexedSeq(G__26206__a,0);
} 
return wrap_accept__delegate.call(this,client,p__26199);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__26207){
var client = cljs.core.first(arglist__26207);
var p__26199 = cljs.core.rest(arglist__26207);
return wrap_accept__delegate(client,p__26199);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__26208){
var vec__26212 = p__26208;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(0),null);
return ((function (vec__26212,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3735__auto__ = cljs.core.constant$keyword$253.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__26213 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26213) : client.call(null,G__26213));
} else {
var G__26214 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26214) : client.call(null,G__26214));
}
});
;})(vec__26212,content_type))
};
var wrap_content_type = function (client,var_args){
var p__26208 = null;
if (arguments.length > 1) {
var G__26215__i = 0, G__26215__a = new Array(arguments.length -  1);
while (G__26215__i < G__26215__a.length) {G__26215__a[G__26215__i] = arguments[G__26215__i + 1]; ++G__26215__i;}
  p__26208 = new cljs.core.IndexedSeq(G__26215__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__26208);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__26216){
var client = cljs.core.first(arglist__26216);
var p__26208 = cljs.core.rest(arglist__26216);
return wrap_content_type__delegate(client,p__26208);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$254,cljs.core.constant$keyword$258,cljs.core.constant$keyword$255,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$256,cljs.core.constant$keyword$258,cljs.core.constant$keyword$257,cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__26220 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26220__$1 = ((cljs.core.seq_QMARK_(map__26220))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26220):map__26220);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,cljs.core.constant$keyword$255);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,cljs.core.constant$keyword$254);
var G__26221 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$259),cljs.core.constant$keyword$167,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26221) : client.call(null,G__26221));
} else {
var G__26222 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26222) : client.call(null,G__26222));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__26227 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26227__$1 = ((cljs.core.seq_QMARK_(map__26227))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26227):map__26227);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,cljs.core.constant$keyword$257);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,cljs.core.constant$keyword$256);
var transit_decode = ((function (map__26227,map__26227__$1,decoding_opts,decoding){
return (function (p1__26223_SHARP_){
return cljs_http.util.transit_decode(p1__26223_SHARP_,decoding,decoding_opts);
});})(map__26227,map__26227__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__26227,map__26227__$1,decoding_opts,decoding,transit_decode){
return (function (p1__26224_SHARP_){
return cljs_http.client.decode_body(p1__26224_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(request));
});})(map__26227,map__26227__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26228 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26228) : client.call(null,G__26228));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__26231 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$261),cljs.core.constant$keyword$167,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26231) : client.call(null,G__26231));
} else {
var G__26232 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26232) : client.call(null,G__26232));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26233_SHARP_){
return cljs_http.client.decode_body(p1__26233_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26235 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26235) : client.call(null,G__26235));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__26240){
var map__26241 = p__26240;
var map__26241__$1 = ((cljs.core.seq_QMARK_(map__26241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26241):map__26241);
var req = map__26241__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26241__$1,cljs.core.constant$keyword$212);
if(cljs.core.truth_(query_params)){
var G__26242 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$212),cljs.core.constant$keyword$220,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26242) : client.call(null,G__26242));
} else {
var G__26243 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26243) : client.call(null,G__26243));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__26248){
var map__26249 = p__26248;
var map__26249__$1 = ((cljs.core.seq_QMARK_(map__26249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26249):map__26249);
var request = map__26249__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26249__$1,cljs.core.constant$keyword$243);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26249__$1,cljs.core.constant$keyword$262);
if(cljs.core.truth_((function (){var and__3723__auto__ = form_params;
if(cljs.core.truth_(and__3723__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$263,null,cljs.core.constant$keyword$264,null,cljs.core.constant$keyword$265,null,cljs.core.constant$keyword$266,null], null), null).call(null,request_method);
} else {
return and__3723__auto__;
}
})())){
var G__26250 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$262),cljs.core.constant$keyword$167,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26250) : client.call(null,G__26250));
} else {
var G__26251 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26251) : client.call(null,G__26251));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__26258_26264 = cljs.core.seq(params);
var chunk__26259_26265 = null;
var count__26260_26266 = (0);
var i__26261_26267 = (0);
while(true){
if((i__26261_26267 < count__26260_26266)){
var vec__26262_26268 = chunk__26259_26265.cljs$core$IIndexed$_nth$arity$2(null,i__26261_26267);
var k_26269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26262_26268,(0),null);
var v_26270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26262_26268,(1),null);
form_data.append(cljs.core.name(k_26269),v_26270);

var G__26271 = seq__26258_26264;
var G__26272 = chunk__26259_26265;
var G__26273 = count__26260_26266;
var G__26274 = (i__26261_26267 + (1));
seq__26258_26264 = G__26271;
chunk__26259_26265 = G__26272;
count__26260_26266 = G__26273;
i__26261_26267 = G__26274;
continue;
} else {
var temp__4126__auto___26275 = cljs.core.seq(seq__26258_26264);
if(temp__4126__auto___26275){
var seq__26258_26276__$1 = temp__4126__auto___26275;
if(cljs.core.chunked_seq_QMARK_(seq__26258_26276__$1)){
var c__4522__auto___26277 = cljs.core.chunk_first(seq__26258_26276__$1);
var G__26278 = cljs.core.chunk_rest(seq__26258_26276__$1);
var G__26279 = c__4522__auto___26277;
var G__26280 = cljs.core.count(c__4522__auto___26277);
var G__26281 = (0);
seq__26258_26264 = G__26278;
chunk__26259_26265 = G__26279;
count__26260_26266 = G__26280;
i__26261_26267 = G__26281;
continue;
} else {
var vec__26263_26282 = cljs.core.first(seq__26258_26276__$1);
var k_26283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263_26282,(0),null);
var v_26284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263_26282,(1),null);
form_data.append(cljs.core.name(k_26283),v_26284);

var G__26285 = cljs.core.next(seq__26258_26276__$1);
var G__26286 = null;
var G__26287 = (0);
var G__26288 = (0);
seq__26258_26264 = G__26285;
chunk__26259_26265 = G__26286;
count__26260_26266 = G__26287;
i__26261_26267 = G__26288;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function wrap_multipart_params(client){
return (function (p__26293){
var map__26294 = p__26293;
var map__26294__$1 = ((cljs.core.seq_QMARK_(map__26294))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26294):map__26294);
var request = map__26294__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26294__$1,cljs.core.constant$keyword$243);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26294__$1,cljs.core.constant$keyword$267);
if(cljs.core.truth_((function (){var and__3723__auto__ = multipart_params;
if(cljs.core.truth_(and__3723__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$263,null,cljs.core.constant$keyword$264,null,cljs.core.constant$keyword$265,null,cljs.core.constant$keyword$266,null], null), null).call(null,request_method);
} else {
return and__3723__auto__;
}
})())){
var G__26295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$267),cljs.core.constant$keyword$167,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26295) : client.call(null,G__26295));
} else {
var G__26296 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26296) : client.call(null,G__26296));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__26299 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$268),cljs.core.constant$keyword$243,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26299) : client.call(null,G__26299));
} else {
var G__26300 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26300) : client.call(null,G__26300));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__26301_SHARP_){
var G__26303 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26301_SHARP_,cljs.core.constant$keyword$216,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26303) : client.call(null,G__26303));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__26309){
var map__26310 = p__26309;
var map__26310__$1 = ((cljs.core.seq_QMARK_(map__26310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26310):map__26310);
var req = map__26310__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26310__$1,cljs.core.constant$keyword$212);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__26311 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$194),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212], null),((function (spec,temp__4124__auto__,map__26310,map__26310__$1,req,query_params){
return (function (p1__26304_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__26304_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__26310,map__26310__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26311) : client.call(null,G__26311));
} else {
var G__26312 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26312) : client.call(null,G__26312));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26313){
var vec__26317 = p__26313;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26317,(0),null);
return ((function (vec__26317,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3735__auto__ = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__26318 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$269),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26318) : client.call(null,G__26318));
} else {
var G__26319 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26319) : client.call(null,G__26319));
}
});
;})(vec__26317,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26313 = null;
if (arguments.length > 1) {
var G__26320__i = 0, G__26320__a = new Array(arguments.length -  1);
while (G__26320__i < G__26320__a.length) {G__26320__a[G__26320__i] = arguments[G__26320__i + 1]; ++G__26320__i;}
  p__26313 = new cljs.core.IndexedSeq(G__26320__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__26313);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26321){
var client = cljs.core.first(arglist__26321);
var p__26313 = cljs.core.rest(arglist__26321);
return wrap_basic_auth__delegate(client,p__26313);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__26324 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26324) : client.call(null,G__26324));
} else {
var G__26325 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26325) : client.call(null,G__26325));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__26328 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26328) : client.call(null,G__26328));
})(),custom_channel);
} else {
var G__26329 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26329) : client.call(null,G__26329));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/request
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__26330){
var vec__26333 = p__26330;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(0),null);
var G__26334 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$264,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26334) : cljs_http.client.request.call(null,G__26334));
};
var delete$ = function (url,var_args){
var p__26330 = null;
if (arguments.length > 1) {
var G__26335__i = 0, G__26335__a = new Array(arguments.length -  1);
while (G__26335__i < G__26335__a.length) {G__26335__a[G__26335__i] = arguments[G__26335__i + 1]; ++G__26335__i;}
  p__26330 = new cljs.core.IndexedSeq(G__26335__a,0);
} 
return delete$__delegate.call(this,url,p__26330);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26336){
var url = cljs.core.first(arglist__26336);
var p__26330 = cljs.core.rest(arglist__26336);
return delete$__delegate(url,p__26330);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__26337){
var vec__26340 = p__26337;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26340,(0),null);
var G__26341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$244,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26341) : cljs_http.client.request.call(null,G__26341));
};
var get = function (url,var_args){
var p__26337 = null;
if (arguments.length > 1) {
var G__26342__i = 0, G__26342__a = new Array(arguments.length -  1);
while (G__26342__i < G__26342__a.length) {G__26342__a[G__26342__i] = arguments[G__26342__i + 1]; ++G__26342__i;}
  p__26337 = new cljs.core.IndexedSeq(G__26342__a,0);
} 
return get__delegate.call(this,url,p__26337);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26343){
var url = cljs.core.first(arglist__26343);
var p__26337 = cljs.core.rest(arglist__26343);
return get__delegate(url,p__26337);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__26344){
var vec__26347 = p__26344;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26347,(0),null);
var G__26348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$137,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26348) : cljs_http.client.request.call(null,G__26348));
};
var head = function (url,var_args){
var p__26344 = null;
if (arguments.length > 1) {
var G__26349__i = 0, G__26349__a = new Array(arguments.length -  1);
while (G__26349__i < G__26349__a.length) {G__26349__a[G__26349__i] = arguments[G__26349__i + 1]; ++G__26349__i;}
  p__26344 = new cljs.core.IndexedSeq(G__26349__a,0);
} 
return head__delegate.call(this,url,p__26344);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26350){
var url = cljs.core.first(arglist__26350);
var p__26344 = cljs.core.rest(arglist__26350);
return head__delegate(url,p__26344);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.jsonp = (function() { 
var jsonp__delegate = function (url,p__26351){
var vec__26354 = p__26351;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26354,(0),null);
var G__26355 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$223,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26355) : cljs_http.client.request.call(null,G__26355));
};
var jsonp = function (url,var_args){
var p__26351 = null;
if (arguments.length > 1) {
var G__26356__i = 0, G__26356__a = new Array(arguments.length -  1);
while (G__26356__i < G__26356__a.length) {G__26356__a[G__26356__i] = arguments[G__26356__i + 1]; ++G__26356__i;}
  p__26351 = new cljs.core.IndexedSeq(G__26356__a,0);
} 
return jsonp__delegate.call(this,url,p__26351);};
jsonp.cljs$lang$maxFixedArity = 1;
jsonp.cljs$lang$applyTo = (function (arglist__26357){
var url = cljs.core.first(arglist__26357);
var p__26351 = cljs.core.rest(arglist__26357);
return jsonp__delegate(url,p__26351);
});
jsonp.cljs$core$IFn$_invoke$arity$variadic = jsonp__delegate;
return jsonp;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__26358){
var vec__26361 = p__26358;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(0),null);
var G__26362 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$272,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26362) : cljs_http.client.request.call(null,G__26362));
};
var move = function (url,var_args){
var p__26358 = null;
if (arguments.length > 1) {
var G__26363__i = 0, G__26363__a = new Array(arguments.length -  1);
while (G__26363__i < G__26363__a.length) {G__26363__a[G__26363__i] = arguments[G__26363__i + 1]; ++G__26363__i;}
  p__26358 = new cljs.core.IndexedSeq(G__26363__a,0);
} 
return move__delegate.call(this,url,p__26358);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26364){
var url = cljs.core.first(arglist__26364);
var p__26358 = cljs.core.rest(arglist__26364);
return move__delegate(url,p__26358);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__26365){
var vec__26368 = p__26365;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26368,(0),null);
var G__26369 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$273,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26369) : cljs_http.client.request.call(null,G__26369));
};
var options = function (url,var_args){
var p__26365 = null;
if (arguments.length > 1) {
var G__26370__i = 0, G__26370__a = new Array(arguments.length -  1);
while (G__26370__i < G__26370__a.length) {G__26370__a[G__26370__i] = arguments[G__26370__i + 1]; ++G__26370__i;}
  p__26365 = new cljs.core.IndexedSeq(G__26370__a,0);
} 
return options__delegate.call(this,url,p__26365);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26371){
var url = cljs.core.first(arglist__26371);
var p__26365 = cljs.core.rest(arglist__26371);
return options__delegate(url,p__26365);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__26372){
var vec__26375 = p__26372;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26375,(0),null);
var G__26376 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$263,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26376) : cljs_http.client.request.call(null,G__26376));
};
var patch = function (url,var_args){
var p__26372 = null;
if (arguments.length > 1) {
var G__26377__i = 0, G__26377__a = new Array(arguments.length -  1);
while (G__26377__i < G__26377__a.length) {G__26377__a[G__26377__i] = arguments[G__26377__i + 1]; ++G__26377__i;}
  p__26372 = new cljs.core.IndexedSeq(G__26377__a,0);
} 
return patch__delegate.call(this,url,p__26372);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26378){
var url = cljs.core.first(arglist__26378);
var p__26372 = cljs.core.rest(arglist__26378);
return patch__delegate(url,p__26372);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__26379){
var vec__26382 = p__26379;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(0),null);
var G__26383 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$265,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26383) : cljs_http.client.request.call(null,G__26383));
};
var post = function (url,var_args){
var p__26379 = null;
if (arguments.length > 1) {
var G__26384__i = 0, G__26384__a = new Array(arguments.length -  1);
while (G__26384__i < G__26384__a.length) {G__26384__a[G__26384__i] = arguments[G__26384__i + 1]; ++G__26384__i;}
  p__26379 = new cljs.core.IndexedSeq(G__26384__a,0);
} 
return post__delegate.call(this,url,p__26379);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26385){
var url = cljs.core.first(arglist__26385);
var p__26379 = cljs.core.rest(arglist__26385);
return post__delegate(url,p__26379);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__26386){
var vec__26389 = p__26386;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26389,(0),null);
var G__26390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$266,cljs.core.constant$keyword$194,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26390) : cljs_http.client.request.call(null,G__26390));
};
var put = function (url,var_args){
var p__26386 = null;
if (arguments.length > 1) {
var G__26391__i = 0, G__26391__a = new Array(arguments.length -  1);
while (G__26391__i < G__26391__a.length) {G__26391__a[G__26391__i] = arguments[G__26391__i + 1]; ++G__26391__i;}
  p__26386 = new cljs.core.IndexedSeq(G__26391__a,0);
} 
return put__delegate.call(this,url,p__26386);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26392){
var url = cljs.core.first(arglist__26392);
var p__26386 = cljs.core.rest(arglist__26392);
return put__delegate(url,p__26386);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
