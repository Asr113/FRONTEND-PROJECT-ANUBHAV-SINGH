const questions=[
  {
    "id": 1,
    "question": "Which HTML tag is used to define the largest heading?",
    "options": ["<h1>", "<heading>", "<h6>", "<head>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 2,
    "question": "What does CSS stand for?",
    "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 3,
    "question": "Which property is used to change the background color in CSS?",
    "options": ["color", "bgcolor", "background-color", "background"],
    "answer": 2,
    "tags": ["css"]
  },
  {
    "id": 4,
    "question": "Which HTML element is used for inserting a line break?",
    "options": ["<break>", "<br>", "<lb>", "<line>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 5,
    "question": "In JavaScript, which keyword is used to declare a variable?",
    "options": ["var", "let", "const", "All of the above"],
    "answer": 3,
    "tags": ["javascript"]
  },
  {
    "id": 6,
    "question": "Which attribute is used in HTML to provide a unique name to an element?",
    "options": ["class", "id", "style", "name"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 7,
    "question": "Which of the following is NOT a valid CSS unit?",
    "options": ["px", "em", "pt", "dp"],
    "answer": 3,
    "tags": ["css"]
  },
  {
    "id": 8,
    "question": "What does DOM stand for?",
    "options": ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 9,
    "question": "Which Bootstrap class is used to make an element responsive?",
    "options": ["img-fixed", "img-responsive", "image-fluid", "img-fluid"],
    "answer": 3,
    "tags": ["bootstrap"]
  },
  {
    "id": 10,
    "question": "Which HTML attribute is used to specify inline CSS styles?",
    "options": ["font", "style", "css", "design"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 11,
    "question": "Which CSS property controls the text size?",
    "options": ["font-style", "text-size", "font-size", "text-style"],
    "answer": 2,
    "tags": ["css"]
  },
  {
    "id": 12,
    "question": "Which JavaScript method is used to write HTML output?",
    "options": ["document.write()", "console.log()", "window.write()", "document.output()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 13,
    "question": "Which tag is used to link an external CSS file?",
    "options": ["<style>", "<link>", "<script>", "<css>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 14,
    "question": "What is the default display value of a <div> element?",
    "options": ["inline", "block", "flex", "grid"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 15,
    "question": "Which symbol is used for comments in JavaScript?",
    "options": ["//", "/*", "#", "<!-- -->"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 16,
    "question": "Which Bootstrap class adds padding inside a container?",
    "options": ["p-3", "m-3", "padding-3", "pd-3"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 17,
    "question": "In React, what does JSX stand for?",
    "options": ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
    "answer": 0,
    "tags": ["react"]
  },
  {
    "id": 18,
    "question": "Which HTML tag is used to display a numbered list?",
    "options": ["<ul>", "<ol>", "<li>", "<dl>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 19,
    "question": "Which CSS property makes text bold?",
    "options": ["text-weight", "font-weight", "font-style", "bold"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 20,
    "question": "Which JavaScript method is used to convert a string to an integer?",
    "options": ["parseInt()", "parseFloat()", "Number()", "String()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 21,
    "question": "Which Bootstrap class is used to create a button?",
    "options": ["btn", "button", "bt", "bttn"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 22,
    "question": "Which tag is used to create a hyperlink in HTML?",
    "options": ["<link>", "<a>", "<href>", "<url>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 23,
    "question": "Which CSS property changes the text color?",
    "options": ["font-color", "color", "text-color", "foreground"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 24,
    "question": "In JavaScript, what is the output of typeof null?",
    "options": ["object", "null", "undefined", "string"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 25,
    "question": "Which Bootstrap class centers text?",
    "options": ["text-center", "text-align-center", "center-text", "align-center"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 26,
    "question": "What is the root element of an HTML document?",
    "options": ["<html>", "<head>", "<body>", "<root>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 27,
    "question": "Which CSS property is used to change font type?",
    "options": ["font-family", "font-type", "font-style", "text-font"],
    "answer": 0,
    "tags": ["css"]
  },
  {
    "id": 28,
    "question": "Which JavaScript function displays a popup message?",
    "options": ["alert()", "message()", "popup()", "confirm()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 29,
    "question": "In Bootstrap, which class is used to create a grid row?",
    "options": ["row", "grid-row", "container", "line"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 30,
    "question": "Which React hook is used to handle state?",
    "options": ["useEffect", "useState", "useRef", "useContext"],
    "answer": 1,
    "tags": ["react"]
  },
  {
    "id": 31,
    "question": "Which HTML tag is used to display an image?",
    "options": ["<image>", "<img>", "<src>", "<pic>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 32,
    "question": "Which CSS property controls line spacing?",
    "options": ["line-height", "text-height", "line-spacing", "spacing"],
    "answer": 0,
    "tags": ["css"]
  },
  {
    "id": 33,
    "question": "In JavaScript, what does '===' operator check?",
    "options": ["Equality of value only", "Equality of value and type", "Inequality", "Assignment"],
    "answer": 1,
    "tags": ["javascript"]
  },
  {
    "id": 34,
    "question": "Which Bootstrap class makes an element hidden on small screens?",
    "options": ["d-sm-none", "d-none-sm", "hidden-sm", "invisible-sm"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 35,
    "question": "What is the correct syntax to include an external JavaScript file?",
    "options": ["<script src='file.js'>", "<script href='file.js'>", "<js src='file.js'>", "<link src='file.js'>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 36,
    "question": "Which CSS property is used to make corners rounded?",
    "options": ["border", "corner-radius", "border-radius", "radius"],
    "answer": 2,
    "tags": ["css"]
  },
  {
    "id": 37,
    "question": "Which JavaScript method removes the last element of an array?",
    "options": ["shift()", "pop()", "remove()", "splice()"],
    "answer": 1,
    "tags": ["javascript"]
  },
  {
    "id": 38,
    "question": "In Bootstrap, which class is used to make a container full width?",
    "options": ["container-fluid", "container-full", "container-wide", "container-100"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 39,
    "question": "Which HTML tag is used to define a table row?",
    "options": ["<tr>", "<td>", "<table-row>", "<row>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 40,
    "question": "Which CSS property sets the space outside an element?",
    "options": ["padding", "margin", "border", "spacing"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 41,
    "question": "Which JavaScript keyword is used to define a constant?",
    "options": ["var", "let", "const", "static"],
    "answer": 2,
    "tags": ["javascript"]
  },
  {
    "id": 42,
    "question": "Which Bootstrap class adds shadow to an element?",
    "options": ["shadow", "box-shadow", "shadow-sm", "shadow-lg"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 43,
    "question": "In React, which method is used to render UI?",
    "options": ["display()", "render()", "show()", "mount()"],
    "answer": 1,
    "tags": ["react"]
  },
  {
    "id": 44,
    "question": "Which HTML element represents a navigation link section?",
    "options": ["<nav>", "<header>", "<section>", "<menu>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 45,
    "question": "Which CSS property defines the order of flex items?",
    "options": ["flex-order", "order", "item-order", "sequence"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 46,
    "question": "Which JavaScript method joins array elements into a string?",
    "options": ["join()", "concat()", "merge()", "toString()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 47,
    "question": "In Bootstrap, which class is used for a primary button?",
    "options": ["btn btn-main", "btn btn-primary", "button-primary", "btn-primary"],
    "answer": 1,
    "tags": ["bootstrap"]
  },
  {
    "id": 48,
    "question": "In React, which hook is used to perform side effects?",
    "options": ["useState", "useEffect", "useRef", "useMemo"],
    "answer": 1,
    "tags": ["react"]
  },
  {
    "id": 49,
    "question": "Which HTML tag is used to show a tooltip when hovering over an element?",
    "options": ["title", "tooltip", "hover", "hint"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 50,
    "question": "Which CSS property specifies how an image or video is resized to fit its container?",
    "options": ["object-fit", "resize", "fit-content", "background-size"],
    "answer": 0,
    "tags": ["css"]
  }
];


let selectedQuestions = []; 
let currentQuestionIndex = 0; 
let userAnswers = {}; 
let timeLeft = 900; 
let timerInterval; 
let bts = document.querySelector('.btn');
//oooooo

const startBox = document.getElementById('start-box');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');


document.getElementById('start-btn').addEventListener('click', () => {
    
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 15);
    
    startBox.classList.add('hide');
    quizBox.classList.remove('hide');
    
   
    currentQuestionIndex = 0;
    showQuestion();
    startTimer();
});
 //ooooo
function showQuestion() {
    
    const q = selectedQuestions[currentQuestionIndex];
    
    
    document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} of 15`;
    questionText.innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    
   
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
       
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        
        
        if (userAnswers[q.id] === index) {
            btn.classList.add('selected');
        }

        
        btn.addEventListener('click', () => selectOption(q.id, index, btn));
        
        optionsContainer.appendChild(btn);
    });

    
    prevBtn.disabled = (currentQuestionIndex === 0);
    
    if (currentQuestionIndex === 14) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}
 
function selectOption(qId, optionIndex, btnElement) {
    userAnswers[qId] = optionIndex; 
    
    
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.classList.remove('selected'));
    btnElement.classList.add('selected');
}


nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});


prevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    showQuestion();
});
submitBtn.addEventListener('click', finishQuiz);

function finishQuiz() {
    clearInterval(timerInterval);
    
    let score = 0;
    const reviewContainer = document.getElementById('answer-review');
    reviewContainer.innerHTML = ''; 
    
   
    const title = document.createElement('h4');
    title.innerText = "Correct Answers Review:";
    title.style.marginBottom = "10px";
    reviewContainer.appendChild(title);

    
    selectedQuestions.forEach((q, index) => {
        let correctIndex = q.answer;
        let userIndex = userAnswers[q.id];
        let correctOptionText = q.options[correctIndex];
        
      
        if (userIndex === correctIndex) {
            score++;
        }

        
        const item = document.createElement('div');
        item.style.marginBottom = "10px";
        item.style.padding = "10px";
        item.style.borderBottom = "1px solid #eee";
        
       
        let statusColor = (userIndex === correctIndex) ? "green" : "red";
        let statusText = (userIndex === correctIndex) ? "✅ Correct" : "❌ Wrong";

        
        item.innerHTML = `
            <p style="margin: 0; font-weight: bold;">Q${index + 1}: ${q.question}</p>
            <p style="margin: 5px 0 0 0; color: #555;">Correct Answer: <strong>${correctOptionText}</strong></p>
            <p style="margin: 0; font-size: 12px; color: ${statusColor};">${statusText}</p>
        `;
        
        reviewContainer.appendChild(item);
    });

   
    quizBox.classList.add('hide');
    resultBox.classList.remove('hide');
    
    document.getElementById('score-text').innerText = `${score} / 15`;
    document.getElementById('score-percent').innerText = Math.round((score/15)*100) + "%";
}


function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        document.getElementById('timer').innerText = `${m}:${s < 10 ? '0'+s : s}`;
        
        if (timeLeft <= 0) finishQuiz();
    }, 1000);
}


