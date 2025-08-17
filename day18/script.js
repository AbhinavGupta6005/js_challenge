let game = document.getElementById('game')
let btn = document.getElementById("btn")

for(let i = 25; i > 0; i--){
    let slider = document.createElement("div")
    slider.setAttribute("class","slider animate")
    slider.setAttribute("id","slider" + i);

    game.append(slider)
}

let sliderWidth = 400;
function slidingStops(slider){
    let current = document.getElementById('slider'.concat(slider))
    let aboveCurrent = document.getElementById('slider'.concat(slider+1))

    if(slider == 1){
        var belowCurrent = current;

    }
    else{
        var belowCurrent = document.getElementById("slider".concat(slider - 1))
    }
    var left = window.getComputedStyle(current).getPropertyValue("left")
    current.classList.remove("animate")
    current.style.left = left

    left = parseInt(left)
    var width = parseInt(
        window.getComputedStyle(current).getPropertyValue("width")

    )
    var leftBelow = parseInt(
        window.getComputedStyle(belowCurrent).getPropertyValue("left")
    )
    var diff = left - leftBelow
    var absDiff = Math.abs(diff)
    if(diff > width || diff < -width){
        var score = "Game Over\n Your Score : ".concat(slider - 1)
        alert(score);
        location.reload()
    }
    if(diff > 0){
        left += absDiff;
    }
    else{
        left -= diff;
        current.style.left = left.toString().concat("px")
    }
    function slidingStops(slider){

    }
    var offset = (width - absDiff).toString().concat("px")
    current.style.width = offset;
    aboveCurrent.style.width = offset;
    aboveCurrent.style.visibility = "visible"

    sliderWidth += absDiff
    document.documentElement.style.setProperty("--width",sliderWidth + "px") 
    var onclick = "slidingStops(" + (slider + 1) + ")"
    btn.setAttribute("onclick",onclick)
}