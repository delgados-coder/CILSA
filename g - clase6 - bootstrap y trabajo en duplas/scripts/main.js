window.addEventListener('load', ()=> {
    console.log('carga el doc');
    const form = document.querySelector('#myForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");

form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateInputs()
    modal.style.display = "block";
});

const validateInputs = () => {
    const nameValue = name.value.trim();
    console.log(nameValue);
    const emailValue = email.value.trim();

    if(!nameValue){
        validateFailure(name, 'Campo vacio')
        console.log('no ingresa');

    }else{
        validateOk(name)
    }

    if(!emailValue){
        validateFailure(email, 'Campo vacio');

    }else if(!validateEmail(emailValue)){
        validateFailure(email, 'El email no es valido');
        
    }else{
        validateOk(email);
    }

}
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const validateFailure = (input, msje) => {
    const formControl = input.parentElement
    const alert = formControl.querySelector('p')
    alert.innerText = msje
    formControl.className = 'form-control-fail'

}
const validateOk = (input, msje) => {

    const formControl = input.parentElement;

    formControl.className = 'form-control-ok';
}

const validateEmail = (email) => {
    return  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

})