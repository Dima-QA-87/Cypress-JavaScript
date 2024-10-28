describe('Авторизация', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // Зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажать кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации правильный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio11'); // Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации правильный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
   })

   it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#mail').type('german@dolniko.ru'); // Ввел неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажать кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации правильный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
})

it('Востановление пароля', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#forgotEmailButton').click(); // Нажать «Забыли пароль»
    cy.get('#mailForgot').type('german@dolnikov.ru') // Ввел почту
    cy.get('#restoreEmailButton').click(); // Нажать отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // После авторизации правильный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
})

it('Проверка без символа @', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажать кнопку войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // После авторизации правильный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
})

it('Проверка на строчные буквы', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел в логин сточные буквы 
    cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажать кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации правильный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
})

})