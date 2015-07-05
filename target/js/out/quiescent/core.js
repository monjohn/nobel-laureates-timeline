// Compiled by ClojureScript 0.0-2760 {}
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
var this__9277__auto__ = this;
var _STAR_component_STAR_25020 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__9277__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25020;
}});
});
var with_old_value = ((function (basic){
return (function (impl){
return ((function (basic){
return (function (prev_props,_){
var this__9277__auto__ = this;
var _STAR_component_STAR_25021 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__9277__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,prev_props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25021;
}});
;})(basic))
});})(basic))
;
var with_nil_old_value = ((function (basic,with_old_value){
return (function (impl){
return ((function (basic,with_old_value){
return (function (){
var this__9277__auto__ = this;
var _STAR_component_STAR_25022 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__9277__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,null,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25022;
}});
;})(basic,with_old_value))
});})(basic,with_old_value))
;
var with_callback = ((function (basic,with_old_value,with_nil_old_value){
return (function (impl){
return ((function (basic,with_old_value,with_nil_old_value){
return (function (cb){
var this__9277__auto__ = this;
var _STAR_component_STAR_25023 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__9277__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),cb,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25023;
}});
;})(basic,with_old_value,with_nil_old_value))
});})(basic,with_old_value,with_nil_old_value))
;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),basic], null),new cljs.core.Keyword(null,"on-update","on-update",1680216496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),with_old_value], null),new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),basic], null),new cljs.core.Keyword(null,"on-render","on-render",2096729391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),with_old_value,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),with_nil_old_value], null),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillEnter","componentWillEnter",395203025),with_callback], null),new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidEnter","componentDidEnter",1501589550),basic], null),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillLeave","componentWillLeave",905096086),with_callback], null),new cljs.core.Keyword(null,"did-leave","did-leave",1577156642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidLeave","componentDidLeave",-923423498),basic], null)], null);
})();
quiescent.core.build_lifecycle_impls = (function build_lifecycle_impls(opts_map){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,(function (_,___$1){
throw "Component definition should not provide handlers for both :on-render and (:on-mount | :on-update).";
})),cljs.core.map.call(null,(function (p__25034){
var vec__25035 = p__25034;
var key = cljs.core.nth.call(null,vec__25035,(0),null);
var impl = cljs.core.nth.call(null,vec__25035,(1),null);
var temp__4126__auto__ = quiescent.core.lifecycle_impls.call(null,key);
if(cljs.core.truth_(temp__4126__auto__)){
var impl_map = temp__4126__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4491__auto__ = ((function (impl_map,temp__4126__auto__,vec__25035,key,impl){
return (function iter__25036(s__25037){
return (new cljs.core.LazySeq(null,((function (impl_map,temp__4126__auto__,vec__25035,key,impl){
return (function (){
var s__25037__$1 = s__25037;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__25037__$1);
if(temp__4126__auto____$1){
var s__25037__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25037__$2)){
var c__4489__auto__ = cljs.core.chunk_first.call(null,s__25037__$2);
var size__4490__auto__ = cljs.core.count.call(null,c__4489__auto__);
var b__25039 = cljs.core.chunk_buffer.call(null,size__4490__auto__);
if((function (){var i__25038 = (0);
while(true){
if((i__25038 < size__4490__auto__)){
var vec__25042 = cljs.core._nth.call(null,c__4489__auto__,i__25038);
var method = cljs.core.nth.call(null,vec__25042,(0),null);
var impl_ctor = cljs.core.nth.call(null,vec__25042,(1),null);
cljs.core.chunk_append.call(null,b__25039,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,impl_ctor.call(null,impl)], null));

var G__25044 = (i__25038 + (1));
i__25038 = G__25044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25039),iter__25036.call(null,cljs.core.chunk_rest.call(null,s__25037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25039),null);
}
} else {
var vec__25043 = cljs.core.first.call(null,s__25037__$2);
var method = cljs.core.nth.call(null,vec__25043,(0),null);
var impl_ctor = cljs.core.nth.call(null,vec__25043,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,impl_ctor.call(null,impl)], null),iter__25036.call(null,cljs.core.rest.call(null,s__25037__$2)));
}
} else {
return null;
}
break;
}
});})(impl_map,temp__4126__auto__,vec__25035,key,impl))
,null,null));
});})(impl_map,temp__4126__auto__,vec__25035,key,impl))
;
return iter__4491__auto__.call(null,impl_map);
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
return component.call(null,renderer,cljs.core.PersistentArrayMap.EMPTY);
});
var component__2 = (function (renderer,opts){
var impl = cljs.core.merge.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (next_props,_){
var this__9277__auto__ = this;
var _STAR_component_STAR_25049 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__9277__auto__;

try{return cljs.core.not_EQ_.call(null,quiescent.core._STAR_component_STAR_.props.value,next_props.value);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25049;
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this__9277__auto__ = this;
var _STAR_component_STAR_25050 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__9277__auto__;

try{return cljs.core.apply.call(null,renderer,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25050;
}})], null),quiescent.core.build_lifecycle_impls.call(null,opts));
var react_component = React.createClass(cljs.core.clj__GT_js.call(null,impl));
return ((function (impl,react_component){
return (function() { 
var G__25053__delegate = function (value,constant_args){
var props = (function (){var obj25052 = {};
return obj25052;
})();
props.value = value;

props.constants = constant_args;

var temp__4126__auto___25054 = new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4126__auto___25054)){
var keyfn_25055 = temp__4126__auto___25054;
props.key = keyfn_25055.call(null,value);
} else {
}

return React.createElement(react_component,props);
};
var G__25053 = function (value,var_args){
var constant_args = null;
if (arguments.length > 1) {
var G__25056__i = 0, G__25056__a = new Array(arguments.length -  1);
while (G__25056__i < G__25056__a.length) {G__25056__a[G__25056__i] = arguments[G__25056__i + 1]; ++G__25056__i;}
  constant_args = new cljs.core.IndexedSeq(G__25056__a,0);
} 
return G__25053__delegate.call(this,value,constant_args);};
G__25053.cljs$lang$maxFixedArity = 1;
G__25053.cljs$lang$applyTo = (function (arglist__25057){
var value = cljs.core.first(arglist__25057);
var constant_args = cljs.core.rest(arglist__25057);
return G__25053__delegate(value,constant_args);
});
G__25053.cljs$core$IFn$_invoke$arity$variadic = G__25053__delegate;
return G__25053;
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
var factory_25058 = React.createFactory(React.addons.CSSTransitionGroup);
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
quiescent.core.CSSTransitionGroup = ((function (factory_25058){
return (function CSSTransitionGroup(opts,children){
return factory_25058.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"children","children",-940561982),children)));
});})(factory_25058))
;
var factory_25059 = React.createFactory(React.addons.TransitionGroup);
/**
* Return a TransitionGroup ReactElement, with the specified properties and children.
* 
* Note that unlike DOM factories, children is a single argument containing a seq of children, not
* a vararg.
* 
* See http://facebook.github.io/react/docs/animation.html for details on how TransitionGroup
* works.
*/
quiescent.core.TransitionGroup = ((function (factory_25059){
return (function TransitionGroup(props,children){
return factory_25059.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982),children)));
});})(factory_25059))
;
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.core.WrapperComponent = React.createClass({"componentWillUnmount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25064 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25064;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25063 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25063;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25062 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25062;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25061 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25061;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25060 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_25060;
}} else {
return null;
}
}), "render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
})});
var did_warn_25065 = cljs.core.atom.call(null,false);
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
quiescent.core.wrapper = ((function (did_warn_25065){
return (function() { 
var wrapper__delegate = function (child,kvs){
if(cljs.core.truth_(cljs.core.deref.call(null,did_warn_25065))){
} else {
cljs.core.reset_BANG_.call(null,did_warn_25065,true);

console.log("WARNING: Quiescent's wrapping functionality is deprecated. Please see the\n      release notes for v0.2. Instead, define lifecycle hooks at component creation time.");
}

var props = cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",876822573),child,kvs));
var temp__4126__auto___25066 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___25066)){
var key_25067 = temp__4126__auto___25066;
(props["key"] = key_25067);
} else {
}

return React.createElement(quiescent.core.WrapperComponent,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__25068__i = 0, G__25068__a = new Array(arguments.length -  1);
while (G__25068__i < G__25068__a.length) {G__25068__a[G__25068__i] = arguments[G__25068__i + 1]; ++G__25068__i;}
  kvs = new cljs.core.IndexedSeq(G__25068__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__25069){
var child = cljs.core.first(arglist__25069);
var kvs = cljs.core.rest(arglist__25069);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;})(did_warn_25065))
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f);
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f);
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
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
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",-16104606),f);
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
return quiescent.core.unmount.call(null,node);
});

//# sourceMappingURL=core.js.map