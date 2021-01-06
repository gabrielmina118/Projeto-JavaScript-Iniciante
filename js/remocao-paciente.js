/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove(); // A palavra THIS informa quem chamou o evento. Podendo ser genérico
        
    });
});
*/
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(e){
    var alvo = e.target;
    var superiorAlvo = alvo.parentNode;
    superiorAlvo.classList.add("fadeOut"); // Esmaecer o tempo ate a opacidade = 0 ;
  
    //funcao de tempo no javascript
    setTimeout(function(){
        superiorAlvo.remove();
    },500);
});
