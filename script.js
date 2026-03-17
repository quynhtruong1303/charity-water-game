// Otterly Clean! – Prototype
// Screen navigation + static game-screen setup. No game logic yet.

// ---------- Screen navigation ----------
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Start Shift → Game Screen
document.getElementById('start-btn').addEventListener('click', () => {
  showScreen('game-screen');
});

// Start Another Shift → Start Screen
document.getElementById('replay-btn').addEventListener('click', () => {
  showScreen('start-screen');
});

// ---------- Jerry-can cleanliness bar ----------
// cleanliness is 0–100; each can represents 10%
function renderJerryCans(cleanliness) {
  const row = document.getElementById('jerry-can-row');
  row.innerHTML = '';
  const filled = Math.round(cleanliness / 10);   // 0–10

  for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    img.src = 'img/water-can.png';
    img.alt = 'jerry can';
    img.className = 'jerry-can' + (i < filled ? '' : ' empty');
    row.appendChild(img);
  }

  document.getElementById('cleanliness-pct').textContent = cleanliness + '%';
}

// Initialise game screen with placeholder 80% cleanliness
renderJerryCans(80);

// Prototype: clicking a trash item removes it (visual only)
document.getElementById('pool-zone').addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-item')) {
    e.target.remove();
  }
});
