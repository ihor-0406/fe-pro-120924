// 1 Завдання:

let vatNumber = prompt('Будь-ласка напишіть будь-яке число:');
  if(vatNumber % 2===0){
    console.log(`Число партне: ${vatNumber}`);
  }
  else{
    console.log(`Число непарне: ${vatNumber}`);
  }

// 2 Завдання:

let myAge = prompt('Будь-ласка напишіть скільки Вам років?:');
  if(myAge >= 18){
    alert('Access authotized'); //Якщо user має повні 18 років, або більше программа пропусте його далі
  }
  else{
    alert('Access  NOT available'); //Якщо user нема  18 років то программа його не пропуска.
  }

// 3 Завдання:

let product = prompt('Будь-ласка напишіть кількість Вашого товару:');
let MyPrice = prompt('Яка його ціна?');
console.log(`Ваша сумма складає ${product*MyPrice}`);

// 4 Завдання:
let PriceProduct = prompt('Будь-ласка напишіть ціну Вашого товару:');
alert(`Ваша ціна включно зі знижкою складає ${PriceProduct*0.5}`);

// 5 Завдання:

let oneNubber =prompt('Будь-ласка напишіть перше число:');
let TwoNubber =prompt('Будь-ласка напишіть друге число:');
let ThreeNubber =prompt('Будь-ласка напишіть третє число:');
let maxNumber = Math.max(oneNubber, TwoNubber, ThreeNubber)
   console.log(`Найбільше число складає: ${maxNumber}`)

// 6 Завдання:

let monthe = prompt('Введіть будь-який місяц згідно його номерації  від 1 до 12')
 if(monthe==1 || monthe==2 || monthe==12){
    alert('Winter')
 }
    else if(monthe >=3 && 5>=monthe){
        console.log('Spring')
    } 
    else if(monthe >=6 && 8>=monthe){
        console.log('Summer')
    }
    else if(monthe >=9 && 11>= monthe){
        console.log('Autumn')
    }
    else{
        console.log('Невірний номер')
    }

// 7 Завдання:

let nUmber = prompt('Введіть будь-який розмір числа:')
if(nUmber>=1){
    console.log('Число є додатним:'+ nUmber)
}
else if(nUmber<0){
    console.log("Число є від'ємне:"+nUmber)
}
else{
    console.log('Число є 0')
}

// 8 Завдання:

let MatFigure = prompt('Напишіть якусь математичну фігуру (коло,квадрат,трикутник)');
switch(MatFigure){
    case 'коло':
         console.log(MatFigure+'не має кутів');
    break;
    case 'квадрат':
         console.log(MatFigure+'+має 4 кути');
    break;
    case 'трикутник':
         console.log(MatFigure+'має 3 кути ');
    break;
    default:
        console.log('Нажаль не можу знайти інформацію за цією фігурою.');
}

// 9 Завдання:

let start = 1;
let finish = 20;
let summa = 0;
while(start <= finish){
    if(start % 2==0){
    summa+=start;
    }
    start++;
}
console.log(`Сумма парних чисел складає:${summa}`)

// 10 Завдання:

for(let i = 10; i > 0; i--){
    console.log(i)
}
//===========================Додаткові завдання=============================
//1 завдання:

let angle = Number(prompt('Введіть велечину кута в градусах:'));
  if(angle < 90){
    console.log('кут гострий.')
  }
  else if(angle == 90){
    console.log('кут прямий.')
  }
  else{
    console.log('кут тупий.')
  }

//2 завдання:

for(let i = 1; i <= 10; i++){
    if(i  % 2 == 0){
        console.log(`${i} :перше парне число`);
        break;
    }
}
//3 завдання:

let planet = prompt('Напишіть  планету яка є в сонячній системі:');
switch(planet){
    case 'меркурій':
    case 'венера':
    case 'земля':
    case 'марс':
    case 'юпітер':
    case 'сатурн':
    case 'уран':
    case 'нептун':
        alert(`${planet} ця планета у сонячній системі`)
    default:
        alert('Нажаль цієї планети немає в сонячній системі');
}