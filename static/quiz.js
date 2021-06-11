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
const vowelGame = document.getElementById("vowelGame")

const categories = {
    A : "History",
    B : "Music",
    C : "Sports",
    D : "Geography",
    E : "General Knowledge"

}
   
const history = [
    {
        question: 'What was the 1st human invention to break the sound barrier?',
        choiceA: 'plane',
        choiceB: 'rocket',
        choiceC: 'whip',
        choiceD: 'bullet',
        correct: 'C',
    },{
        question: 'Who assassinated John Lennon?',
        choiceA: 'Mark Chapman',
        choiceB: 'Yoko Ono',
        choiceC: 'John Darwin',
        choiceD: 'Dave Grohl',
        correct: 'A',
      },
]

const music = [
    {
        question: 'How many groves are on one side of an LP record?',
        choiceA: '3',
        choiceB: '5',
        choiceC: '2',
        choiceD: '1',
        correct: 'D'
      },
      {
        question: 'How many black keys on a standard piano?',
        choiceA: '36',
        choiceB: '40',
        choiceC: '28',
        choiceD: '32',
        correct: 'A'
      }
]
const sport = [
    {
        question: 'In what year and in whatcountry was the first FIFI world cup held?',
        choiceA: '1930, Uruguay',
        choiceB: '1924, Germany',
        choiceC: '1920, England',
        choiceD: '1950, Austria',
        correct: 'A'
      },
      {
        question: 'What is the maximum number of horses allowed to run the grand national?',
        choiceA: '50',
        choiceB: '44',
        choiceC: '30',
        choiceD: '40',
        correct: 'D'
      },
]
const geography = [
    {

        question: 'How many emirates make up the United Arab Emerates?',
        choiceA: '3',
        choiceB: '5',
        choiceC: '7',
        choiceD: '8',
        correct: 'C'
      },
      {

        question: 'How many american states have the letter x in them?',
        choiceA: '3',
        choiceB: '1',
        choiceC: '4',
        choiceD: '2',
        correct: 'D'
      }
]

const general = [
    {
        question: 'In the board game Risk what colour is Europe?',
        choiceA: 'Green',
        choiceB: 'Red',
        choiceC: 'Yellow',
        choiceD: 'Blue',
        correct: 'D'
      },
      {
        question: 'Chronophobia is a fear of what?',
        choiceA: 'metal',
        choiceB: 'time',
        choiceC: 'kronos',
        choiceD: 'dates',
        correct: 'B'
      }
]

const lastQuestion = geography.length - 1
let currentQuestion = 0
let currentCategory = 0
let count = 0
const questionTime = 10 
let TIMER
let score = 0

const renderQuestion = (category = history) =>{
    let q = category[currentQuestion]
    
    question.innerHTML = "<p>"+ q.question +"</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD

}



const startQuiz = () => {

    renderQuestion()  
    start.style.display = "none"
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

const checkAnswer = (answer, category) => {
    if(answer == category[currentQuestion].correct){
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

vowelGame.addEventListener("submit", get_input)
const bonusRound = () => {
    
}

const get_input = (x) => {
    const answer = document.getElementById("vowelAnswer").value;
    console.log('answer', answer)
    x.preventDefault();
}

function shortcut(string){
    return string.replace(/[aeiou]+/gi, "");
  }

  