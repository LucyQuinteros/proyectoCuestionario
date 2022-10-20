
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
//////////////////////////////////////////

/*


const mySelect = document.createElement("h3");
mySelect.textContent = "Que tanto te gusta el frio2"

divpreguntas.appendChild(mySelect);
*/




const  Preguntas = 
[
  {id:1, Texto:"1. Que tanto te gusta el frio", Opciones:[
                                {Puntaje:1, Texto:"Mucho"}, 
                                {Puntaje:0, Texto:"Regular"}, 
                                {Puntaje:2, Texto:"Poco"}]},

  {id:2, Texto:"2. Que tanto te gusta el calor", Opciones:[
                                {Puntaje:0, Texto:"Muchisimo"}, 
                                {Puntaje:2, Texto:"mas o menos"}, 
                                {Puntaje:1, Texto:"Nadas"}]},

  {id:3, Texto:"3. Que tanto te gusta el futbol", Opciones:[
                                {Puntaje:0, Texto:"Muchango"}, 
                                {Puntaje:1, Texto:"Regularsango"}, 
                                {Puntaje:2, Texto:"Nadanga"}]},

  {id:4, Texto:"4. Que tanto te gusta el mar", Opciones:[
                                  {Puntaje:0, Texto:"ok"}, 
                                  {Puntaje:1, Texto:"masomenos"}, 
                                  {Puntaje:2, Texto:"bad"}]},  

  {id:5, Texto:"5. Que tanto te gusta el cine", Opciones:[
                                    {Puntaje:0, Texto:"1"}, 
                                    {Puntaje:1, Texto:"2"}, 
                                    {Puntaje:2, Texto:"3"}]},                              
]


const divpreguntas = document.getElementById("DivPreguntas");
console.log(divpreguntas);


var NuevoSection =""
Preguntas.forEach( pregunta =>{
  NuevoSection +='<section id="p' + pregunta.id+ '">' +
                    '<h3>' + pregunta.Texto + '</h3>';     
       
        pregunta.Opciones.forEach( opcion =>{
          NuevoSection +='<label>' +
                            '<input type="radio" value="'+ opcion.Puntaje + '" name="op' + pregunta.id +'"'+
                            'onclick="OpcionElegida(' + pregunta.id + ',this)"> ' + opcion.Texto +
                         '</label>'
        })
          
        NuevoSection +='</section>';
})

divpreguntas.innerHTML +=NuevoSection;


///////////////////////////////////////////////


var Respuestas = new Array(4);
Respuestas[0]=0;

function OpcionElegida(NumeroPregunta, RespuestaSeleccionada)
{
  Respuestas[NumeroPregunta]=parseInt(RespuestaSeleccionada.value);
  console.log(Respuestas);
  console.log(NumeroPregunta);
  console.log(Respuestas[NumeroPregunta]);

  /*var nombreComponente = "#p" + NumeroPregunta;
  let labels= document.querySelector(nombreComponente).childNodes;
  labels[3].style.backgroundColor = "yellow";
  labels[5].style.backgroundColor = "yellow";
  labels[7].style.backgroundColor = "yellow";
*/
  RespuestaSeleccionada.parentNode.style.backgroundColor="#cec0fc";
}


function SumarTodo()
{
  var SumaTotal=0;
  console.log("sumando");
  Respuestas.forEach( item =>
  {
    SumaTotal += item
  })
  console.log(SumaTotal);

}

