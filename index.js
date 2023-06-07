const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

// Create map
const image = new Image()
image.src = './image/kiaras_map_zoomed.png'

const playerImage = new Image()
playerImage.src = 'image/fly_right.png'

class Sprite {
    constructor({position, velocity, image, frames = {max: 1}}) {
        this.position = position
        this.image = image

    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({position: {x: 0, y: -560}, image: image})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

let i = 0

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    if (i % 2 === 0 || i % 5 === 0 || i % 10 === 0) {
        c.drawImage(
            playerImage, 
            (playerImage.width / 3) * 2,
            0,
            playerImage.width,
            playerImage.height,
            canvas.width / 2 - (playerImage.width / 3) / 1.5, 
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width,
            playerImage.height,
        )
    } else if (i % 1 === 0 || i % 3 === 0 || i % 4 === 0 || i % 9 === 0 || i % 6 === 0 || i % 7 === 0 || i % 8 === 0) {
        c.drawImage(
            playerImage, 
            0,
            0,
            playerImage.width / 3,
            playerImage.height,
            canvas.width / 2 - (playerImage.width / 3) / 1.5, 
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width / 3,
            playerImage.height,
        )
    }
    
    if (keys.w.pressed && lastKey === 'w') background.position.y += 3
    else if (keys.a.pressed && lastKey === 'a') background.position.x += 3
    else if (keys.s.pressed && lastKey === 's') background.position.y -= 3
    else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3

    i += 1
    setTimeout(() => {  console.log("waiting"); }, 1000000);
}
animate()

// function animate() {
//     window.requestAnimationFrame(animate)
//     background.draw()
//     c.drawImage(
//         playerImage, 
//         currCrop,
//         0,
//         currCrop + moveHowMuch,
//         playerImage.height,
//         canvas.width / 2 - (playerImage.width / 3) / 1.5, 
//         canvas.height / 2 - playerImage.height / 2,
//         currCrop + moveHowMuch,
//         playerImage.height,
//     )
//     if (currCrop === (playerImage.width / 3) * 2) {
//         currCrop = 0
//     } else {
//         currCrop += moveHowMuch
//     }
    

//     if (keys.w.pressed && lastKey === 'w') background.position.y += 3
//     else if (keys.a.pressed && lastKey === 'a') background.position.x += 3
//     else if (keys.s.pressed && lastKey === 's') background.position.y -= 3
//     else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3
// }

let lastKey = ''

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break

        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break

        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break

        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break

        case 'a':
            keys.a.pressed = false
            break

        case 's':
            keys.s.pressed = false
            break

        case 'd':
            keys.d.pressed = false
            break
    }
})


