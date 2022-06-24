const settings = ['Amazon','train in Switzerland','underground Artic Bunker','Gobi Desert, Inner Mongolia']
const weathers = ['regional flooding','hail the size of cats','apocolyptic drought','worldwide thunderstorm','sandstorm']
const cars = ['Mazda Miatta','F150','your old horse','1969 Corvette','scooter']
const enemies = ['Russian spy ring','zombie firefighters','robot dogs','the largest Mob in Montreal','ZOMBIES']
const obstacle = ['spped across a giant frozen lake','jump across a cliff in order to clear a broken bridge',
    'jump on to a moving helicopter in order to deliver the vaccine','sell your vehicle in order to continue climbing a 30,000ft peak',
    'burn the car now and fight your enemy while you can']
const boss = ['giant ant with legs the height of a house','the robot brain creating this simulation','the most powerful Wizard in the Universe',
                'leader of the Free World being controlled by an Evil Villain','a giant, undead ZOMBIE elephant']
const weapons = ['knife','samurai sword','laser gun','two hatchets','a broom']
const finalMove = ['move forward and fight with everything you have','drive straight though and see if they do not notice',
                    'try and form an aliance','drive the vehicle as hard as you can into the enemy','beg for mercy, but secretly have a plan to attack',
                        'use the force']
const outcomes = ['The world is saved!','You are caught on your way!','You achieve victory!','You summon the force and fight boldy!',
                    'All those kungfu movies paid off! You win!']

let playerName = prompt( "Welcome\n\nEnter your User Name below:\n\n" )  
console.log( playerName )

const gameOn = ( user ) => {
    let startGame = confirm( `${user}, the road ahead is steep\n\nAre you ready to climb?\n\n` )
    if ( startGame ) {
        return true 
    }
    else { 
        return false 
    }
}

const genRand = () => {
    let randNum = Math.ceil( Math.random()*3 ) 
    return randNum
}

let playingGame = gameOn( playerName ) 
console.log(playingGame)
 while ( playingGame ) {
    let setChoice = genRand()
    console.log(setChoice)
    let startMsg = alert( `You have spend the last two weeks escaping\n\nfom ${settings[setChoice]} and your enemy is catching up!  `)  

    let randWeather = genRand()
    let eatNow = confirm(`This might be your last opportunity to recharge\n\nbefore the ${weathers[randWeather]} catches up!\n\nDrink the Elixir now or wait?`)
    console.log(eatNow)

    if (eatNow) {
        alert("Good Call!")
        energy = true
    }
    else {
        alert("Feeling weak, but losing time!")
        energy = false
    }
    console.log(energy)

    let door = parseInt(prompt( "You find fives garage doors in an abandoned building\n\nChoose one for an escape vehicle!\n\nType only one number from one to five!" ))

    const chooseRide = ( garage ) => {
        switch ( garage ) {
            case 1: return cars[0] 
            case 2: return cars[1] 
            case 3: return cars[2] 
            case 4: return cars[3] 
            case 5: return cars[4] 
            default: return cars[0]
        }
    }

    ride = chooseRide( door ) 
    let getRide = alert(`It's a ${ride} !!!`)

    let path = [ genRand(),genRand(),genRand(),genRand(),genRand() ] 

    let journey = confirm( `Although the journey is dangerous and your ${ride} is almost completely out of gas. After all the ${enemies[path[0]]} are catching up. Your only option is to ${obstacle[path[1]]} so that you can finally defeat ${boss[path[2]]} `)


    if (journey) {
        playingGame = true
    }
    else {
        playingGame = false
    }

    if (energy) {
        alert( `It feels like the Elixir is kicking in! Time to use your ${weapons[path[3]]} in order to ${finalMove[path[4]]} !!!!!\n\n Click 'OK' to see what happens!`)
    }
    else {
        alert( `Without the Elixir ${finalMove[path[4]]} with your ${weapons[path[3]]} might not work!!!!\n\n Click 'OK' to see what happens!`)
    }

    let outcome = genRand()

    const whatHappens = ( randomNum ) => {
        switch (outcome) {
            case 0: return outcomes[outcome] 
            case 1: return outcomes[outcome] 
            case 2: return outcomes[outcome] 
            case 3: return outcomes[outcome] 
            case 4: return outcomes[outcome] 
            default: return outcomes[0] 

        }
    }

    let again = confirm( `${whatHappens( outcome )}\n\nPLAY AGAIN?`)

    if (again) {
        playingGame = true
    }
    else {
        playingGame = false
    }
}

let rating = prompt("On a scale of 1 - 10 rate your journey!")













 



// let randomStart = Math.floor( Math.random()*10 ) 
// console.log( randomStart )

// while ( playingGame) {


//     // let randomStart = Math.floor( Math.random()*10 ) 
//     // console.log( randomStart )

//     // break;










// }




