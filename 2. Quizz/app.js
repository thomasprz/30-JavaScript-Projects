const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
form.addEventListener('button', handleForm)

function handleForm(e){
    e.preventDefault();
    quizz();
}

const inputs = document.querySelectorAll('input');

function getCheckedAnswer(name){
    const checkbox = document.querySelectorAll('input');
    checkbox.forEach(cb => {
        if(cb.checked){
            const value = cb.value;
        }
    })
}