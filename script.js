let boxes = document.querySelectorAll('.box'),
  title = document.querySelector('.title'),
  playAgain = document.querySelector('.pAgain'),
  xScore = document.getElementById('xScore'),
  oScore = document.getElementById('oScore'),
  x = 0,
  o = 0,
  overlay = document.getElementById('overlay'),
  overlayContent = document.getElementById('overlayContent'),
  countDown = document.getElementById('countDown'),
  count_down =3;




let win = false

// Main Function responsible for Run the game and other Functions
let main = () => {

  // Loop on all boxes
  boxes.forEach(e => {

      // add Click evvent for boxes
      e.addEventListener('click', e => {
        // Check if the box empty and now wins
        if (
          e.target.textContent === '' &&
          !win
        ) {
          // add user choice 
          e.target.textContent = 'X';
          // Color the Choice
          e.target.classList.add('bg-gray')
          navigator.vibrate(20)
          winCheck(boxes)

          // Run The random and emptyArray
          if(!win){
          random(boxes, emptyArray(boxes))
            winCheck(boxes)

          }

          // Run The Check 

          // Run The function to show or hide playAgain butto 
          playAgainFunc()
          
          //Check end game
          checkEndGame()

        }

      })
    }


  )
}

// Run main function
main()

// add O in Random box depends on the emptyArray
let random = (boxes, empty) => {
  len = empty.length
  rand = empty[Math.floor(Math.random() * len)]


  if (len && !win) {

    // Give It Some AI
    // Handle cell 0
    if ((
        boxes[3].textContent === 'O' &&
        boxes[6].textContent === 'O' &&
        boxes[0].textContent === ''
      ) || (
        boxes[4].textContent === 'O' &&
        boxes[8].textContent === 'O' &&
        boxes[0].textContent === ''
      ) || (
        boxes[1].textContent === 'O' &&
        boxes[2].textContent === 'O' &&
        boxes[0].textContent === ''
      ) || (
        boxes[3].textContent === 'X' &&
        boxes[6].textContent === 'X' &&
        boxes[0].textContent === ''
      ) || (
        boxes[4].textContent === 'X' &&
        boxes[8].textContent === 'X' &&
        boxes[0].textContent === ''
      ) || (
        boxes[1].textContent === 'X' &&
        boxes[2].textContent === 'X' &&
        boxes[0].textContent === ''
      )

    ) {
      boxes[0].textContent = 'O'
      // Handle Cell 2
    } else if ((
        boxes[5].textContent === 'O' &&
        boxes[8].textContent === 'O' &&
        boxes[2].textContent === ''
      ) || (
        boxes[4].textContent === 'O' &&
        boxes[6].textContent === 'O' &&
        boxes[2].textContent === ''
      ) || (
        boxes[0].textContent === 'O' &&
        boxes[1].textContent === 'O' &&
        boxes[2].textContent === ''
      ) || (
        boxes[5].textContent === 'X' &&
        boxes[8].textContent === 'X' &&
        boxes[2].textContent === ''
      ) || (
        boxes[4].textContent === 'X' &&
        boxes[6].textContent === 'X' &&
        boxes[2].textContent === ''
      ) || (
        boxes[0].textContent === 'X' &&
        boxes[1].textContent === 'X' &&
        boxes[2].textContent === ''
      )

    ) {
      boxes[2].textContent = 'O'
      // handle cell 8
    } else if ((
        boxes[2].textContent === 'O' &&
        boxes[5].textContent === 'O' &&
        boxes[8].textContent === ''
      ) || (
        boxes[0].textContent === 'O' &&
        boxes[4].textContent === 'O' &&
        boxes[8].textContent === ''
      ) || (
        boxes[7].textContent === 'O' &&
        boxes[6].textContent === 'O' &&
        boxes[8].textContent === ''
      ) || (
        boxes[2].textContent === 'X' &&
        boxes[5].textContent === 'X' &&
        boxes[8].textContent === ''
      ) || (
        boxes[0].textContent === 'X' &&
        boxes[4].textContent === 'X' &&
        boxes[8].textContent === ''
      ) || (
        boxes[7].textContent === 'X' &&
        boxes[6].textContent === 'X' &&
        boxes[8].textContent === ''
      )) {
      boxes[8].textContent = 'O'
      // handle cell 6
    } else if ((
        boxes[0].textContent === 'O' &&
        boxes[3].textContent === 'O' &&
        boxes[6].textContent === ''
      ) || (
        boxes[2].textContent === 'O' &&
        boxes[4].textContent === 'O' &&
        boxes[6].textContent === ''
      ) || (
        boxes[8].textContent === 'O' &&
        boxes[7].textContent === 'O' &&
        boxes[6].textContent === ''
      ) || (
        boxes[0].textContent === 'X' &&
        boxes[3].textContent === 'X' &&
        boxes[6].textContent === ''
      ) || (
        boxes[2].textContent === 'X' &&
        boxes[4].textContent === 'X' &&
        boxes[6].textContent === ''
      ) || (
        boxes[8].textContent === 'X' &&
        boxes[7].textContent === 'X' &&
        boxes[6].textContent === ''
      )) {
      boxes[6].textContent = 'O'
      // handle cell 4
    } else if ((
        boxes[0].textContent === 'O' &&
        boxes[8].textContent === 'O' &&
        boxes[4].textContent === ''
      ) || (
        boxes[2].textContent === 'O' &&
        boxes[6].textContent === 'O' &&
        boxes[4].textContent === ''
      ) || (
        boxes[1].textContent === 'O' &&
        boxes[7].textContent === 'O' &&
        boxes[4].textContent === ''
      ) || (
        boxes[3].textContent === 'O' &&
        boxes[5].textContent === 'O' &&
        boxes[4].textContent === ''
      ) || (
        boxes[0].textContent === 'X' &&
        boxes[8].textContent === 'X' &&
        boxes[4].textContent === ''
      ) || (
        boxes[2].textContent === 'X' &&
        boxes[6].textContent === 'X' &&
        boxes[4].textContent === ''
      ) || (
        boxes[1].textContent === 'X' &&
        boxes[7].textContent === 'X' &&
        boxes[4].textContent === ''
      ) || (
        boxes[3].textContent === 'X' &&
        boxes[5].textContent === 'X' &&
        boxes[4].textContent === ''
      )) {
      boxes[4].textContent = 'O'
      // handle cell 1
    } else if ((
        boxes[0].textContent === 'O' &&
        boxes[2].textContent === 'O' &&
        boxes[1].textContent === ''
      ) || (
        boxes[4].textContent === 'O' &&
        boxes[7].textContent === 'O' &&
        boxes[1].textContent === ''
      ) || (
        boxes[0].textContent === 'X' &&
        boxes[2].textContent === 'X' &&
        boxes[1].textContent === ''
      ) || (
        boxes[4].textContent === 'X' &&
        boxes[7].textContent === 'X' &&
        boxes[1].textContent === ''
      )) {
      boxes[1].textContent = 'O'
      // handle cell 3
    } else if ((
        boxes[0].textContent === 'O' &&
        boxes[6].textContent === 'O' &&
        boxes[3].textContent === ''
      ) || (
        boxes[4].textContent === 'O' &&
        boxes[5].textContent === 'O' &&
        boxes[3].textContent === ''
      ) || (
        boxes[0].textContent === 'X' &&
        boxes[6].textContent === 'X' &&
        boxes[3].textContent === ''
      ) || (
        boxes[4].textContent === 'X' &&
        boxes[5].textContent === 'X' &&
        boxes[3].textContent === ''
      )) {
      boxes[3].textContent = 'O'
      // handle cell 5
    } else if ((
        boxes[2].textContent === 'O' &&
        boxes[8].textContent === 'O' &&
        boxes[5].textContent === ''
      ) || (
        boxes[3].textContent === 'O' &&
        boxes[4].textContent === 'O' &&
        boxes[5].textContent === ''
      ) || (
        boxes[2].textContent === 'X' &&
        boxes[8].textContent === 'X' &&
        boxes[5].textContent === ''
      ) || (
        boxes[3].textContent === 'X' &&
        boxes[4].textContent === 'X' &&
        boxes[5].textContent === ''
      )) {
      boxes[5].textContent = 'O'
      // handle cell 7
    } else if ((
        boxes[6].textContent === 'O' &&
        boxes[8].textContent === 'O' &&
        boxes[7].textContent === ''
      ) || (
        boxes[1].textContent === 'O' &&
        boxes[4].textContent === 'O' &&
        boxes[7].textContent === ''
      ) || (
        boxes[6].textContent === 'X' &&
        boxes[8].textContent === 'X' &&
        boxes[7].textContent === ''
      ) || (
        boxes[1].textContent === 'X' &&
        boxes[4].textContent === 'X' &&
        boxes[7].textContent === ''
      )) {
      boxes[7].textContent = 'O'
    } else {
      boxes[rand].textContent = 'O'

    }

  }
  // Add Color to O
  boxes.forEach(e => {
    if (e.textContent === 'O') {
      e.classList.add('bg-red')
    }

  })

}




