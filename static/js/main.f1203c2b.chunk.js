(this["webpackJsonprussian-strength-routine"]=this["webpackJsonprussian-strength-routine"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/settings_512.0de39658.png"},19:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),i=n.n(l),o=(n(24),n(4)),s=n(5),u=n(8),c=n(7),p=n(3),f=n(14),v=n.n(f),d=n(9),h=n.n(d),m=function(e){return e.children},w=n(1),g=n(2);function b(){var e=Object(w.a)(["\n    padding: 1px;\n    background-color: lightblue;\n    font-size: 20px;\n    font-weight: bold;\n"]);return b=function(){return e},e}var y=g.a.div(b()),E=function(e){return r.a.createElement(y,null,r.a.createElement("p",null,"Olympic Barbell Plate Calculator"))},k=n(18),O=n.n(k),j=function(e){var t=20+2*Math.floor(e.plates.twentyfive/2)*25+2*Math.floor(e.plates.twenty/2)*20+2*Math.floor(e.plates.fifteen/2)*15+2*Math.floor(e.plates.ten/2)*10+2*Math.floor(e.plates.five/2)*5+2*Math.floor(e.plates.twopointfive/2)*2.5+2*Math.floor(e.plates.onepointtwofive/2)*1.25;return r.a.createElement("div",{style:{paddingBottom:"30px",paddingTop:"30px"}},r.a.createElement("img",{style:{position:"absolute",right:"0",height:"20%",marginTop:"-25px"},src:O.a,onClick:e.settingsToggle,alt:"Settings"}),r.a.createElement("div",{style:{paddingBottom:"15px"}},"Enter the weight to calculate"),r.a.createElement("input",{onChange:e.change,value:e.value}),r.a.createElement("p",{style:{color:"grey"}},"Max weight: ",t,"KG"))},T=function(e){var t=null,n=null;switch(e.weight){case 25:t="red",n="#e80202";break;case 20:t="blue",n="#0000e0";break;case 15:t="yellow",n="#e6e600";break;case 10:t="green",n="#006b00";break;case 5:t="grey",n="#707070";break;case 2.5:t="red",n="#e80202";break;case 1.25:t="yellow",n="#e6e600"}var a={margin:"auto",backgroundColor:t,width:"9px",height:"100px",borderRadius:"5px",borderStyle:"inset",borderColor:n};return e.fractional&&(a.height="50px"),e.spacer&&(a={width:"10px"}),r.a.createElement("td",null,r.a.createElement("div",{style:a}))},F=function(e){for(var t=e.plates,n=[],a=0;a<t.length;a++)"sleeve"===t[a].key&&t.splice(a,1);for(var l=0;l<t.length;l++)n.push(t[l].key.substring(0,t[l].key.length-1));n.reverse();for(var i=n.map((function(e,t){return r.a.createElement(T,{key:t,weight:parseFloat(e),fractional:2.5===parseFloat(e)||1.25===parseFloat(e)})})),o=[],s=n.map((function(e,t){return r.a.createElement("td",{key:t},e,"KG")})),u=[],c=0;c<i.length;c++)!c%2===0?(o.push(r.a.createElement(T,{spacer:!0,key:"plate"+c})),o.push(i[c]),u.push(r.a.createElement(T,{spacer:!0,key:"label"+c})),u.push(s[c])):(o.push(i[c]),u.push(s[c]));return r.a.createElement("div",null,n.length>0?r.a.createElement("h3",null,"Breakdown"):null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,o),r.a.createElement("tr",null,u))))};function x(){var e=Object(w.a)(["\n    height: 50px;\n    width: 9px;\n    background-color: yellow;\n    border-color: #e6e600;\n"]);return x=function(){return e},e}function C(){var e=Object(w.a)(["\n    height: 50px;\n    width: 9px;\n    background-color: red;\n    border-color: #e80202;\n"]);return C=function(){return e},e}function H(){var e=Object(w.a)(["\n    width: 9px;\n    background-color: grey;\n    border-color: #707070;\n"]);return H=function(){return e},e}function S(){var e=Object(w.a)(["\n    width: 9px;\n    background-color: green;\n    border-color: #006b00;\n"]);return S=function(){return e},e}function P(){var e=Object(w.a)(["\n    width: 9px;\n    background-color: yellow;\n    border-color: #e6e600;\n"]);return P=function(){return e},e}function M(){var e=Object(w.a)(["\n    width: 9px;\n    background-color: blue;\n    border-color: #0000e0;\n"]);return M=function(){return e},e}function G(){var e=Object(w.a)(["\n    width: 9px;\n    background-color: red;\n    border-color: #e80202;\n"]);return G=function(){return e},e}function K(){var e=Object(w.a)(["\n    border-radius: 5px;\n    height: 100px;\n    color: white;\n    border-style: inset;\n    border-width: 3px;\n"]);return K=function(){return e},e}function N(){var e=Object(w.a)(["\n    height: 20px;\n    width: ",";\n    background-color: silver;\n    border-style: inset none none none;\n\n"]);return N=function(){return e},e}function B(){var e=Object(w.a)(["\n    margin-top: 50px;\n"]);return B=function(){return e},e}function I(){var e=Object(w.a)(["\n    height: 10px;\n    width: 100px;\n    background-color: silver;\n    border-style: inset none none none;\n"]);return I=function(){return e},e}var J=g.a.div(I()),D=(Object(g.a)(J)(B()),g.a.div(N(),(function(e){return e.width}))),W=g.a.div(K()),z=Object(g.a)(W)(G()),A=Object(g.a)(W)(M()),R=Object(g.a)(W)(P()),U=Object(g.a)(W)(S()),$=Object(g.a)(W)(H()),_=Object(g.a)(W)(C()),q=Object(g.a)(W)(x()),L=function(e){var t=[],n=e.weight,a=140;if(n>20){n=(n-20)/2;for(var l=0;l<Math.floor(e.plates.twentyfive/2);l++)n-25>=0&&(t.push(r.a.createElement(z,{key:"25"+l})),n-=25,a-=15);for(var i=0;i<Math.floor(e.plates.twenty/2);i++)n-20>=0&&(t.push(r.a.createElement(A,{key:"20"+i})),n-=20,a-=15);for(var o=0;o<Math.floor(e.plates.fifteen/2);o++)n-15>=0&&(t.push(r.a.createElement(R,{key:"15"+o})),n-=15,a-=15);for(var s=0;s<Math.floor(e.plates.ten/2);s++)n-10>=0&&(t.push(r.a.createElement(U,{key:"10"+s})),n-=10,a-=15);for(var u=0;u<Math.floor(e.plates.five/2);u++)n-5>=0&&(t.push(r.a.createElement($,{key:"5"+u})),n-=5,a-=15);for(var c=0;c<Math.floor(e.plates.twopointfive/2);c++)n-2.5>=0&&(t.push(r.a.createElement(_,{key:"2.5"+c})),n-=2.5,a-=15);for(var p=0;p<Math.floor(e.plates.onepointtwofive/2);p++)n-1.25>=0&&(t.push(r.a.createElement(q,{key:"1.25"+p})),n-=1.25,a-=15)}t.push(r.a.createElement(D,{width:a+"px",key:"sleeve"}));for(var f=[].concat(t).reverse(),v="0px",d=!1,h=0,m=0;m<t.length;m++)2.5!==Number(t[m].key)&&1.25!==Number(t[m].key)||(h+=1);h===t.length-1&&(d=!0),Number(e.weight)<=22.4?v="42px":d&&(v="25px");var w={display:"flex",alignItems:"center",paddingTop:v};return r.a.createElement("div",null,r.a.createElement("div",{style:w},f,t.length>0||20===n?r.a.createElement(J,null):null,t),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(F,{plates:f})))};function Q(){var e=Object(w.a)(["\n    width: 5px;\n"]);return Q=function(){return e},e}var V=g.a.td(Q()),X=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.weight),r.a.createElement(V,null),r.a.createElement("td",null,r.a.createElement("button",{onClick:e.minusClicked},"-")),r.a.createElement("td",null,e.plates),r.a.createElement("td",null,r.a.createElement("button",{onClick:e.plusClicked},"+")))};function Y(){var e=Object(w.a)(["\n    background-color: grey;\n    text-align: center;\n"]);return Y=function(){return e},e}var Z=g.a.div(Y()),ee=function(e){return r.a.createElement(Z,null,r.a.createElement("p",{style:{marginTop:"0px"}},"Plate Settings"),r.a.createElement("table",{style:{margin:"auto"}},r.a.createElement("tbody",null,r.a.createElement(X,{weight:"25KG",plates:e.plates.twentyfive,minusClicked:e.minusTwentyFive,plusClicked:e.plusTwentyFive}),r.a.createElement(X,{weight:"20KG",plates:e.plates.twenty,minusClicked:e.minusTwenty,plusClicked:e.plusTwenty}),r.a.createElement(X,{weight:"15KG",plates:e.plates.fifteen,minusClicked:e.minusFifteen,plusClicked:e.plusFifteen}),r.a.createElement(X,{weight:"10KG",plates:e.plates.ten,minusClicked:e.minusTen,plusClicked:e.plusTen}),r.a.createElement(X,{weight:"5KG",plates:e.plates.five,minusClicked:e.minusFive,plusClicked:e.plusFive}),r.a.createElement(X,{weight:"2.5KG",plates:e.plates.twopointfive,minusClicked:e.minusTwoPointFive,plusClicked:e.plusTwoPointFive}),r.a.createElement(X,{weight:"1.25KG",plates:e.plates.onepointtwofive,minusClicked:e.minusOnePointTwoFive,plusClicked:e.plusOnePointTwoFive}))),r.a.createElement("p",null,"Note: Plates must be in multiples of 2"))};function te(){var e=Object(w.a)(["\n    display: flex;\n    justify-content: center;\n    padding-bottom: 30px;\n"]);return te=function(){return e},e}function ne(){var e=Object(w.a)(["\n    text-align: center;\n    touch-action: manipulation;\n"]);return ne=function(){return e},e}var ae=g.a.div(ne()),re=g.a.div(te()),le=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={plates:{twentyfive:2,twenty:2,fifteen:2,ten:2,five:2,twopointfive:2,onepointtwofive:2},weight:20,showPlateSettings:!1},e.plateControlChangedHandler=function(t){isNaN(t.target.value)||e.setState({weight:t.target.value})},e.plateControlSettingsToggle=function(){e.setState({showPlateSettings:!e.state.showPlateSettings})},e.minusTwentyFiveHandler=function(){e.state.plates.twentyfive>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.twentyfive=t.twentyfive-1,{plates:t}}))},e.minusTwentyHandler=function(){e.state.plates.twenty>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.twenty=t.twenty-1,{plates:t}}))},e.minusFifteenHandler=function(){e.state.plates.fifteen>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.fifteen=t.fifteen-1,{plates:t}}))},e.minusTenHandler=function(){e.state.plates.ten>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.ten=t.ten-1,{plates:t}}))},e.minusFiveHandler=function(){e.state.plates.five>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.five=t.five-1,{plates:t}}))},e.minusTwoPointFiveHandler=function(){e.state.plates.twopointfive>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.twopointfive=t.twopointfive-1,{plates:t}}))},e.minusOnePointTwoFiveHandler=function(){e.state.plates.onepointtwofive>0&&e.setState((function(e){var t=Object(p.a)({},e.plates);return t.onepointtwofive=t.onepointtwofive-1,{plates:t}}))},e.plusTwentyFiveHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.twentyfive=t.twentyfive+1,{plates:t}}))},e.plusTwentyHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.twenty=t.twenty+1,{plates:t}}))},e.plusFifteenHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.fifteen=t.fifteen+1,{plates:t}}))},e.plusTenHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.ten=t.ten+1,{plates:t}}))},e.plusFiveHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.five=t.five+1,{plates:t}}))},e.plusTwoPointFiveHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.twopointfive=t.twopointfive+1,{plates:t}}))},e.plusOnePointTwoFiveHandler=function(){e.setState((function(e){var t=Object(p.a)({},e.plates);return t.onepointtwofive=t.onepointtwofive+1,{plates:t}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){h.a.get("plates")&&this.setState({plates:JSON.parse(h.a.get("plates"))})}},{key:"componentDidUpdate",value:function(){h.a.set("plates",this.state.plates)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(ae,null,r.a.createElement(E,null),r.a.createElement(v.a,null,this.state.showPlateSettings?r.a.createElement(ee,{plates:this.state.plates,minusTwentyFive:this.minusTwentyFiveHandler,minusTwenty:this.minusTwentyHandler,minusFifteen:this.minusFifteenHandler,minusTen:this.minusTenHandler,minusFive:this.minusFiveHandler,minusTwoPointFive:this.minusTwoPointFiveHandler,minusOnePointTwoFive:this.minusOnePointTwoFiveHandler,plusTwentyFive:this.plusTwentyFiveHandler,plusTwenty:this.plusTwentyHandler,plusFifteen:this.plusFifteenHandler,plusTen:this.plusTenHandler,plusFive:this.plusFiveHandler,plusTwoPointFive:this.plusTwoPointFiveHandler,plusOnePointTwoFive:this.plusOnePointTwoFiveHandler}):null,r.a.createElement(j,{change:this.plateControlChangedHandler,value:this.state.weight,settingsToggle:this.plateControlSettingsToggle,plates:this.state.plates}),r.a.createElement(re,null,r.a.createElement(L,{weight:this.state.weight,plates:this.state.plates,calcPlates:this.calculatePlatesHandler})),r.a.createElement(re,null))))}}]),n}(a.Component),ie=(n(28),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(le,null)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f1203c2b.chunk.js.map