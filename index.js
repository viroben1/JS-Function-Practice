// Your Code Here
function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(secondAnswer === 'follow'){
        follow()
     } else if(secondAnswer === 'continue'){
         continueThrough()
     }
    if(secondAnswer === 'back'){
        start()
    }
}

function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if(secondAnswer === 'past the dragon'){
        pastTheDragon()
     } else if(secondAnswer === 'away from the dragon'){
         AwayFromTheDragon()
     }
    if(secondAnswer === 'back'){
        start()
    }
}

function follow(){
    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
    if(thirdAnswer === 'stay'){
        window.alert('You live happily amongst the cats for the rest of your days.')
     } else if(thirdAnswer === 'spread the word') {
         window.alert('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
     }
    if(thirdAnswer === 'back'){
        goLeft()
    }
}

function continueThrough() {
    let thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')
    if(thirdAnswer === 'ladder'){
        window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
     } else if(thirdAnswer === 'staircase') {
         window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
     }
    if(thirdAnswer === 'back'){
        goLeft()
    }
}

function pastTheDragon(){
    let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:')
    if(thirdAnswer === 'stay'){
        window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
     } else if(thirdAnswer === 'run') {
         window.alert('Quickly, you run back to the cave\'s entrance. Sheepish, you return home.')
     }
    if(thirdAnswer === 'back'){
        goRight()
    }
}

function AwayFromTheDragon() {
    let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
    if(thirdAnswer === 'draw it'){
        window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
     } else if(thirdAnswer === 'pick it') {
         window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
     }
    if(thirdAnswer === 'back'){
        goRight()
    }
}

start()