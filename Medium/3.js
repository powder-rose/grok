/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let arr = []
    let sum
    if (end < start) {
        for (let i = end; i <= start; i++) {
            arr.push(i)
        }
    } else {
            for (let i = start; i <= end; i++) {
                arr.push(i)
            }
        }
        sum = arr.reduce((a, b) => a + b);
        return sum
    }    
    
   



module.exports = sumOfIntegers
