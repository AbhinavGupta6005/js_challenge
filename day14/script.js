const cat_result = document.getElementById('gallary');

const errorData =  document.getElementById("errorBox");

btn_generator.addEventListener('click',function(){
     const nums = document.getElementById('inp-box').value
     errorData.innerHTML = "";

     if(!nums.match(/^[0-9]+$/)){
        return errorData.innerHTML = "Enter Valid Number"
     }
     if(parseInt(nums)>100){
        return errorData.innerHTML = "Number should be less than or equal 100"
     }

     allImages = "";
     fetch(`https://api.thecatapi.com/v1/images/search?limit=${nums}&page=10&order=Desc`)
     .then((res)=>res.json())
     .then((res)=>{
        for(let i = 0; i < nums; i++){
            allImages += `<img src=${res[i].url}>`
        }
        cat_result.innerHTML = allImages
     })
})