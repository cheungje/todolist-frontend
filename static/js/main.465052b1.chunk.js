(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(152)},119:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),s=a.n(r),i=(a(119),a(49)),o=a(32),d=a(62),c=a(50),h=a(12),u=a(63),m=a(85),p=a(4),k=a(30),g=a.n(k),f=a(51),E=a(202),b=a(206),v=a(203),w=a(218),y=a(65),C=a(3),O=a(209),x=a(204),j=a(95),N=a.n(j),D=a(217),U=a(92),S=a.n(U),I=a(87),T=a.n(I),B=a(88),F=a.n(B),V=a(69),A=a(86),P=a(19),M=a.n(P),L=a(61),W=a.n(L),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={expanded:!1,notesValue:e.task.notes,nameValue:e.task.name,datePickerOpen:!1,dateValue:M()(e.task.due_date)},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleDateToggle=a.handleDateToggle.bind(Object(h.a)(a)),a.handleExpandClick=a.handleExpandClick.bind(Object(h.a)(a)),a.handleBlur=a.handleBlur.bind(Object(h.a)(a)),a.handleNotesUpdate=a.handleNotesUpdate.bind(Object(h.a)(a)),a.handleNameUpdate=a.handleNameUpdate.bind(Object(h.a)(a)),a.handleFavoriteClick=a.handleFavoriteClick.bind(Object(h.a)(a)),a.handleDateAccept=a.handleDateAccept.bind(Object(h.a)(a)),a.handleDeleteTask=a.handleDeleteTask.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"handleChange",value:function(){var e=this;g.a.put("http://localhost:18080/tasks/"+this.props.task.id,{completed:!this.props.task.completed}).then(function(t){e.props.onUpdate(t.data)})}},{key:"handleDeleteTask",value:function(){var e=this;g.a.put("http://localhost:18080/tasks/"+this.props.task.id,{trashed:!0}).then(function(t){e.props.onUpdate(t.data)})}},{key:"handleBlur",value:function(){var e=this;g.a.put("http://localhost:18080/tasks/"+this.props.task.id,{notes:this.state.notesValue,name:this.state.nameValue}).then(function(t){e.props.onUpdate(t.data)})}},{key:"handleDateToggle",value:function(e){var t=this;e&&g.a.put("http://localhost:18080/tasks/"+this.props.task.id,{due_date:this.state.dateValue.format("YYYY-MM-DD")}).then(function(e){t.props.onUpdate(e.data)}),this.setState({datePickerOpen:!this.state.datePickerOpen})}},{key:"handleDateAccept",value:function(e){this.setState({dateValue:e})}},{key:"handleNotesUpdate",value:function(e){this.setState({notesValue:e.target.value})}},{key:"handleNameUpdate",value:function(e){this.setState({nameValue:e.target.value})}},{key:"handleFavoriteClick",value:function(){var e=this;g.a.put("http://localhost:18080/tasks/"+this.props.task.id,{starred:!this.props.task.starred}).then(function(t){e.props.onUpdate(t.data)})}},{key:"render",value:function(){var e,t=this,a=this.props.classes;return e=this.props.task.starred?l.a.createElement(T.a,null):l.a.createElement(F.a,null),l.a.createElement(E.a,{className:a.card},l.a.createElement(v.a,{className:a.cardContent},l.a.createElement(w.a,{className:a.checkBox,checked:this.props.task.completed,onChange:this.handleChange}),l.a.createElement(D.a,{fullWidth:!0,placeholder:"New Task",className:a.textField,value:this.state.nameValue,onChange:this.handleNameUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}),l.a.createElement(y.a,{className:a.dateTime},M()(this.state.dateValue).fromNow())),l.a.createElement(b.a,{disableSpacing:!0},l.a.createElement(x.a,{onClick:this.handleFavoriteClick},e),l.a.createElement(x.a,{onClick:function(){return t.handleDateToggle(!1)}},l.a.createElement(S.a,null)),l.a.createElement(V.b,{utils:A.a},l.a.createElement(V.a,{variant:"inline",value:this.state.dateValue,InputProps:{disableUnderline:!0,className:a.dateTime},open:this.state.datePickerOpen,onClose:function(){return t.handleDateToggle(!0)},onChange:this.handleDateAccept})),l.a.createElement(x.a,{className:a.deleteIcon,onClick:this.handleDeleteTask},l.a.createElement(W.a,null)),l.a.createElement(x.a,{className:Object(C.a)(a.expand,Object(f.a)({},a.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},l.a.createElement(N.a,null))),l.a.createElement(O.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},l.a.createElement(v.a,{className:a.collapseContent},l.a.createElement(D.a,{autoFocus:!0,fullWidth:!0,placeholder:"Notes",rows:2,multiline:!0,className:a.textField,margin:"normal",value:this.state.notesValue,onChange:this.handleNotesUpdate,onBlur:this.handleBlur,InputProps:{disableUnderline:!0}}))))}}]),t}(n.Component),H=Object(p.a)(function(e){return{card:{maxWidth:580,margin:"24px auto",borderRadius:3},cardContent:{display:"flex",alignItems:"center",justifyContent:"flex-start",fontFamily:"Helvetica Neue, sans-serif",paddingBottom:0},taskName:{fontSize:15},expand:{transform:"rotate(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},collapseContent:{paddingTop:0},dateTime:{marginRight:9,width:200,textAlign:"right",fontSize:13},deleteIcon:{marginLeft:"auto"}}})(Y),z=a(68),_=a.n(z),G=a(216),R=a(221),J=a(205),$=a(212),q=a(214),K=a(213),Q=a(215),X=a(210),Z=a(100),ee=a.n(Z),te=a(211),ae=a(207),ne=a(96),le=a.n(ne),re=a(99),se=a.n(re),ie=a(102),oe=a.n(ie),de=a(101),ce=a.n(de),he=a(103),ue=a.n(he),me=a(104),pe=a(97),ke=a.n(pe),ge=a(98),fe=a.n(ge),Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={tasks:[],drawerOpen:!0,anchorEl:null,selectedIndex:!0,trashed:!1,completed:!1,dateFilter:void 0},g.a.get("http://localhost:18080/tasks").then(function(e){a.setState({tasks:e.data})}),a.handleUpdate=a.handleUpdate.bind(Object(h.a)(a)),a.handleAddTask=a.handleAddTask.bind(Object(h.a)(a)),a.toggleDrawer=a.toggleDrawer.bind(Object(h.a)(a)),a.handleClose=a.handleClose.bind(Object(h.a)(a)),a.handleMenu=a.handleMenu.bind(Object(h.a)(a)),a.handleUpdatedDrawerItem=a.handleUpdatedDrawerItem.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleUpdate",value:function(e){for(var t=this.state.tasks,a=0;a<t.length;a++)if(t[a].id===e.id){t[a]=e;break}this.setState({tasks:t})}},{key:"handleUpdatedDrawerItem",value:function(e){var t={completed:void 0,trashed:void 0,dateFilter:void 0};"inbox"===e?(t.completed=!1,t.trashed=!1):"waste"===e?t.trashed=!0:"logbook"===e?t.completed=!0:"today"===e?t.dateFilter=function(e){return M()(e).year()===M()().year()&&M()(e).month()===M()().month()&&M()(e).date()===M()().date()}:"upcoming"===e&&(t.dateFilter=function(e){var t=M()(e).diff(M()(),"days");return t>=0&&t<=7}),this.setState(t)}},{key:"handleAddTask",value:function(){var e=this;g.a.post("http://localhost:18080/tasks",{due_date:M()().format("YYYY-MM-DD HH:mm:ss")}).then(function(t){var a=e.state.tasks;a.push(t.data),e.setState({tasks:a})})}},{key:"toggleDrawer",value:function(e){this.setState({drawerOpen:e})}},{key:"handleClose",value:function(){this.setState({anchorEl:null})}},{key:"handleMenu",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleListItemClick",value:function(e,t){this.setState({selectedIndex:t})}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.tasks.length;a++)void 0!==this.state.trashed&&this.state.tasks[a].trashed!==this.state.trashed||void 0!==this.state.completed&&this.state.tasks[a].completed!==this.state.completed||void 0!==this.state.dateFilter&&!this.state.dateFilter(this.state.tasks[a].due_date)||t.push(l.a.createElement(H,{key:this.state.tasks[a].id,task:this.state.tasks[a],onUpdate:this.handleUpdate}));var n=this.props.classes;return l.a.createElement("div",null,l.a.createElement(X.a,null),l.a.createElement(te.a,{position:"fixed",className:n.appBar+" "+(this.state.drawerOpen?n.appBarShift:"")},l.a.createElement(ae.a,null,l.a.createElement(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return e.toggleDrawer(!0)},edge:"start",className:n.menuButton+" "+(this.state.drawerOpen?n.hide:"")},l.a.createElement(le.a,null)),l.a.createElement(y.a,{variant:"h6",className:n.title,noWrap:!0},"Ambrosia"),l.a.createElement("div",null,l.a.createElement(x.a,{color:"inherit",onClick:this.handleMenu},l.a.createElement(_.a,null)),l.a.createElement(me.a,{id:"menu-appbar",anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:null!==this.state.anchorEl,onClose:this.handleClose},l.a.createElement(J.a,null,l.a.createElement($.a,{className:n.menu,button:!0,selected:0===this.state.selectedIndex,onClick:function(t){return e.handleListItemClick(t,0)}},l.a.createElement(K.a,null,l.a.createElement(ke.a,null)),l.a.createElement(q.a,{primary:"New Project",secondary:"Create a project and work towards completion one to-do at a time."})),l.a.createElement($.a,{className:n.menu,button:!0,selected:1===this.state.selectedIndex,onClick:function(t){return e.handleListItemClick(t,1)}},l.a.createElement(K.a,null,l.a.createElement(fe.a,null)),l.a.createElement(q.a,{primary:"New Area",secondary:"Group your projects based on your committments, such as Classes or Family."}))))))),l.a.createElement(R.a,{className:n.drawer,open:this.state.drawerOpen,variant:"persistent",anchor:"left",onClose:function(){return e.toggleDrawer(!1)},classes:{paper:n.drawerPaper}},l.a.createElement("div",{className:n.drawerHeader},l.a.createElement(x.a,{onClick:function(){return e.toggleDrawer(!1)}},l.a.createElement(se.a,null))),l.a.createElement(Q.a,null),l.a.createElement(J.a,null,l.a.createElement($.a,{button:!0,key:"Inbox",onClick:function(){return e.handleUpdatedDrawerItem("inbox")}},l.a.createElement(K.a,null,l.a.createElement(ee.a,null)),l.a.createElement(q.a,{primary:"Inbox"})),l.a.createElement($.a,{button:!0,key:"Today",onClick:function(){return e.handleUpdatedDrawerItem("today")}},l.a.createElement(K.a,null,l.a.createElement(ce.a,null)),l.a.createElement(q.a,{primary:"Today"})),l.a.createElement($.a,{button:!0,key:"Upcoming",onClick:function(){return e.handleUpdatedDrawerItem("upcoming")}},l.a.createElement(K.a,null,l.a.createElement(oe.a,null)),l.a.createElement(q.a,{primary:"Upcoming"})),l.a.createElement($.a,{button:!0,key:"Logbook",onClick:function(){return e.handleUpdatedDrawerItem("logbook")}},l.a.createElement(K.a,null,l.a.createElement(ue.a,null)),l.a.createElement(q.a,{primary:"Logbook"})),l.a.createElement($.a,{button:!0,key:"Waste",onClick:function(){return e.handleUpdatedDrawerItem("waste")}},l.a.createElement(K.a,null,l.a.createElement(W.a,null)),l.a.createElement(q.a,{primary:"Waste"}))),l.a.createElement(Q.a,null)),l.a.createElement(G.a,{color:"primary","aria-label":"add",className:n.fab,onClick:this.handleAddTask},l.a.createElement(_.a,null)),l.a.createElement("div",{className:n.content+" "+(this.state.drawerOpen?n.contentShift:"")},t))}}]),t}(n.Component),be=Object(p.a)(function(e){return{fab:{right:20,bottom:20,position:"fixed"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(m.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:75,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:"auto"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:240},title:{flexGrow:1},menu:{width:350}}})(Ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.465052b1.chunk.js.map