import { errorDivideZero } from "./errors.js";

function divide(a, b) {
    if (b === 0) {
        return {error: "No se puede dividir por 0"};
    }
    return {value : a / b};
}

const r = divide(3, 0);
if (r.error) {
    console.error(r.error);
} else {
    console.log(r.value * 2);
}

console.log("Fin del programa");