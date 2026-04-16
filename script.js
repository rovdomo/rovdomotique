let userRole = "admin"; // change en "viewer" pour test

// 🔐 bloque si viewer
if (userRole === "viewer") {
  window.onload = () => {
    document.querySelectorAll("button").forEach(btn => {
      btn.disabled = true;
    });
  };
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
