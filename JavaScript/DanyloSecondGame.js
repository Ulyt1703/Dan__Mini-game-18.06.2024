let headerHome = document.querySelector(".header")
let fullPage = document.querySelector(".full-page")
let textHeaderMobile = document.querySelector(".text__header-mobile")
let headerLabel = document.querySelector(".header__label")
let loading = document.querySelector(".loading")
window.addEventListener("load", function() {
    window.scrollTo(0, 0)
    setTimeout(function(){
        fullPage.style.display = 'block'
        headerHome.style.opacity = '1'
        textHeaderMobile.style.opacity = '1'
        headerLabel.style.opacity = '1'
    },900)
    loading.classList.add("animation")
    setTimeout(function(){
        loading.classList.remove("animation")
    },900)
})


let rulesIcon = document.querySelector(".rules-box")
let referenceBlock = document.querySelector(".reference-block")
let referenceButton = document.querySelector(".button-reference")
let modalGameOver = document.querySelector(".modal__game-over")
let textModalGameOver = document.querySelector(".text__modal__game-over")
let levelText = document.querySelector(".level-text")
let gameText = document.querySelector(".game-text")
let readyText = document.querySelector(".ready-text")
let gameInput = document.querySelector(".game-input")
let errorElement = document.querySelector(".errors")
let finishedButton = document.querySelector(".finished-button")
let startButton = document.querySelector(".start-button")
let timeElement = document.querySelector(".time")

let levels = [
    { level: "Level 1", text: "I have a dog!" },
    { level: "Level 2", text: "Are you ready for the hard level?" },
    { level: "Level 3", text: "I cAn wriTe thIs!" }
]

let [
    {level: level1, text: text1},
    {level: level2, text: text2},
    {level: level3, text: text3}

] = levels

let currentLevel = 0
let errorCount = 0 

window.addEventListener("load", function(){
    window.scrollTo(0, 0)
    loadLevel(currentLevel)
    gameInput.focus()
    clearInterval(interval)
    timeElement.innerText = before
})

rulesIcon.addEventListener("click", function(){
    referenceBlock.classList.add("visible__reference-block")
})
referenceButton.addEventListener("click", function(){
    referenceBlock.classList.remove("visible__reference-block")
    gameInput.focus()
})
finishedButton.addEventListener("click", function(){
    checkInput()
    gameInput.focus()
})
startButton.addEventListener("click", function(){
    startGame()
})


let updateTime = function(){
    let before = Number(timeElement.innerHTML)
    timeElement.innerText = before -1

    if(before -1 == 0){
        clearInterval(interval)
        modalGameOver.style.top = '50%'
        modalGameOver.style.zIndex = '9999'
        textModalGameOver.innerText = "Time's up! You lose! Page reloads!"
        gameInput.focus()
        gameInput.value = ""
        loadLevel(currentLevel = 0)
        timeElement.innerText = before
        setInterval(updateTime, 1000)
        setTimeout(function(){
            modalGameOver.style.top = '-500%'
            modalGameOver.style.zIndex = '-9999'
        },4000)
        setTimeout(() => {
            location.reload()
        }, 4550)
    }
}

let interval = setInterval(updateTime, 1000)

