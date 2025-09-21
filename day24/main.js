initB();
function initB(){
    const bp = document.querySelector(".bp")
    navigator.getBattery().then((batt)=>{
        updateB = () => {
            let level = Math.floor(batt.level * 100 );
            bp.innerHTML = level + "%";
        }
        updateB()
    })
}