function checkNumber(num) {
    if (isNaN(num)) {
        throw new Error('Input Must be a number');
    }
    console.log('The Number is', num)
}

try {
    checkNumber('test');
} catch (error) {
    console.log(error.message);
}