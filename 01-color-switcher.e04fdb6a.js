!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){timerId=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.setAttribute("disabled","true"),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e04fdb6a.js.map
