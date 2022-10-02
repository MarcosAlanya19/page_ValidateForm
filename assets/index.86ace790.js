(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();document.querySelector("#app").innerHTML=`
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
`;const l=t=>document.querySelector(t),d=t=>document.querySelector(t),e=t=>document.querySelector(t),b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,f=()=>{d("#enviar").addEventListener("click",v),d("#eliminar").addEventListener("click",u),e("#email").addEventListener("input",c)};f();function v(t){t.preventDefault();const o={email:e("#email").value,asunto:e("#asunto").value,mensaje:e("#mensaje").value};e("#email").value===" "&&e("#email").classList.add("border-red-400","border-2"),c(),Object.values(o).every(a=>a!=="")||(e("#email").value==""&&e("#email").classList.add("border-red-400","border-2"),e("#asunto").value==""&&e("#asunto").classList.add("border-red-400","border-2"),e("#mensaje").value==""&&e("#mensaje").classList.add("border-red-400","border-2"),l("#alert").firstChild===null&&(m("Todos los campos son obligatorios","bg-red-500"),setTimeout(()=>{l("#alert").removeChild(l("#alert").childNodes[0])},2e3))),!e("#email").classList.contains("border-red-400")&&!e("#asunto").classList.contains("border-red-400")&&!e("#mensaje").classList.contains("border-red-400")&&(m("Todos los campos fueron enviados correctamente","bg-green-500"),setTimeout(()=>{l("#alert").removeChild(l("#alert").childNodes[0])},2e3),u(t))}console.log(!e("#email").classList.contains("border-red-400")&&!e("#mensaje").classList.contains("border-red-400"));function c(){e("#email").addEventListener("change",t);function t(){b.test(e("#email").value)?(l("#msgAlertEmail").firstChild!==null&&l("#msgAlertEmail").removeChild(l("#msgAlertEmail").childNodes[0]),e("#email").classList.remove("border-red-400","border-2")):(l("#msgAlertEmail").firstChild===null&&h(),e("#email").classList.add("border-red-400","border-2"))}}function p(){e("#asunto").addEventListener("change",t);function t(){e("#asunto").value===""?e("#asunto").classList.add("border-red-400","border-2"):e("#asunto").classList.remove("border-red-400","border-2")}}p();function g(){e("#mensaje").addEventListener("change",t);function t(){e("#mensaje").value===""?e("#mensaje").classList.add("border-red-400","border-2"):e("#mensaje").classList.remove("border-red-400","border-2")}}g();function m(t,o){const a=document.createElement("div");a.classList.add("text-center","mb-6","text-white","text-sm","px-1","py-2","rounded-md","font-bold",o),a.textContent=t,l("#alert").appendChild(a)}function h(){const t=document.createElement("p");t.classList.add("text-sm","font-bold","text-red-600"),t.textContent="Email no valido, intentelo de nuevo.",l("#msgAlertEmail").appendChild(t)}function u(t){t.preventDefault(),e("#email").value="",e("#asunto").value="",e("#mensaje").value=""}
