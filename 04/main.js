//====1=====

function wellcomUser(users,helloUser){
    for (let i=0; i < users.length; i++){
        helloUser(users[i]);
    }
}
function helloUser(user){
    console.log(`Вітаю ${user}`)
}
let users =[ 'Joch', 'Anna' ,'Viktor' ,'Ella'];   

wellcomUser(users,helloUser);

//=====2===== 
console.log('=======2=====')

function showHiUser(Unit='Користовача'){
    console.log(`Вітаю нового ${Unit}`)
}

showHiUser();
showHiUser('Пользователя');

//=====3===== 
console.log('=======3=====')

//const multiplyValues=(a,b,c) => a*b*c;

function multiplyValues(a,b,c){
   return a * b * c;
}
console.log(multiplyValues(2,2,2));

//=====4===== 
console.log('=======4=====')

let PairedNumbers=[];

PairedNumbers[2]= 'two';
PairedNumbers[4]= 'four';
PairedNumbers[6]= 'six';
PairedNumbers[8]= 'eight';

console.log(PairedNumbers);

//=====5===== 
console.log('=======5=====')

let days =['Понеділок', 'Среда','Неділя'];
let plans =['Урок 03', 'Урок 04', 'Вихідний'];
for (let i = 0; i < days.length; i++) 

console.log(`Сьогодні ${days[i]} у вас такі плани ${plans[i]}`);

//=====6===== 
console.log('=======6=====')

let checkArr =[69,96,-66,77,85,-85,14,-20,90,-36];
for (let i = 0; i < checkArr.length; i++) {
    if (checkArr[i]<0) {
       checkArr[i]=0;
    }
}
console.log(checkArr);

//==============Додаткові завдання================
console.log('=============')

//=======1==========

