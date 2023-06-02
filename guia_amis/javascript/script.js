
function mostrarResultado(){
    let option_a=document.getElementById("option_a").value;
    let option_b=document.getElementById("option_b").value;
    let resultado=option_a+option_b;
    
    document.getElementById('resultado_valor').innerText = `El valor que usted busca es ${resultado}.`;
    return resultado;
}

