function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO} Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>= 0 && idade <= 12){
                img.setAttribute('src','jovem homem.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','adolescente homem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adulto homem.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso homem.jpg')
            } 
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 12){
                img.setAttribute('src','jovem mulher.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','adolescent mulher.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','adulto mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosa mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }        
}