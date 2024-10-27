const toggleBt = document.getElementById('toggle-skill') as HTMLButtonElement
const skilSec = document.getElementById('skills') as HTMLElement
toggleBt.addEventListener('click' , ()=>{
    if(skilSec.style.display === 'none'){
        skilSec.style.display = 'block'
    } else {
        skilSec.style.display = 'none'
    }
});