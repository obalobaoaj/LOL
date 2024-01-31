const btnIncrement = document.querySelector(".btn-increment");
const btndecrement = document.querySelector(".btn-decrement");
const textValue = document.querySelector("h2");
const btnchange = document.querySelector(".btn-change");

let counter = 0;

btnIncrement.addEventListener("click", function(){
    counter++;
    textValue.textContent = counter;
    
});

btndecrement.addEventListener("click", function(){
    if (counter > 0){
        counter--;
        textValue.textContent = counter;
    };
    
});

btnchange.addEventListener("click", function(){
    textValue.style.backgroundColor = "red";
});