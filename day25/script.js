const canvas = document.getElementById("id")
const button = document.querySelector(".treeGenerator")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let curve = 10
let cure2 = 0
function draw(startX, startY, len, angle, branchWidth, color1, color2){
    ctx.beginPath();
    ctx.save()
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2
    ctx.shadowBlur = 5
    ctx.shadowColor  = "#000"
    ctx.lineWidth = branchWidth
    ctx.translate (startX, startY);
    ctx.rotate(angle * Math.PI) / 180 ;
}