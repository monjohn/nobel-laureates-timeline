// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t22580 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22580 = (function (f,fn_handler,meta22581){
this.f = f;
this.fn_handler = fn_handler;
this.meta22581 = meta22581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22580.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22582){
var self__ = this;
var _22582__$1 = this;
return self__.meta22581;
});

cljs.core.async.t22580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22582,meta22581__$1){
var self__ = this;
var _22582__$1 = this;
return (new cljs.core.async.t22580(self__.f,self__.fn_handler,meta22581__$1));
});

cljs.core.async.t22580.cljs$lang$type = true;

cljs.core.async.t22580.cljs$lang$ctorStr = "cljs.core.async/t22580";

cljs.core.async.t22580.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t22580");
});

cljs.core.async.__GT_t22580 = (function __GT_t22580(f__$1,fn_handler__$1,meta22581){
return (new cljs.core.async.t22580(f__$1,fn_handler__$1,meta22581));
});

}

return (new cljs.core.async.t22580(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__22584 = buff;
if(G__22584){
var bit__4416__auto__ = null;
if(cljs.core.truth_((function (){var or__3735__auto__ = bit__4416__auto__;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return G__22584.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22584.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22584);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22584);
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
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
return cljs.core.async.impl.timers.timeout(msecs);
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
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_22601 = (function (){var G__22598 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22598) : cljs.core.deref.call(null,G__22598));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22599_22602 = val_22601;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22599_22602) : fn1.call(null,G__22599_22602));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22601,ret){
return (function (){
var G__22600 = val_22601;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22600) : fn1.call(null,G__22600));
});})(val_22601,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__22611 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22611) : cljs.core.deref.call(null,G__22611));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__22612 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22612) : cljs.core.deref.call(null,G__22612));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22613_22615 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22613_22615) : fn1.call(null,G__22613_22615));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22614 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22614) : fn1.call(null,G__22614));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4622__auto___22616 = n;
var x_22617 = (0);
while(true){
if((x_22617 < n__4622__auto___22616)){
(a[x_22617] = (0));

var G__22618 = (x_22617 + (1));
x_22617 = G__22618;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22619 = (i + (1));
i = G__22619;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22627 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22627) : cljs.core.atom.call(null,G__22627));
})();
if(typeof cljs.core.async.t22628 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22628 = (function (flag,alt_flag,meta22629){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22629 = meta22629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22628.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22631 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22631) : cljs.core.deref.call(null,G__22631));
});})(flag))
;

cljs.core.async.t22628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22632_22634 = self__.flag;
var G__22633_22635 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22632_22634,G__22633_22635) : cljs.core.reset_BANG_.call(null,G__22632_22634,G__22633_22635));

return true;
});})(flag))
;

cljs.core.async.t22628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22630){
var self__ = this;
var _22630__$1 = this;
return self__.meta22629;
});})(flag))
;

cljs.core.async.t22628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22630,meta22629__$1){
var self__ = this;
var _22630__$1 = this;
return (new cljs.core.async.t22628(self__.flag,self__.alt_flag,meta22629__$1));
});})(flag))
;

cljs.core.async.t22628.cljs$lang$type = true;

cljs.core.async.t22628.cljs$lang$ctorStr = "cljs.core.async/t22628";

cljs.core.async.t22628.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t22628");
});})(flag))
;

cljs.core.async.__GT_t22628 = ((function (flag){
return (function __GT_t22628(flag__$1,alt_flag__$1,meta22629){
return (new cljs.core.async.t22628(flag__$1,alt_flag__$1,meta22629));
});})(flag))
;

}

return (new cljs.core.async.t22628(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22639 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22639 = (function (cb,flag,alt_handler,meta22640){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22640 = meta22640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22639.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22641){
var self__ = this;
var _22641__$1 = this;
return self__.meta22640;
});

cljs.core.async.t22639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22641,meta22640__$1){
var self__ = this;
var _22641__$1 = this;
return (new cljs.core.async.t22639(self__.cb,self__.flag,self__.alt_handler,meta22640__$1));
});

cljs.core.async.t22639.cljs$lang$type = true;

cljs.core.async.t22639.cljs$lang$ctorStr = "cljs.core.async/t22639";

cljs.core.async.t22639.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t22639");
});

cljs.core.async.__GT_t22639 = (function __GT_t22639(cb__$1,flag__$1,alt_handler__$1,meta22640){
return (new cljs.core.async.t22639(cb__$1,flag__$1,alt_handler__$1,meta22640));
});

}

