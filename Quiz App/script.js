const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2023?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'سعودي؟',
        a: 'وليا الشرف',
        b: 'بكل فخر',
        c: 'ونعم',
        d: 'لا',
        correct: 'a'
    }, {
        question: 'مين ملك السعودية',
        a: 'سلمان بن عبدالعزيز',
        b: 'الايراني',
        c: 'القطري',
        d: 'الامريكي',
        correct: 'a'
    },
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected()
{
    
    let answer = undefined;
    
    answerEls.forEach(
        answerEl => 
        {
            if(answerEl.checked)
            {
                answer = answerEl.id;
            }   
        }
    );

    return answer;
}

function deselectAnswers()
{
    answerEls.forEach(
        (answerEl) => 
        {
            answerEl.checked = false;   
        }
    );
}

submitBtn.addEventListener
('click', () => 
    {
        
        const answer = getSelected();
        console.log(answer);

        if(answer)
        {
            if(answer === quizData[currentQuiz].correct)
            {
                score++;
            }

            currentQuiz++;
    
            if(currentQuiz < quizData.length)
            {
                loadQuiz();
            }
            else
            {
                quiz.innerHTML = `
                    <h2>You Answered correctly at ${score}/${quizData.length} 
                    questions.</h2> <button onclick="location.reload()">
                    Reload</button>`;
            }
        }
        
    }
);