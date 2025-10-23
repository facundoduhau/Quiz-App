const quizQuestions = [
	{
		question: "What is the capital of France?",
		choices: ["Berlin", "Madrid", "Paris", "Rome"],
		answer: "Paris"
	},
	{
		question: "Which planet is known as the Red Planet?",
		choices: ["Earth", "Mars", "Jupiter", "Saturn"],
		answer: "Mars"
	},
	{
		question: "What is the largest ocean on Earth?",
		choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
		answer: "Pacific Ocean"
	},
	{
		question: "Who wrote 'Hamlet'?",
		choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
		answer: "William Shakespeare"
	},
	{
		question: "What is the chemical symbol for gold?",
		choices: ["Au", "Ag", "Fe", "Pb"],
		answer: "Au"
	},
];

const nextButton = document.getElementById('nextBtn');
const quizContainer = document.getElementById('quizContainer');
const quizQuestion = document.getElementById('quizQuestion');
const quizChoices = document.getElementById('quizChoices');
const quizIntro = document.getElementById('quizIntro');
const startButton = document.getElementById('startBtn');

startButton.addEventListener('click', () => {
	quizIntro.classList.add('hidden');
	quizContainer.classList.remove('hidden');
});

nextButton.addEventListener('click', () => {
	console.log('Next button clicked');
	quizContainer.classList.remove('hidden');
	quizIntro.classList.remove('hidden');
});
