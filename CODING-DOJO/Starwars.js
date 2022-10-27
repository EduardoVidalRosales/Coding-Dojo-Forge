var llavero = [ "Anakin","R2-D2","C-3PO","Conde Dooku"];
var personas = llavero[Math.floor(Math.random()*llavero.length)];

function greetings(Personajes) {
    saludo = null
    if (Personajes == "Conde Dooku") {
        saludo = console.log("ire a por ti, Conde Dooku")
    }else {
        saludo = console.log("Buen dia", Personajes , new Date);
    }

    return saludo

}
greetings(personas)