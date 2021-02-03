function passaSeguent(objRebut){
    //let idObjPare = document.getElementById(objRebut.parentElement.id);
    //let ObjPare = document.getElementById(idObjPregAct);
    let idObjPregAct = objRebut.parentElement.id;
    let ObjPregAct = document.getElementById(idObjPregAct);
    let colarticles = document.getElementsByTagName("article");
    let idObjPregSeg;
    // let ultimaPreg = false;
    
    for (let i = 0; i < colarticles.length; i++) {
        if (colarticles[i].id == idObjPregAct){
            idObjPregSeg = colarticles[i+1].id;
            break;
        };
    }
    
    // ObjPregSeg = document.getElementById(idObjPregSeg);
    // ObjPregAct.classList.remove("elementVisible");
    // ObjPregAct.classList.add("elementOcult");
    // ObjPregSeg.classList.remove("elementOcult");
    // ObjPregSeg.classList.add("elementVisible");

    amagaElement(idObjPregAct);
    mostraElement(idObjPregSeg);

}

function passaAnterior(objRebut){
    //let idObjPare = document.getElementById(objRebut.parentElement.id);
    //let ObjPare = document.getElementById(idObjPregAct);
    let idObjPregAct = objRebut.parentElement.id;
    let ObjPregAct = document.getElementById(idObjPregAct);
    let colarticles = document.getElementsByTagName("article");
    let idObjPregAnt;
    // let ultimaPreg = false;
    
    for (let i = 0; i < colarticles.length; i++) {
        if (colarticles[i].id == idObjPregAct){
            idObjPregAnt = colarticles[i-1].id;
            break;
        };
    }
    

    // ObjPregAnt = document.getElementById(idObjPregAnt);
    // ObjPregAct.classList.remove("elementVisible");
    // ObjPregAct.classList.add("elementOcult");
    // ObjPregAnt.classList.remove("elementOcult");
    // ObjPregAnt.classList.add("elementVisible");

    amagaElement(idObjPregAct);
    mostraElement(idObjPregAnt);
    
}

function mostraElement(idRebut) {
    document.getElementById(idRebut).classList.add("elementVisible");
    document.getElementById(idRebut).classList.remove("elementOcult");
}

function amagaElement(idRebut) {
    document.getElementById(idRebut).classList.remove("elementVisible");
    document.getElementById(idRebut).classList.add("elementOcult");
}