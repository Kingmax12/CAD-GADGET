const authModal = document.getElementById("auth-modal");
const authModalFrame = document.getElementById("auth-modal-frame");
const authModalClose = authModal.querySelector(".auth-modal-close");
let previouslyFocusedElement;

function openAuthModal(mode) {
  previouslyFocusedElement = document.activeElement;
  const authPage = authModalFrame.contentWindow;
  if (typeof authPage.selectForm === "function") {
    authPage.selectForm(mode === "signup");
    authPage.location.hash = mode;
  } else {
    authModalFrame.src = `LOGIN.HTML#${mode}`;
  }
  authModal.hidden = false;
  document.body.style.overflow = "hidden";
  authModalClose.focus();
}

function closeAuthModal() {
  authModal.hidden = true;
  document.body.style.overflow = "";
  if (previouslyFocusedElement instanceof HTMLElement) {
    previouslyFocusedElement.focus();
  }
}

document.querySelectorAll("[data-auth-mode]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openAuthModal(link.dataset.authMode);
  });
});

authModalClose.addEventListener("click", closeAuthModal);
authModal.addEventListener("click", (event) => {
  if (event.target === authModal) {
    closeAuthModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !authModal.hidden) {
    closeAuthModal();
  }
});
