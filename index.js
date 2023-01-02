const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");

const check = () => {
    if(password.value !== "" || cPassword.value !== ""){
        if (password.value !== cPassword.value){
            password.classList.add('error');
            cPassword.classList.add('error');
            cPassword.classList.remove('success');
            password.classList.remove('success');
        } else if(password.value === cPassword.value) {
            password.classList.add('success');
            cPassword.classList.add('success');
            cPassword.classList.remove('error');
            password.classList.remove('error');
        } 
    }
};