return (new cljs.core.async.t22639(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22649 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22649) : port.call(null,G__22649));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22650 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22650) : port.call(null,G__22650));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22642_SHARP_){
var G__22651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22642_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22651) : fret.call(null,G__22651));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22643_SHARP_){
var G__22652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22643_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22652) : fret.call(null,G__22652));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22653 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22653) : cljs.core.deref.call(null,G__22653));
})(),(function (){var or__3735__auto__ = wport;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22654 = (i + (1));
i = G__22654;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3723__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3723__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3723__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
var alts_BANG___delegate = function (ports,p__22655){
var map__22657 = p__22655;
var map__22657__$1 = ((cljs.core.seq_QMARK_(map__22657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22657):map__22657);
var opts = map__22657__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22655 = null;
if (arguments.length > 1) {
var G__22658__i = 0, G__22658__a = new Array(arguments.length -  1);
while (G__22658__i < G__22658__a.length) {G__22658__a[G__22658__i] = arguments[G__22658__i + 1]; ++G__22658__i;}
  p__22655 = new cljs.core.IndexedSeq(G__22658__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__22655);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22659){
var ports = cljs.core.first(arglist__22659);
var p__22655 = cljs.core.rest(arglist__22659);
return alts_BANG___delegate(ports,p__22655);
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
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11164__auto___22757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___22757){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___22757){
return (function (state_22733){
var state_val_22734 = (state_22733[(1)]);
if((state_val_22734 === (7))){
var inst_22729 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22735_22758 = state_22733__$1;
(statearr_22735_22758[(2)] = inst_22729);

(statearr_22735_22758[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (1))){
var state_22733__$1 = state_22733;
var statearr_22736_22759 = state_22733__$1;
(statearr_22736_22759[(2)] = null);

(statearr_22736_22759[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (4))){
var inst_22712 = (state_22733[(7)]);
var inst_22712__$1 = (state_22733[(2)]);
var inst_22713 = (inst_22712__$1 == null);
var state_22733__$1 = (function (){var statearr_22737 = state_22733;
(statearr_22737[(7)] = inst_22712__$1);

return statearr_22737;
})();
if(cljs.core.truth_(inst_22713)){
var statearr_22738_22760 = state_22733__$1;
(statearr_22738_22760[(1)] = (5));

} else {
var statearr_22739_22761 = state_22733__$1;
(statearr_22739_22761[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (13))){
var state_22733__$1 = state_22733;
var statearr_22740_22762 = state_22733__$1;
(statearr_22740_22762[(2)] = null);

(statearr_22740_22762[(1)] = (14));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (6))){
var inst_22712 = (state_22733[(7)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22733__$1,(11),to,inst_22712);
} else {
if((state_val_22734 === (3))){
var inst_22731 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22733__$1,inst_22731);
} else {
if((state_val_22734 === (12))){
var state_22733__$1 = state_22733;
var statearr_22741_22763 = state_22733__$1;
(statearr_22741_22763[(2)] = null);

(statearr_22741_22763[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (2))){
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22733__$1,(4),from);
} else {
if((state_val_22734 === (11))){
var inst_22722 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
if(cljs.core.truth_(inst_22722)){
var statearr_22742_22764 = state_22733__$1;
(statearr_22742_22764[(1)] = (12));

} else {
var statearr_22743_22765 = state_22733__$1;
(statearr_22743_22765[(1)] = (13));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (9))){
var state_22733__$1 = state_22733;
var statearr_22744_22766 = state_22733__$1;
(statearr_22744_22766[(2)] = null);

(statearr_22744_22766[(1)] = (10));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (5))){
var state_22733__$1 = state_22733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22745_22767 = state_22733__$1;
(statearr_22745_22767[(1)] = (8));

} else {
var statearr_22746_22768 = state_22733__$1;
(statearr_22746_22768[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (14))){
var inst_22727 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22747_22769 = state_22733__$1;
(statearr_22747_22769[(2)] = inst_22727);

(statearr_22747_22769[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (10))){
var inst_22719 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22748_22770 = state_22733__$1;
(statearr_22748_22770[(2)] = inst_22719);

(statearr_22748_22770[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22734 === (8))){
var inst_22716 = cljs.core.async.close_BANG_(to);
var state_22733__$1 = state_22733;
var statearr_22749_22771 = state_22733__$1;
(statearr_22749_22771[(2)] = inst_22716);

(statearr_22749_22771[(1)] = (10));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___22757))
;
return ((function (switch__11084__auto__,c__11164__auto___22757){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_22753 = [null,null,null,null,null,null,null,null];
(statearr_22753[(0)] = state_machine__11085__auto__);

(statearr_22753[(1)] = (1));

return statearr_22753;
});
var state_machine__11085__auto____1 = (function (state_22733){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_22733);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e22754){if((e22754 instanceof Object)){
var ex__11088__auto__ = e22754;
var statearr_22755_22772 = state_22733;
(statearr_22755_22772[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22733);

return cljs.core.constant$keyword$31;
} else {
throw e22754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__22773 = state_22733;
state_22733 = G__22773;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_22733){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_22733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___22757))
})();
var state__11166__auto__ = (function (){var statearr_22756 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_22756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___22757);

return statearr_22756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___22757))
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

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22959){
var vec__22960 = p__22959;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22960,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22960,(1),null);
var job = vec__22960;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11164__auto___23144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___23144,res,vec__22960,v,p,job,jobs,results){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___23144,res,vec__22960,v,p,job,jobs,results){
return (function (state_22965){
var state_val_22966 = (state_22965[(1)]);
if((state_val_22966 === (2))){
var inst_22962 = (state_22965[(2)]);
var inst_22963 = cljs.core.async.close_BANG_(res);
var state_22965__$1 = (function (){var statearr_22967 = state_22965;
(statearr_22967[(7)] = inst_22962);

return statearr_22967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22965__$1,inst_22963);
} else {
if((state_val_22966 === (1))){
var state_22965__$1 = state_22965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22965__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11164__auto___23144,res,vec__22960,v,p,job,jobs,results))
;
return ((function (switch__11084__auto__,c__11164__auto___23144,res,vec__22960,v,p,job,jobs,results){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_22971 = [null,null,null,null,null,null,null,null];
(statearr_22971[(0)] = state_machine__11085__auto__);

(statearr_22971[(1)] = (1));

return statearr_22971;
});
var state_machine__11085__auto____1 = (function (state_22965){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_22965);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e22972){if((e22972 instanceof Object)){
var ex__11088__auto__ = e22972;
var statearr_22973_23145 = state_22965;
(statearr_22973_23145[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22965);

return cljs.core.constant$keyword$31;
} else {
throw e22972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23146 = state_22965;
state_22965 = G__23146;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_22965){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_22965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___23144,res,vec__22960,v,p,job,jobs,results))
})();
var state__11166__auto__ = (function (){var statearr_22974 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_22974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___23144);

return statearr_22974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___23144,res,vec__22960,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22975){
var vec__22976 = p__22975;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(1),null);
var job = vec__22976;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22977_23147 = v;
var G__22978_23148 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22977_23147,G__22978_23148) : xf.call(null,G__22977_23147,G__22978_23148));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4622__auto___23149 = n;
var __23150 = (0);
while(true){
if((__23150 < n__4622__auto___23149)){
var G__22979_23151 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22979_23151) {
case "async":
var c__11164__auto___23153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23150,c__11164__auto___23153,G__22979_23151,n__4622__auto___23149,jobs,results,process,async){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (__23150,c__11164__auto___23153,G__22979_23151,n__4622__auto___23149,jobs,results,process,async){
return (function (state_22992){
var state_val_22993 = (state_22992[(1)]);
if((state_val_22993 === (7))){
var inst_22988 = (state_22992[(2)]);
var state_22992__$1 = state_22992;
var statearr_22994_23154 = state_22992__$1;
(statearr_22994_23154[(2)] = inst_22988);

(statearr_22994_23154[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22993 === (6))){
var state_22992__$1 = state_22992;
var statearr_22995_23155 = state_22992__$1;
(statearr_22995_23155[(2)] = null);

(statearr_22995_23155[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22993 === (5))){
var state_22992__$1 = state_22992;
var statearr_22996_23156 = state_22992__$1;
(statearr_22996_23156[(2)] = null);

(statearr_22996_23156[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22993 === (4))){
var inst_22982 = (state_22992[(2)]);
var inst_22983 = async(inst_22982);
var state_22992__$1 = state_22992;
if(cljs.core.truth_(inst_22983)){
var statearr_22997_23157 = state_22992__$1;
(statearr_22997_23157[(1)] = (5));

} else {
var statearr_22998_23158 = state_22992__$1;
(statearr_22998_23158[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_22993 === (3))){
var inst_22990 = (state_22992[(2)]);
var state_22992__$1 = state_22992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22992__$1,inst_22990);
} else {
if((state_val_22993 === (2))){
var state_22992__$1 = state_22992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22992__$1,(4),jobs);
} else {
if((state_val_22993 === (1))){
var state_22992__$1 = state_22992;
var statearr_22999_23159 = state_22992__$1;
(statearr_22999_23159[(2)] = null);

(statearr_22999_23159[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
return null;
}
}
}
}
}
}
}
});})(__23150,c__11164__auto___23153,G__22979_23151,n__4622__auto___23149,jobs,results,process,async))
;
return ((function (__23150,switch__11084__auto__,c__11164__auto___23153,G__22979_23151,n__4622__auto___23149,jobs,results,process,async){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23003 = [null,null,null,null,null,null,null];
(statearr_23003[(0)] = state_machine__11085__auto__);

(statearr_23003[(1)] = (1));

return statearr_23003;
});
var state_machine__11085__auto____1 = (function (state_22992){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_22992);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23004){if((e23004 instanceof Object)){
var ex__11088__auto__ = e23004;
var statearr_23005_23160 = state_22992;
(statearr_23005_23160[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22992);

return cljs.core.constant$keyword$31;
} else {
throw e23004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23161 = state_22992;
state_22992 = G__23161;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_22992){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_22992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(__23150,switch__11084__auto__,c__11164__auto___23153,G__22979_23151,n__4622__auto___23149,jobs,results,process,async))
})();
var state__11166__auto__ = (function (){var statearr_23006 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___23153);

return statearr_23006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(__23150,c__11164__auto___23153,G__22979_23151,n__4622__auto___23149,jobs,results,process,async))
);


break;
case "compute":
var c__11164__auto___23162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23150,c__11164__auto___23162,G__22979_23151,n__4622__auto___23149,jobs,results,process,async){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (__23150,c__11164__auto___23162,G__22979_23151,n__4622__auto___23149,jobs,results,process,async){
return (function (state_23019){
var state_val_23020 = (state_23019[(1)]);
if((state_val_23020 === (7))){
var inst_23015 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23021_23163 = state_23019__$1;
(statearr_23021_23163[(2)] = inst_23015);

(statearr_23021_23163[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23020 === (6))){
var state_23019__$1 = state_23019;
var statearr_23022_23164 = state_23019__$1;
(statearr_23022_23164[(2)] = null);

(statearr_23022_23164[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23020 === (5))){
var state_23019__$1 = state_23019;
var statearr_23023_23165 = state_23019__$1;
(statearr_23023_23165[(2)] = null);

(statearr_23023_23165[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23020 === (4))){
var inst_23009 = (state_23019[(2)]);
var inst_23010 = process(inst_23009);
var state_23019__$1 = state_23019;
if(cljs.core.truth_(inst_23010)){
var statearr_23024_23166 = state_23019__$1;
(statearr_23024_23166[(1)] = (5));

} else {
var statearr_23025_23167 = state_23019__$1;
(statearr_23025_23167[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23020 === (3))){
var inst_23017 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23019__$1,inst_23017);
} else {
if((state_val_23020 === (2))){
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23019__$1,(4),jobs);
} else {
if((state_val_23020 === (1))){
var state_23019__$1 = state_23019;
var statearr_23026_23168 = state_23019__$1;
(statearr_23026_23168[(2)] = null);

(statearr_23026_23168[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
return null;
}
}
}
}
}
}
}
});})(__23150,c__11164__auto___23162,G__22979_23151,n__4622__auto___23149,jobs,results,process,async))
;
return ((function (__23150,switch__11084__auto__,c__11164__auto___23162,G__22979_23151,n__4622__auto___23149,jobs,results,process,async){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23030 = [null,null,null,null,null,null,null];
(statearr_23030[(0)] = state_machine__11085__auto__);

(statearr_23030[(1)] = (1));

return statearr_23030;
});
var state_machine__11085__auto____1 = (function (state_23019){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23019);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object)){
var ex__11088__auto__ = e23031;
var statearr_23032_23169 = state_23019;
(statearr_23032_23169[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23019);

return cljs.core.constant$keyword$31;
} else {
throw e23031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23170 = state_23019;
state_23019 = G__23170;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23019){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(__23150,switch__11084__auto__,c__11164__auto___23162,G__22979_23151,n__4622__auto___23149,jobs,results,process,async))
})();
var state__11166__auto__ = (function (){var statearr_23033 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___23162);

return statearr_23033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(__23150,c__11164__auto___23162,G__22979_23151,n__4622__auto___23149,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23171 = (__23150 + (1));
__23150 = G__23171;
continue;
} else {
}
break;
}

var c__11164__auto___23172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___23172,jobs,results,process,async){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___23172,jobs,results,process,async){
return (function (state_23055){
var state_val_23056 = (state_23055[(1)]);
if((state_val_23056 === (9))){
var inst_23048 = (state_23055[(2)]);
var state_23055__$1 = (function (){var statearr_23057 = state_23055;
(statearr_23057[(7)] = inst_23048);

return statearr_23057;
})();
var statearr_23058_23173 = state_23055__$1;
(statearr_23058_23173[(2)] = null);

(statearr_23058_23173[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23056 === (8))){
var inst_23041 = (state_23055[(8)]);
var inst_23046 = (state_23055[(2)]);
var state_23055__$1 = (function (){var statearr_23059 = state_23055;
(statearr_23059[(9)] = inst_23046);

return statearr_23059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23055__$1,(9),results,inst_23041);
} else {
if((state_val_23056 === (7))){
var inst_23051 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
var statearr_23060_23174 = state_23055__$1;
(statearr_23060_23174[(2)] = inst_23051);

(statearr_23060_23174[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23056 === (6))){
var inst_23041 = (state_23055[(8)]);
var inst_23036 = (state_23055[(10)]);
var inst_23041__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23043 = [inst_23036,inst_23041__$1];
var inst_23044 = (new cljs.core.PersistentVector(null,2,(5),inst_23042,inst_23043,null));
var state_23055__$1 = (function (){var statearr_23061 = state_23055;
(statearr_23061[(8)] = inst_23041__$1);

return statearr_23061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23055__$1,(8),jobs,inst_23044);
} else {
if((state_val_23056 === (5))){
var inst_23039 = cljs.core.async.close_BANG_(jobs);
var state_23055__$1 = state_23055;
var statearr_23062_23175 = state_23055__$1;
(statearr_23062_23175[(2)] = inst_23039);

(statearr_23062_23175[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23056 === (4))){
var inst_23036 = (state_23055[(10)]);
var inst_23036__$1 = (state_23055[(2)]);
var inst_23037 = (inst_23036__$1 == null);
var state_23055__$1 = (function (){var statearr_23063 = state_23055;
(statearr_23063[(10)] = inst_23036__$1);

return statearr_23063;
})();
if(cljs.core.truth_(inst_23037)){
var statearr_23064_23176 = state_23055__$1;
(statearr_23064_23176[(1)] = (5));

} else {
var statearr_23065_23177 = state_23055__$1;
(statearr_23065_23177[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23056 === (3))){
var inst_23053 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23055__$1,inst_23053);
} else {
if((state_val_23056 === (2))){
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23055__$1,(4),from);
} else {
if((state_val_23056 === (1))){
var state_23055__$1 = state_23055;
var statearr_23066_23178 = state_23055__$1;
(statearr_23066_23178[(2)] = null);

(statearr_23066_23178[(1)] = (2));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___23172,jobs,results,process,async))
;
return ((function (switch__11084__auto__,c__11164__auto___23172,jobs,results,process,async){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23070[(0)] = state_machine__11085__auto__);

(statearr_23070[(1)] = (1));

return statearr_23070;
});
var state_machine__11085__auto____1 = (function (state_23055){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23055);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23071){if((e23071 instanceof Object)){
var ex__11088__auto__ = e23071;
var statearr_23072_23179 = state_23055;
(statearr_23072_23179[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23055);

return cljs.core.constant$keyword$31;
} else {
throw e23071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23180 = state_23055;
state_23055 = G__23180;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23055){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___23172,jobs,results,process,async))
})();
var state__11166__auto__ = (function (){var statearr_23073 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___23172);

return statearr_23073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___23172,jobs,results,process,async))
);


var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__,jobs,results,process,async){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__,jobs,results,process,async){
return (function (state_23111){
var state_val_23112 = (state_23111[(1)]);
if((state_val_23112 === (7))){
var inst_23107 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
var statearr_23113_23181 = state_23111__$1;
(statearr_23113_23181[(2)] = inst_23107);

(statearr_23113_23181[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (20))){
var state_23111__$1 = state_23111;
var statearr_23114_23182 = state_23111__$1;
(statearr_23114_23182[(2)] = null);

(statearr_23114_23182[(1)] = (21));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (1))){
var state_23111__$1 = state_23111;
var statearr_23115_23183 = state_23111__$1;
(statearr_23115_23183[(2)] = null);

(statearr_23115_23183[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (4))){
var inst_23076 = (state_23111[(7)]);
var inst_23076__$1 = (state_23111[(2)]);
var inst_23077 = (inst_23076__$1 == null);
var state_23111__$1 = (function (){var statearr_23116 = state_23111;
(statearr_23116[(7)] = inst_23076__$1);

return statearr_23116;
})();
if(cljs.core.truth_(inst_23077)){
var statearr_23117_23184 = state_23111__$1;
(statearr_23117_23184[(1)] = (5));

} else {
var statearr_23118_23185 = state_23111__$1;
(statearr_23118_23185[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (15))){
var inst_23089 = (state_23111[(8)]);
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23111__$1,(18),to,inst_23089);
} else {
if((state_val_23112 === (21))){
var inst_23102 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
var statearr_23119_23186 = state_23111__$1;
(statearr_23119_23186[(2)] = inst_23102);

(statearr_23119_23186[(1)] = (13));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (13))){
var inst_23104 = (state_23111[(2)]);
var state_23111__$1 = (function (){var statearr_23120 = state_23111;
(statearr_23120[(9)] = inst_23104);

return statearr_23120;
})();
var statearr_23121_23187 = state_23111__$1;
(statearr_23121_23187[(2)] = null);

(statearr_23121_23187[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (6))){
var inst_23076 = (state_23111[(7)]);
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23111__$1,(11),inst_23076);
} else {
if((state_val_23112 === (17))){
var inst_23097 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
if(cljs.core.truth_(inst_23097)){
var statearr_23122_23188 = state_23111__$1;
(statearr_23122_23188[(1)] = (19));

} else {
var statearr_23123_23189 = state_23111__$1;
(statearr_23123_23189[(1)] = (20));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (3))){
var inst_23109 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23111__$1,inst_23109);
} else {
if((state_val_23112 === (12))){
var inst_23086 = (state_23111[(10)]);
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23111__$1,(14),inst_23086);
} else {
if((state_val_23112 === (2))){
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23111__$1,(4),results);
} else {
if((state_val_23112 === (19))){
var state_23111__$1 = state_23111;
var statearr_23124_23190 = state_23111__$1;
(statearr_23124_23190[(2)] = null);

(statearr_23124_23190[(1)] = (12));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (11))){
var inst_23086 = (state_23111[(2)]);
var state_23111__$1 = (function (){var statearr_23125 = state_23111;
(statearr_23125[(10)] = inst_23086);

return statearr_23125;
})();
var statearr_23126_23191 = state_23111__$1;
(statearr_23126_23191[(2)] = null);

(statearr_23126_23191[(1)] = (12));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (9))){
var state_23111__$1 = state_23111;
var statearr_23127_23192 = state_23111__$1;
(statearr_23127_23192[(2)] = null);

(statearr_23127_23192[(1)] = (10));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (5))){
var state_23111__$1 = state_23111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23128_23193 = state_23111__$1;
(statearr_23128_23193[(1)] = (8));

} else {
var statearr_23129_23194 = state_23111__$1;
(statearr_23129_23194[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (14))){
var inst_23089 = (state_23111[(8)]);
var inst_23091 = (state_23111[(11)]);
var inst_23089__$1 = (state_23111[(2)]);
var inst_23090 = (inst_23089__$1 == null);
var inst_23091__$1 = cljs.core.not(inst_23090);
var state_23111__$1 = (function (){var statearr_23130 = state_23111;
(statearr_23130[(8)] = inst_23089__$1);

(statearr_23130[(11)] = inst_23091__$1);

return statearr_23130;
})();
if(inst_23091__$1){
var statearr_23131_23195 = state_23111__$1;
(statearr_23131_23195[(1)] = (15));

} else {
var statearr_23132_23196 = state_23111__$1;
(statearr_23132_23196[(1)] = (16));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (16))){
var inst_23091 = (state_23111[(11)]);
var state_23111__$1 = state_23111;
var statearr_23133_23197 = state_23111__$1;
(statearr_23133_23197[(2)] = inst_23091);

(statearr_23133_23197[(1)] = (17));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (10))){
var inst_23083 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
var statearr_23134_23198 = state_23111__$1;
(statearr_23134_23198[(2)] = inst_23083);

(statearr_23134_23198[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (18))){
var inst_23094 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
var statearr_23135_23199 = state_23111__$1;
(statearr_23135_23199[(2)] = inst_23094);

(statearr_23135_23199[(1)] = (17));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23112 === (8))){
var inst_23080 = cljs.core.async.close_BANG_(to);
var state_23111__$1 = state_23111;
var statearr_23136_23200 = state_23111__$1;
(statearr_23136_23200[(2)] = inst_23080);

(statearr_23136_23200[(1)] = (10));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto__,jobs,results,process,async))
;
return ((function (switch__11084__auto__,c__11164__auto__,jobs,results,process,async){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23140 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23140[(0)] = state_machine__11085__auto__);

(statearr_23140[(1)] = (1));

return statearr_23140;
});
var state_machine__11085__auto____1 = (function (state_23111){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23111);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23141){if((e23141 instanceof Object)){
var ex__11088__auto__ = e23141;
var statearr_23142_23201 = state_23111;
(statearr_23142_23201[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23111);

return cljs.core.constant$keyword$31;
} else {
throw e23141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23202 = state_23111;
state_23111 = G__23202;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23111){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__,jobs,results,process,async))
})();
var state__11166__auto__ = (function (){var statearr_23143 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_23143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__,jobs,results,process,async))
);

return c__11164__auto__;
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
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$38);
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
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$39);
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
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11164__auto___23325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___23325,tc,fc){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___23325,tc,fc){
return (function (state_23299){
var state_val_23300 = (state_23299[(1)]);
if((state_val_23300 === (7))){
var inst_23295 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23301_23326 = state_23299__$1;
(statearr_23301_23326[(2)] = inst_23295);

(statearr_23301_23326[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (1))){
var state_23299__$1 = state_23299;
var statearr_23302_23327 = state_23299__$1;
(statearr_23302_23327[(2)] = null);

(statearr_23302_23327[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (4))){
var inst_23276 = (state_23299[(7)]);
var inst_23276__$1 = (state_23299[(2)]);
var inst_23277 = (inst_23276__$1 == null);
var state_23299__$1 = (function (){var statearr_23303 = state_23299;
(statearr_23303[(7)] = inst_23276__$1);

return statearr_23303;
})();
if(cljs.core.truth_(inst_23277)){
var statearr_23304_23328 = state_23299__$1;
(statearr_23304_23328[(1)] = (5));

} else {
var statearr_23305_23329 = state_23299__$1;
(statearr_23305_23329[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (13))){
var state_23299__$1 = state_23299;
var statearr_23306_23330 = state_23299__$1;
(statearr_23306_23330[(2)] = null);

(statearr_23306_23330[(1)] = (14));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (6))){
var inst_23276 = (state_23299[(7)]);
var inst_23282 = (function (){var G__23307 = inst_23276;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23307) : p.call(null,G__23307));
})();
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23282)){
var statearr_23308_23331 = state_23299__$1;
(statearr_23308_23331[(1)] = (9));

} else {
var statearr_23309_23332 = state_23299__$1;
(statearr_23309_23332[(1)] = (10));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (3))){
var inst_23297 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23299__$1,inst_23297);
} else {
if((state_val_23300 === (12))){
var state_23299__$1 = state_23299;
var statearr_23310_23333 = state_23299__$1;
(statearr_23310_23333[(2)] = null);

(statearr_23310_23333[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (2))){
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23299__$1,(4),ch);
} else {
if((state_val_23300 === (11))){
var inst_23276 = (state_23299[(7)]);
var inst_23286 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23299__$1,(8),inst_23286,inst_23276);
} else {
if((state_val_23300 === (9))){
var state_23299__$1 = state_23299;
var statearr_23311_23334 = state_23299__$1;
(statearr_23311_23334[(2)] = tc);

(statearr_23311_23334[(1)] = (11));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (5))){
var inst_23279 = cljs.core.async.close_BANG_(tc);
var inst_23280 = cljs.core.async.close_BANG_(fc);
var state_23299__$1 = (function (){var statearr_23312 = state_23299;
(statearr_23312[(8)] = inst_23279);

return statearr_23312;
})();
var statearr_23313_23335 = state_23299__$1;
(statearr_23313_23335[(2)] = inst_23280);

(statearr_23313_23335[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (14))){
var inst_23293 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23314_23336 = state_23299__$1;
(statearr_23314_23336[(2)] = inst_23293);

(statearr_23314_23336[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (10))){
var state_23299__$1 = state_23299;
var statearr_23315_23337 = state_23299__$1;
(statearr_23315_23337[(2)] = fc);

(statearr_23315_23337[(1)] = (11));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23300 === (8))){
var inst_23288 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23288)){
var statearr_23316_23338 = state_23299__$1;
(statearr_23316_23338[(1)] = (12));

} else {
var statearr_23317_23339 = state_23299__$1;
(statearr_23317_23339[(1)] = (13));

}

return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___23325,tc,fc))
;
return ((function (switch__11084__auto__,c__11164__auto___23325,tc,fc){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23321 = [null,null,null,null,null,null,null,null,null];
(statearr_23321[(0)] = state_machine__11085__auto__);

(statearr_23321[(1)] = (1));

return statearr_23321;
});
var state_machine__11085__auto____1 = (function (state_23299){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23299);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23322){if((e23322 instanceof Object)){
var ex__11088__auto__ = e23322;
var statearr_23323_23340 = state_23299;
(statearr_23323_23340[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23299);

return cljs.core.constant$keyword$31;
} else {
throw e23322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23341 = state_23299;
state_23299 = G__23341;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23299){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___23325,tc,fc))
})();
var state__11166__auto__ = (function (){var statearr_23324 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___23325);

return statearr_23324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___23325,tc,fc))
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
var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__){
return (function (state_23390){
var state_val_23391 = (state_23390[(1)]);
if((state_val_23391 === (7))){
var inst_23386 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
var statearr_23392_23410 = state_23390__$1;
(statearr_23392_23410[(2)] = inst_23386);

(statearr_23392_23410[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23391 === (6))){
var inst_23379 = (state_23390[(7)]);
var inst_23376 = (state_23390[(8)]);
var inst_23383 = (function (){var G__23393 = inst_23376;
var G__23394 = inst_23379;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23393,G__23394) : f.call(null,G__23393,G__23394));
})();
var inst_23376__$1 = inst_23383;
var state_23390__$1 = (function (){var statearr_23395 = state_23390;
(statearr_23395[(8)] = inst_23376__$1);

return statearr_23395;
})();
var statearr_23396_23411 = state_23390__$1;
(statearr_23396_23411[(2)] = null);

(statearr_23396_23411[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23391 === (5))){
var inst_23376 = (state_23390[(8)]);
var state_23390__$1 = state_23390;
var statearr_23397_23412 = state_23390__$1;
(statearr_23397_23412[(2)] = inst_23376);

(statearr_23397_23412[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23391 === (4))){
var inst_23379 = (state_23390[(7)]);
var inst_23379__$1 = (state_23390[(2)]);
var inst_23380 = (inst_23379__$1 == null);
var state_23390__$1 = (function (){var statearr_23398 = state_23390;
(statearr_23398[(7)] = inst_23379__$1);

return statearr_23398;
})();
if(cljs.core.truth_(inst_23380)){
var statearr_23399_23413 = state_23390__$1;
(statearr_23399_23413[(1)] = (5));

} else {
var statearr_23400_23414 = state_23390__$1;
(statearr_23400_23414[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23391 === (3))){
var inst_23388 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23390__$1,inst_23388);
} else {
if((state_val_23391 === (2))){
var state_23390__$1 = state_23390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23390__$1,(4),ch);
} else {
if((state_val_23391 === (1))){
var inst_23376 = init;
var state_23390__$1 = (function (){var statearr_23401 = state_23390;
(statearr_23401[(8)] = inst_23376);

return statearr_23401;
})();
var statearr_23402_23415 = state_23390__$1;
(statearr_23402_23415[(2)] = null);

(statearr_23402_23415[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11164__auto__))
;
return ((function (switch__11084__auto__,c__11164__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23406 = [null,null,null,null,null,null,null,null,null];
(statearr_23406[(0)] = state_machine__11085__auto__);

(statearr_23406[(1)] = (1));

return statearr_23406;
});
var state_machine__11085__auto____1 = (function (state_23390){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23390);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23407){if((e23407 instanceof Object)){
var ex__11088__auto__ = e23407;
var statearr_23408_23416 = state_23390;
(statearr_23408_23416[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23390);

return cljs.core.constant$keyword$31;
} else {
throw e23407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23417 = state_23390;
state_23390 = G__23417;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23390){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__))
})();
var state__11166__auto__ = (function (){var statearr_23409 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_23409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__))
);

return c__11164__auto__;
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
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__){
return (function (state_23494){
var state_val_23495 = (state_23494[(1)]);
if((state_val_23495 === (7))){
var inst_23476 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
var statearr_23496_23519 = state_23494__$1;
(statearr_23496_23519[(2)] = inst_23476);

(statearr_23496_23519[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (1))){
var inst_23470 = cljs.core.seq(coll);
var inst_23471 = inst_23470;
var state_23494__$1 = (function (){var statearr_23497 = state_23494;
(statearr_23497[(7)] = inst_23471);

return statearr_23497;
})();
var statearr_23498_23520 = state_23494__$1;
(statearr_23498_23520[(2)] = null);

(statearr_23498_23520[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (4))){
var inst_23471 = (state_23494[(7)]);
var inst_23474 = cljs.core.first(inst_23471);
var state_23494__$1 = state_23494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23494__$1,(7),ch,inst_23474);
} else {
if((state_val_23495 === (13))){
var inst_23488 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
var statearr_23499_23521 = state_23494__$1;
(statearr_23499_23521[(2)] = inst_23488);

(statearr_23499_23521[(1)] = (10));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (6))){
var inst_23479 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
if(cljs.core.truth_(inst_23479)){
var statearr_23500_23522 = state_23494__$1;
(statearr_23500_23522[(1)] = (8));

} else {
var statearr_23501_23523 = state_23494__$1;
(statearr_23501_23523[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (3))){
var inst_23492 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23494__$1,inst_23492);
} else {
if((state_val_23495 === (12))){
var state_23494__$1 = state_23494;
var statearr_23502_23524 = state_23494__$1;
(statearr_23502_23524[(2)] = null);

(statearr_23502_23524[(1)] = (13));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (2))){
var inst_23471 = (state_23494[(7)]);
var state_23494__$1 = state_23494;
if(cljs.core.truth_(inst_23471)){
var statearr_23503_23525 = state_23494__$1;
(statearr_23503_23525[(1)] = (4));

} else {
var statearr_23504_23526 = state_23494__$1;
(statearr_23504_23526[(1)] = (5));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (11))){
var inst_23485 = cljs.core.async.close_BANG_(ch);
var state_23494__$1 = state_23494;
var statearr_23505_23527 = state_23494__$1;
(statearr_23505_23527[(2)] = inst_23485);

(statearr_23505_23527[(1)] = (13));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (9))){
var state_23494__$1 = state_23494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23506_23528 = state_23494__$1;
(statearr_23506_23528[(1)] = (11));

} else {
var statearr_23507_23529 = state_23494__$1;
(statearr_23507_23529[(1)] = (12));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (5))){
var inst_23471 = (state_23494[(7)]);
var state_23494__$1 = state_23494;
var statearr_23508_23530 = state_23494__$1;
(statearr_23508_23530[(2)] = inst_23471);

(statearr_23508_23530[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (10))){
var inst_23490 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
var statearr_23509_23531 = state_23494__$1;
(statearr_23509_23531[(2)] = inst_23490);

(statearr_23509_23531[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23495 === (8))){
var inst_23471 = (state_23494[(7)]);
var inst_23481 = cljs.core.next(inst_23471);
var inst_23471__$1 = inst_23481;
var state_23494__$1 = (function (){var statearr_23510 = state_23494;
(statearr_23510[(7)] = inst_23471__$1);

return statearr_23510;
})();
var statearr_23511_23532 = state_23494__$1;
(statearr_23511_23532[(2)] = null);

(statearr_23511_23532[(1)] = (2));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto__))
;
return ((function (switch__11084__auto__,c__11164__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_23515 = [null,null,null,null,null,null,null,null];
(statearr_23515[(0)] = state_machine__11085__auto__);

(statearr_23515[(1)] = (1));

return statearr_23515;
});
var state_machine__11085__auto____1 = (function (state_23494){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23494);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e23516){if((e23516 instanceof Object)){
var ex__11088__auto__ = e23516;
var statearr_23517_23533 = state_23494;
(statearr_23517_23533[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23494);

return cljs.core.constant$keyword$31;
} else {
throw e23516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__23534 = state_23494;
state_23494 = G__23534;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23494){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__))
})();
var state__11166__auto__ = (function (){var statearr_23518 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_23518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_23518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__))
);

return c__11164__auto__;
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
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj23536 = {};
return obj23536;
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
return (function (){var or__3735__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23540 = x__4379__auto__;
return goog.typeOf(G__23540);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23542 = {};
return obj23542;
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
return (function (){var or__3735__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23546 = x__4379__auto__;
return goog.typeOf(G__23546);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (function (){var or__3735__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23550 = x__4379__auto__;
return goog.typeOf(G__23550);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (function (){var or__3735__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23554 = x__4379__auto__;
return goog.typeOf(G__23554);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__23784 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23784) : cljs.core.atom.call(null,G__23784));
})();
var m = (function (){
if(typeof cljs.core.async.t23785 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23785 = (function (cs,ch,mult,meta23786){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23786 = meta23786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23785.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23785.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23785.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23785.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23788_24013 = self__.cs;
var G__23789_24014 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23788_24013,G__23789_24014) : cljs.core.reset_BANG_.call(null,G__23788_24013,G__23789_24014));

return null;
});})(cs))
;

cljs.core.async.t23785.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23787){
var self__ = this;
var _23787__$1 = this;
return self__.meta23786;
});})(cs))
;

cljs.core.async.t23785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23787,meta23786__$1){
var self__ = this;
var _23787__$1 = this;
return (new cljs.core.async.t23785(self__.cs,self__.ch,self__.mult,meta23786__$1));
});})(cs))
;

cljs.core.async.t23785.cljs$lang$type = true;

cljs.core.async.t23785.cljs$lang$ctorStr = "cljs.core.async/t23785";

cljs.core.async.t23785.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t23785");
});})(cs))
;

cljs.core.async.__GT_t23785 = ((function (cs){
return (function __GT_t23785(cs__$1,ch__$1,mult__$1,meta23786){
return (new cljs.core.async.t23785(cs__$1,ch__$1,mult__$1,meta23786));
});})(cs))
;

}

return (new cljs.core.async.t23785(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23790 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23790) : cljs.core.atom.call(null,G__23790));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11164__auto___24015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___24015,cs,m,dchan,dctr,done){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___24015,cs,m,dchan,dctr,done){
return (function (state_23921){
var state_val_23922 = (state_23921[(1)]);
if((state_val_23922 === (7))){
var inst_23917 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23923_24016 = state_23921__$1;
(statearr_23923_24016[(2)] = inst_23917);

(statearr_23923_24016[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (20))){
var inst_23822 = (state_23921[(7)]);
var inst_23832 = cljs.core.first(inst_23822);
var inst_23833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23832,(0),null);
var inst_23834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23832,(1),null);
var state_23921__$1 = (function (){var statearr_23924 = state_23921;
(statearr_23924[(8)] = inst_23833);

return statearr_23924;
})();
if(cljs.core.truth_(inst_23834)){
var statearr_23925_24017 = state_23921__$1;
(statearr_23925_24017[(1)] = (22));

} else {
var statearr_23926_24018 = state_23921__$1;
(statearr_23926_24018[(1)] = (23));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (27))){
var inst_23864 = (state_23921[(9)]);
var inst_23862 = (state_23921[(10)]);
var inst_23869 = (state_23921[(11)]);
var inst_23793 = (state_23921[(12)]);
var inst_23869__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23862,inst_23864);
var inst_23870 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23869__$1,inst_23793,done);
var state_23921__$1 = (function (){var statearr_23927 = state_23921;
(statearr_23927[(11)] = inst_23869__$1);

return statearr_23927;
})();
if(cljs.core.truth_(inst_23870)){
var statearr_23928_24019 = state_23921__$1;
(statearr_23928_24019[(1)] = (30));

} else {
var statearr_23929_24020 = state_23921__$1;
(statearr_23929_24020[(1)] = (31));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (1))){
var state_23921__$1 = state_23921;
var statearr_23930_24021 = state_23921__$1;
(statearr_23930_24021[(2)] = null);

(statearr_23930_24021[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (24))){
var inst_23822 = (state_23921[(7)]);
var inst_23839 = (state_23921[(2)]);
var inst_23840 = cljs.core.next(inst_23822);
var inst_23802 = inst_23840;
var inst_23803 = null;
var inst_23804 = (0);
var inst_23805 = (0);
var state_23921__$1 = (function (){var statearr_23931 = state_23921;
(statearr_23931[(13)] = inst_23839);

(statearr_23931[(14)] = inst_23802);

(statearr_23931[(15)] = inst_23805);

(statearr_23931[(16)] = inst_23803);

(statearr_23931[(17)] = inst_23804);

return statearr_23931;
})();
var statearr_23932_24022 = state_23921__$1;
(statearr_23932_24022[(2)] = null);

(statearr_23932_24022[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (39))){
var state_23921__$1 = state_23921;
var statearr_23936_24023 = state_23921__$1;
(statearr_23936_24023[(2)] = null);

(statearr_23936_24023[(1)] = (41));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (4))){
var inst_23793 = (state_23921[(12)]);
var inst_23793__$1 = (state_23921[(2)]);
var inst_23794 = (inst_23793__$1 == null);
var state_23921__$1 = (function (){var statearr_23937 = state_23921;
(statearr_23937[(12)] = inst_23793__$1);

return statearr_23937;
})();
if(cljs.core.truth_(inst_23794)){
var statearr_23938_24024 = state_23921__$1;
(statearr_23938_24024[(1)] = (5));

} else {
var statearr_23939_24025 = state_23921__$1;
(statearr_23939_24025[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (15))){
var inst_23802 = (state_23921[(14)]);
var inst_23805 = (state_23921[(15)]);
var inst_23803 = (state_23921[(16)]);
var inst_23804 = (state_23921[(17)]);
var inst_23818 = (state_23921[(2)]);
var inst_23819 = (inst_23805 + (1));
var tmp23933 = inst_23802;
var tmp23934 = inst_23803;
var tmp23935 = inst_23804;
var inst_23802__$1 = tmp23933;
var inst_23803__$1 = tmp23934;
var inst_23804__$1 = tmp23935;
var inst_23805__$1 = inst_23819;
var state_23921__$1 = (function (){var statearr_23940 = state_23921;
(statearr_23940[(14)] = inst_23802__$1);

(statearr_23940[(15)] = inst_23805__$1);

(statearr_23940[(16)] = inst_23803__$1);

(statearr_23940[(18)] = inst_23818);

(statearr_23940[(17)] = inst_23804__$1);

return statearr_23940;
})();
var statearr_23941_24026 = state_23921__$1;
(statearr_23941_24026[(2)] = null);

(statearr_23941_24026[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (21))){
var inst_23843 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23945_24027 = state_23921__$1;
(statearr_23945_24027[(2)] = inst_23843);

(statearr_23945_24027[(1)] = (18));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (31))){
var inst_23869 = (state_23921[(11)]);
var inst_23873 = done(null);
var inst_23874 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23869);
var state_23921__$1 = (function (){var statearr_23946 = state_23921;
(statearr_23946[(19)] = inst_23873);

return statearr_23946;
})();
var statearr_23947_24028 = state_23921__$1;
(statearr_23947_24028[(2)] = inst_23874);

(statearr_23947_24028[(1)] = (32));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (32))){
var inst_23863 = (state_23921[(20)]);
var inst_23864 = (state_23921[(9)]);
var inst_23862 = (state_23921[(10)]);
var inst_23861 = (state_23921[(21)]);
var inst_23876 = (state_23921[(2)]);
var inst_23877 = (inst_23864 + (1));
var tmp23942 = inst_23863;
var tmp23943 = inst_23862;
var tmp23944 = inst_23861;
var inst_23861__$1 = tmp23944;
var inst_23862__$1 = tmp23943;
var inst_23863__$1 = tmp23942;
var inst_23864__$1 = inst_23877;
var state_23921__$1 = (function (){var statearr_23948 = state_23921;
(statearr_23948[(20)] = inst_23863__$1);

(statearr_23948[(9)] = inst_23864__$1);

(statearr_23948[(10)] = inst_23862__$1);

(statearr_23948[(21)] = inst_23861__$1);

(statearr_23948[(22)] = inst_23876);

return statearr_23948;
})();
var statearr_23949_24029 = state_23921__$1;
(statearr_23949_24029[(2)] = null);

(statearr_23949_24029[(1)] = (25));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (40))){
var inst_23889 = (state_23921[(23)]);
var inst_23893 = done(null);
var inst_23894 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23889);
var state_23921__$1 = (function (){var statearr_23950 = state_23921;
(statearr_23950[(24)] = inst_23893);

return statearr_23950;
})();
var statearr_23951_24030 = state_23921__$1;
(statearr_23951_24030[(2)] = inst_23894);

(statearr_23951_24030[(1)] = (41));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (33))){
var inst_23880 = (state_23921[(25)]);
var inst_23882 = cljs.core.chunked_seq_QMARK_(inst_23880);
var state_23921__$1 = state_23921;
if(inst_23882){
var statearr_23952_24031 = state_23921__$1;
(statearr_23952_24031[(1)] = (36));

} else {
var statearr_23953_24032 = state_23921__$1;
(statearr_23953_24032[(1)] = (37));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (13))){
var inst_23812 = (state_23921[(26)]);
var inst_23815 = cljs.core.async.close_BANG_(inst_23812);
var state_23921__$1 = state_23921;
var statearr_23954_24033 = state_23921__$1;
(statearr_23954_24033[(2)] = inst_23815);

(statearr_23954_24033[(1)] = (15));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (22))){
var inst_23833 = (state_23921[(8)]);
var inst_23836 = cljs.core.async.close_BANG_(inst_23833);
var state_23921__$1 = state_23921;
var statearr_23955_24034 = state_23921__$1;
(statearr_23955_24034[(2)] = inst_23836);

(statearr_23955_24034[(1)] = (24));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (36))){
var inst_23880 = (state_23921[(25)]);
var inst_23884 = cljs.core.chunk_first(inst_23880);
var inst_23885 = cljs.core.chunk_rest(inst_23880);
var inst_23886 = cljs.core.count(inst_23884);
var inst_23861 = inst_23885;
var inst_23862 = inst_23884;
var inst_23863 = inst_23886;
var inst_23864 = (0);
var state_23921__$1 = (function (){var statearr_23956 = state_23921;
(statearr_23956[(20)] = inst_23863);

(statearr_23956[(9)] = inst_23864);

(statearr_23956[(10)] = inst_23862);

(statearr_23956[(21)] = inst_23861);

return statearr_23956;
})();
var statearr_23957_24035 = state_23921__$1;
(statearr_23957_24035[(2)] = null);

(statearr_23957_24035[(1)] = (25));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (41))){
var inst_23880 = (state_23921[(25)]);
var inst_23896 = (state_23921[(2)]);
var inst_23897 = cljs.core.next(inst_23880);
var inst_23861 = inst_23897;
var inst_23862 = null;
var inst_23863 = (0);
var inst_23864 = (0);
var state_23921__$1 = (function (){var statearr_23958 = state_23921;
(statearr_23958[(20)] = inst_23863);

(statearr_23958[(9)] = inst_23864);

(statearr_23958[(10)] = inst_23862);

(statearr_23958[(27)] = inst_23896);

(statearr_23958[(21)] = inst_23861);

return statearr_23958;
})();
var statearr_23959_24036 = state_23921__$1;
(statearr_23959_24036[(2)] = null);

(statearr_23959_24036[(1)] = (25));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (43))){
var state_23921__$1 = state_23921;
var statearr_23960_24037 = state_23921__$1;
(statearr_23960_24037[(2)] = null);

(statearr_23960_24037[(1)] = (44));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (29))){
var inst_23905 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23961_24038 = state_23921__$1;
(statearr_23961_24038[(2)] = inst_23905);

(statearr_23961_24038[(1)] = (26));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (44))){
var inst_23914 = (state_23921[(2)]);
var state_23921__$1 = (function (){var statearr_23962 = state_23921;
(statearr_23962[(28)] = inst_23914);

return statearr_23962;
})();
var statearr_23963_24039 = state_23921__$1;
(statearr_23963_24039[(2)] = null);

(statearr_23963_24039[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (6))){
var inst_23853 = (state_23921[(29)]);
var inst_23852 = (function (){var G__23964 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23964) : cljs.core.deref.call(null,G__23964));
})();
var inst_23853__$1 = cljs.core.keys(inst_23852);
var inst_23854 = cljs.core.count(inst_23853__$1);
var inst_23855 = (function (){var G__23965 = dctr;
var G__23966 = inst_23854;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23965,G__23966) : cljs.core.reset_BANG_.call(null,G__23965,G__23966));
})();
var inst_23860 = cljs.core.seq(inst_23853__$1);
var inst_23861 = inst_23860;
var inst_23862 = null;
var inst_23863 = (0);
var inst_23864 = (0);
var state_23921__$1 = (function (){var statearr_23967 = state_23921;
(statearr_23967[(20)] = inst_23863);

(statearr_23967[(9)] = inst_23864);

(statearr_23967[(10)] = inst_23862);

(statearr_23967[(21)] = inst_23861);

(statearr_23967[(30)] = inst_23855);

(statearr_23967[(29)] = inst_23853__$1);

return statearr_23967;
})();
var statearr_23968_24040 = state_23921__$1;
(statearr_23968_24040[(2)] = null);

