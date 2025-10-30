function verificar(){

    var anos = window.document.getElementById('ano')
    var sexo = window.document.getElementsByName('sexo')
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')
    
    var ano = Number(anos.value)
    var idade = 2025 - ano
    var genero =''
    
    if (sexo[0].checked){
        genero = 'M'
    } else{
        genero = 'F'
    }

    switch(genero){
        case 'M':
            if(idade > 124 || idade < 1){
                texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2024)'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2023)')
                img.style.display = 'none'
            } else if(idade <= 2){
                texto.innerText = `Você é um bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'bebemenino.jpg'
            } else if(idade < 14){
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'MENINO.jpg' 
            } else if(idade <18){
                texto.innerText = `Você é um adolescente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'HOMEM_ADOLESCENTE.jpg' 
            } else if(idade < 65){
                texto.innerText = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'HOMEM_ADULTO.jpg'
            } else {
                texto.innerText = `Você é um senhor de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'VELHO.jpg'
            }
        break

        case 'F':
            if(idade > 124 || idade < 1){
                texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2023)'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2023)')
                img.style.display = 'none'
            } else if(idade <= 2){
                texto.innerText = `Você é uma bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'baby-9210156_1280.jpg' 
                //img.setAttribute('src', 'bebemenina.jpg') Outra forma de carregar, mas
                //tem que aplicar depois com outro comando: img.appendChild(img)
            } else if(idade < 14){
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'MENINA.jpg' 
            } else if(idade <18){
                texto.innerText = `Você é uma adolescente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'MULHER_ADOLESCENTE.jpg' 
            } else if(idade < 65){
                texto.innerText = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'MULHER.jpg' 
            } else {
                texto.innerText = `Você é um senhora de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'VELHA.jpg'
            }
        break
        }
}