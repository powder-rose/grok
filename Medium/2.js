/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

const randomArr = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round((Math.random() * 10)))
    }
    return arr
}



module.exports = randomArr


