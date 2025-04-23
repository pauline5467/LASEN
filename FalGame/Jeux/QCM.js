const questions = [
    {
        question: "En quelle année les étudiants parisiens ont-ils été invités à fêter les 800 ans de l'université de Bologne ?",
        answers: { A: "1886", B: "1888", C: "1890", D: "1900" },
        correct: "B"
    },
    {
        question: "Quel vêtement ont choisi les étudiants parisiens pour se démarquer lors de cette fête ?",
        answers: { A: "Un chapeau de paille", B: "Une robe en soie", C: "Une faluche", D: "Une tunique espagnole" },
        correct: "B"
    },
    {
        question: "Quel événement a marqué le lancement réel de la faluche ?",
        answers: { A: "La fête des 800 ans de Bologne", B: "Le VIe centenaire de l'université de Montpellier", C: "La Seconde Guerre mondiale", D: "Le congrès de Lille" },
        correct: "B"
    },
    {
        question: "Pourquoi le port de la faluche a-t-il été interdit pendant l'occupation allemande ?",
        answers: { A: "À cause de son coût élevé", B: "Parce qu'il était considéré comme trop nationaliste", C: "À cause de problèmes de sécurité", D: "En raison de son association avec la résistance" },
        correct: "D"
    },
    {
        question: "Quelle manifestation a eu lieu le 11 novembre 1940 ?",
        answers: { A: "Des étudiants ont défilé en béret", B: "Des étudiants ont célébré la victoire sur les Champs-Élysées", C: "Des étudiants ont brûlé leurs faluches", D: "Un concert en hommage aux étudiants a été organisé" },
        correct: "A"
    },
    {
        question: "Quand a eu lieu la première synthèse des codes de la faluche ?",
        answers: { A: "1986", B: "1988", C: "1990", D: "1992" },
        correct: "A"
    },
    {
        question: "Où a eu lieu le congrès des 100 ans de la faluche ?",
        answers: { A: "À Paris", B: "À Toulouse", C: "À Montpellier", D: "À Reims" },
        correct: "D"
    },
    {
        question: "Quelle coiffe les étudiants français ont-ils reçue des Italiens lors de la fête ?",
        answers: { A: "Un béret", B: "Une orsina", C: "Un chapeau à plumes", D: "Une casquette" },
        correct: "B"
    },
    {
        question: "Quelle coiffe distinctive les étudiants français ont-ils adoptée à leur retour de Bologne ?",
        answers: { A: "La calotte", B: "Le képi", C: "La faluche", D: "La toque" },
        correct: "C"
    },
    {
        question: "Quelle était la réaction des étudiants français en voyant les tenues des autres délégations ?",
        answers: { A: "Ils étaient indifférents", B: "Ils se sont sentis fiers", C: "Ils se sont sentis effarés et misérables", D: "Ils ont voulu imiter leurs tenues" },
        correct: "C"
    },
    {
        question: "Pendant la seconde guerre mondiale le port de la faluche a été interdit sauf à une occasion laquelle ?",
        answers: { A: "Aucun jour", B: "Uniquement le jour de la fête nationale", C: "Le jour de la Saint Nicolas", D: "Le jour de la libération de Paris" },
        correct: "C"
    },
    {
        question: "Quel système de communication a été associé à la faluche pendant l'occupation ?",
        answers: { A: "Système de signaux lumineux", B: "Messages codés avec les insignes et les messages cachés", C: "Communication par messagers", D: "Utilisation de symboles dans la rue" },
        correct: "B"
    },
    {
        question: "Quel a été le résultat de la manifestation des étudiants sur les Champs-Élysées ?",
        answers: { A: "Ils ont été arrêtés sans incident", B: "Les Allemands ont ouvert le feu sur eux", C: "La manifestation a été applaudie par le public", D: "Les étudiants ont réussi à faire lever l'interdiction" },
        correct: "B"
    },
    {
        question: "Où se trouve la plaque commémorative en hommage à cet événement ?",
        answers: { A: "À la gare Saint-Lazare", B: "Sur les Champs-Élysées", C: "Près de l'Arc de Triomphe", D: "À la Sorbonne" },
        correct: "C"
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';
    for (let key in currentQuestion.answers) {
        const li = document.createElement('li');
        li.innerText = `${key}: ${currentQuestion.answers[key]}`;
        li.setAttribute('data-value', key);
        li.onclick = () => selectAnswer(key);
        optionsElement.appendChild(li);
    }
    resultElement.innerText = '';
    nextButton.style.display = 'none';
}

let selectedAnswer = null;
function selectAnswer(value) {
    selectedAnswer = value;
    const options = optionsElement.querySelectorAll('li');
    options.forEach(option => option.style.backgroundColor = '');
    document.querySelector(`[data-value="${value}"]`).style.backgroundColor = '#ffcc00';
}

function showResults() {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        resultElement.innerText = "Bonne réponse !";
    } else {
        resultElement.innerText = "Mauvaise réponse !";
    }
    nextButton.style.display = 'inline-block';
}

document.getElementById('submit-btn').addEventListener('click', showResults);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "Quiz terminé !";
        optionsElement.innerHTML = '';
        resultElement.innerText = '';
        nextButton.style.display = 'none';
        document.getElementById('submit-btn').style.display = 'none'; // cacher le bouton "Valider la réponse"
        document.getElementById('home-btn').style.display = 'inline-block'; // afficher le bouton "Accueil"
    }
});

loadQuestion();

