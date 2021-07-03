export default function check(){
    let win ;
const table1a = document.querySelector('.table1.a').children
const table1b = document.querySelector('.table1.b').children
const table1c = document.querySelector('.table1.c').children

const table2a = document.querySelector('.table2.a').children
const table2b = document.querySelector('.table2.b').children
const table2c = document.querySelector('.table2.c').children

const table3a = document.querySelector('.table3.a').children
const table3b = document.querySelector('.table3.b').children
const table3c = document.querySelector('.table3.c').children




if(table3a.length > 0 && table3c.length > 0 && table3b.length > 0 ) {
       if (table3a[0].classList.value.toString() == table3b[0].classList.value.toString() && table3a[0].classList.value.toString() == table3c[0].classList.value.toString() ){wind = true} 
}

if(table2a.length > 0 && table2b.length > 0 && table2c.length > 0 ) {
    if (table2a[0].classList.value == table2b[0].classList.value && table2c[0].classList.value == table2a[0].classList.value){win = true} 
}

if(table1a.length > 0 && table1b.length > 0 && table1c.length > 0 ) {if (table1a[0].classList.value == table1b[0].classList.value && table1c[0].classList.value == table1a[0].classList.value){win = true} 
}

if(table1a.length > 0 && table2a.length > 0 && table3a.length > 0 ) {
    if (table1a[0].classList.value == table2a[0].classList.value && table3a[0].classList.value == table1a[0].classList.value){win = true} 
}

if(table1b.length > 0 && table2b.length > 0 && table3b.length > 0 ) {
    if (table1b[0].classList.value == table2b[0].classList.value && table3b[0].classList.value == table1b[0].classList.value ){win = true} 
}

if(table1c.length > 0 && table2c.length > 0 && table3c.length > 0 ) {
    if (table1c[0].classList.value == table2c[0].classList.value && table3c[0].classList.value == table1c[0].classList.value){win = true} 
}

if(table1a.length > 0 && table2b.length > 0 && table3c.length > 0 ) {
    if (table1a[0].classList.value == table2b[0].classList.value && table3c[0].classList.value == table1a[0].classList.value){win = true} 
}

if(table1c.length > 0 && table2b.length > 0 && table3a.length > 0 ) {
    if (table1c[0].classList.value == table2b[0].classList.value && table3a[0].classList.value == table1c[0].classList.value){win = true} 
}

return win
}