(statearr_23968_24040[(1)] = (25));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (28))){
var inst_23861 = (state_23921[(21)]);
var inst_23880 = (state_23921[(25)]);
var inst_23880__$1 = cljs.core.seq(inst_23861);
var state_23921__$1 = (function (){var statearr_23969 = state_23921;
(statearr_23969[(25)] = inst_23880__$1);

return statearr_23969;
})();
if(inst_23880__$1){
var statearr_23970_24041 = state_23921__$1;
(statearr_23970_24041[(1)] = (33));

} else {
var statearr_23971_24042 = state_23921__$1;
(statearr_23971_24042[(1)] = (34));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (25))){
var inst_23863 = (state_23921[(20)]);
var inst_23864 = (state_23921[(9)]);
var inst_23866 = (inst_23864 < inst_23863);
var inst_23867 = inst_23866;
var state_23921__$1 = state_23921;
if(cljs.core.truth_(inst_23867)){
var statearr_23972_24043 = state_23921__$1;
(statearr_23972_24043[(1)] = (27));

} else {
var statearr_23973_24044 = state_23921__$1;
(statearr_23973_24044[(1)] = (28));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (34))){
var state_23921__$1 = state_23921;
var statearr_23974_24045 = state_23921__$1;
(statearr_23974_24045[(2)] = null);

(statearr_23974_24045[(1)] = (35));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (17))){
var state_23921__$1 = state_23921;
var statearr_23975_24046 = state_23921__$1;
(statearr_23975_24046[(2)] = null);

(statearr_23975_24046[(1)] = (18));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (3))){
var inst_23919 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23921__$1,inst_23919);
} else {
if((state_val_23922 === (12))){
var inst_23848 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23976_24047 = state_23921__$1;
(statearr_23976_24047[(2)] = inst_23848);

(statearr_23976_24047[(1)] = (9));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (2))){
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23921__$1,(4),ch);
} else {
if((state_val_23922 === (23))){
var state_23921__$1 = state_23921;
var statearr_23977_24048 = state_23921__$1;
(statearr_23977_24048[(2)] = null);

(statearr_23977_24048[(1)] = (24));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (35))){
var inst_23903 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23978_24049 = state_23921__$1;
(statearr_23978_24049[(2)] = inst_23903);

(statearr_23978_24049[(1)] = (29));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (19))){
var inst_23822 = (state_23921[(7)]);
var inst_23826 = cljs.core.chunk_first(inst_23822);
var inst_23827 = cljs.core.chunk_rest(inst_23822);
var inst_23828 = cljs.core.count(inst_23826);
var inst_23802 = inst_23827;
var inst_23803 = inst_23826;
var inst_23804 = inst_23828;
var inst_23805 = (0);
var state_23921__$1 = (function (){var statearr_23979 = state_23921;
(statearr_23979[(14)] = inst_23802);

(statearr_23979[(15)] = inst_23805);

(statearr_23979[(16)] = inst_23803);

(statearr_23979[(17)] = inst_23804);

return statearr_23979;
})();
var statearr_23980_24050 = state_23921__$1;
(statearr_23980_24050[(2)] = null);

(statearr_23980_24050[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (11))){
var inst_23822 = (state_23921[(7)]);
var inst_23802 = (state_23921[(14)]);
var inst_23822__$1 = cljs.core.seq(inst_23802);
var state_23921__$1 = (function (){var statearr_23981 = state_23921;
(statearr_23981[(7)] = inst_23822__$1);

return statearr_23981;
})();
if(inst_23822__$1){
var statearr_23982_24051 = state_23921__$1;
(statearr_23982_24051[(1)] = (16));

} else {
var statearr_23983_24052 = state_23921__$1;
(statearr_23983_24052[(1)] = (17));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (9))){
var inst_23850 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23984_24053 = state_23921__$1;
(statearr_23984_24053[(2)] = inst_23850);

(statearr_23984_24053[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (5))){
var inst_23800 = (function (){var G__23985 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23985) : cljs.core.deref.call(null,G__23985));
})();
var inst_23801 = cljs.core.seq(inst_23800);
var inst_23802 = inst_23801;
var inst_23803 = null;
var inst_23804 = (0);
var inst_23805 = (0);
var state_23921__$1 = (function (){var statearr_23986 = state_23921;
(statearr_23986[(14)] = inst_23802);

(statearr_23986[(15)] = inst_23805);

(statearr_23986[(16)] = inst_23803);

(statearr_23986[(17)] = inst_23804);

return statearr_23986;
})();
var statearr_23987_24054 = state_23921__$1;
(statearr_23987_24054[(2)] = null);

(statearr_23987_24054[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (14))){
var state_23921__$1 = state_23921;
var statearr_23988_24055 = state_23921__$1;
(statearr_23988_24055[(2)] = null);

(statearr_23988_24055[(1)] = (15));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (45))){
var inst_23911 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23989_24056 = state_23921__$1;
(statearr_23989_24056[(2)] = inst_23911);

(statearr_23989_24056[(1)] = (44));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (26))){
var inst_23853 = (state_23921[(29)]);
var inst_23907 = (state_23921[(2)]);
var inst_23908 = cljs.core.seq(inst_23853);
var state_23921__$1 = (function (){var statearr_23990 = state_23921;
(statearr_23990[(31)] = inst_23907);

return statearr_23990;
})();
if(inst_23908){
var statearr_23991_24057 = state_23921__$1;
(statearr_23991_24057[(1)] = (42));

} else {
var statearr_23992_24058 = state_23921__$1;
(statearr_23992_24058[(1)] = (43));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (16))){
var inst_23822 = (state_23921[(7)]);
var inst_23824 = cljs.core.chunked_seq_QMARK_(inst_23822);
var state_23921__$1 = state_23921;
if(inst_23824){
var statearr_23993_24059 = state_23921__$1;
(statearr_23993_24059[(1)] = (19));

} else {
var statearr_23994_24060 = state_23921__$1;
(statearr_23994_24060[(1)] = (20));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (38))){
var inst_23900 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23995_24061 = state_23921__$1;
(statearr_23995_24061[(2)] = inst_23900);

(statearr_23995_24061[(1)] = (35));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (30))){
var state_23921__$1 = state_23921;
var statearr_23996_24062 = state_23921__$1;
(statearr_23996_24062[(2)] = null);

(statearr_23996_24062[(1)] = (32));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (10))){
var inst_23805 = (state_23921[(15)]);
var inst_23803 = (state_23921[(16)]);
var inst_23811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23803,inst_23805);
var inst_23812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23811,(0),null);
var inst_23813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23811,(1),null);
var state_23921__$1 = (function (){var statearr_23997 = state_23921;
(statearr_23997[(26)] = inst_23812);

return statearr_23997;
})();
if(cljs.core.truth_(inst_23813)){
var statearr_23998_24063 = state_23921__$1;
(statearr_23998_24063[(1)] = (13));

} else {
var statearr_23999_24064 = state_23921__$1;
(statearr_23999_24064[(1)] = (14));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (18))){
var inst_23846 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_24000_24065 = state_23921__$1;
(statearr_24000_24065[(2)] = inst_23846);

(statearr_24000_24065[(1)] = (12));


return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (42))){
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23921__$1,(45),dchan);
} else {
if((state_val_23922 === (37))){
var inst_23889 = (state_23921[(23)]);
var inst_23880 = (state_23921[(25)]);
var inst_23793 = (state_23921[(12)]);
var inst_23889__$1 = cljs.core.first(inst_23880);
var inst_23890 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23889__$1,inst_23793,done);
var state_23921__$1 = (function (){var statearr_24001 = state_23921;
(statearr_24001[(23)] = inst_23889__$1);

return statearr_24001;
})();
if(cljs.core.truth_(inst_23890)){
var statearr_24002_24066 = state_23921__$1;
(statearr_24002_24066[(1)] = (39));

} else {
var statearr_24003_24067 = state_23921__$1;
(statearr_24003_24067[(1)] = (40));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_23922 === (8))){
var inst_23805 = (state_23921[(15)]);
var inst_23804 = (state_23921[(17)]);
var inst_23807 = (inst_23805 < inst_23804);
var inst_23808 = inst_23807;
var state_23921__$1 = state_23921;
if(cljs.core.truth_(inst_23808)){
var statearr_24004_24068 = state_23921__$1;
(statearr_24004_24068[(1)] = (10));

} else {
var statearr_24005_24069 = state_23921__$1;
(statearr_24005_24069[(1)] = (11));

}

return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___24015,cs,m,dchan,dctr,done))
;
return ((function (switch__11084__auto__,c__11164__auto___24015,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_24009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24009[(0)] = state_machine__11085__auto__);

(statearr_24009[(1)] = (1));

return statearr_24009;
});
var state_machine__11085__auto____1 = (function (state_23921){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_23921);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e24010){if((e24010 instanceof Object)){
var ex__11088__auto__ = e24010;
var statearr_24011_24070 = state_23921;
(statearr_24011_24070[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23921);

return cljs.core.constant$keyword$31;
} else {
throw e24010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__24071 = state_23921;
state_23921 = G__24071;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_23921){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_23921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___24015,cs,m,dchan,dctr,done))
})();
var state__11166__auto__ = (function (){var statearr_24012 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_24012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___24015);

return statearr_24012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___24015,cs,m,dchan,dctr,done))
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
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

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
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj24076 = {};
return obj24076;
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
return (function (){var or__3735__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24080 = x__4379__auto__;
return goog.typeOf(G__24080);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (function (){var or__3735__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24084 = x__4379__auto__;
return goog.typeOf(G__24084);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (function (){var or__3735__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24088 = x__4379__auto__;
return goog.typeOf(G__24088);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (function (){var or__3735__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24092 = x__4379__auto__;
return goog.typeOf(G__24092);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (function (){var or__3735__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24096 = x__4379__auto__;
return goog.typeOf(G__24096);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24097){
var map__24103 = p__24097;
var map__24103__$1 = ((cljs.core.seq_QMARK_(map__24103))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24103):map__24103);
var opts = map__24103__$1;
var statearr_24104_24108 = state;
(statearr_24104_24108[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__24103,map__24103__$1,opts){
return (function (val){
var statearr_24105_24109 = state;
(statearr_24105_24109[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24103,map__24103__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24106_24110 = state;
(statearr_24106_24110[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24107 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24107) : cljs.core.deref.call(null,G__24107));
})());


return cljs.core.constant$keyword$31;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24097 = null;
if (arguments.length > 3) {
var G__24111__i = 0, G__24111__a = new Array(arguments.length -  3);
while (G__24111__i < G__24111__a.length) {G__24111__a[G__24111__i] = arguments[G__24111__i + 3]; ++G__24111__i;}
  p__24097 = new cljs.core.IndexedSeq(G__24111__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24097);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24112){
var state = cljs.core.first(arglist__24112);
arglist__24112 = cljs.core.next(arglist__24112);
var cont_block = cljs.core.first(arglist__24112);
arglist__24112 = cljs.core.next(arglist__24112);
var ports = cljs.core.first(arglist__24112);
var p__24097 = cljs.core.rest(arglist__24112);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24097);
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
var cs = (function (){var G__24245 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24245) : cljs.core.atom.call(null,G__24245));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$42);
var solo_mode = (function (){var G__24246 = cljs.core.constant$keyword$41;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24246) : cljs.core.atom.call(null,G__24246));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__24247 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24247) : attr.call(null,G__24247));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__24248 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24248) : cljs.core.deref.call(null,G__24248));
})();
var mode = (function (){var G__24249 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24249) : cljs.core.deref.call(null,G__24249));
})();
var solos = pick(cljs.core.constant$keyword$42,chs);
var pauses = pick(cljs.core.constant$keyword$40,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$43,solos,cljs.core.constant$keyword$44,pick(cljs.core.constant$keyword$41,chs),cljs.core.constant$keyword$45,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$40)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24250 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24251){
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
this.meta24251 = meta24251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24250.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24253_24377 = self__.cs;
var G__24254_24378 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24253_24377,G__24254_24378) : cljs.core.reset_BANG_.call(null,G__24253_24377,G__24254_24378));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__24255_24379 = self__.solo_mode;
var G__24256_24380 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24255_24379,G__24256_24380) : cljs.core.reset_BANG_.call(null,G__24255_24379,G__24256_24380));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24252){
var self__ = this;
var _24252__$1 = this;
return self__.meta24251;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24252,meta24251__$1){
var self__ = this;
var _24252__$1 = this;
return (new cljs.core.async.t24250(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24251__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24250.cljs$lang$type = true;

cljs.core.async.t24250.cljs$lang$ctorStr = "cljs.core.async/t24250";

cljs.core.async.t24250.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t24250");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24250 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24250(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24251){
return (new cljs.core.async.t24250(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24251));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24250(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
})()
;
var c__11164__auto___24381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___24381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___24381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24328){
var state_val_24329 = (state_24328[(1)]);
if((state_val_24329 === (7))){
var inst_24270 = (state_24328[(7)]);
var inst_24275 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24270);
var state_24328__$1 = state_24328;
var statearr_24330_24382 = state_24328__$1;
(statearr_24330_24382[(2)] = inst_24275);

(statearr_24330_24382[(1)] = (9));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (20))){
var inst_24285 = (state_24328[(8)]);
var state_24328__$1 = state_24328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24328__$1,(23),out,inst_24285);
} else {
if((state_val_24329 === (1))){
var inst_24260 = (state_24328[(9)]);
var inst_24260__$1 = calc_state();
var inst_24261 = cljs.core.seq_QMARK_(inst_24260__$1);
var state_24328__$1 = (function (){var statearr_24331 = state_24328;
(statearr_24331[(9)] = inst_24260__$1);

return statearr_24331;
})();
if(inst_24261){
var statearr_24332_24383 = state_24328__$1;
(statearr_24332_24383[(1)] = (2));

} else {
var statearr_24333_24384 = state_24328__$1;
(statearr_24333_24384[(1)] = (3));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (24))){
var inst_24278 = (state_24328[(10)]);
var inst_24270 = inst_24278;
var state_24328__$1 = (function (){var statearr_24334 = state_24328;
(statearr_24334[(7)] = inst_24270);

return statearr_24334;
})();
var statearr_24335_24385 = state_24328__$1;
(statearr_24335_24385[(2)] = null);

(statearr_24335_24385[(1)] = (5));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (4))){
var inst_24260 = (state_24328[(9)]);
var inst_24266 = (state_24328[(2)]);
var inst_24267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24266,cljs.core.constant$keyword$45);
var inst_24268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24266,cljs.core.constant$keyword$44);
var inst_24269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24266,cljs.core.constant$keyword$43);
var inst_24270 = inst_24260;
var state_24328__$1 = (function (){var statearr_24336 = state_24328;
(statearr_24336[(11)] = inst_24269);

(statearr_24336[(12)] = inst_24268);

(statearr_24336[(13)] = inst_24267);

(statearr_24336[(7)] = inst_24270);

return statearr_24336;
})();
var statearr_24337_24386 = state_24328__$1;
(statearr_24337_24386[(2)] = null);

