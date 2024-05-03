let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
valores = []
function isNumber(n){ 
    if(Number(n) >= 1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function Adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`O número digitado já foi encontrado na lista ou não é um valor permitido`)
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('Faltam valores para finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let i in valores){
            soma += valores[i]
            if(valores[i] > maior)
            maior = valores[i]
            if(valores[i] < menor)
            menor = valores[i]
        } 
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}</p>`
        res.innerHTML += `<p>A média aritimética dos números digitados é de ${media}</p>`
    }
}