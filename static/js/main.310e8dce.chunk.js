(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);n(56),n(60),n(88),n(90);var a=n(0),i=n.n(a),s=n(54),r=n.n(s),o=(n(98),n(11)),c=n(12),u=n(14),l=n(13),d=n(10),p=n(15),h=function(t){function e(t){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("div",{id:"demo","uk-sortable":"group: sortable-group"},t.props.values.map(function(t){return i.a.createElement("div",{key:Math.random(),className:"uk-margin"},i.a.createElement("div",{className:"uk-card uk-card-default uk-card-body uk-card-small"},t))})))}}]),e}(i.a.Component),f=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={list:[]},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.Finished=n.Finished.bind(Object(d.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t,e,n){if(this.props.step!==t.step)if(3===this.props.step){var a=this.onlyUnique(this.props.first,this.props.second);this.setState({list:a})}else this.setState({list:[]})}},{key:"onlyUnique",value:function(t,e){var n=t.map(function(t){var n=t.concat(" 1");return-1!==e.indexOf(t)?(e.splice(e.indexOf(t),1),n.concat(" 2")):n}),a=e.map(function(t){return t.concat(" 2")});return n.concat(a)}},{key:"handleSubmit",value:function(){var t=window.document.getElementById("stuff").value.trim();t&&-1===this.state.list.indexOf(t.toUpperCase())&&this.setState({list:this.state.list.concat(t.toUpperCase())},function(){window.document.getElementById("stuff").value="",window.document.getElementById("stuff").focus()})}},{key:"enterPressed",value:function(t){13===(t.keyCode||t.which)&&this.handleSubmit()}},{key:"Finished",value:function(){this.props.next(this.state.list)}},{key:"render",value:function(){return i.a.createElement("div",null,3!==this.props.step?i.a.createElement("div",null,i.a.createElement("label",null,"Input ",this.props.step,": "),i.a.createElement("input",{id:"stuff",onKeyPress:this.enterPressed.bind(this)}),i.a.createElement("button",{onClick:this.handleSubmit,style:{position:"relative",marginLeft:"50px"}},"Add"),i.a.createElement("button",{onClick:this.Finished,style:{position:"relative",marginLeft:"250px"}},"Next")):"",i.a.createElement(h,{values:this.state.list}))}}]),e}(i.a.Component),m=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={first:[],second:[],step:1},n.updateList=n.updateList.bind(Object(d.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"updateList",value:function(t){1===this.state.step&&this.setState({first:t,step:2}),2===this.state.step&&this.setState({second:t,step:3})}},{key:"render",value:function(){return i.a.createElement(f,{next:this.updateList,step:this.state.step,first:this.state.first,second:this.state.second})}}]),e}(i.a.Component);n(99);var b=function(){return i.a.createElement(m,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},55:function(t,e,n){t.exports=n(100)},98:function(t,e,n){},99:function(t,e,n){}},[[55,1,2]]]);
//# sourceMappingURL=main.310e8dce.chunk.js.map