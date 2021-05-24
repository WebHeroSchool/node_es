/**
 * Напишите функцию passwordCheck(password), принимающую строку password
 * и проверяющую её на сложность. Если сложность достаточна, вернуть true,
 * иначе - false.
 *
 * Достаточной сложность считается, если в строке:
 * - Есть хотя бы одно число
 * - Есть хотя бы две буквы латинского алфавита в разных регистрах
 * - Есть хотя бы один символ из ряда ! ? . , + - * / =
 * - Содержит не менее 10 символов
 *
 * Пример:
 * passwordCheck('Nagibator777') === false
 * passwordCheck('password') === false
 * passwordCheck('This is the 7th password I have come up with!') === true
 *
 *
 **/
function passwordCheck(password) {
    const numRegExp = /[0-9]/g.test(password);
    const letUpRegExp = /[A-Z]/g.test(password);
    const letLowRegExp = /[a-z]/g.test(password);
    const symbRegExp = /[!\?\.,\+\*\/\-]/g.test(password);

    return password.length >= 10 && numRegExp && letUpRegExp && letLowRegExp && symbRegExp;
}

console.log("Ни одно из условий не соблюдено:");
console.log(passwordCheck('password'));
console.log("Не соблюдено одно из условий: наличие числа:");
console.log(passwordCheck('Password+-'));
console.log("Не соблюдено одно из условий: наличие двух букв латинского алфавита в разных регистраха:");
console.log(passwordCheck('password1*'));
console.log("Не соблюдено одно из условий: один символ из ряда ! ? . , + - * / =:");
console.log(passwordCheck('Password22'));
console.log("Не соблюдено одно из условий: содержит не менее 10 символов:");
console.log(passwordCheck('Pass5!'));
console.log("Соблюдены все условия:");
console.log(passwordCheck('This is the 7th password I have come up with!'));
