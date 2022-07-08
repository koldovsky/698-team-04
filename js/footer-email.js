/*==================== EMAIL FORM IN FOOTER ====================*/
const successEmailButton = document.querySelector(".footer__modal-button");
const closeSuccessEmailModal = document.querySelector(".close-icon");
const subscribeButton = document.querySelector(".email__submit-button");
const emailModal = document.querySelector(".footer__modal-email");

// subscribeButton.addEventListener("click", () => {
//   emailModal.classList.add("show");
// });

closeSuccessEmailModal.addEventListener("click", () => {
  emailModal.classList.remove("show");
});
successEmailButton.addEventListener("click", () => {
  emailModal.classList.remove("show");
});

(function() {
  const form = document.querySelector('.footer__subscribe-form');
  
  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.querySelector('.contact-form-status');
    const data = JSON.stringify({
        email: document.querySelector('.footer__subscribe-form input[name=user-email]').value
    });
    try {
      await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });
      emailModal.classList.add("show");
      form.reset();
    } catch {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
  }
  form.addEventListener("submit", handleSubmit)    
})();