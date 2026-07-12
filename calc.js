// A Calculator
const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function deleteDisplay(){
    display.value = display.value.slice(0, -1);
}

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch{
//         display.value = "Error"
//     }
// }

function calculate(){
    try{
        if(display.value.includes('%')){
            display.value = eval(display.value.replace('%','/100'));
        } else if(display.value.includes('/0')){
            display.value = "Error: Divide by 0";
        } else{
            display.value = eval(display.value);
        }
    }
    catch{
        display.value = "Error";
    }
}


// Side Nav
const ham = document.querySelector('.fa-bars')
const generalSideNav = document.querySelector('.general-side-nav')
const about = document.querySelector('.about')
const sideAbt = document.getElementById('side-abt')
const portfolio = document.querySelector('.portfolio')
const contact = document.querySelector('.contact')
const close = document.querySelector('.fa-close')

ham.addEventListener('click', () => {
    generalSideNav.style.display = 'block'
})

about.addEventListener('click', () => {
    sideAbt.style.display = block
})

close.addEventListener('click', () => {
    about.style.display = 'none'
    portfolio.style.display = 'none'
    contact.style.display = 'none'
    // generalSideNav.style.display = 'none'
})


sideAbt.addEventListener('click', () => {
    about.style.display = 'block'
})









// History
const showHistory = document.getElementById('show-history')
const historyModal = document.getElementById('history-modal')
const historyList = document.getElementById('history-list')
const clearHistory = document.getElementById('clear-history')

showHistory.addEventListener('click', () => {
    historyModal.style.display = historyModal.style.display === 'block' ? 'none':'block'
})

clearHistory.addEventListener('click', ()=> {
    historyList.innerHTML = "";
})

function addToHistory(calculation, result) {
    const item = document.createElement('li');
    item.textContent = `${calculation} = ${result}`;
    historyList.appendChild(item)
}