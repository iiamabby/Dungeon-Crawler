
/* Sotres the initalization of classes, images and html elements */

const canvas = document.getElementById('mainCanvas')
const ctx = canvas.getContext('2d')
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const inventory = document.getElementsByClassName("inventory")
const slot1 = document.getElementById("inv-slot1")
const slot2 = document.getElementById("inv-slot2")
const startScreen =document.getElementById("startScreen")
const start = document.getElementById("startGame")
const popup = document.getElementById("popupbox")
const plImg = document.getElementById("playerImage")
const enImg = document.getElementById("enemyImage")

canvas.width = vw
canvas.height = vh
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height)
//450% for background
const backgroundLvl1 = new Image()
backgroundLvl1.src = 'images/background-lvl1.png'
//16px x 400% = 72px
//player images
const playerImage = new Image()
playerImage.src = 'images/KnightIdle.png'
const playerImageR = new Image()
playerImageR.src = 'images/KnightIdle-right.png'
const playerImageT = new Image()
playerImageT.src = 'images/knightTopView.png'
const playerImageD = new Image()
playerImageD.src = 'images/KnightDead.png'
const knightSword = new Image()
knightSword.src = 'images/knightSword.png'
//550% for character zoom // 
//misc images
const chestImage = new Image()
chestImage.src = 'images/treasure.png'
const sword = new Image()
sword.src = 'images/sword.png'
const healthPotion = new Image()
healthPotion.src = 'images/healthPotion.png'

//enemy images
const enemy1 = new Image()
enemy1.src = 'images/enemy1.png'
const enemy1D = new Image()
enemy1D.src = 'images/enemyDead.png'

//array object to store key pressed boolean value
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
    }

}

const closeC = () => {
    var popup = document.getElementById('combat-zone');
    popup.style.display = "none"
}

// Object Initalizing using the classes created in the classes.js
const background = new Background({
    image: backgroundLvl1,
    position: {
        x: 0,
        y: 0
    }
})
let player = new Player({
    image: playerImage,
    position:{
        x:300,
        y:500
    },
    health: 100,
    damage: 5

})
const treasure = new Misc({
    position:{
        y: 136,
        x:136
    },
    items: {

        slot1: {
            image: sword,
            stats: 15
        },
        slot2:{
            image:healthPotion,
            stats: 30
        }
       
    },
    image: chestImage
})
const enemy = new Enemy({
    image: enemy1,
    position:{
        x:800,
        y:500
    },
    health: 45,
    damage: 20

})