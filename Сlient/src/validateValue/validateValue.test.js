import Cheker from "./validateValues";

describe("Валидация значений ",()=>{
describe("Валидация значений email",()=>{
    test("Валидация значений Email при задании kukso.artem@mail.ru вернет true ",()=>{
        expect(Cheker.emailCheck('kukso.artem@mail.ru')).toBe(true);

    })

    test("Валидация значений Email при задании kuksoartem@mailru вернет false ",()=>{
        expect(Cheker.emailCheck('kuksoartem@mailru')).toBe(false);

    })

    test("Валидация значений Email при задании kukso.artemmail.ru вернет false ",()=>{
        expect(Cheker.emailCheck('kukso.artemmail.ru')).toBe(false);

    })
    test("Валидация значений Email при задании ========== вернет false ",()=>{
        expect(Cheker.emailCheck('==========')).toBe(false);

    })

    test("Валидация значений Email при задании пустой строки вернет false ",()=>{
        expect(Cheker.emailCheck('')).toBe(false);

    })
    test("Валидация значений Email при  Kukso.Artem@Mail.ru вернет false ",()=>{
        expect(Cheker.emailCheck('')).toBe(false);

    })
})



describe("Валидация значений Password",()=> {

    test("Валидация значений Password при задании Пустой строки вернет false ", () => {
        expect(Cheker.passwordChek('')).toBe(false);

    })
    test("Валидация значений Password при задании PasswordArtem вернет false ", () => {
        expect(Cheker.passwordChek('PasswordArtem')).toBe(false);

    })

    test("Валидация значений Password при задании Password вернет true ", () => {
        expect(Cheker.passwordChek('Password')).toBe(true);

    })

    test("Валидация значений Password при задании HE вернет true ", () => {
        expect(Cheker.passwordChek('HE')).toBe(false);

    })
    test("Валидация значений Password при задании КОТ вернет true ", () => {
        expect(Cheker.passwordChek('КОТ')).toBe(true);

    })
    test("Валидация значений Password при задании qwpoekqowepkqwkepowqkepokwqpoekwqpoekowqpk вернет false ", () => {
        expect(Cheker.passwordChek('qwpoekqowepkqwkepowqkepokwqpoekwqpoekowqpk')).toBe(false);

    })
})


describe("Валидация значений Brand",()=> {

    test("Валидация значений Brand при задании Пустой строки вернет false ", () => {
        expect(Cheker.brandCheck('')).toBe(false);

    })

    test("Валидация значений Brand при задании Мицубиси вернет false ", () => {
        expect(Cheker.brandCheck('Мицубиси')).toBe(false);

    })
    test("Валидация значений Brand при задании mitsubisy вернет false ", () => {
        expect(Cheker.brandCheck('mitsubisy')).toBe(false);

    })

    test("Валидация значений Brand при задании Mitsubisy вернет true ", () => {
        expect(Cheker.brandCheck('Mitsubisy')).toBe(true);

    })
    test("Валидация значений Brand при задании Mцуйцуйцу вернет false ", () => {
        expect(Cheker.brandCheck('Mцуйцуйцу')).toBe(true);

    })
    test("Валидация значений Brand при задании BMV вернет true ", () => {
        expect(Cheker.brandCheck('BMV')).toBe(true);

    })
})

describe("Валидация значений Пустой строки",()=> {

    test("Валидация значений Пустой строки при задании Пустой строки вернет false ", () => {
        expect(Cheker.AllComponents('')).toBe(false);

    })

})


describe("Валидация значений Price",()=> {

    test("Валидация значений Price при задании Пустой строки вернет false ", () => {
        expect(Cheker.PriceCheck()).toBe(false);

    })
    test("Валидация значений Price при задании отрицательных чисел вернет false ", () => {
        expect(Cheker.PriceCheck(-2132)).toBe(false);

    })

    test("Валидация значений Price при задании положительных  чисел вернет true ", () => {
        expect(Cheker.PriceCheck(2132)).toBe(true);

    })

    test("Валидация значений Price при задании 0 вернет true ", () => {
        expect(Cheker.PriceCheck(0)).toBe(true);

    })

})

})