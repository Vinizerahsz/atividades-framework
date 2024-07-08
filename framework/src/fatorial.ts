
function calcularFatorial(numero){
    let resultado = 1;
    let i = numero;
    
    while (i > 1) {
      resultado = resultado *i;
      i--;
    }
    
    return resultado;
  }

export{calcularFatorial}