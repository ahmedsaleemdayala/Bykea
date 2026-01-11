/* BYKEA STEPS JS */
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const image = document.getElementById("phoneImage");

  steps.forEach(step => {
    step.addEventListener("click", () => {
      // Remove active class from all
      steps.forEach(s => s.classList.remove("active"));
      // Add active to clicked
      step.classList.add("active");

      // Change image with fade
      image.style.opacity = 0;
      setTimeout(() => {
        image.src = step.dataset.img;
        image.style.opacity = 1;
      }, 150);
    });
  });
});

const faqQuestions = document.querySelectorAll('.faq-questions');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {

      const item = question.parentElement;

      // close all other items (Bykea jaisa behavior)
      document.querySelectorAll('.faq-item').forEach(faq => {
        if (faq !== item) {
          faq.classList.remove('active');
        }
      });

      // toggle current
      item.classList.toggle('active');
    });
  });

