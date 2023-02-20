function bitConverter(input, maxAmpValue = 10) {
    return input.map((val) => {
        return Math.round(maxAmpValue * val / maxBitValue);
    });
}

function a2d_Converter(input, maxAmpValue = 10) {
    if (input.some((value) => value > maxBitValue)) {
        throw new Error('Error-invalid reading');
    }
    return bitConverter(input, maxAmpValue);
}

const maxBitValue = 4094;

module.exports = { a2d_Converter};