var numero = "";
var numeroAnterior = "";
var operadorActual = "";
var expresionCompleta = "";
var newValue = "0";



function Escribir(P_Numero) {
    numero += P_Numero;
    expresionCompleta += P_Numero;
    document.getElementById("num1").value = expresionCompleta;
    actualizarPantalla();
}

function SeleccionarOperacion(op) {
    if (numero !== "") {
        numeroAnterior = numero;
        operadorActual = op;
        expresionCompleta += " " + op + " ";
        document.getElementById("num1").value = expresionCompleta;
        actualizarPantalla();
        numero = "";
    }
}

function Resultado() {
    if (numero !== "" && numeroAnterior !== "" && operadorActual !== "") {
        var resultado;
        var num1 = parseFloat(numeroAnterior);
        var num2 = parseFloat(numero);

        switch(operadorActual) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '÷':
                if(num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    alert("No se puede dividir por cero");
                    Limpiar();
                    return;
                }
                break;
        }

        expresionCompleta += " = " + resultado;
        num1.value = expresionCompleta;
        document.getElementById("num1").value = expresionCompleta;
        
        numero = resultado.toString();
        numeroAnterior = "";
        operadorActual = "";
    }
}

function Limpiar() {
    expresionCompleta = "";
    num1.value = "";
    document.getElementById("num1").value = "";
    numero = "";
    numeroAnterior = "";
    operadorActual = "";
}

function borrarNumero() {
    if (expresionCompleta.length > 0) {
        if (expresionCompleta.slice(" ")) {
            expresionCompleta = expresionCompleta.slice(0, -1);
            operadorActual = "";
            numero = numeroAnterior;
            numeroAnterior = "";
        } else {
            expresionCompleta = expresionCompleta.slice(0, -1);
            numero = numero.slice(0, -1);
        }
        actualizarPantalla();
    }
}
function actualizarPantalla() {
    document.getElementById("num1").value = expresionCompleta;
}



         
