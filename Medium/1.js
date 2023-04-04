/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
 let result = str.split('')
 result.forEach((el) => {
    return console.log(el)
 })
}

module.exports = logEachLetter