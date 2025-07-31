const panels = document.querySelector("panel1")
const panel = document.querySelector("panel2")
const panes = document.querySelector("panel3")
const panls = document.querySelector("panel4")
const pnels = document.querySelector("panel5")

panels.forEach(panel => {
    panel.addEventListener("click",()=>{
        removeActiveClass();
        panel.classList.add('active')
    })
})

function removeActiveClass({
    
})