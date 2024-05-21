const generateButton = document.querySelector("#generate-numbers");

generateButton.addEventListener("click", function(){
    const randomNumberArray = [];

    for(let i = 0; i < 5; i++){
        randomNumberArray.push(getUniqueRandomNumber(randomNumberArray, 1, 20));
    }

    console.log(randomNumberArray);
});


// --------------FUNCTIONS------------------

/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns a random number given a min and a max number
 */
function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
};

/**
 * 
 * @param {*} blackListedNumber 
 * @param {*} min 
 * @param {*} max 
 * @returns give a random unique number given a min and max numbers
 */
function getUniqueRandomNumber(blackListedNumber, min, max) {
    let randomNumber;
    let isFound = false;
    while(!isFound){
        randomNumber = getRandomNumber(min, max);
        if(!blackListedNumber.includes(randomNumber)){
            isFound = true;
        };
    };
    return randomNumber
};