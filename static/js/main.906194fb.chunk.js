(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),l=(n(16),n(4)),s=n(5),c=n(6),u=n(9),d=n(7),h=n(1),m=n(8);var p=function(e){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),o.a.createElement("p",{style:e.item.completed?{fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null},e.item.text))},g=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean gecko tank",completed:!1},{id:4,text:"Mow lawn",completed:!0},{id:5,text:"Catch up on Arrested Development",completed:!1}];var b=function(){var e,t=(new Date).getHours();return e=t<12?"morning":t>=12&&t<17?"afternoon":"night",o.a.createElement("header",{className:"navbar"},o.a.createElement("div",null,"Todo App"),o.a.createElement("small",null,"Good ",e,"! Here you can write your tasks"))};var v=function(e){return o.a.createElement("div",{className:"joke"},o.a.createElement("p",{style:{display:!e.question&&"none"}},"Question: ",e.question),o.a.createElement("p",{style:{color:!e.question&&"#888888"}},"Answer: ",e.punchLine))},w=[{id:1,punchLine:"It\u2019s hard to explain puns to kleptomaniacs because they always take things literally."},{id:2,question:"What's the best thing about Switzerland?",punchLine:"I don't know, but the flag is a big plus!"},{id:3,question:"Did you hear about the mathematician who's afraid of negative numbers?",punchLine:"He'll stop at nothing to avoid them!"},{id:4,question:"Hear about the new restaurant called Karma?",punchLine:"There\u2019s no menu: You get what you deserve."},{id:5,question:"Did you hear about the actor who fell through the floorboards?",punchLine:"He was just going through a stage."},{id:6,question:"Did you hear about the claustrophobic astronaut?",punchLine:"He just needed a little space."}];var f=function(){var e=w.sort(function(){return Math.random()-.5}).slice(0,2).map(function(e){return o.a.createElement(v,{key:e.id,question:e.question,punchLine:e.punchLine})});return o.a.createElement("div",{className:"jokes"},o.a.createElement("b",null,"By the way here are some jokes\ud83d\ude04."),e)},y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={todos:g,isLoading:!0,newTodo:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleFormChange=e.handleFormChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isLoading:!1})},2e3)}},{key:"handleChange",value:function(e){this.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})}})}},{key:"handleFormChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(l.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t={id:this.state.todos.length+1,text:this.state.newTodo,completed:!1};this.state.todos.unshift(t),e.preventDefault(),this.render(),this.setState({newTodo:""})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t){return o.a.createElement(p,{key:t.id,item:t,handleChange:e.handleChange})});return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement("div",{className:"new-todo-form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"newTodo",value:this.state.newTodo,onChange:this.handleFormChange,placeholder:"New task"}),o.a.createElement("br",null),o.a.createElement("button",{disabled:""===this.state.newTodo},"Submit"))),o.a.createElement("div",{className:"todo-list"},t),this.state.isLoading?o.a.createElement("h1",{style:{textAlign:"center"}},"Loading..."):o.a.createElement(f,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.906194fb.chunk.js.map