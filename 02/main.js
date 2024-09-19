//Перше завдання з порівнянням чисел.

let numberOne = prompt('Введдіть перше число:');
let numberTwo = prompt('Введдіть друге число:');
alert(numberOne==numberTwo);

//Друге завдання: знайти площу прямокутника за формолою ,та виведенням результата у консоль,формула S=a*b

let length = Number(prompt('Введдіть довжину прямокутника:'));
let width =Number(prompt('Введдіть ширину прямокутника'));
let area = length*width;
console.log(area);

//Третє завдання: знайти периметр прямокутника, формула P=2(a+b)

let LengtH = Number(prompt('Введдіть довжину прямокутника:'));
let WidtH =Number(prompt('Введдіть ширину прямокутника'));
console.log(`Периметр прямокутника ${2*(LengtH+WidtH)}`);

//Додадкові завдання:
//1 здання:функція з конвертації температури
let Celsius = Number(prompt('Введдіть тумпературу в Цельсія'))
let Fahrengheit = (Celsius*9)/5+32;
alert(`Температура за Фаренгейтом ${Fahrengheit} градусів`);

//2 завдання: Обчислюємо об'єм циліндра

let radius = Number(prompt('Введдіть радіус циліндра'));
let height =Number(prompt('Введдіть висоту циліндра'));
const pi = 3.14;
console.log(`Об'єм циліндра складає ${pi*(radius**2)*height}`)