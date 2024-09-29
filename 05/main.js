console.log('=====Завдання №1=====')
//=================================================Завдання з масивів і елементів PUSH===========================================

//=====Завдання №1=====

let arr = [];
arr.push(1,2,3,4);
console.log(arr);

console.log('=====Завдання №2=====')

//=====Завдання №2=====

let ElemArray=[10,20,30];
function ElementArr(arr,element) {
    arr.push(element);
}
ElementArr(ElemArray,40,50);
console.log(ElemArray);

//=================================================Завдання з масивів і елементів POP===========================================

console.log('=====Завдання №3=====')

//=====Завдання №3=====

let ArrPop = [23,24,25,26];
ArrPop.pop(26);
console.log(ArrPop);

console.log('=====Завдання №4=====')

//=====Завдання №4=====
let MyArray = ['Bob' ,'Joch', 'Jack', 'Maj'];
function DeleteLastElement(array){
 array.pop();
}
DeleteLastElement(MyArray);
console.log(MyArray);

//=================================================Завдання з масивів і елементів UNSHIFT===========================================

console.log('=====Завдання №5=====')

//=====Завдання №5=====


let Myarr = [1,2,3,4];
Myarr.unshift(56);
console.log(Myarr);

console.log('=====Завдання №6=====')

//=====Завдання №6=====
let NewElement=[10,20,30]
function AddElement(arr,element){
    arr.unshift(element);
}
AddElement(NewElement, 40);
console.log(NewElement);
//=================================================Завдання з масивів і елементів Shift===========================================

console.log('=====Завдання №7=====')

//=====Завдання №7=====

let ArrShift =['Понеділок','Вівторок','Среда','Четверг'];
ArrShift.shift();
console.log(ArrShift);

console.log('=====Завдання №8=====')

//=====Завдання №8=====
let ArrElem = ['Грудень','Січень','Лютий']
function DeleteFistElement(month){
    month.shift();
}
DeleteFistElement(ArrElem);
console.log(ArrElem);
//=================================================Завдання з масивів і елементів FILL===========================================

console.log('=====Завдання №9=====')

//=====Завдання №9=====

let NewFill = new Array(10);
NewFill.fill('Nike',0,5);
NewFill.fill('Addidas',5,10);
console.log(NewFill);

console.log('=====Завдання №10=====')

//=====Завдання №10=====

let newFillArr = [1,2,3,4,5,6,7,8,9];
function MyElementFill(Value, start,center, end){
    Value.fill(start,center,end);
}
MyElementFill(newFillArr,'NOT DATA',3,5);
console.log(newFillArr);

//=================================================Завдання з масивів і елементів REVERSE===========================================

console.log('=====Завдання №11=====')

//=====Завдання №11=====

let NewRevers = [1,2,3,4,5,6,7,8,9];
NewRevers.reverse();
console.log(NewRevers);

console.log('=====Завдання №12=====')

//=====Завдання №12=====

let NewRevArr =['Apple','Banana','Citrus','Duna','Elefant'];
function MyReversElement(value){
    value.reverse();
}
MyReversElement(NewRevArr);
console.log(NewRevArr);

//=================================================Завдання з Об'єктами===========================================

//=====Завдання №13=====
console.log('=====Завдання №13=====')

let ObjArr= [];
function createSqureObject(value){
    for (let i = 2; i <= value; i++) {
        ObjArr.push({number : i , square : i**2});
    }
    return ObjArr;
}
console.log(createSqureObject(10));

//=====Завдання №14=====
console.log('=====Завдання №14=====')

let names =['Марія','Оля','Іван'];
let ages =[25,30,22];
let user= [];
function createObjectArray(names,ages){
    for(let c=0; c < names.length; c++){
        user.push({name:names[c], age: ages[c]})
    }
    return user;
}

console.log(createObjectArray(names,ages));

//===============================================Додаткові завдання=================================
console.log('=====2=====');
let firstArr =[1,4,5,8];
let secondArr= [3,7,2,6];
function SortConcatArray(firstArr, secondArr){
    
    let Arr = firstArr.concat(secondArr);
    Arr.sort((a , b) => a - b);
  
    let NewArr= [];
    for (let a = 0; a < Arr.length - 4; a++) {
    NewArr.push(Arr[a])
    }
    return NewArr
}
console.log(SortConcatArray(firstArr,secondArr));


console.log('=====3=====');
let users = [
    {name: 'Оля', age: 17},
    {name: 'Іван', age: 25},
    {name: 'Петро', age: 19},
    {name: 'Мария', age: 30},
]
function SortObjectAge(users) {
    let filtredUsers = [];
    for (let index = 0; index < users.length; index++) {
        if (users[index].age > 18) {
            filtredUsers.push(users[index]);
            filtredUsers.sort((a, b)=> a.age - b. age);
        }
    }
    return filtredUsers;
}
console.log(SortObjectAge(users));
