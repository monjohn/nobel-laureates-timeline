// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var req = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Takes an XhrIo object and applies the default-headers to it.
*/
cljs_http.core.apply_default_headers_BANG_ = (function apply_default_headers_BANG_(xhr,headers){
var seq__21121 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__21126 = null;
var count__21127 = (0);
var i__21128 = (0);
while(true){
if((i__21128 < count__21127)){
var h_name = cljs.core._nth.call(null,chunk__21126,i__21128);
var seq__21129_21133 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__21130_21134 = null;
var count__21131_21135 = (0);
var i__21132_21136 = (0);
while(true){
if((i__21132_21136 < count__21131_21135)){
var h_val_21137 = cljs.core._nth.call(null,chunk__21130_21134,i__21132_21136);
xhr.headers.set(h_name,h_val_21137);

var G__21138 = seq__21129_21133;
var G__21139 = chunk__21130_21134;
var G__21140 = count__21131_21135;
var G__21141 = (i__21132_21136 + (1));
seq__21129_21133 = G__21138;
chunk__21130_21134 = G__21139;
count__21131_21135 = G__21140;
i__21132_21136 = G__21141;
continue;
} else {
var temp__4126__auto___21142 = cljs.core.seq.call(null,seq__21129_21133);
if(temp__4126__auto___21142){
var seq__21129_21143__$1 = temp__4126__auto___21142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21129_21143__$1)){
var c__4522__auto___21144 = cljs.core.chunk_first.call(null,seq__21129_21143__$1);
var G__21145 = cljs.core.chunk_rest.call(null,seq__21129_21143__$1);
var G__21146 = c__4522__auto___21144;
var G__21147 = cljs.core.count.call(null,c__4522__auto___21144);
var G__21148 = (0);
seq__21129_21133 = G__21145;
chunk__21130_21134 = G__21146;
count__21131_21135 = G__21147;
i__21132_21136 = G__21148;
continue;
} else {
var h_val_21149 = cljs.core.first.call(null,seq__21129_21143__$1);
xhr.headers.set(h_name,h_val_21149);

var G__21150 = cljs.core.next.call(null,seq__21129_21143__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__21129_21133 = G__21150;
chunk__21130_21134 = G__21151;
count__21131_21135 = G__21152;
i__21132_21136 = G__21153;
continue;
}
} else {
}
}
break;
}

var G__21154 = seq__21121;
var G__21155 = chunk__21126;
var G__21156 = count__21127;
var G__21157 = (i__21128 + (1));
seq__21121 = G__21154;
chunk__21126 = G__21155;
count__21127 = G__21156;
i__21128 = G__21157;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21121);
if(temp__4126__auto__){
var seq__21121__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21121__$1)){
var c__4522__auto__ = cljs.core.chunk_first.call(null,seq__21121__$1);
var G__21158 = cljs.core.chunk_rest.call(null,seq__21121__$1);
var G__21159 = c__4522__auto__;
var G__21160 = cljs.core.count.call(null,c__4522__auto__);
var G__21161 = (0);
seq__21121 = G__21158;
chunk__21126 = G__21159;
count__21127 = G__21160;
i__21128 = G__21161;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__21121__$1);
var seq__21122_21162 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__21123_21163 = null;
var count__21124_21164 = (0);
var i__21125_21165 = (0);
while(true){
if((i__21125_21165 < count__21124_21164)){
var h_val_21166 = cljs.core._nth.call(null,chunk__21123_21163,i__21125_21165);
xhr.headers.set(h_name,h_val_21166);

var G__21167 = seq__21122_21162;
var G__21168 = chunk__21123_21163;
var G__21169 = count__21124_21164;
var G__21170 = (i__21125_21165 + (1));
seq__21122_21162 = G__21167;
chunk__21123_21163 = G__21168;
count__21124_21164 = G__21169;
i__21125_21165 = G__21170;
continue;
} else {
var temp__4126__auto___21171__$1 = cljs.core.seq.call(null,seq__21122_21162);
if(temp__4126__auto___21171__$1){
var seq__21122_21172__$1 = temp__4126__auto___21171__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21122_21172__$1)){
var c__4522__auto___21173 = cljs.core.chunk_first.call(null,seq__21122_21172__$1);
var G__21174 = cljs.core.chunk_rest.call(null,seq__21122_21172__$1);
var G__21175 = c__4522__auto___21173;
var G__21176 = cljs.core.count.call(null,c__4522__auto___21173);
var G__21177 = (0);
seq__21122_21162 = G__21174;
chunk__21123_21163 = G__21175;
count__21124_21164 = G__21176;
i__21125_21165 = G__21177;
continue;
} else {
var h_val_21178 = cljs.core.first.call(null,seq__21122_21172__$1);
xhr.headers.set(h_name,h_val_21178);

var G__21179 = cljs.core.next.call(null,seq__21122_21172__$1);
var G__21180 = null;
var G__21181 = (0);
var G__21182 = (0);
seq__21122_21162 = G__21179;
chunk__21123_21163 = G__21180;
count__21124_21164 = G__21181;
i__21125_21165 = G__21182;
continue;
}
} else {
}
}
break;
}

