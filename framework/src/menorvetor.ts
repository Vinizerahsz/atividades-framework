function encontrarMenorNumero(numero) {
    let menor = numero[0]; 

    for (let i = 1; i < numero.length; i++) {
        if (menor > numero[i]) {
            menor = numero[i]; 
        }
    }
    
    return menor; 
}

export { encontrarMenorNumero };