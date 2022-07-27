/* Stores all the classes used in the game */

//background class to draw the background image.
class Background{
    constructor({position, image}){
        this.image = image,
        this.position = position
    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y );
    }
}
//class blueprint for misc objects (treasure etc)
class Misc {
    constructor({position, image, items}){
        this.image = image
        this.position = position
        this.items = items

    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

//class for player
class Player{
    constructor({position, image, inventory, equiped, damage, health}){
        this.image = image
        this.position = position
        this.inventory =  inventory
        this.equiped=  equiped
        this.damage = damage
        this.health = health

    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.image.width, this.image.height)
    }
    updateStats(){
        document.getElementById('damage').innerHTML = "<p> Damage " + this.damage +"</p>"
        document.getElementById('health').innerHTML = "<p> Health " + this.health + "</p>"

    }
    
}
//class for enemy
class Enemy{
    constructor({position, image, equiped, damage, health}){
        this.image = image
        this.position = position
        this.equiped=  equiped
        this.damage = damage
        this.health = health

    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.image.width, this.image.height)
    }
    combat(){
        
        //randomize who takes damage // could use an animated fight sequence? or use puzzles to see if you attack and then use random to see if monster attacks 
        // create attack sequence for player and enemy
        var popup = document.getElementById('combat-zone');
        popup.style.display = "block"
        var ph = document.getElementById('ph')
        var pd = document.getElementById('pd')
        ph.innerHTML = 'Player health: '+ player.health 
        pd.innerHTML = 'Player damage: ' + player.damage
        var eh = document.getElementById('eh')
        var ed = document.getElementById('ed')
        eh.innerHTML = 'Enemy health: ' + this.health
        ed.innerHTML = 'Enemy damage: ' + this.damage
        plImg.append(playerImage)
        enImg.append(enemy1)
    }

    
}
