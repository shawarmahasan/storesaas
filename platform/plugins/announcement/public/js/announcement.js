(()=>{"use strict";function n(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}document.addEventListener("DOMContentLoaded",(function(){var e=function(){var e=document.querySelector(".ae-anno-announcement-wrapper");if(e){var t=e.querySelectorAll(".ae-anno-announcement"),r=document.querySelector(".ae-anno-announcement__next-button"),o=document.querySelector(".ae-anno-announcement__previous-button"),a=document.querySelector(".ae-anno-announcement__dismiss-button"),c=null!==e.getAttribute("data-announcement-autoplay"),i=parseInt(e.getAttribute("data-announcement-autoplay-delay")||5e3),u=JSON.parse(function(n){for(var e=n+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var o=t[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null}("ae-anno-dismissed-announcements")||"[]"),l=1,s=null,d=function(){c&&i&&(s&&clearInterval(s),s=setInterval((function(){l++,f(l)}),i))},f=function(){l>t.length?l=1:l<1&&(l=t.length),t.forEach((function(n){n.style.display="none"})),t[l-1].style.display="block",d()};f(l),r&&r.addEventListener("click",(function(){l++,f(l)})),o&&o.addEventListener("click",(function(){f(l--)})),a&&a.addEventListener("click",(function(){var t=JSON.parse(a.getAttribute("data-announcement-ids"));u.push.apply(u,n(t)),function(n,e,t){var r="";if(t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3),r="; expires=".concat(o.toUTCString())}document.cookie="".concat(n,"=").concat(e||"").concat(r,"; path=/")}("ae-anno-dismissed-announcements",JSON.stringify(u),365),e.parentNode.removeChild(e)})),d()}},t=$('[data-bb-toggle="announcement-lazy-loading"]');t.length?fetch(t.data("url"),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){var r=n.data;t.replaceWith(r),e()})).catch((function(n){console.error("Fetch error:",n)})):e()}))})();