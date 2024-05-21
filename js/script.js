const generateButton = document.querySelector("#generate-numbers");

generateButton.addEventListener("click", function(){

});


// --------------FUNCTIONS------------------

function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
};