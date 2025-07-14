function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      const joke = `${data.setup} - ${data.punchline}`;
      document.getElementById('joke').textContent = joke;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      document.getElementById('joke').textContent = 'Could not load joke. Try again!';
    });
}

// Quiz Checker
function checkQuiz() {
  let score = 0;

  if (document.getElementById("q1").value === "correct") {
    score++;
  }

  if (document.getElementById("q2").value === "correct") {
    score++;
  }

  document.getElementById("quizResult").textContent = `You scored ${score}/2!`;
}