(statearr_24337_24386[(1)] = (5));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (15))){
var state_24328__$1 = state_24328;
var statearr_24338_24387 = state_24328__$1;
(statearr_24338_24387[(2)] = null);

(statearr_24338_24387[(1)] = (16));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (21))){
var inst_24278 = (state_24328[(10)]);
var inst_24270 = inst_24278;
var state_24328__$1 = (function (){var statearr_24339 = state_24328;
(statearr_24339[(7)] = inst_24270);

return statearr_24339;
})();
var statearr_24340_24388 = state_24328__$1;
(statearr_24340_24388[(2)] = null);

(statearr_24340_24388[(1)] = (5));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (13))){
var inst_24324 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
var statearr_24341_24389 = state_24328__$1;
(statearr_24341_24389[(2)] = inst_24324);

(statearr_24341_24389[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (22))){
var inst_24322 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
var statearr_24342_24390 = state_24328__$1;
(statearr_24342_24390[(2)] = inst_24322);

(statearr_24342_24390[(1)] = (13));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (6))){
var inst_24326 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24328__$1,inst_24326);
} else {
if((state_val_24329 === (25))){
var state_24328__$1 = state_24328;
var statearr_24343_24391 = state_24328__$1;
(statearr_24343_24391[(2)] = null);

(statearr_24343_24391[(1)] = (26));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (17))){
var inst_24301 = (state_24328[(14)]);
var state_24328__$1 = state_24328;
var statearr_24344_24392 = state_24328__$1;
(statearr_24344_24392[(2)] = inst_24301);

(statearr_24344_24392[(1)] = (19));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (3))){
var inst_24260 = (state_24328[(9)]);
var state_24328__$1 = state_24328;
var statearr_24345_24393 = state_24328__$1;
(statearr_24345_24393[(2)] = inst_24260);

(statearr_24345_24393[(1)] = (4));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (12))){
var inst_24301 = (state_24328[(14)]);
var inst_24286 = (state_24328[(15)]);
var inst_24281 = (state_24328[(16)]);
var inst_24301__$1 = (function (){var G__24346 = inst_24286;
return (inst_24281.cljs$core$IFn$_invoke$arity$1 ? inst_24281.cljs$core$IFn$_invoke$arity$1(G__24346) : inst_24281.call(null,G__24346));
})();
var state_24328__$1 = (function (){var statearr_24347 = state_24328;
(statearr_24347[(14)] = inst_24301__$1);

return statearr_24347;
})();
if(cljs.core.truth_(inst_24301__$1)){
var statearr_24348_24394 = state_24328__$1;
(statearr_24348_24394[(1)] = (17));

} else {
var statearr_24349_24395 = state_24328__$1;
(statearr_24349_24395[(1)] = (18));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (2))){
var inst_24260 = (state_24328[(9)]);
var inst_24263 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24260);
var state_24328__$1 = state_24328;
var statearr_24350_24396 = state_24328__$1;
(statearr_24350_24396[(2)] = inst_24263);

