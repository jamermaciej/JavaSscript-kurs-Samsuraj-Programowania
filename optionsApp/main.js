const addBtn = document.querySelector('.add');
const cleanBtn = document.querySelector('.clean');
const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionsBtn = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

let options = ["Zrób to!", "Nie wiem."];

const addOptions = function(e){
  e.preventDefault();

  const option = input.value;

  if( option && options.indexOf(option) < 0 ){
    options.push(option);
    input.value = '';
    alert(option);
  } else {
    input.value = '';
    alert("Błędne dane!");
  }
}
const cleanOptions = function(e){
  e.preventDefault();
  options = [];
  h1.textContent = '';
}
const showAdvice = function(){
  const index = Math.floor(Math.random() * options.length);
  h1.textContent = options[index];
}
const showOptions = function(){
  alert(options.join('---'));
}
addBtn.addEventListener('click', addOptions);
cleanBtn.addEventListener('click', cleanOptions);
showAdviceBtn.addEventListener('click', showAdvice);
showOptionsBtn.addEventListener('click', showOptions);
