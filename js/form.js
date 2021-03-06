
var botao = document.querySelector("#adicionar-paciente");

//Evento de escutar , executando uma função anônima. Utilizando o NAME do formulário , consigo utilizar com JS
botao.addEventListener("click",function(e){
    e.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteFormulario(form);
    
    var erro = validaPaciente(paciente); 
    
    // validaçao de paciente
    if(erro.length > 0){
        exibeMensagemErro(erro);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var apagaErro = document.querySelector("#mensagem-erro");
    apagaErro.innerHTML = "";
});

    function adicionaPacienteNaTabela(paciente){
        var pacienteTr = montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }

    function obtemPacienteFormulario(form){
     // criando objeto paciente
     var paciente = {
         nome: form.nome.value,
         peso: form.peso.value,
         altura: form.altura.value,
         gordura: form.gordura.value,
         imc: calculaImc(form.peso.value,form.altura.value)
     }
        return paciente;
    }

    function montaTr(paciente){
        // Cria a TR do paciente passado pelo formulário
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
        
        var nomeTd = montaTd(paciente.nome,"info-nome");
        var pesoTd = montaTd(paciente.peso,"info-nome");
        var alturaTd = montaTd(paciente.altura,"info-altura");
        var gorduraTd = montaTd(paciente.gordura,"info-gordura");
        var imcTd = montaTd(paciente.imc,"info-imc");

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }

    function montaTd(valor,classe){
        var td = document.createElement("td");
        td.textContent = valor;
        td.classList.add(classe);

        return td;
    }

    function validaPaciente(paciente){

        var erros = [];

        if(!validaPeso(paciente.peso)){
            erros.push("O peso é inválido !");
        }

        if(!validaAltura(paciente.altura)){
            erros.push("A altura é inválida")
        }

        if(paciente.nome.length == 0){
            erros.push("Nome não pode ser em branco")
        }

        if(paciente.altura.length == 0){
            erros.push("Altura não pode ser em branco")
        }

        return erros;
    }


    function exibeMensagemErro(erro){   
        var ul = document.querySelector("#mensagem-erro");
        ul.classList.add("mensagem-erro");
        ul.innerHTML = "";
        erro.forEach(function(erros){
            var li = document.createElement("li");
            li.textContent = erros;
            ul.appendChild(li);
        });
    }