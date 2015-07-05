// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t17568 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17568 = (function (f,fn_handler,meta17569){
this.f = f;
this.fn_handler = fn_handler;
this.meta17569 = meta17569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17568.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17570){
var self__ = this;
var _17570__$1 = this;
return self__.meta17569;
});

cljs.core.async.t17568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17570,meta17569__$1){
var self__ = this;
var _17570__$1 = this;
return (new cljs.core.async.t17568(self__.f,self__.fn_handler,meta17569__$1));
});

cljs.core.async.t17568.cljs$lang$type = true;

cljs.core.async.t17568.cljs$lang$ctorStr = "cljs.core.async/t17568";

cljs.core.async.t17568.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t17568");
});

cljs.core.async.__GT_t17568 = (function __GT_t17568(f__$1,fn_handler__$1,meta17569){
return (new cljs.core.async.t17568(f__$1,fn_handler__$1,meta17569));
});

}

return (new cljs.core.async.t17568(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__17572 = buff;
if(G__17572){
var bit__4416__auto__ = null;
if(cljs.core.truth_((function (){var or__3735__auto__ = bit__4416__auto__;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return G__17572.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17572.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17572);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17572);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17573 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17573);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17573,ret){
return (function (){
return fn1.call(null,val_17573);
});})(val_17573,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4622__auto___17574 = n;
var x_17575 = (0);
while(true){
if((x_17575 < n__4622__auto___17574)){
(a[x_17575] = (0));

var G__17576 = (x_17575 + (1));
x_17575 = G__17576;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17577 = (i + (1));
i = G__17577;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17581 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17581 = (function (flag,alt_flag,meta17582){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17582 = meta17582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17583){
var self__ = this;
var _17583__$1 = this;
return self__.meta17582;
});})(flag))
;

cljs.core.async.t17581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17583,meta17582__$1){
var self__ = this;
var _17583__$1 = this;
return (new cljs.core.async.t17581(self__.flag,self__.alt_flag,meta17582__$1));
});})(flag))
;

cljs.core.async.t17581.cljs$lang$type = true;

cljs.core.async.t17581.cljs$lang$ctorStr = "cljs.core.async/t17581";

cljs.core.async.t17581.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t17581");
});})(flag))
;

cljs.core.async.__GT_t17581 = ((function (flag){
return (function __GT_t17581(flag__$1,alt_flag__$1,meta17582){
return (new cljs.core.async.t17581(flag__$1,alt_flag__$1,meta17582));
});})(flag))
;

}

return (new cljs.core.async.t17581(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17587 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17587 = (function (cb,flag,alt_handler,meta17588){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17588 = meta17588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17587.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17589){
var self__ = this;
var _17589__$1 = this;
return self__.meta17588;
});

cljs.core.async.t17587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17589,meta17588__$1){
var self__ = this;
var _17589__$1 = this;
return (new cljs.core.async.t17587(self__.cb,self__.flag,self__.alt_handler,meta17588__$1));
});

cljs.core.async.t17587.cljs$lang$type = true;

cljs.core.async.t17587.cljs$lang$ctorStr = "cljs.core.async/t17587";

cljs.core.async.t17587.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t17587");
});

cljs.core.async.__GT_t17587 = (function __GT_t17587(cb__$1,flag__$1,alt_handler__$1,meta17588){
return (new cljs.core.async.t17587(cb__$1,flag__$1,alt_handler__$1,meta17588));
});

}

