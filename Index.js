
// const modal = document.getElementById("modal");

// const btn = document.getElementById("btn");

// btn.onclick = function() {
//   modal.style.display = "hidden";
// }

const span = document.getElementById('counter-display');
function decrement() {
  let count = 2;
  let isThereTimeStill = true;
  while (count > 0) {
  count -= 1;
  console.log(typeof count);
  span.innerHTML = count;
  }
  
  // else {
  //   isThereTimeStill = false;
  //   count = "You've run out of times !";
  //   span.innerHTML = count;
  // }
  // console.log(typeof count);
  }

const interval = setInterval(decrement, 6000);

function myStopFunction() {
  clearInterval(interval);
}


const myGameArea = {
  canvas: document.getElementById('castle'),
  frames: 0,
  start: function () {
    this.context = this.canvas.getContext('2d');
    var background = new Image();
    background.src = "Japanese-Castle.jpg";
    background.onload = function() {
        this.context.drawImage(background, 0, 0);
    }
    this.context.fillStyle = 'purple';
    this.context.beginPath();
    this.context.moveTo(50, 50);
    this.context.lineTo(250, 50);
    this.context.stroke();
    this.context.moveTo(250, 50);
    this.context.lineTo(250, 100);
    this.context.stroke();
    this.context.closePath();

//     this.interval = setInterval(updateGameArea, 2000)
},
  clear: function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
}

console.log(myGameArea);
myGameArea.start();

//
const canvas2 = document.getElementById("other");
const ctx = canvas2.getContext('2d');

function drawLabyrinth() {
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();
ctx.moveTo(200, 50);
ctx.lineTo(200, 180);
ctx.stroke();
ctx.closePath();
ctx.moveTo(200, 180);
ctx.lineTo(350, 180);
ctx.stroke();
ctx.closePath();
ctx.moveTo(80, 100)
ctx.lineTo(80, 250);
ctx.stroke();
ctx.closePath();
}





// btn = document.getElementsByTagName("button");
// btn.addEventListener('click', drawLab());

class Zombie {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 5;
    this.vy = 2;
 
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = './tux-161365_640.png';
  }
  // update() {
  //   const context = myGameArea.context;
  //   this.draw();
  // }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
}
}

const zombie = new Zombie(25, 25);
const zombie2 = new Zombie(40, 40);
const zombie3 = new Zombie(150, 300);
const zombie4 = new Zombie(500, 20);





class Player {
  constructor(x, y) {
    this.x = 30;
    this.y = 30;
 
    // Load the image
    const imgPlayer = new Image();
    imgPlayer.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = imgPlayer;
      this.draw();
    });
    imgPlayer.src = './man-g8ee15bac5_640.png';
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 120, 120);
  }
}

//Should appear.
 
const player = new Player();

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 38:
        player.moveUp();
        console.log('up', player);
        break;
      case 40:
        player.moveDown();
        console.log('down', player);
        break;
      case 37:
        player.moveLeft();
        console.log('left', player);
        break;
      case 39:
       player.moveRight();
        console.log('right', player);
        break;
    }
    updateCanvas();
  });


  function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  player.draw();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  zombie.x += zombie.vx;
  zombie.y += zombie.vy;
  drawLabyrinth();
}

updateCanvas();

//Image de la porte. 

const door = new Image();
door.src = 'door.jpg';

