(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(7),l=s.n(c),i=(s(14),s(6)),o=s(9),r=s(3),d=s(2);function u(e){var t=null;if(document.cookie&&""!==document.cookie)for(var s=document.cookie.split(";"),a=0;a<s.length;a++){var n=s[a].trim();if(n.substring(0,e.length+1)===e+"="){t=decodeURIComponent(n.substring(e.length+1));break}}return t}function j(e,t,s){var a="http://127.0.0.1:8000/api/post/";null!==s&&void 0!==s&&(a=s.replace("http://127.0.0.1:8000/api/post/","")),e&&(a="http://127.0.0.1:8000/api/post/?username=".concat(e));var n=new XMLHttpRequest;n.responseType="json",n.open("GET",a),n.setRequestHeader("Content-Type","application/json"),n.onload=function(){403===n.status&&("Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(n.response,n.status)},n.send()}function b(e,t){var s;e&&(s=e);var a=new XMLHttpRequest,n=u("csrftoken");a.responseType="json",a.open("POST","http://127.0.0.1:8000/api/post/create/"),n&&(a.setRequestHeader("X-CSRFToken",n),a.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),a.setRequestHeader("Http-Requested-With","XMLHttpRequest")),a.onload=function(){403===a.status&&("Authentication credentials were not provided."===a.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(a.response,a.status)},a.send(s)}function m(e,t){var s;e&&(s=JSON.stringify(e));var a=new XMLHttpRequest,n=u("csrftoken");a.responseType="json",a.open("POST","http://127.0.0.1:8000/api/post/action/"),a.setRequestHeader("Content-Type","application/json"),n&&(a.setRequestHeader("X-CSRFToken",n),a.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),a.setRequestHeader("Http-Requested-With","XMLHttpRequest")),a.onload=function(){403===a.status&&("Authentication credentials were not provided."===a.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(a.response,a.status)},a.send(s)}function p(e,t){var s=new XMLHttpRequest,a="http://127.0.0.1:8000/api/post/".concat(e);s.responseType="json",s.open("GET",a),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(s.response,s.status)},s.send()}function h(e,t){var s=new XMLHttpRequest;s.responseType="json",s.open("GET","http://127.0.0.1:8000/api/post/feed/"),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf&&(window.location.href="/accounts/login?showLoginRequired=true"));e(s.response,s.status)},s.send()}var O=s(0);function x(e){var t=e.user;return Object(O.jsx)("div",{className:"m-3 mb-2",children:Object(O.jsx)(f,{username:t.username,children:Object(O.jsx)("span",{className:"rounded-circle bg-black text-white text-uppercase py-3 px-4",children:t.username[0]})})})}function f(e){var t=e.username;return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)("span",{style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),window.location.href="/profile/".concat(t)},className:"fw-bold",children:e.children})})}function v(e){var t=e.user;!0===e.includeFullName&&"".concat(t.first_name," ").concat(t.last_name);return Object(O.jsx)(f,{username:t.username,children:Object(O.jsx)("span",{onClick:function(e){e.preventDefault(),window.location.href="profile/".concat(t.username)},className:"fw-bold",children:t.username})})}function N(){return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsx)("div",{className:"mr-auto",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary me-auto rounded-circle","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"+"})})})})})}function g(e){var t=e.username,s=Object(a.useState)([]),c=Object(d.a)(s,2),l=c[0],i=c[1],o=Object(a.useState)([]),u=Object(d.a)(o,2),b=u[0],m=u[1],p=Object(a.useState)(null),h=Object(d.a)(p,2),x=h[0],f=h[1];Object(a.useEffect)((function(){var t=Object(r.a)(e.newPosts).concat(l);t.length!==b.length&&m(t)}),[b,e.newPosts,l]),Object(a.useEffect)((function(){j(t,(function(e,t){200===t&&(f(e.next),i(e.results),console.log(x))}))}),[t]);return Object(O.jsx)("div",{className:"mt-5 col-6 col-md-9 mx-auto",children:Object(O.jsxs)(n.a.Fragment,{children:[b.map((function(e,t){return Object(O.jsx)(w,{post:e},"".concat(t))})),Object(O.jsx)("div",{className:"d-grid gap-2  mx-auto mt-2",children:null!==x&&Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm mb-3 mx-auto",onClick:function(e){e.preventDefault();j(t,(function(e,t){if(200===t){f(e.next);var s=Object(r.a)(b).concat(e.results);i(s),m(s)}}),x)},children:"Load posts"})})]})})}function w(e){var t=e.post,s=Object(a.useState)(e.post?e.post:null),c=Object(d.a)(s,2),l=c[0],o=c[1],r=window.location.pathname,u=Object(i.a)(/([0-9]+)/,{postId:1}),j=r.match(u),b=j?j.groups.postId:-1,m="".concat(t.id)!=="".concat(b),p=function(e){o(e)};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row"}),Object(O.jsx)("div",{className:"row mb-5 mt-2",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsxs)("div",{className:"card h-100",children:[Object(O.jsxs)("div",{className:"d-flex align-items-center bg-light bg-gradient",children:[Object(O.jsx)("div",{className:"col-1 me-4",children:Object(O.jsx)(x,{user:t.user})}),Object(O.jsx)("div",{className:"col-11",children:Object(O.jsxs)("div",{className:"m-3 mb-2",children:[Object(O.jsx)("span",{children:Object(O.jsx)(v,{includeFullName:!0,user:t.user})}),Object(O.jsx)("br",{}),Object(O.jsx)("small",{className:"text-muted capitaized",children:t.user.location})]})})]}),Object(O.jsx)("img",{src:"http://127.0.0.1:8000/".concat(t.image,"/"),className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:t.title}),Object(O.jsx)("p",{className:"card-text",children:t.content}),Object(O.jsx)("div",{children:Object(O.jsx)("small",{className:"text-muted",children:t.timestamp})}),Object(O.jsxs)("div",{className:"btn btn-group",children:[l&&Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(y,{post:l,didLike:p,action:{type:"like",display:"like"}}),Object(O.jsx)(y,{post:l,didLike:p,action:{type:"unlike",display:"unlike"}})]}),!1===m?null:Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"views the post"})]})]})]})})})]})}function y(e){var t=e.post,s=e.action,a=e.didLike,n=t.like?t.like:0,c=e.className?e.className:"btn btn-primary btn-sm",l=s.display?s.display:"Action",i="like"===s.type?"".concat(n," ").concat(l):l;return Object(O.jsx)("button",{className:c,onClick:function(e){e.preventDefault();m({id:t.id,action:s.type},(function(e,t){200!==t&&201!==t||!a||a(e)}))},children:i})}function k(e){var t=e.postId,s=Object(a.useState)(null),n=Object(d.a)(s,2),c=n[0],l=n[1],i=Object(a.useState)(!1),o=Object(d.a)(i,2),r=o[0],u=o[1];return p(t,(function(e,t){!1===r&&200===t&&(l(e),u(!0))})),null!==c?Object(O.jsx)(w,{post:c}):null}function R(e){var t=e.user;return Object(O.jsx)("div",{className:"m-2 mb-2",children:Object(O.jsx)(T,{username:t.username,children:Object(O.jsx)("span",{className:"rounded-circle bg-black text-white text-uppercase py-2 px-3",children:t.username[0]})})})}function T(e){var t=e.username;return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)("span",{style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),window.location.href="/profile/".concat(t)},className:"fw-bold",children:e.children})})}function q(e){var t=e.user;e.includeFullName;return Object(O.jsx)(T,{username:t.username,children:Object(O.jsx)("span",{onClick:function(e){e.preventDefault(),window.location.href="profile/".concat(t.username)},className:"fw-bold",children:t.username})})}function L(){return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsx)("div",{className:"mr-auto",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary me-auto rounded-circle","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"+"})})})})})}function C(e){var t=Object(a.useState)([]),s=Object(d.a)(t,2),c=s[0],l=s[1],i=Object(a.useState)([]),o=Object(d.a)(i,2),u=o[0],j=o[1],b=Object(a.useState)(!1),m=Object(d.a)(b,2),p=m[0],x=m[1],f=Object(a.useState)(null),v=Object(d.a)(f,2),N=v[0],g=v[1];Object(a.useEffect)((function(){var t=Object(r.a)(e.newPosts).concat(c);t.length!==u.length&&j(t)}),[u,e.newPosts,c]),Object(a.useEffect)((function(){if(!1===p){h((function(e,t){200===t&&(g(e.next),l(e.results),x(!0))}))}}),[e.newPosts,u,c,N]);return Object(O.jsx)("div",{className:"mt-5 col-6 col-md-9 mx-auto",children:Object(O.jsxs)(n.a.Fragment,{children:[u.map((function(e,t){return Object(O.jsx)(H,{post:e},"".concat(t))})),Object(O.jsx)("div",{className:"d-grid gap-2  mx-auto mt-2",children:null!==N&&Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm mb-3 mx-auto",onClick:function(e){if(e.preventDefault(),null!==N){h((function(e,t){if(200===t){g(e.next);var s=Object(r.a)(u).concat(e.results);l(s),j(s)}}))}},children:"Load posts"})})]})})}function H(e){var t=e.post,s=Object(a.useState)(e.post?e.post:null),c=Object(d.a)(s,2),l=c[0],o=c[1],r=window.location.pathname,u=Object(i.a)(/([0-9]+)/,{postId:1}),j=r.match(u),b=j?j.groups.postId:-1,m="".concat(t.id)!=="".concat(b),p=function(e){o(e)};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row"}),Object(O.jsx)("div",{className:"row mb-5 mt-2",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsxs)("div",{className:"card h-100",children:[Object(O.jsxs)("div",{className:"d-flex align-items-center bg-light bg-gradient",children:[Object(O.jsx)("div",{className:"col-1 me-2",children:Object(O.jsx)(R,{user:t.user})}),Object(O.jsx)("div",{className:"col-11",children:Object(O.jsxs)("div",{className:"m-3 mb-3",children:[Object(O.jsx)("span",{children:Object(O.jsx)(q,{includeFullName:!0,user:t.user})}),Object(O.jsx)("br",{}),Object(O.jsx)("small",{className:"text-muted capitaized",children:t.user.location})]})})]}),Object(O.jsx)("img",{src:"http://127.0.0.1:8000/".concat(t.image,"/"),className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:t.title}),Object(O.jsx)("p",{className:"card-text",children:t.content}),Object(O.jsx)("div",{children:Object(O.jsx)("small",{className:"text-muted",children:t.timestamp})}),Object(O.jsxs)("div",{className:"btn btn-group",children:[l&&Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(S,{post:l,didLike:p,action:{type:"like",display:"like"}}),Object(O.jsx)(S,{post:l,didLike:p,action:{type:"unlike",display:"unlike"}})]}),!1===m?null:Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"views the post"})]})]})]})})})]})}function S(e){var t=e.post,s=e.action,a=e.didLike,n=t.like?t.like:0,c=e.className?e.className:"btn btn-primary btn-sm",l=s.display?s.display:"Action",i="like"===s.type?"".concat(n," ").concat(l):l;return Object(O.jsx)("button",{className:c,onClick:function(e){e.preventDefault();m({id:t.id,action:s.type},(function(e,t){200!==t&&201!==t||!a||a(e)}))},children:i})}var P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;s(e),a(e),n(e),c(e),l(e)}))},F=n.a.createElement,D=document.getElementById("root");D&&l.a.render(F((function(e){var t="false"!==e.canPost;console.log(t);var s=n.a.createRef(),c=n.a.createRef(),l=n.a.createRef(),i=Object(a.useState)([]),u=Object(d.a)(i,2),j=u[0],m=u[1],p=function(e,t){var s=Object(r.a)(j);201===t?(s.unshift(e),m(s)):alert("An error occured please try again letter !")};return Object(O.jsxs)("div",{children:[t&&Object(O.jsx)(N,{}),Object(O.jsx)("div",{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Post"}),Object(O.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.current.files[0],a=l.current.value,n=c.current.value,i=new FormData;i.append("title",n),i.append("content",a),i.append("image",t),b(i,p),l.current.value="",c.current.value="",s.current.value=null},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",ref:c,placeholder:"title"})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Content "}),Object(O.jsx)("textarea",{className:"form-control",rows:"3",ref:l})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Upload file"}),Object(O.jsx)("input",{className:"form-control",type:"file",ref:s})]}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})]})})]})})}),Object(O.jsx)(g,Object(o.a)({newPosts:j},e))]})}),D.dataset),D);var E=document.getElementById("root-feed");E&&l.a.render(F((function(e){var t="false"!==e.canPost,s=n.a.createRef(),c=n.a.createRef(),l=n.a.createRef(),i=Object(a.useState)([]),o=Object(d.a)(i,2),u=o[0],j=o[1],m=function(e,t){var s=Object(r.a)(u);201===t?(s.unshift(e),j(s)):alert("An error occured please try again letter !")};return Object(O.jsxs)("div",{children:[t&&Object(O.jsx)(L,{}),Object(O.jsx)("div",{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Post"}),Object(O.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.current.files[0],a=l.current.value,n=c.current.value,i=new FormData;i.append("title",n),i.append("content",a),i.append("image",t),b(i,m),l.current.value="",c.current.value="",s.current.value=null},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",ref:c,placeholder:"title"})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Content "}),Object(O.jsx)("textarea",{required:!0,placeholder:"Think Twice",className:"form-control",rows:"3",ref:l})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Upload file"}),Object(O.jsx)("input",{required:!0,className:"form-control",type:"file",ref:s})]}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})]})})]})})}),Object(O.jsx)(C,{newPosts:u})]})})),E);var M=document.querySelectorAll(".post-detail-el");M.forEach((function(e){M&&l.a.render(F(k,e.dataset),e)})),P()}},[[16,1,2]]]);
//# sourceMappingURL=main.3b2a2dd6.chunk.js.map