var dataFile = require('./data.json');
var uniqueRandomArray = require('unique-random-array');
module.exports = {
    all : dataFile,
    random : uniqueRandomArray(dataFile.data.candles)
}