(statearr_24350_24396[(1)] = (4));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (23))){
var inst_24313 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
if(cljs.core.truth_(inst_24313)){
var statearr_24351_24397 = state_24328__$1;
(statearr_24351_24397[(1)] = (24));

} else {
var statearr_24352_24398 = state_24328__$1;
(statearr_24352_24398[(1)] = (25));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (19))){
var inst_24310 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
if(cljs.core.truth_(inst_24310)){
var statearr_24353_24399 = state_24328__$1;
(statearr_24353_24399[(1)] = (20));

} else {
var statearr_24354_24400 = state_24328__$1;
(statearr_24354_24400[(1)] = (21));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (11))){
var inst_24285 = (state_24328[(8)]);
var inst_24291 = (inst_24285 == null);
var state_24328__$1 = state_24328;
if(cljs.core.truth_(inst_24291)){
var statearr_24355_24401 = state_24328__$1;
(statearr_24355_24401[(1)] = (14));

} else {
var statearr_24356_24402 = state_24328__$1;
(statearr_24356_24402[(1)] = (15));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (9))){
var inst_24278 = (state_24328[(10)]);
var inst_24278__$1 = (state_24328[(2)]);
var inst_24279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24278__$1,cljs.core.constant$keyword$45);
var inst_24280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24278__$1,cljs.core.constant$keyword$44);
var inst_24281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24278__$1,cljs.core.constant$keyword$43);
var state_24328__$1 = (function (){var statearr_24357 = state_24328;
(statearr_24357[(17)] = inst_24280);

(statearr_24357[(10)] = inst_24278__$1);

(statearr_24357[(16)] = inst_24281);

return statearr_24357;
})();
return cljs.core.async.ioc_alts_BANG_(state_24328__$1,(10),inst_24279);
} else {
if((state_val_24329 === (5))){
var inst_24270 = (state_24328[(7)]);
var inst_24273 = cljs.core.seq_QMARK_(inst_24270);
var state_24328__$1 = state_24328;
if(inst_24273){
var statearr_24358_24403 = state_24328__$1;
(statearr_24358_24403[(1)] = (7));

} else {
var statearr_24359_24404 = state_24328__$1;
(statearr_24359_24404[(1)] = (8));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (14))){
var inst_24286 = (state_24328[(15)]);
var inst_24293 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24286);
var state_24328__$1 = state_24328;
var statearr_24360_24405 = state_24328__$1;
(statearr_24360_24405[(2)] = inst_24293);

(statearr_24360_24405[(1)] = (16));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (26))){
var inst_24318 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
var statearr_24361_24406 = state_24328__$1;
(statearr_24361_24406[(2)] = inst_24318);

(statearr_24361_24406[(1)] = (22));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (16))){
var inst_24296 = (state_24328[(2)]);
var inst_24297 = calc_state();
var inst_24270 = inst_24297;
var state_24328__$1 = (function (){var statearr_24362 = state_24328;
(statearr_24362[(18)] = inst_24296);

(statearr_24362[(7)] = inst_24270);

return statearr_24362;
})();
var statearr_24363_24407 = state_24328__$1;
(statearr_24363_24407[(2)] = null);

(statearr_24363_24407[(1)] = (5));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (10))){
var inst_24286 = (state_24328[(15)]);
var inst_24285 = (state_24328[(8)]);
var inst_24284 = (state_24328[(2)]);
var inst_24285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24284,(0),null);
var inst_24286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24284,(1),null);
var inst_24287 = (inst_24285__$1 == null);
var inst_24288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24286__$1,change);
var inst_24289 = (inst_24287) || (inst_24288);
var state_24328__$1 = (function (){var statearr_24364 = state_24328;
(statearr_24364[(15)] = inst_24286__$1);

(statearr_24364[(8)] = inst_24285__$1);

return statearr_24364;
})();
if(cljs.core.truth_(inst_24289)){
var statearr_24365_24408 = state_24328__$1;
(statearr_24365_24408[(1)] = (11));

} else {
var statearr_24366_24409 = state_24328__$1;
(statearr_24366_24409[(1)] = (12));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (18))){
var inst_24286 = (state_24328[(15)]);
var inst_24280 = (state_24328[(17)]);
var inst_24281 = (state_24328[(16)]);
var inst_24305 = cljs.core.empty_QMARK_(inst_24281);
var inst_24306 = (function (){var G__24367 = inst_24286;
return (inst_24280.cljs$core$IFn$_invoke$arity$1 ? inst_24280.cljs$core$IFn$_invoke$arity$1(G__24367) : inst_24280.call(null,G__24367));
})();
var inst_24307 = cljs.core.not(inst_24306);
var inst_24308 = (inst_24305) && (inst_24307);
var state_24328__$1 = state_24328;
var statearr_24368_24410 = state_24328__$1;
(statearr_24368_24410[(2)] = inst_24308);

(statearr_24368_24410[(1)] = (19));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24329 === (8))){
var inst_24270 = (state_24328[(7)]);
var state_24328__$1 = state_24328;
var statearr_24369_24411 = state_24328__$1;
(statearr_24369_24411[(2)] = inst_24270);

(statearr_24369_24411[(1)] = (9));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___24381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11084__auto__,c__11164__auto___24381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_24373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24373[(0)] = state_machine__11085__auto__);

(statearr_24373[(1)] = (1));

return statearr_24373;
});
var state_machine__11085__auto____1 = (function (state_24328){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_24328);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e24374){if((e24374 instanceof Object)){
var ex__11088__auto__ = e24374;
var statearr_24375_24412 = state_24328;
(statearr_24375_24412[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24328);

return cljs.core.constant$keyword$31;
} else {
throw e24374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__24413 = state_24328;
state_24328 = G__24413;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_24328){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_24328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___24381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11166__auto__ = (function (){var statearr_24376 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_24376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___24381);

return statearr_24376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___24381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj24415 = {};
return obj24415;
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
return (function (){var or__3735__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24419 = x__4379__auto__;
return goog.typeOf(G__24419);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (function (){var or__3735__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24423 = x__4379__auto__;
return goog.typeOf(G__24423);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
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
return (function (){var or__3735__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24429 = x__4379__auto__;
return goog.typeOf(G__24429);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (function (){var or__3735__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24431 = x__4379__auto__;
return goog.typeOf(G__24431);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__24570 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24570) : cljs.core.atom.call(null,G__24570));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24572 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24572) : cljs.core.deref.call(null,G__24572));
})(),topic);
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3735__auto__,mults){
return (function (p1__24432_SHARP_){
if(cljs.core.truth_((function (){var G__24573 = topic;
return (p1__24432_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24432_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24573) : p1__24432_SHARP_.call(null,G__24573));
})())){
return p1__24432_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24432_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24574 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24574) : buf_fn.call(null,G__24574));
})())));
}
});})(or__3735__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24575 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24575 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24576){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24576 = meta24576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24575.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24575.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24578 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24578) : self__.ensure_mult.call(null,G__24578));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24575.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24579 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24579) : cljs.core.deref.call(null,G__24579));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24580 = self__.mults;
var G__24581 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24580,G__24581) : cljs.core.reset_BANG_.call(null,G__24580,G__24581));
});})(mults,ensure_mult))
;

cljs.core.async.t24575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24575.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24577){
var self__ = this;
var _24577__$1 = this;
return self__.meta24576;
});})(mults,ensure_mult))
;

cljs.core.async.t24575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24577,meta24576__$1){
var self__ = this;
var _24577__$1 = this;
return (new cljs.core.async.t24575(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24576__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24575.cljs$lang$type = true;

cljs.core.async.t24575.cljs$lang$ctorStr = "cljs.core.async/t24575";

cljs.core.async.t24575.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t24575");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24575 = ((function (mults,ensure_mult){
return (function __GT_t24575(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24576){
return (new cljs.core.async.t24575(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24576));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24575(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
})()
;
var c__11164__auto___24704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___24704,mults,ensure_mult,p){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___24704,mults,ensure_mult,p){
return (function (state_24653){
var state_val_24654 = (state_24653[(1)]);
if((state_val_24654 === (7))){
var inst_24649 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
var statearr_24655_24705 = state_24653__$1;
(statearr_24655_24705[(2)] = inst_24649);

(statearr_24655_24705[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (20))){
var state_24653__$1 = state_24653;
var statearr_24656_24706 = state_24653__$1;
(statearr_24656_24706[(2)] = null);

(statearr_24656_24706[(1)] = (21));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (1))){
var state_24653__$1 = state_24653;
var statearr_24657_24707 = state_24653__$1;
(statearr_24657_24707[(2)] = null);

(statearr_24657_24707[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (24))){
var inst_24632 = (state_24653[(7)]);
var inst_24641 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24632);
var state_24653__$1 = state_24653;
var statearr_24658_24708 = state_24653__$1;
(statearr_24658_24708[(2)] = inst_24641);

(statearr_24658_24708[(1)] = (25));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (4))){
var inst_24584 = (state_24653[(8)]);
var inst_24584__$1 = (state_24653[(2)]);
var inst_24585 = (inst_24584__$1 == null);
var state_24653__$1 = (function (){var statearr_24659 = state_24653;
(statearr_24659[(8)] = inst_24584__$1);

return statearr_24659;
})();
if(cljs.core.truth_(inst_24585)){
var statearr_24660_24709 = state_24653__$1;
(statearr_24660_24709[(1)] = (5));

} else {
var statearr_24661_24710 = state_24653__$1;
(statearr_24661_24710[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (15))){
var inst_24626 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
var statearr_24662_24711 = state_24653__$1;
(statearr_24662_24711[(2)] = inst_24626);

(statearr_24662_24711[(1)] = (12));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (21))){
var inst_24646 = (state_24653[(2)]);
var state_24653__$1 = (function (){var statearr_24663 = state_24653;
(statearr_24663[(9)] = inst_24646);

return statearr_24663;
})();
var statearr_24664_24712 = state_24653__$1;
(statearr_24664_24712[(2)] = null);

(statearr_24664_24712[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (13))){
var inst_24608 = (state_24653[(10)]);
var inst_24610 = cljs.core.chunked_seq_QMARK_(inst_24608);
var state_24653__$1 = state_24653;
if(inst_24610){
var statearr_24665_24713 = state_24653__$1;
(statearr_24665_24713[(1)] = (16));

} else {
var statearr_24666_24714 = state_24653__$1;
(statearr_24666_24714[(1)] = (17));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (22))){
var inst_24638 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
if(cljs.core.truth_(inst_24638)){
var statearr_24667_24715 = state_24653__$1;
(statearr_24667_24715[(1)] = (23));

} else {
var statearr_24668_24716 = state_24653__$1;
(statearr_24668_24716[(1)] = (24));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (6))){
var inst_24632 = (state_24653[(7)]);
var inst_24634 = (state_24653[(11)]);
var inst_24584 = (state_24653[(8)]);
var inst_24632__$1 = (function (){var G__24669 = inst_24584;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24669) : topic_fn.call(null,G__24669));
})();
var inst_24633 = (function (){var G__24670 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24670) : cljs.core.deref.call(null,G__24670));
})();
var inst_24634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24633,inst_24632__$1);
var state_24653__$1 = (function (){var statearr_24671 = state_24653;
(statearr_24671[(7)] = inst_24632__$1);

(statearr_24671[(11)] = inst_24634__$1);

return statearr_24671;
})();
if(cljs.core.truth_(inst_24634__$1)){
var statearr_24672_24717 = state_24653__$1;
(statearr_24672_24717[(1)] = (19));

} else {
var statearr_24673_24718 = state_24653__$1;
(statearr_24673_24718[(1)] = (20));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (25))){
var inst_24643 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
var statearr_24674_24719 = state_24653__$1;
(statearr_24674_24719[(2)] = inst_24643);

(statearr_24674_24719[(1)] = (21));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (17))){
var inst_24608 = (state_24653[(10)]);
var inst_24617 = cljs.core.first(inst_24608);
var inst_24618 = cljs.core.async.muxch_STAR_(inst_24617);
var inst_24619 = cljs.core.async.close_BANG_(inst_24618);
var inst_24620 = cljs.core.next(inst_24608);
var inst_24594 = inst_24620;
var inst_24595 = null;
var inst_24596 = (0);
var inst_24597 = (0);
var state_24653__$1 = (function (){var statearr_24675 = state_24653;
(statearr_24675[(12)] = inst_24619);

(statearr_24675[(13)] = inst_24596);

(statearr_24675[(14)] = inst_24594);

(statearr_24675[(15)] = inst_24597);

(statearr_24675[(16)] = inst_24595);

return statearr_24675;
})();
var statearr_24676_24720 = state_24653__$1;
(statearr_24676_24720[(2)] = null);

(statearr_24676_24720[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (3))){
var inst_24651 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24653__$1,inst_24651);
} else {
if((state_val_24654 === (12))){
var inst_24628 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
var statearr_24677_24721 = state_24653__$1;
(statearr_24677_24721[(2)] = inst_24628);

(statearr_24677_24721[(1)] = (9));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (2))){
var state_24653__$1 = state_24653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24653__$1,(4),ch);
} else {
if((state_val_24654 === (23))){
var state_24653__$1 = state_24653;
var statearr_24678_24722 = state_24653__$1;
(statearr_24678_24722[(2)] = null);

(statearr_24678_24722[(1)] = (25));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (19))){
var inst_24634 = (state_24653[(11)]);
var inst_24584 = (state_24653[(8)]);
var inst_24636 = cljs.core.async.muxch_STAR_(inst_24634);
var state_24653__$1 = state_24653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24653__$1,(22),inst_24636,inst_24584);
} else {
if((state_val_24654 === (11))){
var inst_24594 = (state_24653[(14)]);
var inst_24608 = (state_24653[(10)]);
var inst_24608__$1 = cljs.core.seq(inst_24594);
var state_24653__$1 = (function (){var statearr_24679 = state_24653;
(statearr_24679[(10)] = inst_24608__$1);

return statearr_24679;
})();
if(inst_24608__$1){
var statearr_24680_24723 = state_24653__$1;
(statearr_24680_24723[(1)] = (13));

} else {
var statearr_24681_24724 = state_24653__$1;
(statearr_24681_24724[(1)] = (14));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (9))){
var inst_24630 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
var statearr_24682_24725 = state_24653__$1;
(statearr_24682_24725[(2)] = inst_24630);

(statearr_24682_24725[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (5))){
var inst_24591 = (function (){var G__24683 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24683) : cljs.core.deref.call(null,G__24683));
})();
var inst_24592 = cljs.core.vals(inst_24591);
var inst_24593 = cljs.core.seq(inst_24592);
var inst_24594 = inst_24593;
var inst_24595 = null;
var inst_24596 = (0);
var inst_24597 = (0);
var state_24653__$1 = (function (){var statearr_24684 = state_24653;
(statearr_24684[(13)] = inst_24596);

(statearr_24684[(14)] = inst_24594);

(statearr_24684[(15)] = inst_24597);

(statearr_24684[(16)] = inst_24595);

return statearr_24684;
})();
var statearr_24685_24726 = state_24653__$1;
(statearr_24685_24726[(2)] = null);

(statearr_24685_24726[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (14))){
var state_24653__$1 = state_24653;
var statearr_24689_24727 = state_24653__$1;
(statearr_24689_24727[(2)] = null);

(statearr_24689_24727[(1)] = (15));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (16))){
var inst_24608 = (state_24653[(10)]);
var inst_24612 = cljs.core.chunk_first(inst_24608);
var inst_24613 = cljs.core.chunk_rest(inst_24608);
var inst_24614 = cljs.core.count(inst_24612);
var inst_24594 = inst_24613;
var inst_24595 = inst_24612;
var inst_24596 = inst_24614;
var inst_24597 = (0);
var state_24653__$1 = (function (){var statearr_24690 = state_24653;
(statearr_24690[(13)] = inst_24596);

(statearr_24690[(14)] = inst_24594);

(statearr_24690[(15)] = inst_24597);

(statearr_24690[(16)] = inst_24595);

return statearr_24690;
})();
var statearr_24691_24728 = state_24653__$1;
(statearr_24691_24728[(2)] = null);

(statearr_24691_24728[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (10))){
var inst_24596 = (state_24653[(13)]);
var inst_24594 = (state_24653[(14)]);
var inst_24597 = (state_24653[(15)]);
var inst_24595 = (state_24653[(16)]);
var inst_24602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24595,inst_24597);
var inst_24603 = cljs.core.async.muxch_STAR_(inst_24602);
var inst_24604 = cljs.core.async.close_BANG_(inst_24603);
var inst_24605 = (inst_24597 + (1));
var tmp24686 = inst_24596;
var tmp24687 = inst_24594;
var tmp24688 = inst_24595;
var inst_24594__$1 = tmp24687;
var inst_24595__$1 = tmp24688;
var inst_24596__$1 = tmp24686;
var inst_24597__$1 = inst_24605;
var state_24653__$1 = (function (){var statearr_24692 = state_24653;
(statearr_24692[(13)] = inst_24596__$1);

(statearr_24692[(14)] = inst_24594__$1);

(statearr_24692[(17)] = inst_24604);

(statearr_24692[(15)] = inst_24597__$1);

(statearr_24692[(16)] = inst_24595__$1);

return statearr_24692;
})();
var statearr_24693_24729 = state_24653__$1;
(statearr_24693_24729[(2)] = null);

(statearr_24693_24729[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (18))){
var inst_24623 = (state_24653[(2)]);
var state_24653__$1 = state_24653;
var statearr_24694_24730 = state_24653__$1;
(statearr_24694_24730[(2)] = inst_24623);

(statearr_24694_24730[(1)] = (15));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24654 === (8))){
var inst_24596 = (state_24653[(13)]);
var inst_24597 = (state_24653[(15)]);
var inst_24599 = (inst_24597 < inst_24596);
var inst_24600 = inst_24599;
var state_24653__$1 = state_24653;
if(cljs.core.truth_(inst_24600)){
var statearr_24695_24731 = state_24653__$1;
(statearr_24695_24731[(1)] = (10));

} else {
var statearr_24696_24732 = state_24653__$1;
(statearr_24696_24732[(1)] = (11));

}

return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___24704,mults,ensure_mult,p))
;
return ((function (switch__11084__auto__,c__11164__auto___24704,mults,ensure_mult,p){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_24700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24700[(0)] = state_machine__11085__auto__);

(statearr_24700[(1)] = (1));

return statearr_24700;
});
var state_machine__11085__auto____1 = (function (state_24653){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_24653);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e24701){if((e24701 instanceof Object)){
var ex__11088__auto__ = e24701;
var statearr_24702_24733 = state_24653;
(statearr_24702_24733[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24653);

return cljs.core.constant$keyword$31;
} else {
throw e24701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__24734 = state_24653;
state_24653 = G__24734;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_24653){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_24653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___24704,mults,ensure_mult,p))
})();
var state__11166__auto__ = (function (){var statearr_24703 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_24703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___24704);

return statearr_24703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___24704,mults,ensure_mult,p))
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
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24815 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24815) : cljs.core.atom.call(null,G__24815));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11164__auto___24888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___24888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___24888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24854){
var state_val_24855 = (state_24854[(1)]);
if((state_val_24855 === (7))){
var state_24854__$1 = state_24854;
var statearr_24856_24889 = state_24854__$1;
(statearr_24856_24889[(2)] = null);

(statearr_24856_24889[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (1))){
var state_24854__$1 = state_24854;
var statearr_24857_24890 = state_24854__$1;
(statearr_24857_24890[(2)] = null);

(statearr_24857_24890[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (4))){
var inst_24818 = (state_24854[(7)]);
var inst_24820 = (inst_24818 < cnt);
var state_24854__$1 = state_24854;
if(cljs.core.truth_(inst_24820)){
var statearr_24858_24891 = state_24854__$1;
(statearr_24858_24891[(1)] = (6));

} else {
var statearr_24859_24892 = state_24854__$1;
(statearr_24859_24892[(1)] = (7));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (15))){
var inst_24850 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24860_24893 = state_24854__$1;
(statearr_24860_24893[(2)] = inst_24850);

(statearr_24860_24893[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (13))){
var inst_24843 = cljs.core.async.close_BANG_(out);
var state_24854__$1 = state_24854;
var statearr_24861_24894 = state_24854__$1;
(statearr_24861_24894[(2)] = inst_24843);

(statearr_24861_24894[(1)] = (15));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (6))){
var state_24854__$1 = state_24854;
var statearr_24862_24895 = state_24854__$1;
(statearr_24862_24895[(2)] = null);

(statearr_24862_24895[(1)] = (11));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (3))){
var inst_24852 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24854__$1,inst_24852);
} else {
if((state_val_24855 === (12))){
var inst_24840 = (state_24854[(8)]);
var inst_24840__$1 = (state_24854[(2)]);
var inst_24841 = cljs.core.some(cljs.core.nil_QMARK_,inst_24840__$1);
var state_24854__$1 = (function (){var statearr_24863 = state_24854;
(statearr_24863[(8)] = inst_24840__$1);

return statearr_24863;
})();
if(cljs.core.truth_(inst_24841)){
var statearr_24864_24896 = state_24854__$1;
(statearr_24864_24896[(1)] = (13));

} else {
var statearr_24865_24897 = state_24854__$1;
(statearr_24865_24897[(1)] = (14));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (2))){
var inst_24817 = (function (){var G__24866 = dctr;
var G__24867 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24866,G__24867) : cljs.core.reset_BANG_.call(null,G__24866,G__24867));
})();
var inst_24818 = (0);
var state_24854__$1 = (function (){var statearr_24868 = state_24854;
(statearr_24868[(7)] = inst_24818);

(statearr_24868[(9)] = inst_24817);

return statearr_24868;
})();
var statearr_24869_24898 = state_24854__$1;
(statearr_24869_24898[(2)] = null);

(statearr_24869_24898[(1)] = (4));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (11))){
var inst_24818 = (state_24854[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24854,(10),Object,null,(9));
var inst_24827 = (function (){var G__24870 = inst_24818;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24870) : chs__$1.call(null,G__24870));
})();
var inst_24828 = (function (){var G__24871 = inst_24818;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24871) : done.call(null,G__24871));
})();
var inst_24829 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24827,inst_24828);
var state_24854__$1 = state_24854;
var statearr_24872_24899 = state_24854__$1;
(statearr_24872_24899[(2)] = inst_24829);


