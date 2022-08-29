const firstInput = document.getElementById("test");
const secondInput = document.getElementById("test2");
const equals = document.querySelector(".equal");
let isSecondInputFocused = false;

document.querySelector('.plus').addEventListener("click", ()=>{
    secondInput.focus();
    isSecondInputFocused= true;
});

document.querySelectorAll(".button").forEach(function(item,index){
    item.addEventListener("click",()=>{
        isSecondInputFocused?(secondInput.value+=index+1):(firstInput.value+=index+1);
    });
});

equals.addEventListener("click",()=>{
    const result = parseInt(firstInput.value)+parseInt(secondInput.value);
    equals.innerHTML+=result;
});

