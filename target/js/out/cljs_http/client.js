// Compiled by ClojureScript 0.0-2760 {}
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
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__20781_SHARP_,p2__20780_SHARP_){
var vec__20783 = clojure.string.split.call(null,p2__20780_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__20783,(0),null);
var v = cljs.core.nth.call(null,vec__20783,(1),null);
return cljs.core.assoc.call(null,p1__20781_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__20784_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__20784_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__20785){
var vec__20787 = p__20785;
var k = cljs.core.nth.call(null,vec__20787,(0),null);
var v = cljs.core.nth.call(null,vec__20787,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__20788_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__20788_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3723__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3723__auto__){
var and__3723__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__3723__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3723__auto____$1;
}
} else {
return and__3723__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20789_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20789_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_default_headers = (function() { 
var wrap_default_headers__delegate = function (client,p__20790){
var vec__20792 = p__20790;
var default_headers = cljs.core.nth.call(null,vec__20792,(0),null);
return ((function (vec__20792,default_headers){
return (function (request){
var temp__4124__auto__ = (function (){var or__3735__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var default_headers__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20792,default_headers))
};
var wrap_default_headers = function (client,var_args){
var p__20790 = null;
if (arguments.length > 1) {
var G__20793__i = 0, G__20793__a = new Array(arguments.length -  1);
while (G__20793__i < G__20793__a.length) {G__20793__a[G__20793__i] = arguments[G__20793__i + 1]; ++G__20793__i;}
  p__20790 = new cljs.core.IndexedSeq(G__20793__a,0);
} 
return wrap_default_headers__delegate.call(this,client,p__20790);};
wrap_default_headers.cljs$lang$maxFixedArity = 1;
wrap_default_headers.cljs$lang$applyTo = (function (arglist__20794){
var client = cljs.core.first(arglist__20794);
var p__20790 = cljs.core.rest(arglist__20794);
return wrap_default_headers__delegate(client,p__20790);
});
wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = wrap_default_headers__delegate;
return wrap_default_headers;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__20795){
var vec__20797 = p__20795;
var accept = cljs.core.nth.call(null,vec__20797,(0),null);
return ((function (vec__20797,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3735__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20797,accept))
};
var wrap_accept = function (client,var_args){
var p__20795 = null;
if (arguments.length > 1) {
var G__20798__i = 0, G__20798__a = new Array(arguments.length -  1);
while (G__20798__i < G__20798__a.length) {G__20798__a[G__20798__i] = arguments[G__20798__i + 1]; ++G__20798__i;}
  p__20795 = new cljs.core.IndexedSeq(G__20798__a,0);
} 
return wrap_accept__delegate.call(this,client,p__20795);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__20799){
var client = cljs.core.first(arglist__20799);
var p__20795 = cljs.core.rest(arglist__20799);
return wrap_accept__delegate(client,p__20795);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__20800){
var vec__20802 = p__20800;
var content_type = cljs.core.nth.call(null,vec__20802,(0),null);
return ((function (vec__20802,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3735__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20802,content_type))
};
var wrap_content_type = function (client,var_args){
var p__20800 = null;
if (arguments.length > 1) {
var G__20803__i = 0, G__20803__a = new Array(arguments.length -  1);
while (G__20803__i < G__20803__a.length) {G__20803__a[G__20803__i] = arguments[G__20803__i + 1]; ++G__20803__i;}
  p__20800 = new cljs.core.IndexedSeq(G__20803__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__20800);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__20804){
var client = cljs.core.first(arglist__20804);
var p__20800 = cljs.core.rest(arglist__20804);
return wrap_content_type__delegate(client,p__20800);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__20806 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20806__$1 = ((cljs.core.seq_QMARK_.call(null,map__20806))?cljs.core.apply.call(null,cljs.core.hash_map,map__20806):map__20806);
var encoding_opts = cljs.core.get.call(null,map__20806__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__20806__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__20810 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20810__$1 = ((cljs.core.seq_QMARK_.call(null,map__20810))?cljs.core.apply.call(null,cljs.core.hash_map,map__20810):map__20810);
var decoding_opts = cljs.core.get.call(null,map__20810__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__20810__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__20810,map__20810__$1,decoding_opts,decoding){
return (function (p1__20807_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__20807_SHARP_,decoding,decoding_opts);
});})(map__20810,map__20810__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__20810,map__20810__$1,decoding_opts,decoding,transit_decode){
return (function (p1__20808_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20808_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__20810,map__20810__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20811_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20811_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__20814){
var map__20815 = p__20814;
var map__20815__$1 = ((cljs.core.seq_QMARK_.call(null,map__20815))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815):map__20815);
var req = map__20815__$1;
var query_params = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__20818){
var map__20819 = p__20818;
var map__20819__$1 = ((cljs.core.seq_QMARK_.call(null,map__20819))?cljs.core.apply.call(null,cljs.core.hash_map,map__20819):map__20819);
var request = map__20819__$1;
var request_method = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__3723__auto__ = form_params;
if(cljs.core.truth_(and__3723__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3723__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__20826_20832 = cljs.core.seq.call(null,params);
var chunk__20827_20833 = null;
var count__20828_20834 = (0);
var i__20829_20835 = (0);
while(true){
if((i__20829_20835 < count__20828_20834)){
var vec__20830_20836 = cljs.core._nth.call(null,chunk__20827_20833,i__20829_20835);
var k_20837 = cljs.core.nth.call(null,vec__20830_20836,(0),null);
var v_20838 = cljs.core.nth.call(null,vec__20830_20836,(1),null);
form_data.append(cljs.core.name.call(null,k_20837),v_20838);

var G__20839 = seq__20826_20832;
var G__20840 = chunk__20827_20833;
var G__20841 = count__20828_20834;
var G__20842 = (i__20829_20835 + (1));
seq__20826_20832 = G__20839;
chunk__20827_20833 = G__20840;
count__20828_20834 = G__20841;
i__20829_20835 = G__20842;
continue;
} else {
var temp__4126__auto___20843 = cljs.core.seq.call(null,seq__20826_20832);
if(temp__4126__auto___20843){
var seq__20826_20844__$1 = temp__4126__auto___20843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20826_20844__$1)){
var c__4522__auto___20845 = cljs.core.chunk_first.call(null,seq__20826_20844__$1);
var G__20846 = cljs.core.chunk_rest.call(null,seq__20826_20844__$1);
var G__20847 = c__4522__auto___20845;
var G__20848 = cljs.core.count.call(null,c__4522__auto___20845);
var G__20849 = (0);
seq__20826_20832 = G__20846;
chunk__20827_20833 = G__20847;
count__20828_20834 = G__20848;
i__20829_20835 = G__20849;
continue;
} else {
var vec__20831_20850 = cljs.core.first.call(null,seq__20826_20844__$1);
var k_20851 = cljs.core.nth.call(null,vec__20831_20850,(0),null);
var v_20852 = cljs.core.nth.call(null,vec__20831_20850,(1),null);
form_data.append(cljs.core.name.call(null,k_20851),v_20852);

var G__20853 = cljs.core.next.call(null,seq__20826_20844__$1);
var G__20854 = null;
var G__20855 = (0);
var G__20856 = (0);
seq__20826_20832 = G__20853;
chunk__20827_20833 = G__20854;
count__20828_20834 = G__20855;
i__20829_20835 = G__20856;
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
return (function (p__20859){
var map__20860 = p__20859;
var map__20860__$1 = ((cljs.core.seq_QMARK_.call(null,map__20860))?cljs.core.apply.call(null,cljs.core.hash_map,map__20860):map__20860);
var request = map__20860__$1;
var request_method = cljs.core.get.call(null,map__20860__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__20860__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__3723__auto__ = multipart_params;
if(cljs.core.truth_(and__3723__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3723__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__20861_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__20861_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__20865){
var map__20866 = p__20865;
var map__20866__$1 = ((cljs.core.seq_QMARK_.call(null,map__20866))?cljs.core.apply.call(null,cljs.core.hash_map,map__20866):map__20866);
var req = map__20866__$1;
var query_params = cljs.core.get.call(null,map__20866__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__20866,map__20866__$1,req,query_params){
return (function (p1__20862_SHARP_){
return cljs.core.merge.call(null,p1__20862_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__20866,map__20866__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__20867){
var vec__20869 = p__20867;
var credentials = cljs.core.nth.call(null,vec__20869,(0),null);
return ((function (vec__20869,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3735__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__20869,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__20867 = null;
if (arguments.length > 1) {
var G__20870__i = 0, G__20870__a = new Array(arguments.length -  1);
while (G__20870__i < G__20870__a.length) {G__20870__a[G__20870__i] = arguments[G__20870__i + 1]; ++G__20870__i;}
  p__20867 = new cljs.core.IndexedSeq(G__20870__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__20867);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__20871){
var client = cljs.core.first(arglist__20871);
var p__20867 = cljs.core.rest(arglist__20871);
return wrap_basic_auth__delegate(client,p__20867);
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/request
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__20872){
var vec__20874 = p__20872;
var req = cljs.core.nth.call(null,vec__20874,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__20872 = null;
if (arguments.length > 1) {
var G__20875__i = 0, G__20875__a = new Array(arguments.length -  1);
while (G__20875__i < G__20875__a.length) {G__20875__a[G__20875__i] = arguments[G__20875__i + 1]; ++G__20875__i;}
  p__20872 = new cljs.core.IndexedSeq(G__20875__a,0);
} 
return delete$__delegate.call(this,url,p__20872);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__20876){
var url = cljs.core.first(arglist__20876);
var p__20872 = cljs.core.rest(arglist__20876);
return delete$__delegate(url,p__20872);
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
var get__delegate = function (url,p__20877){
var vec__20879 = p__20877;
var req = cljs.core.nth.call(null,vec__20879,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__20877 = null;
if (arguments.length > 1) {
var G__20880__i = 0, G__20880__a = new Array(arguments.length -  1);
while (G__20880__i < G__20880__a.length) {G__20880__a[G__20880__i] = arguments[G__20880__i + 1]; ++G__20880__i;}
  p__20877 = new cljs.core.IndexedSeq(G__20880__a,0);
} 
return get__delegate.call(this,url,p__20877);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__20881){
var url = cljs.core.first(arglist__20881);
var p__20877 = cljs.core.rest(arglist__20881);
return get__delegate(url,p__20877);
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
var head__delegate = function (url,p__20882){
var vec__20884 = p__20882;
var req = cljs.core.nth.call(null,vec__20884,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__20882 = null;
if (arguments.length > 1) {
var G__20885__i = 0, G__20885__a = new Array(arguments.length -  1);
while (G__20885__i < G__20885__a.length) {G__20885__a[G__20885__i] = arguments[G__20885__i + 1]; ++G__20885__i;}
  p__20882 = new cljs.core.IndexedSeq(G__20885__a,0);
} 
return head__delegate.call(this,url,p__20882);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__20886){
var url = cljs.core.first(arglist__20886);
var p__20882 = cljs.core.rest(arglist__20886);
return head__delegate(url,p__20882);
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
var jsonp__delegate = function (url,p__20887){
var vec__20889 = p__20887;
var req = cljs.core.nth.call(null,vec__20889,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var jsonp = function (url,var_args){
var p__20887 = null;
if (arguments.length > 1) {
var G__20890__i = 0, G__20890__a = new Array(arguments.length -  1);
while (G__20890__i < G__20890__a.length) {G__20890__a[G__20890__i] = arguments[G__20890__i + 1]; ++G__20890__i;}
  p__20887 = new cljs.core.IndexedSeq(G__20890__a,0);
} 
return jsonp__delegate.call(this,url,p__20887);};
jsonp.cljs$lang$maxFixedArity = 1;
jsonp.cljs$lang$applyTo = (function (arglist__20891){
var url = cljs.core.first(arglist__20891);
var p__20887 = cljs.core.rest(arglist__20891);
return jsonp__delegate(url,p__20887);
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
var move__delegate = function (url,p__20892){
var vec__20894 = p__20892;
var req = cljs.core.nth.call(null,vec__20894,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__20892 = null;
if (arguments.length > 1) {
var G__20895__i = 0, G__20895__a = new Array(arguments.length -  1);
while (G__20895__i < G__20895__a.length) {G__20895__a[G__20895__i] = arguments[G__20895__i + 1]; ++G__20895__i;}
  p__20892 = new cljs.core.IndexedSeq(G__20895__a,0);
} 
return move__delegate.call(this,url,p__20892);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__20896){
var url = cljs.core.first(arglist__20896);
var p__20892 = cljs.core.rest(arglist__20896);
return move__delegate(url,p__20892);
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
var options__delegate = function (url,p__20897){
var vec__20899 = p__20897;
var req = cljs.core.nth.call(null,vec__20899,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__20897 = null;
if (arguments.length > 1) {
var G__20900__i = 0, G__20900__a = new Array(arguments.length -  1);
while (G__20900__i < G__20900__a.length) {G__20900__a[G__20900__i] = arguments[G__20900__i + 1]; ++G__20900__i;}
  p__20897 = new cljs.core.IndexedSeq(G__20900__a,0);
} 
return options__delegate.call(this,url,p__20897);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__20901){
var url = cljs.core.first(arglist__20901);
var p__20897 = cljs.core.rest(arglist__20901);
return options__delegate(url,p__20897);
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
var patch__delegate = function (url,p__20902){
var vec__20904 = p__20902;
var req = cljs.core.nth.call(null,vec__20904,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__20902 = null;
if (arguments.length > 1) {
var G__20905__i = 0, G__20905__a = new Array(arguments.length -  1);
while (G__20905__i < G__20905__a.length) {G__20905__a[G__20905__i] = arguments[G__20905__i + 1]; ++G__20905__i;}
  p__20902 = new cljs.core.IndexedSeq(G__20905__a,0);
} 
return patch__delegate.call(this,url,p__20902);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__20906){
var url = cljs.core.first(arglist__20906);
var p__20902 = cljs.core.rest(arglist__20906);
return patch__delegate(url,p__20902);
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
var post__delegate = function (url,p__20907){
var vec__20909 = p__20907;
var req = cljs.core.nth.call(null,vec__20909,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__20907 = null;
if (arguments.length > 1) {
var G__20910__i = 0, G__20910__a = new Array(arguments.length -  1);
while (G__20910__i < G__20910__a.length) {G__20910__a[G__20910__i] = arguments[G__20910__i + 1]; ++G__20910__i;}
  p__20907 = new cljs.core.IndexedSeq(G__20910__a,0);
} 
return post__delegate.call(this,url,p__20907);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__20911){
var url = cljs.core.first(arglist__20911);
var p__20907 = cljs.core.rest(arglist__20911);
return post__delegate(url,p__20907);
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
var put__delegate = function (url,p__20912){
var vec__20914 = p__20912;
var req = cljs.core.nth.call(null,vec__20914,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__20912 = null;
if (arguments.length > 1) {
var G__20915__i = 0, G__20915__a = new Array(arguments.length -  1);
while (G__20915__i < G__20915__a.length) {G__20915__a[G__20915__i] = arguments[G__20915__i + 1]; ++G__20915__i;}
  p__20912 = new cljs.core.IndexedSeq(G__20915__a,0);
} 
return put__delegate.call(this,url,p__20912);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__20916){
var url = cljs.core.first(arglist__20916);
var p__20912 = cljs.core.rest(arglist__20916);
return put__delegate(url,p__20912);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map