cljs.core.async.impl.ioc_helpers.process_exception(state_24854__$1);

return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (9))){
var inst_24818 = (state_24854[(7)]);
var inst_24831 = (state_24854[(2)]);
var inst_24832 = (inst_24818 + (1));
var inst_24818__$1 = inst_24832;
var state_24854__$1 = (function (){var statearr_24873 = state_24854;
(statearr_24873[(7)] = inst_24818__$1);

(statearr_24873[(10)] = inst_24831);

return statearr_24873;
})();
var statearr_24874_24900 = state_24854__$1;
(statearr_24874_24900[(2)] = null);

(statearr_24874_24900[(1)] = (4));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (5))){
var inst_24838 = (state_24854[(2)]);
var state_24854__$1 = (function (){var statearr_24875 = state_24854;
(statearr_24875[(11)] = inst_24838);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24854__$1,(12),dchan);
} else {
if((state_val_24855 === (14))){
var inst_24840 = (state_24854[(8)]);
var inst_24845 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24840);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24854__$1,(16),out,inst_24845);
} else {
if((state_val_24855 === (16))){
var inst_24847 = (state_24854[(2)]);
var state_24854__$1 = (function (){var statearr_24876 = state_24854;
(statearr_24876[(12)] = inst_24847);

return statearr_24876;
})();
var statearr_24877_24901 = state_24854__$1;
(statearr_24877_24901[(2)] = null);

(statearr_24877_24901[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (10))){
var inst_24822 = (state_24854[(2)]);
var inst_24823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24854__$1 = (function (){var statearr_24878 = state_24854;
(statearr_24878[(13)] = inst_24822);

return statearr_24878;
})();
var statearr_24879_24902 = state_24854__$1;
(statearr_24879_24902[(2)] = inst_24823);


cljs.core.async.impl.ioc_helpers.process_exception(state_24854__$1);

return cljs.core.constant$keyword$31;
} else {
if((state_val_24855 === (8))){
var inst_24836 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24880_24903 = state_24854__$1;
(statearr_24880_24903[(2)] = inst_24836);

(statearr_24880_24903[(1)] = (5));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___24888,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11084__auto__,c__11164__auto___24888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_24884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24884[(0)] = state_machine__11085__auto__);

(statearr_24884[(1)] = (1));

return statearr_24884;
});
var state_machine__11085__auto____1 = (function (state_24854){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_24854);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e24885){if((e24885 instanceof Object)){
var ex__11088__auto__ = e24885;
var statearr_24886_24904 = state_24854;
(statearr_24886_24904[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24854);

return cljs.core.constant$keyword$31;
} else {
throw e24885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__24905 = state_24854;
state_24854 = G__24905;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_24854){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_24854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___24888,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11166__auto__ = (function (){var statearr_24887 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_24887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___24888);

return statearr_24887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___24888,chs__$1,out,cnt,rets,dchan,dctr,done))
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
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11164__auto___25015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___25015,out){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___25015,out){
return (function (state_24991){
var state_val_24992 = (state_24991[(1)]);
if((state_val_24992 === (7))){
var inst_24970 = (state_24991[(7)]);
var inst_24971 = (state_24991[(8)]);
var inst_24970__$1 = (state_24991[(2)]);
var inst_24971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24970__$1,(0),null);
var inst_24972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24970__$1,(1),null);
var inst_24973 = (inst_24971__$1 == null);
var state_24991__$1 = (function (){var statearr_24993 = state_24991;
(statearr_24993[(9)] = inst_24972);

(statearr_24993[(7)] = inst_24970__$1);

(statearr_24993[(8)] = inst_24971__$1);

return statearr_24993;
})();
if(cljs.core.truth_(inst_24973)){
var statearr_24994_25016 = state_24991__$1;
(statearr_24994_25016[(1)] = (8));

} else {
var statearr_24995_25017 = state_24991__$1;
(statearr_24995_25017[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (1))){
var inst_24962 = cljs.core.vec(chs);
var inst_24963 = inst_24962;
var state_24991__$1 = (function (){var statearr_24996 = state_24991;
(statearr_24996[(10)] = inst_24963);

return statearr_24996;
})();
var statearr_24997_25018 = state_24991__$1;
(statearr_24997_25018[(2)] = null);

(statearr_24997_25018[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (4))){
var inst_24963 = (state_24991[(10)]);
var state_24991__$1 = state_24991;
return cljs.core.async.ioc_alts_BANG_(state_24991__$1,(7),inst_24963);
} else {
if((state_val_24992 === (6))){
var inst_24987 = (state_24991[(2)]);
var state_24991__$1 = state_24991;
var statearr_24998_25019 = state_24991__$1;
(statearr_24998_25019[(2)] = inst_24987);

(statearr_24998_25019[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (3))){
var inst_24989 = (state_24991[(2)]);
var state_24991__$1 = state_24991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24991__$1,inst_24989);
} else {
if((state_val_24992 === (2))){
var inst_24963 = (state_24991[(10)]);
var inst_24965 = cljs.core.count(inst_24963);
var inst_24966 = (inst_24965 > (0));
var state_24991__$1 = state_24991;
if(cljs.core.truth_(inst_24966)){
var statearr_25000_25020 = state_24991__$1;
(statearr_25000_25020[(1)] = (4));

} else {
var statearr_25001_25021 = state_24991__$1;
(statearr_25001_25021[(1)] = (5));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (11))){
var inst_24963 = (state_24991[(10)]);
var inst_24980 = (state_24991[(2)]);
var tmp24999 = inst_24963;
var inst_24963__$1 = tmp24999;
var state_24991__$1 = (function (){var statearr_25002 = state_24991;
(statearr_25002[(10)] = inst_24963__$1);

(statearr_25002[(11)] = inst_24980);

return statearr_25002;
})();
var statearr_25003_25022 = state_24991__$1;
(statearr_25003_25022[(2)] = null);

(statearr_25003_25022[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (9))){
var inst_24971 = (state_24991[(8)]);
var state_24991__$1 = state_24991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24991__$1,(11),out,inst_24971);
} else {
if((state_val_24992 === (5))){
var inst_24985 = cljs.core.async.close_BANG_(out);
var state_24991__$1 = state_24991;
var statearr_25004_25023 = state_24991__$1;
(statearr_25004_25023[(2)] = inst_24985);

(statearr_25004_25023[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (10))){
var inst_24983 = (state_24991[(2)]);
var state_24991__$1 = state_24991;
var statearr_25005_25024 = state_24991__$1;
(statearr_25005_25024[(2)] = inst_24983);

(statearr_25005_25024[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_24992 === (8))){
var inst_24963 = (state_24991[(10)]);
var inst_24972 = (state_24991[(9)]);
var inst_24970 = (state_24991[(7)]);
var inst_24971 = (state_24991[(8)]);
var inst_24975 = (function (){var c = inst_24972;
var v = inst_24971;
var vec__24968 = inst_24970;
var cs = inst_24963;
return ((function (c,v,vec__24968,cs,inst_24963,inst_24972,inst_24970,inst_24971,state_val_24992,c__11164__auto___25015,out){
return (function (p1__24906_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24906_SHARP_);
});
;})(c,v,vec__24968,cs,inst_24963,inst_24972,inst_24970,inst_24971,state_val_24992,c__11164__auto___25015,out))
})();
var inst_24976 = cljs.core.filterv(inst_24975,inst_24963);
var inst_24963__$1 = inst_24976;
var state_24991__$1 = (function (){var statearr_25006 = state_24991;
(statearr_25006[(10)] = inst_24963__$1);

return statearr_25006;
})();
var statearr_25007_25025 = state_24991__$1;
(statearr_25007_25025[(2)] = null);

(statearr_25007_25025[(1)] = (2));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___25015,out))
;
return ((function (switch__11084__auto__,c__11164__auto___25015,out){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25011[(0)] = state_machine__11085__auto__);

(statearr_25011[(1)] = (1));

return statearr_25011;
});
var state_machine__11085__auto____1 = (function (state_24991){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_24991);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25012){if((e25012 instanceof Object)){
var ex__11088__auto__ = e25012;
var statearr_25013_25026 = state_24991;
(statearr_25013_25026[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24991);

return cljs.core.constant$keyword$31;
} else {
throw e25012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25027 = state_24991;
state_24991 = G__25027;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_24991){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_24991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___25015,out))
})();
var state__11166__auto__ = (function (){var statearr_25014 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___25015);

return statearr_25014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___25015,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
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
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11164__auto___25123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___25123,out){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___25123,out){
return (function (state_25100){
var state_val_25101 = (state_25100[(1)]);
if((state_val_25101 === (7))){
var inst_25082 = (state_25100[(7)]);
var inst_25082__$1 = (state_25100[(2)]);
var inst_25083 = (inst_25082__$1 == null);
var inst_25084 = cljs.core.not(inst_25083);
var state_25100__$1 = (function (){var statearr_25102 = state_25100;
(statearr_25102[(7)] = inst_25082__$1);

return statearr_25102;
})();
if(inst_25084){
var statearr_25103_25124 = state_25100__$1;
(statearr_25103_25124[(1)] = (8));

} else {
var statearr_25104_25125 = state_25100__$1;
(statearr_25104_25125[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (1))){
var inst_25077 = (0);
var state_25100__$1 = (function (){var statearr_25105 = state_25100;
(statearr_25105[(8)] = inst_25077);

return statearr_25105;
})();
var statearr_25106_25126 = state_25100__$1;
(statearr_25106_25126[(2)] = null);

(statearr_25106_25126[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (4))){
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25100__$1,(7),ch);
} else {
if((state_val_25101 === (6))){
var inst_25095 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25107_25127 = state_25100__$1;
(statearr_25107_25127[(2)] = inst_25095);

(statearr_25107_25127[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (3))){
var inst_25097 = (state_25100[(2)]);
var inst_25098 = cljs.core.async.close_BANG_(out);
var state_25100__$1 = (function (){var statearr_25108 = state_25100;
(statearr_25108[(9)] = inst_25097);

return statearr_25108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25100__$1,inst_25098);
} else {
if((state_val_25101 === (2))){
var inst_25077 = (state_25100[(8)]);
var inst_25079 = (inst_25077 < n);
var state_25100__$1 = state_25100;
if(cljs.core.truth_(inst_25079)){
var statearr_25109_25128 = state_25100__$1;
(statearr_25109_25128[(1)] = (4));

} else {
var statearr_25110_25129 = state_25100__$1;
(statearr_25110_25129[(1)] = (5));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (11))){
var inst_25077 = (state_25100[(8)]);
var inst_25087 = (state_25100[(2)]);
var inst_25088 = (inst_25077 + (1));
var inst_25077__$1 = inst_25088;
var state_25100__$1 = (function (){var statearr_25111 = state_25100;
(statearr_25111[(10)] = inst_25087);

(statearr_25111[(8)] = inst_25077__$1);

return statearr_25111;
})();
var statearr_25112_25130 = state_25100__$1;
(statearr_25112_25130[(2)] = null);

(statearr_25112_25130[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (9))){
var state_25100__$1 = state_25100;
var statearr_25113_25131 = state_25100__$1;
(statearr_25113_25131[(2)] = null);

(statearr_25113_25131[(1)] = (10));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (5))){
var state_25100__$1 = state_25100;
var statearr_25114_25132 = state_25100__$1;
(statearr_25114_25132[(2)] = null);

(statearr_25114_25132[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (10))){
var inst_25092 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25115_25133 = state_25100__$1;
(statearr_25115_25133[(2)] = inst_25092);

(statearr_25115_25133[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25101 === (8))){
var inst_25082 = (state_25100[(7)]);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25100__$1,(11),out,inst_25082);
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
});})(c__11164__auto___25123,out))
;
return ((function (switch__11084__auto__,c__11164__auto___25123,out){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25119[(0)] = state_machine__11085__auto__);

(statearr_25119[(1)] = (1));

return statearr_25119;
});
var state_machine__11085__auto____1 = (function (state_25100){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_25100);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25120){if((e25120 instanceof Object)){
var ex__11088__auto__ = e25120;
var statearr_25121_25134 = state_25100;
(statearr_25121_25134[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25100);

return cljs.core.constant$keyword$31;
} else {
throw e25120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25135 = state_25100;
state_25100 = G__25135;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_25100){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_25100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___25123,out))
})();
var state__11166__auto__ = (function (){var statearr_25122 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___25123);

return statearr_25122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___25123,out))
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
if(typeof cljs.core.async.t25148 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25148 = (function (ch,f,map_LT_,meta25149){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25149 = meta25149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25151 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25151 = (function (fn1,_,meta25149,map_LT_,f,ch,meta25152){
this.fn1 = fn1;
this._ = _;
this.meta25149 = meta25149;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25152 = meta25152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25151.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25151.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25151.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25136_SHARP_){
var G__25154 = (((p1__25136_SHARP_ == null))?null:(function (){var G__25155 = p1__25136_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25155) : self__.f.call(null,G__25155));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25154) : f1.call(null,G__25154));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25153){
var self__ = this;
var _25153__$1 = this;
return self__.meta25152;
});})(___$1))
;

cljs.core.async.t25151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25153,meta25152__$1){
var self__ = this;
var _25153__$1 = this;
return (new cljs.core.async.t25151(self__.fn1,self__._,self__.meta25149,self__.map_LT_,self__.f,self__.ch,meta25152__$1));
});})(___$1))
;

cljs.core.async.t25151.cljs$lang$type = true;

cljs.core.async.t25151.cljs$lang$ctorStr = "cljs.core.async/t25151";

cljs.core.async.t25151.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t25151");
});})(___$1))
;

cljs.core.async.__GT_t25151 = ((function (___$1){
return (function __GT_t25151(fn1__$1,___$2,meta25149__$1,map_LT___$1,f__$1,ch__$1,meta25152){
return (new cljs.core.async.t25151(fn1__$1,___$2,meta25149__$1,map_LT___$1,f__$1,ch__$1,meta25152));
});})(___$1))
;

}

