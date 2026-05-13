function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  // Usuário e senha fixos
  if (user === "admin" && pass === "1234") {
    errorMsg.style.display = "none";
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
}