function clicou(){
    
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Abrir Youtube</b>")   
}

function redirecionar (){
    window.open("https://www.youtube.com/");
    //window.location.href = "https://www.youtube.com/";
}

function trocar(element){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar";
    //alert("Trocar texto");
    element.innerHTML="Obrigado por passar";
}

function voltar(element){
    //document.getElementById("mousemove").innerHTML="Passe o mouse";
    element.innerHTML="Fim";
}

function load(){
    alert("Pagina carragda?");
}

function funcaoChange(element){
   console.log(element.value);
}