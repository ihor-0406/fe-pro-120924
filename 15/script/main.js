//01

async function getUserData(userId) {
    try{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user=await response.json();
    console.log(`Name: ${user.name} , Email:${user.email}`)
    }
    catch (error) {
    console.error(error.message);
}
}
getUserData(1)
getUserData(5)
getUserData(8)

//02

async function getFilmData(film){
    try{
        const response = await fetch(`https://swapi.dev/api/films/${film}/`);
        const filmData = await response.json();
        console.log(`Film: ${filmData.title}, Release date: ${filmData.release_date }`);
    }
    catch (error) {
        console.error(error.message);
    }
}
getFilmData(1)
getFilmData(6)
getFilmData(3)

//03

import { toUpperCase, reverseString } from "./stringUtilities.js";

console.log(toUpperCase('hello world'))
console.log(reverseString('hello world'))

//04

const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(50,50,50,50);

ctx.fillStyle = 'yellow'
ctx.fillRect(10,10, 50, 50)

let lg = ctx.createLinearGradient(100,50,150,50);  
lg.addColorStop(1,'red');                            
lg.addColorStop(0,'blue');                           
ctx.fillStyle = lg;                    
ctx.fillRect(90,90,50,50); 

//05

function createSvgLine(x1, y1, x2, y2, color, width){
    const svg=document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('heigth', '100%');
    const line= document.createElementNS('http://www.w3.org/2000/svg','line')
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke-width',width);
    line.setAttribute('stroke',color);
    svg.appendChild(line);
    document.body.appendChild(svg);
}
createSvgLine(10,10,500,200,'red',5);


