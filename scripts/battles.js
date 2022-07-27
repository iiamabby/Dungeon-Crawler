/* Handles the fighting scene, using dice roll simulator */

const rollDice = () => {
    var ediceRoll = Math.floor(Math.random() * 6)
    var pdiceRoll = Math.floor(Math.random() * 6)
    var pbox = document.getElementById('playerRoll')
    var ebox = document.getElementById('enemyRoll')
    var winner = document.getElementById('winner')

    
    if(enemy.health > 0 && player.health > 0){
        pbox.innerHTML = pdiceRoll
        ebox.innerText = ediceRoll
        if(pdiceRoll > ediceRoll){
            enemy.health -= player.damage
            eh.innerHTML = 'Enemy health: ' + enemy.health
            winner.innerHTML = "You won this turn"
    
        }else if(ediceRoll > pdiceRoll){
            player.health -= enemy.damage
            ph.innerHTML = 'Player health: ' + player.health
            winner.innerHTML = "Enemy Won this turn"
            
        }else{
            winner.innerHTML = "Draw"

        }
        player.updateStats()

    }else{
        if(enemy.health <= 0){
            document.getElementById('combat-h').innerText = "Enemy Defeated"
            enImg.removeChild(enImg.lastChild);
            enImg.append(enemy1D)  
            enemy.image = enemy1D

        }else{
            document.getElementById('combat-h').innerText = "You where Defeated"
            plImg.removeChild(plImg.lastChild);
            plImg.append(playerImageD)  
            player.updateStats()

        } 
    }
  
    
}