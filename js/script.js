const generateButton = document.querySelector("#generate-numbers");

generateButton.addEventListener("click", function(){
    const numbersContainerEl = document.querySelector(".number-container");
    const resultsContainerEl = document.querySelector(".results");
    numbersContainerEl.innerHTML = "";
    resultsContainerEl.innerHTML = "";
    const randomNumberArray = [];

    for(let i = 0; i < 5; i++){
        const numberCellEl = document.createElement("div");
        const numberEl = document.createElement("span");
        numbersContainerEl.appendChild(numberCellEl);
        numberCellEl.appendChild(numberEl);
        randomNumberArray.push(getUniqueRandomNumber(randomNumberArray, 1, 20));
        numberEl.append(randomNumberArray[i]);
        setTimeout(function() {
            numberEl.classList.add("display-none");
        }, 30000);
    };

    setTimeout(function() {
        for(let i = 0; i < randomNumberArray.length; i++){
            const resultEl = document.createElement("p");
            const userGuessedNumber = Number.parseInt(prompt("Che numero ricordi?"), 10);
            let isUserGuess = false;
    
            if(randomNumberArray.includes(userGuessedNumber)){
                isUserGuess = true;
                resultsContainerEl.appendChild(resultEl);
                resultEl.append(`Complimenti! Ti sei ricordato il numero ${userGuessedNumber}.`)
                console.log(`Complimenti! Ti sei ricordato il numero ${userGuessedNumber}.`);
            } else {
                resultsContainerEl.appendChild(resultEl);
                resultEl.append(`Mi spiace, ${userGuessedNumber} non è presente nella lista.`)
                console.log(`Mi spiace, ${userGuessedNumber} non è presente nella lista.`);
            }
        };
    }, 31000);

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