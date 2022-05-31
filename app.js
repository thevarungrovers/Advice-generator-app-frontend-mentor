// variables
let advice_id = document.querySelector('#advice_id');
let advice_text = document.querySelector('.advice_text');
let dice = document.querySelector('#dice')

// link to get advice
const endpoint = 'https://api.adviceslip.com/advice';

// Event Listener
dice.addEventListener('click', getAdvice)

async function getAdvice(){
    const response = await fetch(endpoint)
    
    if(!response.ok){
        throw Error(response.statusText);
    }

    const jsonFormat = await response.json();
    displayQuote(jsonFormat.slip.advice, jsonFormat.slip.id); // calling function to display quote
}

function displayQuote(advice, id){
    advice_text.innerHTML = advice;
    advice_id.innerHTML = id;
}

getAdvice();

