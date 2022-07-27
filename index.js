
/* Javascript web game: Dungeon Crawler */
/* Developed by Abigail Crimlis */

/* Handles the animate and draw events */

//Display the start screen and call the init

window.onload = () => {
    startScreen.style.display = "block"
    start.addEventListener("click",e => {
        init()

    })
}

//start game
function init(){
    startScreen.style.display = "none"
    animate()
}


function animate(){
    window.requestAnimationFrame(animate)
    player.updateStats()
    background.draw()
    treasure.draw()
    enemy.draw()

    //when player interacts with the treasure box 
    if(player.position.y  <=  treasure.position.y   )
    {
        player.inventory = { 
            slot1: {
                image: treasure.items.slot1.image,
                stats: treasure.items.slot1.stats,

            },
            slot2: {
                image: treasure.items.slot2.image,
                stats: treasure.items.slot2.stats,
            }

        }
        popup.style.display = "block"
        popup.querySelector("p").innerHTML = "<h1> Treasure </h1> </br> Sword: 15 Damage </br> Health Potion: 30"

         document.getElementById("inv-slot1").appendChild(player.inventory.slot1.image);
         document.getElementById("inv-slot2").appendChild(player.inventory.slot2.image);

     
    }
    //console.log(player.position.x, player.position.y)
       //when player interacts with the enemy
        //y = 320 && 585  // x = 723 && 455

        if(player.position.y  >=  305 && player.position.y <= 585 && player.position.x >=  723  && player.position.x >= 455 && enemy.health > 0)
        {
            enemy.combat()
                
        }
        if(player.health <= 0 ){
            player.image = playerImageD
        }
        //hardcoded boundaries 
        if(background.position.y  == player.position.y){
            keys.w.pressed = false
           }
    
        if(player.position.x >=  1700 ){
            keys.d.pressed = false
           }
    
        if(player.position.y >=  726 ){
            keys.s.pressed = false
           }
        if(player.position.x <=  120 ){
            keys.a.pressed = false
           }
    
        //move player position on keystroke only if not dead
        if(player.health > 0){
    
            if(keys.w.pressed){
                
                player.position.y -= 5 
            }
    
            if(keys.a.pressed){
                    
                player.position.x -= 5
                player.image = playerImageR
    
            }
            if(keys.s.pressed){
    
                player.position.y += 5
    
            }
            if(keys.d.pressed){
    
                player.position.x += 3
                player.image = playerImage
    
    
            }
        }
    //y 180
    //x 1275 
    //exit door
    if(player.position.x >= 1275 && player.position.y >= 180){
        popup.style.display = "block"
        document.getElementById('close').addEventListener('click', function(){
            popup.style.display = "none"
        })
        if(enemy.health <= 0){
            popup.querySelector('p').innerHTML = "<h1> Level 1 Complete </h1> </br> <p> The town is forever in your debt</p>"
            
        }
        else{
            popup.querySelector('p').innerText = "You must defeat the slime king first"

        }
    }
    
   player.draw()


}

