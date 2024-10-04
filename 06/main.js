console.log('===01===')
//=======Завдання №1==============
for (let i=0; i < 5; i++){
    console.log(i);
}
//==============
const message='test';
  if(true){
    const message= 'Hello World!';
    console.log(message);
  }

console.log('===02===')
//=======Завдання №2==============
const students =[
    {name:'Оля',scores:{
        math:85,
        english:78,
        science:92
    }
},
    {name:'Іван',scores:{
         math:58,
         english:74,
         science:80
}
},
    {name:'Мария',scores:{
          math:95,
         english:85,
         science:99
}
},
    {name:'Петро',scores:{
        math:70,
        english:65,
        science:75
}
},
]
    //Вичесляємо середній бал студента
 function avaregeScoreStudents(students){
    return students.map((students) => {
        const score =students.scores;
        const average = (score.math+score.english+score.science)/3;
        return {
        name: students.name ,
        score:average
        }
    })
 }
 const NewStudents= avaregeScoreStudents(students);
 console.log(NewStudents)

//Фільтруємо студентів в яких середній бал вище 80 балів

const FiltredStudents = NewStudents.filter((value)=>value.score >= 80);
console.log(FiltredStudents)

console.log('===03===')
//=======Завдання №3==============

const transactions=[
    {id:1, type: 'income', amount:100
    },
    {id:2, type: 'expense', amount:50
    },
    {id:3, type: 'income', amount:150
    },
    {id:4, type: 'expense', amount:70
    },
    {id:5, type: 'income', amount:200
    },
]
//Фільтруємо на 'income' та 'expense'
const IncomeTransaction= transactions.filter((transactions)=>transactions.type==='income');
const ExpenseTransaction= transactions.filter((transactions)=>transactions.type==='expense');
console.log(IncomeTransaction)
console.log(ExpenseTransaction);
//Рахуєммо сумарне значення
//Income
const AmountIncome= IncomeTransaction.map((transactions)=>transactions.amount);
let TotalIncome=0;
AmountIncome.forEach((amount)=>{
TotalIncome += amount
});
console.log(`Total Income: ${TotalIncome}`)
//Expense
const AmountExpense= ExpenseTransaction.map((transactions)=>transactions.amount);
let TotalExpense=0;
AmountExpense.forEach((amount)=>{
    TotalExpense += amount
});
console.log(`Total Expense: ${TotalExpense}`);

console.log('===04===')
//=======Завдання №4==============

let Number =[34,56,2,4,10,100,67];
function FiltredSliceNumber (arr){
    let NewNumber = arr.filter((value)=> value >=10)
    return NewNumber.slice(0,3);
}
let NewElement= FiltredSliceNumber (Number);
console.log(NewElement)

console.log('===05===')
//=======Завдання №5==============

function reverseIndex (arr, index1,index2){
    let element = arr.slice(index1,index2);
    return element.reverse();
}
let MyArray =[8,3,4,6,7,10,9]

let NewArray= reverseIndex(MyArray, 2, 10)
console.log(NewArray);

console.log('===06===')
//=======Завдання №6==============

let Arr =[2,4,3,1,5,11,23,22,45,44,67,68,1000];
function filtredPairedNumbr(arr){
    return arr.filter((value)=> value %2 === 0) .map((value)=>value*2);
}
let NewArr=filtredPairedNumbr(Arr)
console.log(NewArr)

console.log('====Додаткове завдання===')
//=======Додаткове завдання==============

const arrayOfArrays=[
    [1,2,3],
    [4,5],
    [6,7,8,9],
    [10]
];
const summ = arrayOfArrays.map((value)=>{
    let sum=0;
    for (let i = 0; i < value.length; i++) {
        sum+=value[i];
    }
    return sum;
});
console.log(summ)