function startGame(){
    gameInput.focus()
    gameInput.value = ""
    loadLevel(currentLevel = 0)
    errorElement.innerHTML = `Mistakes: 0`
    clearInterval(interval)
    setInterval(updateTime, 1000)
    gameInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            checkInput()
            gameInput.focus()
        }
    })
    timeElement.innerText = "40"
    gameInput.style.opacity = "1"
    finishedButton.style.opacity = "1"
    finishedButton.style.zIndex = '1'
    finishedButton.style.transition = '0s'
    timeElement.style.display = 'block'
    readyText.style.display = 'none'
    levelText.style.opacity = '1'
    gameText.style.opacity = '1'
    gameInput.style.opacity = '1'
    errorElement.style.opacity = '1'
    startButton.style.top = '79%'
    startButton.style.transition = '0s'
    gameInput.style.zIndex = '1'
    gameInput.style.transition = '0s'
}
function loadLevel(level){
    gameInputValue = gameInput.value
    if(level < levels.length){
        levelText.innerHTML = levels[level].level
        gameText.innerHTML = levels[level].text
        gameInput.value = ""
        gameInput.focus()
    } 
    else{
        levelText.style.opacity = '0'
        gameText.style.opacity = '0'
        modalGameOver.style.top = '50%'
        modalGameOver.style.zIndex = '9999'
        setTimeout(function(){
            modalGameOver.style.top = '-500%'
            modalGameOver.style.zIndex = '-9999'
        },4000)
        textModalGameOver.innerText = "You've completed all the levels! You won! Page reloads!"
        gameInput.style.opacity = "0"
        finishedButton.style.opacity = "0"
        timeElement.innerText = "39487488484849299392933839399392929299337746464378838383888282"
        timeElement.style.display = 'none'
        setTimeout(() => {
            location.reload()
        }, 4550)
    }
}

function checkInput(){
    let gameInputValue = gameInput.value
    let gameTextValue = gameText.innerHTML
    let mistakes = countMistakes(gameInputValue, gameTextValue)
    if(mistakes <= 5){
        currentLevel++
        loadLevel(currentLevel)
        gameInput.focus()
        errorCount += mistakes
        errorElement.innerHTML = `Mistakes: ${errorCount}`
} 
    else if(errorCount = 6){
        errorCount += mistakes
        errorElement.innerHTML = `Mistakes: ${errorCount}`
        modalGameOver.style.top = '50%'
        modalGameOver.style.zIndex = '9999'
        setTimeout(function(){
            modalGameOver.style.top = '-500%'
            modalGameOver.style.zIndex = '-9999'
        },4000)
        textModalGameOver.innerText = "You lost! That's too many mistakes! Page reloads!"
        gameInput.focus()
        gameInput.value = ""
        loadLevel(currentLevel = 0)
        timeElement.innerText = "39487488484849299392933839399392929299337746464378838383888282"
        timeElement.style.display = 'none'
        levelText.style.opacity = '1'
    gameText.style.opacity = '0'
    gameInput.style.opacity = '0'
    gameInput.style.zIndex = '-9999'
    errorElement.style.opacity = '1'
    startButton.style.top = '79%'
    startButton.style.transition = '0s'
    finishedButton.style.opacity = '0'
    finishedButton.style.zIndex = '-9999'
    finishedButton.style.transition = '0s'
    setTimeout(() => {
        location.reload()
    }, 4550)
    } else{
        modalGameOver.style.top = '50%'
        modalGameOver.style.zIndex = '9999'
        setTimeout(function(){
            modalGameOver.style.top = '-500%'
            modalGameOver.style.zIndex = '-9999'
        },4000)
        textModalGameOver.innerText = "Game over! That's not correct text and too many mistakes! Page reloads!"
        gameInput.focus()
        gameInput.value = ""
        loadLevel(currentLevel = 0)
        errorElement.innerHTML = `Mistakes: 0`
        timeElement.innerText = "39487488484849299392933839399392929299337746464378838383888282"
        timeElement.style.display = 'none'
        levelText.style.opacity = '1'
        gameText.style.opacity = '0'
        gameInput.style.opacity = '0'
        gameInput.style.zIndex = '-9999'
        errorElement.style.opacity = '1'
        startButton.style.top = '79%'
        startButton.style.transition = '0s'
        finishedButton.style.opacity = '0'
        finishedButton.style.zIndex = '-9999'
        finishedButton.style.transition = '0s'
        setTimeout(() => {
            location.reload()
        }, 4550)
}
}
function countMistakes(input, correctText) {
    let mistakes = 0
    let minLength = Math.min(input.length, correctText.length)
    
    for(let i = 0; i < minLength; i++){
        if(input[i] !== correctText[i]){
            mistakes++
        }
    }
    mistakes += Math.abs(input.length - correctText.length)
    return mistakes
}