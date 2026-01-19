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
const quizTitle = document.getElementById('quizQuestion');
const quizChoices = document.getElementById('quizChoices');
const quizIntro = document.getElementById('quizIntro');
const startButton = document.getElementById('startBtn');

var correctChoiceSelected = false;

var currentQuestion = 0;

var points = 0;

startButton.addEventListener('click', () => {
	quizIntro.classList.add('hidden');
	quizContainer.classList.remove('hidden');
	showQuestion();
});

nextButton.addEventListener('click', () => {
	currentQuestion++;
	if (correctChoiceSelected) {
		points++;
	}
	console.log(`Points: ${points}`);
	if (currentQuestion < quizQuestions.length) {
		showQuestion();
	} else {
		showResults();
	}
});

function showQuestion(){
	var questionNumber = quizQuestions[currentQuestion];
	quizTitle.textContent = questionNumber.question;
	quizChoices.innerHTML = '';
	questionNumber.choices.forEach(choice => {
		const choiceElement = document.createElement('p');
		choiceElement.textContent = choice;
		choiceElement.addEventListener('click', () => {
			if (choice === questionNumber.answer) {
				correctChoiceSelected = true;
				console.log(correctChoiceSelected)
			}
			else{
				correctChoiceSelected = false;
				console.log(correctChoiceSelected)
			}
			quizChoices.querySelectorAll('.bg-gray-300').forEach(child => {
                child.classList.remove('bg-gray-300', 'p-2', 'pl-6', 'pr-6', 'rounded-xl', 'cursor-pointer');
			})
			choiceElement.classList.add('bg-gray-300', 'p-2', 'pl-6', 'pr-6', 'rounded-xl', 'cursor-pointer', );
		});
		quizChoices.appendChild(choiceElement);
	});	
}

function showResults(){
	quizContainer.innerHTML = `
		<div class="h-full w-full flex flex-col items-center justify-center">
			<p class="text-5xl font-extrabold mb-6">Quiz Completed!</p>
			<p class="text-3xl font-semibold">Your Score: ${points} / ${quizQuestions.length}</p>
		</div>
	`;
}