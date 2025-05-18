let continuar = true;

while (continuar) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division o salir):").toLowerCase();

    if (operacion === "salir") {
        alert("¡Gracias por usar la calculadora! Hasta pronto.");
        continuar = false;
        break;
    }

    function realizarOperacion(n1, n2, op) {
        if (op === "suma") {
            return n1 + n2;
        } else if (op === "resta") {
            return n1 - n2;
        } else if (op === "multiplicacion") {
            return n1 * n2;
        } else if (op === "division") {
            if (n2 === 0) {
                return "Error: no se puede dividir por cero";
            }
            return n1 / n2;
        } else {
            return "Error: operación no válida";
        }
    }

    let resultado = realizarOperacion(num1, num2, operacion);
    alert(`Resultado: ${resultado}`);
}
