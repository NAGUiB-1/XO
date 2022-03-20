let boxs = document.querySelectorAll('.box'),
  title = document.querySelector('.title'),
  playAgain = document.querySelector('.pAgain'),
  xScore = document.getElementById('xScore'),
  oScore = document.getElementById('oScore'),
  x = 0,
  o = 0,
  overlay = document.getElementById('overlay');



let win = false

// Main Function responsible for Run the game and other Functions
let main = () => {

  // Loop on all boxes
  boxs.forEach(e => {

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
          // Run The random and emptyArray
          random(boxs, embtyArray(boxs))
          // Run The Check 
          winCheck(boxs)
          // Run The function to show or hide playAgain butto 
          playAgainFunc()

          checkEndGame()

        }

      })
    }


  )
}

// Run main function
main()

// add O in Random box depends on the embtyArray
let random = (boxes, embty) => {
  len = embty.length
  rand = embty[Math.floor(Math.random() * len)]
  if (len && !win) {
    boxs[rand].textContent = 'O'
    boxs[rand].classList.add('bg-red')

  }
}




// add all indexes for the embty box in array 
let embtyArray = boxs => {
  array = []
  i = 0
  boxs.forEach((e) => {
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



// This responsible for check who wins
let winCheck = (boxs) => {

  // X Win
  if (
    boxs[0].innerHTML === 'X' &&
    boxs[1].innerHTML === 'X' &&
    boxs[2].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[3].innerHTML === 'X' &&
    boxs[4].innerHTML === 'X' &&
    boxs[5].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[6].innerHTML === 'X' &&
    boxs[7].innerHTML === 'X' &&
    boxs[8].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[0].innerHTML === 'X' &&
    boxs[3].innerHTML === 'X' &&
    boxs[6].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[1].innerHTML === 'X' &&
    boxs[4].innerHTML === 'X' &&
    boxs[7].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[2].innerHTML === 'X' &&
    boxs[5].innerHTML === 'X' &&
    boxs[8].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[0].innerHTML === 'X' &&
    boxs[4].innerHTML === 'X' &&
    boxs[8].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }
  else if (
    boxs[2].innerHTML === 'X' &&
    boxs[4].innerHTML === 'X' &&
    boxs[6].innerHTML === 'X'
  ) {
    title.innerHTML = 'X Win'
    win = true
  }


  // O Win
  if (
    boxs[0].innerHTML === 'O' &&
    boxs[1].innerHTML === 'O' &&
    boxs[2].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[3].innerHTML === 'O' &&
    boxs[4].innerHTML === 'O' &&
    boxs[5].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[6].innerHTML === 'O' &&
    boxs[7].innerHTML === 'O' &&
    boxs[8].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[0].innerHTML === 'O' &&
    boxs[3].innerHTML === 'O' &&
    boxs[6].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[1].innerHTML === 'O' &&
    boxs[4].innerHTML === 'O' &&
    boxs[7].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[2].innerHTML === 'O' &&
    boxs[5].innerHTML === 'O' &&
    boxs[8].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[0].innerHTML === 'O' &&
    boxs[4].innerHTML === 'O' &&
    boxs[8].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }
  else if (
    boxs[2].innerHTML === 'O' &&
    boxs[4].innerHTML === 'O' &&
    boxs[6].innerHTML === 'O'
  ) {
    title.innerHTML = 'O Win'
    win = true
  }

  // No One Win
  if (!embtyArray(boxs).length && !win) {
    title.innerHTML = 'Draw';
    title.classList.add('bg-draw')
  }
  // Ui edit
  if (title.innerHTML === 'X Win') {
    title.classList.add('bg-gray')
    title.classList.remove('bg-red')
    title.classList.remove('bg-draw')
    x += 1
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
  boxs.forEach(e => {
    e.innerHTML = ''
    e.classList.remove('bg-gray')
    e.classList.remove('bg-red')

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
  if (x + o === 10) {

    overlay.classList.add('overlay')
    if (x > o) {
      overlay.textContent = 'X Win'
    } else if (o > x) {
      overlay.textContent = 'O Win'
    } else {
      overlay.textContent = 'Draw'

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
