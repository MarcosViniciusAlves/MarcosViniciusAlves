const saidaDoSelect = document.querySelector("#saida-do-select")
const select = document.querySelector("#meus-interesses")
const botaoSelecionar = document.querySelector(".selecionar")

const interesses = ["mysql","python"];


function ocupaComPython () {
    saidaDoSelect.innerHTML = ""

    saidaDoSelect.innerHTML = '<img height="100" id="imgAb" src="css/images/python.png"><h3 id="frase" class="fraseCMarg" >minha trajetoria com python tem muito a ver com <abbr title="Inteligência Artificial">IA</abbr> e também muito a ver com Machine Learning,gosto dessa linguagem pelo fácil uso e por ser muito presente , é interessante aprender ela<h3>'

    saidaDoSelect.innerHTML += '<br><br><br><div id="niveis" class="red">Básico</div><div id="niveis" class="red" >Intermediário</div><div id="niveis" class="red">Avançado</div>'

    saidaDoSelect.innerHTML += '<h3 id="curiosidade" >Curiosidade : Uma curiosidade interessante sobre a linguagem de programação python é que a linguagem não recebeu esse nome por causa da espécie de serpente, mas sim do seriado de comédia da BBC Monty Python’s Flying Circus da qual Guido van Rossum é um fã.</h3>';
}

function ocupaComMysql () {
    saidaDoSelect.innerHTML = ""

    saidaDoSelect.innerHTML = '<img height="100" id="imgAb" src="css/images/mysql.png"><h3 id="frase" class="fraseCMarg">Meus interesses com MySql são no geral para um objetivo maior , aprender php e usar todo conhecimento com as tecnologias aqui citadas para desenvolver uma aplicação,dou muito valor o sistema de gerenciamento de banco de dados , é uma das mais fáceis e também uma das mais úteis.</h3>'

    saidaDoSelect.innerHTML += '<br><br><br><div id="niveis" class="red">Básico</div><div id="niveis" class="red" >Intermediário</div><div id="niveis" class="red">Avançado</div>'

    saidaDoSelect.innerHTML += '<h3 id="curiosidade">Qual o motivo do golfinho?!? : A alegação feita foi de que o golfinho é um animal rápido , esperto e ágil , e seu nome é Sakila porquê em uma campanha chamada "Name the Dolphin" foi escolhido o nome do bixinho.</h3>'

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