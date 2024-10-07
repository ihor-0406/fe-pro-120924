//================================Завдання для for in and for of=======================
//========№01========
console.log('===№01====')

const person ={
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const Mykey in person) {
    console.log( ` ${Mykey}: ${person[Mykey]}`)
}
//========№02========
console.log('===№02====')

const students=[
    {name: 'Alice', age: 20, grade: 'A'},
    {name: 'Bob', age: 22, grade: 'B'},
    {name: 'Charlie', age: 21, grade: 'C'},
];
for (const Newstudents of students) {
    for (const key in Newstudents) {
        console.log(`${key}:${Newstudents[key]}`)
    }
    
}
//=======================================Гра ================================
//========№03========
console.log('===№03====')
function myGame(){
let user= prompt('Введить з маленької літори: Камінь , Ножиці чи Папір');
let game=['камінь','ножиці', 'папір'];
let computer=game[Math.floor(Math.random()*3)];
let result ='';
if(user===computer){
    result= 'Нічья';
}
else if((user ==='камінь' && computer ==='ножиці') || (user ==='ножиці' && computer ==='папір') || (user ==='папір' && computer ==='камінь')){
    result='ВІТАЮ , Ви виграли';
  }
else {
    result ='Ви програли';
}
alert(`Ваш вибір:${user},
    Компютер:${computer},
    Результат: ${result}`)
console.log(`Ваш вибір:${user},
    Компютер:${computer},
    Результат: ${result}`)
}
myGame()    
//======================================Завдання для Mach==========================
//========№04========
console.log('===№04====')
//функція яка вибирає найбільше число
function maxValue(value1, value2){
    return Math.max(value1,value2);
}
console.log(maxValue(23, 20));
//функція яка вибирає найменше число
function minValue(value1, value2){
    return Math.min(value1,value2);
}
console.log(minValue(5, 9));

//========№05========
console.log('===№05====')

function extentValue(value1,value2){
    return Math.pow(value1,value2);
}
console.log(extentValue(20,2))

//========№06========
console.log('===№06====')

function upValue(value){
    return Math.ceil(value);
}
console.log(upValue(23.3));
//====================
function downValue(value){
    return Math.floor(value);
}
console.log(downValue(23.3))
//======================================Завдання для Class==========================
//========№07========
console.log('===№07====')
class Person{
    constructor(name, age){
        this._name=name;
        this._age=age;
    }
    sayHello(){
        console.log(`Вітаю, Мене звати ${this._name} мені ${this._age} років`)
    }
}
let joch = new Person('Joch', 30);
joch.sayHello();
//Наслідовання
class Student extends Person{
    constructor(name, age, studentId){
        super(name,age);
        this._studentId=studentId;
    }
    study(){
        console.log(`Mій Id-номер ${this._studentId}`);
    }
}
let student = new Student(`Bob`, 23, '234A98B')
student.sayHello()
student.study();

//======================================Додаткові завдання ==========================
//===№01===
console.log('==№01==')
class Book{
    constructor(title, author,year,genres){
        this._title=title;
        this._author=author;
        this._year=year;
        this._genres=genres;
        this._ratings=[];
    }
    //середня оцінка
    get averageRating(){
        if(this.ratings.length === 0){
            return 0;
        }
        const total=this._ratings.reduce((sum,rating)=>sum + rating, 0);
        return total / this.ratings.length;
    }
    //Рік публікації з перевіркою на майбутній рік.
    set year(year){
        if(this._year <= 2024){
            this._year=true;
        }
    }
    //Сеттер для жанрів, який додає нові жанри без дублювання
    get genres(){
        return this._genres;
    }
    set genres(newGenres){
        this._genres += newGenres;
        if(newGenres===this._genres){
            newGenres-false;
        }
    }
    //
    addRating(rating){
        if(rating >=1 && rating <= 5){
            this._ratings.push(rating);
        }
        else{
            console.error('Оцінка має бути числом від 1 до 5')
        }
    }
    //
    getInfo(){
        return `Назва ${this._title} ,автор ${this._author} ,рік ${this._year} , жанр ${this._genres} `
    }
}
const MyBook = new Book ('Хроніки Нарнії','Клайв Стейплз Льюїс', 1950, ['Фентезі', 'Пригоди']);
MyBook.addRating(4.3);
MyBook.addRating(3);

console.log(MyBook.getInfo());
//console.log(`Середня оцінка:${MyBook.averageRating}`);

//===№02===
console.log('==№02==')

class User{
    constructor(username, password, role,isActive){
        this._username =username;
        this._password=password;
        this._role=role;
        this._isActive=isActive;
    }
    //
    login(password){
        if(password === this._password){
            console.log('Вхід успішний')
        }
        else{
            console.log('Невірний пароль');
        }
    }
    //
    logout(){
        console.log('Ви вийшли із системи');
    }
    get info(){
        const status = this.isActive ? 'Активний' : 'Неактивний';
        return `Користувач:${this._username}, Роль:${this._role},Статус ${status}`;
    }
}
const user1 = new User ('ihor_0406', '123456', 'admin');
user1.login('123456');
user1.login('456987');
console.log(user1.info);
user1.logout();

//===№03===
console.log('==№03==')
