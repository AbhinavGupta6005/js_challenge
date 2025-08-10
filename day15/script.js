const light  = document.querySelectorAll(".light");
let body = document.body

let active = 0;

setInterval(()=>{
    Abc();
},1500)

function Abc(){
    light[active].classList = "light"
    active++;
    if(active > 2){
        active = 0;
        body.style.backgroundColor = "#00fffc"
    }
    else if(active == 1){
        body.style.backgroundColor = "#fc00ff"
    }
    else if(active == 2){
        body.style.backgroundColor = "#fffc00"
    }

    const present = light[active];
    present.classList.add(present.getAttribute('color'))
}