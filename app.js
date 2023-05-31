window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransitioned))

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return

  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function removeTransitioned(e) {
  if (e.propertyName !== 'transform') return

  this.classList.remove('playing')
}