return (new cljs.core.async.t17587(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17590_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17590_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17591_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3735__auto__ = wport;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17592 = (i + (1));
i = G__17592;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3735__auto__ = ret;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3723__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3723__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3723__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17593){
var map__17595 = p__17593;
var map__17595__$1 = ((cljs.core.seq_QMARK_.call(null,map__17595))?cljs.core.apply.call(null,cljs.core.hash_map,map__17595):map__17595);
var opts = map__17595__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17593 = null;
if (arguments.length > 1) {
var G__17596__i = 0, G__17596__a = new Array(arguments.length -  1);
while (G__17596__i < G__17596__a.length) {G__17596__a[G__17596__i] = arguments[G__17596__i + 1]; ++G__17596__i;}
  p__17593 = new cljs.core.IndexedSeq(G__17596__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17593);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17597){
var ports = cljs.core.first(arglist__17597);
var p__17593 = cljs.core.rest(arglist__17597);
return alts_BANG___delegate(ports,p__17593);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6513__auto___17692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___17692){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___17692){
return (function (state_17668){
var state_val_17669 = (state_17668[(1)]);
if((state_val_17669 === (7))){
var inst_17664 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17670_17693 = state_17668__$1;
(statearr_17670_17693[(2)] = inst_17664);

(statearr_17670_17693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (1))){
var state_17668__$1 = state_17668;
var statearr_17671_17694 = state_17668__$1;
(statearr_17671_17694[(2)] = null);

(statearr_17671_17694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (4))){
var inst_17647 = (state_17668[(7)]);
var inst_17647__$1 = (state_17668[(2)]);
var inst_17648 = (inst_17647__$1 == null);
var state_17668__$1 = (function (){var statearr_17672 = state_17668;
(statearr_17672[(7)] = inst_17647__$1);

return statearr_17672;
})();
if(cljs.core.truth_(inst_17648)){
var statearr_17673_17695 = state_17668__$1;
(statearr_17673_17695[(1)] = (5));

} else {
var statearr_17674_17696 = state_17668__$1;
(statearr_17674_17696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (13))){
var state_17668__$1 = state_17668;
var statearr_17675_17697 = state_17668__$1;
(statearr_17675_17697[(2)] = null);

(statearr_17675_17697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (6))){
var inst_17647 = (state_17668[(7)]);
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17668__$1,(11),to,inst_17647);
} else {
if((state_val_17669 === (3))){
var inst_17666 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17668__$1,inst_17666);
} else {
if((state_val_17669 === (12))){
var state_17668__$1 = state_17668;
var statearr_17676_17698 = state_17668__$1;
(statearr_17676_17698[(2)] = null);

(statearr_17676_17698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (2))){
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17668__$1,(4),from);
} else {
if((state_val_17669 === (11))){
var inst_17657 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17657)){
var statearr_17677_17699 = state_17668__$1;
(statearr_17677_17699[(1)] = (12));

} else {
var statearr_17678_17700 = state_17668__$1;
(statearr_17678_17700[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (9))){
var state_17668__$1 = state_17668;
var statearr_17679_17701 = state_17668__$1;
(statearr_17679_17701[(2)] = null);

(statearr_17679_17701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (5))){
var state_17668__$1 = state_17668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17680_17702 = state_17668__$1;
(statearr_17680_17702[(1)] = (8));

} else {
var statearr_17681_17703 = state_17668__$1;
(statearr_17681_17703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (14))){
var inst_17662 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17682_17704 = state_17668__$1;
(statearr_17682_17704[(2)] = inst_17662);

(statearr_17682_17704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (10))){
var inst_17654 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17683_17705 = state_17668__$1;
(statearr_17683_17705[(2)] = inst_17654);

(statearr_17683_17705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (8))){
var inst_17651 = cljs.core.async.close_BANG_.call(null,to);
var state_17668__$1 = state_17668;
var statearr_17684_17706 = state_17668__$1;
(statearr_17684_17706[(2)] = inst_17651);

(statearr_17684_17706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___17692))
;
return ((function (switch__6457__auto__,c__6513__auto___17692){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17688 = [null,null,null,null,null,null,null,null];
(statearr_17688[(0)] = state_machine__6458__auto__);

(statearr_17688[(1)] = (1));

return statearr_17688;
});
var state_machine__6458__auto____1 = (function (state_17668){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17689){if((e17689 instanceof Object)){
var ex__6461__auto__ = e17689;
var statearr_17690_17707 = state_17668;
(statearr_17690_17707[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17708 = state_17668;
state_17668 = G__17708;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17668){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___17692))
})();
var state__6515__auto__ = (function (){var statearr_17691 = f__6514__auto__.call(null);
(statearr_17691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___17692);

return statearr_17691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___17692))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17892){
var vec__17893 = p__17892;
var v = cljs.core.nth.call(null,vec__17893,(0),null);
var p = cljs.core.nth.call(null,vec__17893,(1),null);
var job = vec__17893;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6513__auto___18075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___18075,res,vec__17893,v,p,job,jobs,results){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___18075,res,vec__17893,v,p,job,jobs,results){
return (function (state_17898){
var state_val_17899 = (state_17898[(1)]);
if((state_val_17899 === (2))){
var inst_17895 = (state_17898[(2)]);
var inst_17896 = cljs.core.async.close_BANG_.call(null,res);
var state_17898__$1 = (function (){var statearr_17900 = state_17898;
(statearr_17900[(7)] = inst_17895);

return statearr_17900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17898__$1,inst_17896);
} else {
if((state_val_17899 === (1))){
var state_17898__$1 = state_17898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17898__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6513__auto___18075,res,vec__17893,v,p,job,jobs,results))
;
return ((function (switch__6457__auto__,c__6513__auto___18075,res,vec__17893,v,p,job,jobs,results){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17904 = [null,null,null,null,null,null,null,null];
(statearr_17904[(0)] = state_machine__6458__auto__);

(statearr_17904[(1)] = (1));

return statearr_17904;
});
var state_machine__6458__auto____1 = (function (state_17898){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17905){if((e17905 instanceof Object)){
var ex__6461__auto__ = e17905;
var statearr_17906_18076 = state_17898;
(statearr_17906_18076[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18077 = state_17898;
state_17898 = G__18077;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17898){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___18075,res,vec__17893,v,p,job,jobs,results))
})();
var state__6515__auto__ = (function (){var statearr_17907 = f__6514__auto__.call(null);
(statearr_17907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___18075);

return statearr_17907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___18075,res,vec__17893,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17908){
var vec__17909 = p__17908;
var v = cljs.core.nth.call(null,vec__17909,(0),null);
var p = cljs.core.nth.call(null,vec__17909,(1),null);
var job = vec__17909;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4622__auto___18078 = n;
var __18079 = (0);
while(true){
if((__18079 < n__4622__auto___18078)){
var G__17910_18080 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17910_18080) {
case "async":
var c__6513__auto___18082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18079,c__6513__auto___18082,G__17910_18080,n__4622__auto___18078,jobs,results,process,async){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (__18079,c__6513__auto___18082,G__17910_18080,n__4622__auto___18078,jobs,results,process,async){
return (function (state_17923){
var state_val_17924 = (state_17923[(1)]);
if((state_val_17924 === (7))){
var inst_17919 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
var statearr_17925_18083 = state_17923__$1;
(statearr_17925_18083[(2)] = inst_17919);

(statearr_17925_18083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (6))){
var state_17923__$1 = state_17923;
var statearr_17926_18084 = state_17923__$1;
(statearr_17926_18084[(2)] = null);

(statearr_17926_18084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (5))){
var state_17923__$1 = state_17923;
var statearr_17927_18085 = state_17923__$1;
(statearr_17927_18085[(2)] = null);

(statearr_17927_18085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (4))){
var inst_17913 = (state_17923[(2)]);
var inst_17914 = async.call(null,inst_17913);
var state_17923__$1 = state_17923;
if(cljs.core.truth_(inst_17914)){
var statearr_17928_18086 = state_17923__$1;
(statearr_17928_18086[(1)] = (5));

} else {
var statearr_17929_18087 = state_17923__$1;
(statearr_17929_18087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (3))){
var inst_17921 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17923__$1,inst_17921);
} else {
if((state_val_17924 === (2))){
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17923__$1,(4),jobs);
} else {
if((state_val_17924 === (1))){
var state_17923__$1 = state_17923;
var statearr_17930_18088 = state_17923__$1;
(statearr_17930_18088[(2)] = null);

(statearr_17930_18088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18079,c__6513__auto___18082,G__17910_18080,n__4622__auto___18078,jobs,results,process,async))
;
return ((function (__18079,switch__6457__auto__,c__6513__auto___18082,G__17910_18080,n__4622__auto___18078,jobs,results,process,async){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17934 = [null,null,null,null,null,null,null];
(statearr_17934[(0)] = state_machine__6458__auto__);

(statearr_17934[(1)] = (1));

return statearr_17934;
});
var state_machine__6458__auto____1 = (function (state_17923){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17935){if((e17935 instanceof Object)){
var ex__6461__auto__ = e17935;
var statearr_17936_18089 = state_17923;
(statearr_17936_18089[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18090 = state_17923;
state_17923 = G__18090;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17923){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(__18079,switch__6457__auto__,c__6513__auto___18082,G__17910_18080,n__4622__auto___18078,jobs,results,process,async))
})();
var state__6515__auto__ = (function (){var statearr_17937 = f__6514__auto__.call(null);
(statearr_17937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___18082);

return statearr_17937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(__18079,c__6513__auto___18082,G__17910_18080,n__4622__auto___18078,jobs,results,process,async))
);


break;
case "compute":
var c__6513__auto___18091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18079,c__6513__auto___18091,G__17910_18080,n__4622__auto___18078,jobs,results,process,async){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (__18079,c__6513__auto___18091,G__17910_18080,n__4622__auto___18078,jobs,results,process,async){
return (function (state_17950){
var state_val_17951 = (state_17950[(1)]);
if((state_val_17951 === (7))){
var inst_17946 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17952_18092 = state_17950__$1;
(statearr_17952_18092[(2)] = inst_17946);

(statearr_17952_18092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (6))){
var state_17950__$1 = state_17950;
var statearr_17953_18093 = state_17950__$1;
(statearr_17953_18093[(2)] = null);

(statearr_17953_18093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (5))){
var state_17950__$1 = state_17950;
var statearr_17954_18094 = state_17950__$1;
(statearr_17954_18094[(2)] = null);

(statearr_17954_18094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (4))){
var inst_17940 = (state_17950[(2)]);
var inst_17941 = process.call(null,inst_17940);
var state_17950__$1 = state_17950;
if(cljs.core.truth_(inst_17941)){
var statearr_17955_18095 = state_17950__$1;
(statearr_17955_18095[(1)] = (5));

} else {
var statearr_17956_18096 = state_17950__$1;
(statearr_17956_18096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (3))){
var inst_17948 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17950__$1,inst_17948);
} else {
if((state_val_17951 === (2))){
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17950__$1,(4),jobs);
} else {
if((state_val_17951 === (1))){
var state_17950__$1 = state_17950;
var statearr_17957_18097 = state_17950__$1;
(statearr_17957_18097[(2)] = null);

(statearr_17957_18097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18079,c__6513__auto___18091,G__17910_18080,n__4622__auto___18078,jobs,results,process,async))
;
return ((function (__18079,switch__6457__auto__,c__6513__auto___18091,G__17910_18080,n__4622__auto___18078,jobs,results,process,async){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null];
(statearr_17961[(0)] = state_machine__6458__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var state_machine__6458__auto____1 = (function (state_17950){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17962){if((e17962 instanceof Object)){
var ex__6461__auto__ = e17962;
var statearr_17963_18098 = state_17950;
(statearr_17963_18098[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18099 = state_17950;
state_17950 = G__18099;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17950){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(__18079,switch__6457__auto__,c__6513__auto___18091,G__17910_18080,n__4622__auto___18078,jobs,results,process,async))
})();
var state__6515__auto__ = (function (){var statearr_17964 = f__6514__auto__.call(null);
(statearr_17964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___18091);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(__18079,c__6513__auto___18091,G__17910_18080,n__4622__auto___18078,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18100 = (__18079 + (1));
__18079 = G__18100;
continue;
} else {
}
break;
}

var c__6513__auto___18101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___18101,jobs,results,process,async){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___18101,jobs,results,process,async){
return (function (state_17986){
var state_val_17987 = (state_17986[(1)]);
if((state_val_17987 === (9))){
var inst_17979 = (state_17986[(2)]);
var state_17986__$1 = (function (){var statearr_17988 = state_17986;
(statearr_17988[(7)] = inst_17979);

return statearr_17988;
})();
var statearr_17989_18102 = state_17986__$1;
(statearr_17989_18102[(2)] = null);

(statearr_17989_18102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (8))){
var inst_17972 = (state_17986[(8)]);
var inst_17977 = (state_17986[(2)]);
var state_17986__$1 = (function (){var statearr_17990 = state_17986;
(statearr_17990[(9)] = inst_17977);

return statearr_17990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17986__$1,(9),results,inst_17972);
} else {
if((state_val_17987 === (7))){
var inst_17982 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_17991_18103 = state_17986__$1;
(statearr_17991_18103[(2)] = inst_17982);

(statearr_17991_18103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (6))){
var inst_17967 = (state_17986[(10)]);
var inst_17972 = (state_17986[(8)]);
var inst_17972__$1 = cljs.core.async.chan.call(null,(1));
var inst_17973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17974 = [inst_17967,inst_17972__$1];
var inst_17975 = (new cljs.core.PersistentVector(null,2,(5),inst_17973,inst_17974,null));
var state_17986__$1 = (function (){var statearr_17992 = state_17986;
(statearr_17992[(8)] = inst_17972__$1);

return statearr_17992;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17986__$1,(8),jobs,inst_17975);
} else {
if((state_val_17987 === (5))){
var inst_17970 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17986__$1 = state_17986;
var statearr_17993_18104 = state_17986__$1;
(statearr_17993_18104[(2)] = inst_17970);

(statearr_17993_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (4))){
var inst_17967 = (state_17986[(10)]);
var inst_17967__$1 = (state_17986[(2)]);
var inst_17968 = (inst_17967__$1 == null);
var state_17986__$1 = (function (){var statearr_17994 = state_17986;
(statearr_17994[(10)] = inst_17967__$1);

return statearr_17994;
})();
if(cljs.core.truth_(inst_17968)){
var statearr_17995_18105 = state_17986__$1;
(statearr_17995_18105[(1)] = (5));

} else {
var statearr_17996_18106 = state_17986__$1;
(statearr_17996_18106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (3))){
var inst_17984 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17986__$1,inst_17984);
} else {
if((state_val_17987 === (2))){
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17986__$1,(4),from);
} else {
if((state_val_17987 === (1))){
var state_17986__$1 = state_17986;
var statearr_17997_18107 = state_17986__$1;
(statearr_17997_18107[(2)] = null);

(statearr_17997_18107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___18101,jobs,results,process,async))
;
return ((function (switch__6457__auto__,c__6513__auto___18101,jobs,results,process,async){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_18001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18001[(0)] = state_machine__6458__auto__);

(statearr_18001[(1)] = (1));

return statearr_18001;
});
var state_machine__6458__auto____1 = (function (state_17986){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e18002){if((e18002 instanceof Object)){
var ex__6461__auto__ = e18002;
var statearr_18003_18108 = state_17986;
(statearr_18003_18108[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18109 = state_17986;
state_17986 = G__18109;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17986){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___18101,jobs,results,process,async))
})();
var state__6515__auto__ = (function (){var statearr_18004 = f__6514__auto__.call(null);
(statearr_18004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___18101);

return statearr_18004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___18101,jobs,results,process,async))
);


var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__,jobs,results,process,async){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__,jobs,results,process,async){
return (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18044_18110 = state_18042__$1;
(statearr_18044_18110[(2)] = inst_18038);

(statearr_18044_18110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (20))){
var state_18042__$1 = state_18042;
var statearr_18045_18111 = state_18042__$1;
(statearr_18045_18111[(2)] = null);

(statearr_18045_18111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (1))){
var state_18042__$1 = state_18042;
var statearr_18046_18112 = state_18042__$1;
(statearr_18046_18112[(2)] = null);

(statearr_18046_18112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var inst_18007 = (state_18042[(7)]);
var inst_18007__$1 = (state_18042[(2)]);
var inst_18008 = (inst_18007__$1 == null);
var state_18042__$1 = (function (){var statearr_18047 = state_18042;
(statearr_18047[(7)] = inst_18007__$1);

return statearr_18047;
})();
if(cljs.core.truth_(inst_18008)){
var statearr_18048_18113 = state_18042__$1;
(statearr_18048_18113[(1)] = (5));

} else {
var statearr_18049_18114 = state_18042__$1;
(statearr_18049_18114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (15))){
var inst_18020 = (state_18042[(8)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18042__$1,(18),to,inst_18020);
} else {
if((state_val_18043 === (21))){
var inst_18033 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18050_18115 = state_18042__$1;
(statearr_18050_18115[(2)] = inst_18033);

(statearr_18050_18115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (13))){
var inst_18035 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18051 = state_18042;
(statearr_18051[(9)] = inst_18035);

return statearr_18051;
})();
var statearr_18052_18116 = state_18042__$1;
(statearr_18052_18116[(2)] = null);

(statearr_18052_18116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (6))){
var inst_18007 = (state_18042[(7)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(11),inst_18007);
} else {
if((state_val_18043 === (17))){
var inst_18028 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_18028)){
var statearr_18053_18117 = state_18042__$1;
(statearr_18053_18117[(1)] = (19));

} else {
var statearr_18054_18118 = state_18042__$1;
(statearr_18054_18118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (12))){
var inst_18017 = (state_18042[(10)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(14),inst_18017);
} else {
if((state_val_18043 === (2))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(4),results);
} else {
if((state_val_18043 === (19))){
var state_18042__$1 = state_18042;
var statearr_18055_18119 = state_18042__$1;
(statearr_18055_18119[(2)] = null);

(statearr_18055_18119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (11))){
var inst_18017 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18056 = state_18042;
(statearr_18056[(10)] = inst_18017);

return statearr_18056;
})();
var statearr_18057_18120 = state_18042__$1;
(statearr_18057_18120[(2)] = null);

(statearr_18057_18120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (9))){
var state_18042__$1 = state_18042;
var statearr_18058_18121 = state_18042__$1;
(statearr_18058_18121[(2)] = null);

(statearr_18058_18121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (5))){
var state_18042__$1 = state_18042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18059_18122 = state_18042__$1;
(statearr_18059_18122[(1)] = (8));

} else {
var statearr_18060_18123 = state_18042__$1;
(statearr_18060_18123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (14))){
var inst_18022 = (state_18042[(11)]);
var inst_18020 = (state_18042[(8)]);
var inst_18020__$1 = (state_18042[(2)]);
var inst_18021 = (inst_18020__$1 == null);
var inst_18022__$1 = cljs.core.not.call(null,inst_18021);
var state_18042__$1 = (function (){var statearr_18061 = state_18042;
(statearr_18061[(11)] = inst_18022__$1);

(statearr_18061[(8)] = inst_18020__$1);

return statearr_18061;
})();
if(inst_18022__$1){
var statearr_18062_18124 = state_18042__$1;
(statearr_18062_18124[(1)] = (15));

} else {
var statearr_18063_18125 = state_18042__$1;
(statearr_18063_18125[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (16))){
var inst_18022 = (state_18042[(11)]);
var state_18042__$1 = state_18042;
var statearr_18064_18126 = state_18042__$1;
(statearr_18064_18126[(2)] = inst_18022);

(statearr_18064_18126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (10))){
var inst_18014 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18065_18127 = state_18042__$1;
(statearr_18065_18127[(2)] = inst_18014);

(statearr_18065_18127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (18))){
var inst_18025 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18066_18128 = state_18042__$1;
(statearr_18066_18128[(2)] = inst_18025);

(statearr_18066_18128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_18011 = cljs.core.async.close_BANG_.call(null,to);
var state_18042__$1 = state_18042;
var statearr_18067_18129 = state_18042__$1;
(statearr_18067_18129[(2)] = inst_18011);

(statearr_18067_18129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto__,jobs,results,process,async))
;
return ((function (switch__6457__auto__,c__6513__auto__,jobs,results,process,async){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_18071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18071[(0)] = state_machine__6458__auto__);

(statearr_18071[(1)] = (1));

return statearr_18071;
});
var state_machine__6458__auto____1 = (function (state_18042){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_18042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e18072){if((e18072 instanceof Object)){
var ex__6461__auto__ = e18072;
var statearr_18073_18130 = state_18042;
(statearr_18073_18130[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18131 = state_18042;
state_18042 = G__18131;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__,jobs,results,process,async))
})();
var state__6515__auto__ = (function (){var statearr_18074 = f__6514__auto__.call(null);
(statearr_18074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_18074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__,jobs,results,process,async))
);

return c__6513__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6513__auto___18232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___18232,tc,fc){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___18232,tc,fc){
return (function (state_18207){
var state_val_18208 = (state_18207[(1)]);
if((state_val_18208 === (7))){
var inst_18203 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18209_18233 = state_18207__$1;
(statearr_18209_18233[(2)] = inst_18203);

(statearr_18209_18233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (1))){
var state_18207__$1 = state_18207;
var statearr_18210_18234 = state_18207__$1;
(statearr_18210_18234[(2)] = null);

(statearr_18210_18234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (4))){
var inst_18184 = (state_18207[(7)]);
var inst_18184__$1 = (state_18207[(2)]);
var inst_18185 = (inst_18184__$1 == null);
var state_18207__$1 = (function (){var statearr_18211 = state_18207;
(statearr_18211[(7)] = inst_18184__$1);

return statearr_18211;
})();
if(cljs.core.truth_(inst_18185)){
var statearr_18212_18235 = state_18207__$1;
(statearr_18212_18235[(1)] = (5));

} else {
var statearr_18213_18236 = state_18207__$1;
(statearr_18213_18236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (13))){
var state_18207__$1 = state_18207;
var statearr_18214_18237 = state_18207__$1;
(statearr_18214_18237[(2)] = null);

(statearr_18214_18237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (6))){
var inst_18184 = (state_18207[(7)]);
var inst_18190 = p.call(null,inst_18184);
var state_18207__$1 = state_18207;
if(cljs.core.truth_(inst_18190)){
var statearr_18215_18238 = state_18207__$1;
(statearr_18215_18238[(1)] = (9));

} else {
var statearr_18216_18239 = state_18207__$1;
(statearr_18216_18239[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (3))){
var inst_18205 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18207__$1,inst_18205);
} else {
if((state_val_18208 === (12))){
var state_18207__$1 = state_18207;
var statearr_18217_18240 = state_18207__$1;
(statearr_18217_18240[(2)] = null);

(statearr_18217_18240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (2))){
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18207__$1,(4),ch);
} else {
if((state_val_18208 === (11))){
var inst_18184 = (state_18207[(7)]);
var inst_18194 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18207__$1,(8),inst_18194,inst_18184);
} else {
if((state_val_18208 === (9))){
var state_18207__$1 = state_18207;
var statearr_18218_18241 = state_18207__$1;
(statearr_18218_18241[(2)] = tc);

(statearr_18218_18241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (5))){
var inst_18187 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18188 = cljs.core.async.close_BANG_.call(null,fc);
var state_18207__$1 = (function (){var statearr_18219 = state_18207;
(statearr_18219[(8)] = inst_18187);

return statearr_18219;
})();
var statearr_18220_18242 = state_18207__$1;
(statearr_18220_18242[(2)] = inst_18188);

(statearr_18220_18242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (14))){
var inst_18201 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18221_18243 = state_18207__$1;
(statearr_18221_18243[(2)] = inst_18201);

(statearr_18221_18243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (10))){
var state_18207__$1 = state_18207;
var statearr_18222_18244 = state_18207__$1;
(statearr_18222_18244[(2)] = fc);

(statearr_18222_18244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (8))){
var inst_18196 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
if(cljs.core.truth_(inst_18196)){
var statearr_18223_18245 = state_18207__$1;
(statearr_18223_18245[(1)] = (12));

} else {
var statearr_18224_18246 = state_18207__$1;
(statearr_18224_18246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___18232,tc,fc))
;
return ((function (switch__6457__auto__,c__6513__auto___18232,tc,fc){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_18228 = [null,null,null,null,null,null,null,null,null];
(statearr_18228[(0)] = state_machine__6458__auto__);

(statearr_18228[(1)] = (1));

return statearr_18228;
});
var state_machine__6458__auto____1 = (function (state_18207){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_18207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e18229){if((e18229 instanceof Object)){
var ex__6461__auto__ = e18229;
var statearr_18230_18247 = state_18207;
(statearr_18230_18247[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18248 = state_18207;
state_18207 = G__18248;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_18207){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_18207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___18232,tc,fc))
})();
var state__6515__auto__ = (function (){var statearr_18231 = f__6514__auto__.call(null);
(statearr_18231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___18232);

return statearr_18231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___18232,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__){
return (function (state_18295){
var state_val_18296 = (state_18295[(1)]);
if((state_val_18296 === (7))){
var inst_18291 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
var statearr_18297_18313 = state_18295__$1;
(statearr_18297_18313[(2)] = inst_18291);

(statearr_18297_18313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (6))){
var inst_18281 = (state_18295[(7)]);
var inst_18284 = (state_18295[(8)]);
var inst_18288 = f.call(null,inst_18281,inst_18284);
var inst_18281__$1 = inst_18288;
var state_18295__$1 = (function (){var statearr_18298 = state_18295;
(statearr_18298[(7)] = inst_18281__$1);

return statearr_18298;
})();
var statearr_18299_18314 = state_18295__$1;
(statearr_18299_18314[(2)] = null);

(statearr_18299_18314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (5))){
var inst_18281 = (state_18295[(7)]);
var state_18295__$1 = state_18295;
var statearr_18300_18315 = state_18295__$1;
(statearr_18300_18315[(2)] = inst_18281);

(statearr_18300_18315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (4))){
var inst_18284 = (state_18295[(8)]);
var inst_18284__$1 = (state_18295[(2)]);
var inst_18285 = (inst_18284__$1 == null);
var state_18295__$1 = (function (){var statearr_18301 = state_18295;
(statearr_18301[(8)] = inst_18284__$1);

return statearr_18301;
})();
if(cljs.core.truth_(inst_18285)){
var statearr_18302_18316 = state_18295__$1;
(statearr_18302_18316[(1)] = (5));

} else {
var statearr_18303_18317 = state_18295__$1;
(statearr_18303_18317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (3))){
var inst_18293 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18295__$1,inst_18293);
} else {
if((state_val_18296 === (2))){
var state_18295__$1 = state_18295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18295__$1,(4),ch);
} else {
if((state_val_18296 === (1))){
var inst_18281 = init;
var state_18295__$1 = (function (){var statearr_18304 = state_18295;
(statearr_18304[(7)] = inst_18281);

return statearr_18304;
})();
var statearr_18305_18318 = state_18295__$1;
(statearr_18305_18318[(2)] = null);

(statearr_18305_18318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6513__auto__))
;
return ((function (switch__6457__auto__,c__6513__auto__){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_18309 = [null,null,null,null,null,null,null,null,null];
(statearr_18309[(0)] = state_machine__6458__auto__);

(statearr_18309[(1)] = (1));

return statearr_18309;
});
var state_machine__6458__auto____1 = (function (state_18295){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_18295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e18310){if((e18310 instanceof Object)){
var ex__6461__auto__ = e18310;
var statearr_18311_18319 = state_18295;
(statearr_18311_18319[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18320 = state_18295;
state_18295 = G__18320;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_18295){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_18295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__))
})();
var state__6515__auto__ = (function (){var statearr_18312 = f__6514__auto__.call(null);
(statearr_18312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_18312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__))
);

return c__6513__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__){
return (function (state_18394){
var state_val_18395 = (state_18394[(1)]);
if((state_val_18395 === (7))){
var inst_18376 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18396_18419 = state_18394__$1;
(statearr_18396_18419[(2)] = inst_18376);

(statearr_18396_18419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (1))){
var inst_18370 = cljs.core.seq.call(null,coll);
var inst_18371 = inst_18370;
var state_18394__$1 = (function (){var statearr_18397 = state_18394;
(statearr_18397[(7)] = inst_18371);

return statearr_18397;
})();
var statearr_18398_18420 = state_18394__$1;
(statearr_18398_18420[(2)] = null);

(statearr_18398_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (4))){
var inst_18371 = (state_18394[(7)]);
var inst_18374 = cljs.core.first.call(null,inst_18371);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18394__$1,(7),ch,inst_18374);
} else {
if((state_val_18395 === (13))){
var inst_18388 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18399_18421 = state_18394__$1;
(statearr_18399_18421[(2)] = inst_18388);

(statearr_18399_18421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (6))){
var inst_18379 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
if(cljs.core.truth_(inst_18379)){
var statearr_18400_18422 = state_18394__$1;
(statearr_18400_18422[(1)] = (8));

} else {
var statearr_18401_18423 = state_18394__$1;
(statearr_18401_18423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (3))){
var inst_18392 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18394__$1,inst_18392);
} else {
if((state_val_18395 === (12))){
var state_18394__$1 = state_18394;
var statearr_18402_18424 = state_18394__$1;
(statearr_18402_18424[(2)] = null);

(statearr_18402_18424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (2))){
var inst_18371 = (state_18394[(7)]);
var state_18394__$1 = state_18394;
if(cljs.core.truth_(inst_18371)){
var statearr_18403_18425 = state_18394__$1;
(statearr_18403_18425[(1)] = (4));

} else {
var statearr_18404_18426 = state_18394__$1;
(statearr_18404_18426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (11))){
var inst_18385 = cljs.core.async.close_BANG_.call(null,ch);
var state_18394__$1 = state_18394;
var statearr_18405_18427 = state_18394__$1;
(statearr_18405_18427[(2)] = inst_18385);

(statearr_18405_18427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (9))){
var state_18394__$1 = state_18394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18406_18428 = state_18394__$1;
(statearr_18406_18428[(1)] = (11));

} else {
var statearr_18407_18429 = state_18394__$1;
(statearr_18407_18429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (5))){
var inst_18371 = (state_18394[(7)]);
var state_18394__$1 = state_18394;
var statearr_18408_18430 = state_18394__$1;
(statearr_18408_18430[(2)] = inst_18371);

(statearr_18408_18430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (10))){
var inst_18390 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18409_18431 = state_18394__$1;
(statearr_18409_18431[(2)] = inst_18390);

(statearr_18409_18431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (8))){
var inst_18371 = (state_18394[(7)]);
var inst_18381 = cljs.core.next.call(null,inst_18371);
var inst_18371__$1 = inst_18381;
var state_18394__$1 = (function (){var statearr_18410 = state_18394;
(statearr_18410[(7)] = inst_18371__$1);

return statearr_18410;
})();
var statearr_18411_18432 = state_18394__$1;
(statearr_18411_18432[(2)] = null);

(statearr_18411_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto__))
;
return ((function (switch__6457__auto__,c__6513__auto__){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_18415 = [null,null,null,null,null,null,null,null];
(statearr_18415[(0)] = state_machine__6458__auto__);

(statearr_18415[(1)] = (1));

return statearr_18415;
});
var state_machine__6458__auto____1 = (function (state_18394){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_18394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e18416){if((e18416 instanceof Object)){
var ex__6461__auto__ = e18416;
var statearr_18417_18433 = state_18394;
(statearr_18417_18433[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18434 = state_18394;
state_18394 = G__18434;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_18394){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_18394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__))
})();
var state__6515__auto__ = (function (){var statearr_18418 = f__6514__auto__.call(null);
(statearr_18418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_18418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__))
);

return c__6513__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18436 = {};
return obj18436;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3723__auto__ = _;
if(and__3723__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3723__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4379__auto__ = (((_ == null))?null:_);
return (function (){var or__3735__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18438 = {};
return obj18438;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t18660 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18660 = (function (cs,ch,mult,meta18661){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18661 = meta18661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18660.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18660.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18660.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18660.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18660.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18662){
var self__ = this;
var _18662__$1 = this;
return self__.meta18661;
});})(cs))
;

cljs.core.async.t18660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18662,meta18661__$1){
var self__ = this;
var _18662__$1 = this;
return (new cljs.core.async.t18660(self__.cs,self__.ch,self__.mult,meta18661__$1));
});})(cs))
;

cljs.core.async.t18660.cljs$lang$type = true;

cljs.core.async.t18660.cljs$lang$ctorStr = "cljs.core.async/t18660";

cljs.core.async.t18660.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t18660");
});})(cs))
;

cljs.core.async.__GT_t18660 = ((function (cs){
return (function __GT_t18660(cs__$1,ch__$1,mult__$1,meta18661){
return (new cljs.core.async.t18660(cs__$1,ch__$1,mult__$1,meta18661));
});})(cs))
;

}

return (new cljs.core.async.t18660(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6513__auto___18881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___18881,cs,m,dchan,dctr,done){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___18881,cs,m,dchan,dctr,done){
return (function (state_18793){
var state_val_18794 = (state_18793[(1)]);
if((state_val_18794 === (7))){
var inst_18789 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18795_18882 = state_18793__$1;
(statearr_18795_18882[(2)] = inst_18789);

(statearr_18795_18882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (20))){
var inst_18694 = (state_18793[(7)]);
var inst_18704 = cljs.core.first.call(null,inst_18694);
var inst_18705 = cljs.core.nth.call(null,inst_18704,(0),null);
var inst_18706 = cljs.core.nth.call(null,inst_18704,(1),null);
var state_18793__$1 = (function (){var statearr_18796 = state_18793;
(statearr_18796[(8)] = inst_18705);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18706)){
var statearr_18797_18883 = state_18793__$1;
(statearr_18797_18883[(1)] = (22));

} else {
var statearr_18798_18884 = state_18793__$1;
(statearr_18798_18884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (27))){
var inst_18741 = (state_18793[(9)]);
var inst_18734 = (state_18793[(10)]);
var inst_18665 = (state_18793[(11)]);
var inst_18736 = (state_18793[(12)]);
var inst_18741__$1 = cljs.core._nth.call(null,inst_18734,inst_18736);
var inst_18742 = cljs.core.async.put_BANG_.call(null,inst_18741__$1,inst_18665,done);
var state_18793__$1 = (function (){var statearr_18799 = state_18793;
(statearr_18799[(9)] = inst_18741__$1);

return statearr_18799;
})();
if(cljs.core.truth_(inst_18742)){
var statearr_18800_18885 = state_18793__$1;
(statearr_18800_18885[(1)] = (30));

} else {
var statearr_18801_18886 = state_18793__$1;
(statearr_18801_18886[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (1))){
var state_18793__$1 = state_18793;
var statearr_18802_18887 = state_18793__$1;
(statearr_18802_18887[(2)] = null);

(statearr_18802_18887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (24))){
var inst_18694 = (state_18793[(7)]);
var inst_18711 = (state_18793[(2)]);
var inst_18712 = cljs.core.next.call(null,inst_18694);
var inst_18674 = inst_18712;
var inst_18675 = null;
var inst_18676 = (0);
var inst_18677 = (0);
var state_18793__$1 = (function (){var statearr_18803 = state_18793;
(statearr_18803[(13)] = inst_18674);

(statearr_18803[(14)] = inst_18677);

(statearr_18803[(15)] = inst_18711);

(statearr_18803[(16)] = inst_18675);

(statearr_18803[(17)] = inst_18676);

return statearr_18803;
})();
var statearr_18804_18888 = state_18793__$1;
(statearr_18804_18888[(2)] = null);

(statearr_18804_18888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (39))){
var state_18793__$1 = state_18793;
var statearr_18808_18889 = state_18793__$1;
(statearr_18808_18889[(2)] = null);

(statearr_18808_18889[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (4))){
var inst_18665 = (state_18793[(11)]);
var inst_18665__$1 = (state_18793[(2)]);
var inst_18666 = (inst_18665__$1 == null);
var state_18793__$1 = (function (){var statearr_18809 = state_18793;
(statearr_18809[(11)] = inst_18665__$1);

return statearr_18809;
})();
if(cljs.core.truth_(inst_18666)){
var statearr_18810_18890 = state_18793__$1;
(statearr_18810_18890[(1)] = (5));

} else {
var statearr_18811_18891 = state_18793__$1;
(statearr_18811_18891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (15))){
var inst_18674 = (state_18793[(13)]);
var inst_18677 = (state_18793[(14)]);
var inst_18675 = (state_18793[(16)]);
var inst_18676 = (state_18793[(17)]);
var inst_18690 = (state_18793[(2)]);
var inst_18691 = (inst_18677 + (1));
var tmp18805 = inst_18674;
var tmp18806 = inst_18675;
var tmp18807 = inst_18676;
var inst_18674__$1 = tmp18805;
var inst_18675__$1 = tmp18806;
var inst_18676__$1 = tmp18807;
var inst_18677__$1 = inst_18691;
var state_18793__$1 = (function (){var statearr_18812 = state_18793;
(statearr_18812[(13)] = inst_18674__$1);

(statearr_18812[(14)] = inst_18677__$1);

(statearr_18812[(16)] = inst_18675__$1);

(statearr_18812[(18)] = inst_18690);

(statearr_18812[(17)] = inst_18676__$1);

return statearr_18812;
})();
var statearr_18813_18892 = state_18793__$1;
(statearr_18813_18892[(2)] = null);

(statearr_18813_18892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (21))){
var inst_18715 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18817_18893 = state_18793__$1;
(statearr_18817_18893[(2)] = inst_18715);

(statearr_18817_18893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (31))){
var inst_18741 = (state_18793[(9)]);
var inst_18745 = done.call(null,null);
var inst_18746 = cljs.core.async.untap_STAR_.call(null,m,inst_18741);
var state_18793__$1 = (function (){var statearr_18818 = state_18793;
(statearr_18818[(19)] = inst_18745);

return statearr_18818;
})();
var statearr_18819_18894 = state_18793__$1;
(statearr_18819_18894[(2)] = inst_18746);

(statearr_18819_18894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (32))){
var inst_18733 = (state_18793[(20)]);
var inst_18735 = (state_18793[(21)]);
var inst_18734 = (state_18793[(10)]);
var inst_18736 = (state_18793[(12)]);
var inst_18748 = (state_18793[(2)]);
var inst_18749 = (inst_18736 + (1));
var tmp18814 = inst_18733;
var tmp18815 = inst_18735;
var tmp18816 = inst_18734;
var inst_18733__$1 = tmp18814;
var inst_18734__$1 = tmp18816;
var inst_18735__$1 = tmp18815;
var inst_18736__$1 = inst_18749;
var state_18793__$1 = (function (){var statearr_18820 = state_18793;
(statearr_18820[(20)] = inst_18733__$1);

(statearr_18820[(21)] = inst_18735__$1);

(statearr_18820[(10)] = inst_18734__$1);

(statearr_18820[(22)] = inst_18748);

(statearr_18820[(12)] = inst_18736__$1);

return statearr_18820;
})();
var statearr_18821_18895 = state_18793__$1;
(statearr_18821_18895[(2)] = null);

(statearr_18821_18895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (40))){
var inst_18761 = (state_18793[(23)]);
var inst_18765 = done.call(null,null);
var inst_18766 = cljs.core.async.untap_STAR_.call(null,m,inst_18761);
var state_18793__$1 = (function (){var statearr_18822 = state_18793;
(statearr_18822[(24)] = inst_18765);

return statearr_18822;
})();
var statearr_18823_18896 = state_18793__$1;
(statearr_18823_18896[(2)] = inst_18766);

(statearr_18823_18896[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (33))){
var inst_18752 = (state_18793[(25)]);
var inst_18754 = cljs.core.chunked_seq_QMARK_.call(null,inst_18752);
var state_18793__$1 = state_18793;
if(inst_18754){
var statearr_18824_18897 = state_18793__$1;
(statearr_18824_18897[(1)] = (36));

} else {
var statearr_18825_18898 = state_18793__$1;
(statearr_18825_18898[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (13))){
var inst_18684 = (state_18793[(26)]);
var inst_18687 = cljs.core.async.close_BANG_.call(null,inst_18684);
var state_18793__$1 = state_18793;
var statearr_18826_18899 = state_18793__$1;
(statearr_18826_18899[(2)] = inst_18687);

(statearr_18826_18899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (22))){
var inst_18705 = (state_18793[(8)]);
var inst_18708 = cljs.core.async.close_BANG_.call(null,inst_18705);
var state_18793__$1 = state_18793;
var statearr_18827_18900 = state_18793__$1;
(statearr_18827_18900[(2)] = inst_18708);

(statearr_18827_18900[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (36))){
var inst_18752 = (state_18793[(25)]);
var inst_18756 = cljs.core.chunk_first.call(null,inst_18752);
var inst_18757 = cljs.core.chunk_rest.call(null,inst_18752);
var inst_18758 = cljs.core.count.call(null,inst_18756);
var inst_18733 = inst_18757;
var inst_18734 = inst_18756;
var inst_18735 = inst_18758;
var inst_18736 = (0);
var state_18793__$1 = (function (){var statearr_18828 = state_18793;
(statearr_18828[(20)] = inst_18733);

(statearr_18828[(21)] = inst_18735);

(statearr_18828[(10)] = inst_18734);

(statearr_18828[(12)] = inst_18736);

return statearr_18828;
})();
var statearr_18829_18901 = state_18793__$1;
(statearr_18829_18901[(2)] = null);

(statearr_18829_18901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (41))){
var inst_18752 = (state_18793[(25)]);
var inst_18768 = (state_18793[(2)]);
var inst_18769 = cljs.core.next.call(null,inst_18752);
var inst_18733 = inst_18769;
var inst_18734 = null;
var inst_18735 = (0);
var inst_18736 = (0);
var state_18793__$1 = (function (){var statearr_18830 = state_18793;
(statearr_18830[(20)] = inst_18733);

(statearr_18830[(27)] = inst_18768);

(statearr_18830[(21)] = inst_18735);

(statearr_18830[(10)] = inst_18734);

(statearr_18830[(12)] = inst_18736);

return statearr_18830;
})();
var statearr_18831_18902 = state_18793__$1;
(statearr_18831_18902[(2)] = null);

(statearr_18831_18902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (43))){
var state_18793__$1 = state_18793;
var statearr_18832_18903 = state_18793__$1;
(statearr_18832_18903[(2)] = null);

(statearr_18832_18903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (29))){
var inst_18777 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18833_18904 = state_18793__$1;
(statearr_18833_18904[(2)] = inst_18777);

(statearr_18833_18904[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (44))){
var inst_18786 = (state_18793[(2)]);
var state_18793__$1 = (function (){var statearr_18834 = state_18793;
(statearr_18834[(28)] = inst_18786);

return statearr_18834;
})();
var statearr_18835_18905 = state_18793__$1;
(statearr_18835_18905[(2)] = null);

(statearr_18835_18905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (6))){
var inst_18725 = (state_18793[(29)]);
var inst_18724 = cljs.core.deref.call(null,cs);
var inst_18725__$1 = cljs.core.keys.call(null,inst_18724);
var inst_18726 = cljs.core.count.call(null,inst_18725__$1);
var inst_18727 = cljs.core.reset_BANG_.call(null,dctr,inst_18726);
var inst_18732 = cljs.core.seq.call(null,inst_18725__$1);
var inst_18733 = inst_18732;
var inst_18734 = null;
var inst_18735 = (0);
var inst_18736 = (0);
var state_18793__$1 = (function (){var statearr_18836 = state_18793;
(statearr_18836[(20)] = inst_18733);

(statearr_18836[(21)] = inst_18735);

(statearr_18836[(10)] = inst_18734);

(statearr_18836[(29)] = inst_18725__$1);

(statearr_18836[(30)] = inst_18727);

(statearr_18836[(12)] = inst_18736);

return statearr_18836;
})();
var statearr_18837_18906 = state_18793__$1;
(statearr_18837_18906[(2)] = null);

(statearr_18837_18906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (28))){
var inst_18733 = (state_18793[(20)]);
var inst_18752 = (state_18793[(25)]);
var inst_18752__$1 = cljs.core.seq.call(null,inst_18733);
var state_18793__$1 = (function (){var statearr_18838 = state_18793;
(statearr_18838[(25)] = inst_18752__$1);

return statearr_18838;
})();
if(inst_18752__$1){
var statearr_18839_18907 = state_18793__$1;
(statearr_18839_18907[(1)] = (33));

} else {
var statearr_18840_18908 = state_18793__$1;
(statearr_18840_18908[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (25))){
var inst_18735 = (state_18793[(21)]);
var inst_18736 = (state_18793[(12)]);
var inst_18738 = (inst_18736 < inst_18735);
var inst_18739 = inst_18738;
var state_18793__$1 = state_18793;
if(cljs.core.truth_(inst_18739)){
var statearr_18841_18909 = state_18793__$1;
(statearr_18841_18909[(1)] = (27));

} else {
var statearr_18842_18910 = state_18793__$1;
(statearr_18842_18910[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (34))){
var state_18793__$1 = state_18793;
var statearr_18843_18911 = state_18793__$1;
(statearr_18843_18911[(2)] = null);

(statearr_18843_18911[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (17))){
var state_18793__$1 = state_18793;
var statearr_18844_18912 = state_18793__$1;
(statearr_18844_18912[(2)] = null);

(statearr_18844_18912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (3))){
var inst_18791 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18793__$1,inst_18791);
} else {
if((state_val_18794 === (12))){
var inst_18720 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18845_18913 = state_18793__$1;
(statearr_18845_18913[(2)] = inst_18720);

(statearr_18845_18913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (2))){
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18793__$1,(4),ch);
} else {
if((state_val_18794 === (23))){
var state_18793__$1 = state_18793;
var statearr_18846_18914 = state_18793__$1;
(statearr_18846_18914[(2)] = null);

(statearr_18846_18914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (35))){
var inst_18775 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18847_18915 = state_18793__$1;
(statearr_18847_18915[(2)] = inst_18775);

(statearr_18847_18915[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (19))){
var inst_18694 = (state_18793[(7)]);
var inst_18698 = cljs.core.chunk_first.call(null,inst_18694);
var inst_18699 = cljs.core.chunk_rest.call(null,inst_18694);
var inst_18700 = cljs.core.count.call(null,inst_18698);
var inst_18674 = inst_18699;
var inst_18675 = inst_18698;
var inst_18676 = inst_18700;
var inst_18677 = (0);
var state_18793__$1 = (function (){var statearr_18848 = state_18793;
(statearr_18848[(13)] = inst_18674);

(statearr_18848[(14)] = inst_18677);

(statearr_18848[(16)] = inst_18675);

(statearr_18848[(17)] = inst_18676);

return statearr_18848;
})();
var statearr_18849_18916 = state_18793__$1;
(statearr_18849_18916[(2)] = null);

(statearr_18849_18916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (11))){
var inst_18674 = (state_18793[(13)]);
var inst_18694 = (state_18793[(7)]);
var inst_18694__$1 = cljs.core.seq.call(null,inst_18674);
var state_18793__$1 = (function (){var statearr_18850 = state_18793;
(statearr_18850[(7)] = inst_18694__$1);

return statearr_18850;
})();
if(inst_18694__$1){
var statearr_18851_18917 = state_18793__$1;
(statearr_18851_18917[(1)] = (16));

} else {
var statearr_18852_18918 = state_18793__$1;
(statearr_18852_18918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (9))){
var inst_18722 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18853_18919 = state_18793__$1;
(statearr_18853_18919[(2)] = inst_18722);

(statearr_18853_18919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (5))){
var inst_18672 = cljs.core.deref.call(null,cs);
var inst_18673 = cljs.core.seq.call(null,inst_18672);
var inst_18674 = inst_18673;
var inst_18675 = null;
var inst_18676 = (0);
var inst_18677 = (0);
var state_18793__$1 = (function (){var statearr_18854 = state_18793;
(statearr_18854[(13)] = inst_18674);

(statearr_18854[(14)] = inst_18677);

(statearr_18854[(16)] = inst_18675);

(statearr_18854[(17)] = inst_18676);

return statearr_18854;
})();
var statearr_18855_18920 = state_18793__$1;
(statearr_18855_18920[(2)] = null);

(statearr_18855_18920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (14))){
var state_18793__$1 = state_18793;
var statearr_18856_18921 = state_18793__$1;
(statearr_18856_18921[(2)] = null);

(statearr_18856_18921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (45))){
var inst_18783 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18857_18922 = state_18793__$1;
(statearr_18857_18922[(2)] = inst_18783);

(statearr_18857_18922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (26))){
var inst_18725 = (state_18793[(29)]);
var inst_18779 = (state_18793[(2)]);
var inst_18780 = cljs.core.seq.call(null,inst_18725);
var state_18793__$1 = (function (){var statearr_18858 = state_18793;
(statearr_18858[(31)] = inst_18779);

return statearr_18858;
})();
if(inst_18780){
var statearr_18859_18923 = state_18793__$1;
(statearr_18859_18923[(1)] = (42));

} else {
var statearr_18860_18924 = state_18793__$1;
(statearr_18860_18924[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (16))){
var inst_18694 = (state_18793[(7)]);
var inst_18696 = cljs.core.chunked_seq_QMARK_.call(null,inst_18694);
var state_18793__$1 = state_18793;
if(inst_18696){
var statearr_18861_18925 = state_18793__$1;
(statearr_18861_18925[(1)] = (19));

} else {
var statearr_18862_18926 = state_18793__$1;
(statearr_18862_18926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (38))){
var inst_18772 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18863_18927 = state_18793__$1;
(statearr_18863_18927[(2)] = inst_18772);

(statearr_18863_18927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (30))){
var state_18793__$1 = state_18793;
var statearr_18864_18928 = state_18793__$1;
(statearr_18864_18928[(2)] = null);

(statearr_18864_18928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (10))){
var inst_18677 = (state_18793[(14)]);
var inst_18675 = (state_18793[(16)]);
var inst_18683 = cljs.core._nth.call(null,inst_18675,inst_18677);
var inst_18684 = cljs.core.nth.call(null,inst_18683,(0),null);
var inst_18685 = cljs.core.nth.call(null,inst_18683,(1),null);
var state_18793__$1 = (function (){var statearr_18865 = state_18793;
(statearr_18865[(26)] = inst_18684);

return statearr_18865;
})();
if(cljs.core.truth_(inst_18685)){
var statearr_18866_18929 = state_18793__$1;
(statearr_18866_18929[(1)] = (13));

} else {
var statearr_18867_18930 = state_18793__$1;
(statearr_18867_18930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (18))){
var inst_18718 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18868_18931 = state_18793__$1;
(statearr_18868_18931[(2)] = inst_18718);

(statearr_18868_18931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (42))){
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18793__$1,(45),dchan);
} else {
if((state_val_18794 === (37))){
var inst_18752 = (state_18793[(25)]);
var inst_18761 = (state_18793[(23)]);
var inst_18665 = (state_18793[(11)]);
var inst_18761__$1 = cljs.core.first.call(null,inst_18752);
var inst_18762 = cljs.core.async.put_BANG_.call(null,inst_18761__$1,inst_18665,done);
var state_18793__$1 = (function (){var statearr_18869 = state_18793;
(statearr_18869[(23)] = inst_18761__$1);

return statearr_18869;
})();
if(cljs.core.truth_(inst_18762)){
var statearr_18870_18932 = state_18793__$1;
(statearr_18870_18932[(1)] = (39));

} else {
var statearr_18871_18933 = state_18793__$1;
(statearr_18871_18933[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (8))){
var inst_18677 = (state_18793[(14)]);
var inst_18676 = (state_18793[(17)]);
var inst_18679 = (inst_18677 < inst_18676);
var inst_18680 = inst_18679;
var state_18793__$1 = state_18793;
if(cljs.core.truth_(inst_18680)){
var statearr_18872_18934 = state_18793__$1;
(statearr_18872_18934[(1)] = (10));

} else {
var statearr_18873_18935 = state_18793__$1;
(statearr_18873_18935[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___18881,cs,m,dchan,dctr,done))
;
return ((function (switch__6457__auto__,c__6513__auto___18881,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_18877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18877[(0)] = state_machine__6458__auto__);

(statearr_18877[(1)] = (1));

return statearr_18877;
});
var state_machine__6458__auto____1 = (function (state_18793){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_18793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e18878){if((e18878 instanceof Object)){
var ex__6461__auto__ = e18878;
var statearr_18879_18936 = state_18793;
(statearr_18879_18936[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18937 = state_18793;
state_18793 = G__18937;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_18793){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_18793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___18881,cs,m,dchan,dctr,done))
})();
var state__6515__auto__ = (function (){var statearr_18880 = f__6514__auto__.call(null);
(statearr_18880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___18881);

return statearr_18880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___18881,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj18939 = {};
return obj18939;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3723__auto__ = m;
if(and__3723__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3723__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4379__auto__ = (((m == null))?null:m);
return (function (){var or__3735__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18940){
var map__18945 = p__18940;
var map__18945__$1 = ((cljs.core.seq_QMARK_.call(null,map__18945))?cljs.core.apply.call(null,cljs.core.hash_map,map__18945):map__18945);
var opts = map__18945__$1;
var statearr_18946_18949 = state;
(statearr_18946_18949[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18945,map__18945__$1,opts){
return (function (val){
var statearr_18947_18950 = state;
(statearr_18947_18950[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18945,map__18945__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18948_18951 = state;
(statearr_18948_18951[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18940 = null;
if (arguments.length > 3) {
var G__18952__i = 0, G__18952__a = new Array(arguments.length -  3);
while (G__18952__i < G__18952__a.length) {G__18952__a[G__18952__i] = arguments[G__18952__i + 3]; ++G__18952__i;}
  p__18940 = new cljs.core.IndexedSeq(G__18952__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18940);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18953){
var state = cljs.core.first(arglist__18953);
arglist__18953 = cljs.core.next(arglist__18953);
var cont_block = cljs.core.first(arglist__18953);
arglist__18953 = cljs.core.next(arglist__18953);
var ports = cljs.core.first(arglist__18953);
var p__18940 = cljs.core.rest(arglist__18953);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18940);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19073 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19073 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19074){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19074 = meta19074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19073.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19073.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19075){
var self__ = this;
var _19075__$1 = this;
return self__.meta19074;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19075,meta19074__$1){
var self__ = this;
var _19075__$1 = this;
return (new cljs.core.async.t19073(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19074__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19073.cljs$lang$type = true;

cljs.core.async.t19073.cljs$lang$ctorStr = "cljs.core.async/t19073";

cljs.core.async.t19073.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t19073");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19073 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19073(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19074){
return (new cljs.core.async.t19073(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19074));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19073(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
})()
;
var c__6513__auto___19192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___19192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___19192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19145){
var state_val_19146 = (state_19145[(1)]);
if((state_val_19146 === (7))){
var inst_19089 = (state_19145[(7)]);
var inst_19094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19089);
var state_19145__$1 = state_19145;
var statearr_19147_19193 = state_19145__$1;
(statearr_19147_19193[(2)] = inst_19094);

(statearr_19147_19193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (20))){
var inst_19104 = (state_19145[(8)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19145__$1,(23),out,inst_19104);
} else {
if((state_val_19146 === (1))){
var inst_19079 = (state_19145[(9)]);
var inst_19079__$1 = calc_state.call(null);
var inst_19080 = cljs.core.seq_QMARK_.call(null,inst_19079__$1);
var state_19145__$1 = (function (){var statearr_19148 = state_19145;
(statearr_19148[(9)] = inst_19079__$1);

return statearr_19148;
})();
if(inst_19080){
var statearr_19149_19194 = state_19145__$1;
(statearr_19149_19194[(1)] = (2));

} else {
var statearr_19150_19195 = state_19145__$1;
(statearr_19150_19195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (24))){
var inst_19097 = (state_19145[(10)]);
var inst_19089 = inst_19097;
var state_19145__$1 = (function (){var statearr_19151 = state_19145;
(statearr_19151[(7)] = inst_19089);

return statearr_19151;
})();
var statearr_19152_19196 = state_19145__$1;
(statearr_19152_19196[(2)] = null);

(statearr_19152_19196[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (4))){
var inst_19079 = (state_19145[(9)]);
var inst_19085 = (state_19145[(2)]);
var inst_19086 = cljs.core.get.call(null,inst_19085,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19087 = cljs.core.get.call(null,inst_19085,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19088 = cljs.core.get.call(null,inst_19085,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19089 = inst_19079;
var state_19145__$1 = (function (){var statearr_19153 = state_19145;
(statearr_19153[(11)] = inst_19087);

(statearr_19153[(12)] = inst_19086);

(statearr_19153[(13)] = inst_19088);

(statearr_19153[(7)] = inst_19089);

return statearr_19153;
})();
var statearr_19154_19197 = state_19145__$1;
(statearr_19154_19197[(2)] = null);

(statearr_19154_19197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (15))){
var state_19145__$1 = state_19145;
var statearr_19155_19198 = state_19145__$1;
(statearr_19155_19198[(2)] = null);

(statearr_19155_19198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (21))){
var inst_19097 = (state_19145[(10)]);
var inst_19089 = inst_19097;
var state_19145__$1 = (function (){var statearr_19156 = state_19145;
(statearr_19156[(7)] = inst_19089);

return statearr_19156;
})();
var statearr_19157_19199 = state_19145__$1;
(statearr_19157_19199[(2)] = null);

(statearr_19157_19199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (13))){
var inst_19141 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19158_19200 = state_19145__$1;
(statearr_19158_19200[(2)] = inst_19141);

(statearr_19158_19200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (22))){
var inst_19139 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19159_19201 = state_19145__$1;
(statearr_19159_19201[(2)] = inst_19139);

(statearr_19159_19201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (6))){
var inst_19143 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19145__$1,inst_19143);
} else {
if((state_val_19146 === (25))){
var state_19145__$1 = state_19145;
var statearr_19160_19202 = state_19145__$1;
(statearr_19160_19202[(2)] = null);

(statearr_19160_19202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (17))){
var inst_19119 = (state_19145[(14)]);
var state_19145__$1 = state_19145;
var statearr_19161_19203 = state_19145__$1;
(statearr_19161_19203[(2)] = inst_19119);

(statearr_19161_19203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (3))){
var inst_19079 = (state_19145[(9)]);
var state_19145__$1 = state_19145;
var statearr_19162_19204 = state_19145__$1;
(statearr_19162_19204[(2)] = inst_19079);

(statearr_19162_19204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (12))){
var inst_19105 = (state_19145[(15)]);
var inst_19100 = (state_19145[(16)]);
var inst_19119 = (state_19145[(14)]);
var inst_19119__$1 = inst_19100.call(null,inst_19105);
var state_19145__$1 = (function (){var statearr_19163 = state_19145;
(statearr_19163[(14)] = inst_19119__$1);

return statearr_19163;
})();
if(cljs.core.truth_(inst_19119__$1)){
var statearr_19164_19205 = state_19145__$1;
(statearr_19164_19205[(1)] = (17));

} else {
var statearr_19165_19206 = state_19145__$1;
(statearr_19165_19206[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (2))){
var inst_19079 = (state_19145[(9)]);
var inst_19082 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19079);
var state_19145__$1 = state_19145;
var statearr_19166_19207 = state_19145__$1;
(statearr_19166_19207[(2)] = inst_19082);

(statearr_19166_19207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (23))){
var inst_19130 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19130)){
var statearr_19167_19208 = state_19145__$1;
(statearr_19167_19208[(1)] = (24));

} else {
var statearr_19168_19209 = state_19145__$1;
(statearr_19168_19209[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (19))){
var inst_19127 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19127)){
var statearr_19169_19210 = state_19145__$1;
(statearr_19169_19210[(1)] = (20));

} else {
var statearr_19170_19211 = state_19145__$1;
(statearr_19170_19211[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (11))){
var inst_19104 = (state_19145[(8)]);
var inst_19110 = (inst_19104 == null);
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19110)){
var statearr_19171_19212 = state_19145__$1;
(statearr_19171_19212[(1)] = (14));

} else {
var statearr_19172_19213 = state_19145__$1;
(statearr_19172_19213[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (9))){
var inst_19097 = (state_19145[(10)]);
var inst_19097__$1 = (state_19145[(2)]);
var inst_19098 = cljs.core.get.call(null,inst_19097__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19099 = cljs.core.get.call(null,inst_19097__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19100 = cljs.core.get.call(null,inst_19097__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19145__$1 = (function (){var statearr_19173 = state_19145;
(statearr_19173[(10)] = inst_19097__$1);

(statearr_19173[(16)] = inst_19100);

(statearr_19173[(17)] = inst_19099);

return statearr_19173;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19145__$1,(10),inst_19098);
} else {
if((state_val_19146 === (5))){
var inst_19089 = (state_19145[(7)]);
var inst_19092 = cljs.core.seq_QMARK_.call(null,inst_19089);
var state_19145__$1 = state_19145;
if(inst_19092){
var statearr_19174_19214 = state_19145__$1;
(statearr_19174_19214[(1)] = (7));

} else {
var statearr_19175_19215 = state_19145__$1;
(statearr_19175_19215[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (14))){
var inst_19105 = (state_19145[(15)]);
var inst_19112 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19105);
var state_19145__$1 = state_19145;
var statearr_19176_19216 = state_19145__$1;
(statearr_19176_19216[(2)] = inst_19112);

(statearr_19176_19216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (26))){
var inst_19135 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19177_19217 = state_19145__$1;
(statearr_19177_19217[(2)] = inst_19135);

(statearr_19177_19217[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (16))){
var inst_19115 = (state_19145[(2)]);
var inst_19116 = calc_state.call(null);
var inst_19089 = inst_19116;
var state_19145__$1 = (function (){var statearr_19178 = state_19145;
(statearr_19178[(18)] = inst_19115);

(statearr_19178[(7)] = inst_19089);

return statearr_19178;
})();
var statearr_19179_19218 = state_19145__$1;
(statearr_19179_19218[(2)] = null);

(statearr_19179_19218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (10))){
var inst_19105 = (state_19145[(15)]);
var inst_19104 = (state_19145[(8)]);
var inst_19103 = (state_19145[(2)]);
var inst_19104__$1 = cljs.core.nth.call(null,inst_19103,(0),null);
var inst_19105__$1 = cljs.core.nth.call(null,inst_19103,(1),null);
var inst_19106 = (inst_19104__$1 == null);
var inst_19107 = cljs.core._EQ_.call(null,inst_19105__$1,change);
var inst_19108 = (inst_19106) || (inst_19107);
var state_19145__$1 = (function (){var statearr_19180 = state_19145;
(statearr_19180[(15)] = inst_19105__$1);

(statearr_19180[(8)] = inst_19104__$1);

return statearr_19180;
})();
if(cljs.core.truth_(inst_19108)){
var statearr_19181_19219 = state_19145__$1;
(statearr_19181_19219[(1)] = (11));

} else {
var statearr_19182_19220 = state_19145__$1;
(statearr_19182_19220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (18))){
var inst_19105 = (state_19145[(15)]);
var inst_19100 = (state_19145[(16)]);
var inst_19099 = (state_19145[(17)]);
var inst_19122 = cljs.core.empty_QMARK_.call(null,inst_19100);
var inst_19123 = inst_19099.call(null,inst_19105);
var inst_19124 = cljs.core.not.call(null,inst_19123);
var inst_19125 = (inst_19122) && (inst_19124);
var state_19145__$1 = state_19145;
var statearr_19183_19221 = state_19145__$1;
(statearr_19183_19221[(2)] = inst_19125);

(statearr_19183_19221[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (8))){
var inst_19089 = (state_19145[(7)]);
var state_19145__$1 = state_19145;
var statearr_19184_19222 = state_19145__$1;
(statearr_19184_19222[(2)] = inst_19089);

(statearr_19184_19222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___19192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6457__auto__,c__6513__auto___19192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_19188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19188[(0)] = state_machine__6458__auto__);

(statearr_19188[(1)] = (1));

return statearr_19188;
});
var state_machine__6458__auto____1 = (function (state_19145){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_19145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e19189){if((e19189 instanceof Object)){
var ex__6461__auto__ = e19189;
var statearr_19190_19223 = state_19145;
(statearr_19190_19223[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19224 = state_19145;
state_19145 = G__19224;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_19145){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_19145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___19192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6515__auto__ = (function (){var statearr_19191 = f__6514__auto__.call(null);
(statearr_19191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___19192);

return statearr_19191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___19192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19226 = {};
return obj19226;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3723__auto__ = p;
if(and__3723__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3723__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4379__auto__ = (((p == null))?null:p);
return (function (){var or__3735__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3723__auto__ = p;
if(and__3723__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3723__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4379__auto__ = (((p == null))?null:p);
return (function (){var or__3735__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3723__auto__ = p;
if(and__3723__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3723__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4379__auto__ = (((p == null))?null:p);
return (function (){var or__3735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3723__auto__ = p;
if(and__3723__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3723__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4379__auto__ = (((p == null))?null:p);
return (function (){var or__3735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3735__auto__,mults){
return (function (p1__19227_SHARP_){
if(cljs.core.truth_(p1__19227_SHARP_.call(null,topic))){
return p1__19227_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19227_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3735__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19350 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19351){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19351 = meta19351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19350.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19350.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19350.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19350.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19352){
var self__ = this;
var _19352__$1 = this;
return self__.meta19351;
});})(mults,ensure_mult))
;

cljs.core.async.t19350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19352,meta19351__$1){
var self__ = this;
var _19352__$1 = this;
return (new cljs.core.async.t19350(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19351__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19350.cljs$lang$type = true;

cljs.core.async.t19350.cljs$lang$ctorStr = "cljs.core.async/t19350";

cljs.core.async.t19350.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t19350");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19350 = ((function (mults,ensure_mult){
return (function __GT_t19350(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19351){
return (new cljs.core.async.t19350(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19351));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19350(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
})()
;
var c__6513__auto___19472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___19472,mults,ensure_mult,p){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___19472,mults,ensure_mult,p){
return (function (state_19424){
var state_val_19425 = (state_19424[(1)]);
if((state_val_19425 === (7))){
var inst_19420 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19426_19473 = state_19424__$1;
(statearr_19426_19473[(2)] = inst_19420);

(statearr_19426_19473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (20))){
var state_19424__$1 = state_19424;
var statearr_19427_19474 = state_19424__$1;
(statearr_19427_19474[(2)] = null);

(statearr_19427_19474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (1))){
var state_19424__$1 = state_19424;
var statearr_19428_19475 = state_19424__$1;
(statearr_19428_19475[(2)] = null);

(statearr_19428_19475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (24))){
var inst_19403 = (state_19424[(7)]);
var inst_19412 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19403);
var state_19424__$1 = state_19424;
var statearr_19429_19476 = state_19424__$1;
(statearr_19429_19476[(2)] = inst_19412);

(statearr_19429_19476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (4))){
var inst_19355 = (state_19424[(8)]);
var inst_19355__$1 = (state_19424[(2)]);
var inst_19356 = (inst_19355__$1 == null);
var state_19424__$1 = (function (){var statearr_19430 = state_19424;
(statearr_19430[(8)] = inst_19355__$1);

return statearr_19430;
})();
if(cljs.core.truth_(inst_19356)){
var statearr_19431_19477 = state_19424__$1;
(statearr_19431_19477[(1)] = (5));

} else {
var statearr_19432_19478 = state_19424__$1;
(statearr_19432_19478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (15))){
var inst_19397 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19433_19479 = state_19424__$1;
(statearr_19433_19479[(2)] = inst_19397);

(statearr_19433_19479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (21))){
var inst_19417 = (state_19424[(2)]);
var state_19424__$1 = (function (){var statearr_19434 = state_19424;
(statearr_19434[(9)] = inst_19417);

return statearr_19434;
})();
var statearr_19435_19480 = state_19424__$1;
(statearr_19435_19480[(2)] = null);

(statearr_19435_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (13))){
var inst_19379 = (state_19424[(10)]);
var inst_19381 = cljs.core.chunked_seq_QMARK_.call(null,inst_19379);
var state_19424__$1 = state_19424;
if(inst_19381){
var statearr_19436_19481 = state_19424__$1;
(statearr_19436_19481[(1)] = (16));

} else {
var statearr_19437_19482 = state_19424__$1;
(statearr_19437_19482[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (22))){
var inst_19409 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
if(cljs.core.truth_(inst_19409)){
var statearr_19438_19483 = state_19424__$1;
(statearr_19438_19483[(1)] = (23));

} else {
var statearr_19439_19484 = state_19424__$1;
(statearr_19439_19484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (6))){
var inst_19355 = (state_19424[(8)]);
var inst_19403 = (state_19424[(7)]);
var inst_19405 = (state_19424[(11)]);
var inst_19403__$1 = topic_fn.call(null,inst_19355);
var inst_19404 = cljs.core.deref.call(null,mults);
var inst_19405__$1 = cljs.core.get.call(null,inst_19404,inst_19403__$1);
var state_19424__$1 = (function (){var statearr_19440 = state_19424;
(statearr_19440[(7)] = inst_19403__$1);

(statearr_19440[(11)] = inst_19405__$1);

return statearr_19440;
})();
if(cljs.core.truth_(inst_19405__$1)){
var statearr_19441_19485 = state_19424__$1;
(statearr_19441_19485[(1)] = (19));

} else {
var statearr_19442_19486 = state_19424__$1;
(statearr_19442_19486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (25))){
var inst_19414 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19443_19487 = state_19424__$1;
(statearr_19443_19487[(2)] = inst_19414);

(statearr_19443_19487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (17))){
var inst_19379 = (state_19424[(10)]);
var inst_19388 = cljs.core.first.call(null,inst_19379);
var inst_19389 = cljs.core.async.muxch_STAR_.call(null,inst_19388);
var inst_19390 = cljs.core.async.close_BANG_.call(null,inst_19389);
var inst_19391 = cljs.core.next.call(null,inst_19379);
var inst_19365 = inst_19391;
var inst_19366 = null;
var inst_19367 = (0);
var inst_19368 = (0);
var state_19424__$1 = (function (){var statearr_19444 = state_19424;
(statearr_19444[(12)] = inst_19366);

(statearr_19444[(13)] = inst_19365);

(statearr_19444[(14)] = inst_19367);

(statearr_19444[(15)] = inst_19368);

(statearr_19444[(16)] = inst_19390);

return statearr_19444;
})();
var statearr_19445_19488 = state_19424__$1;
(statearr_19445_19488[(2)] = null);

(statearr_19445_19488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (3))){
var inst_19422 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19424__$1,inst_19422);
} else {
if((state_val_19425 === (12))){
var inst_19399 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19446_19489 = state_19424__$1;
(statearr_19446_19489[(2)] = inst_19399);

(statearr_19446_19489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (2))){
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19424__$1,(4),ch);
} else {
if((state_val_19425 === (23))){
var state_19424__$1 = state_19424;
var statearr_19447_19490 = state_19424__$1;
(statearr_19447_19490[(2)] = null);

(statearr_19447_19490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (19))){
var inst_19355 = (state_19424[(8)]);
var inst_19405 = (state_19424[(11)]);
var inst_19407 = cljs.core.async.muxch_STAR_.call(null,inst_19405);
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19424__$1,(22),inst_19407,inst_19355);
} else {
if((state_val_19425 === (11))){
var inst_19379 = (state_19424[(10)]);
var inst_19365 = (state_19424[(13)]);
var inst_19379__$1 = cljs.core.seq.call(null,inst_19365);
var state_19424__$1 = (function (){var statearr_19448 = state_19424;
(statearr_19448[(10)] = inst_19379__$1);

return statearr_19448;
})();
if(inst_19379__$1){
var statearr_19449_19491 = state_19424__$1;
(statearr_19449_19491[(1)] = (13));

} else {
var statearr_19450_19492 = state_19424__$1;
(statearr_19450_19492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (9))){
var inst_19401 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19451_19493 = state_19424__$1;
(statearr_19451_19493[(2)] = inst_19401);

(statearr_19451_19493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (5))){
var inst_19362 = cljs.core.deref.call(null,mults);
var inst_19363 = cljs.core.vals.call(null,inst_19362);
var inst_19364 = cljs.core.seq.call(null,inst_19363);
var inst_19365 = inst_19364;
var inst_19366 = null;
var inst_19367 = (0);
var inst_19368 = (0);
var state_19424__$1 = (function (){var statearr_19452 = state_19424;
(statearr_19452[(12)] = inst_19366);

(statearr_19452[(13)] = inst_19365);

(statearr_19452[(14)] = inst_19367);

(statearr_19452[(15)] = inst_19368);

return statearr_19452;
})();
var statearr_19453_19494 = state_19424__$1;
(statearr_19453_19494[(2)] = null);

(statearr_19453_19494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (14))){
var state_19424__$1 = state_19424;
var statearr_19457_19495 = state_19424__$1;
(statearr_19457_19495[(2)] = null);

(statearr_19457_19495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (16))){
var inst_19379 = (state_19424[(10)]);
var inst_19383 = cljs.core.chunk_first.call(null,inst_19379);
var inst_19384 = cljs.core.chunk_rest.call(null,inst_19379);
var inst_19385 = cljs.core.count.call(null,inst_19383);
var inst_19365 = inst_19384;
var inst_19366 = inst_19383;
var inst_19367 = inst_19385;
var inst_19368 = (0);
var state_19424__$1 = (function (){var statearr_19458 = state_19424;
(statearr_19458[(12)] = inst_19366);

(statearr_19458[(13)] = inst_19365);

(statearr_19458[(14)] = inst_19367);

(statearr_19458[(15)] = inst_19368);

return statearr_19458;
})();
var statearr_19459_19496 = state_19424__$1;
(statearr_19459_19496[(2)] = null);

(statearr_19459_19496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (10))){
var inst_19366 = (state_19424[(12)]);
var inst_19365 = (state_19424[(13)]);
var inst_19367 = (state_19424[(14)]);
var inst_19368 = (state_19424[(15)]);
var inst_19373 = cljs.core._nth.call(null,inst_19366,inst_19368);
var inst_19374 = cljs.core.async.muxch_STAR_.call(null,inst_19373);
var inst_19375 = cljs.core.async.close_BANG_.call(null,inst_19374);
var inst_19376 = (inst_19368 + (1));
var tmp19454 = inst_19366;
var tmp19455 = inst_19365;
var tmp19456 = inst_19367;
var inst_19365__$1 = tmp19455;
var inst_19366__$1 = tmp19454;
var inst_19367__$1 = tmp19456;
var inst_19368__$1 = inst_19376;
var state_19424__$1 = (function (){var statearr_19460 = state_19424;
(statearr_19460[(17)] = inst_19375);

(statearr_19460[(12)] = inst_19366__$1);

(statearr_19460[(13)] = inst_19365__$1);

(statearr_19460[(14)] = inst_19367__$1);

(statearr_19460[(15)] = inst_19368__$1);

return statearr_19460;
})();
var statearr_19461_19497 = state_19424__$1;
(statearr_19461_19497[(2)] = null);

(statearr_19461_19497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (18))){
var inst_19394 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19462_19498 = state_19424__$1;
(statearr_19462_19498[(2)] = inst_19394);

(statearr_19462_19498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19425 === (8))){
var inst_19367 = (state_19424[(14)]);
var inst_19368 = (state_19424[(15)]);
var inst_19370 = (inst_19368 < inst_19367);
var inst_19371 = inst_19370;
var state_19424__$1 = state_19424;
if(cljs.core.truth_(inst_19371)){
var statearr_19463_19499 = state_19424__$1;
(statearr_19463_19499[(1)] = (10));

} else {
var statearr_19464_19500 = state_19424__$1;
(statearr_19464_19500[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___19472,mults,ensure_mult,p))
;
return ((function (switch__6457__auto__,c__6513__auto___19472,mults,ensure_mult,p){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_19468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19468[(0)] = state_machine__6458__auto__);

(statearr_19468[(1)] = (1));

return statearr_19468;
});
var state_machine__6458__auto____1 = (function (state_19424){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_19424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e19469){if((e19469 instanceof Object)){
var ex__6461__auto__ = e19469;
var statearr_19470_19501 = state_19424;
(statearr_19470_19501[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19502 = state_19424;
state_19424 = G__19502;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_19424){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_19424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___19472,mults,ensure_mult,p))
})();
var state__6515__auto__ = (function (){var statearr_19471 = f__6514__auto__.call(null);
(statearr_19471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___19472);

return statearr_19471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___19472,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6513__auto___19639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___19639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___19639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19609){
var state_val_19610 = (state_19609[(1)]);
if((state_val_19610 === (7))){
var state_19609__$1 = state_19609;
var statearr_19611_19640 = state_19609__$1;
(statearr_19611_19640[(2)] = null);

(statearr_19611_19640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (1))){
var state_19609__$1 = state_19609;
var statearr_19612_19641 = state_19609__$1;
(statearr_19612_19641[(2)] = null);

(statearr_19612_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (4))){
var inst_19573 = (state_19609[(7)]);
var inst_19575 = (inst_19573 < cnt);
var state_19609__$1 = state_19609;
if(cljs.core.truth_(inst_19575)){
var statearr_19613_19642 = state_19609__$1;
(statearr_19613_19642[(1)] = (6));

} else {
var statearr_19614_19643 = state_19609__$1;
(statearr_19614_19643[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (15))){
var inst_19605 = (state_19609[(2)]);
var state_19609__$1 = state_19609;
var statearr_19615_19644 = state_19609__$1;
(statearr_19615_19644[(2)] = inst_19605);

(statearr_19615_19644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (13))){
var inst_19598 = cljs.core.async.close_BANG_.call(null,out);
var state_19609__$1 = state_19609;
var statearr_19616_19645 = state_19609__$1;
(statearr_19616_19645[(2)] = inst_19598);

(statearr_19616_19645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (6))){
var state_19609__$1 = state_19609;
var statearr_19617_19646 = state_19609__$1;
(statearr_19617_19646[(2)] = null);

(statearr_19617_19646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (3))){
var inst_19607 = (state_19609[(2)]);
var state_19609__$1 = state_19609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19609__$1,inst_19607);
} else {
if((state_val_19610 === (12))){
var inst_19595 = (state_19609[(8)]);
var inst_19595__$1 = (state_19609[(2)]);
var inst_19596 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19595__$1);
var state_19609__$1 = (function (){var statearr_19618 = state_19609;
(statearr_19618[(8)] = inst_19595__$1);

return statearr_19618;
})();
if(cljs.core.truth_(inst_19596)){
var statearr_19619_19647 = state_19609__$1;
(statearr_19619_19647[(1)] = (13));

} else {
var statearr_19620_19648 = state_19609__$1;
(statearr_19620_19648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (2))){
var inst_19572 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19573 = (0);
var state_19609__$1 = (function (){var statearr_19621 = state_19609;
(statearr_19621[(9)] = inst_19572);

(statearr_19621[(7)] = inst_19573);

return statearr_19621;
})();
var statearr_19622_19649 = state_19609__$1;
(statearr_19622_19649[(2)] = null);

(statearr_19622_19649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (11))){
var inst_19573 = (state_19609[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19609,(10),Object,null,(9));
var inst_19582 = chs__$1.call(null,inst_19573);
var inst_19583 = done.call(null,inst_19573);
var inst_19584 = cljs.core.async.take_BANG_.call(null,inst_19582,inst_19583);
var state_19609__$1 = state_19609;
var statearr_19623_19650 = state_19609__$1;
(statearr_19623_19650[(2)] = inst_19584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (9))){
var inst_19573 = (state_19609[(7)]);
var inst_19586 = (state_19609[(2)]);
var inst_19587 = (inst_19573 + (1));
var inst_19573__$1 = inst_19587;
var state_19609__$1 = (function (){var statearr_19624 = state_19609;
(statearr_19624[(7)] = inst_19573__$1);

(statearr_19624[(10)] = inst_19586);

return statearr_19624;
})();
var statearr_19625_19651 = state_19609__$1;
(statearr_19625_19651[(2)] = null);

(statearr_19625_19651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (5))){
var inst_19593 = (state_19609[(2)]);
var state_19609__$1 = (function (){var statearr_19626 = state_19609;
(statearr_19626[(11)] = inst_19593);

return statearr_19626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19609__$1,(12),dchan);
} else {
if((state_val_19610 === (14))){
var inst_19595 = (state_19609[(8)]);
var inst_19600 = cljs.core.apply.call(null,f,inst_19595);
var state_19609__$1 = state_19609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19609__$1,(16),out,inst_19600);
} else {
if((state_val_19610 === (16))){
var inst_19602 = (state_19609[(2)]);
var state_19609__$1 = (function (){var statearr_19627 = state_19609;
(statearr_19627[(12)] = inst_19602);

return statearr_19627;
})();
var statearr_19628_19652 = state_19609__$1;
(statearr_19628_19652[(2)] = null);

(statearr_19628_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (10))){
var inst_19577 = (state_19609[(2)]);
var inst_19578 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19609__$1 = (function (){var statearr_19629 = state_19609;
(statearr_19629[(13)] = inst_19577);

return statearr_19629;
})();
var statearr_19630_19653 = state_19609__$1;
(statearr_19630_19653[(2)] = inst_19578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (8))){
var inst_19591 = (state_19609[(2)]);
var state_19609__$1 = state_19609;
var statearr_19631_19654 = state_19609__$1;
(statearr_19631_19654[(2)] = inst_19591);

(statearr_19631_19654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___19639,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6457__auto__,c__6513__auto___19639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_19635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19635[(0)] = state_machine__6458__auto__);

(statearr_19635[(1)] = (1));

return statearr_19635;
});
var state_machine__6458__auto____1 = (function (state_19609){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_19609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e19636){if((e19636 instanceof Object)){
var ex__6461__auto__ = e19636;
var statearr_19637_19655 = state_19609;
(statearr_19637_19655[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19656 = state_19609;
state_19609 = G__19656;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_19609){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_19609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___19639,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6515__auto__ = (function (){var statearr_19638 = f__6514__auto__.call(null);
(statearr_19638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___19639);

return statearr_19638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___19639,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6513__auto___19764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___19764,out){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___19764,out){
return (function (state_19740){
var state_val_19741 = (state_19740[(1)]);
if((state_val_19741 === (7))){
var inst_19719 = (state_19740[(7)]);
var inst_19720 = (state_19740[(8)]);
var inst_19719__$1 = (state_19740[(2)]);
var inst_19720__$1 = cljs.core.nth.call(null,inst_19719__$1,(0),null);
var inst_19721 = cljs.core.nth.call(null,inst_19719__$1,(1),null);
var inst_19722 = (inst_19720__$1 == null);
var state_19740__$1 = (function (){var statearr_19742 = state_19740;
(statearr_19742[(7)] = inst_19719__$1);

(statearr_19742[(8)] = inst_19720__$1);

(statearr_19742[(9)] = inst_19721);

return statearr_19742;
})();
if(cljs.core.truth_(inst_19722)){
var statearr_19743_19765 = state_19740__$1;
(statearr_19743_19765[(1)] = (8));

} else {
var statearr_19744_19766 = state_19740__$1;
(statearr_19744_19766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (1))){
var inst_19711 = cljs.core.vec.call(null,chs);
var inst_19712 = inst_19711;
var state_19740__$1 = (function (){var statearr_19745 = state_19740;
(statearr_19745[(10)] = inst_19712);

return statearr_19745;
})();
var statearr_19746_19767 = state_19740__$1;
(statearr_19746_19767[(2)] = null);

(statearr_19746_19767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (4))){
var inst_19712 = (state_19740[(10)]);
var state_19740__$1 = state_19740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19740__$1,(7),inst_19712);
} else {
if((state_val_19741 === (6))){
var inst_19736 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19747_19768 = state_19740__$1;
(statearr_19747_19768[(2)] = inst_19736);

(statearr_19747_19768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (3))){
var inst_19738 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19740__$1,inst_19738);
} else {
if((state_val_19741 === (2))){
var inst_19712 = (state_19740[(10)]);
var inst_19714 = cljs.core.count.call(null,inst_19712);
var inst_19715 = (inst_19714 > (0));
var state_19740__$1 = state_19740;
if(cljs.core.truth_(inst_19715)){
var statearr_19749_19769 = state_19740__$1;
(statearr_19749_19769[(1)] = (4));

} else {
var statearr_19750_19770 = state_19740__$1;
(statearr_19750_19770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (11))){
var inst_19712 = (state_19740[(10)]);
var inst_19729 = (state_19740[(2)]);
var tmp19748 = inst_19712;
var inst_19712__$1 = tmp19748;
var state_19740__$1 = (function (){var statearr_19751 = state_19740;
(statearr_19751[(10)] = inst_19712__$1);

(statearr_19751[(11)] = inst_19729);

return statearr_19751;
})();
var statearr_19752_19771 = state_19740__$1;
(statearr_19752_19771[(2)] = null);

(statearr_19752_19771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (9))){
var inst_19720 = (state_19740[(8)]);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19740__$1,(11),out,inst_19720);
} else {
if((state_val_19741 === (5))){
var inst_19734 = cljs.core.async.close_BANG_.call(null,out);
var state_19740__$1 = state_19740;
var statearr_19753_19772 = state_19740__$1;
(statearr_19753_19772[(2)] = inst_19734);

(statearr_19753_19772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (10))){
var inst_19732 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19754_19773 = state_19740__$1;
(statearr_19754_19773[(2)] = inst_19732);

(statearr_19754_19773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (8))){
var inst_19719 = (state_19740[(7)]);
var inst_19712 = (state_19740[(10)]);
var inst_19720 = (state_19740[(8)]);
var inst_19721 = (state_19740[(9)]);
var inst_19724 = (function (){var c = inst_19721;
var v = inst_19720;
var vec__19717 = inst_19719;
var cs = inst_19712;
return ((function (c,v,vec__19717,cs,inst_19719,inst_19712,inst_19720,inst_19721,state_val_19741,c__6513__auto___19764,out){
return (function (p1__19657_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19657_SHARP_);
});
;})(c,v,vec__19717,cs,inst_19719,inst_19712,inst_19720,inst_19721,state_val_19741,c__6513__auto___19764,out))
})();
var inst_19725 = cljs.core.filterv.call(null,inst_19724,inst_19712);
var inst_19712__$1 = inst_19725;
var state_19740__$1 = (function (){var statearr_19755 = state_19740;
(statearr_19755[(10)] = inst_19712__$1);

return statearr_19755;
})();
var statearr_19756_19774 = state_19740__$1;
(statearr_19756_19774[(2)] = null);

(statearr_19756_19774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___19764,out))
;
return ((function (switch__6457__auto__,c__6513__auto___19764,out){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_19760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19760[(0)] = state_machine__6458__auto__);

(statearr_19760[(1)] = (1));

return statearr_19760;
});
var state_machine__6458__auto____1 = (function (state_19740){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_19740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e19761){if((e19761 instanceof Object)){
var ex__6461__auto__ = e19761;
var statearr_19762_19775 = state_19740;
(statearr_19762_19775[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19776 = state_19740;
state_19740 = G__19776;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_19740){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_19740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___19764,out))
})();
var state__6515__auto__ = (function (){var statearr_19763 = f__6514__auto__.call(null);
(statearr_19763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___19764);

return statearr_19763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___19764,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6513__auto___19869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___19869,out){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___19869,out){
return (function (state_19846){
var state_val_19847 = (state_19846[(1)]);
if((state_val_19847 === (7))){
var inst_19828 = (state_19846[(7)]);
var inst_19828__$1 = (state_19846[(2)]);
var inst_19829 = (inst_19828__$1 == null);
var inst_19830 = cljs.core.not.call(null,inst_19829);
var state_19846__$1 = (function (){var statearr_19848 = state_19846;
(statearr_19848[(7)] = inst_19828__$1);

return statearr_19848;
})();
if(inst_19830){
var statearr_19849_19870 = state_19846__$1;
(statearr_19849_19870[(1)] = (8));

} else {
var statearr_19850_19871 = state_19846__$1;
(statearr_19850_19871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (1))){
var inst_19823 = (0);
var state_19846__$1 = (function (){var statearr_19851 = state_19846;
(statearr_19851[(8)] = inst_19823);

return statearr_19851;
})();
var statearr_19852_19872 = state_19846__$1;
(statearr_19852_19872[(2)] = null);

(statearr_19852_19872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (4))){
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19846__$1,(7),ch);
} else {
if((state_val_19847 === (6))){
var inst_19841 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19853_19873 = state_19846__$1;
(statearr_19853_19873[(2)] = inst_19841);

(statearr_19853_19873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (3))){
var inst_19843 = (state_19846[(2)]);
var inst_19844 = cljs.core.async.close_BANG_.call(null,out);
var state_19846__$1 = (function (){var statearr_19854 = state_19846;
(statearr_19854[(9)] = inst_19843);

return statearr_19854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19846__$1,inst_19844);
} else {
if((state_val_19847 === (2))){
var inst_19823 = (state_19846[(8)]);
var inst_19825 = (inst_19823 < n);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19825)){
var statearr_19855_19874 = state_19846__$1;
(statearr_19855_19874[(1)] = (4));

} else {
var statearr_19856_19875 = state_19846__$1;
(statearr_19856_19875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (11))){
var inst_19823 = (state_19846[(8)]);
var inst_19833 = (state_19846[(2)]);
var inst_19834 = (inst_19823 + (1));
var inst_19823__$1 = inst_19834;
var state_19846__$1 = (function (){var statearr_19857 = state_19846;
(statearr_19857[(8)] = inst_19823__$1);

(statearr_19857[(10)] = inst_19833);

return statearr_19857;
})();
var statearr_19858_19876 = state_19846__$1;
(statearr_19858_19876[(2)] = null);

(statearr_19858_19876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (9))){
var state_19846__$1 = state_19846;
var statearr_19859_19877 = state_19846__$1;
(statearr_19859_19877[(2)] = null);

(statearr_19859_19877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (5))){
var state_19846__$1 = state_19846;
var statearr_19860_19878 = state_19846__$1;
(statearr_19860_19878[(2)] = null);

(statearr_19860_19878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (10))){
var inst_19838 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19861_19879 = state_19846__$1;
(statearr_19861_19879[(2)] = inst_19838);

(statearr_19861_19879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (8))){
var inst_19828 = (state_19846[(7)]);
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19846__$1,(11),out,inst_19828);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___19869,out))
;
return ((function (switch__6457__auto__,c__6513__auto___19869,out){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_19865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19865[(0)] = state_machine__6458__auto__);

(statearr_19865[(1)] = (1));

return statearr_19865;
});
var state_machine__6458__auto____1 = (function (state_19846){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_19846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e19866){if((e19866 instanceof Object)){
var ex__6461__auto__ = e19866;
var statearr_19867_19880 = state_19846;
(statearr_19867_19880[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19881 = state_19846;
state_19846 = G__19881;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_19846){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_19846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___19869,out))
})();
var state__6515__auto__ = (function (){var statearr_19868 = f__6514__auto__.call(null);
(statearr_19868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___19869);

return statearr_19868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___19869,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t19889 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19889 = (function (ch,f,map_LT_,meta19890){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19890 = meta19890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19892 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19892 = (function (fn1,_,meta19890,map_LT_,f,ch,meta19893){
this.fn1 = fn1;
this._ = _;
this.meta19890 = meta19890;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19893 = meta19893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19882_SHARP_){
return f1.call(null,(((p1__19882_SHARP_ == null))?null:self__.f.call(null,p1__19882_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19894){
var self__ = this;
var _19894__$1 = this;
return self__.meta19893;
});})(___$1))
;

cljs.core.async.t19892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19894,meta19893__$1){
var self__ = this;
var _19894__$1 = this;
return (new cljs.core.async.t19892(self__.fn1,self__._,self__.meta19890,self__.map_LT_,self__.f,self__.ch,meta19893__$1));
});})(___$1))
;

cljs.core.async.t19892.cljs$lang$type = true;

cljs.core.async.t19892.cljs$lang$ctorStr = "cljs.core.async/t19892";

cljs.core.async.t19892.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t19892");
});})(___$1))
;

cljs.core.async.__GT_t19892 = ((function (___$1){
return (function __GT_t19892(fn1__$1,___$2,meta19890__$1,map_LT___$1,f__$1,ch__$1,meta19893){
return (new cljs.core.async.t19892(fn1__$1,___$2,meta19890__$1,map_LT___$1,f__$1,ch__$1,meta19893));
});})(___$1))
;

}

return (new cljs.core.async.t19892(fn1,___$1,self__.meta19890,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3723__auto__ = ret;
if(cljs.core.truth_(and__3723__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3723__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19891){
var self__ = this;
var _19891__$1 = this;
return self__.meta19890;
});

cljs.core.async.t19889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19891,meta19890__$1){
var self__ = this;
var _19891__$1 = this;
return (new cljs.core.async.t19889(self__.ch,self__.f,self__.map_LT_,meta19890__$1));
});

cljs.core.async.t19889.cljs$lang$type = true;

cljs.core.async.t19889.cljs$lang$ctorStr = "cljs.core.async/t19889";

cljs.core.async.t19889.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t19889");
});

cljs.core.async.__GT_t19889 = (function __GT_t19889(ch__$1,f__$1,map_LT___$1,meta19890){
return (new cljs.core.async.t19889(ch__$1,f__$1,map_LT___$1,meta19890));
});

}

return (new cljs.core.async.t19889(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19898 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19898 = (function (ch,f,map_GT_,meta19899){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19899 = meta19899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19898.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19900){
var self__ = this;
var _19900__$1 = this;
return self__.meta19899;
});

cljs.core.async.t19898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19900,meta19899__$1){
var self__ = this;
var _19900__$1 = this;
return (new cljs.core.async.t19898(self__.ch,self__.f,self__.map_GT_,meta19899__$1));
});

cljs.core.async.t19898.cljs$lang$type = true;

cljs.core.async.t19898.cljs$lang$ctorStr = "cljs.core.async/t19898";

cljs.core.async.t19898.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t19898");
});

cljs.core.async.__GT_t19898 = (function __GT_t19898(ch__$1,f__$1,map_GT___$1,meta19899){
return (new cljs.core.async.t19898(ch__$1,f__$1,map_GT___$1,meta19899));
});

}

return (new cljs.core.async.t19898(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19904 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19904 = (function (ch,p,filter_GT_,meta19905){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19905 = meta19905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19906){
var self__ = this;
var _19906__$1 = this;
return self__.meta19905;
});

cljs.core.async.t19904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19906,meta19905__$1){
var self__ = this;
var _19906__$1 = this;
return (new cljs.core.async.t19904(self__.ch,self__.p,self__.filter_GT_,meta19905__$1));
});

cljs.core.async.t19904.cljs$lang$type = true;

cljs.core.async.t19904.cljs$lang$ctorStr = "cljs.core.async/t19904";

cljs.core.async.t19904.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cljs.core.async/t19904");
});

cljs.core.async.__GT_t19904 = (function __GT_t19904(ch__$1,p__$1,filter_GT___$1,meta19905){
return (new cljs.core.async.t19904(ch__$1,p__$1,filter_GT___$1,meta19905));
});

}

return (new cljs.core.async.t19904(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6513__auto___19989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___19989,out){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___19989,out){
return (function (state_19968){
var state_val_19969 = (state_19968[(1)]);
if((state_val_19969 === (7))){
var inst_19964 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19970_19990 = state_19968__$1;
(statearr_19970_19990[(2)] = inst_19964);

(statearr_19970_19990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (1))){
var state_19968__$1 = state_19968;
var statearr_19971_19991 = state_19968__$1;
(statearr_19971_19991[(2)] = null);

(statearr_19971_19991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (4))){
var inst_19950 = (state_19968[(7)]);
var inst_19950__$1 = (state_19968[(2)]);
var inst_19951 = (inst_19950__$1 == null);
var state_19968__$1 = (function (){var statearr_19972 = state_19968;
(statearr_19972[(7)] = inst_19950__$1);

return statearr_19972;
})();
if(cljs.core.truth_(inst_19951)){
var statearr_19973_19992 = state_19968__$1;
(statearr_19973_19992[(1)] = (5));

} else {
var statearr_19974_19993 = state_19968__$1;
(statearr_19974_19993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (6))){
var inst_19950 = (state_19968[(7)]);
var inst_19955 = p.call(null,inst_19950);
var state_19968__$1 = state_19968;
if(cljs.core.truth_(inst_19955)){
var statearr_19975_19994 = state_19968__$1;
(statearr_19975_19994[(1)] = (8));

} else {
var statearr_19976_19995 = state_19968__$1;
(statearr_19976_19995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (3))){
var inst_19966 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19968__$1,inst_19966);
} else {
if((state_val_19969 === (2))){
var state_19968__$1 = state_19968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19968__$1,(4),ch);
} else {
if((state_val_19969 === (11))){
var inst_19958 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19977_19996 = state_19968__$1;
(statearr_19977_19996[(2)] = inst_19958);

(statearr_19977_19996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (9))){
var state_19968__$1 = state_19968;
var statearr_19978_19997 = state_19968__$1;
(statearr_19978_19997[(2)] = null);

(statearr_19978_19997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (5))){
var inst_19953 = cljs.core.async.close_BANG_.call(null,out);
var state_19968__$1 = state_19968;
var statearr_19979_19998 = state_19968__$1;
(statearr_19979_19998[(2)] = inst_19953);

(statearr_19979_19998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (10))){
var inst_19961 = (state_19968[(2)]);
var state_19968__$1 = (function (){var statearr_19980 = state_19968;
(statearr_19980[(8)] = inst_19961);

return statearr_19980;
})();
var statearr_19981_19999 = state_19968__$1;
(statearr_19981_19999[(2)] = null);

(statearr_19981_19999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (8))){
var inst_19950 = (state_19968[(7)]);
var state_19968__$1 = state_19968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19968__$1,(11),out,inst_19950);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___19989,out))
;
return ((function (switch__6457__auto__,c__6513__auto___19989,out){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_19985 = [null,null,null,null,null,null,null,null,null];
(statearr_19985[(0)] = state_machine__6458__auto__);

(statearr_19985[(1)] = (1));

return statearr_19985;
});
var state_machine__6458__auto____1 = (function (state_19968){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_19968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e19986){if((e19986 instanceof Object)){
var ex__6461__auto__ = e19986;
var statearr_19987_20000 = state_19968;
(statearr_19987_20000[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20001 = state_19968;
state_19968 = G__20001;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_19968){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_19968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___19989,out))
})();
var state__6515__auto__ = (function (){var statearr_19988 = f__6514__auto__.call(null);
(statearr_19988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___19989);

return statearr_19988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___19989,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__){
return (function (state_20167){
var state_val_20168 = (state_20167[(1)]);
if((state_val_20168 === (7))){
var inst_20163 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20169_20210 = state_20167__$1;
(statearr_20169_20210[(2)] = inst_20163);

(statearr_20169_20210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (20))){
var inst_20133 = (state_20167[(7)]);
var inst_20144 = (state_20167[(2)]);
var inst_20145 = cljs.core.next.call(null,inst_20133);
var inst_20119 = inst_20145;
var inst_20120 = null;
var inst_20121 = (0);
var inst_20122 = (0);
var state_20167__$1 = (function (){var statearr_20170 = state_20167;
(statearr_20170[(8)] = inst_20122);

(statearr_20170[(9)] = inst_20119);

(statearr_20170[(10)] = inst_20121);

(statearr_20170[(11)] = inst_20120);

(statearr_20170[(12)] = inst_20144);

return statearr_20170;
})();
var statearr_20171_20211 = state_20167__$1;
(statearr_20171_20211[(2)] = null);

(statearr_20171_20211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (1))){
var state_20167__$1 = state_20167;
var statearr_20172_20212 = state_20167__$1;
(statearr_20172_20212[(2)] = null);

(statearr_20172_20212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (4))){
var inst_20108 = (state_20167[(13)]);
var inst_20108__$1 = (state_20167[(2)]);
var inst_20109 = (inst_20108__$1 == null);
var state_20167__$1 = (function (){var statearr_20173 = state_20167;
(statearr_20173[(13)] = inst_20108__$1);

return statearr_20173;
})();
if(cljs.core.truth_(inst_20109)){
var statearr_20174_20213 = state_20167__$1;
(statearr_20174_20213[(1)] = (5));

} else {
var statearr_20175_20214 = state_20167__$1;
(statearr_20175_20214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (15))){
var state_20167__$1 = state_20167;
var statearr_20179_20215 = state_20167__$1;
(statearr_20179_20215[(2)] = null);

(statearr_20179_20215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (21))){
var state_20167__$1 = state_20167;
var statearr_20180_20216 = state_20167__$1;
(statearr_20180_20216[(2)] = null);

(statearr_20180_20216[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (13))){
var inst_20122 = (state_20167[(8)]);
var inst_20119 = (state_20167[(9)]);
var inst_20121 = (state_20167[(10)]);
var inst_20120 = (state_20167[(11)]);
var inst_20129 = (state_20167[(2)]);
var inst_20130 = (inst_20122 + (1));
var tmp20176 = inst_20119;
var tmp20177 = inst_20121;
var tmp20178 = inst_20120;
var inst_20119__$1 = tmp20176;
var inst_20120__$1 = tmp20178;
var inst_20121__$1 = tmp20177;
var inst_20122__$1 = inst_20130;
var state_20167__$1 = (function (){var statearr_20181 = state_20167;
(statearr_20181[(8)] = inst_20122__$1);

(statearr_20181[(9)] = inst_20119__$1);

(statearr_20181[(14)] = inst_20129);

(statearr_20181[(10)] = inst_20121__$1);

(statearr_20181[(11)] = inst_20120__$1);

return statearr_20181;
})();
var statearr_20182_20217 = state_20167__$1;
(statearr_20182_20217[(2)] = null);

(statearr_20182_20217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (22))){
var state_20167__$1 = state_20167;
var statearr_20183_20218 = state_20167__$1;
(statearr_20183_20218[(2)] = null);

(statearr_20183_20218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (6))){
var inst_20108 = (state_20167[(13)]);
var inst_20117 = f.call(null,inst_20108);
var inst_20118 = cljs.core.seq.call(null,inst_20117);
var inst_20119 = inst_20118;
var inst_20120 = null;
var inst_20121 = (0);
var inst_20122 = (0);
var state_20167__$1 = (function (){var statearr_20184 = state_20167;
(statearr_20184[(8)] = inst_20122);

(statearr_20184[(9)] = inst_20119);

(statearr_20184[(10)] = inst_20121);

(statearr_20184[(11)] = inst_20120);

return statearr_20184;
})();
var statearr_20185_20219 = state_20167__$1;
(statearr_20185_20219[(2)] = null);

(statearr_20185_20219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (17))){
var inst_20133 = (state_20167[(7)]);
var inst_20137 = cljs.core.chunk_first.call(null,inst_20133);
var inst_20138 = cljs.core.chunk_rest.call(null,inst_20133);
var inst_20139 = cljs.core.count.call(null,inst_20137);
var inst_20119 = inst_20138;
var inst_20120 = inst_20137;
var inst_20121 = inst_20139;
var inst_20122 = (0);
var state_20167__$1 = (function (){var statearr_20186 = state_20167;
(statearr_20186[(8)] = inst_20122);

(statearr_20186[(9)] = inst_20119);

(statearr_20186[(10)] = inst_20121);

(statearr_20186[(11)] = inst_20120);

return statearr_20186;
})();
var statearr_20187_20220 = state_20167__$1;
(statearr_20187_20220[(2)] = null);

(statearr_20187_20220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (3))){
var inst_20165 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20167__$1,inst_20165);
} else {
if((state_val_20168 === (12))){
var inst_20153 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20188_20221 = state_20167__$1;
(statearr_20188_20221[(2)] = inst_20153);

(statearr_20188_20221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (2))){
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20167__$1,(4),in$);
} else {
if((state_val_20168 === (23))){
var inst_20161 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20189_20222 = state_20167__$1;
(statearr_20189_20222[(2)] = inst_20161);

(statearr_20189_20222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (19))){
var inst_20148 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20190_20223 = state_20167__$1;
(statearr_20190_20223[(2)] = inst_20148);

(statearr_20190_20223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (11))){
var inst_20133 = (state_20167[(7)]);
var inst_20119 = (state_20167[(9)]);
var inst_20133__$1 = cljs.core.seq.call(null,inst_20119);
var state_20167__$1 = (function (){var statearr_20191 = state_20167;
(statearr_20191[(7)] = inst_20133__$1);

return statearr_20191;
})();
if(inst_20133__$1){
var statearr_20192_20224 = state_20167__$1;
(statearr_20192_20224[(1)] = (14));

} else {
var statearr_20193_20225 = state_20167__$1;
(statearr_20193_20225[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (9))){
var inst_20155 = (state_20167[(2)]);
var inst_20156 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20167__$1 = (function (){var statearr_20194 = state_20167;
(statearr_20194[(15)] = inst_20155);

return statearr_20194;
})();
if(cljs.core.truth_(inst_20156)){
var statearr_20195_20226 = state_20167__$1;
(statearr_20195_20226[(1)] = (21));

} else {
var statearr_20196_20227 = state_20167__$1;
(statearr_20196_20227[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (5))){
var inst_20111 = cljs.core.async.close_BANG_.call(null,out);
var state_20167__$1 = state_20167;
var statearr_20197_20228 = state_20167__$1;
(statearr_20197_20228[(2)] = inst_20111);

(statearr_20197_20228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (14))){
var inst_20133 = (state_20167[(7)]);
var inst_20135 = cljs.core.chunked_seq_QMARK_.call(null,inst_20133);
var state_20167__$1 = state_20167;
if(inst_20135){
var statearr_20198_20229 = state_20167__$1;
(statearr_20198_20229[(1)] = (17));

} else {
var statearr_20199_20230 = state_20167__$1;
(statearr_20199_20230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (16))){
var inst_20151 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20200_20231 = state_20167__$1;
(statearr_20200_20231[(2)] = inst_20151);

(statearr_20200_20231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (10))){
var inst_20122 = (state_20167[(8)]);
var inst_20120 = (state_20167[(11)]);
var inst_20127 = cljs.core._nth.call(null,inst_20120,inst_20122);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20167__$1,(13),out,inst_20127);
} else {
if((state_val_20168 === (18))){
var inst_20133 = (state_20167[(7)]);
var inst_20142 = cljs.core.first.call(null,inst_20133);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20167__$1,(20),out,inst_20142);
} else {
if((state_val_20168 === (8))){
var inst_20122 = (state_20167[(8)]);
var inst_20121 = (state_20167[(10)]);
var inst_20124 = (inst_20122 < inst_20121);
var inst_20125 = inst_20124;
var state_20167__$1 = state_20167;
if(cljs.core.truth_(inst_20125)){
var statearr_20201_20232 = state_20167__$1;
(statearr_20201_20232[(1)] = (10));

} else {
var statearr_20202_20233 = state_20167__$1;
(statearr_20202_20233[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto__))
;
return ((function (switch__6457__auto__,c__6513__auto__){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_20206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20206[(0)] = state_machine__6458__auto__);

(statearr_20206[(1)] = (1));

return statearr_20206;
});
var state_machine__6458__auto____1 = (function (state_20167){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_20167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e20207){if((e20207 instanceof Object)){
var ex__6461__auto__ = e20207;
var statearr_20208_20234 = state_20167;
(statearr_20208_20234[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20235 = state_20167;
state_20167 = G__20235;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_20167){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_20167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__))
})();
var state__6515__auto__ = (function (){var statearr_20209 = f__6514__auto__.call(null);
(statearr_20209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_20209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__))
);

return c__6513__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6513__auto___20332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___20332,out){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___20332,out){
return (function (state_20307){
var state_val_20308 = (state_20307[(1)]);
if((state_val_20308 === (7))){
var inst_20302 = (state_20307[(2)]);
var state_20307__$1 = state_20307;
var statearr_20309_20333 = state_20307__$1;
(statearr_20309_20333[(2)] = inst_20302);

(statearr_20309_20333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (1))){
var inst_20284 = null;
var state_20307__$1 = (function (){var statearr_20310 = state_20307;
(statearr_20310[(7)] = inst_20284);

return statearr_20310;
})();
var statearr_20311_20334 = state_20307__$1;
(statearr_20311_20334[(2)] = null);

(statearr_20311_20334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (4))){
var inst_20287 = (state_20307[(8)]);
var inst_20287__$1 = (state_20307[(2)]);
var inst_20288 = (inst_20287__$1 == null);
var inst_20289 = cljs.core.not.call(null,inst_20288);
var state_20307__$1 = (function (){var statearr_20312 = state_20307;
(statearr_20312[(8)] = inst_20287__$1);

return statearr_20312;
})();
if(inst_20289){
var statearr_20313_20335 = state_20307__$1;
(statearr_20313_20335[(1)] = (5));

} else {
var statearr_20314_20336 = state_20307__$1;
(statearr_20314_20336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (6))){
var state_20307__$1 = state_20307;
var statearr_20315_20337 = state_20307__$1;
(statearr_20315_20337[(2)] = null);

(statearr_20315_20337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (3))){
var inst_20304 = (state_20307[(2)]);
var inst_20305 = cljs.core.async.close_BANG_.call(null,out);
var state_20307__$1 = (function (){var statearr_20316 = state_20307;
(statearr_20316[(9)] = inst_20304);

return statearr_20316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20307__$1,inst_20305);
} else {
if((state_val_20308 === (2))){
var state_20307__$1 = state_20307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20307__$1,(4),ch);
} else {
if((state_val_20308 === (11))){
var inst_20287 = (state_20307[(8)]);
var inst_20296 = (state_20307[(2)]);
var inst_20284 = inst_20287;
var state_20307__$1 = (function (){var statearr_20317 = state_20307;
(statearr_20317[(7)] = inst_20284);

(statearr_20317[(10)] = inst_20296);

return statearr_20317;
})();
var statearr_20318_20338 = state_20307__$1;
(statearr_20318_20338[(2)] = null);

(statearr_20318_20338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (9))){
var inst_20287 = (state_20307[(8)]);
var state_20307__$1 = state_20307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20307__$1,(11),out,inst_20287);
} else {
if((state_val_20308 === (5))){
var inst_20284 = (state_20307[(7)]);
var inst_20287 = (state_20307[(8)]);
var inst_20291 = cljs.core._EQ_.call(null,inst_20287,inst_20284);
var state_20307__$1 = state_20307;
if(inst_20291){
var statearr_20320_20339 = state_20307__$1;
(statearr_20320_20339[(1)] = (8));

} else {
var statearr_20321_20340 = state_20307__$1;
(statearr_20321_20340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (10))){
var inst_20299 = (state_20307[(2)]);
var state_20307__$1 = state_20307;
var statearr_20322_20341 = state_20307__$1;
(statearr_20322_20341[(2)] = inst_20299);

(statearr_20322_20341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20308 === (8))){
var inst_20284 = (state_20307[(7)]);
var tmp20319 = inst_20284;
var inst_20284__$1 = tmp20319;
var state_20307__$1 = (function (){var statearr_20323 = state_20307;
(statearr_20323[(7)] = inst_20284__$1);

return statearr_20323;
})();
var statearr_20324_20342 = state_20307__$1;
(statearr_20324_20342[(2)] = null);

(statearr_20324_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___20332,out))
;
return ((function (switch__6457__auto__,c__6513__auto___20332,out){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_20328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20328[(0)] = state_machine__6458__auto__);

(statearr_20328[(1)] = (1));

return statearr_20328;
});
var state_machine__6458__auto____1 = (function (state_20307){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_20307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e20329){if((e20329 instanceof Object)){
var ex__6461__auto__ = e20329;
var statearr_20330_20343 = state_20307;
(statearr_20330_20343[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20344 = state_20307;
state_20307 = G__20344;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_20307){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_20307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___20332,out))
})();
var state__6515__auto__ = (function (){var statearr_20331 = f__6514__auto__.call(null);
(statearr_20331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___20332);

return statearr_20331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___20332,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6513__auto___20479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___20479,out){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___20479,out){
return (function (state_20449){
var state_val_20450 = (state_20449[(1)]);
if((state_val_20450 === (7))){
var inst_20445 = (state_20449[(2)]);
var state_20449__$1 = state_20449;
var statearr_20451_20480 = state_20449__$1;
(statearr_20451_20480[(2)] = inst_20445);

(statearr_20451_20480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (1))){
var inst_20412 = (new Array(n));
var inst_20413 = inst_20412;
var inst_20414 = (0);
var state_20449__$1 = (function (){var statearr_20452 = state_20449;
(statearr_20452[(7)] = inst_20414);

(statearr_20452[(8)] = inst_20413);

return statearr_20452;
})();
var statearr_20453_20481 = state_20449__$1;
(statearr_20453_20481[(2)] = null);

(statearr_20453_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (4))){
var inst_20417 = (state_20449[(9)]);
var inst_20417__$1 = (state_20449[(2)]);
var inst_20418 = (inst_20417__$1 == null);
var inst_20419 = cljs.core.not.call(null,inst_20418);
var state_20449__$1 = (function (){var statearr_20454 = state_20449;
(statearr_20454[(9)] = inst_20417__$1);

return statearr_20454;
})();
if(inst_20419){
var statearr_20455_20482 = state_20449__$1;
(statearr_20455_20482[(1)] = (5));

} else {
var statearr_20456_20483 = state_20449__$1;
(statearr_20456_20483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (15))){
var inst_20439 = (state_20449[(2)]);
var state_20449__$1 = state_20449;
var statearr_20457_20484 = state_20449__$1;
(statearr_20457_20484[(2)] = inst_20439);

(statearr_20457_20484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (13))){
var state_20449__$1 = state_20449;
var statearr_20458_20485 = state_20449__$1;
(statearr_20458_20485[(2)] = null);

(statearr_20458_20485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (6))){
var inst_20414 = (state_20449[(7)]);
var inst_20435 = (inst_20414 > (0));
var state_20449__$1 = state_20449;
if(cljs.core.truth_(inst_20435)){
var statearr_20459_20486 = state_20449__$1;
(statearr_20459_20486[(1)] = (12));

} else {
var statearr_20460_20487 = state_20449__$1;
(statearr_20460_20487[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (3))){
var inst_20447 = (state_20449[(2)]);
var state_20449__$1 = state_20449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20449__$1,inst_20447);
} else {
if((state_val_20450 === (12))){
var inst_20413 = (state_20449[(8)]);
var inst_20437 = cljs.core.vec.call(null,inst_20413);
var state_20449__$1 = state_20449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20449__$1,(15),out,inst_20437);
} else {
if((state_val_20450 === (2))){
var state_20449__$1 = state_20449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20449__$1,(4),ch);
} else {
if((state_val_20450 === (11))){
var inst_20429 = (state_20449[(2)]);
var inst_20430 = (new Array(n));
var inst_20413 = inst_20430;
var inst_20414 = (0);
var state_20449__$1 = (function (){var statearr_20461 = state_20449;
(statearr_20461[(10)] = inst_20429);

(statearr_20461[(7)] = inst_20414);

(statearr_20461[(8)] = inst_20413);

return statearr_20461;
})();
var statearr_20462_20488 = state_20449__$1;
(statearr_20462_20488[(2)] = null);

(statearr_20462_20488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (9))){
var inst_20413 = (state_20449[(8)]);
var inst_20427 = cljs.core.vec.call(null,inst_20413);
var state_20449__$1 = state_20449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20449__$1,(11),out,inst_20427);
} else {
if((state_val_20450 === (5))){
var inst_20417 = (state_20449[(9)]);
var inst_20414 = (state_20449[(7)]);
var inst_20422 = (state_20449[(11)]);
var inst_20413 = (state_20449[(8)]);
var inst_20421 = (inst_20413[inst_20414] = inst_20417);
var inst_20422__$1 = (inst_20414 + (1));
var inst_20423 = (inst_20422__$1 < n);
var state_20449__$1 = (function (){var statearr_20463 = state_20449;
(statearr_20463[(12)] = inst_20421);

(statearr_20463[(11)] = inst_20422__$1);

return statearr_20463;
})();
if(cljs.core.truth_(inst_20423)){
var statearr_20464_20489 = state_20449__$1;
(statearr_20464_20489[(1)] = (8));

} else {
var statearr_20465_20490 = state_20449__$1;
(statearr_20465_20490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (14))){
var inst_20442 = (state_20449[(2)]);
var inst_20443 = cljs.core.async.close_BANG_.call(null,out);
var state_20449__$1 = (function (){var statearr_20467 = state_20449;
(statearr_20467[(13)] = inst_20442);

return statearr_20467;
})();
var statearr_20468_20491 = state_20449__$1;
(statearr_20468_20491[(2)] = inst_20443);

(statearr_20468_20491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (10))){
var inst_20433 = (state_20449[(2)]);
var state_20449__$1 = state_20449;
var statearr_20469_20492 = state_20449__$1;
(statearr_20469_20492[(2)] = inst_20433);

(statearr_20469_20492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20450 === (8))){
var inst_20422 = (state_20449[(11)]);
var inst_20413 = (state_20449[(8)]);
var tmp20466 = inst_20413;
var inst_20413__$1 = tmp20466;
var inst_20414 = inst_20422;
var state_20449__$1 = (function (){var statearr_20470 = state_20449;
(statearr_20470[(7)] = inst_20414);

(statearr_20470[(8)] = inst_20413__$1);

return statearr_20470;
})();
var statearr_20471_20493 = state_20449__$1;
(statearr_20471_20493[(2)] = null);

(statearr_20471_20493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___20479,out))
;
return ((function (switch__6457__auto__,c__6513__auto___20479,out){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_20475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20475[(0)] = state_machine__6458__auto__);

(statearr_20475[(1)] = (1));

return statearr_20475;
});
var state_machine__6458__auto____1 = (function (state_20449){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_20449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e20476){if((e20476 instanceof Object)){
var ex__6461__auto__ = e20476;
var statearr_20477_20494 = state_20449;
(statearr_20477_20494[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20495 = state_20449;
state_20449 = G__20495;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_20449){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_20449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___20479,out))
})();
var state__6515__auto__ = (function (){var statearr_20478 = f__6514__auto__.call(null);
(statearr_20478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___20479);

return statearr_20478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___20479,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6513__auto___20638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto___20638,out){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto___20638,out){
return (function (state_20608){
var state_val_20609 = (state_20608[(1)]);
if((state_val_20609 === (7))){
var inst_20604 = (state_20608[(2)]);
var state_20608__$1 = state_20608;
var statearr_20610_20639 = state_20608__$1;
(statearr_20610_20639[(2)] = inst_20604);

(statearr_20610_20639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (1))){
var inst_20567 = [];
var inst_20568 = inst_20567;
var inst_20569 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20608__$1 = (function (){var statearr_20611 = state_20608;
(statearr_20611[(7)] = inst_20569);

(statearr_20611[(8)] = inst_20568);

return statearr_20611;
})();
var statearr_20612_20640 = state_20608__$1;
(statearr_20612_20640[(2)] = null);

(statearr_20612_20640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (4))){
var inst_20572 = (state_20608[(9)]);
var inst_20572__$1 = (state_20608[(2)]);
var inst_20573 = (inst_20572__$1 == null);
var inst_20574 = cljs.core.not.call(null,inst_20573);
var state_20608__$1 = (function (){var statearr_20613 = state_20608;
(statearr_20613[(9)] = inst_20572__$1);

return statearr_20613;
})();
if(inst_20574){
var statearr_20614_20641 = state_20608__$1;
(statearr_20614_20641[(1)] = (5));

} else {
var statearr_20615_20642 = state_20608__$1;
(statearr_20615_20642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (15))){
var inst_20598 = (state_20608[(2)]);
var state_20608__$1 = state_20608;
var statearr_20616_20643 = state_20608__$1;
(statearr_20616_20643[(2)] = inst_20598);

(statearr_20616_20643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (13))){
var state_20608__$1 = state_20608;
var statearr_20617_20644 = state_20608__$1;
(statearr_20617_20644[(2)] = null);

(statearr_20617_20644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (6))){
var inst_20568 = (state_20608[(8)]);
var inst_20593 = inst_20568.length;
var inst_20594 = (inst_20593 > (0));
var state_20608__$1 = state_20608;
if(cljs.core.truth_(inst_20594)){
var statearr_20618_20645 = state_20608__$1;
(statearr_20618_20645[(1)] = (12));

} else {
var statearr_20619_20646 = state_20608__$1;
(statearr_20619_20646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (3))){
var inst_20606 = (state_20608[(2)]);
var state_20608__$1 = state_20608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20608__$1,inst_20606);
} else {
if((state_val_20609 === (12))){
var inst_20568 = (state_20608[(8)]);
var inst_20596 = cljs.core.vec.call(null,inst_20568);
var state_20608__$1 = state_20608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20608__$1,(15),out,inst_20596);
} else {
if((state_val_20609 === (2))){
var state_20608__$1 = state_20608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20608__$1,(4),ch);
} else {
if((state_val_20609 === (11))){
var inst_20572 = (state_20608[(9)]);
var inst_20576 = (state_20608[(10)]);
var inst_20586 = (state_20608[(2)]);
var inst_20587 = [];
var inst_20588 = inst_20587.push(inst_20572);
var inst_20568 = inst_20587;
var inst_20569 = inst_20576;
var state_20608__$1 = (function (){var statearr_20620 = state_20608;
(statearr_20620[(7)] = inst_20569);

(statearr_20620[(11)] = inst_20588);

(statearr_20620[(8)] = inst_20568);

(statearr_20620[(12)] = inst_20586);

return statearr_20620;
})();
var statearr_20621_20647 = state_20608__$1;
(statearr_20621_20647[(2)] = null);

(statearr_20621_20647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (9))){
var inst_20568 = (state_20608[(8)]);
var inst_20584 = cljs.core.vec.call(null,inst_20568);
var state_20608__$1 = state_20608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20608__$1,(11),out,inst_20584);
} else {
if((state_val_20609 === (5))){
var inst_20572 = (state_20608[(9)]);
var inst_20569 = (state_20608[(7)]);
var inst_20576 = (state_20608[(10)]);
var inst_20576__$1 = f.call(null,inst_20572);
var inst_20577 = cljs.core._EQ_.call(null,inst_20576__$1,inst_20569);
var inst_20578 = cljs.core.keyword_identical_QMARK_.call(null,inst_20569,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20579 = (inst_20577) || (inst_20578);
var state_20608__$1 = (function (){var statearr_20622 = state_20608;
(statearr_20622[(10)] = inst_20576__$1);

return statearr_20622;
})();
if(cljs.core.truth_(inst_20579)){
var statearr_20623_20648 = state_20608__$1;
(statearr_20623_20648[(1)] = (8));

} else {
var statearr_20624_20649 = state_20608__$1;
(statearr_20624_20649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (14))){
var inst_20601 = (state_20608[(2)]);
var inst_20602 = cljs.core.async.close_BANG_.call(null,out);
var state_20608__$1 = (function (){var statearr_20626 = state_20608;
(statearr_20626[(13)] = inst_20601);

return statearr_20626;
})();
var statearr_20627_20650 = state_20608__$1;
(statearr_20627_20650[(2)] = inst_20602);

(statearr_20627_20650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (10))){
var inst_20591 = (state_20608[(2)]);
var state_20608__$1 = state_20608;
var statearr_20628_20651 = state_20608__$1;
(statearr_20628_20651[(2)] = inst_20591);

(statearr_20628_20651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20609 === (8))){
var inst_20572 = (state_20608[(9)]);
var inst_20568 = (state_20608[(8)]);
var inst_20576 = (state_20608[(10)]);
var inst_20581 = inst_20568.push(inst_20572);
var tmp20625 = inst_20568;
var inst_20568__$1 = tmp20625;
var inst_20569 = inst_20576;
var state_20608__$1 = (function (){var statearr_20629 = state_20608;
(statearr_20629[(7)] = inst_20569);

(statearr_20629[(8)] = inst_20568__$1);

(statearr_20629[(14)] = inst_20581);

return statearr_20629;
})();
var statearr_20630_20652 = state_20608__$1;
(statearr_20630_20652[(2)] = null);

(statearr_20630_20652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6513__auto___20638,out))
;
return ((function (switch__6457__auto__,c__6513__auto___20638,out){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_20634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20634[(0)] = state_machine__6458__auto__);

(statearr_20634[(1)] = (1));

return statearr_20634;
});
var state_machine__6458__auto____1 = (function (state_20608){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_20608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e20635){if((e20635 instanceof Object)){
var ex__6461__auto__ = e20635;
var statearr_20636_20653 = state_20608;
(statearr_20636_20653[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20654 = state_20608;
state_20608 = G__20654;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_20608){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_20608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto___20638,out))
})();
var state__6515__auto__ = (function (){var statearr_20637 = f__6514__auto__.call(null);
(statearr_20637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___20638);

return statearr_20637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto___20638,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map