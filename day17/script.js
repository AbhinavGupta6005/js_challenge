const button = document.getElementById('copy')
const p = document.getElementById('p')
const message = document.getElementById('message')

function copyToClipboard(elem){
    var $temp = $("<input>");
    $("body").append($temp)
    $temp.val($(elem).text()).select()
    document.execCommand('copy');
    $temp.remove();
    message.classList.add("after_click")


    setTimeout(()=>{
        message.classList.remove('after_click');
    },2000)
}