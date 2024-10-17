window.onload=function(){

//=====onClick======

    function getRandomColor(){
 let r = 18;
 let g = Math.floor(Math.random()*256);
 let b = Math.floor(Math.random()*256);
return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector('.colorButton').addEventListener('click',function(){
    document.querySelector('.colorText').style.color=getRandomColor();
})

//===onDblcick====
document.querySelector('.dobleClick').addEventListener('dblclick',function(){

  let currentWidth= parseInt(this.style.width) || 200;
  let currentHeight=parseInt( this.style.height) || 200;
  this.style.width=(currentWidth*2)+'px';
  this.style.height=(currentHeight*2)+'px';

})

//====addEventListener i removeEventListener======

let count=0;
let button=document.querySelector('.counterButton');
let counter=document.querySelector('.counter');

function incrementCounter(){
    count++;
    counter.innerHTML=count;
    if(count >= 10){
        button.removeEventListener('click',incrementCounter);
    }
}
button.addEventListener('click',incrementCounter)

//=============

const div=document.createElement('div');
div.style.display='flex';
div.style.flexWrap= 'wrap';

const DeleteElement=document.querySelector('.DeleteElement')
document.body.insertBefore(div, DeleteElement)

for (let i = 0; i <= 10; i++) {
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
  
   const r=Math.floor(Math.random()*255);
   const g=Math.floor(Math.random()*255);
   const b= Math.floor(Math.random()*255);
   NewDiv.style.backgroundColor= `rgb(${r},${g},${b})`
 
   NewDiv.classList.add('cirle-element');
    div.appendChild(NewDiv);
   NewDiv.addEventListener('click',function(){
    this.remove();
   }) 

}

//==============Event.targer========

document.querySelector('.blockContainer').addEventListener('click',function(event){
    if(event.target.classList.contains('button')){
        alert(`Клік на ${event.target.className}`);
    }
})

//==============button menu========

document.querySelector('.menuBtn').addEventListener('click',function(){
    const menu=document.querySelector('.menu');
    if(menu.style.display === 'none'){
        menu.style.display='block';
        this.innerHTML='Закрити Меню';
    }
    else{
        menu.style.display='none';
        this.innerHTML='Відкрити меню';
    }
})
}