
function login() {
  const account = document.getElementById("account").value;
  const password = document.getElementById("password").value;

  if (account === "114AC1008" && password === "114AC1008") {
    loadPage("pages/main.html");
  } else {
    alert("帳號或密碼錯誤");
  }
}

function togglePassword() {
  const pwdInput = document.getElementById("password");

  if (pwdInput.type === "password") {
    pwdInput.type = "text";
  } else {
    pwdInput.type = "password";
  }
}
