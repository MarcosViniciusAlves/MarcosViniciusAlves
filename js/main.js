const saidaDoSelect = document.querySelector("#saida-do-select")
const select = document.querySelector("#meus-interesses")
const botaoSelecionar = document.querySelector(".selecionar")

const interesses = ["mysql","python"];


function ocupaComPython () {
    saidaDoSelect.innerHTML = ""

    saidaDoSelect.innerHTML = '<img height="100" src="css/images/python.png"><h3 id="frase">minha trajetoria com python tem muito a ver com <abbr title="Inteligência Artificial">IA</abbr> e também muito a ver com Machine Learning,gosto dessa linguagem pelo fácil uso e por ser muito presente , é interessante aprender ela<h3>'

    saidaDoSelect.innerHTML += '<br><br><br><div id="niveis" class="red">Básico</div><div id="niveis" class="red" >Intermediário</div><div id="niveis" class="red">Avançado</div>'
}
function ocupaComMysql () {
    saidaDoSelect.innerHTML = ""

    saidaDoSelect.innerHTML = '<img height="100" src="css/images/mysql.png">'
    
}


function identificaSelect(){
    if(select.value === interesses[0]){
        return "mysql"
    }else if(select.value === interesses[1]){
        return "python"
    }
}

botaoSelecionar.addEventListener("click",(e)=>{
    e.preventDefault()
    if(identificaSelect() === "mysql"){
        ocupaComMysql()
    }else if(identificaSelect() === "python"){
        ocupaComPython()
    }
})