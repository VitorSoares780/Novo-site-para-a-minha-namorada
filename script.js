var usuario=document.querySelector(`#username`)
var senha=document.querySelector(`#password`)
var button=document.querySelector('button')
button.addEventListener('click',validarFormulario)

function validarFormulario(){
    var usuariovalor=usuario.value.toLowerCase();
    var senhavalor=senha.value.toLowerCase();
    var usuariovalor=usuariovalor.replace(/\s/g, '')
    var senhavalor=senhavalor.replace(/\s/g, '')
    
    const usuariosEspecificos = [
        "divamaismais", "paixãodoindio", "paixãodoíndio", "paixãodovitor", "donadovitor", "perfeiçãoempessoa", 
        "donadoindio", "donadoíndio", "namoradadovitor", "namoradadoindio", "namoradadoíndio", "esposadoindio",
        "esposadoíndio", "esposadovitor"
    ];
    const usuariosnegados=[
        "agathafeia", "agathafeiosa", "agathamocreia", "agathamocréia", "agathapeidorreira", "agathahorrível",
        "agathachata","agathaputa","agathaquenga","agathacuzona","agathatrouxa","agathaidiota", "agathaégua", "agathaegua"

    ];
    if ((usuariovalor.startsWith("agatha")||usuariosEspecificos.includes(usuariovalor))&&(senhavalor === "27/11"||senhavalor==="02/06"||senhavalor==="28/01")){
        if(usuariosnegados.includes(usuariovalor)){
            alert("Mal-amada")
        }else{
        document.querySelector('#loginForm').remove(); 
    alert("Você está sendo redirecionada!!")
        window.location.href = "paginas/Paginainicial.html"
        }
       
    }else{
        alert("Usuário ou senha incorretos.")
    }
}
