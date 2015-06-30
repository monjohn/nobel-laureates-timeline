// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__27026 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27026) : cljs.core.atom.call(null,G__27026));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__27028 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27028) : cljs.core.deref.call(null,G__27028));
})().call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var req = temp__4126__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Takes an XhrIo object and applies the default-headers to it.
*/
cljs_http.core.apply_default_headers_BANG_ = (function apply_default_headers_BANG_(xhr,headers){
var seq__27041 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)));
var chunk__27046 = null;
var count__27047 = (0);
var i__27048 = (0);
while(true){
if((i__27048 < count__27047)){
var h_name = chunk__27046.cljs$core$IIndexed$_nth$arity$2(null,i__27048);
var seq__27049_27053 = cljs.core.seq(cljs.core.vals(headers));
var chunk__27050_27054 = null;
var count__27051_27055 = (0);
var i__27052_27056 = (0);
while(true){
if((i__27052_27056 < count__27051_27055)){
var h_val_27057 = chunk__27050_27054.cljs$core$IIndexed$_nth$arity$2(null,i__27052_27056);
xhr.headers.set(h_name,h_val_27057);

var G__27058 = seq__27049_27053;
var G__27059 = chunk__27050_27054;
var G__27060 = count__27051_27055;
var G__27061 = (i__27052_27056 + (1));
seq__27049_27053 = G__27058;
chunk__27050_27054 = G__27059;
count__27051_27055 = G__27060;
i__27052_27056 = G__27061;
continue;
} else {
var temp__4126__auto___27062 = cljs.core.seq(seq__27049_27053);
if(temp__4126__auto___27062){
var seq__27049_27063__$1 = temp__4126__auto___27062;
if(cljs.core.chunked_seq_QMARK_(seq__27049_27063__$1)){
var c__4522__auto___27064 = cljs.core.chunk_first(seq__27049_27063__$1);
var G__27065 = cljs.core.chunk_rest(seq__27049_27063__$1);
var G__27066 = c__4522__auto___27064;
var G__27067 = cljs.core.count(c__4522__auto___27064);
var G__27068 = (0);
seq__27049_27053 = G__27065;
chunk__27050_27054 = G__27066;
count__27051_27055 = G__27067;
i__27052_27056 = G__27068;
continue;
} else {
var h_val_27069 = cljs.core.first(seq__27049_27063__$1);
xhr.headers.set(h_name,h_val_27069);

var G__27070 = cljs.core.next(seq__27049_27063__$1);
var G__27071 = null;
var G__27072 = (0);
var G__27073 = (0);
seq__27049_27053 = G__27070;
chunk__27050_27054 = G__27071;
count__27051_27055 = G__27072;
i__27052_27056 = G__27073;
continue;
}
} else {
}
}
break;
}

var G__27074 = seq__27041;
var G__27075 = chunk__27046;
var G__27076 = count__27047;
var G__27077 = (i__27048 + (1));
seq__27041 = G__27074;
chunk__27046 = G__27075;
count__27047 = G__27076;
i__27048 = G__27077;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27041);
if(temp__4126__auto__){
var seq__27041__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27041__$1)){
var c__4522__auto__ = cljs.core.chunk_first(seq__27041__$1);
var G__27078 = cljs.core.chunk_rest(seq__27041__$1);
var G__27079 = c__4522__auto__;
var G__27080 = cljs.core.count(c__4522__auto__);
var G__27081 = (0);
seq__27041 = G__27078;
chunk__27046 = G__27079;
count__27047 = G__27080;
i__27048 = G__27081;
continue;
} else {
var h_name = cljs.core.first(seq__27041__$1);
var seq__27042_27082 = cljs.core.seq(cljs.core.vals(headers));
var chunk__27043_27083 = null;
var count__27044_27084 = (0);
var i__27045_27085 = (0);
while(true){
if((i__27045_27085 < count__27044_27084)){
var h_val_27086 = chunk__27043_27083.cljs$core$IIndexed$_nth$arity$2(null,i__27045_27085);
xhr.headers.set(h_name,h_val_27086);

var G__27087 = seq__27042_27082;
var G__27088 = chunk__27043_27083;
var G__27089 = count__27044_27084;
var G__27090 = (i__27045_27085 + (1));
seq__27042_27082 = G__27087;
chunk__27043_27083 = G__27088;
count__27044_27084 = G__27089;
i__27045_27085 = G__27090;
continue;
} else {
var temp__4126__auto___27091__$1 = cljs.core.seq(seq__27042_27082);
if(temp__4126__auto___27091__$1){
var seq__27042_27092__$1 = temp__4126__auto___27091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27042_27092__$1)){
var c__4522__auto___27093 = cljs.core.chunk_first(seq__27042_27092__$1);
var G__27094 = cljs.core.chunk_rest(seq__27042_27092__$1);
var G__27095 = c__4522__auto___27093;
var G__27096 = cljs.core.count(c__4522__auto___27093);
var G__27097 = (0);
seq__27042_27082 = G__27094;
chunk__27043_27083 = G__27095;
count__27044_27084 = G__27096;
i__27045_27085 = G__27097;
continue;
} else {
var h_val_27098 = cljs.core.first(seq__27042_27092__$1);
xhr.headers.set(h_name,h_val_27098);

var G__27099 = cljs.core.next(seq__27042_27092__$1);
var G__27100 = null;
var G__27101 = (0);
var G__27102 = (0);
seq__27042_27082 = G__27099;
chunk__27043_27083 = G__27100;
count__27044_27084 = G__27101;
i__27045_27085 = G__27102;
continue;
}
} else {
}
}
break;
}

