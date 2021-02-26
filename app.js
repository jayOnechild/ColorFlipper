
const heX = [0, 1, 2 ,3 , 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btnn = document.querySelector('#btn');
const bcg = document.querySelector('body');
const name = document.querySelector('#color-name');

btnn.addEventListener('click',  ()=>{
    let hash = '#';

  for(let i = 0; i < 6; i++){

    
    
    let random = Math.floor(Math.random()*heX.length);
  
    hash += heX[random];

    // console.log(hash);
  }
  bcg.style.backgroundColor = hash;
  name.innerHTML = hash;
});


