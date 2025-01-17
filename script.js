let passwordInput=document.querySelector('.input-box input');
let copyIcon=document.querySelector('.input-box span');
let passIndicator=document.querySelector('.pass_indicator');
let lengthSlider=document.querySelector('.pass_length input');
let options=document.querySelectorAll('.option input');
let generateBtn=document.querySelector('.generate_password');
let counterSlider=document.querySelector('.pass_length span');

const characters={
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"~!@#$%^&*()-+[]{}<>|:;.,"
}

let generatePassword=function(){
    let passLength=lengthSlider.value;
    let staticPassword="";
}
const updateSlider=function(){
    counterSlider.innerHTML=lengthSlider.value;
}
updateSlider();
generateBtn.addEventListener('click',generatePassword);
lengthSlider.addEventListener('input',updateSlider);