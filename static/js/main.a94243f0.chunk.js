(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,t){e.exports=t(146)},113:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),s=t.n(i),l=(t(113),t(49)),o=t(30),d=t(61),c=t(50),h=t(14),u=t(62),p=t(85),m=t(4),g=t(31),k=t.n(g),f=t(51),b=t(196),E=t(200),v=t(197),w=t(212),O=t(64),x=t(3),C=t(203),N=t(198),j=t(95),y=t.n(j),S=t(211),U=t(92),D=t.n(U),B=t(87),T=t.n(B),V=t(88),A=t.n(V),P=t(69),F=t(86),I=t(44),W=t.n(I),L=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).state={expanded:!1,notesValue:e.task.notes,nameValue:e.task.name,datePickerOpen:!1,dateValue:W()(e.task.due_date)},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleDateToggle=t.handleDateToggle.bind(Object(h.a)(t)),t.handleExpandClick=t.handleExpandClick.bind(Object(h.a)(t)),t.handleBlur=t.handleBlur.bind(Object(h.a)(t)),t.handleNotesUpdate=t.handleNotesUpdate.bind(Object(h.a)(t)),t.handleNameUpdate=t.handleNameUpdate.bind(Object(h.a)(t)),t.handleFavoriteClick=t.handleFavoriteClick.bind(Object(h.a)(t)),t.handleDateAccept=t.handleDateAccept.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"handleChange",value:function(){var e=this;k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{completed:!this.props.task.completed}).then(function(a){e.props.onUpdate(a.data)})}},{key:"handleBlur",value:function(e){var a=this;k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{notes:this.state.notesValue,name:this.state.nameValue}).then(function(e){a.props.onUpdate(e.data)})}},{key:"handleDateToggle",value:function(e){var a=this;e&&k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{due_date:this.state.dateValue.format("YYYY-MM-DD")}).then(function(e){a.props.onUpdate(e.data)}),this.setState({datePickerOpen:!this.state.datePickerOpen})}},{key:"handleDateAccept",value:function(e){this.setState({dateValue:e})}},{key:"handleNotesUpdate",value:function(e){this.setState({notesValue:e.target.value})}},{key:"handleNameUpdate",value:function(e){this.setState({nameValue:e.target.value})}},{key:"handleFavoriteClick",value:function(){var e=this;k.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{starred:!this.props.task.starred}).then(function(a){e.props.onUpdate(a.data)})}},{key:"render",value:function(){var e,a=this,t=this.props.classes;return e=this.props.task.starred?r.a.createElement(T.a,null):r.a.createElement(A.a,null),r.a.createElement(b.a,{className:t.card},r.a.createElement(v.a,{className:t.cardContent},r.a.createElement(w.a,{className:t.checkBox,checked:this.props.task.completed,onChange:this.handleChange}),r.a.createElement(S.a,{fullWidth:!0,placeholder:"New Task",className:t.textField,value:this.state.nameValue,onChange:this.handleNameUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}),r.a.createElement(O.a,{className:t.dateTime},W()(this.state.dateValue).fromNow())),r.a.createElement(E.a,{disableSpacing:!0},r.a.createElement(N.a,{onClick:this.handleFavoriteClick},e),r.a.createElement(N.a,{onClick:function(){return a.handleDateToggle(!1)}},r.a.createElement(D.a,null)),r.a.createElement(P.b,{utils:F.a},r.a.createElement(P.a,{variant:"inline",value:this.state.dateValue,InputProps:{disableUnderline:!0,className:t.dateTime},open:this.state.datePickerOpen,onClose:function(){return a.handleDateToggle(!0)},onChange:this.handleDateAccept})),r.a.createElement(N.a,{className:Object(x.a)(t.expand,Object(f.a)({},t.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(y.a,null))),r.a.createElement(C.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(v.a,{className:t.collapseContent},r.a.createElement(S.a,{autoFocus:!0,fullWidth:!0,placeholder:"Notes",rows:2,multiline:!0,className:t.textField,margin:"normal",value:this.state.notesValue,onChange:this.handleNotesUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}))))}}]),a}(n.Component),Y=Object(m.a)(function(e){return{card:{maxWidth:580,margin:"24px auto",borderRadius:3},cardContent:{display:"flex",alignItems:"center",justifyContent:"flex-start",fontFamily:"Helvetica Neue, sans-serif",paddingBottom:0},taskName:{fontSize:15},expand:{transform:"rotate(0)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},collapseContent:{paddingTop:0},dateTime:{marginRight:9,width:200,textAlign:"right",fontSize:13}}})(L),H=t(98),R=t.n(H),_=t(210),z=t(215),J=t(199),M=t(206),G=t(204),$=t(207),q=t(208),K=t(209),Q=t(67),X=t.n(Q),Z=t(68),ee=t.n(Z),ae=t(205),te=t(201),ne=t(96),re=t.n(ne),ie=t(97),se=t.n(ie),le=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).state={tasks:[],drawerOpen:!1},k.a.get("http://api.ambrosia.red/tasks").then(function(e){t.setState({tasks:e.data})}),t.handleUpdate=t.handleUpdate.bind(Object(h.a)(t)),t.handleAddTask=t.handleAddTask.bind(Object(h.a)(t)),t.toggleDrawer=t.toggleDrawer.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleUpdate",value:function(e){for(var a=this.state.tasks,t=0;t<a.length;t++)if(a[t].id===e.id){a[t]=e;break}this.setState({tasks:a})}},{key:"handleAddTask",value:function(){var e=this;k.a.post("http://api.ambrosia.red/tasks",{due_date:"2019-07-14 01:29:03"}).then(function(a){var t=e.state.tasks;t.push(a.data),e.setState({tasks:t})})}},{key:"toggleDrawer",value:function(e){this.setState({drawerOpen:e})}},{key:"render",value:function(){for(var e=this,a=[],t=0;t<this.state.tasks.length;t++)a.push(r.a.createElement(Y,{key:this.state.tasks[t].id,task:this.state.tasks[t],onUpdate:this.handleUpdate}));var n=this.props.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(G.a,null),r.a.createElement(ae.a,{position:"fixed",className:n.appBar+" "+(this.state.drawerOpen?n.appBarShift:"")},r.a.createElement(te.a,null,r.a.createElement(N.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return e.toggleDrawer(!0)},edge:"start",className:n.menuButton+" "+(this.state.drawerOpen?n.hide:"")},r.a.createElement(re.a,null)),r.a.createElement(O.a,{variant:"h6",noWrap:!0},"Ambrosia"))),r.a.createElement(z.a,{className:n.drawer,open:this.state.drawerOpen,variant:"persistent",anchor:"left",onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)},classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(N.a,{onClick:function(){return e.toggleDrawer(!1)}},r.a.createElement(se.a,null))),r.a.createElement(M.a,null),r.a.createElement(J.a,null,["Inbox","Starred","Send email","Drafts"].map(function(e,a){return r.a.createElement($.a,{button:!0,key:e},r.a.createElement(q.a,null,a%2===0?r.a.createElement(X.a,null):r.a.createElement(ee.a,null)),r.a.createElement(K.a,{primary:e}))})),r.a.createElement(M.a,null),r.a.createElement(J.a,null,["All mail","Trash","Spam"].map(function(e,a){return r.a.createElement($.a,{button:!0,key:e},r.a.createElement(q.a,null,a%2===0?r.a.createElement(X.a,null):r.a.createElement(ee.a,null)),r.a.createElement(K.a,{primary:e}))}))),r.a.createElement(_.a,{color:"primary","aria-label":"add",className:n.fab,onClick:this.handleAddTask},r.a.createElement(R.a,null)),r.a.createElement("div",{className:n.content+" "+(this.state.drawerOpen?n.contentShift:"")},a))}}]),a}(n.Component),oe=Object(m.a)(function(e){return{root:{display:"flex",paddingTop:40},fab:{right:20,bottom:20,position:"fixed"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(p.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240,width:"auto"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.a94243f0.chunk.js.map