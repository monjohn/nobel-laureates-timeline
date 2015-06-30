// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('quiescent.core');
goog.require('cljs.core');
/**
* Within a component lifecycle function, is be bound to the underlying ReactJS instance.
*/
quiescent.core._STAR_component_STAR_ = null;
/**
* Mapping of public lifecycle API to internal ReactJS API.
*/
quiescent.core.lifecycle_impls = (function (){var basic = (function (impl){
return (function (){
var this__14198__auto__ = this;
var _STAR_component_STAR_30965 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__14198__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_30965;
}});
});
var with_old_value = ((function (basic){
return (function (impl){
return ((function (basic){
return (function (prev_props,_){
var this__14198__auto__ = this;
var _STAR_component_STAR_30966 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__14198__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,prev_props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_30966;
}});
;})(basic))
});})(basic))
;
var with_nil_old_value = ((function (basic,with_old_value){
return (function (impl){
return ((function (basic,with_old_value){
return (function (){
var this__14198__auto__ = this;
var _STAR_component_STAR_30967 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__14198__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,null,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_30967;
}});
;})(basic,with_old_value))
});})(basic,with_old_value))
;
var with_callback = ((function (basic,with_old_value,with_nil_old_value){
return (function (impl){
return ((function (basic,with_old_value,with_nil_old_value){
return (function (cb){
var this__14198__auto__ = this;
var _STAR_component_STAR_30968 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__14198__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(impl,quiescent.core._STAR_component_STAR_.getDOMNode(),cb,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_30968;
}});
;})(basic,with_old_value,with_nil_old_value))
});})(basic,with_old_value,with_nil_old_value))
;
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$47,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,basic], null),cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,with_old_value], null),cljs.core.constant$keyword$49,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,basic], null),cljs.core.constant$keyword$50,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,with_old_value,cljs.core.constant$keyword$55,with_nil_old_value], null),cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$58,with_callback], null),cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,basic], null),cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$60,with_callback], null),cljs.core.constant$keyword$54,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$61,basic], null)], null);
})();
quiescent.core.build_lifecycle_impls = (function build_lifecycle_impls(opts_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,(function (_,___$1){
throw "Component definition should not provide handlers for both :on-render and (:on-mount | :on-update).";
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30986){
var vec__30987 = p__30986;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30987,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30987,(1),null);
var temp__4126__auto__ = (function (){var G__30988 = key;
return (quiescent.core.lifecycle_impls.cljs$core$IFn$_invoke$arity$1 ? quiescent.core.lifecycle_impls.cljs$core$IFn$_invoke$arity$1(G__30988) : quiescent.core.lifecycle_impls.call(null,G__30988));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var impl_map = temp__4126__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4491__auto__ = ((function (impl_map,temp__4126__auto__,vec__30987,key,impl){
return (function iter__30989(s__30990){
return (new cljs.core.LazySeq(null,((function (impl_map,temp__4126__auto__,vec__30987,key,impl){
return (function (){
var s__30990__$1 = s__30990;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__30990__$1);
if(temp__4126__auto____$1){
var s__30990__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30990__$2)){
var c__4489__auto__ = cljs.core.chunk_first(s__30990__$2);
var size__4490__auto__ = cljs.core.count(c__4489__auto__);
var b__30992 = cljs.core.chunk_buffer(size__4490__auto__);
if((function (){var i__30991 = (0);
while(true){
if((i__30991 < size__4490__auto__)){
var vec__30999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4489__auto__,i__30991);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(0),null);
var impl_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(1),null);
cljs.core.chunk_append(b__30992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,(function (){var G__31000 = impl;
return (impl_ctor.cljs$core$IFn$_invoke$arity$1 ? impl_ctor.cljs$core$IFn$_invoke$arity$1(G__31000) : impl_ctor.call(null,G__31000));
})()], null));

var G__31003 = (i__30991 + (1));
i__30991 = G__31003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30992),iter__30989(cljs.core.chunk_rest(s__30990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30992),null);
}
} else {
var vec__31001 = cljs.core.first(s__30990__$2);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31001,(0),null);
var impl_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31001,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,(function (){var G__31002 = impl;
return (impl_ctor.cljs$core$IFn$_invoke$arity$1 ? impl_ctor.cljs$core$IFn$_invoke$arity$1(G__31002) : impl_ctor.call(null,G__31002));
})()], null),iter__30989(cljs.core.rest(s__30990__$2)));
}
} else {
return null;
}
break;
}
});})(impl_map,temp__4126__auto__,vec__30987,key,impl))
,null,null));
});})(impl_map,temp__4126__auto__,vec__30987,key,impl))
;
return iter__4491__auto__(impl_map);
})());
} else {
return null;
}
}),opts_map));
});
/**
* Return a factory function that will create a ReactElement, using the provided function as the
* 'render' method for a ReactJS component, which is created and instantiated behind-the-scenes.
* 
* The given render function should take a single immutable value as its first argument, and return
* a single ReactElement. Additional arguments to the returned factory function are
* /constant arguments/  which will be passed on as additional arguments to the  supplied render
* function, but will *not* be included in any calculations regarding whether the element should
* re-render. As such, they are suitable for values that will remain constant for  the lifetime of
* the rendered element, such as message channels and configuration objects.
* 
* The optional 'opts' argument is a map which contains additional configuration keys:
* 
* :keyfn - a single-argument function which is invoked at component construction time. It is
* passed the component's value, and returns the ReactJS key used to uniquely identify this
* component among its children.
* 
* :name - the name of the element, used for debugging purposes.
* 
* :on-mount - A function which will be invoked once, immediately after initial rendering occurs.
* It is passed the DOM node, the value and any constant args passed to the render fn. This maps
* to the 'componentDidMount' lifecycle method in ReactJS.
* 
* :on-update - A function which will be invoked immediately after an update is flushed to the DOM,
* but not on the initial render. It is is passed the underlying DOM node, the value,
* the _old_ value, and any constant args passed to the render fn. This maps to the
* 'componentDidUpdate' lifecycle method in ReactJS.
* 
* :on-unmount - A function which will be invoked immediately before a the component is unmounted
* from the DOM. It is passed the underlying DOM node, the most recent value and the most recent
* constant args passed to the render fn. This maps to the 'componentWillUnmmount' lifecycle
* method in ReactJS.
* 
* :on-render - A function which will be invoked immediately after the DOM is updated, both on the
* initial render and any subsequent updates. It is is passed the underlying DOM node, the
* value, the _old_  value (which will be nil in the case of the initial render) and any constant
* args passed to the render fn. This maps to both the 'componentDidMount' and
* 'componentDidUpdate' lifecycle methods in ReactJS.
* 
* :will-enter - A function invoked whenever this component is added to a ReactTransitionGroup.
* Invoked at the same time as :onMount. Is passed the underlying DOM node, a callback
* function, the value and any constant args passed to the render fn. Maps to the
* 'componentWillEnter' lifecycle  method in ReactJS. See the ReactJS documentation at
* http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
* 
* :did-enter - A function invoked after the callback provided to :willEnter is called. It is
* passed the underlying DOM node, the value and any constant args passed to the render fn. Maps
* to the 'componentDidEnter' lifecycle method in ReactJS. See the ReactJS documentation at
* http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
* 
* :will-leave - A function invoked whenever this component is removed from a ReactTransitionGroup.
* Is passed the underlying DOM node, a callback function, the most recent value and the most
* recent constant args passed to the render fn. The DOM node will not be removed until the
* callback is called. Maps to the 'componentWillEnter' lifecycle method in ReactJS. See the
* ReactJS documentation at http://facebook.github.io/react/docs/animation.html for full
* documentation of the behavior.
* 
* :did-leave - A function invoked after the callback provided to :willLeave is called (at the same
* time as :onUnMount). Is passed the underlying DOM node, the most recent value and the most
* recent constant args passed to the render fn. Maps to the 'componentDidLeave' lifecycle method
* in ReactJS. See the ReactJS  documentation at
* http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
* 
* The *component* dynamic var will be bound to the underlying ReactJS component for all invocations
* of the render function and invocations of functions defined in the opts map.
*/
quiescent.core.component = (function() {
var component = null;
var component__1 = (function (renderer){
return component.cljs$core$IFn$_invoke$arity$2(renderer,cljs.core.PersistentArrayMap.EMPTY);
});
var component__2 = (function (renderer,opts){
var impl = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$63,cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(opts)], null):null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,(function (next_props,_){
var this__14198__auto__ = this;
var _STAR_component_STAR_31011 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__14198__auto__;

try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(quiescent.core._STAR_component_STAR_.props.value,next_props.value);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31011;
}}),cljs.core.constant$keyword$65,(function (){
var this__14198__auto__ = this;
var _STAR_component_STAR_31012 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__14198__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31012;
}})], null),quiescent.core.build_lifecycle_impls(opts)], 0));
var react_component = React.createClass(cljs.core.clj__GT_js(impl));
return ((function (impl,react_component){
return (function() { 
var G__31016__delegate = function (value,constant_args){
var props = (function (){var obj31014 = {};
return obj31014;
})();
props.value = value;

props.constants = constant_args;

var temp__4126__auto___31017 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4126__auto___31017)){
var keyfn_31018 = temp__4126__auto___31017;
props.key = (function (){var G__31015 = value;
return (keyfn_31018.cljs$core$IFn$_invoke$arity$1 ? keyfn_31018.cljs$core$IFn$_invoke$arity$1(G__31015) : keyfn_31018.call(null,G__31015));
})();
} else {
}

return React.createElement(react_component,props);
};
var G__31016 = function (value,var_args){
var constant_args = null;
if (arguments.length > 1) {
var G__31019__i = 0, G__31019__a = new Array(arguments.length -  1);
while (G__31019__i < G__31019__a.length) {G__31019__a[G__31019__i] = arguments[G__31019__i + 1]; ++G__31019__i;}
  constant_args = new cljs.core.IndexedSeq(G__31019__a,0);
} 
return G__31016__delegate.call(this,value,constant_args);};
G__31016.cljs$lang$maxFixedArity = 1;
G__31016.cljs$lang$applyTo = (function (arglist__31020){
var value = cljs.core.first(arglist__31020);
var constant_args = cljs.core.rest(arglist__31020);
return G__31016__delegate(value,constant_args);
});
G__31016.cljs$core$IFn$_invoke$arity$variadic = G__31016__delegate;
return G__31016;
})()
;
;})(impl,react_component))
});
component = function(renderer,opts){
switch(arguments.length){
case 1:
return component__1.call(this,renderer);
case 2:
return component__2.call(this,renderer,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
component.cljs$core$IFn$_invoke$arity$1 = component__1;
component.cljs$core$IFn$_invoke$arity$2 = component__2;
return component;
})()
;
/**
* Remove a mounted Element from the given DOM node.
*/
quiescent.core.unmount = (function unmount(node){
return React.unmountComponentAtNode(node);
});
var factory_31023 = React.createFactory(React.addons.CSSTransitionGroup);
/**
* Return a CSSTransitionGroup ReactElement, with the specified transition options and children.
* Options must contain at least a :transitionName key.
* 
* Note that unlike DOM factories, children is a single argument containing a seq of children, not
* a vararg.
* 
* See http://facebook.github.io/react/docs/animation.html for details on how CSSTransitionGroup
* works.
*/
quiescent.core.CSSTransitionGroup = ((function (factory_31023){
return (function CSSTransitionGroup(opts,children){
var G__31022 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$67,children));
return (factory_31023.cljs$core$IFn$_invoke$arity$1 ? factory_31023.cljs$core$IFn$_invoke$arity$1(G__31022) : factory_31023.call(null,G__31022));
});})(factory_31023))
;
var factory_31026 = React.createFactory(React.addons.TransitionGroup);
/**
* Return a TransitionGroup ReactElement, with the specified properties and children.
* 
* Note that unlike DOM factories, children is a single argument containing a seq of children, not
* a vararg.
* 
* See http://facebook.github.io/react/docs/animation.html for details on how TransitionGroup
* works.
*/
quiescent.core.TransitionGroup = ((function (factory_31026){
return (function TransitionGroup(props,children){
var G__31025 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.constant$keyword$67,children));
return (factory_31026.cljs$core$IFn$_invoke$arity$1 ? factory_31026.cljs$core$IFn$_invoke$arity$1(G__31025) : factory_31026.call(null,G__31025));
});})(factory_31026))
;
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.core.WrapperComponent = React.createClass({"componentWillUnmount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31033 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{var G__31034 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31034) : f.call(null,G__31034));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31033;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31032 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31032;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31031 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31031;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31029 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{var G__31030 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31030) : f.call(null,G__31030));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31029;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31027 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{var G__31028 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31028) : f.call(null,G__31028));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_31027;
}} else {
return null;
}
}), "render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
})});
var did_warn_31042 = (function (){var G__31035 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31035) : cljs.core.atom.call(null,G__31035));
})();
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.core.wrapper = ((function (did_warn_31042){
return (function() { 
var wrapper__delegate = function (child,kvs){
if(cljs.core.truth_((function (){var G__31039 = did_warn_31042;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31039) : cljs.core.deref.call(null,G__31039));
})())){
} else {
var G__31040_31043 = did_warn_31042;
var G__31041_31044 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31040_31043,G__31041_31044) : cljs.core.reset_BANG_.call(null,G__31040_31043,G__31041_31044));

console.log("WARNING: Quiescent's wrapping functionality is deprecated. Please see the\n      release notes for v0.2. Instead, define lifecycle hooks at component creation time.");
}

var props = cljs.core.clj__GT_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.array_map,cljs.core.constant$keyword$68,child,kvs));
var temp__4126__auto___31045 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___31045)){
var key_31046 = temp__4126__auto___31045;
(props["key"] = key_31046);
} else {
}

return React.createElement(quiescent.core.WrapperComponent,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__31047__i = 0, G__31047__a = new Array(arguments.length -  1);
while (G__31047__i < G__31047__a.length) {G__31047__a[G__31047__i] = arguments[G__31047__i + 1]; ++G__31047__i;}
  kvs = new cljs.core.IndexedSeq(G__31047__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__31048){
var child = cljs.core.first(arglist__31048);
var kvs = cljs.core.rest(arglist__31048);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;})(did_warn_31042))
;
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.core.on_update = (function on_update(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$69,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.core.on_mount = (function on_mount(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$70,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.core.on_render = (function on_render(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$70,f,cljs.core.constant$keyword$69,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.core.on_will_mount = (function on_will_mount(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$71,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.core.on_will_update = (function on_will_update(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$72,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.core.on_will_render = (function on_will_render(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$71,f,cljs.core.constant$keyword$72,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.core.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$73,f], 0));
});
/**
* DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
* methods at component creation time.
* 
* Given an Element, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.core.render = (function render(element,node){
return React.render(element,node);
});
/**
* DEPRECATED: Use 'unmount' instead.
*/
quiescent.core.unmount_at_node = (function unmount_at_node(node){
return quiescent.core.unmount(node);
});
