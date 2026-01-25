// Web Audio API setup - the most modern audio API
let audioContext: AudioContext | null = null
let audioBuffer: AudioBuffer | null = null

// Initialize audio context and load sound
async function initAudio() {
  if (!audioContext) {
    audioContext = new AudioContext()

    // Fetch and decode the audio file
    const response = await fetch('/sounds/switch-on.mp3')
    const arrayBuffer = await response.arrayBuffer()
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  }
}

// Play the sound using Web Audio API
function playSound() {
  if (!audioContext || !audioBuffer) return

  const source = audioContext.createBufferSource()
  source.buffer = audioBuffer
  source.connect(audioContext.destination)
  source.start(0)
}

// Add click handlers to all links
document.addEventListener('astro:page-load', () => {
  const links = document.querySelectorAll('a')

  links.forEach((link) => {
    link.addEventListener('click', () => {
      playSound()
    })
  })
})

initAudio()
