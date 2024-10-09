//===========01=============
console.log('*****01*****')
function arraySpread(arr1, arr2){
    const newArr= [...arr1, ...arr2];
    console.log(newArr);
}
arraySpread([10,20,30],[4,5,6])

//===========02=============
console.log('*****02*****')

function stringAndArray(string, ...restArr){
    console.log(`Стрінг:${string}`);
    console.log('Масив:', restArr);
}
stringAndArray('text',1,2,3, true);

//===========03=============
console.log('*****03*****')

function averageRating(...value){
    const summ = value.reduce((summ, num)=>summ+num,0)
    const average= summ/ value.length
    console.log(`Середнє значення:${average}`);
}
averageRating(5.0, 4.1, 3.5, 4.3, 4.1)

//===========04=============
console.log('****04*****')

function logTypeOf(value){
    console.log(`Тип аргумента:${typeof value}`)
}
logTypeOf(1500);
logTypeOf(true);
logTypeOf('Hello')
logTypeOf([1,2,3])
,
//===========05=============
console.log('****05*****')

function myTestFunction(variable){
    if(typeof variable === 'number'){
        console.log(`${variable} : це число`);
    }
    else if(typeof variable === 'string'){
        console.log(`${variable} : це рядок`);
    }
    else if (typeof variable === 'object'){
        console.log(`${variable} : це масив`);
    }
    else{
        console.log(`${variable}: це інший тип`);
    }
}
myTestFunction(2024);
myTestFunction('Ihor Shevchenko');
myTestFunction([45,80,145]);
myTestFunction(true);

//===========06=============
console.log('****06*****')

function myAge(age){
    const curretYear = new Date().getFullYear();
    const BirthYear = curretYear - age;
    console.log(`Твій рік народжкння: ${BirthYear}`)
}
myAge(27)

//===========07=============
console.log('****07*****')

const DataTime=new Date();
console.log(`Поточна дата: ${DataTime.toLocaleDateString()}`)

//===========08=============
console.log('****08*****')

const MyText = 'Is sunny today';
const text= MyText.split(' ');
const array=text.map((value)=>value.toUpperCase())
console.log(array)

//===========HTML=============
console.log('****HTML*****')

let header= document.getElementsByTagName('header');
console.log(`${header}`);
let section= document.getElementsByClassName('section');
console.log(`${section}`);
let div = document.getElementById('oneDiv');
console.log(`${div}`);
//
let fistItem=document.querySelector('#title li:first-child');
console.log(`${fistItem}`);
let lastItem=document.querySelector('#title li:last-child');
console.log(`${lastItem}`);
let thirdItem = document.querySelector('#title li:nth-child(3)');
console.log(`${thirdItem}`);
let allItem= document.querySelectorAll('#title li');
console.log(`${allItem}`);
let itemArray = Array.from(allItem);
//
let listItems=document.querySelectorAll('ul.nav>li');
console.log(`${listItems}`)
let listItem= document.querySelectorAll('li:nth-child(2)')
console.log(`${listItem}`)




