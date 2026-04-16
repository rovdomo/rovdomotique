let userRole = "viewer";

// 🔐 USERS
const users = {
  "rov": { password: "1234", role: "admin" },
  "guest": { password: "0000", role: "viewer" }
};

// 🔥 attendre chargement
window.onload = () => {
  document.getElementById("dashboard").style.display = "none";
};

function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (users[u] && users[u].password === p) {

    userRole = users[u].role;

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("role").innerText =
      (userRole === "admin") ? "Mode Admin 🔓" : "Mode Lecture 👀";

    // 🔒 bloque viewer
    if (userRole === "viewer") {
      document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
      });
    }

  } else {
    alert("❌ Mauvais identifiants");
  }
}

// 🚪 PORTAIL
function openGate() {
  document.getElementById("gateStatus").innerText = "Ouvert";
}

function closeGate() {
  document.getElementById("gateStatus").innerText = "Fermé";
}

// 💡 LUMIERE
function toggleLight() {
  let el = document.getElementById("lightStatus");
  el.innerText = (el.innerText === "OFF") ? "ON" : "OFF";
}
