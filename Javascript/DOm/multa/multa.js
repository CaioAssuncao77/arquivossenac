function multa(){
    let velocidade = window.document.getElementById('velo')
    let resposta = window.document.getElementById('resposta')

    let velocidade2 = Number(velocidade.value)

    if (velocidade2 <= 0){
        resposta.innerText = `${velocidade2} IMPOSSIVEL!! CHAMEM A POLÍCIA `}
    else if(velocidade2 <=60){
        resposta.innerText = `${velocidade2}! TUDO CERTO.`
    }
    else if (velocidade2 > 60){
        resposta.innerText = `${velocidade2} você receberá uma multa` 
    }


}