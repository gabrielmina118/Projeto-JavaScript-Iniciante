// TR -> TD

var paciente = document.querySelectorAll(".paciente");

for(i = 0; i< paciente.length; i++){
    
    var pacientes = paciente[i];
    
    var tdPaciente = pacientes.querySelector(".info-peso")
    var peso = tdPaciente.textContent;
    
    var tdAltura = pacientes.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes.querySelector(".info-imc");
   
    if(!validaPeso(peso)){
        tdImc.textContent = "Peso Inválido";
        pacientes.classList.add("paciente-invalido");
    }else if(!validaAltura(altura)){
        tdImc.textContent = "Altura Inválido";
        pacientes.classList.add("paciente-invalido");
    }else{
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 120){
        return true;
    }else{
        return false;
    }
    
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 2.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (Math.pow(altura,2));
    
    return imc.toFixed(2);
}

