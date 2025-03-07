function checkAnswer(quizId, questionName) {
  var quizForm = document.getElementById(quizId);
  var answer = quizForm.querySelector('input[name="' + questionName + '"]:checked');
  
  if (answer) {
    if (answer.value === 'correct') {
      alert('Correct Answer! Moving to the next chapter...');
      // Logic for moving to the next chapter
    } else {
      alert('Incorrect Answer. Please try again.');
    }
  } else {
    alert('Please select an answer.');
  }
}
