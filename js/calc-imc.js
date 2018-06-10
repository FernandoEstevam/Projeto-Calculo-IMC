/* ------------------ Calculo do IMC ----------------------- */

//document.querySelectorAll seleciona todos tag, classe, id
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector(".info-peso");
    var peso = pesoTd.textContent;

    var alturaTd = paciente.querySelector(".info-altura");
    var altura = alturaTd.textContent;
    
    var imcTd = paciente.querySelector(".info-imc");
    var imc = calcImc(peso, altura);

    var valPeso = validaPeso(peso);
    var valAltura = validaAltura(altura);
    
    if(!valAltura){
        paciente.classList.add("erro-imc");
        alturaTd.textContent = "null";
        imcTd.textContent = "null";
    }else {
        imcTd.textContent = imc;
    }
    if(!valPeso){
        paciente.classList.add("erro-imc");
        pesoTd.textContent = "null";
        imcTd.textContent = "null"
    }else{
        imcTd.textContent = imc;
    }
}


function validaAltura(altura){
    if(altura > 0 && altura < 2.60){
        return true;
    } else {
        return false;
    }
}
function validaPeso(peso){
    
    if(peso > 0 && peso < 400){
        return true;
    }else {
        return false;
    }
}

//Função calculo IMC
function calcImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}