const print = (value) => console.log('Result is ' + value);

module.exports.add = (x, y) => {
    var z = x + y;
    print(z);
    return z;
}

module.exports.sub = (x, y) => {
    var z = x - y;
    print(z);
    return z;
}

module.exports.mul = (x, y) => {
    var z = x * y;
    print(z);
    return z;
}

module.exports.div = (x, y) => {
    var z = x / y;
    print(z);
    return z;
}