var G__21183 = cljs.core.next.call(null,seq__21121__$1);
var G__21184 = null;
var G__21185 = (0);
var G__21186 = (0);
seq__21121 = G__21183;
chunk__21126 = G__21184;
count__21127 = G__21185;
i__21128 = G__21186;
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
return xhr.setResponseType((function (){var G__21188 = response_type;
if(cljs.core._EQ_.call(null,null,G__21188)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__21188)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__21188)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__21188)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__21188)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__21188)){
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
cljs_http.core.build_xhr = (function build_xhr(p__21189){
var map__21192 = p__21189;
var map__21192__$1 = ((cljs.core.seq_QMARK_.call(null,map__21192))?cljs.core.apply.call(null,cljs.core.hash_map,map__21192):map__21192);
var request = map__21192__$1;
var response_type = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var default_headers = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__3735__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__21193 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__21193,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__21193,response_type);

G__21193.setTimeoutInterval(timeout);

G__21193.setWithCredentials(send_credentials);

return G__21193;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.xhr = (function xhr(p__21194){
var map__21220 = p__21194;
var map__21220__$1 = ((cljs.core.seq_QMARK_.call(null,map__21220))?cljs.core.apply.call(null,cljs.core.hash_map,map__21220):map__21220);
var request = map__21220__$1;
var cancel = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3735__auto__ = request_method;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(!(cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__6513__auto___21245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___21245,channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___21245,channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_21231){
var state_val_21232 = (state_21231[(1)]);
if((state_val_21232 === (5))){
var inst_21229 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21231__$1,inst_21229);
} else {
if((state_val_21232 === (4))){
var state_21231__$1 = state_21231;
var statearr_21233_21246 = state_21231__$1;
(statearr_21233_21246[(2)] = null);

(statearr_21233_21246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (3))){
var inst_21226 = xhr__$1.abort();
var state_21231__$1 = state_21231;
var statearr_21234_21247 = state_21231__$1;
(statearr_21234_21247[(2)] = inst_21226);

(statearr_21234_21247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (2))){
var inst_21222 = (state_21231[(2)]);
var inst_21223 = xhr__$1.isComplete();
var inst_21224 = cljs.core.not.call(null,inst_21223);
var state_21231__$1 = (function (){var statearr_21235 = state_21231;
(statearr_21235[(7)] = inst_21222);

return statearr_21235;
})();
if(inst_21224){
var statearr_21236_21248 = state_21231__$1;
(statearr_21236_21248[(1)] = (3));

} else {
var statearr_21237_21249 = state_21231__$1;
(statearr_21237_21249[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (1))){
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21231__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__6513__auto___21245,channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__6457__auto__,c__6513__auto___21245,channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_21241 = [null,null,null,null,null,null,null,null];
(statearr_21241[(0)] = state_machine__6458__auto__);

(statearr_21241[(1)] = (1));

return statearr_21241;
});
var state_machine__6458__auto____1 = (function (state_21231){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_21231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e21242){if((e21242 instanceof Object)){
var ex__6461__auto__ = e21242;
var statearr_21243_21250 = state_21231;
(statearr_21243_21250[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21251 = state_21231;
state_21231 = G__21251;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_21231){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_21231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___21245,channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__6515__auto__ = (function (){var statearr_21244 = f__6514__auto__.call(null);
(statearr_21244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___21245);

return statearr_21244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___21245,channel,request_url,method,headers__$1,xhr__$1,map__21220,map__21220__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
* Execute the JSONP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.jsonp = (function jsonp(p__21252){
var map__21268 = p__21252;
var map__21268__$1 = ((cljs.core.seq_QMARK_.call(null,map__21268))?cljs.core.apply.call(null,cljs.core.hash_map,map__21268):map__21268);
var request = map__21268__$1;
var cancel = cljs.core.get.call(null,map__21268__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var callback_name = cljs.core.get.call(null,map__21268__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var timeout = cljs.core.get.call(null,map__21268__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_21283 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout){
return (function success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout){
return (function error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_21283], null));

if(cljs.core.truth_(cancel)){
var c__6513__auto___21284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___21284,req_21283,channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___21284,req_21283,channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout){
return (function (state_21273){
var state_val_21274 = (state_21273[(1)]);
if((state_val_21274 === (2))){
var inst_21270 = (state_21273[(2)]);
var inst_21271 = jsonp__$1.cancel(req_21283);
var state_21273__$1 = (function (){var statearr_21275 = state_21273;
(statearr_21275[(7)] = inst_21270);

return statearr_21275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21273__$1,inst_21271);
} else {
if((state_val_21274 === (1))){
var state_21273__$1 = state_21273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21273__$1,(2),cancel);
} else {
return null;
}
}
});})(c__6513__auto___21284,req_21283,channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__6457__auto__,c__6513__auto___21284,req_21283,channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_21279 = [null,null,null,null,null,null,null,null];
(statearr_21279[(0)] = state_machine__6458__auto__);

(statearr_21279[(1)] = (1));

return statearr_21279;
});
var state_machine__6458__auto____1 = (function (state_21273){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_21273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e21280){if((e21280 instanceof Object)){
var ex__6461__auto__ = e21280;
var statearr_21281_21285 = state_21273;
(statearr_21281_21285[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21286 = state_21273;
state_21273 = G__21286;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_21273){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_21273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___21284,req_21283,channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout))
})();
var state__6515__auto__ = (function (){var statearr_21282 = f__6514__auto__.call(null);
(statearr_21282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___21284);

return statearr_21282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___21284,req_21283,channel,jsonp__$1,map__21268,map__21268__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__21287){
var map__21289 = p__21287;
var map__21289__$1 = ((cljs.core.seq_QMARK_.call(null,map__21289))?cljs.core.apply.call(null,cljs.core.hash_map,map__21289):map__21289);
var request__$1 = map__21289__$1;
var request_method = cljs.core.get.call(null,map__21289__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map