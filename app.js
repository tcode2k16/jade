!function t(e,n,i){function r(o,a){if(!n[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var c=n[o]={exports:{}};e[o][0].call(c.exports,function(t){var n=e[o][1][t];return r(n?n:t)},c,c.exports,t,e,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,e,n){!function(t,n,i,r){"use strict";function s(t,e,n){return setTimeout(c(t,n),e)}function o(t,e,n){return!!Array.isArray(t)&&(a(t,n[e],n),!0)}function a(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==r)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function u(e,n,i){var r="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,i),e.apply(this,arguments)}}function h(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&pt(i,n)}function c(t,e){return function(){return t.apply(e,arguments)}}function l(t,e){return typeof t==vt?t.apply(e?e[0]||r:r,e):t}function p(t,e){return t===r?e:t}function f(t,e,n){a(g(e),function(e){t.addEventListener(e,n,!1)})}function d(t,e,n){a(g(e),function(e){t.removeEventListener(e,n,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function m(t,e){return t.indexOf(e)>-1}function g(t){return t.trim().split(/\s+/g)}function y(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function T(t){return Array.prototype.slice.call(t,0)}function E(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];y(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function b(t,e){for(var n,i,s=e[0].toUpperCase()+e.slice(1),o=0;o<ft.length;){if(n=ft[o],i=n?n+s:e,i in t)return i;o++}return r}function I(){return bt++}function w(e){var n=e.ownerDocument||e;return n.defaultView||n.parentWindow||t}function _(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){l(t.options.enable,[t])&&n.handler(e)},this.init()}function x(t){var e,n=t.options.inputClass;return new(e=n?n:_t?k:xt?L:wt?j:W)(t,A)}function A(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&Mt&&i-r===0,o=e&(Rt|zt)&&i-r===0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,C(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function C(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=D(e)),r>1&&!n.firstMultiple?n.firstMultiple=D(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,u=e.center=M(i);e.timeStamp=yt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=N(a,u),e.distance=z(a,u),P(n,e),e.offsetDirection=R(e.deltaX,e.deltaY);var h=O(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=gt(h.x)>gt(h.y)?h.x:h.y,e.scale=o?Y(o.pointers,i):1,e.rotation=o?X(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,S(n,e);var c=t.element;v(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function P(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Mt&&s.eventType!==Rt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function S(t,e){var n,i,s,o,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(e.eventType!=zt&&(u>Dt||a.velocity===r)){var h=e.deltaX-a.deltaX,c=e.deltaY-a.deltaY,l=O(u,h,c);i=l.x,s=l.y,n=gt(l.x)>gt(l.y)?l.x:l.y,o=R(h,c),t.lastInterval=e}else n=a.velocity,i=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=n,e.velocityX=i,e.velocityY=s,e.direction=o}function D(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:mt(t.pointers[n].clientX),clientY:mt(t.pointers[n].clientY)},n++;return{timeStamp:yt(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:mt(t[0].clientX),y:mt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:mt(n/e),y:mt(i/e)}}function O(t,e,n){return{x:e/t||0,y:n/t||0}}function R(t,e){return t===e?Nt:gt(t)>=gt(e)?t<0?Xt:Yt:e<0?Wt:kt}function z(t,e,n){n||(n=Ht);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function N(t,e,n){n||(n=Ht);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function X(t,e){return N(e[1],e[0],jt)+N(t[1],t[0],jt)}function Y(t,e){return z(e[0],e[1],jt)/z(t[0],t[1],jt)}function W(){this.evEl=Vt,this.evWin=Gt,this.pressed=!1,_.apply(this,arguments)}function k(){this.evEl=$t,this.evWin=Jt,_.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function q(){this.evTarget=Qt,this.evWin=te,this.started=!1,_.apply(this,arguments)}function F(t,e){var n=T(t.touches),i=T(t.changedTouches);return e&(Rt|zt)&&(n=E(n.concat(i),"identifier",!0)),[n,i]}function L(){this.evTarget=ne,this.targetIds={},_.apply(this,arguments)}function H(t,e){var n=T(t.touches),i=this.targetIds;if(e&(Mt|Ot)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=T(t.changedTouches),a=[],u=this.target;if(s=n.filter(function(t){return v(t.target,u)}),e===Mt)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),e&(Rt|zt)&&delete i[o[r].identifier],r++;return a.length?[E(s.concat(a),"identifier",!0),a]:void 0}function j(){_.apply(this,arguments);var t=c(this.handler,this);this.touch=new L(this.manager,t),this.mouse=new W(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function U(t,e){t&Mt?(this.primaryTouch=e.changedPointers[0].identifier,V.call(this,e)):t&(Rt|zt)&&V.call(this,e)}function V(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,ie)}}function G(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(s<=re&&o<=re)return!0}return!1}function B(t,e){this.manager=t,this.set(e)}function Z(t){if(m(t,ce))return ce;var e=m(t,le),n=m(t,pe);return e&&n?ce:e||n?e?le:pe:m(t,he)?he:ue}function $(){if(!oe)return!1;var e={},n=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=!n||t.CSS.supports("touch-action",i)}),e}function J(t){this.options=pt({},this.defaults,t||{}),this.id=I(),this.manager=null,this.options.enable=p(this.options.enable,!0),this.state=de,this.simultaneous={},this.requireFail=[]}function K(t){return t&Te?"cancel":t&ge?"end":t&me?"move":t&ve?"start":""}function Q(t){return t==kt?"down":t==Wt?"up":t==Xt?"left":t==Yt?"right":""}function tt(t,e){var n=e.manager;return n?n.get(t):t}function et(){J.apply(this,arguments)}function nt(){et.apply(this,arguments),this.pX=null,this.pY=null}function it(){et.apply(this,arguments)}function rt(){J.apply(this,arguments),this._timer=null,this._input=null}function st(){et.apply(this,arguments)}function ot(){et.apply(this,arguments)}function at(){J.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ut(t,e){return e=e||{},e.recognizers=p(e.recognizers,ut.defaults.preset),new ht(t,e)}function ht(t,e){this.options=pt({},ut.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=x(this),this.touchAction=new B(this,this.options.touchAction),ct(this,!0),a(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ct(t,e){var n=t.element;if(n.style){var i;a(t.options.cssProps,function(r,s){i=b(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function lt(t,e){var i=n.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var pt,ft=["","webkit","Moz","MS","ms","o"],dt=n.createElement("div"),vt="function",mt=Math.round,gt=Math.abs,yt=Date.now;pt="function"!=typeof Object.assign?function(t){if(t===r||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==r&&null!==i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign;var Tt=u(function(t,e,n){for(var i=Object.keys(e),s=0;s<i.length;)(!n||n&&t[i[s]]===r)&&(t[i[s]]=e[i[s]]),s++;return t},"extend","Use `assign`."),Et=u(function(t,e){return Tt(t,e,!0)},"merge","Use `assign`."),bt=1,It=/mobile|tablet|ip(ad|hone|od)|android/i,wt="ontouchstart"in t,_t=b(t,"PointerEvent")!==r,xt=wt&&It.test(navigator.userAgent),At="touch",Ct="pen",Pt="mouse",St="kinect",Dt=25,Mt=1,Ot=2,Rt=4,zt=8,Nt=1,Xt=2,Yt=4,Wt=8,kt=16,qt=Xt|Yt,Ft=Wt|kt,Lt=qt|Ft,Ht=["x","y"],jt=["clientX","clientY"];_.prototype={handler:function(){},init:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(w(this.element),this.evWin,this.domHandler)}};var Ut={mousedown:Mt,mousemove:Ot,mouseup:Rt},Vt="mousedown",Gt="mousemove mouseup";h(W,_,{handler:function(t){var e=Ut[t.type];e&Mt&&0===t.button&&(this.pressed=!0),e&Ot&&1!==t.which&&(e=Rt),this.pressed&&(e&Rt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Pt,srcEvent:t}))}});var Bt={pointerdown:Mt,pointermove:Ot,pointerup:Rt,pointercancel:zt,pointerout:zt},Zt={2:At,3:Ct,4:Pt,5:St},$t="pointerdown",Jt="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&($t="MSPointerDown",Jt="MSPointerMove MSPointerUp MSPointerCancel"),h(k,_,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Bt[i],s=Zt[t.pointerType]||t.pointerType,o=s==At,a=y(e,t.pointerId,"pointerId");r&Mt&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(Rt|zt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var Kt={touchstart:Mt,touchmove:Ot,touchend:Rt,touchcancel:zt},Qt="touchstart",te="touchstart touchmove touchend touchcancel";h(q,_,{handler:function(t){var e=Kt[t.type];if(e===Mt&&(this.started=!0),this.started){var n=F.call(this,t,e);e&(Rt|zt)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:At,srcEvent:t})}}});var ee={touchstart:Mt,touchmove:Ot,touchend:Rt,touchcancel:zt},ne="touchstart touchmove touchend touchcancel";h(L,_,{handler:function(t){var e=ee[t.type],n=H.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:At,srcEvent:t})}});var ie=2500,re=25;h(j,_,{handler:function(t,e,n){var i=n.pointerType==At,r=n.pointerType==Pt;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)U.call(this,e,n);else if(r&&G.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var se=b(dt.style,"touchAction"),oe=se!==r,ae="compute",ue="auto",he="manipulation",ce="none",le="pan-x",pe="pan-y",fe=$();B.prototype={set:function(t){t==ae&&(t=this.compute()),oe&&this.manager.element.style&&fe[t]&&(this.manager.element.style[se]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return a(this.manager.recognizers,function(e){l(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Z(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=m(i,ce)&&!fe[ce],s=m(i,pe)&&!fe[pe],o=m(i,le)&&!fe[le];if(r){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}return o&&s?void 0:r||s&&n&qt||o&&n&Ft?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var de=1,ve=2,me=4,ge=8,ye=ge,Te=16,Ee=32;J.prototype={defaults:{},set:function(t){return pt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(o(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=tt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return o(t,"dropRecognizeWith",this)?this:(t=tt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(o(t,"requireFailure",this))return this;var e=this.requireFail;return t=tt(t,this),y(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(o(t,"dropRequireFailure",this))return this;t=tt(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<ge&&e(n.options.event+K(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=ge&&e(n.options.event+K(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=Ee)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(Ee|de)))return!1;t++}return!0},recognize:function(t){var e=pt({},t);return l(this.options.enable,[this,e])?(this.state&(ye|Te|Ee)&&(this.state=de),this.state=this.process(e),void(this.state&(ve|me|ge|Te)&&this.tryEmit(e))):(this.reset(),void(this.state=Ee))},process:function(t){},getTouchAction:function(){},reset:function(){}},h(et,J,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ve|me),r=this.attrTest(t);return i&&(n&zt||!r)?e|Te:i||r?n&Rt?e|ge:e&ve?e|me:ve:Ee}}),h(nt,et,{defaults:{event:"pan",threshold:10,pointers:1,direction:Lt},getTouchAction:function(){var t=this.options.direction,e=[];return t&qt&&e.push(pe),t&Ft&&e.push(le),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&qt?(r=0===s?Nt:s<0?Xt:Yt,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?Nt:o<0?Wt:kt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return et.prototype.attrTest.call(this,t)&&(this.state&ve||!(this.state&ve)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Q(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),h(it,et,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ce]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ve)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),h(rt,J,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ue]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Rt|zt)&&!r)this.reset();else if(t.eventType&Mt)this.reset(),this._timer=s(function(){this.state=ye,this.tryEmit()},e.time,this);else if(t.eventType&Rt)return ye;return Ee},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ye&&(t&&t.eventType&Rt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=yt(),this.manager.emit(this.options.event,this._input)))}}),h(st,et,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ce]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ve)}}),h(ot,et,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:qt|Ft,pointers:1},getTouchAction:function(){return nt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(qt|Ft)?e=t.overallVelocity:n&qt?e=t.overallVelocityX:n&Ft&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&gt(e)>this.options.velocity&&t.eventType&Rt},emit:function(t){var e=Q(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(at,J,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[he]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Mt&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=Rt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||z(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t;var u=this.count%e.taps;if(0===u)return this.hasRequireFailures()?(this._timer=s(function(){this.state=ye,this.tryEmit()},e.interval,this),ve):ye}return Ee},failTimeout:function(){return this._timer=s(function(){this.state=Ee},this.options.interval,this),Ee},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ye&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ut.VERSION="2.0.7",ut.defaults={domEvents:!1,touchAction:ae,enable:!0,inputTarget:null,inputClass:null,preset:[[st,{enable:!1}],[it,{enable:!1},["rotate"]],[ot,{direction:qt}],[nt,{direction:qt},["swipe"]],[at],[at,{event:"doubletap",taps:2},["tap"]],[rt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var be=1,Ie=2;ht.prototype={set:function(t){return pt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Ie:be},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ye)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],e.stopped===Ie||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(ve|me|ge)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof J)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(o(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(o(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=y(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==r&&e!==r){var n=this.handlers;return a(g(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==r){var n=this.handlers;return a(g(t),function(t){e?n[t]&&n[t].splice(y(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&lt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ct(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},pt(ut,{INPUT_START:Mt,INPUT_MOVE:Ot,INPUT_END:Rt,INPUT_CANCEL:zt,STATE_POSSIBLE:de,STATE_BEGAN:ve,STATE_CHANGED:me,STATE_ENDED:ge,STATE_RECOGNIZED:ye,STATE_CANCELLED:Te,STATE_FAILED:Ee,DIRECTION_NONE:Nt,DIRECTION_LEFT:Xt,DIRECTION_RIGHT:Yt,DIRECTION_UP:Wt,DIRECTION_DOWN:kt,DIRECTION_HORIZONTAL:qt,DIRECTION_VERTICAL:Ft,DIRECTION_ALL:Lt,Manager:ht,Input:_,TouchAction:B,TouchInput:L,MouseInput:W,PointerEventInput:k,TouchMouseInput:j,SingleTouchInput:q,Recognizer:J,AttrRecognizer:et,Tap:at,Pan:nt,Swipe:ot,Pinch:it,Rotate:st,Press:rt,on:f,off:d,each:a,merge:Et,extend:Tt,assign:pt,inherit:h,bindFn:c,prefixed:b});var we="undefined"!=typeof t?t:"undefined"!=typeof self?self:{};we.Hammer=ut,"function"==typeof define&&define.amd?define(function(){return ut}):"undefined"!=typeof e&&e.exports?e.exports=ut:t[i]=ut}(window,document,"Hammer")},{}],2:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=t("./class/Item"),a=i(o),u=8,h=10,c=function(){function t(e){r(this,t),this.screenWidth=window.innerWidth,this.blocks=[],this.root=e.root,this.gameBoard=e.board,this.itemTypes=["blueGem","purpleGem","greenGem","gold","redGem","silver","whiteGem"];for(var n=0;n<h;n++){this.blocks.push([]);for(var i=0;i<u;i++)this.blocks[n].push(new a.default({type:this.randomItemType(),root:this.gameBoard,x:i,y:n}))}window.addEventListener("resize",this.onResize.bind(this)),setTimeout(function(){this.root.style.transform="scale("+this.screenWidth/150+")"}.bind(this),100)}return s(t,[{key:"randomItemType",value:function(){return this.itemTypes[Math.floor(Math.random()*this.itemTypes.length)]}},{key:"onResize",value:function(){this.screenWidth=window.innerWidth,this.root.style.transform="scale("+this.screenWidth/150+")"}}]),t}();new c({root:document.querySelector(".app"),board:document.querySelector(".box")})},{"./class/Item":3}],3:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=t("hammerjs"),a=i(o),u=function(){function t(e){r(this,t);var n=document.createElement("div");n.classList.add(e.type,"item"),this.el=document.createElement("div"),this.el.appendChild(n),this.el.classList.add("tile"),e.root.appendChild(this.el),setTimeout(function(){this.el.style.transform="translate3d("+16*e.x+"px,"+16*e.y+"px,0px)",n.style.marginLeft=-n.clientWidth/2+"px",n.style.marginTop=-n.clientHeight/2+"px"}.bind(this),100),this.hammer=new a.default.Manager(this.el),this.hammer.add(new a.default.Tap),this.hammer.on("tap",this.onTap.bind(this))}return s(t,[{key:"onTap",value:function(t){this.el.classList.toggle("selected")}}]),t}();n.default=u},{hammerjs:1}]},{},[2]);