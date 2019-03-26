(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);a(50),a(51);var n=a(0),c=a.n(n),r=a(28),s=a.n(r),i=a(46),o=a(14),m=a(2),l=a(3),h=a(6),u=a(4),p=a(5),d=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Upper"},c.a.createElement("div",{className:"Upper-text"},c.a.createElement("h1",null,"Character manager"),c.a.createElement("a",{href:"#Bottom"},"Discover")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={characters:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters").then(function(e){return e.json()}).then(function(t){e.setState({characters:t})})}},{key:"componentDidUpdate",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters").then(function(e){return e.json()}).then(function(t){e.setState({characters:t})})}},{key:"render",value:function(){var e=this.state.characters;return c.a.createElement("div",{className:"characters"},c.a.createElement("div",{className:"newCharacter"},c.a.createElement("a",{href:"/create",className:"createButton"}," Create New character ")),c.a.createElement("div",{className:"cards"},e.map(function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:"data:image/jpeg;base64,".concat(e.image),className:"image",alt:"#",width:"150px",height:"150px"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.name),c.a.createElement("p",{className:"card-text"},e.shortDescription)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("a",{className:"character-link",href:"/character/".concat(e.id)},"View more")))})))}}]),t}(n.Component),E=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Bottom",id:"Bottom"},c.a.createElement(b,null))}}]),t}(n.Component),v=(n.Component,function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Main"},c.a.createElement(d,null),c.a.createElement(E,null))}}]),t}(n.Component)),f=a(7),j=a(16),O=a.n(j),y=(a(28),a(74)),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={characters:[]},a.onDelete=a.onDelete.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters/"+this.props.match.params.id).then(function(e){return e.json()}).then(function(t){e.setState({characters:t})})}},{key:"onDelete",value:function(e){1==window.confirm("Are you sure ?")&&(e.preventDefault(),O.a.delete("https://character-database.becode.xyz/characters/"+this.props.match.params.id),this.props.history.push("/"))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters/"+this.props.match.params.id).then(function(e){return e.json()}).then(function(t){e.setState({characters:t})})}},{key:"render",value:function(){var e=this.state.characters;return console.log(this.state),c.a.createElement("div",{className:"characterPage"},c.a.createElement("h1",{className:"characterTitle"},"Character Page: ",e.name),c.a.createElement("div",{className:"characterContent"},c.a.createElement("img",{src:"data:image/jpeg;base64,".concat(e.image),className:"imageBig",alt:"#",width:"150px",height:"150px"}),c.a.createElement("h2",{className:"characterName"}," ",e.name," "),c.a.createElement("p",{className:"Description"}," ",e.shortDescription," "),c.a.createElement(y,{source:e.description,escapeHtml:!1})),c.a.createElement("div",{className:"Buttons"},c.a.createElement("a",{className:"EditButton",href:"/Edit/".concat(e.id)},' Edit "',e.name,'" '),c.a.createElement("button",{className:"Delete",onClick:this.onDelete},' Delete "',e.name,'" ')),c.a.createElement("a",{className:"homeButton",href:"/"},"Homepage"))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={name:"",description:"",shortDescription:""},a.updateState=a.updateState.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"updateState",value:function(e){var t=e.target,a=t.value,n={};n[t.name]=a,this.setState(n)}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.props.match.params.id;O.a.put("https://character-database.becode.xyz/characters/"+this.props.match.params.id,this.state),this.props.history.push("/character/".concat(t))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters/"+this.props.match.params.id).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState(t)})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.shortDescription,n=e.description;return c.a.createElement("div",{className:"Edit"},c.a.createElement("h1",null,"Edition page"),c.a.createElement("div",{className:"editForm"},c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("p",null,"New character name"),c.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.updateState}),c.a.createElement("p",null,"New short description"),c.a.createElement("textarea",{type:"text",name:"shortDescription",value:a,onChange:this.updateState}),c.a.createElement("p",null,"New description"),c.a.createElement("textarea",{type:"text",name:"description",value:n,onChange:this.updateState}),c.a.createElement("input",{className:"submitEdit",type:"submit",name:"editSubmit",value:"Save changes"}))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={name:"",description:"",shortDescription:""},a.updateState=a.updateState.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"updateState",value:function(e){var t=e.target,a=t.value,n={};n[t.name]=a,this.setState(n)}},{key:"onSubmit",value:function(e){e.preventDefault(),O.a.post("https://character-database.becode.xyz/characters/",this.state),this.props.history.push("/")}},{key:"render",value:function(){var e=this.state;e.name,e.shortDescription,e.description;return c.a.createElement("div",{className:"Create"},c.a.createElement("h1",null,"Edition page"),c.a.createElement("div",{className:"editForm"},c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("p",null,"Character name"),c.a.createElement("input",{type:"text",name:"name",onChange:this.updateState}),c.a.createElement("p",null,"Short description"),c.a.createElement("textarea",{type:"text",name:"shortDescription",onChange:this.updateState}),c.a.createElement("p",null,"Description"),c.a.createElement("textarea",{type:"text",name:"description",onChange:this.updateState}),c.a.createElement("input",{className:"submitEdit",type:"submit",name:"editSubmit",value:"Create"}))))}}]),t}(n.Component),x=c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(o.a,{exact:!0,path:"/",component:v}),c.a.createElement(o.a,{exact:!0,path:"/Character/:id",component:N}),c.a.createElement(o.a,{exact:!0,path:"/Edit/:id",component:S}),c.a.createElement(o.a,{exact:!0,path:"/Create",component:g})));s.a.render(x,document.getElementById("root"))},49:function(e,t,a){e.exports=a(162)},51:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.8d4c39dc.chunk.js.map