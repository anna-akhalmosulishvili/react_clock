(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),s=n(3),r=n(5),i=n(4),l=n(1),d=n.n(l),m=(n(12),n(0)),u=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.today.toUTCString().slice(-12,-4)!==e.today.toUTCString().slice(-12,-4)&&console.info(this.props.today.toUTCString().slice(-12,-4)),0!==e.name.localeCompare(this.props.name)&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"render",value:function(){var e=this.props,t=e.today,n=e.name;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:n})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(d.a.Component);function v(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={today:new Date,clockName:"Clock-0",hasClock:!0,timeInterval:0,nameInterval:0},e.addClock=function(){e.setState({today:new Date}),e.state.timeInterval=window.setInterval(e.dateHandler,1e3),e.setState({hasClock:!0})},e.removeClock=function(){e.setState({hasClock:!1})},e.dateHandler=function(){e.setState({today:new Date})},e.nameHandler=function(){e.setState({clockName:v()})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.addClock),document.addEventListener("contextmenu",this.removeClock),this.state.timeInterval=window.setInterval(this.dateHandler,1e3),this.state.nameInterval=window.setInterval(this.nameHandler,3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.addClock),document.removeEventListener("contextmenu",this.removeClock)}},{key:"render",value:function(){var e=this.state,t=e.today,n=e.clockName,a=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),a&&Object(m.jsx)(u,{today:t,name:n})]})}}]),n}(d.a.Component);c.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e82c4c7e.chunk.js.map