(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{25:function(e,a,n){},26:function(e,a,n){},27:function(e,a,n){},38:function(e,a,n){},39:function(e,a,n){},40:function(e,a,n){},41:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),c=n(13),s=n.n(c),r=(n(25),n(26),n(11)),j=n(5),l=(n(27),n(6)),o=Object(t.createContext)(),m=n(1),b=function(){var e=Object(t.useContext)(o),a=e.handleTheme,n=e.theme;return Object(m.jsxs)("header",{children:[Object(m.jsxs)("div",{className:"NavBar NavBar-"+n+" mobileOff",children:[Object(m.jsx)(r.b,{to:"/main",className:"NavLink NavLink-"+n,activeClassName:"off",children:"Inicio"}),Object(m.jsx)(r.b,{to:"/main/link1",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link1"}),Object(m.jsx)(r.b,{to:"/main/link2",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link2"}),Object(m.jsx)(r.b,{to:"/main/link3",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link3"}),Object(m.jsx)(r.b,{to:"/main/link4",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link4"}),Object(m.jsxs)(l.a,{className:"mobileOff",children:[Object(m.jsx)(l.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Theme"}),Object(m.jsxs)(l.a.Menu,{className:"DropDown-"+n,children:[Object(m.jsx)(l.a.Divider,{}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)("span",{className:"NavLink-Purple",onClick:function(){return a("Purple")},children:"Black theme"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)("span",{className:"NavLink-Light",onClick:function(){return a("Light")},children:"Light theme"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)("span",{className:"NavLink-Dark",onClick:function(){return a("Dark")},children:"Dark theme"})})]})]})]}),Object(m.jsxs)("header",{className:"NavBar NavBar-"+n+" mobileOn",children:[Object(m.jsx)(r.b,{to:"/",className:"NavLink NavLink-"+n,activeClassName:"off",children:"Inicio"}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.a.Toggle,{variant:"success",id:"dropdown-basic",children:"\u4e09"}),Object(m.jsxs)(l.a.Menu,{className:"DropDown-"+n,children:[Object(m.jsx)(l.a.Item,{children:Object(m.jsx)(r.b,{to:"/link1",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link1"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)(r.b,{to:"/link2",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link2"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)(r.b,{to:"/link3",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link3"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)(r.b,{to:"/link4",activeClassName:"off",className:"NavLink NavLink-"+n,children:"Link4"})}),Object(m.jsx)(l.a.Divider,{}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)("span",{className:"NavLink-Purple",onClick:function(){return a("Purple")},children:"Black theme"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)("span",{className:"NavLink-Light",onClick:function(){return a("Light")},children:"Light theme"})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)("span",{className:"NavLink-Dark",onClick:function(){return a("Dark")},children:"Dark theme"})})]})]})]})]})},h=(n(38),n(39),n(40),function(e){var a=e.background,n=e.name,i=e.link,c=Object(t.useContext)(o).theme;return Object(m.jsx)("a",{className:"portfolioItems portfolioItems-"+c,href:i,target:"_blank",rel:"noreferrer",style:{background:"url(".concat(a,") 20vw/20vw")},children:n})}),d=n.p+"static/media/gaijin-react.96a1f208.png",k=n.p+"static/media/pokemon.104d26ba.png",u=n.p+"static/media/pasap.78a0f118.png",x=n.p+"static/media/gaijin-js.36f01860.png",O=n.p+"static/media/ca.334b2cc2.png",N=n.p+"static/media/github.363c6e90.png",v=function(){return Object(m.jsxs)("div",{className:"portfolioContainer",children:[Object(m.jsx)(h,{link:"https://maxaim.github.io/tienda-gaijin-react/",background:d,name:"Gaijin Store React"}),Object(m.jsx)(h,{link:"https://maxaim.github.io/favourite-pokemon/",background:k,name:"Your Favourite Pokemon"}),Object(m.jsx)(h,{link:"https://maxaim.github.io/pasap-digital/",background:u,name:"Pasaporte Sanitario"}),Object(m.jsx)(h,{link:"https://maxaim.github.io/tienda-gaijin-JS/",background:x,name:"Gaijin Store JS"}),Object(m.jsx)(h,{link:"https://maxaim.github.io/CosechandoHabitos/",background:O,name:"Cosechando Habitos"}),Object(m.jsx)(h,{link:"https://github.com/MaxAim/",background:N,name:"My Github"})]})};var f=function(){var e=Object(t.useContext)(o).theme;return Object(m.jsx)("main",{className:"Main Main-"+e,children:Object(m.jsx)(v,{})})},p=n(20);var g=function(e){var a=e.children,n=Object(t.useState)("Dark"),i=Object(p.a)(n,2),c=i[0],s=i[1];return Object(m.jsx)(o.Provider,{value:{theme:c,setTheme:s,handleTheme:function(e){s(e)}},children:a})};var L=function(){return Object(m.jsx)(g,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(j.c,{children:Object(m.jsx)(j.a,{exact:!0,path:"/main/",component:function(){return Object(m.jsx)(f,{})}})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(a){var n=a.getCLS,t=a.getFID,i=a.getFCP,c=a.getLCP,s=a.getTTFB;n(e),t(e),i(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.6aa155ad.chunk.js.map