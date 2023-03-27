// Aufgabenstellung:

// Erstell eine Funktion roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet. 
//So kann der User selber bestimmen, auf wie viele Nachkommastellen er runden möchte.

// Die folgende Methode könnte für Dich nützlich sein:
// toFixed()

// Um es zu testen, schreibe:
// console.log(roundTo(3.1415926535, 5)); // 3.14159


const roundTo = (Zahl, Genauigkeit) => {
    const randomNumber = Zahl.toFixed(Genauigkeit)
    return randomNumber;
}

console.log(roundTo(3.1415926535, 5)); // 3.14159
