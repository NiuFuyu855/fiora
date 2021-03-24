(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),a=(r(0),r(88)),s={id:"script",title:"Script",sidebar_label:"Script"},c={unversionedId:"script",id:"script",isDocsHomePage:!1,title:"Script",description:"The server has built-in scripts to manage the server. These scripts are in the fiora/bin directory",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Script.md",slug:"/script",permalink:"/fiora/docs/script",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/Script.md",version:"current",sidebar_label:"Script",sidebar:"docs",previous:{title:"Config",permalink:"/fiora/docs/config"},next:{title:"API",permalink:"/fiora/docs/api"}},o=[{value:"deleteMessages",id:"deletemessages",children:[]},{value:"deleteTodayRegisteredUsers",id:"deletetodayregisteredusers",children:[]},{value:"deleteUser",id:"deleteuser",children:[]},{value:"doctor",id:"doctor",children:[]},{value:"fixUsersAvatar",id:"fixusersavatar",children:[]},{value:"getUserId",id:"getuserid",children:[]},{value:"register",id:"register",children:[]}],l={toc:o};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The server has built-in scripts to manage the server. These scripts are in the ",Object(a.b)("inlineCode",{parentName:"p"},"fiora/bin")," directory"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note!")," Most of these scripts will directly modify the database. It is recommended (but not necessary) to backup the database in advance and stop the server before executing"),Object(a.b)("h2",{id:"deletemessages"},"deleteMessages"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script deleteMessages")),Object(a.b)("p",null,"Delete all historical message records, if the message pictures and files are stored on the server, they can also be deleted together"),Object(a.b)("h2",{id:"deletetodayregisteredusers"},"deleteTodayRegisteredUsers"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script deleteTodayRegisteredUsers")),Object(a.b)("p",null,"Delete all newly registered users on the day (based on server time)"),Object(a.b)("h2",{id:"deleteuser"},"deleteUser"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script deleteUser [userId]")),Object(a.b)("p",null,"Delete the specified user, delete its historical messages, exit the group that it has joined, and delete all its friends"),Object(a.b)("h2",{id:"doctor"},"doctor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script doctor")),Object(a.b)("p",null,"Check the server configuration and status, which can be used to locate the cause of the server startup failure"),Object(a.b)("h2",{id:"fixusersavatar"},"fixUsersAvatar"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script fixUsersAvatar")),Object(a.b)("p",null,"Fix user error avatar path, please modify the script judgment logic according to your actual situation"),Object(a.b)("h2",{id:"getuserid"},"getUserId"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script getUserId [username]")),Object(a.b)("p",null,"Get the userId of the specified user name"),Object(a.b)("h2",{id:"register"},"register"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn script register [username] [password]")),Object(a.b)("p",null,"Register new users, when registration is prohibited, the administrator can register new users through it"))}d.isMDXComponent=!0},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,f=p["".concat(s,".").concat(b)]||p[b]||u[b]||a;return r?i.a.createElement(f,c(c({ref:t},l),{},{components:r})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);