const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(()=>{e.setAttribute("disabled","true"),timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.removeAttribute("disabled")}),1e3)})),t.addEventListener("click",(()=>{clearInterval(timerId),t.setAttribute("disabled","true"),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.b857526a.js.map