function voto(){
let idade = window.document.getElementById('idade')

let resposta = window.document.getElementById('resposta')
let anosdeidade = Number(idade.value)

if (anosdeidade >= 19 && anosdeidade < 70){
    resposta.innerText = "Voto obrigatório"
    }
else if (anosdeidade < 18 && anosdeidade >= 16 || anosdeidade >= 71){ 
    resposta.innerText = "Voto facultativo"
}
else{
    resposta.innerText = "VOCÊ NÃO TEM IDADE PARA VOTAR"
}
}