let userRole = "viewer";

// 🔐 USERS
const users = {
  "rov": { password: "3040", role: "admin" },
  "guest": { password: "5402", role: "viewer" }
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

// GRAPH
const ctx = document.getElementById('chart')?.getContext('2d');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
      datasets: [{
        label: 'Consommation (kWh)',
        data: [2, 3, 1.5, 4, 2.5]
      }]
    }
  });
}

// LUMIERE
async function lightOn() {
  await fetch("http://localhost:3000/light/on", { method: "POST" });
  document.getElementById("lightStatus").innerText = "ON";
}

async function lightOff() {
  await fetch("http://localhost:3000/light/off", { method: "POST" });
  document.getElementById("lightStatus").innerText = "OFF";
}
}