// add all indexes for the empty box in array 
let emptyArray = boxes => {
  array = []
  i = 0
  boxes.forEach((e) => {
    if (e.textContent === '') {
      array.push(i)
    } else if (e.textContent === 'X') {
      array.splice(i, 1)
    }
    else if (e.textContent === 'O') {
      array.splice(i, 1)
    }
    i += 1

  })
  return array
}

let winColor = (n1, n2, n3) => {
  boxes[n1].classList.add('win')
  boxes[n2].classList.add('win')
  boxes[n3].classList.add('win')

}

// This responsible for check who wins
let winCheck = (boxes) => {

  // X Win
  if (
    boxes[0].innerHTML === 'X' &&
    boxes[1].innerHTML === 'X' &&
    boxes[2].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(0, 1, 2)
  }
  else if (
    boxes[3].innerHTML === 'X' &&
    boxes[4].innerHTML === 'X' &&
    boxes[5].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(3, 4, 5)

  }
  else if (
    boxes[6].innerHTML === 'X' &&
    boxes[7].innerHTML === 'X' &&
    boxes[8].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(6, 7, 8)
  }
  else if (
    boxes[0].innerHTML === 'X' &&
    boxes[3].innerHTML === 'X' &&
    boxes[6].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(0, 3, 6)

  }
  else if (
    boxes[1].innerHTML === 'X' &&
    boxes[4].innerHTML === 'X' &&
    boxes[7].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(1, 4, 7)

  }
  else if (
    boxes[2].innerHTML === 'X' &&
    boxes[5].innerHTML === 'X' &&
    boxes[8].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(2, 5, 8)
  }
  else if (
    boxes[0].innerHTML === 'X' &&
    boxes[4].innerHTML === 'X' &&
    boxes[8].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(0, 4, 8)
  }
  else if (
    boxes[2].innerHTML === 'X' &&
    boxes[4].innerHTML === 'X' &&
    boxes[6].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
    winColor(2, 4, 6)
  }


  // O Win
  if (
    boxes[0].innerHTML === 'O' &&
    boxes[1].innerHTML === 'O' &&
    boxes[2].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(0, 1, 2)
  }
  else if (
    boxes[3].innerHTML === 'O' &&
    boxes[4].innerHTML === 'O' &&
    boxes[5].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(3, 4, 5)
  }
  else if (
    boxes[6].innerHTML === 'O' &&
    boxes[7].innerHTML === 'O' &&
    boxes[8].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(6, 7, 8)

  }
  else if (
    boxes[0].innerHTML === 'O' &&
    boxes[3].innerHTML === 'O' &&
    boxes[6].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(0, 3, 6)

  }
  else if (
    boxes[1].innerHTML === 'O' &&
    boxes[4].innerHTML === 'O' &&
    boxes[7].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(1, 4, 7)

  }
  else if (
    boxes[2].innerHTML === 'O' &&
    boxes[5].innerHTML === 'O' &&
    boxes[8].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(2, 5, 8)

  }
  else if (
    boxes[0].innerHTML === 'O' &&
    boxes[4].innerHTML === 'O' &&
    boxes[8].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(0, 4, 8)

  }
  else if (
    boxes[2].innerHTML === 'O' &&
    boxes[4].innerHTML === 'O' &&
    boxes[6].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
    winColor(2, 4, 6)

  }

  // No One Win
  if (!emptyArray(boxes).length && !win) {
    title.innerHTML = 'Draw';
    title.classList.add('bg-draw')
  }
  // Ui edit
  if (title.innerHTML === 'X Win') {
    title.classList.add('bg-gray')
    title.classList.remove('bg-red')
    title.classList.remove('bg-draw')
    x += 1
    console.log(x)
    xScore.innerHTML = x



  } else if (title.innerHTML === 'O Win') {
    title.classList.add('bg-red')
    title.classList.remove('bg-gray')
    title.classList.remove('bg-draw')
    o += 1
    oScore.innerHTML = o


  }

}

