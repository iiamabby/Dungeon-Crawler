
/* handles user inputs, equips and other events that happen in the game */


window.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()){
        case 'w':
            keys.w.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case 's':
            keys.s.pressed = true
            break;
        case 'd':
            keys.d.pressed = true
            break;

    }
});
//handle event for release key
window.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'w':
            keys.w.pressed = false
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break;
            default:
                break
    }
});


// popup alert for equipping the item to the player, not linked back to player model other than the iamage, damage needs to be increased
slot1.addEventListener('click', function(){
         player.image = knightSword
         popup.style.display = "block"
         player.equiped = {
            image: player.inventory.slot1.image,
            damage: player.inventory.slot1.stats
         }
         player.damage += player.equiped.damage
         popup.querySelector('p').innerText= "Sword equipped: 15 damage ( press k to unequip)"
         player.updateStats()
})
document.getElementById('close').addEventListener('click', function(){
    popup.style.display = "none"
})
slot2.addEventListener('click', function(){
    popup.style.display = "block"
    player.health += player.inventory.slot2.stats
    popup.querySelector('p').innerText= "Health potion used: 30 life points gained"
    player.updateStats()
})

var lastKey = [] 

//unequip the sword, needs to make use of the objects as to not rely on hardcoding values
window.addEventListener('keydown', (e) => {
    lastKey.push(e.key)
    if(e.key == 'k'){
        player.image = playerImage
        player.damage -= player.equiped.damage
        popup.style.display = "block"
        document.querySelector('p').innerText= "Sword unequipped: -15dmg"
        player.updateStats()


    }
   
})