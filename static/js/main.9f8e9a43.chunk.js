(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),r=n(3),l=n(5),i=n(4),s=n(1),d=n.n(s),m=(n(12),n(0)),v=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props.today.toUTCString().slice(-12,-4),n=e.today.toUTCString().slice(-12,-4),a=e.name,c=this.props.name;t!==n&&console.info(t),0!==a.localeCompare(c)&&console.debug("Renamed from ".concat(a," to ").concat(c))}},{key:"render",value:function(){var e=this.props,t=e.today,n=e.name;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:n})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(d.a.Component);function u(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={today:new Date,clockName:"Clock-0",hasClock:!0,timeInterval:0,nameInterval:0},e.addClickEvent=function(){document.addEventListener("click",e.addClock)},e.addContextEvent=function(){document.addEventListener("contextmenu",e.removeClock)},e.addClock=function(){e.setState({today:new Date,timeInterval:window.setInterval(e.dateHandler,1e3),hasClock:!0})},e.removeClock=function(){e.setState({hasClock:!1,nameInterval:0}),clearInterval(e.state.timeInterval),clearInterval(e.state.nameInterval)},e.dateHandler=function(){e.setState({today:new Date})},e.nameHandler=function(){e.setState({clockName:u()})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.addClock),document.addEventListener("contextmenu",this.removeClock),this.setState({timeInterval:window.setInterval(this.dateHandler,1e3),nameInterval:window.setInterval(this.nameHandler,3300)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.addClock),document.removeEventListener("contextmenu",this.removeClock),clearInterval(this.state.timeInterval),clearInterval(this.state.nameInterval)}},{key:"render",value:function(){var e=this.state,t=e.today,n=e.clockName,a=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),a&&Object(m.jsx)(v,{today:t,name:n})]})}}]),n}(d.a.Component);c.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9f8e9a43.chunk.js.map