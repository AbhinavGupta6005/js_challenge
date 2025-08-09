function calculateAge(){
    let birthdateInput = document.getElementById('birth').value;
    var birthDate = new Date(birthdateInput);
    let today = new Date();


    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDay();

    if(today.getMonth()  < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && (today.getDate() < birthDate.getMonth())){
        age--;
        month = 12 + today.getMonth() - birthDate.getMonth();
        day = today.getDate() + birthDate.getDate()
    }

    document.getElementById('result').innerHTML = "Your Age is:- " + age + "Years," + month + "months and " + day + " Days"
}