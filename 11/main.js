window.onload=function(){

const colorBlock=document.querySelector('.myBlock');

colorBlock.addEventListener('mouseover', function(e){
    this.style.backgroundColor = 'red'
});

colorBlock.addEventListener('mouseout', function(e){
    this.style.backgroundColor='blue'
})

//=========================================

const contexMenu=document.querySelector('.contexMenu');
const textBlock=document.querySelector('.textBlock');

textBlock.addEventListener('contextmenu',function(e){
    e.preventDefault();
    contexMenu.style.display='block';
    contexMenu.style.left=`${e.pageX}px`;
    contexMenu.style.top=`${e.pageY}px`;

    document.addEventListener('click',function(e){
        contexMenu.style.display='none';
});
document.getElementById('alignCenter').addEventListener('click',function(){
    textBlock.style.textAlign='center';
});

document.getElementById('alignRigth').addEventListener('click',function(){
    textBlock.style.textAlign='right';
});

document.getElementById('alignLeft').addEventListener('click',function(){
    textBlock.style.textAlign='left';
});

document.getElementById('hideElement').addEventListener('click',function(){
    textBlock.style.display='none';
});
});

//=============================================================

const player=document.querySelector('.player');
let topPosition=10;
let leftPosition=10;

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowUp'){
        topPosition = Math.max(topPosition -10, 0);
    }
    else if(e.key === 'ArrowDown'){
        topPosition = Math.min(topPosition +10, 460);
    }
    else if(e.key === 'ArrowLeft'){
        leftPosition = Math.max(leftPosition -10, 0);
    }
   
    else if(e.key === 'ArrowRight'){
        leftPosition = Math.min(leftPosition +10, 460);
    };
    player.style.top=`${topPosition}px`;
    player.style.left=`${leftPosition}px`;

})

//================================================================

const button=document.querySelector('.button');
const result=document.querySelector('.result');

button.addEventListener('click',function(){
    const amount=document.querySelector('.amount').value;
    const rate= document.querySelector('.rate').value;
    const conversion=amount * rate;
    result.textContent=conversion;

})

//==================================================================

const taskBtn=document.querySelector('.taskButton');
const taskList=document.querySelector('.taskList');

taskBtn.addEventListener('click',function(){
    const taskInput=document.querySelector('.taskInput').value;
    if(taskInput){
        const li=document.createElement('li');
        li.style.fontSize='30px';
        li.style.marginTop='10px'
        li.style.borderBottom='2px solid black';
        li.textContent=taskInput;
        li.addEventListener('click',function(){
            li.remove();
    })
    taskList.appendChild(li);
}
})
}