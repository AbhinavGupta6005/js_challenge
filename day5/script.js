(function (){
    const form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const msg = document.querySelector('.msg')
        const content = document.querySelector('.content')

        content.textContent = `"${msg.value}" this is your message`
        msg.value = "";
    })
})()