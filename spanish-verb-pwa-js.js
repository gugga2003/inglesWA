const verbs = [
    { present: 'GO', pastSimple: 'WENT', meaning: 'ir', pastMeaning: 'fui/fue' },
    { present: 'EAT', pastSimple: 'ATE', meaning: 'comer', pastMeaning: 'comí/comió' },
    { present: 'SLEEP', pastSimple: 'SLEPT', meaning: 'dormir', pastMeaning: 'dormí/durmió' },
    // Add more verbs here
];

let currentIndex = 0;

const card = document.querySelector('.card');
const presentVerb = document.getElementById('present');
const pastSimpleVerb = document.getElementById('past-simple');
const meaning = document.getElementById('meaning');
const pastMeaning = document.getElementById('past-meaning');
const progressBar = document.querySelector('.progress');
const prevBtn = document.getElementById('prevBtn');
const flipBtn = document.getElementById('flipBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const darkModeBtn = document.getElementById('darkModeBtn');

function updateCard() {
    const verb = verbs[currentIndex];
    presentVerb.textContent = verb.present;
    pastSimpleVerb.textContent = verb.pastSimple;
    meaning.textContent = verb.meaning;
    pastMeaning.textContent = verb.pastMeaning;
    progressBar.style.width = `${((currentIndex + 1) / verbs.length) * 100}%`;
}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextVerb() {
    currentIndex = (currentIndex + 1) % verbs.length;
    updateCard();
    card.classList.remove('flipped');
}

function prevVerb() {
    currentIndex = (currentIndex - 1 + verbs.length) % verbs.length;
    updateCard();
    card.classList.remove('flipped');
}

function shuffleVerbs() {
    for (let i = verbs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [verbs[i], verbs[j]] = [verbs[j], verbs[i]];
    }
    currentIndex = 0;
    updateCard();
    card.classList.remove('flipped');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextVerb);
prevBtn.addEventListener('click', prevVerb);
shuffleBtn.addEventListener('click', shuffleVerbs);
darkModeBtn.addEventListener('click', toggleDarkMode);

updateCard();