return (new cljs.core.async.t25151(fn1,___$1,self__.meta25149,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3723__auto__ = ret;
if(cljs.core.truth_(and__3723__auto__)){
return !(((function (){var G__25156 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25156) : cljs.core.deref.call(null,G__25156));
})() == null));
} else {
return and__3723__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25157 = (function (){var G__25158 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25158) : cljs.core.deref.call(null,G__25158));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25157) : self__.f.call(null,G__25157));
})());
} else {
return ret;
}
});

cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25148.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25150){
var self__ = this;
var _25150__$1 = this;
return self__.meta25149;
});

cljs.core.async.t25148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25150,meta25149__$1){
var self__ = this;
var _25150__$1 = this;
return (new cljs.core.async.t25148(self__.ch,self__.f,self__.map_LT_,meta25149__$1));
});

cljs.core.async.t25148.cljs$lang$type = true;

cljs.core.async.t25148.cljs$lang$ctorStr = "cljs.core.async/t25148";

cljs.core.async.t25148.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t25148");
});

cljs.core.async.__GT_t25148 = (function __GT_t25148(ch__$1,f__$1,map_LT___$1,meta25149){
return (new cljs.core.async.t25148(ch__$1,f__$1,map_LT___$1,meta25149));
});

}

return (new cljs.core.async.t25148(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25163 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25163 = (function (ch,f,map_GT_,meta25164){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25164 = meta25164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25163.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25166 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25166) : self__.f.call(null,G__25166));
})(),fn1);
});

cljs.core.async.t25163.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25163.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25165){
var self__ = this;
var _25165__$1 = this;
return self__.meta25164;
});

cljs.core.async.t25163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25165,meta25164__$1){
var self__ = this;
var _25165__$1 = this;
return (new cljs.core.async.t25163(self__.ch,self__.f,self__.map_GT_,meta25164__$1));
});

cljs.core.async.t25163.cljs$lang$type = true;

cljs.core.async.t25163.cljs$lang$ctorStr = "cljs.core.async/t25163";

cljs.core.async.t25163.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t25163");
});

cljs.core.async.__GT_t25163 = (function __GT_t25163(ch__$1,f__$1,map_GT___$1,meta25164){
return (new cljs.core.async.t25163(ch__$1,f__$1,map_GT___$1,meta25164));
});

}

return (new cljs.core.async.t25163(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25171 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25171 = (function (ch,p,filter_GT_,meta25172){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25172 = meta25172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25174 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25174) : self__.p.call(null,G__25174));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25173){
var self__ = this;
var _25173__$1 = this;
return self__.meta25172;
});

cljs.core.async.t25171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25173,meta25172__$1){
var self__ = this;
var _25173__$1 = this;
return (new cljs.core.async.t25171(self__.ch,self__.p,self__.filter_GT_,meta25172__$1));
});

cljs.core.async.t25171.cljs$lang$type = true;

cljs.core.async.t25171.cljs$lang$ctorStr = "cljs.core.async/t25171";

cljs.core.async.t25171.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async/t25171");
});

cljs.core.async.__GT_t25171 = (function __GT_t25171(ch__$1,p__$1,filter_GT___$1,meta25172){
return (new cljs.core.async.t25171(ch__$1,p__$1,filter_GT___$1,meta25172));
});

}

return (new cljs.core.async.t25171(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11164__auto___25262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___25262,out){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___25262,out){
return (function (state_25240){
var state_val_25241 = (state_25240[(1)]);
if((state_val_25241 === (7))){
var inst_25236 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25242_25263 = state_25240__$1;
(statearr_25242_25263[(2)] = inst_25236);

(statearr_25242_25263[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (1))){
var state_25240__$1 = state_25240;
var statearr_25243_25264 = state_25240__$1;
(statearr_25243_25264[(2)] = null);

(statearr_25243_25264[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (4))){
var inst_25222 = (state_25240[(7)]);
var inst_25222__$1 = (state_25240[(2)]);
var inst_25223 = (inst_25222__$1 == null);
var state_25240__$1 = (function (){var statearr_25244 = state_25240;
(statearr_25244[(7)] = inst_25222__$1);

return statearr_25244;
})();
if(cljs.core.truth_(inst_25223)){
var statearr_25245_25265 = state_25240__$1;
(statearr_25245_25265[(1)] = (5));

} else {
var statearr_25246_25266 = state_25240__$1;
(statearr_25246_25266[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (6))){
var inst_25222 = (state_25240[(7)]);
var inst_25227 = (function (){var G__25247 = inst_25222;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25247) : p.call(null,G__25247));
})();
var state_25240__$1 = state_25240;
if(cljs.core.truth_(inst_25227)){
var statearr_25248_25267 = state_25240__$1;
(statearr_25248_25267[(1)] = (8));

} else {
var statearr_25249_25268 = state_25240__$1;
(statearr_25249_25268[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (3))){
var inst_25238 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25240__$1,inst_25238);
} else {
if((state_val_25241 === (2))){
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25240__$1,(4),ch);
} else {
if((state_val_25241 === (11))){
var inst_25230 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25250_25269 = state_25240__$1;
(statearr_25250_25269[(2)] = inst_25230);

(statearr_25250_25269[(1)] = (10));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (9))){
var state_25240__$1 = state_25240;
var statearr_25251_25270 = state_25240__$1;
(statearr_25251_25270[(2)] = null);

(statearr_25251_25270[(1)] = (10));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (5))){
var inst_25225 = cljs.core.async.close_BANG_(out);
var state_25240__$1 = state_25240;
var statearr_25252_25271 = state_25240__$1;
(statearr_25252_25271[(2)] = inst_25225);

(statearr_25252_25271[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (10))){
var inst_25233 = (state_25240[(2)]);
var state_25240__$1 = (function (){var statearr_25253 = state_25240;
(statearr_25253[(8)] = inst_25233);

return statearr_25253;
})();
var statearr_25254_25272 = state_25240__$1;
(statearr_25254_25272[(2)] = null);

(statearr_25254_25272[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25241 === (8))){
var inst_25222 = (state_25240[(7)]);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25240__$1,(11),out,inst_25222);
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
});})(c__11164__auto___25262,out))
;
return ((function (switch__11084__auto__,c__11164__auto___25262,out){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25258 = [null,null,null,null,null,null,null,null,null];
(statearr_25258[(0)] = state_machine__11085__auto__);

(statearr_25258[(1)] = (1));

return statearr_25258;
});
var state_machine__11085__auto____1 = (function (state_25240){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_25240);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25259){if((e25259 instanceof Object)){
var ex__11088__auto__ = e25259;
var statearr_25260_25273 = state_25240;
(statearr_25260_25273[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25240);

return cljs.core.constant$keyword$31;
} else {
throw e25259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25274 = state_25240;
state_25240 = G__25274;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___25262,out))
})();
var state__11166__auto__ = (function (){var statearr_25261 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___25262);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___25262,out))
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
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__){
return (function (state_25444){
var state_val_25445 = (state_25444[(1)]);
if((state_val_25445 === (7))){
var inst_25440 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25446_25488 = state_25444__$1;
(statearr_25446_25488[(2)] = inst_25440);

(statearr_25446_25488[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (20))){
var inst_25410 = (state_25444[(7)]);
var inst_25421 = (state_25444[(2)]);
var inst_25422 = cljs.core.next(inst_25410);
var inst_25396 = inst_25422;
var inst_25397 = null;
var inst_25398 = (0);
var inst_25399 = (0);
var state_25444__$1 = (function (){var statearr_25447 = state_25444;
(statearr_25447[(8)] = inst_25399);

(statearr_25447[(9)] = inst_25421);

(statearr_25447[(10)] = inst_25396);

(statearr_25447[(11)] = inst_25397);

(statearr_25447[(12)] = inst_25398);

return statearr_25447;
})();
var statearr_25448_25489 = state_25444__$1;
(statearr_25448_25489[(2)] = null);

(statearr_25448_25489[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (1))){
var state_25444__$1 = state_25444;
var statearr_25449_25490 = state_25444__$1;
(statearr_25449_25490[(2)] = null);

(statearr_25449_25490[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (4))){
var inst_25385 = (state_25444[(13)]);
var inst_25385__$1 = (state_25444[(2)]);
var inst_25386 = (inst_25385__$1 == null);
var state_25444__$1 = (function (){var statearr_25450 = state_25444;
(statearr_25450[(13)] = inst_25385__$1);

return statearr_25450;
})();
if(cljs.core.truth_(inst_25386)){
var statearr_25451_25491 = state_25444__$1;
(statearr_25451_25491[(1)] = (5));

} else {
var statearr_25452_25492 = state_25444__$1;
(statearr_25452_25492[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (15))){
var state_25444__$1 = state_25444;
var statearr_25456_25493 = state_25444__$1;
(statearr_25456_25493[(2)] = null);

(statearr_25456_25493[(1)] = (16));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (21))){
var state_25444__$1 = state_25444;
var statearr_25457_25494 = state_25444__$1;
(statearr_25457_25494[(2)] = null);

(statearr_25457_25494[(1)] = (23));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (13))){
var inst_25399 = (state_25444[(8)]);
var inst_25396 = (state_25444[(10)]);
var inst_25397 = (state_25444[(11)]);
var inst_25398 = (state_25444[(12)]);
var inst_25406 = (state_25444[(2)]);
var inst_25407 = (inst_25399 + (1));
var tmp25453 = inst_25396;
var tmp25454 = inst_25397;
var tmp25455 = inst_25398;
var inst_25396__$1 = tmp25453;
var inst_25397__$1 = tmp25454;
var inst_25398__$1 = tmp25455;
var inst_25399__$1 = inst_25407;
var state_25444__$1 = (function (){var statearr_25458 = state_25444;
(statearr_25458[(8)] = inst_25399__$1);

(statearr_25458[(10)] = inst_25396__$1);

(statearr_25458[(14)] = inst_25406);

(statearr_25458[(11)] = inst_25397__$1);

(statearr_25458[(12)] = inst_25398__$1);

return statearr_25458;
})();
var statearr_25459_25495 = state_25444__$1;
(statearr_25459_25495[(2)] = null);

(statearr_25459_25495[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (22))){
var state_25444__$1 = state_25444;
var statearr_25460_25496 = state_25444__$1;
(statearr_25460_25496[(2)] = null);

(statearr_25460_25496[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (6))){
var inst_25385 = (state_25444[(13)]);
var inst_25394 = (function (){var G__25461 = inst_25385;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25461) : f.call(null,G__25461));
})();
var inst_25395 = cljs.core.seq(inst_25394);
var inst_25396 = inst_25395;
var inst_25397 = null;
var inst_25398 = (0);
var inst_25399 = (0);
var state_25444__$1 = (function (){var statearr_25462 = state_25444;
(statearr_25462[(8)] = inst_25399);

(statearr_25462[(10)] = inst_25396);

(statearr_25462[(11)] = inst_25397);

(statearr_25462[(12)] = inst_25398);

return statearr_25462;
})();
var statearr_25463_25497 = state_25444__$1;
(statearr_25463_25497[(2)] = null);

(statearr_25463_25497[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (17))){
var inst_25410 = (state_25444[(7)]);
var inst_25414 = cljs.core.chunk_first(inst_25410);
var inst_25415 = cljs.core.chunk_rest(inst_25410);
var inst_25416 = cljs.core.count(inst_25414);
var inst_25396 = inst_25415;
var inst_25397 = inst_25414;
var inst_25398 = inst_25416;
var inst_25399 = (0);
var state_25444__$1 = (function (){var statearr_25464 = state_25444;
(statearr_25464[(8)] = inst_25399);

(statearr_25464[(10)] = inst_25396);

(statearr_25464[(11)] = inst_25397);

(statearr_25464[(12)] = inst_25398);

return statearr_25464;
})();
var statearr_25465_25498 = state_25444__$1;
(statearr_25465_25498[(2)] = null);

(statearr_25465_25498[(1)] = (8));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (3))){
var inst_25442 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25444__$1,inst_25442);
} else {
if((state_val_25445 === (12))){
var inst_25430 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25466_25499 = state_25444__$1;
(statearr_25466_25499[(2)] = inst_25430);

(statearr_25466_25499[(1)] = (9));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (2))){
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25444__$1,(4),in$);
} else {
if((state_val_25445 === (23))){
var inst_25438 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25467_25500 = state_25444__$1;
(statearr_25467_25500[(2)] = inst_25438);

(statearr_25467_25500[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (19))){
var inst_25425 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25468_25501 = state_25444__$1;
(statearr_25468_25501[(2)] = inst_25425);

(statearr_25468_25501[(1)] = (16));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (11))){
var inst_25396 = (state_25444[(10)]);
var inst_25410 = (state_25444[(7)]);
var inst_25410__$1 = cljs.core.seq(inst_25396);
var state_25444__$1 = (function (){var statearr_25469 = state_25444;
(statearr_25469[(7)] = inst_25410__$1);

return statearr_25469;
})();
if(inst_25410__$1){
var statearr_25470_25502 = state_25444__$1;
(statearr_25470_25502[(1)] = (14));

} else {
var statearr_25471_25503 = state_25444__$1;
(statearr_25471_25503[(1)] = (15));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (9))){
var inst_25432 = (state_25444[(2)]);
var inst_25433 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25444__$1 = (function (){var statearr_25472 = state_25444;
(statearr_25472[(15)] = inst_25432);

return statearr_25472;
})();
if(cljs.core.truth_(inst_25433)){
var statearr_25473_25504 = state_25444__$1;
(statearr_25473_25504[(1)] = (21));

} else {
var statearr_25474_25505 = state_25444__$1;
(statearr_25474_25505[(1)] = (22));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (5))){
var inst_25388 = cljs.core.async.close_BANG_(out);
var state_25444__$1 = state_25444;
var statearr_25475_25506 = state_25444__$1;
(statearr_25475_25506[(2)] = inst_25388);

(statearr_25475_25506[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (14))){
var inst_25410 = (state_25444[(7)]);
var inst_25412 = cljs.core.chunked_seq_QMARK_(inst_25410);
var state_25444__$1 = state_25444;
if(inst_25412){
var statearr_25476_25507 = state_25444__$1;
(statearr_25476_25507[(1)] = (17));

} else {
var statearr_25477_25508 = state_25444__$1;
(statearr_25477_25508[(1)] = (18));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (16))){
var inst_25428 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25478_25509 = state_25444__$1;
(statearr_25478_25509[(2)] = inst_25428);

(statearr_25478_25509[(1)] = (12));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25445 === (10))){
var inst_25399 = (state_25444[(8)]);
var inst_25397 = (state_25444[(11)]);
var inst_25404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25397,inst_25399);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25444__$1,(13),out,inst_25404);
} else {
if((state_val_25445 === (18))){
var inst_25410 = (state_25444[(7)]);
var inst_25419 = cljs.core.first(inst_25410);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25444__$1,(20),out,inst_25419);
} else {
if((state_val_25445 === (8))){
var inst_25399 = (state_25444[(8)]);
var inst_25398 = (state_25444[(12)]);
var inst_25401 = (inst_25399 < inst_25398);
var inst_25402 = inst_25401;
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25402)){
var statearr_25479_25510 = state_25444__$1;
(statearr_25479_25510[(1)] = (10));

} else {
var statearr_25480_25511 = state_25444__$1;
(statearr_25480_25511[(1)] = (11));

}

return cljs.core.constant$keyword$31;
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
});})(c__11164__auto__))
;
return ((function (switch__11084__auto__,c__11164__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25484[(0)] = state_machine__11085__auto__);

(statearr_25484[(1)] = (1));

return statearr_25484;
});
var state_machine__11085__auto____1 = (function (state_25444){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_25444);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25485){if((e25485 instanceof Object)){
var ex__11088__auto__ = e25485;
var statearr_25486_25512 = state_25444;
(statearr_25486_25512[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25444);

return cljs.core.constant$keyword$31;
} else {
throw e25485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25513 = state_25444;
state_25444 = G__25513;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_25444){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_25444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__))
})();
var state__11166__auto__ = (function (){var statearr_25487 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_25487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__))
);

