
const miButtonMostrarItem= document.querySelector('#buttonMostrarItem');

miButtonMostrarItem.addEventListener('click',()=>
{
  console.log("desde onclick");
  MostrarSeleccionado();
})



function MostrarSeleccionado()
{
  console.log("iniciando");
  let combo= document.querySelector('#Salsas');
  console.log(combo.value);
  console.log(combo.options[combo.selectedIndex].text);
};



///////////////////////////////////////////////

const  Preguntas = 
[
  {id:1, Pregunta:"Que tanto te gusta el frio", Opciones:[
                                {Puntaje:1, Texto:"Mucho"}, 
                                {Puntaje:0, Texto:"Regular"}, 
                                {Puntaje:2, Texto:"Poco"}]},
  {id:2, Pregunta:"Que tanto te gusta el calor", Opciones:[
                                {Puntaje:0, Texto:"Muchisimo"}, 
                                {Puntaje:2, Texto:"mas o menos"}, 
                                {Puntaje:1, Texto:"Nadas"}]},
  {id:3, Pregunta:"Que tanto te gusta el futbol", Opciones:[
                                {Puntaje:0, Texto:"Muchango"}, 
                                {Puntaje:1, Texto:"Regularsango"}, 
                                {Puntaje:2, Texto:"Nadanga"}]}
]

var Respuestas = new Array(4);
Respuestas[0]=0;

function OpcionElegida(NumeroPregunta, RespuestaSeleccionada)
{
  Respuestas[NumeroPregunta]=parseInt(RespuestaSeleccionada.value);
  console.log(Respuestas);
  console.log(NumeroPregunta);
  console.log(Respuestas[NumeroPregunta]);

  var nombreComponente = "#p" + NumeroPregunta;
  let labels= document.querySelector(nombreComponente).childNodes;
  labels[3].style.backgroundColor = "yellow";
  labels[5].style.backgroundColor = "yellow";
  labels[7].style.backgroundColor = "yellow";

  RespuestaSeleccionada.parentNode.style.backgroundColor="#cec0fc";
}


function SumarTodo()
{
  var SumaTotal=0;
  console.log("sumando");
  Respuestas.forEach(function(item)
  {
    SumaTotal += item
  })
  console.log(SumaTotal);

}

//MostrarSeleccionado();