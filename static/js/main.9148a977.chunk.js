(window["webpackJsonpbw-widget"]=window["webpackJsonpbw-widget"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=n(4),l=n(5),s=n(7),u=n(6),g=n(8),m=n(9),h=n(2),d=[{icon:h.c,action:"Animals",category:"animals"},{icon:h.f,action:"Architecture",category:"arch"},{icon:h.d,action:"Nature",category:"nature"},{icon:h.e,action:"Tech",category:"tech"},{icon:h.g,action:"People",category:"people"}],b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onWidgetNextClick=function(){var e,t=n.state.currentAction;e=t<d.length-1?t+1:0,n.handleChangeAction(e)},n.onWidgetPreviousClick=function(){var e,t=n.state.currentAction;e=t>0?t-1:d.length-1,n.handleChangeAction(e)},n.handleChangeAction=function(e){n.setState({currentAction:e,currentImage:n.props.handleChange(d[e].category)})},n.handleKeyDown=function(e){"ArrowLeft"===e.key&&n.onWidgetPreviousClick(),"ArrowRight"===e.key&&n.onWidgetNextClick()},n.state={currentAction:0,currentImage:n.props.handleChange(d[0].category)},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this.state,t=e.currentAction,n=e.currentImage,a=["inline-block","sm:text-3xl text-xl","py-4 sm:px-8 px-6","bg-blue-200 hover:bg-blue-300 focus:bg-blue-300","border-solid border-gray-500","cursor-pointer","flex items-center"].join(" "),r=["sm:w-3/4 w-full","mx-auto","border border-solid border-gray-500","m-8","flex","bg-white"].join(" ");return c.a.createElement("div",{className:"flex justify-center flex-col"},c.a.createElement("div",{className:r},c.a.createElement("button",{className:"border-r ".concat(a),onClick:this.onWidgetPreviousClick},c.a.createElement(m.a,{icon:h.a})),c.a.createElement("h2",{className:"inline-block sm:text-3xl text-xl p-4 flex-grow text-center"},c.a.createElement("span",{className:"px-2"},c.a.createElement(m.a,{icon:d[t].icon})),d[t].action),c.a.createElement("button",{className:"border-l ".concat(a),onClick:this.onWidgetNextClick},c.a.createElement(m.a,{icon:h.b}))),c.a.createElement("img",{className:"border border-solid border-gray-500",src:n,alt:"black and white ".concat(d[t].action)}))}}]),t}(c.a.Component),x=(n(23),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleChangeAction=function(e){return console.log("Displaying ".concat(e," placeholder image.")),"https://placeimg.com/640/480/".concat(e,"/grayscale")},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"bg-gray"},c.a.createElement("div",{className:"container mx-auto flex items-center justify-center flex-col full-screen-height p-4 text-gray-800"},c.a.createElement("h1",{className:"sm:text-4xl text-3xl text-center"},"Choose Photo Category"),c.a.createElement(b,{handleChange:this.handleChangeAction})))}}]),t}(c.a.Component));o.a.render(c.a.createElement(x,null),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9148a977.chunk.js.map