const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function selectForm(showSignup) {
  signupForm.classList.toggle("active", showSignup);
  loginForm.classList.toggle("active", !showSignup);
}

window.selectForm = selectForm;

function selectFormFromHash() {
  selectForm(window.location.hash === "#signup");
}

window.addEventListener("hashchange", selectFormFromHash);
selectFormFromHash();

document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.passwordTarget);
    const icon = button.querySelector("i");
    const showPassword = input.type === "password";

    input.type = showPassword ? "text" : "password";
    icon.classList.toggle("fa-eye", !showPassword);
    icon.classList.toggle("fa-eye-slash", showPassword);
    button.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
    button.setAttribute("aria-pressed", String(showPassword));
  });
});
