function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  if(!audio || !key) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

function removeTransform() {
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(x => x.addEventListener('transitionend', removeTransform));

window.addEventListener('keydown', playSound);
