//1 завдання з таблицею

let myTable = document.querySelector('.book');

const bookArray =[
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    },
]

//Заповніємо нашу таблицю

for(let book of bookArray){
    let row = document.createElement('tr');
    
    let titleCell=document.createElement('td');
    titleCell.innerHTML=book.title;
    row.appendChild(titleCell);

    let yearCell=document.createElement('td');
    yearCell.innerHTML=book.year;
    row.appendChild(yearCell);

   let ratingCell = document.createElement('td');
   ratingCell.innerHTML= book.rating;
   row.appendChild(ratingCell);
   ratingCell.style.color='red'
   ratingCell.style.backgroundColor='rgba(255, 255, 0, 0.5)';

//Добавляемо трошки стилізації нашої таблиці

   let StyleTable =[titleCell,yearCell,ratingCell];
   StyleTable.forEach(cell=>{
    cell.style.padding='12px 15px';
    cell.style.border='1px solid #355555';
    cell.style.textAlign='center';
    cell.style.fontSize='1.5rem'
   })

    myTable.appendChild(row); 
}

//===========================================================================================================================================


const elementsArray =[
    {tag:'p',text:'Елемент 1'},
    {tag:'div',text:'Елемент 2'},
    {tag:'span',text:'Елемент 3'}
];

function ElementItem(item){
    const element=document.createElement(item.tag);
    element.innerHTML=item.text;
    return element
}
const container = document.querySelector('.container')

elementsArray.forEach(item=>{
    const NewEl=ElementItem(item);
    container.appendChild(NewEl);

    container.style.backgroundColor='rgb(255.255.0.0)';
    container.style.color='white';
    container.style.border='2px solid black';
    container.style.fontSize='1.5rem'
})

//=================================================================================================================================================

const header= document.createElement('header');
header.style.padding='50px';
header.style.backgroundColor ='yellow';
header.style.textAlign='center';

document.body.prepend(header);

//Добавляємо наш масив

const menuData=[
    {name: 'Головна', url:'/'},
    {name: 'Про нас', url:'/about'},
    {name: 'Послуги', url:'/services'},
];
//

menuData.forEach(value =>{
    const link =document.createElement('a');
    link.href=value.url;
    link.innerHTML=value.name;
    link.target='_blank';

    link.style.margin='0 50px'
    link.style.fontSize='2rem'

    header.appendChild(link);
})

//====================================================================================================================================================
const div=document.createElement('div');
div.style.display='flex';
div.style.flexWrap= 'wrap';

document.body.appendChild(div);

for (let i = 0; i < 50; i++) {
    const NewDiv=document.createElement('div');

    NewDiv.style.borderRadius='50%';
    NewDiv.style.width='50px';
    NewDiv.style.height='50px';
    NewDiv.style.margin='10px';
    NewDiv.innerHTML= i; 
    NewDiv.style.fontSize='25px'
    NewDiv.style.display='flex';
    NewDiv.style.justifyContent='center';
    NewDiv.style.alignItems='center';
    NewDiv.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`; //166777215-максимальна кількість кольорів в 24-бітній-палітрі
    NewDiv.classList.add('cirle-element');
    div.appendChild(NewDiv)

}


