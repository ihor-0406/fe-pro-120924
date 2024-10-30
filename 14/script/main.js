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

document.querySelector('.buttonPlanet').addEventListener('click', function(){
    fetch('https://swapi.dev/api/planets/')
    .then(response =>{
        if(response){
            return response.json();
        }
        else{
            console.error(`Помилка мережі: ${response.status}`)
            return 
        }
    })
    .then(planetData =>{
        if(planetData && planetData.results){
            displayPlanets(planetData.results);
        }
        else{
            console.log('Не вдалося завантажити дані')
        }
    })
    .catch(error =>{
        console.error('Сталася помилка:', error)
    });
});

//відображення списку планет

function displayPlanets(planets){
    const container= document.querySelector('.planetsContainer');
    container.innerHTML='';

    planets.forEach(planet =>{
        const planetCard=document.createElement('div');
        planetCard.classList.add('card','mb-3','planetCard');
        planetCard.style.cursor='pointer';
        planetCard.innerHTML=`
        <div class="card-body  bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          <h4 class="card-title">${planet.name}</h4>
        </div>`
        ;
        const planetUrl=planet.url

        planetCard.addEventListener('click',function(){
            loadPlanetDetails(planetUrl);
    });
    
    container.appendChild(planetCard);
    });
}

// Функція для завантаження детальної інформації про планети

function loadPlanetDetails(url){
    fetch(url)
    .then(response =>{
        if(response){
            return response.json();
        }
        else{
            console.error('Помилка мережі:'+response.status);
            return;
        }
    })
    .then(planet =>{
        if(planet){
            displayPlanetsDetails(planet);
        }
        else{
            console.log('Не вдалося завантажити дані про планету.')
        }
    })
    .catch(error =>{
        console.error('Сталася помилка:', error);
    });
}

//Відображення детальної інфо про планети

function displayPlanetsDetails(planet){
    const infoPlanets=document.querySelector('.planetsInfo');
    infoPlanets.innerHTML=`
    <div class="card mt-3 bg-warning-subtle">
      <div class="card-body">
        <h1 class="card-title">${planet.name}</h1>
        <p  class="card-text fs-4">Клімат: ${planet.climate}</p>
        <p  class="card-text fs-4">Населення: ${planet.population}</p>
        <p  class="card-text fs-4">Діаметр: ${planet.diameter}</p>
      </div>
    </div>
    `;
}