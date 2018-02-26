const blocks = {
  i: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ]
    ],
    style: "hollow",
    offsets: [0, 2],
    rightOffsets: [4, 3]
  },
  j: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 1]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ]
    ],
    style: "dark",
    offsets: [1, 1, 1, 2],
    rightOffsets: [4, 3, 4, 4]
  },
  l: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 1, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 1]
      ]
    ],
    style: "light",
    offsets: [1, 1, 1, 2],
    rightOffsets: [4, 3, 4, 4]
  },
  o: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1]
      ]
    ],
    style: "hollow",
    offsets: [2],
    rightOffsets: [4]
  },
  s: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 1, 1, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ]
    ],
    style: "dark",
    offsets: [1, 2],
    rightOffsets: [4, 4]
  },
  t: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 0]
      ]
    ],
    style: "hollow",
    offsets: [1, 1, 1, 2],
    rightOffsets: [4, 3, 4, 4]
  },
  z: {
    grids: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 0, 1, 0]
      ]
    ],
    style: "light",
    offsets: [1, 2],
    rightOffsets: [4, 4]
  }
},
      levels = {
        0: [0xffffff, 0x2442e8],
        1: [0xffffff, 0x17a61b],
        2: [0xffffff, 0xBA1BBA],
        3: [0xffffff, 0x2442e8],
        4: [0xffffff, 0xE10F5A],
        5: [0xffffff, 0x61F69B],
        6: [0xffffff, 0xD62A17],
        7: [0xffffff, 0x7F22EC],
        8: [0xffffff, 0x2441E8],
        9: [0xffffff, 0xD62A17],
      };

console.log("displayer loaded");

let type = 'webGL';
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type);

const scl = 20;

function blx2pix(numBlocks, addition) {
  addition = addition || 0;
  return num;
}

let app = new PIXI.Application({width: 40*scl, height: 30*scl});

document.body.appendChild(app.view);

function updateBoard(game) {
  console.log("updating board");
  
  let board = game.board;
  
  for (var i = app.stage.children.length - 1; i >= 0; i--) {
    app.stage.removeChild(app.stage.children[i]);
  };

  for (var i = 0; i < board.length; i++) {
    let arr = board[i];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == 1) {
        let rectangle = new PIXI.Graphics();
        rectangle.beginFill(levels[game.level % 10][0]);
        rectangle.lineStyle(.125*scl, levels[game.level % 10][1], 1);
        rectangle.drawRect(j*scl, i*scl, scl - .25, scl - .25);
        rectangle.endFill();
        app.stage.addChild(rectangle);
      }
    }
  }
  
  console.log("displaying player piece");
  console.log(game.players);
  for (var player in game.players) {
    let pData = game.players[player];
    console.log(pData);
    console.log(player);
    for (var row = 0; row < 4 /*blocks[player.piece.type.grids[player.piece.rotation]].length*/; row++) {
      for (var block = 0; block < 4; block++) {
        if (blocks[pData.piece.type].grids[pData.piece.rotation][row][block] == 1) {
          console.log("drawing block");
          let rectangle = new PIXI.Graphics();
          rectangle.beginFill(levels[game.level % 10][0]);
          rectangle.lineStyle(.125*scl, levels[game.level % 10][1], 1);
          rectangle.drawRect((pData.piece.pos[0] + block) * scl, (pData.piece.pos[1] + row) * scl, scl - .25, scl - .25);
          rectangle.endFill();
          app.stage.addChild(rectangle);
        }
      }
    }
    // for (var row in blocks[player.piece.type.grids[player.piece.rotation]]) {
    //   for (var block in row) {
    //   }
    // }
  }
}

function makeArray(x, y) {
  var arr = new Array(y), i, l;
  for(i = 0, l = y; i < l; i++) {
      arr[i] = new Array(x);
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

var testGame = {};
testGame.board = makeArray(40, 30);
for (var i = 0; i < Math.floor(Math.random() * 50); i++) {
  testGame.board[Math.floor(Math.random() * 30)][Math.floor(Math.random() * 40)] = 1;
}
testGame.board[5][5] = 1;
testGame.board[0][0] = 1;
testGame.players = {'i2gjn': {piece: {type:i,rotation:0,position:[2,1]}}};
console.log(testGame.board);
//updateBoard(testGame);
