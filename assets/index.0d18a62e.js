(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();document.querySelector("#app").innerHTML=`
<div class=" bg-sky-700">
  <form id="form" class="w-5/6 lg:w-5/12 mx-auto h-screen grid items-center">
    <div class="bg-white p-10 rounded-lg">
  
      <h1 class="text-center uppercase text-2xl mb-6 font-bold">Validacion de formulario</h1>
  
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium">Email:</label>
        <input type="email" id="email" class=" border text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400" placeholder="Example@gmail.com" >
        <div id="emailErr"></div>
        <div id="msgAlertEmail"></div>
      </div>

  
      <div class="mb-6">
        <label for="asunto" class="block mb-2 text-sm font-medium">Asunto:</label>
        <input type="text" id="asunto" placeholder="Escribe tu asunto"  class="border text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400" >
      </div>

  
      <div class="mb-6">
        <label for="mensaje" class="block mb-2 text-sm font-medium">Mensaje:</label>
        <input type="text" id="mensaje" class="border text-sm rounded-lg block w-full p-2.5 border-gray-600" placeholder="Escribe tu mensaje" >
      </div>

      
      <div id="alert"></div>

  
      <div class="grid grid-cols-2 justify-items-center md:justify-items-stretch gap-x-2">
        <button id="enviar" class="md:mx-10 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-teal-600 hover:bg-teal-700">Enviar</button>
        
        <button id="eliminar" class=" md:mx-10 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-red-700 hover:bg-red-800">Eliminar</button>
      </div>
    </div>
  </form>
</div>
`;const l=t=>document.querySelector(t),n=t=>document.querySelector(t),e=t=>document.querySelector(t),c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=()=>{n("#enviar").addEventListener("click",b),n("#eliminar").addEventListener("click",h),e("#email").addEventListener("input",m)};u();function b(t){t.preventDefault();const s={email:e("#email").value,asunto:e("#asunto").value,mensaje:e("#mensaje").value};e("#email").value===" "&&e("#email").classList.add("border-red-400","border-2"),m(),Object.values(s).every(o=>o.length>0)?(e("#email").classList.remove("border-red-400","border-2"),e("#asunto").classList.remove("border-red-400","border-2"),e("#mensaje").classList.remove("border-red-400","border-2"),l("#alert").firstChild!==null&&l("#alert").removeChild(l("#alert").childNodes[0])):(e("#email").value==""&&e("#email").classList.add("border-red-400","border-2"),e("#asunto").value==""&&e("#asunto").classList.add("border-red-400","border-2"),e("#mensaje").value==""&&e("#mensaje").classList.add("border-red-400","border-2"),l("#alert").firstChild===null&&(p("Todos los campos son obligatorios","bg-red-500"),setTimeout(()=>{l("#alert").removeChild(l("#alert").childNodes[0])},2e3)))}function m(){e("#email").addEventListener("change",t);function t(){c.test(e("#email").value)?(l("#msgAlertEmail").firstChild!==null&&l("#msgAlertEmail").removeChild(l("#msgAlertEmail").childNodes[0]),e("#email").classList.remove("border-red-400","border-2")):(l("#msgAlertEmail").firstChild===null&&g(),e("#email").classList.add("border-red-400","border-2"))}}function f(){e("#asunto").addEventListener("change",t);function t(){e("#asunto").value===""?e("#asunto").classList.add("border-red-400","border-2"):e("#asunto").classList.remove("border-red-400","border-2")}}f();function v(){e("#mensaje").addEventListener("change",t);function t(){e("#mensaje").value===""?e("#mensaje").classList.add("border-red-400","border-2"):e("#mensaje").classList.remove("border-red-400","border-2")}}v();function p(t,s){const o=document.createElement("div");o.classList.add("text-center","mb-6","text-white","text-sm","px-1","py-2","rounded-md","font-bold",s),o.textContent=t,l("#alert").appendChild(o)}function g(){const t=document.createElement("p");t.classList.add("text-sm","font-bold","text-red-600"),t.textContent="Email no valido, intentelo de nuevo.",l("#msgAlertEmail").appendChild(t)}function h(t){t.preventDefault();const s={email:e("#email").value,asunto:e("#asunto").value,mensaje:e("#mensaje").value};Object.values(s).some(o=>o!=="")&&(Object.values(s).splice(Object.values(s).length),x())}function x(){e("#email").value="",e("#asunto").value="",e("#mensaje").value=""}
