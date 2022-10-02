(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=i(l);fetch(l.href,s)}})();document.querySelector("#app").innerHTML=`
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
`;const o=e=>document.querySelector(e),d=e=>document.querySelector(e),t=e=>document.querySelector(e),c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=()=>{d("#enviar").addEventListener("click",f),d("#eliminar").addEventListener("click",g)};u();function f(e){e.preventDefault();const r={email:t("#email").value,asunto:t("#asunto").value,mensaje:t("#mensaje").value};c.test(t("#email").value)?o("#msgAlertEmail").firstChild!==null&&o("#msgAlertEmail").removeChild(o("#msgAlertEmail").childNodes[0]):o("#msgAlertEmail").firstChild===null&&p(),b(r)?(o("#alert").firstChild===null&&(m("Todos los campos son obligatorios","bg-red-500"),setTimeout(()=>{o("#alert").removeChild(o("#alert").childNodes[0])},3e3)),v()):o("#alert").firstChild===null&&(m("Todos los campos fueron rellenados correctamente","bg-green-600"),setTimeout(()=>{o("#alert").removeChild(o("#alert").childNodes[0])},3e3),t("#email").classList.remove("border-red-400","border-2"),t("#asunto").classList.remove("border-red-400","border-2"),t("#mensaje").classList.remove("border-red-400","border-2"))}function b(e){return!Object.values(e).every(r=>r!=="")}function m(e,r){const i=document.createElement("div");i.classList.add("text-center","mb-6","text-white","text-sm","px-1","py-2","rounded-md","font-bold",r),i.textContent=e,o("#alert").appendChild(i)}function v(){t("#email").classList.add("border-red-400","border-2"),t("#asunto").classList.add("border-red-400","border-2"),t("#mensaje").classList.add("border-red-400","border-2")}function p(){const e=document.createElement("p");e.classList.add("text-sm","font-bold","text-red-600"),e.textContent="Email no valido, intentelo de nuevo.",o("#msgAlertEmail").appendChild(e)}function g(e){e.preventDefault();const r={email:t("#email").value,asunto:t("#asunto").value,mensaje:t("#mensaje").value};Object.values(r).some(i=>i!=="")&&(Object.values(r).splice(Object.values(r).length),h())}function h(){t("#email").value="",t("#asunto").value="",t("#mensaje").value=""}
