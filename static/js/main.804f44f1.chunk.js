(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(9),l=t.n(i),d=(t(102),t(44)),r=t(27),o=t(56),c=t(45),h=t(14),p=t(57),u=t(4),m=t(28),k=t.n(m),b=t(78),f=t(177),v=t(181),g=t(178),O=t(186),E=t(180),C=t(3),x=t(182),j=t(179),N=t(88),U=t.n(N),y=t(184),w=t(85),T=t.n(w),V=t(80),S=t.n(V),B=t(81),D=t.n(B),A=t(61),F=t(79),P=t(40),I=t.n(P),W=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={expanded:!1,notesValue:e.task.notes,nameValue:e.task.name,datePickerOpen:!1,dateValue:I()(e.task.due_date)},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleDateToggle=t.handleDateToggle.bind(Object(h.a)(t)),t.handleExpandClick=t.handleExpandClick.bind(Object(h.a)(t)),t.handleBlur=t.handleBlur.bind(Object(h.a)(t)),t.handleNotesUpdate=t.handleNotesUpdate.bind(Object(h.a)(t)),t.handleNameUpdate=t.handleNameUpdate.bind(Object(h.a)(t)),t.handleFavoriteClick=t.handleFavoriteClick.bind(Object(h.a)(t)),t.handleDateAccept=t.handleDateAccept.bind(Object(h.a)(t)),t}return Object(p.a)(a,e),Object(r.a)(a,[{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"handleChange",value:function(){var e=this;k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{completed:!this.props.task.completed}).then(function(a){e.props.onUpdate(a.data)})}},{key:"handleBlur",value:function(e){var a=this;k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{notes:this.state.notesValue,name:this.state.nameValue}).then(function(e){a.props.onUpdate(e.data)})}},{key:"handleDateToggle",value:function(e){var a=this;e&&k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{due_date:this.state.dateValue.format("YYYY-MM-DD")}).then(function(e){a.props.onUpdate(e.data)}),this.setState({datePickerOpen:!this.state.datePickerOpen})}},{key:"handleDateAccept",value:function(e){this.setState({dateValue:e})}},{key:"handleNotesUpdate",value:function(e){this.setState({notesValue:e.target.value})}},{key:"handleNameUpdate",value:function(e){this.setState({nameValue:e.target.value})}},{key:"handleFavoriteClick",value:function(){var e=this;k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{starred:!this.props.task.starred}).then(function(a){e.props.onUpdate(a.data)})}},{key:"render",value:function(){var e,a=this,t=this.props.classes;return e=this.props.task.starred?s.a.createElement(S.a,null):s.a.createElement(D.a,null),s.a.createElement(f.a,{className:t.card},s.a.createElement(g.a,{className:t.cardContent},s.a.createElement(O.a,{className:t.checkBox,checked:this.props.task.completed,onChange:this.handleChange}),s.a.createElement(y.a,{fullWidth:!0,placeholder:"New Task",className:t.textField,value:this.state.nameValue,onChange:this.handleNameUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}),s.a.createElement(E.a,{className:t.dateTime},I()(this.state.dateValue).fromNow())),s.a.createElement(v.a,{disableSpacing:!0},s.a.createElement(j.a,{onClick:this.handleFavoriteClick},e),s.a.createElement(j.a,{onClick:function(){return a.handleDateToggle(!1)}},s.a.createElement(T.a,null)),s.a.createElement(A.b,{utils:F.a},s.a.createElement(A.a,{variant:"inline",value:this.state.dateValue,InputProps:{disableUnderline:!0,className:t.dateTime},open:this.state.datePickerOpen,onClose:function(){return a.handleDateToggle(!0)},onChange:this.handleDateAccept})),s.a.createElement(j.a,{className:Object(C.a)(t.expand,Object(b.a)({},t.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},s.a.createElement(U.a,null))),s.a.createElement(x.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},s.a.createElement(g.a,{className:t.collapseContent},s.a.createElement(y.a,{autoFocus:!0,fullWidth:!0,placeholder:"Notes",rows:2,multiline:!0,className:t.textField,margin:"normal",value:this.state.notesValue,onChange:this.handleNotesUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}))))}}]),a}(n.Component),Y=Object(u.a)(function(e){return{card:{maxWidth:580,margin:"24px auto",borderRadius:3},cardContent:{display:"flex",alignItems:"center",justifyContent:"flex-start",fontFamily:"Helvetica Neue, sans-serif",paddingBottom:0},taskName:{fontSize:15},expand:{transform:"rotate(0)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},collapseContent:{paddingTop:0},dateTime:{marginRight:9,width:200,textAlign:"right",fontSize:13}}})(W),_=t(89),z=t.n(_),J=t(183),M=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={tasks:[]},k.a.get("http://api.ambrosia.red/tasks").then(function(e){t.setState({tasks:e.data})}),t.handleUpdate=t.handleUpdate.bind(Object(h.a)(t)),t.handleAddTask=t.handleAddTask.bind(Object(h.a)(t)),t}return Object(p.a)(a,e),Object(r.a)(a,[{key:"handleUpdate",value:function(e){for(var a=this.state.tasks,t=0;t<a.length;t++)if(a[t].id===e.id){a[t]=e;break}this.setState({tasks:a})}},{key:"handleAddTask",value:function(){var e=this;k.a.post("http://api.ambrosia.red/tasks",{due_date:"2019-07-14 01:29:03"}).then(function(a){var t=e.state.tasks;t.push(a.data),e.setState({tasks:t})})}},{key:"render",value:function(){for(var e=[],a=0;a<this.state.tasks.length;a++)e.push(s.a.createElement(Y,{key:this.state.tasks[a].id,task:this.state.tasks[a],onUpdate:this.handleUpdate}));var t=this.props.classes;return s.a.createElement("div",{className:"App"},e,s.a.createElement(J.a,{color:"primary","aria-label":"add",className:t.fab,onClick:this.handleAddTask},s.a.createElement(z.a,null)))}}]),a}(n.Component),R=Object(u.a)(function(e){return{fab:{right:20,bottom:20,position:"fixed"}}})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,a,t){e.exports=t(135)}},[[97,1,2]]]);
//# sourceMappingURL=main.804f44f1.chunk.js.map