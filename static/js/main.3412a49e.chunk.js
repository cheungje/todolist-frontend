(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){e.exports=t(152)},119:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),s=(t(119),t(50)),o=t(30),c=t(61),d=t(51),h=t(13),u=t(62),p=t(32),m=t(84),g=t(4),k=t(31),E=t.n(k),b=t(204),f=t(208),v=t(205),w=t(221),O=t(64),C=t(2),x=t(211),j=t(206),y=t(94),N=t.n(y),S=t(220),U=t(91),D=t.n(U),B=t(86),T=t.n(B),V=t(87),A=t.n(V),P=t(68),F=t(85),I=t(45),M=t.n(I),W=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={expanded:!1,notesValue:e.task.notes,nameValue:e.task.name,datePickerOpen:!1,dateValue:M()(e.task.due_date)},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleDateToggle=t.handleDateToggle.bind(Object(h.a)(t)),t.handleExpandClick=t.handleExpandClick.bind(Object(h.a)(t)),t.handleBlur=t.handleBlur.bind(Object(h.a)(t)),t.handleNotesUpdate=t.handleNotesUpdate.bind(Object(h.a)(t)),t.handleNameUpdate=t.handleNameUpdate.bind(Object(h.a)(t)),t.handleFavoriteClick=t.handleFavoriteClick.bind(Object(h.a)(t)),t.handleDateAccept=t.handleDateAccept.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"handleChange",value:function(){var e=this;E.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{completed:!this.props.task.completed}).then(function(a){e.props.onUpdate(a.data)})}},{key:"handleBlur",value:function(e){var a=this;E.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{notes:this.state.notesValue,name:this.state.nameValue}).then(function(e){a.props.onUpdate(e.data)})}},{key:"handleDateToggle",value:function(e){var a=this;e&&E.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{due_date:this.state.dateValue.format("YYYY-MM-DD")}).then(function(e){a.props.onUpdate(e.data)}),this.setState({datePickerOpen:!this.state.datePickerOpen})}},{key:"handleDateAccept",value:function(e){this.setState({dateValue:e})}},{key:"handleNotesUpdate",value:function(e){this.setState({notesValue:e.target.value})}},{key:"handleNameUpdate",value:function(e){this.setState({nameValue:e.target.value})}},{key:"handleFavoriteClick",value:function(){var e=this;E.a.put("http://api.ambrosia.red/tasks/"+this.props.task.id,{starred:!this.props.task.starred}).then(function(a){e.props.onUpdate(a.data)})}},{key:"render",value:function(){var e,a=this,t=this.props.classes;return e=this.props.task.starred?r.a.createElement(T.a,null):r.a.createElement(A.a,null),r.a.createElement(b.a,{className:t.card},r.a.createElement(v.a,{className:t.cardContent},r.a.createElement(w.a,{className:t.checkBox,checked:this.props.task.completed,onChange:this.handleChange}),r.a.createElement(S.a,{fullWidth:!0,placeholder:"New Task",className:t.textField,value:this.state.nameValue,onChange:this.handleNameUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}),r.a.createElement(O.a,{className:t.dateTime},M()(this.state.dateValue).fromNow())),r.a.createElement(f.a,{disableSpacing:!0},r.a.createElement(j.a,{onClick:this.handleFavoriteClick},e),r.a.createElement(j.a,{onClick:function(){return a.handleDateToggle(!1)}},r.a.createElement(D.a,null)),r.a.createElement(P.b,{utils:F.a},r.a.createElement(P.a,{variant:"inline",value:this.state.dateValue,InputProps:{disableUnderline:!0,className:t.dateTime},open:this.state.datePickerOpen,onClose:function(){return a.handleDateToggle(!0)},onChange:this.handleDateAccept})),r.a.createElement(j.a,{className:Object(C.a)(t.expand,Object(p.a)({},t.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(N.a,null))),r.a.createElement(x.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(v.a,{className:t.collapseContent},r.a.createElement(S.a,{autoFocus:!0,fullWidth:!0,placeholder:"Notes",rows:2,multiline:!0,className:t.textField,margin:"normal",value:this.state.notesValue,onChange:this.handleNotesUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}))))}}]),a}(n.Component),L=Object(g.a)(function(e){return{card:{maxWidth:580,margin:"24px auto",borderRadius:3},cardContent:{display:"flex",alignItems:"center",justifyContent:"flex-start",fontFamily:"Helvetica Neue, sans-serif",paddingBottom:0},taskName:{fontSize:15},expand:{transform:"rotate(0)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},collapseContent:{paddingTop:0},dateTime:{marginRight:9,width:200,textAlign:"right",fontSize:13}}})(W),z=t(67),Y=t.n(z),G=t(219),H=t(224),R=t(207),_=t(214),J=t(217),$=t(215),q=t(216),K=t(218),Q=t(212),X=t(99),Z=t.n(X),ee=t(213),ae=t(209),te=t(95),ne=t.n(te),re=t(98),le=t.n(re),ie=t(101),se=t.n(ie),oe=t(103),ce=t.n(oe),de=t(100),he=t.n(de),ue=t(102),pe=t.n(ue),me=t(104),ge=t(96),ke=t.n(ge),Ee=t(97),be=t.n(Ee),fe=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={tasks:[],drawerOpen:!1,anchorEl:null},E.a.get("http://api.ambrosia.red/tasks").then(function(e){t.setState({tasks:e.data})}),t.handleUpdate=t.handleUpdate.bind(Object(h.a)(t)),t.handleAddTask=t.handleAddTask.bind(Object(h.a)(t)),t.toggleDrawer=t.toggleDrawer.bind(Object(h.a)(t)),t.handleClose=t.handleClose.bind(Object(h.a)(t)),t.handleMenu=t.handleMenu.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleUpdate",value:function(e){for(var a=this.state.tasks,t=0;t<a.length;t++)if(a[t].id===e.id){a[t]=e;break}this.setState({tasks:a})}},{key:"handleAddTask",value:function(){var e=this;E.a.post("http://api.ambrosia.red/tasks",{due_date:"2019-07-14 01:29:03"}).then(function(a){var t=e.state.tasks;t.push(a.data),e.setState({tasks:t})})}},{key:"toggleDrawer",value:function(e){this.setState({drawerOpen:e})}},{key:"handleClose",value:function(){this.setState({anchorEl:null})}},{key:"handleMenu",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"render",value:function(){for(var e=this,a=[],t=0;t<this.state.tasks.length;t++)a.push(r.a.createElement(L,{key:this.state.tasks[t].id,task:this.state.tasks[t],onUpdate:this.handleUpdate}));var n=this.props.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(Q.a,null),r.a.createElement(ee.a,{position:"fixed",className:n.appBar+" "+(this.state.drawerOpen?n.appBarShift:"")},r.a.createElement(ae.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return e.toggleDrawer(!0)},edge:"start",className:n.menuButton+" "+(this.state.drawerOpen?n.hide:"")},r.a.createElement(ne.a,null)),r.a.createElement(O.a,{variant:"h6",className:n.title,noWrap:!0},"Ambrosia"),r.a.createElement("div",null,r.a.createElement(j.a,{color:"inherit",onClick:this.handleMenu},r.a.createElement(Y.a,null)),r.a.createElement(me.a,{id:"menu-appbar",anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:null!==this.state.anchorEl,onClose:this.handleClose},r.a.createElement(R.a,{className:n.root},r.a.createElement(_.a,null,r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(ke.a,null))),r.a.createElement(J.a,{primary:"New Project",secondary:"Create a project and work towards completion one to-do at a time."})),r.a.createElement(_.a,null,r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(be.a,null))),r.a.createElement(J.a,{primary:"New Area",secondary:"Group your projects based on your committments, such as Classes or Family."}))))))),r.a.createElement(H.a,{className:n.drawer,open:this.state.drawerOpen,variant:"persistent",anchor:"left",onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)},classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(j.a,{onClick:function(){return e.toggleDrawer(!1)}},r.a.createElement(le.a,null))),r.a.createElement(K.a,null),r.a.createElement(R.a,null,r.a.createElement(_.a,{button:!0},r.a.createElement(Z.a,null),r.a.createElement(J.a,null,"Inbox")),r.a.createElement(_.a,{button:!0},r.a.createElement(he.a,null),r.a.createElement(J.a,null,"Today")),r.a.createElement(_.a,{button:!0},r.a.createElement(se.a,null),r.a.createElement(J.a,null,"Upcoming")),r.a.createElement(_.a,{button:!0},r.a.createElement(pe.a,null),r.a.createElement(J.a,null,"Logbook")),r.a.createElement(_.a,{button:!0},r.a.createElement(ce.a,null),r.a.createElement(J.a,null,"Waste"))),r.a.createElement(K.a,null)),r.a.createElement(G.a,{color:"primary","aria-label":"add",className:n.fab,onClick:this.handleAddTask},r.a.createElement(Y.a,null)),r.a.createElement("div",{className:n.content+" "+(this.state.drawerOpen?n.contentShift:"")},a))}}]),a}(n.Component),ve=Object(g.a)(function(e){var a;return a={root:{display:"flex",paddingTop:40},fab:{right:20,bottom:20,position:"fixed"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(m.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240,width:"auto"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}},Object(p.a)(a,"root",{verticalAlign:"bottom"}),Object(p.a)(a,"title",{flexGrow:1}),a})(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.3412a49e.chunk.js.map