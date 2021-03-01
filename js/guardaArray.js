let preguntaEnCurs = 0;
let preguntaUltima;

let arrBoolRespostes = [];
let respCorrectes = [];


const llistaPreguntes = [
{
tipusPreg: "tx",
enunciatPreg: "Lorem ipsum dolor  *** Correcta = Lorem *** amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?",
respostesPossibles: { 
    a: "",
    b: "",
    c: "",
    d: ""
},
respCorrecta: "Lorem"
},

{
tipusPreg: "ra",
enunciatPreg: "*** Correcta = c *** Que tal?",
respostesPossibles: {
    a: "Be",
    b: "Molt be",
    c: "Massa be",
    d: "Meh"
},
respCorrecta: "c"
},

{
tipusPreg: "ch",
enunciatPreg: "*** Correcta = C *** Quina es la segona pregunta? ",
respostesPossibles: {
    a: "La quarta",
    b: "La primera",
    c: "La segona",
    d: "La desena"
},
respCorrecta: "c"
},

{
tipusPreg: "so",
enunciatPreg: "*** Correcta = a ***  .",
respostesPossibles: {
    a: "Mollis et ultrices lectus morbi nisi quisque imperdiet bibendum id nisl posuere.",
    b: "Condimentum himenaeos leo cubilia etiam turpis velit dui fames ultricies.",
    c: "Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos."
},
respCorrecta: "a"
}

];

ompleRespCorrectes();
pintaQuestionari();

function ompleRespCorrectes(){
   respCorrectes [llistaPreguntes.length];
   for (let i=0; i<llistaPreguntes.length; i++){
      respCorrectes[i]=llistaPreguntes[i].respCorrecta;
   }
}

function pintaQuestionari(){
    let pregActualTxt = "";
    let esVisible;
    let txtTipusPreg;
    let contenidorQuestionari = document.getElementById("contenidorQuestionari");  // output = contenidorQuestionari
    let elementArticle, elementTitol, elementDivRespostes, elementGrupBotons;
 
    preguntaUltima = llistaPreguntes.length;

    for (let pregActual=0; pregActual<llistaPreguntes.length; pregActual++){
        elementArticle = "";
  
        if ((pregActual+1)<10) {
           pregActualTxt = "0" + (pregActual + 1);
        } else {
           pregActualTxt = pregActual + 1;
        }
  
        if (pregActual==0) {
            esVisible = "elementVisible";
        } else {
            esVisible = "elementOcult";
        }
  
        elementArticle = '<article id="pregunta-' + pregActualTxt + '-' + llistaPreguntes[pregActual].tipusPreg + '" class="' + esVisible + '">';
  
        elementTitol = "";

        switch (llistaPreguntes[pregActual].tipusPreg){
           case "tx": txtTipusPreg = "text"; break;
           case "ch": txtTipusPreg = "checkbox"; break;
           case "ra": txtTipusPreg = "radio"; break;
           case "so": txtTipusPreg = "Select One"; break;
        }
  
        elementTitol = '<span class="titol">Pregunta #' + pregActualTxt + ' (' + txtTipusPreg + ')</span>';
  
        console.log ("elementTitol = " + elementTitol);
  
        elementTitol.innerHTML = 'Pregunta #' + pregActualTxt + '(' + txtTipusPreg + ')';
    
        elementEnunciat = "";
  
        elementEnunciat = '<div class="enunciat"><p>' + llistaPreguntes[pregActual].enunciatPreg + "</p></div>";
  
        console.log ("elementEnunciat = " + elementEnunciat);
  
  
        elementDivRespostes = "";
  
        elementDivRespostes= '' + '<div class="respostes">' + '<label class="opcio col1">' + '<input type="text" id="' + 'resp-' + pregActualTxt + '" name="resposta-' + pregActualTxt + '" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/>' + '</label>' + '</div>';
  
        console.log ("elementDivRespostes = " + elementDivRespostes); 
  
        elementGrupBotons = "";
  
        elementGrupBotons =''
           + '<div class="col2 centrat">'
           + '  <button id="btAnt' + pregActualTxt + '" disabled onclick="passaAnterior(this)">&lt;&lt; Anterior</button>'
           + '  <button id="btSeg' + pregActualTxt + '" disabled onclick="passaSeguent(this)">Següent >></button>'
           + '</div>'
  
  
        debugger;
        
        contenidorQuestionari.innerHTML += elementArticle + elementTitol + elementEnunciat + elementDivRespostes + elementGrupBotons;
        console.log ("elementGrupBotons = " + elementGrupBotons);
  
     }


} 