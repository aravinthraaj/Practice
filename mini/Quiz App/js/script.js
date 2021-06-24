const quizData = [
	{
		question: 'What is the most used programming language in 2021?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'Who is the President of US?',
		a: 'Florin Pop',
		b: 'Donald Trump',
		c: 'Ivan Saldano',
		d: 'Mihai Andrei',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Cascading Style Sheet',
		c: 'Jason Object Notation',
		d: 'Helicopters Terminals Motorboats Lamborginis',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
];
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const question = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
let score = 0;

questionNumber = 0;

function updateQuestion() {
	deselectAnswers();
	question.innerHTML = quizData[questionNumber].question;
	a_text.innerHTML = quizData[questionNumber].a;
	b_text.innerHTML = quizData[questionNumber].b;
	c_text.innerHTML = quizData[questionNumber].c;
	d_text.innerHTML = quizData[questionNumber].d;
}

function getSelected() {
	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

// function verifychecked() {
// 	let checkoption = false;
// 	answerEls.forEach((answerEl) => {
// 		if (answerEl.checked === true) {
// 			checkoption = true;
// 		}
// 	});
// 	return checkoption;
// }
updateQuestion();

submitBtn.addEventListener('click', () => {
	// const verifyoption = verifychecked();
	// if (!verifyoption) {
	// 	alert("You haven't marked any answer !!!");
	// }
	const answer = getSelected();
	if (questionNumber >= quizData.length - 1) {
		if (answer === quizData[questionNumber].correct) {
			score++;
		}
		quiz.innerHTML = `
        <h2>You have completed all the questions your score is ${score}/${quizData.length}</h2>
        
         <button onclick="location.reload()">Reload</button>
     `;
	} else {
		if (answer === quizData[questionNumber].correct) {
			score++;
		}
		questionNumber++;
		updateQuestion();
	}
});
