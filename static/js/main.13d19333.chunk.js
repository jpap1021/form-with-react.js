(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),s=t.n(r),i=(t(16),t(2)),c=t(5),h=t(6),o=t(8),m=t(7),u=t(9),d=t(1),g=(t(17),t(18),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={firstName:"",lastName:"",age:"",gender:"",destination:"",isVegan:!1,isKosher:!1,isLactoseFree:!1},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(a,e),Object(h.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value,l=a.type,r=a.checked;"checkbox"===l?this.setState(Object(i.a)({},t,r)):this.setState(Object(i.a)({},t,n))}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"cont"},l.a.createElement("h2",null,"Enter Information"),l.a.createElement("form",null,l.a.createElement("input",{name:"firstName",value:this.state.firstName,placeholder:"First name",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{name:"lastName",value:this.state.lastname,placeholder:"Last name",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{name:"age",value:this.state.age,placeholder:"Age",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"gender",value:"male",checked:"male"===this.state.gender,onChange:this.handleChange})," Male"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"gender",value:"female",checked:"female"===this.state.gender,onChange:this.handleChange})," Female"),l.a.createElement("br",null),l.a.createElement("select",{name:"destination",value:this.state.destination,onChange:this.handleChange},l.a.createElement("option",{value:""},"-- Please Choose a destination --"),l.a.createElement("option",{value:"argentina"},"Argentina"),l.a.createElement("option",{value:"brasil"},"Brasil"),l.a.createElement("option",{value:"uruguay"},"Uruguay"),l.a.createElement("option",{value:"chile"},"Chile")),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isVegan",onChange:this.handleChange,checked:this.state.isVegan})," Vegan?"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isKosher",onChange:this.handleChange,checked:this.state.isKosher})," Kosher?"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isLactoseFree",onChange:this.handleChange,checked:this.state.isLactoseFree})," Lactose Free"),l.a.createElement("br",null))),l.a.createElement("div",{className:"cont"},l.a.createElement("h2",null,"Entered information:"),l.a.createElement("p",null,"Your name: ",this.state.firstName," ",this.state.lastName," "),l.a.createElement("p",null,"Your age: ",this.state.age),l.a.createElement("p",null,"Your gender: ",this.state.gender),l.a.createElement("p",null,"Your destination:",this.state.destination),l.a.createElement("p",null,"Your dietary resttrictions:"),l.a.createElement("p",null,"Vegan ",this.state.isVegan?"Yes":"No"),l.a.createElement("p",null,"Kosher ",this.state.isKosher?"Yes":"No"),l.a.createElement("p",null,"Lactose Free ",this.state.isLactoseFree?"Yes":" No")))}}]),a}(n.Component));s.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.13d19333.chunk.js.map