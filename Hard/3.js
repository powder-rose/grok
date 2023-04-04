/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (string) => {
   let newString
    for (let i in string) {
        newString = string.replaceAll('_', '')
        
    }
return newString
}

console.log(camelCase('web_development'))
module.exports = camelCase