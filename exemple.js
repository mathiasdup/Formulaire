const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function maj(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

let check = array => {
  array.forEach(function(input) {
    if (input.value === "") {
      showError(input, `${maj(input)} incorrect`);
    } else {
      showSuccess(input);
    }
  });
};

let checkEmail = input => {
  if (validateEmail(input.value)) {
    showSuccess(input);
  } else {
    showError(input, `${maj(email)} incorrect`);
  }
};

form.addEventListener("submit", e => {
  e.preventDefault();

  check([username, email, password, password2]);
  checkEmail(email);
});
