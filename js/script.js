  
function salvartxt(){
        
        //declaração das variaveis 
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var sexo = document.getElementById("sexo").value;
        var nascimento = document.getElementById("nascimento").value;
        var civil = document.getElementById("civil").value;
        var escolaridade = document.getElementById("escolaridade").value;
        var cidade = document.getElementById("cidade").value;
        var admissao = document.getElementById("admissao").value;
        var cargo = document.getElementById("cargo").value;
        var escala = document.getElementById("escala").value;
        var contrato = document.getElementById("contrato").value;
        var tipo = document.getElementById("tipo").value;
        var carteira = document.getElementById("carteira").value;
        var ufcarteira = document.getElementById("ufcarteira").value;
        
       
        
       
        var textblob = new Blob(['Cadastro de Pessoa','\n\nNome:',nome,'\nCPF:',cpf,'\nSexo:',sexo,'\nData de nascimento:',nascimento,'\nEstado civil:',civil,'\nEscolaridade:',escolaridade,'\nCidade:',cidade,'\nData da admissao:',admissao,'\nCargo:',cargo,'\nEscala de trabalho:',escala,'\nTipo de contrato:',contrato,'\nTipo de admissão:',tipo,'\nCarteira de trabalho:',carteira,'\nUF Carteira de trabalho:',ufcarteira], {type:'text/plain'});
        var salvarcomo = document.getElementById("salvarcomo").value;
    
        var downloadLink = document.createElement("a");
        downloadLink.download = salvarcomo;
        downloadLink.innerHTML = "Download File";
    
        if (window.webkitURL != null){
    
            downloadLink.href= window.webkitURL.createObjectURL(textblob);
    
        }else {
    
            downloadLink.href = windows.url.createObjectURL(textblod);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downlodLink);
    
    
        }
    
                downloadLink.click();
    
    
    }
    
    function destroyClickedElement(event){
    
        document.body.removeChild(event.target);
    }
    
    
