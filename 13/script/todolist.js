const taskBtn=document.querySelector('.taskButton');
const taskList=document.querySelector('.taskList');
const taskInput=document.querySelector('.taskInput');

//Завантаження та відображення задач в LocalStorage

function loadTasks(){
    const tasks =JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task=>addtaskToList(task));
}

//Додавання та видалення задач до списку
function addtaskToList (taskContent){
    const li=document.createElement('li');
    li.style.marginTop='10px';
    li.textContent=taskContent;
    li.addEventListener('click',function(){
        li.remove();
        removeTaskFromStorage(taskContent);
    });
    taskList.appendChild(li);
}

//Для збереження задач в LocalStorage

function saveTaskToStorage(taskContent){
    const tasks= JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskContent);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Для видалення задач з LocalStorage

function removeTaskFromStorage(taskContent){
    let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    tasks=tasks.filter(task=> task !== taskContent);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Обробник подій для додавання нової задачі
taskBtn.addEventListener('click',function(){
    const taskContent=taskInput.value;
    if(taskContent){
        addtaskToList(taskContent);
        saveTaskToStorage(taskContent);
        taskInput.value='';
    }
})

loadTasks();