export function roundToDecimalPlaces(input, decimalPlaces) {
    let num = parseFloat(input); // Convert input to a number
    if (!isNaN(num)) {
        let factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    } else {
        console.warn("Input is not a valid number");
        return NaN; // or handle the error as needed
    }
}
