/*

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, 
а возвращает значение true («истина»), если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 

Пример: (3, 4, 5) => true  

Для начала пропиши аргументы функции.  

*/

const validTriangle = (num1, num2, num3) => {
    if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1) {
        return false
    } else if (num1 + num2 > num3 && num1 + num3 > num2 && num3 + num2 > num1) {
        return true
    }

}

// console.log(validTriangle(3, 4, 5))
module.exports = validTriangle
