(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(5),l=s.n(a),i=(s(14),s(7)),o=s(9),r=s(3),d=s(2);function j(e){var t=null;if(document.cookie&&""!==document.cookie)for(var s=document.cookie.split(";"),c=0;c<s.length;c++){var n=s[c].trim();if(n.substring(0,e.length+1)===e+"="){t=decodeURIComponent(n.substring(e.length+1));break}}return t}function b(e,t,s){var c="http://127.0.0.1:8000/api/post/";e&&(c="http://127.0.0.1:8000/api/post/?username=".concat(e));var n=new XMLHttpRequest;n.responseType="json",n.open("GET",c),n.setRequestHeader("Content-Type","application/json"),n.onload=function(){403===n.status&&("Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(n.response,n.status)},n.send()}function u(e,t){var s;e&&(s=e);var c=new XMLHttpRequest,n=j("csrftoken");c.responseType="json",c.open("POST","http://127.0.0.1:8000/api/post/create/"),n&&(c.setRequestHeader("X-CSRFToken",n),c.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),c.setRequestHeader("Http-Requested-With","XMLHttpRequest")),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(c.response,c.status)},c.send(s)}function m(e,t){var s;e&&(s=JSON.stringify(e));var c=new XMLHttpRequest,n=j("csrftoken");c.responseType="json",c.open("POST","http://127.0.0.1:8000/api/post/action/"),c.setRequestHeader("Content-Type","application/json"),n&&(c.setRequestHeader("X-CSRFToken",n),c.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),c.setRequestHeader("Http-Requested-With","XMLHttpRequest")),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(c.response,c.status)},c.send(s)}function p(e,t){var s=new XMLHttpRequest,c="http://127.0.0.1:8000/api/post/".concat(e);s.responseType="json",s.open("GET",c),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(s.response,s.status)},s.send()}function h(e,t){var s=new XMLHttpRequest;s.responseType="json",s.open("GET","http://127.0.0.1:8000/api/post/feed/"),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf&&(window.location.href="/accounts/login?showLoginRequired=true"));e(s.response,s.status)},s.send()}var O=s(0);function x(e){var t=e.user;return Object(O.jsx)("div",{className:"m-3 mb-2",children:Object(O.jsx)(f,{username:t.username,children:Object(O.jsx)("span",{className:"rounded-circle bg-black text-white text-uppercase py-3 px-4",children:t.username[0]})})})}function f(e){var t=e.username;return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)("span",{style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),window.location.href="/profile/".concat(t)},className:"fw-bold",children:e.children})})}function v(e){var t=e.user;!0===e.includeFullName&&"".concat(t.first_name," ").concat(t.last_name);return Object(O.jsx)(f,{username:t.username,children:Object(O.jsx)("span",{onClick:function(e){e.preventDefault(),window.location.href="profile/".concat(t.username)},className:"fw-bold",children:t.username})})}function N(){return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsx)("div",{className:"mr-auto",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary me-auto rounded-circle","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"+"})})})})})}function w(e){var t=e.username,s=Object(c.useState)([]),a=Object(d.a)(s,2),l=a[0],i=a[1],o=Object(c.useState)([]),j=Object(d.a)(o,2),u=j[0],m=j[1],p=Object(c.useState)(null),h=Object(d.a)(p,2),x=h[0],f=h[1];Object(c.useEffect)((function(){var t=Object(r.a)(e.newPosts).concat(l);t.length!==u.length&&m(t)}),[u,e.newPosts,l]),Object(c.useEffect)((function(){b(t,(function(e,t){200===t&&(f(e.next),i(e.results),console.log(x))}))}),[t]);return Object(O.jsx)("div",{className:"mt-5 col-6 col-md-9 mx-auto",children:Object(O.jsxs)(n.a.Fragment,{children:[u.map((function(e,t){return Object(O.jsx)(g,{post:e},"".concat(t))})),Object(O.jsx)("div",{className:"d-grid gap-2  mx-auto mt-2",children:null!==x&&Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm mb-3 mx-auto",onClick:function(e){e.preventDefault();b(t,(function(e,t){if(200===t){f(e.next);var s=Object(r.a)(u).concat(e.results);i(s),m(s)}}))},children:"Load posts"})})]})})}function g(e){var t=e.post,s=Object(c.useState)(e.post?e.post:null),a=Object(d.a)(s,2),l=a[0],o=a[1],r=window.location.pathname,j=Object(i.a)(/([0-9]+)/,{postId:1}),b=r.match(j),u=b?b.groups.postId:-1,m="".concat(t.id)!=="".concat(u),p=function(e){o(e)};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row"}),Object(O.jsx)("div",{className:"row mb-5 mt-2",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsxs)("div",{className:"card h-100",children:[Object(O.jsxs)("div",{className:"d-flex align-items-center bg-light bg-gradient",children:[Object(O.jsx)("div",{className:"col-1 me-4",children:Object(O.jsx)(x,{user:t.user})}),Object(O.jsx)("div",{className:"col-11",children:Object(O.jsxs)("div",{className:"m-3 mb-2",children:[Object(O.jsx)("span",{children:Object(O.jsx)(v,{includeFullName:!0,user:t.user})}),Object(O.jsx)("br",{}),Object(O.jsx)("small",{className:"text-muted capitaized",children:t.user.location})]})})]}),Object(O.jsx)("img",{src:"http://127.0.0.1:8000/".concat(t.image,"/"),className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:t.title}),Object(O.jsx)("p",{className:"card-text",children:t.content}),Object(O.jsx)("div",{children:Object(O.jsx)("small",{className:"text-muted",children:t.timestamp})}),Object(O.jsxs)("div",{className:"btn btn-group",children:[l&&Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(y,{post:l,didLike:p,action:{type:"like",display:"like"}}),Object(O.jsx)(y,{post:l,didLike:p,action:{type:"unlike",display:"unlike"}})]}),!1===m?null:Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"views the post"})]})]})]})})})]})}function y(e){var t=e.post,s=e.action,c=e.didLike,n=t.like?t.like:0,a=e.className?e.className:"btn btn-primary btn-sm",l=s.display?s.display:"Action",i="like"===s.type?"".concat(n," ").concat(l):l;return Object(O.jsx)("button",{className:a,onClick:function(e){e.preventDefault();m({id:t.id,action:s.type},(function(e,t){200!==t&&201!==t||!c||c(e)}))},children:i})}function R(e){var t=e.postId,s=Object(c.useState)(null),n=Object(d.a)(s,2),a=n[0],l=n[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),r=o[0],j=o[1];return p(t,(function(e,t){!1===r&&200===t&&(l(e),j(!0))})),null!==a?Object(O.jsx)(g,{post:a}):null}function k(e){var t=e.user;return Object(O.jsx)("div",{className:"m-2 mb-2",children:Object(O.jsx)(T,{username:t.username,children:Object(O.jsx)("span",{className:"rounded-circle bg-black text-white text-uppercase py-2 px-3",children:t.username[0]})})})}function T(e){var t=e.username;return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)("span",{style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),window.location.href="/profile/".concat(t)},className:"fw-bold",children:e.children})})}function q(e){var t=e.user;e.includeFullName;return Object(O.jsx)(T,{username:t.username,children:Object(O.jsx)("span",{onClick:function(e){e.preventDefault(),window.location.href="profile/".concat(t.username)},className:"fw-bold",children:t.username})})}function L(){return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsx)("div",{className:"mr-auto",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary me-auto rounded-circle","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"+"})})})})})}function H(e){var t=Object(c.useState)([]),s=Object(d.a)(t,2),a=s[0],l=s[1],i=Object(c.useState)([]),o=Object(d.a)(i,2),j=o[0],b=o[1],u=Object(c.useState)(!1),m=Object(d.a)(u,2),p=m[0],x=m[1],f=Object(c.useState)(null),v=Object(d.a)(f,2),N=v[0],w=v[1];Object(c.useEffect)((function(){var t=Object(r.a)(e.newPosts).concat(a);t.length!==j.length&&b(t)}),[j,e.newPosts,a]),Object(c.useEffect)((function(){if(!1===p){h((function(e,t){200===t&&(w(e.next),l(e.results),x(!0))}))}}),[e.newPosts,j,a,N]);return Object(O.jsx)("div",{className:"mt-5 col-6 col-md-9 mx-auto",children:Object(O.jsxs)(n.a.Fragment,{children:[j.map((function(e,t){return Object(O.jsx)(S,{post:e},"".concat(t))})),Object(O.jsx)("div",{className:"d-grid gap-2  mx-auto mt-2",children:null!==N&&Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm mb-3 mx-auto",onClick:function(e){if(e.preventDefault(),null!==N){h((function(e,t){if(200===t){w(e.next);var s=Object(r.a)(j).concat(e.results);l(s),b(s)}}))}},children:"Load posts"})})]})})}function S(e){var t=e.post,s=Object(c.useState)(e.post?e.post:null),a=Object(d.a)(s,2),l=a[0],o=a[1],r=window.location.pathname,j=Object(i.a)(/([0-9]+)/,{postId:1}),b=r.match(j),u=b?b.groups.postId:-1,m="".concat(t.id)!=="".concat(u),p=function(e){o(e)};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row"}),Object(O.jsx)("div",{className:"row mb-5 mt-2",children:Object(O.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(O.jsxs)("div",{className:"card h-100",children:[Object(O.jsxs)("div",{className:"d-flex align-items-center bg-light bg-gradient",children:[Object(O.jsx)("div",{className:"col-1 me-2",children:Object(O.jsx)(k,{user:t.user})}),Object(O.jsx)("div",{className:"col-11",children:Object(O.jsxs)("div",{className:"m-3 mb-3",children:[Object(O.jsx)("span",{children:Object(O.jsx)(q,{includeFullName:!0,user:t.user})}),Object(O.jsx)("br",{}),Object(O.jsx)("small",{className:"text-muted capitaized",children:t.user.location})]})})]}),Object(O.jsx)("img",{src:"http://127.0.0.1:8000/".concat(t.image,"/"),className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:t.title}),Object(O.jsx)("p",{className:"card-text",children:t.content}),Object(O.jsx)("div",{children:Object(O.jsx)("small",{className:"text-muted",children:t.timestamp})}),Object(O.jsxs)("div",{className:"btn btn-group",children:[l&&Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(C,{post:l,didLike:p,action:{type:"like",display:"like"}}),Object(O.jsx)(C,{post:l,didLike:p,action:{type:"unlike",display:"unlike"}})]}),!1===m?null:Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"views the post"})]})]})]})})})]})}function C(e){var t=e.post,s=e.action,c=e.didLike,n=t.like?t.like:0,a=e.className?e.className:"btn btn-primary btn-sm",l=s.display?s.display:"Action",i="like"===s.type?"".concat(n," ").concat(l):l;return Object(O.jsx)("button",{className:a,onClick:function(e){e.preventDefault();m({id:t.id,action:s.type},(function(e,t){200!==t&&201!==t||!c||c(e)}))},children:i})}function E(e){var t=e.user,s=e.didfollowToggle,c=e.profileLoading,n=t&&t.is_following?"unfollow":"follow",a="follow"===n?"btn btn-primary":"btn btn-danger";return t?Object(O.jsx)("div",{class:"container rounded bg-white mt-5 mb-5",children:Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-md-3 border-right",children:Object(O.jsxs)("div",{class:"d-flex flex-column align-items-center text-center p-3 py-5",children:[Object(O.jsx)("span",{className:"mb-3",children:Object(O.jsx)(x,{className:"fw-5 ",user:t})}),Object(O.jsx)("span",{className:"font-weight-bold ",children:t.username}),Object(O.jsx)("span",{class:"text-black-50",children:t.email}),Object(O.jsx)("span",{children:" "})]})}),Object(O.jsx)("div",{class:"col-md-5 border-right",children:Object(O.jsxs)("div",{class:"p-3 py-5",children:[Object(O.jsx)("div",{class:"d-flex justify-content-between align-items-center mb-3",children:Object(O.jsx)("h4",{class:"text-right",children:"Profile Detail"})}),Object(O.jsxs)("div",{class:"row mt-2",children:[Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("label",{children:["First Name: ",Object(O.jsx)("b",{children:t.first_name})]})}),Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("label",{children:["Last Name: ",Object(O.jsx)("b",{children:t.last_name})]})})]}),Object(O.jsxs)("div",{class:"row mt-3",children:[Object(O.jsx)("div",{class:"col-md-12",children:Object(O.jsxs)("label",{children:["Username:  ",Object(O.jsx)("b",{children:t.username})," "]})}),Object(O.jsx)("div",{class:"col-md-12",children:Object(O.jsxs)("label",{children:["Location  ",Object(O.jsx)("b",{children:t.location})," "]})}),Object(O.jsx)("div",{class:"col-md-12",children:Object(O.jsxs)("label",{children:["Phone number:  ",Object(O.jsx)("b",{children:t.phone_number})," "]})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{class:"col-md-12",children:Object(O.jsx)("p",{children:t.bio})})]}),Object(O.jsxs)("div",{class:"row mt-3",children:[Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("label",{children:["Follwers: ",Object(O.jsx)("b",{children:t.followers})]})}),Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("label",{children:["Following: ",Object(O.jsx)("b",{children:t.following})," "]})})]})]})}),Object(O.jsx)("div",{class:"col-md-4",children:Object(O.jsxs)("div",{class:"p-3 py-5",children:[Object(O.jsx)("div",{class:"d-flex justify-content-between align-items-center experience",children:Object(O.jsxs)("span",{className:a,onClick:function(e){e.preventDefault(),s&&!c&&s(n)},children:[Object(O.jsx)("i",{class:"fa fa-plus"}),"\xa0",n]})}),Object(O.jsx)("br",{})]})})]})}):null}function P(e){var t=e.username,s=Object(c.useState)(null),n=Object(d.a)(s,2),a=n[0],l=n[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),r=o[0],b=o[1],u=Object(c.useState)(!1),m=Object(d.a)(u,2),p=m[0],h=m[1],x=function(e,t){200===t&&l(e)};Object(c.useEffect)((function(){!1===r&&(!function(e,t){var s="http://127.0.0.1:8000/api/profile/";e&&(s="http://127.0.0.1:8000/api/profile/".concat(e,"/")),console.log(s);var c=new XMLHttpRequest;c.responseType="json",c.open("GET",s),c.setRequestHeader("Content-Type","application/json"),c.onload=function(){403===c.status&&"Authentication credentials were not provided."===c.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),t(c.response,c.status)},c.send()}(t,x),b(!0))}),[t,r,b]);return Object(O.jsx)(E,{user:a,didfollowToggle:function(e){console.log(e),function(e,t,s){var c;t&&(c=JSON.stringify(t).toLowerCase()),console.log(c);var n=new XMLHttpRequest,a=j("csrftoken"),l="http://127.0.0.1:8000/api/profile/".concat(e,"/follow/");n.responseType="json",n.open("POST",l),n.setRequestHeader("Content-Type","application/json"),a&&(n.setRequestHeader("X-CSRFToken",a),n.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),n.setRequestHeader("Http-Requested-With","XMLHttpRequest")),n.onload=function(){403===n.status&&"Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),s(n.response,n.status)},n.send(c)}(t,{action:e},(function(e,t){console.log(e,t),200===t&&l(e),h(!1)})),h(!0)},profileLoading:p})}var F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;s(e),c(e),n(e),a(e),l(e)}))},M=n.a.createElement,D=document.getElementById("root");D&&l.a.render(M((function(e){var t="false"!==e.canPost;console.log(t);var s=n.a.createRef(),a=n.a.createRef(),l=n.a.createRef(),i=Object(c.useState)([]),j=Object(d.a)(i,2),b=j[0],m=j[1],p=function(e,t){var s=Object(r.a)(b);201===t?(s.unshift(e),m(s)):alert("An error occured please try again letter !")};return Object(O.jsxs)("div",{children:[t&&Object(O.jsx)(N,{}),Object(O.jsx)("div",{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Post"}),Object(O.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.current.files[0],c=l.current.value,n=a.current.value,i=new FormData;i.append("title",n),i.append("content",c),i.append("image",t),u(i,p),l.current.value="",a.current.value="",s.current.value=null},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",ref:a,placeholder:"title"})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Content "}),Object(O.jsx)("textarea",{className:"form-control",rows:"3",ref:l})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Upload file"}),Object(O.jsx)("input",{className:"form-control",type:"file",ref:s})]}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})]})})]})})}),Object(O.jsx)(w,Object(o.a)({newPosts:b},e))]})}),D.dataset),D);var X=document.getElementById("root-feed");X&&l.a.render(M((function(e){var t="false"!==e.canPost,s=n.a.createRef(),a=n.a.createRef(),l=n.a.createRef(),i=Object(c.useState)([]),o=Object(d.a)(i,2),j=o[0],b=o[1],m=function(e,t){var s=Object(r.a)(j);201===t?(s.unshift(e),b(s)):alert("An error occured please try again letter !")};return Object(O.jsxs)("div",{children:[t&&Object(O.jsx)(L,{}),Object(O.jsx)("div",{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Post"}),Object(O.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.current.files[0],c=l.current.value,n=a.current.value,i=new FormData;i.append("title",n),i.append("content",c),i.append("image",t),u(i,m),l.current.value="",a.current.value="",s.current.value=null},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",ref:a,placeholder:"title"})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Content "}),Object(O.jsx)("textarea",{required:!0,placeholder:"Think Twice",className:"form-control",rows:"3",ref:l})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Upload file"}),Object(O.jsx)("input",{required:!0,className:"form-control",type:"file",ref:s})]}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})]})})]})})}),Object(O.jsx)(H,{newPosts:j})]})})),X);var _=document.querySelectorAll(".post-detail-el");_.forEach((function(e){_&&l.a.render(M(R,e.dataset),e)}));var A=document.querySelectorAll(".post-profile-el");A.forEach((function(e){A&&l.a.render(M(P,e.dataset),e)})),F()}},[[16,1,2]]]);
//# sourceMappingURL=main.39ec2987.chunk.js.map