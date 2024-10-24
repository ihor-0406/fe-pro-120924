//Завдання 01

const [...backgroundBtnCheckbox] = document.querySelectorAll('input[name="color"]');

backgroundBtnCheckbox.forEach((radio) => {
    radio.addEventListener('change',function(e){
        document.body.style.background = e.target.value;
    });
});

//Завдання 02

document.querySelector('.countries').addEventListener('change',function(){
     const country = document.querySelector('.countries').value;

    let info = '';
    let imgSrc = '';
    let imgAlt = '';

    switch(country){
        case 'Італія':
            info='Столиця: Рим; Населення: 62 мільйон людей.'
            imgSrc='https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg'
            imgAlt='Прапор Італії';
            break;

            case 'Україна':
            info='Столиця: Київ; Населення: 41 мільйон людей.'
            imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4W48YVpWsgSqd4rNv-sJPm4SPMX3pGbX0xU24P_uc_CPeBldo7GhWXwSFBk9&s=10'
            imgAlt='Прапор України';
            break;

            case 'Іспанія':
            info='Столиця: Мадрид; Населення: 47,5 мільйон людей.'
            imgSrc='https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg'
            imgAlt='Прапор Іспанії';
            break;

            case 'США':
            info='Столиця: Вашингтон; Населення: 331 мільйон людей.'
            imgSrc='https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg'
            imgAlt='Прапор Іспанії';
            break;
    }
    document.querySelector('.coutryInfo').innerText=info;
    const flag = document.querySelector('.countryFlag');
    if(imgSrc){
    flag.src=imgSrc;
    flag.alt=imgAlt;
    flag.style.display='block';
    }
    else{
        flag.style.display ='none';
    }
});

//Завдання 03

let counter= 0;
let timer;

document.querySelector('.startBtn').addEventListener('click',function(){
    if(timer)return;

    function updateTimer(){
        counter++;
        document.querySelector('.infoTimes').innerText=counter;
        if(counter < 10 ){
            timer=setTimeout(updateTimer,1000)
        }
    }
    updateTimer();
})


//Додаткове завдання

let  timeDisplay=document.querySelector('.time');
let startBtn=document.querySelector('.start');
let resetBtn=document.querySelector('.reset');
let time=1500 //25хвилин
let running = false;

function uptadeTimer(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    timeDisplay.innerText=`${minutes}:${seconds}`;
    timeDisplay.style.color='white';
    if(time > 0){
        time --;
        if (running){
            setTimeout(uptadeTimer, 1000);
        }
    }
    else{
        running=false;
        startBtn.innertext='Start';
    }
}

function resetTime(){
    time=1500;
    uptadeTimer();
    running=false;
    startBtn.innetText='Start';
}

//Додаємо події на Button

startBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(!running){
        running=true;
        startBtn.innerText='Pause';
        uptadeTimer();
    }
    else{
        running=false;
        startBtn.innerText='Start'
    }
});
resetBtn.addEventListener('click',function(e){
    e.preventDefault();
    resetTime();
})

