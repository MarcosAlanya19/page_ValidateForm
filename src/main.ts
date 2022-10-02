import "./style/style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
`;
// Interface
interface typeForm{
  email: string,
  asunto: string,
  mensaje: string
}

// Variables globales
const $ = (id: string) => document.querySelector<HTMLDivElement>(id)!;
const $Btn = (id: string) => document.querySelector<HTMLButtonElement>(id)!;
const $Input = (id: string) => document.querySelector<HTMLInputElement>(id)!;
const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Listeners
const eventListeners = () =>{
  $Btn('#enviar').addEventListener('click', validateForm)
  $Btn('#eliminar').addEventListener('click', resetForm)
}
eventListeners();

// ValidateForm

function validateForm(e: Event){
  e.preventDefault();
  
  const valueForm: typeForm={
    email: $Input('#email').value,
    asunto: $Input('#asunto').value,
    mensaje: $Input('#mensaje').value
  }

  if(emailExpression.test($Input('#email').value)){
    if($('#msgAlertEmail').firstChild !==null)
      $('#msgAlertEmail').removeChild($('#msgAlertEmail').childNodes[0])
  }else{
    if($('#msgAlertEmail').firstChild ===null)
    emailAlert()
  }

  if(validate(valueForm)){
    if($('#alert').firstChild === null){
      msgAlert('Todos los campos son obligatorios', 'bg-red-500')

      setTimeout(() => {
        $('#alert').removeChild($('#alert').childNodes[0]);
      }, 3000);
    }
    borderAlert()

  }else{
    if($('#alert').firstChild === null){
      msgAlert('Todos los campos fueron rellenados correctamente', 'bg-green-600')

      setTimeout(() => {
        $('#alert').removeChild($('#alert').childNodes[0]);
      }, 3000);

      $Input('#email').classList.remove('border-red-400', 'border-2');
      $Input('#asunto').classList.remove('border-red-400', 'border-2');
      $Input('#mensaje').classList.remove('border-red-400', 'border-2');
    }
  }
}

function validate(obj: Object){
  return !Object.values(obj).every(value => value !== '')
}

function msgAlert (text: string, bg: string) {
  const msg = document.createElement('div');
  msg.classList.add('text-center', 'mb-6', 'text-white', 'text-sm', 'px-1', 'py-2', 'rounded-md', 'font-bold', bg);
  msg.textContent = text;
  $('#alert').appendChild(msg);
}

function borderAlert(){
  $Input('#email').classList.add('border-red-400', 'border-2');
  $Input('#asunto').classList.add('border-red-400', 'border-2');
  $Input('#mensaje').classList.add('border-red-400', 'border-2');
}

function emailAlert(){
  const msgErr = document.createElement('p');
  msgErr.classList.add('text-sm', 'font-bold', 'text-red-600');
  msgErr.textContent = `Email no valido, intentelo de nuevo.`

  $('#msgAlertEmail').appendChild(msgErr);
}



// ResetForm
function resetForm(e: Event) {
  e.preventDefault();

  const valueForm: typeForm={
    email: $Input('#email').value,
    asunto: $Input('#asunto').value,
    mensaje: $Input('#mensaje').value
  }
  
  if(Object.values(valueForm).some(value => value !== '')){
    Object.values(valueForm).splice(Object.values(valueForm).length)
    clearInput();
  }
}

function clearInput() {
  $Input('#email').value = ''
  $Input('#asunto').value = ''
  $Input('#mensaje').value = ''
}

// 

