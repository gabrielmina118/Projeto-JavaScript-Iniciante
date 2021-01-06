var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0 ){
    
        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // uso de expressao regular
            var expressao = RegExp(campoFiltro.value,"i")// a string "i" , indica que é case Insensitive

           if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
           }else{
            paciente.classList.remove("invisivel");   
           }
        });

    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");   
        });
    }
    
});