function horario(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var horas = window.document.getElementById('horas')
    var corpo = window.document.getElementById('corpo')
    var imagem = window.document.getElementById('imagem')

    if (hora >= 0  && hora < 5){
        horas.innerText = `São ${hora} e ${minutos} da madrugada` 
        imagem.src = '/DOm/dia-tarde-noite/img/madrugada.jpg'
        corpo.style.backgroundColor = '#20100D'
    }
    else if (hora < 12){
        horas.innerText = `São ${hora} e ${minutos} da manha`
        imagem.src = "/DOm/dia-tarde-noite/img/manha.jpg" 
        corpo.style.backgroundColor = "'#33949B'" 
    }
    else if (hora < 18){
        horas.innerText = `São ${hora} e ${minutos} da tarde`
        imagem.src = "/DOm/dia-tarde-noite/img/tarde.jpg" 
        corpo.style.backgroundColor = "#C95E00"  
    }
    else{
        horas.innerText = `São ${hora} e ${minutos} da manha`
        imagem.src = "/DOm/dia-tarde-noite/img/noite.jpg" 
        corpo.style.backgroundColor = '#19375D'  
    }
}
