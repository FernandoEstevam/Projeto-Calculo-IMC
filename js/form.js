/*--------------------- Adicionando paciente na Tabela ------------------------*/
var addPaciente = document.querySelector("#adicionar-paciente");

//Chamada de função ao evento click
addPaciente.addEventListener("click", function (event) {
    var form = document.querySelector("#form-adiciona");

    event.preventDefault();

    var paciente = infoPaciente(form);
    console.log(criaTr(paciente));
});

function infoPaciente(form){
    //Cria objeto paciente
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function criaTr(paciente){
    //Cria uma tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //Adiciona as td dentro da tr
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
   
    return pacienteTr;
}

function criaTd(dado, classe){
    //Cria td
    var td = document.createElement("td");
    td.textContent = dado;

    td.classList.add(classe);

    return td;
}