var G__27103 = cljs.core.next(seq__27041__$1);
var G__27104 = null;
var G__27105 = (0);
var G__27106 = (0);
seq__27041 = G__27103;
chunk__27046 = G__27104;
count__27047 = G__27105;
i__27048 = G__27106;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Takes an XhrIo object and sets response-type if not nil.
*/
cljs_http.core.apply_response_type_BANG_ = (function apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27108 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__27108)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,G__27108)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$186,G__27108)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$225,G__27108)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$226,G__27108)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$227,G__27108)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
* Builds an XhrIo object from the request parameters.
*/
cljs_http.core.build_xhr = (function build_xhr(p__27109){
var map__27112 = p__27109;
var map__27112__$1 = ((cljs.core.seq_QMARK_(map__27112))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27112):map__27112);
var request = map__27112__$1;
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,cljs.core.constant$keyword$228);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,cljs.core.constant$keyword$229);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,cljs.core.constant$keyword$230);
var timeout = (function (){var or__3735__auto__ = cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27113 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__27113,default_headers);

cljs_http.core.apply_response_type_BANG_(G__27113,response_type);

G__27113.setTimeoutInterval(timeout);

G__27113.setWithCredentials(send_credentials);

return G__27113;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.constant$keyword$232,cljs.core.constant$keyword$233,cljs.core.constant$keyword$234,cljs.core.constant$keyword$235,cljs.core.constant$keyword$236,cljs.core.constant$keyword$237,cljs.core.constant$keyword$238,cljs.core.constant$keyword$239,cljs.core.constant$keyword$240,cljs.core.constant$keyword$231]);
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.xhr = (function xhr(p__27114){
var map__27141 = p__27114;
var map__27141__$1 = ((cljs.core.seq_QMARK_(map__27141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27141):map__27141);
var request = map__27141__$1;
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27141__$1,cljs.core.constant$keyword$241);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27141__$1,cljs.core.constant$keyword$230);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27141__$1,cljs.core.constant$keyword$167);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27141__$1,cljs.core.constant$keyword$242);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27141__$1,cljs.core.constant$keyword$243);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__3735__auto__ = request_method;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return cljs.core.constant$keyword$244;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$245,target.getStatus(),cljs.core.constant$keyword$246,target.isSuccess(),cljs.core.constant$keyword$167,target.getResponse(),cljs.core.constant$keyword$242,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.constant$keyword$248,(function (){var G__27142 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__27142) : cljs_http.core.error_kw.call(null,G__27142));
})(),cljs.core.constant$keyword$249,target.getLastError()], null);
if(!(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11164__auto___27167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___27167,channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___27167,channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_27153){
var state_val_27154 = (state_27153[(1)]);
if((state_val_27154 === (5))){
var inst_27151 = (state_27153[(2)]);
var state_27153__$1 = state_27153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27153__$1,inst_27151);
} else {
if((state_val_27154 === (4))){
var state_27153__$1 = state_27153;
var statearr_27155_27168 = state_27153__$1;
(statearr_27155_27168[(2)] = null);

(statearr_27155_27168[(1)] = (5));


return cljs.core.constant$keyword$31;
} else {
if((state_val_27154 === (3))){
var inst_27148 = xhr__$1.abort();
var state_27153__$1 = state_27153;
var statearr_27156_27169 = state_27153__$1;
(statearr_27156_27169[(2)] = inst_27148);

(statearr_27156_27169[(1)] = (5));


return cljs.core.constant$keyword$31;
} else {
if((state_val_27154 === (2))){
var inst_27144 = (state_27153[(2)]);
var inst_27145 = xhr__$1.isComplete();
var inst_27146 = cljs.core.not(inst_27145);
var state_27153__$1 = (function (){var statearr_27157 = state_27153;
(statearr_27157[(7)] = inst_27144);

return statearr_27157;
})();
if(inst_27146){
var statearr_27158_27170 = state_27153__$1;
(statearr_27158_27170[(1)] = (3));

} else {
var statearr_27159_27171 = state_27153__$1;
(statearr_27159_27171[(1)] = (4));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_27154 === (1))){
var state_27153__$1 = state_27153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27153__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__11164__auto___27167,channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__11084__auto__,c__11164__auto___27167,channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_27163 = [null,null,null,null,null,null,null,null];
(statearr_27163[(0)] = state_machine__11085__auto__);

(statearr_27163[(1)] = (1));

return statearr_27163;
});
var state_machine__11085__auto____1 = (function (state_27153){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_27153);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e27164){if((e27164 instanceof Object)){
var ex__11088__auto__ = e27164;
var statearr_27165_27172 = state_27153;
(statearr_27165_27172[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27153);

return cljs.core.constant$keyword$31;
} else {
throw e27164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__27173 = state_27153;
state_27153 = G__27173;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_27153){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_27153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___27167,channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__11166__auto__ = (function (){var statearr_27166 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_27166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___27167);

return statearr_27166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___27167,channel,request_url,method,headers__$1,xhr__$1,map__27141,map__27141__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
* Execute the JSONP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.jsonp = (function jsonp(p__27174){
var map__27190 = p__27174;
var map__27190__$1 = ((cljs.core.seq_QMARK_(map__27190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27190):map__27190);
var request = map__27190__$1;
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,cljs.core.constant$keyword$241);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,cljs.core.constant$keyword$250);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,cljs.core.constant$keyword$231);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_27205 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout){
return (function success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$245,(200),cljs.core.constant$keyword$246,true,cljs.core.constant$keyword$167,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.constant$keyword$16,true], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout){
return (function error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,jsonp__$1,cljs.core.constant$keyword$224,req_27205], null));

if(cljs.core.truth_(cancel)){
var c__11164__auto___27206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___27206,req_27205,channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___27206,req_27205,channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout){
return (function (state_27195){
var state_val_27196 = (state_27195[(1)]);
if((state_val_27196 === (2))){
var inst_27192 = (state_27195[(2)]);
var inst_27193 = jsonp__$1.cancel(req_27205);
var state_27195__$1 = (function (){var statearr_27197 = state_27195;
(statearr_27197[(7)] = inst_27192);

return statearr_27197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27195__$1,inst_27193);
} else {
if((state_val_27196 === (1))){
var state_27195__$1 = state_27195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27195__$1,(2),cancel);
} else {
return null;
}
}
});})(c__11164__auto___27206,req_27205,channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__11084__auto__,c__11164__auto___27206,req_27205,channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_27201 = [null,null,null,null,null,null,null,null];
(statearr_27201[(0)] = state_machine__11085__auto__);

(statearr_27201[(1)] = (1));

return statearr_27201;
});
var state_machine__11085__auto____1 = (function (state_27195){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_27195);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e27202){if((e27202 instanceof Object)){
var ex__11088__auto__ = e27202;
var statearr_27203_27207 = state_27195;
(statearr_27203_27207[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27195);

return cljs.core.constant$keyword$31;
} else {
throw e27202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__27208 = state_27195;
state_27195 = G__27208;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_27195){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_27195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___27206,req_27205,channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout))
})();
var state__11166__auto__ = (function (){var statearr_27204 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_27204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___27206);

return statearr_27204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___27206,req_27205,channel,jsonp__$1,map__27190,map__27190__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__27209){
var map__27211 = p__27209;
var map__27211__$1 = ((cljs.core.seq_QMARK_(map__27211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27211):map__27211);
var request__$1 = map__27211__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,cljs.core.constant$keyword$243);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.constant$keyword$223)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
