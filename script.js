const quizData = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
      },
      {
        question: "Which programming language is used to build web pages?",
        options: ["Java", "C#", "HTML", "Python"],
        answer: "HTML"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    // Display the current question
    function loadQuestion() {
      const questionData = quizData[currentQuestion];
      document.getElementById("quiz").innerHTML = `
        <div class="question-text">${questionData.question}</div>
        <div class="answers">
          ${questionData.options.map(option => `
            <div class="answer" onclick="checkAnswer('${option}')">${option}</div>
          `).join('')}
        </div>
      `;
    }

    // Check if the answer is correct
    function checkAnswer(selectedAnswer) {
      const correctAnswer = quizData[currentQuestion].answer;
      if (selectedAnswer === correctAnswer) {
        score++;
      }
      document.querySelectorAll('.answer').forEach(button => button.style.pointerEvents = 'none'); // Disable further clicking
    }

    // Handle the Next button click
    document.getElementById("nextBtn").addEventListener("click", function() {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    });

    // Show the result after the quiz ends
    function showResult() {
      document.getElementById("quiz").style.display = 'none';
      document.getElementById("nextBtn").style.display = 'none';
      document.getElementById("result").style.display = 'block';
      document.getElementById("result").innerHTML = `Your score is ${score} out of ${quizData.length}`;
    }

    // Initial load of the first question
    loadQuestion();