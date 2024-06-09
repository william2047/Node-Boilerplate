/**
 * Calls the provided validation function on the value if it exists.
 */
const functionCallOptional = (value, validationFunction) => {
    return value ? validationFunction(value) : true;
};

module.exports = {
    functionCallOptional
}