window.onload=function(){
//№01-Завдання

//Знаходження всіх великих літер в тексті і збереження їх в масив;

let textStr = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let bigLetters = textStr.match(/[A-Z]/mg);
console.log(bigLetters);

//№02-Завдання

// Вибір числових значень з строки

let operation = "5 плюс 7 = 3";
let paternNumb=operation.match(/\d/mg);
console.log(paternNumb)

//№03-Завдання

// Знаходження слів із певною кількістю символів

let words= textStr.match(/\w{5}/mg);
console.log(words);

//№04-Завдання
//
document.querySelector('.buttonSave').addEventListener('click',function(){
    let textInput=document.querySelector('.textInput').value;
    sessionStorage.setItem('textInput',textInput);
    console.log(textInput)
})
document.querySelector('.buttonDisplay').addEventListener('click',function(){
    let savedData = sessionStorage.getItem('textInput');
    document.querySelector('.displayData').innerText=savedData;

})

//№05-Завдання

let email=document.querySelector('.emailInput');
let password=document.querySelector('.passwordInput');
let Btn=document.querySelector('.saveBtn');

function validateEmail(email){
    const validEmail=/^[\w._]+@[\w.-]+\.\w{2,}$/
    const errorEmail=document.querySelector('.emailError')

    if(!validEmail.test(email)){
        errorEmail.innerText='Невірний формат email';
    }
    else{
        errorEmail.innerText='';
    }
    return validEmail.test(email);
}

function validatePassword(password){
    const errors=[];
    const errorDisplay= document.querySelector('.passwordError');

    if(password.length <= 8){
        errors.push('Пароль має містити не менше 8 символів.');
    }
    else if(!/[A-Z]/.test(password)){
        errors.push('Пароль повинен містити хоча б 1 велику літеру.');
    }
    else if(!/[a-z]/.test(password)){
        errors.push('Пароль повинен містити хоча б 1 маленьку літеру');
    }
    else if(!/\d/.test(password)){
        errors.push('Пароль повинен містити хоча б 1 цифру.');
    }
    else if(!/[!@#$%^&*]/.test(password)){
        errors.push('Пароль повинен містити хоча б 1 спец. символ(!"№;%:?*).');
    }
    
    if(errors.length > 0){
        errorDisplay.innerHTML=errors.join('<br>');
    }
    else{
        errorDisplay.innerHTML='';
    }

    return errors.length === 0 ;
}

function validForm(){
    const isEmailValid = validateEmail(email.value);
    const isPasswordValid= validatePassword(password.value);

    console.log(`email:${isEmailValid}`);
    console.log(`password:${isPasswordValid}`);


    if(isEmailValid && isPasswordValid){
        alert('Дані введені вірно')
    }
    else{
        alert('Будь ласка перевірте свої ввндені дані')
    }
}

const toglePassword=document.querySelector('.checkboxPassword');
toglePassword.addEventListener('change',function(){
    if(toglePassword.checked){
        password.type='text';
    }
    else{
        password.type='password'
    }
})
Btn.addEventListener('click', function(e){
    e.preventDefault();
    validForm();
})
}