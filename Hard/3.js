/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (string) => {
   let newString = ""
   let arr = string.split(/[_]/g)

   for (let i = 0; i < arr.length; i++) { 
        if (i > 0) {
            newString += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        } else {
            newString += arr[i]
        } 
    }
    return newString
}


module.exports = camelCase