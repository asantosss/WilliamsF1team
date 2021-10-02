//var declaration

var horas = 22;
let minutos = 0;
let segundos = 0;




function contarsegundos() {

    let idsegundos;


    if (segundos < 0) {

        segundos = 59


    }

    if (segundos < 10) {
        idsegundos = `0${segundos}`;
    } else {
        idsegundos = segundos;

    }


    document.getElementById("segundos").innerHTML = idsegundos;
    segundos--;
    contarminutos(segundos);



    if (minutos === 0 & segundos === 0) {

        setTimeout(() => {
            horas = horas - 1;

        document.getElementById("horas").innerHTML = horas;
            
        },1500)

        
    }
}

setInterval(contarsegundos, 1000);


function contarminutos(segundos) {

    let idminutos;

    if (segundos == 0 && minutos !== 0) {

        minutos = minutos - 1
    }

    if (minutos == 0 && segundos == 0) {
        setTimeout(() => {
            minutos = 59
        }, 1500);

    }

    if (minutos < 10) {

        idminutos = `0${minutos}`;

    } else {

        idminutos = minutos;
    }

    document.getElementById("minutos").innerHTML = idminutos;
}