return c__11164__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11164__auto___25618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___25618,out){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___25618,out){
return (function (state_25593){
var state_val_25594 = (state_25593[(1)]);
if((state_val_25594 === (7))){
var inst_25588 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25595_25619 = state_25593__$1;
(statearr_25595_25619[(2)] = inst_25588);

(statearr_25595_25619[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (1))){
var inst_25570 = null;
var state_25593__$1 = (function (){var statearr_25596 = state_25593;
(statearr_25596[(7)] = inst_25570);

return statearr_25596;
})();
var statearr_25597_25620 = state_25593__$1;
(statearr_25597_25620[(2)] = null);

(statearr_25597_25620[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (4))){
var inst_25573 = (state_25593[(8)]);
var inst_25573__$1 = (state_25593[(2)]);
var inst_25574 = (inst_25573__$1 == null);
var inst_25575 = cljs.core.not(inst_25574);
var state_25593__$1 = (function (){var statearr_25598 = state_25593;
(statearr_25598[(8)] = inst_25573__$1);

return statearr_25598;
})();
if(inst_25575){
var statearr_25599_25621 = state_25593__$1;
(statearr_25599_25621[(1)] = (5));

} else {
var statearr_25600_25622 = state_25593__$1;
(statearr_25600_25622[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (6))){
var state_25593__$1 = state_25593;
var statearr_25601_25623 = state_25593__$1;
(statearr_25601_25623[(2)] = null);

(statearr_25601_25623[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (3))){
var inst_25590 = (state_25593[(2)]);
var inst_25591 = cljs.core.async.close_BANG_(out);
var state_25593__$1 = (function (){var statearr_25602 = state_25593;
(statearr_25602[(9)] = inst_25590);

return statearr_25602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25593__$1,inst_25591);
} else {
if((state_val_25594 === (2))){
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25593__$1,(4),ch);
} else {
if((state_val_25594 === (11))){
var inst_25573 = (state_25593[(8)]);
var inst_25582 = (state_25593[(2)]);
var inst_25570 = inst_25573;
var state_25593__$1 = (function (){var statearr_25603 = state_25593;
(statearr_25603[(7)] = inst_25570);

(statearr_25603[(10)] = inst_25582);

return statearr_25603;
})();
var statearr_25604_25624 = state_25593__$1;
(statearr_25604_25624[(2)] = null);

(statearr_25604_25624[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (9))){
var inst_25573 = (state_25593[(8)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25593__$1,(11),out,inst_25573);
} else {
if((state_val_25594 === (5))){
var inst_25573 = (state_25593[(8)]);
var inst_25570 = (state_25593[(7)]);
var inst_25577 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25573,inst_25570);
var state_25593__$1 = state_25593;
if(inst_25577){
var statearr_25606_25625 = state_25593__$1;
(statearr_25606_25625[(1)] = (8));

} else {
var statearr_25607_25626 = state_25593__$1;
(statearr_25607_25626[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (10))){
var inst_25585 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25608_25627 = state_25593__$1;
(statearr_25608_25627[(2)] = inst_25585);

(statearr_25608_25627[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25594 === (8))){
var inst_25570 = (state_25593[(7)]);
var tmp25605 = inst_25570;
var inst_25570__$1 = tmp25605;
var state_25593__$1 = (function (){var statearr_25609 = state_25593;
(statearr_25609[(7)] = inst_25570__$1);

return statearr_25609;
})();
var statearr_25610_25628 = state_25593__$1;
(statearr_25610_25628[(2)] = null);

(statearr_25610_25628[(1)] = (2));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___25618,out))
;
return ((function (switch__11084__auto__,c__11164__auto___25618,out){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25614[(0)] = state_machine__11085__auto__);

(statearr_25614[(1)] = (1));

return statearr_25614;
});
var state_machine__11085__auto____1 = (function (state_25593){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_25593);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25615){if((e25615 instanceof Object)){
var ex__11088__auto__ = e25615;
var statearr_25616_25629 = state_25593;
(statearr_25616_25629[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25593);

return cljs.core.constant$keyword$31;
} else {
throw e25615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25630 = state_25593;
state_25593 = G__25630;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_25593){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_25593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___25618,out))
})();
var state__11166__auto__ = (function (){var statearr_25617 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___25618);

return statearr_25617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___25618,out))
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
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11164__auto___25768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___25768,out){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___25768,out){
return (function (state_25738){
var state_val_25739 = (state_25738[(1)]);
if((state_val_25739 === (7))){
var inst_25734 = (state_25738[(2)]);
var state_25738__$1 = state_25738;
var statearr_25740_25769 = state_25738__$1;
(statearr_25740_25769[(2)] = inst_25734);

(statearr_25740_25769[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (1))){
var inst_25701 = (new Array(n));
var inst_25702 = inst_25701;
var inst_25703 = (0);
var state_25738__$1 = (function (){var statearr_25741 = state_25738;
(statearr_25741[(7)] = inst_25702);

(statearr_25741[(8)] = inst_25703);

return statearr_25741;
})();
var statearr_25742_25770 = state_25738__$1;
(statearr_25742_25770[(2)] = null);

(statearr_25742_25770[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (4))){
var inst_25706 = (state_25738[(9)]);
var inst_25706__$1 = (state_25738[(2)]);
var inst_25707 = (inst_25706__$1 == null);
var inst_25708 = cljs.core.not(inst_25707);
var state_25738__$1 = (function (){var statearr_25743 = state_25738;
(statearr_25743[(9)] = inst_25706__$1);

return statearr_25743;
})();
if(inst_25708){
var statearr_25744_25771 = state_25738__$1;
(statearr_25744_25771[(1)] = (5));

} else {
var statearr_25745_25772 = state_25738__$1;
(statearr_25745_25772[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (15))){
var inst_25728 = (state_25738[(2)]);
var state_25738__$1 = state_25738;
var statearr_25746_25773 = state_25738__$1;
(statearr_25746_25773[(2)] = inst_25728);

(statearr_25746_25773[(1)] = (14));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (13))){
var state_25738__$1 = state_25738;
var statearr_25747_25774 = state_25738__$1;
(statearr_25747_25774[(2)] = null);

(statearr_25747_25774[(1)] = (14));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (6))){
var inst_25703 = (state_25738[(8)]);
var inst_25724 = (inst_25703 > (0));
var state_25738__$1 = state_25738;
if(cljs.core.truth_(inst_25724)){
var statearr_25748_25775 = state_25738__$1;
(statearr_25748_25775[(1)] = (12));

} else {
var statearr_25749_25776 = state_25738__$1;
(statearr_25749_25776[(1)] = (13));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (3))){
var inst_25736 = (state_25738[(2)]);
var state_25738__$1 = state_25738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25738__$1,inst_25736);
} else {
if((state_val_25739 === (12))){
var inst_25702 = (state_25738[(7)]);
var inst_25726 = cljs.core.vec(inst_25702);
var state_25738__$1 = state_25738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25738__$1,(15),out,inst_25726);
} else {
if((state_val_25739 === (2))){
var state_25738__$1 = state_25738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25738__$1,(4),ch);
} else {
if((state_val_25739 === (11))){
var inst_25718 = (state_25738[(2)]);
var inst_25719 = (new Array(n));
var inst_25702 = inst_25719;
var inst_25703 = (0);
var state_25738__$1 = (function (){var statearr_25750 = state_25738;
(statearr_25750[(10)] = inst_25718);

(statearr_25750[(7)] = inst_25702);

(statearr_25750[(8)] = inst_25703);

return statearr_25750;
})();
var statearr_25751_25777 = state_25738__$1;
(statearr_25751_25777[(2)] = null);

(statearr_25751_25777[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (9))){
var inst_25702 = (state_25738[(7)]);
var inst_25716 = cljs.core.vec(inst_25702);
var state_25738__$1 = state_25738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25738__$1,(11),out,inst_25716);
} else {
if((state_val_25739 === (5))){
var inst_25711 = (state_25738[(11)]);
var inst_25702 = (state_25738[(7)]);
var inst_25703 = (state_25738[(8)]);
var inst_25706 = (state_25738[(9)]);
var inst_25710 = (inst_25702[inst_25703] = inst_25706);
var inst_25711__$1 = (inst_25703 + (1));
var inst_25712 = (inst_25711__$1 < n);
var state_25738__$1 = (function (){var statearr_25752 = state_25738;
(statearr_25752[(11)] = inst_25711__$1);

(statearr_25752[(12)] = inst_25710);

return statearr_25752;
})();
if(cljs.core.truth_(inst_25712)){
var statearr_25753_25778 = state_25738__$1;
(statearr_25753_25778[(1)] = (8));

} else {
var statearr_25754_25779 = state_25738__$1;
(statearr_25754_25779[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (14))){
var inst_25731 = (state_25738[(2)]);
var inst_25732 = cljs.core.async.close_BANG_(out);
var state_25738__$1 = (function (){var statearr_25756 = state_25738;
(statearr_25756[(13)] = inst_25731);

return statearr_25756;
})();
var statearr_25757_25780 = state_25738__$1;
(statearr_25757_25780[(2)] = inst_25732);

(statearr_25757_25780[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (10))){
var inst_25722 = (state_25738[(2)]);
var state_25738__$1 = state_25738;
var statearr_25758_25781 = state_25738__$1;
(statearr_25758_25781[(2)] = inst_25722);

(statearr_25758_25781[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25739 === (8))){
var inst_25711 = (state_25738[(11)]);
var inst_25702 = (state_25738[(7)]);
var tmp25755 = inst_25702;
var inst_25702__$1 = tmp25755;
var inst_25703 = inst_25711;
var state_25738__$1 = (function (){var statearr_25759 = state_25738;
(statearr_25759[(7)] = inst_25702__$1);

(statearr_25759[(8)] = inst_25703);

return statearr_25759;
})();
var statearr_25760_25782 = state_25738__$1;
(statearr_25760_25782[(2)] = null);

(statearr_25760_25782[(1)] = (2));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___25768,out))
;
return ((function (switch__11084__auto__,c__11164__auto___25768,out){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25764[(0)] = state_machine__11085__auto__);

(statearr_25764[(1)] = (1));

return statearr_25764;
});
var state_machine__11085__auto____1 = (function (state_25738){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_25738);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object)){
var ex__11088__auto__ = e25765;
var statearr_25766_25783 = state_25738;
(statearr_25766_25783[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25738);

return cljs.core.constant$keyword$31;
} else {
throw e25765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25784 = state_25738;
state_25738 = G__25784;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_25738){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_25738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___25768,out))
})();
var state__11166__auto__ = (function (){var statearr_25767 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___25768);

return statearr_25767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___25768,out))
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
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11164__auto___25932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto___25932,out){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto___25932,out){
return (function (state_25901){
var state_val_25902 = (state_25901[(1)]);
if((state_val_25902 === (7))){
var inst_25897 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25903_25933 = state_25901__$1;
(statearr_25903_25933[(2)] = inst_25897);

(statearr_25903_25933[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (1))){
var inst_25860 = [];
var inst_25861 = inst_25860;
var inst_25862 = cljs.core.constant$keyword$46;
var state_25901__$1 = (function (){var statearr_25904 = state_25901;
(statearr_25904[(7)] = inst_25861);

(statearr_25904[(8)] = inst_25862);

return statearr_25904;
})();
var statearr_25905_25934 = state_25901__$1;
(statearr_25905_25934[(2)] = null);

(statearr_25905_25934[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (4))){
var inst_25865 = (state_25901[(9)]);
var inst_25865__$1 = (state_25901[(2)]);
var inst_25866 = (inst_25865__$1 == null);
var inst_25867 = cljs.core.not(inst_25866);
var state_25901__$1 = (function (){var statearr_25906 = state_25901;
(statearr_25906[(9)] = inst_25865__$1);

return statearr_25906;
})();
if(inst_25867){
var statearr_25907_25935 = state_25901__$1;
(statearr_25907_25935[(1)] = (5));

} else {
var statearr_25908_25936 = state_25901__$1;
(statearr_25908_25936[(1)] = (6));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (15))){
var inst_25891 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25909_25937 = state_25901__$1;
(statearr_25909_25937[(2)] = inst_25891);

(statearr_25909_25937[(1)] = (14));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (13))){
var state_25901__$1 = state_25901;
var statearr_25910_25938 = state_25901__$1;
(statearr_25910_25938[(2)] = null);

(statearr_25910_25938[(1)] = (14));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (6))){
var inst_25861 = (state_25901[(7)]);
var inst_25886 = inst_25861.length;
var inst_25887 = (inst_25886 > (0));
var state_25901__$1 = state_25901;
if(cljs.core.truth_(inst_25887)){
var statearr_25911_25939 = state_25901__$1;
(statearr_25911_25939[(1)] = (12));

} else {
var statearr_25912_25940 = state_25901__$1;
(statearr_25912_25940[(1)] = (13));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (3))){
var inst_25899 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25901__$1,inst_25899);
} else {
if((state_val_25902 === (12))){
var inst_25861 = (state_25901[(7)]);
var inst_25889 = cljs.core.vec(inst_25861);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25901__$1,(15),out,inst_25889);
} else {
if((state_val_25902 === (2))){
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25901__$1,(4),ch);
} else {
if((state_val_25902 === (11))){
var inst_25865 = (state_25901[(9)]);
var inst_25869 = (state_25901[(10)]);
var inst_25879 = (state_25901[(2)]);
var inst_25880 = [];
var inst_25881 = inst_25880.push(inst_25865);
var inst_25861 = inst_25880;
var inst_25862 = inst_25869;
var state_25901__$1 = (function (){var statearr_25913 = state_25901;
(statearr_25913[(11)] = inst_25881);

(statearr_25913[(7)] = inst_25861);

(statearr_25913[(12)] = inst_25879);

(statearr_25913[(8)] = inst_25862);

return statearr_25913;
})();
var statearr_25914_25941 = state_25901__$1;
(statearr_25914_25941[(2)] = null);

(statearr_25914_25941[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (9))){
var inst_25861 = (state_25901[(7)]);
var inst_25877 = cljs.core.vec(inst_25861);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25901__$1,(11),out,inst_25877);
} else {
if((state_val_25902 === (5))){
var inst_25865 = (state_25901[(9)]);
var inst_25869 = (state_25901[(10)]);
var inst_25862 = (state_25901[(8)]);
var inst_25869__$1 = (function (){var G__25915 = inst_25865;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25915) : f.call(null,G__25915));
})();
var inst_25870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25869__$1,inst_25862);
var inst_25871 = cljs.core.keyword_identical_QMARK_(inst_25862,cljs.core.constant$keyword$46);
var inst_25872 = (inst_25870) || (inst_25871);
var state_25901__$1 = (function (){var statearr_25916 = state_25901;
(statearr_25916[(10)] = inst_25869__$1);

return statearr_25916;
})();
if(cljs.core.truth_(inst_25872)){
var statearr_25917_25942 = state_25901__$1;
(statearr_25917_25942[(1)] = (8));

} else {
var statearr_25918_25943 = state_25901__$1;
(statearr_25918_25943[(1)] = (9));

}

return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (14))){
var inst_25894 = (state_25901[(2)]);
var inst_25895 = cljs.core.async.close_BANG_(out);
var state_25901__$1 = (function (){var statearr_25920 = state_25901;
(statearr_25920[(13)] = inst_25894);

return statearr_25920;
})();
var statearr_25921_25944 = state_25901__$1;
(statearr_25921_25944[(2)] = inst_25895);

(statearr_25921_25944[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (10))){
var inst_25884 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25922_25945 = state_25901__$1;
(statearr_25922_25945[(2)] = inst_25884);

(statearr_25922_25945[(1)] = (7));


return cljs.core.constant$keyword$31;
} else {
if((state_val_25902 === (8))){
var inst_25865 = (state_25901[(9)]);
var inst_25869 = (state_25901[(10)]);
var inst_25861 = (state_25901[(7)]);
var inst_25874 = inst_25861.push(inst_25865);
var tmp25919 = inst_25861;
var inst_25861__$1 = tmp25919;
var inst_25862 = inst_25869;
var state_25901__$1 = (function (){var statearr_25923 = state_25901;
(statearr_25923[(14)] = inst_25874);

(statearr_25923[(7)] = inst_25861__$1);

(statearr_25923[(8)] = inst_25862);

return statearr_25923;
})();
var statearr_25924_25946 = state_25901__$1;
(statearr_25924_25946[(2)] = null);

(statearr_25924_25946[(1)] = (2));


return cljs.core.constant$keyword$31;
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
});})(c__11164__auto___25932,out))
;
return ((function (switch__11084__auto__,c__11164__auto___25932,out){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_25928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25928[(0)] = state_machine__11085__auto__);

(statearr_25928[(1)] = (1));

return statearr_25928;
});
var state_machine__11085__auto____1 = (function (state_25901){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_25901);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e25929){if((e25929 instanceof Object)){
var ex__11088__auto__ = e25929;
var statearr_25930_25947 = state_25901;
(statearr_25930_25947[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25901);

return cljs.core.constant$keyword$31;
} else {
throw e25929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__25948 = state_25901;
state_25901 = G__25948;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_25901){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_25901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto___25932,out))
})();
var state__11166__auto__ = (function (){var statearr_25931 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_25931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___25932);

return statearr_25931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto___25932,out))
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