// Togle Show and hide the Button 
let playAgainFunc = () => {

  if (win || title.innerHTML === 'Draw') {
    playAgain.classList.remove('hide')

    playAgain.classList.add('show')
  }
}


// This Function For RePlay the Game
playAgain.onclick = function() {

  // Loop For Remove boxes Value and colors
  boxes.forEach(e => {
    e.innerHTML = ''
    e.classList.remove('bg-gray')
    e.classList.remove('bg-red')
    e.classList.remove('win')



  });

  // Recall The game Main function
  main()
  // Resubmit The win value to flase
  win = false;
  // Edit Ui
  playAgain.classList.remove('show')
  title.innerHTML = 'XO Game'
  playAgain.classList.add('hide')

}


let checkEndGame = () => {
  if (x + o === 3) {

    overlay.classList.add('overlay')
    overlay.classList.remove('hideOverlay')
    name(countDown)

    if (x > o) {
      overlayContent.textContent = 'X Win'
    } else if (o > x) {
      overlayContent.textContent = 'O Win'
    } else {
      overlayContent.textContent = 'Draw'

    }
    overlay.addEventListener('click', e => {
      e.target.classList.add('hideOverlay')
      x = 0
      xScore.textContent = 0
      o = 0
      oScore.textContent = 0
      
    })

  }
}

function name (el){
  count_down =3

  let interv = setInterval(()=>{
    el.textContent = count_down
    count_down -=1
    if(count_down ===-1){
      clearInterval(interv)
      overlay.click()
      setTimeout(()=>playAgain.click(),20)
    }
    
    
  },1000)
 
}

