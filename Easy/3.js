/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив
(массив, содержащий другие массивы) чисел и число из одного из вложенных массивов,
а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1

*/
const arr = [[1, 2, 3], [4, 5, 6], [7,8,9]]

const nestedArr = (arr, number) => {
    let result = 0
   arr.forEach((el, i) => {
        if (el.includes(number) === true) {
           result += i
        }
        return result
    });
  
}

// console.log(nestedArr([[1, 2, 3], [4, 5, 6], [7,8,9]], 3 ))
module.exports = nestedArr
