import { decode } from 'blurhash'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function setupBlurhash() {
  const images = document.querySelectorAll('img[data-blurhash]')

  images.forEach((img: Element) => {
    const htmlImg = img as HTMLImageElement
    const blurhash = htmlImg.dataset.blurhash

    if (!blurhash || htmlImg.complete) return

    // Create canvas for blurhash
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.objectFit = 'cover'

    // Decode and draw blurhash
    const pixels = decode(blurhash, 32, 32)
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const imageData = ctx.createImageData(32, 32)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)

      // Insert canvas before image
      htmlImg.parentElement?.style.setProperty('position', 'relative')
      htmlImg.parentElement?.insertBefore(canvas, htmlImg)

      // Remove canvas when image loads
      htmlImg.addEventListener(
        'load',
        () => {
          canvas.remove()
        },
        { once: true },
      )
    }
  })
}

// // Uncomment the following lines if you want to enable blurhashes
// document.addEventListener('astro:page-load', setupBlurhash)
// setupBlurhash()
