vowelGame = document.getElementById("vowelGame")
vowelGame.addEventListener("submit", get_input)
vowelGame.style.display = 'none'



function get_input(e){
    const answer = document.getElementById("vowelAnswer").value;
    console.log('answer', answer)
    e.preventDefault();
}