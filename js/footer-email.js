/*==================== EMAIL FORM IN FOOTER ====================*/
const successEmailButton = document.querySelector(".footer__modal-button");
const closeSuccessEmailModal = document.querySelector(".close-icon");
const subscribeButton = document.querySelector(".email__submit-button");
const emailModal = document.querySelector(".footer__modal-email");

subscribeButton.addEventListener("click", () => {
  emailModal.classList.add("show");
});

closeSuccessEmailModal.addEventListener("click", () => {
  emailModal.classList.remove("show");
});
successEmailButton.addEventListener("click", () => {
  emailModal.classList.remove("show");
});
