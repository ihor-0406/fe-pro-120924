//===================================================================
//№01-завдання

function upperCase(text){
    return new Promise((resolve, reject)=>{
        if(typeof text !== 'string'){
            reject('Invalid input. Experted a string')
        }
        else{
            setTimeout(()=>{
                resolve(text.toUpperCase())
            },2000)
        }
    })
}

upperCase('hello world')
.then (result=>console.log(result))
.catch (error=>console.error(error));

upperCase('red, black, white, orange')
.then (result=>console.log(result))
.catch (error=>console.error(error));


//===================================================================
//№02-завдання

function compareNumber(value1,value2){
    return new Promise((resolve,reject)=>{
        if(value1 > value2){
            resolve(`${value1} більше за ${value2}`)
        }
        else if (value2 > value1){
            resolve(`${value2} більше за ${value1}`)
        }
        else{
            reject('Числа рівні')
        }
    });
}
compareNumber(10, 4 )
.then (result => console.log(result))
.catch (error => console.error(error));

compareNumber(5, 40 )
.then (result => console.log(result))
.catch (error => console.error(error));

compareNumber(2, 2 )
.then (result => console.log(result))
.catch (error => console.error(error));
//===================================================================
//№03-завдання

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>{
    const userList=document.querySelector('.userList');
    users.forEach(user =>{
        const listItem=document.createElement('p');
        listItem.innerText=`${user.name}: ${user.email}`;
        userList.appendChild(listItem);
    })
})
.catch(error => console.error('error'))

//===================================================================
//№04-завдання

//завантажуємо планети

document.querySelector('.buttonPlanet').addEventListener('click',function(){
    fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data =>{
        const container =document.querySelector('.planetsContainer');
        container.innerHTML='';
        data.results.forEach(planet => {
            const planetsCard=document.createElement('div');
            planetsCard.className='col-6  mb-3 ';
            planetsCard.style.cursor='pointer';
            planetsCard.innerHTML=` 
            <div class="card planetCard h-100" data-url="${planet.url}">
              <div class="card-body  bg-info bg-opacity-10 border border-info border rounded-end">
                 <h4 class="card-title">${planet.name}</h4>
             </div>
            </div>`;
         planetsCard.querySelector('.planetCard').addEventListener('click',function(){
            loadPlanetDetails(planet.url);
         });
         container.appendChild(planetsCard)
        });
    });
});

//Деталі про планету

function loadPlanetDetails(url){
    fetch(url)
    .then(response => response.json())
    .then(planet =>{
        const infoContainer=document.querySelector('.planetsInfo');
        infoContainer.innerHTML=`
        <div class="card mt-3 bg-warning-subtle">
       <div class="card-body">
         <h1 class="card-title">${planet.name}</h1>
         <p  class="card-text fs-4">Клімат: ${planet.climate}</p>
        <p  class="card-text fs-4">Населення: ${planet.population}</p>
        <p  class="card-text fs-4">Діаметр: ${planet.diameter}</p>
      </div>
    </div>
     `;
    });
}