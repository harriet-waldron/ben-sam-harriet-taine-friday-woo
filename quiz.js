const start = document.getElementById("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const choiceA = document.getElementById("choiceA")
const choiceB = document.getElementById("choiceB")
const choiceC = document.getElementById("choiceC")
const choiceD = document.getElementById("choiceD")
const counter = document.getElementById("counter")
const timeGauge = document.getElementById("timeGauge")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")
const categoryDiv = document.getElementById("categoryPicker")
const category1 = document.getElementById("catA")
const category2 = document.getElementById("catB")
const category3 = document.getElementById("catC")
const category4 = document.getElementById("catD")

const categories = {
    A : "Geography",
    B : "Math",
    C : "Sports",
    D : "History"
}
   
const questions = [
    {
        question : "Which is right?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        question : "Which is right this time?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },{
        question : "How about now?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    }
]

const questions2 = [
    {
        question : "Which is22 right?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        question : "Which is r22ight this time?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },{
        question : "How about no22w?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    }
]


const lastQuestion = questions.length - 1
let currentQuestion = 0
let count = 0
const questionTime = 10 
let TIMER
let score = 0

const renderQuestion = (category = questions) =>{
    let q = category[currentQuestion]
    
    question.innerHTML = "<p>"+ q.question +"</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD

}



const startQuiz = () => {
    currentQuestion = 0
    start.style.display = "none"
    renderQuestion()
    quiz.style.display = "block"
    renderProgress()
    renderCounter()
    TIMER = setInterval(renderCounter,1000)
}

start.addEventListener("click",startQuiz)

const renderProgress = () => {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"
    }
}

const renderCounter = () => {
    if(count <= questionTime){
        counter.innerHTML = count
        count++
    }else{
        count = 0
        incorrectChoice()
        if(currentQuestion < lastQuestion){
            currentQuestion++
            renderQuestion()
        }else{
            clearInterval(TIMER)
            renderScore()
        }
    }
}

const hideQuestions = () => {
    quiz.style.display = "none"
}

const checkAnswer = (answer) => {
    if(answer == questions[currentQuestion].correct){
        score++
        correctChoice()
    }else{
        incorrectChoice()
    }
    count = 0
    if(currentQuestion < lastQuestion){
        currentQuestion++
        renderQuestion()
    }else{
        clearInterval(TIMER)
        renderScore()
        renderCategories()
        hideQuestions()
    }
}

const correctChoice = () => {
    document.getElementById(currentQuestion).style.backgroundColor = "green"
}

const incorrectChoice = () => {
    document.getElementById(currentQuestion).style.backgroundColor = "red"
}


const renderScore = () => {
    scoreDiv.style.display = "block"
    scoreDiv.innerHTML += "<p>"+ score +"</p>"
}

const renderCategories = () => {
    categoryDiv.style.display = "block"
    category1.innerHTML = categories.A
    category2.innerHTML = categories.B
    category3.innerHTML = categories.C
    category4.innerHTML = categories.D
}


const newCategory = (category) => {
    categoryDiv.style.display = "none"
    currentQuestion = 0
    renderQuestion(category)
    quiz.style.display = "block"
    renderProgress()
    renderCounter()
    TIMER = setInterval(renderCounter,1000)
    scoreDiv.style.display = "none"
}





















