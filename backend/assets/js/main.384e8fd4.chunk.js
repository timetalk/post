(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(5),o=s.n(a),l=(s(14),s(3)),i=s(2);function r(e){var t=null;if(document.cookie&&""!==document.cookie)for(var s=document.cookie.split(";"),n=0;n<s.length;n++){var c=s[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}function d(e,t,s){var n="http://127.0.0.1:8000/api/post/";e&&(n="http://127.0.0.1:8000/api/post/?username=".concat(e));var c=new XMLHttpRequest;c.responseType="json",c.open("GET",n),c.setRequestHeader("Content-Type","application/json"),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(c.response,c.status)},c.send()}function j(e,t){var s;e&&(s=e);var n=new XMLHttpRequest,c=r("csrftoken");n.responseType="json",n.open("POST","http://127.0.0.1:8000/api/post/create/"),c&&(n.setRequestHeader("X-CSRFToken",c),n.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),n.setRequestHeader("Http-Requested-With","XMLHttpRequest")),n.onload=function(){403===n.status&&("Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"));t(n.response,n.status)},n.send(s)}function u(e,t){var s=new XMLHttpRequest;s.responseType="json",s.open("GET","http://127.0.0.1:8000/api/post/feed/"),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf&&(window.location.href="/accounts/login?showLoginRequired=true"));e(s.response,s.status)},s.send()}var b=s(0);function m(e){var t=e.username,s=Object(n.useState)([]),a=Object(i.a)(s,2),o=a[0],r=a[1],j=Object(n.useState)([]),u=Object(i.a)(j,2),m=u[0],p=u[1],O=Object(n.useState)(null),f=Object(i.a)(O,2),h=f[0],x=f[1];Object(n.useEffect)((function(){var t=Object(l.a)(e.newPosts).concat(o);t.length!==m.length&&p(t)}),[m,e.newPosts,o]),Object(n.useEffect)((function(){d(t,(function(e,t){200===t&&(x(e.next),r(e.results),console.log(h))}))}),[t]);return Object(b.jsx)("div",{children:Object(b.jsxs)(c.a.Fragment,{children:[m.map((function(e,t){return Object(b.jsx)(q,{post:e},"".concat(t))})),Object(b.jsx)("div",{className:"d-grid gap-2  mx-auto mt-2",children:null!==h&&Object(b.jsx)("button",{className:"btn btn-outline-primary btn-sm mb-3 mx-auto",onClick:function(e){e.preventDefault();d(t,(function(e,t){if(200===t){x(e.next);var s=Object(l.a)(m).concat(e.results);r(s),p(s)}}))},children:"Load posts"})})]})})}function p(e){var t=Object(n.useState)([]),s=Object(i.a)(t,2),a=s[0],o=s[1],r=Object(n.useState)([]),d=Object(i.a)(r,2),j=d[0],m=d[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),f=O[0],h=O[1],x=Object(n.useState)(null),v=Object(i.a)(x,2),N=v[0],w=v[1];Object(n.useEffect)((function(){var t=Object(l.a)(e.newPosts).concat(a);t.length!==j.length&&m(t)}),[j,e.newPosts,a]),Object(n.useEffect)((function(){if(!1===f){u((function(e,t){200===t&&(w(e.next),o(e.results),h(!0))}))}}),[e.newPosts,j,a,N]);return Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsxs)(c.a.Fragment,{children:[j.map((function(e,t){return Object(b.jsx)(q,{post:e},"".concat(t))})),Object(b.jsx)("div",{className:"d-grid gap-2  mx-auto mt-2",children:null!==N&&Object(b.jsx)("button",{className:"btn btn-outline-primary btn-sm mb-3 mx-auto",onClick:function(e){if(e.preventDefault(),null!==N){u((function(e,t){if(200===t){w(e.next);var s=Object(l.a)(j).concat(e.results);o(s),m(s)}}))}},children:"Load posts"})})]})})}function O(e){var t=e.user;return Object(b.jsx)("div",{className:"m-2 mb-2",children:Object(b.jsx)(f,{username:t.username,children:Object(b.jsx)("span",{className:"rounded-circle bg-black text-white text-uppercase py-2 px-3",children:t.username[0]})})})}function f(e){var t=e.username;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("span",{style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),window.location.href="/profile/".concat(t)},className:"fw-bold",children:e.children})})}function h(e){var t=e.user;e.includeFullName;return Object(b.jsx)(f,{username:t.username,children:Object(b.jsx)("span",{onClick:function(e){e.preventDefault(),window.location.href="profile/".concat(t.username)},className:"fw-bold",children:t.username})})}function x(){return Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(b.jsx)("div",{className:"mr-auto",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary me-auto rounded-circle","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"+"})})})})})}var v=s(9);var N=s(8);s(16);function w(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),a=s[0],o=s[1],d=Object(n.useState)(!1),j=Object(i.a)(d,2),u=j[0],m=j[1],p=Object(n.useState)(!0),O=Object(i.a)(p,2),f=O[0],h=O[1],x=e.post,v=c.a.createRef(),N=Object(n.useState)([]),w=Object(i.a)(N,2),y=w[0],R=w[1],T=function(e,t){if(201===t){var s=Object(l.a)(y);s.unshift(e),R(s)}};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=v.current.value;!function(e,t){var s;e&&(s=JSON.stringify(e));var n=new XMLHttpRequest,c=r("csrftoken");n.responseType="json",n.open("POST","http://127.0.0.1:8000/api/comments/create"),n.setRequestHeader("Content-Type","application/json"),c&&(n.setRequestHeader("X-CSRFToken",c),n.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),n.setRequestHeader("Http-Requested-With","XMLHttpRequest")),n.onload=function(){403===n.status&&"Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),t(n.response,n.status)},n.send(s)}({post:x.id,content:t},T),v.current.value=""},children:[Object(b.jsxs)("section",{className:"commentBox",children:[Object(b.jsx)("textarea",{rows:2,className:"mt-4",placeholder:"Add a public comment",ref:v,onFocus:function(){o(!0),m(!0)},onBlur:function(){o(!1)},onKeyUp:function(e){var t=e.target.value;h(!t)}}),a&&Object(b.jsx)("div",{className:"mb-2 commentLine"})]}),u&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"commentButton sendButton",disabled:f,children:"COMMENT"}),Object(b.jsx)("button",{className:"commentButton",style:{color:"gray",backgroundColor:"transparent"},onClick:function(){m(!1),v.current.value=""},children:"CANCEL"})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)(g,{post:x,newComment:y})})]})}function g(e){var t=e.post,s=t.comments,c=Object(n.useState)(!1),a=Object(i.a)(c,2),o=a[0],r=a[1],d=Object(n.useState)([]),j=Object(i.a)(d,2),u=j[0],m=j[1],p=Object(n.useState)(t.comments.length),O=Object(i.a)(p,2),f=O[0],h=O[1],x=Object(b.jsx)("i",{className:"fas fa-caret-down"});return x=o?Object(b.jsx)("i",{className:"fas fa-caret-up"}):Object(b.jsx)("i",{className:"fas fa-caret-down"}),Object(n.useEffect)((function(){var t=Object(l.a)(e.newComment).concat(s);t!==s&&(m(t),h(t.length))}),[e.newComment,s]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("section",{className:"arrowComment",onClick:function(){r((function(e){return!e}))},children:[x,Object(b.jsxs)("div",{children:["View ",f," Comments"]})]}),o&&Object(b.jsx)("section",{children:u.map((function(e,t){return Object(b.jsx)(y,{comment:e},"".concat(t,"-").concat(e.id))}))})]})}function y(e){var t=e.comment;return Object(b.jsx)("div",{children:Object(b.jsx)(R,{comment:t})})}function R(e){var t=e.comment,s=Object(n.useState)(e.comment?e.comment:null),a=Object(i.a)(s,2),o=a[0],l=a[1],r=function(e){l(e)};return Object(b.jsxs)("section",{className:"messageContainer",children:[Object(b.jsx)("div",{className:"messageUser me-5",style:{marginLeft:"20px"},children:t.user.username}),t.user?Object(b.jsx)("div",{className:"username",children:Object(b.jsx)(O,{user:t.user})}):Object(b.jsx)("i",{className:"fas fa-user-circle"}),Object(b.jsx)("div",{className:"messageText me-5",style:{marginLeft:"20px"},children:t.content}),Object(b.jsx)("div",{className:"col-12 col-md-12 col-sm-12 mx-auto",children:Object(b.jsx)("div",{className:"btn btn-group",children:o&&Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(T,{className:"fas fa-thumbs-up me-4",comment:o,didLike:r,action:{type:"like",display:"like"}}),Object(b.jsx)(T,{className:"fas fa-thumbs-down",comment:o,didLike:r,action:{type:"unlike",display:"unlike"}})]})})})]})}function T(e){var t=e.comment,s=e.action,n=e.didLike,c=t.likes?t.likes:0,a=e.className?e.className:"btn btn-primary btn-sm",o="like"===s.type?" ".concat(c," "):null;return Object(b.jsx)("i",{className:a,onClick:function(e){e.preventDefault();!function(e,t){var s;e&&(s=JSON.stringify(e)),console.log(s);var n=new XMLHttpRequest,c=r("csrftoken");n.responseType="json",n.open("POST","http://127.0.0.1:8000/api/comments/action"),n.setRequestHeader("Content-Type","application/json"),c&&(n.setRequestHeader("X-CSRFToken",c),n.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),n.setRequestHeader("Http-Requested-With","XMLHttpRequest")),n.onload=function(){403===n.status&&"Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),t(n.response,n.status)},n.send(s)}({id:t.id,action:s.type},(function(e,t){200!==t&&201!==t||!n||n(e)}))},children:o})}function q(e){var t=e.post,s=Object(n.useState)(e.post?e.post:null),a=Object(i.a)(s,2),o=a[0],l=a[1],r=window.location.pathname,d=Object(N.a)(/([0-9]+)/,{postId:1}),j=r.match(d),u=j?j.groups.postId:-1,m="".concat(t.id)!=="".concat(u),p=function(e){l(e)};return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-5 mt-2",children:Object(b.jsx)("div",{className:"col-12 col-md-6 col-sm-12 mx-auto",children:Object(b.jsxs)("div",{className:"card h-100",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center bg-light bg-gradient",children:[Object(b.jsx)("div",{className:"col-1 me-4 mb-3",children:Object(b.jsx)(O,{user:t.user})}),Object(b.jsx)("div",{className:"col-11  col-12 col-md-6 col-sm-12",children:Object(b.jsxs)("div",{className:"m-3 mb-2",children:[Object(b.jsx)("span",{children:Object(b.jsx)(h,{includeFullName:!0,user:t.user})}),Object(b.jsx)("br",{}),Object(b.jsx)("small",{className:"text-muted capitaized",children:t.user.location})]})})]}),Object(b.jsx)("img",{src:"http://127.0.0.1:8000/".concat(t.image,"/"),className:"card-img-top",alt:"..."}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.title}),Object(b.jsx)("p",{className:"card-text",children:t.content}),Object(b.jsx)("div",{children:Object(b.jsx)("small",{className:"text-muted"})}),Object(b.jsx)("div",{className:"col-12 col-md-12 col-sm-12 mx-auto",children:Object(b.jsxs)("div",{className:"btn btn-group",children:[o&&Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(H,{post:o,didLike:p,action:{type:"like",display:"like"}}),Object(b.jsx)(H,{post:o,didLike:p,action:{type:"unlike",display:"unlike"}})]}),!1===m?null:Object(b.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"views the post"})]})}),Object(b.jsx)(w,{post:t})]}),Object(b.jsx)("div",{})]})})})})}function H(e){var t=e.post,s=e.action,n=e.didLike,c=t.like?t.like:0,a=e.className?e.className:"btn btn-primary btn-sm",o=s.display?s.display:"Action",l="like"===s.type?"".concat(c," ").concat(o):o;return Object(b.jsx)("button",{className:a,onClick:function(e){e.preventDefault();!function(e,t){var s;e&&(s=JSON.stringify(e));var n=new XMLHttpRequest,c=r("csrftoken");n.responseType="json",n.open("POST","http://127.0.0.1:8000/api/post/action/"),n.setRequestHeader("Content-Type","application/json"),c&&(n.setRequestHeader("X-CSRFToken",c),n.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),n.setRequestHeader("Http-Requested-With","XMLHttpRequest")),n.onload=function(){403===n.status&&"Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),t(n.response,n.status)},n.send(s)}({id:t.id,action:s.type},(function(e,t){200!==t&&201!==t||!n||n(e)}))},children:l})}function L(e){var t=e.postId,s=Object(n.useState)(null),c=Object(i.a)(s,2),a=c[0],o=c[1],l=Object(n.useState)(!1),r=Object(i.a)(l,2),d=r[0],j=r[1];return function(e,t){var s=new XMLHttpRequest,n="http://127.0.0.1:8000/api/post/".concat(e);s.responseType="json",s.open("GET",n),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){403===s.status&&"Authentication credentials were not provided."===s.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),t(s.response,s.status)},s.send()}(t,(function(e,t){!1===d&&200===t&&(o(e),j(!0))})),null!==a?Object(b.jsx)(q,{post:a}):null}function k(e){var t=e.user,s=e.didfollowToggle,n=e.profileLoading,c=t&&t.is_following?"unfollow":"follow",a="follow"===c?"btn btn-primary":"btn btn-danger";return t?Object(b.jsx)("div",{className:"container rounded bg-white mt-5 mb-5",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3 border-right",children:Object(b.jsxs)("div",{className:"d-flex flex-column align-items-center text-center p-3 py-5",children:[Object(b.jsx)("span",{className:"mb-3",children:Object(b.jsx)(O,{className:"fw-5 ",user:t})}),Object(b.jsx)("span",{className:"font-weight-bold ",children:t.username}),Object(b.jsx)("span",{className:"text-black-50",children:t.email}),Object(b.jsx)("span",{children:" "})]})}),Object(b.jsx)("div",{className:"col-md-5 border-right",children:Object(b.jsxs)("div",{className:"p-3 py-5",children:[Object(b.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:Object(b.jsx)("h4",{className:"text-right",children:"Profile Detail"})}),Object(b.jsxs)("div",{className:"row mt-2",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("label",{children:["First Name: ",Object(b.jsx)("b",{children:t.first_name})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("label",{children:["Last Name: ",Object(b.jsx)("b",{children:t.last_name})]})})]}),Object(b.jsxs)("div",{className:"row mt-3",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("label",{children:["Username:  ",Object(b.jsx)("b",{children:t.username})," "]})}),Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("label",{children:["Location  ",Object(b.jsx)("b",{children:t.location})," "]})}),Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("label",{children:["Phone number:  ",Object(b.jsx)("b",{children:t.phone_number})," "]})})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("p",{children:t.bio})})]}),Object(b.jsxs)("div",{className:"row mt-3",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("label",{children:["Follwers: ",Object(b.jsx)("b",{children:t.followers})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("label",{children:["Following: ",Object(b.jsx)("b",{children:t.following})," "]})})]})]})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsxs)("div",{className:"p-3 py-5",children:[Object(b.jsx)("div",{className:"d-flex justify-content-between align-items-center experience",children:Object(b.jsxs)("span",{className:a,onClick:function(e){e.preventDefault(),s&&!n&&s(c)},children:[Object(b.jsx)("i",{className:"fa fa-plus"}),"\xa0",c]})}),Object(b.jsx)("br",{})]})})]})}):null}function S(e){var t=e.username,s=Object(n.useState)(null),c=Object(i.a)(s,2),a=c[0],o=c[1],l=Object(n.useState)(!1),d=Object(i.a)(l,2),j=d[0],u=d[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),O=p[0],f=p[1],h=function(e,t){200===t&&o(e)};Object(n.useEffect)((function(){!1===j&&(!function(e,t){var s="http://127.0.0.1:8000/api/profile/";e&&(s="http://127.0.0.1:8000/api/profile/".concat(e,"/")),console.log(s);var n=new XMLHttpRequest;n.responseType="json",n.open("GET",s),n.setRequestHeader("Content-Type","application/json"),n.onload=function(){403===n.status&&"Authentication credentials were not provided."===n.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),t(n.response,n.status)},n.send()}(t,h),u(!0))}),[t,j,u]);return Object(b.jsx)(k,{user:a,didfollowToggle:function(e){console.log(e),function(e,t,s){var n;t&&(n=JSON.stringify(t).toLowerCase()),console.log(n);var c=new XMLHttpRequest,a=r("csrftoken"),o="http://127.0.0.1:8000/api/profile/".concat(e,"/follow/");c.responseType="json",c.open("POST",o),c.setRequestHeader("Content-Type","application/json"),a&&(c.setRequestHeader("X-CSRFToken",a),c.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),c.setRequestHeader("Http-Requested-With","XMLHttpRequest")),c.onload=function(){403===c.status&&"Authentication credentials were not provided."===c.response.detail&&(window.location.href="/accounts/login?showLoginRequired=true"),s(c.response,c.status)},c.send(n)}(t,{action:e},(function(e,t){console.log(e,t),200===t&&o(e),f(!1)})),f(!0)},profileLoading:O})}var C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),c(e),a(e),o(e)}))},E=c.a.createElement,X=document.getElementById("root");X&&o.a.render(E((function(e){var t="false"!==e.canPost,s=c.a.createRef(),a=c.a.createRef(),o=c.a.createRef(),r=Object(n.useState)([]),d=Object(i.a)(r,2),u=d[0],p=d[1],O=function(e,t){var s=Object(l.a)(u);201===t?(s.unshift(e),p(s)):alert("An error occured please try again letter !")};return Object(b.jsxs)("div",{children:[t&&Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Post"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.current.files[0],n=o.current.value,c=a.current.value,l=new FormData;l.append("title",c),l.append("content",n),l.append("image",t),j(l,O),o.current.value="",a.current.value="",s.current.value=null},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",ref:a,placeholder:"title"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Content "}),Object(b.jsx)("textarea",{className:"form-control",rows:"3",ref:o})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Upload file"}),Object(b.jsx)("input",{className:"form-control",type:"file",ref:s})]}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})]})})]})})}),Object(b.jsx)(m,Object(v.a)({newPosts:u},e))]})}),X.dataset),X);var M=document.getElementById("root-feed");M&&o.a.render(E((function(e){var t="false"!==e.canPost,s=c.a.createRef(),a=c.a.createRef(),o=c.a.createRef(),r=Object(n.useState)([]),d=Object(i.a)(r,2),u=d[0],m=d[1],O=function(e,t){var s=Object(l.a)(u);201===t?(s.unshift(e),m(s)):alert("An error occured please try again letter !")};return Object(b.jsxs)("div",{children:[t&&Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Post"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.current.files[0],n=o.current.value,c=a.current.value,l=new FormData;l.append("title",c),l.append("content",n),l.append("image",t),j(l,O),o.current.value="",a.current.value="",s.current.value=null},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",ref:a,placeholder:"title"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Content "}),Object(b.jsx)("textarea",{required:!0,placeholder:"Think Twice",className:"form-control",rows:"3",ref:o})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Upload file"}),Object(b.jsx)("input",{required:!0,className:"form-control",type:"file",ref:s})]}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})]})})]})})}),Object(b.jsx)(p,{newPosts:u})]})})),M);var P=document.querySelectorAll(".post-detail-el");P.forEach((function(e){P&&o.a.render(E(L,e.dataset),e)}));var F=document.querySelectorAll(".post-profile-el");F.forEach((function(e){F&&o.a.render(E(S,e.dataset),e)})),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.384e8fd4.chunk.js.map