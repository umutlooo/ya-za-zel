const audio = document.getElementById('bgMusic');
const btn = document.getElementById('playBtn');

btn.onclick = () => {
  audio.play()
    .then(() => {
      btn.disabled = true;
      btn.innerText = "Şarkı Çalıyor";
      startConfetti();
    })
    .catch(error => {
      alert("Şarkı çalma hatası: " + error.message);
      console.error(error);
    });
};

function startConfetti() {
  const container = document.querySelector('.confetti-container');
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = (Math.random() * 5) + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    container.appendChild(confetti);
  }
}
