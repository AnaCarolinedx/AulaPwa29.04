function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");
  
  const rm = "25500";

  if (user === rm && pass === rm) {
    errorMsg.style.display = "none";
    successMsg.style.display = "block";

    setTimeout(() => {
      window.location.href = "curiosidades.html";
    }, 1500);

  } else {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
}