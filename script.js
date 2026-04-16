let userRole = "viewer";

// 🔐 USERS (temporaire)
const users = {
  "rov": { password: "3040", role: "admin" },
  "guest": { password: "5611", role: "viewer" }
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

    // 🔒 Bloquer si viewer
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
