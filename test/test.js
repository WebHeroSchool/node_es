const assert = require('assert');
const test = require("../test");

describe('password', function () {
    it('Тест "Ни одно из условий не соблюдено"', function () {
        assert.rejects(test.passwordCheck('password'));
    });
    it('Тест "Не соблюдено одно из условий: наличие числа"', function () {
        assert.rejects(test.passwordCheck('Password+-'));
    });
    it('Тест "Не соблюдено одно из условий: наличие двух букв латинского алфавита в разных регистраха"', function () {
        assert.rejects(test.passwordCheck('password1*'));
    });
    it('Тест "Не соблюдено одно из условий: один символ из ряда ! ? . , + - * / ="', function () {
        assert.rejects(test.passwordCheck('Password22'));
    });
    it('Тест "Не соблюдено одно из условий: содержит не менее 10 символов"', function () {
        assert.rejects(test.passwordCheck('Pass5!'));
    });
    it('Тест "Соблюдены все условия"', function () {
        assert.ok(test.passwordCheck('This is the 7th password I have come up with!'));
    });
});
