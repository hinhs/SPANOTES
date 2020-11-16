var myGamePiece;
var newGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "blue", 10, 180);
    newGamePiece=new component (30, 30, "green", 10,100);
    //Create a new component here, Let's say gren
    

    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 460;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }

    this.crashWith = function(otherobj) {
      
      
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);


        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = false;
       if (myright == otherleft && mybottom >= othertop && mytop <= otherbottom) {
          crash = true;
        }
        if (myleft == otherright && mybottom >= othertop && mytop <= otherbottom) {
          crash = true;
        }
         if (mytop == otherbottom && myright >= otherleft && myleft <= otherright) {
          crash = true;
        }
         if (mybottom == othertop && myright >= otherleft && myleft <= otherright) {
          crash = true;
        }
      
        return crash;
    }

    this.randomPos = function() {
      this.x = Math.floor(Math.random() * 200) + 1;;
      this.y = Math.floor(Math.random() * 200) + 1;;
      
      return ;
    }

      
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
    newGamePiece.newPos();
    newGamePiece.update();
    
    //Edit this if statement if needed
    if (myGamePiece.crashWith(newGamePiece)) {
      newGamePiece.randomPos();

      return;
    } 
}
//the purpose of the update is to put the background over the old image of the square, so that only one square is on the page at a time, like a flip book

//Hmmmm how would you mess with the speed so your thing can move up and down?
function moveup() {
  myGamePiece.speedY -= 1;
  myGamePiece.speedX=0 
}
function movedown(){
  myGamePiece.speedY =1;
  myGamePiece.speedX=0
}
function stop(){
  myGamePiece.speedY=0;
  myGamePiece.speedX=0;
}
function moveleft(){
  myGamePiece.speedX-=1;
  myGamePiece.speedY = 0;
}
function moveright(){
  myGamePiece.speedX=1;
  myGamePiece.speedY=0;
}