console.log("displayer loaded");

let type = 'webGL';
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type);

const scl = 20;

function blx2pix(numBlocks, addition) {
  addition = addition || 0;
  return num
}

let app = new PIXI.Application({width: 40*scl, height: 30*scl});

document.body.appendChild(app.view);

function updateBoard(board) {
  for (var i = 0; i < board.length; i++) {
    let arr = board[i];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == 1) {
        let rectangle = new Graphics();
        rectangle.beginFill(0x66CCFF);
        
      }
    }
  }
}
