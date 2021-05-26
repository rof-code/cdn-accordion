const questions = document.querySelectorAll('.question');
questions.forEach(element => {
  element.addEventListener('click', () => {
      alert('clickado');
  }
})
