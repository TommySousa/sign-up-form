const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const message = document.getElementById("message");

const check = () => {
    if(password.value !== "" || cPassword.value !== ""){
        if (password.value !== cPassword.value){
            password.classList.add('error');
            cPassword.classList.add('error');
            cPassword.classList.remove('success');
            password.classList.remove('success');
            message.innerHTML = "Passwords do NOT match";
            message.style.color = "Red";
        } else if(password.value === cPassword.value) {
            password.classList.add('success');
            cPassword.classList.add('success');
            cPassword.classList.remove('error');
            password.classList.remove('error');
            message.innerHTML = "Passwords match";
            message.style.color = "Green";
        } 
    }
};

const validate = () =>{
    if (password.value !== cPassword.value){
        return false
    }
}