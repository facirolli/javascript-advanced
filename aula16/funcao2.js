function fibonacci(){
    let termo = Number(document.getElementById('numero').value)
    let resposta = document.getElementById('resposta')
    let penultimo = 0
    let ultimo = 1
    let numero
    if(termo <= 2){
        numero = termo -1
    } else{
        for(let i = 2; i < termo; i++){
            numero = ultimo + penultimo
            penultimo = ultimo
            ultimo = numero
        }
    }
    resposta.innerHTML = numero
    }

/*
function fibonacci(n){
    let fib = [0, 1]
    for(let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
  
}    
console.log(fibonacci(10))
*/