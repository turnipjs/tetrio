//  ▄▄▄▄▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄▄▄    ▄▄       ▄▄    ▄▄▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌  ▐░░░░░░░░░░░▌  ▐░░▌     ▐░░▌  ▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀▀▀   ▐░█▀▀▀▀▀▀▀█░▌  ▐░▌░▌   ▐░▐░▌  ▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌            ▐░▌       ▐░▌  ▐░▌▐░▌ ▐░▌▐░▌  ▐░▌
// ▐░▌ ▄▄▄▄▄▄▄▄   ▐░█▄▄▄▄▄▄▄█░▌  ▐░▌ ▐░▐░▌ ▐░▌  ▐░█▄▄▄▄▄▄▄▄▄
// ▐░▌▐░░░░░░░░▌  ▐░░░░░░░░░░░▌  ▐░▌  ▐░▌  ▐░▌  ▐░░░░░░░░░░░▌
// ▐░▌ ▀▀▀▀▀▀█░▌  ▐░█▀▀▀▀▀▀▀█░▌  ▐░▌   ▀   ▐░▌  ▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌       ▐░▌  ▐░▌       ▐░▌  ▐░▌       ▐░▌  ▐░▌
// ▐░█▄▄▄▄▄▄▄█░▌  ▐░▌       ▐░▌  ▐░▌       ▐░▌  ▐░█▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌  ▐░▌       ▐░▌  ▐░▌       ▐░▌  ▐░░░░░░░░░░░▌
//  ▀▀▀▀▀▀▀▀▀▀▀    ▀         ▀    ▀         ▀    ▀▀▀▀▀▀▀▀▀▀▀
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
      boardWidth = 40,
      boardHeight = 30;

class Game {
  constructor() {
    this.board = makeArray(boardWidth, boardHeight);
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = 0;
      }
    }
    
    this.players = {};
  }
  
  addPlayer() {
    var player = {};
    
    player.token = makeToken(5);
    player.piece = {
      type: newPiece(),
      rotation: 0,
      pos: [0, 0]
    }
    
    game1.players[player.token] = {
      piece: player.piece
    };
    
    return player;
  }
  
  removePlayer() {
    
  }
  
  updateBoard(key) {
    let player = game1.players[key[0]];
    
    function canMoveLeft() {
      
    }
    
    function canMoveRight() {
      
    }
    
    function canRotate() {
      
    }
    
    function canMoveDown() {
      
    }
    
    function canDrop() {
      
    }
    
    if (key[1] == "left") {
      if ((player.piece.pos[0] + blocks[player.piece.type].offsets[player.piece.rotation]) > 0) {
        game1.players[key[0]].piece.pos[0]--;
      }
    }
    
    if (key[1] == "right") {
      if ((player.piece.pos[0] + blocks[player.piece.type].rightOffsets[player.piece.rotation]) < boardWidth) {
        game1.players[key[0]].piece.pos[0]++;
      }
    }
    
    if (key[1] == "up") {
      if (game1.players[key[0]].piece.rotation < blocks[player.piece.type].grids.length - 1) {
        game1.players[key[0]].piece.rotation++;
      } else {
        game1.players[key[0]].piece.rotation = 0;
      }
    }
    
    return game1;
  }
}

function makeToken(length) {
  var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  var token = "";
  for (var i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

function makeArray(x, y) {
  var arr = new Array(y);
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

function newPiece() {
  var pieces = "ijlzsot";
  console.log(pieces.charAt(Math.floor(Math.random() * pieces.length)));
  return pieces.charAt(Math.floor(Math.random() * pieces.length));
}

var game1 = new Game();

//  ▄         ▄    ▄▄▄▄▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄▄     ▄▄▄▄▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄▄▄    ▄               ▄
// ▐░▌       ▐░▌  ▐░░░░░░░░░░░▌  ▐░░░░░░░░░░▌   ▐░░░░░░░░░░░▌  ▐░░░░░░░░░░░▌  ▐░▌             ▐░▌
// ▐░▌       ▐░▌  ▐░█▀▀▀▀▀▀▀▀▀   ▐░█▀▀▀▀▀▀▀█░▌  ▐░█▀▀▀▀▀▀▀▀▀   ▐░█▀▀▀▀▀▀▀█░▌   ▐░▌           ▐░▌
// ▐░▌       ▐░▌  ▐░▌            ▐░▌       ▐░▌  ▐░▌            ▐░▌       ▐░▌    ▐░▌         ▐░▌
// ▐░▌   ▄   ▐░▌  ▐░█▄▄▄▄▄▄▄▄▄   ▐░█▄▄▄▄▄▄▄█░▌  ▐░█▄▄▄▄▄▄▄▄▄   ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌       ▐░▌
// ▐░▌  ▐░▌  ▐░▌  ▐░░░░░░░░░░░▌  ▐░░░░░░░░░░▌   ▐░░░░░░░░░░░▌  ▐░░░░░░░░░░░▌      ▐░▌     ▐░▌
// ▐░▌ ▐░▌░▌ ▐░▌  ▐░█▀▀▀▀▀▀▀▀▀   ▐░█▀▀▀▀▀▀▀█░▌   ▀▀▀▀▀▀▀▀▀█░▌  ▐░█▀▀▀▀█░█▀▀        ▐░▌   ▐░▌
// ▐░▌▐░▌ ▐░▌▐░▌  ▐░▌            ▐░▌       ▐░▌            ▐░▌  ▐░▌     ▐░▌          ▐░▌ ▐░▌
// ▐░▌░▌   ▐░▐░▌  ▐░█▄▄▄▄▄▄▄▄▄   ▐░█▄▄▄▄▄▄▄█░▌   ▄▄▄▄▄▄▄▄▄█░▌  ▐░▌      ▐░▌          ▐░▐░▌
// ▐░░▌     ▐░░▌  ▐░░░░░░░░░░░▌  ▐░░░░░░░░░░▌   ▐░░░░░░░░░░░▌  ▐░▌       ▐░▌          ▐░▌
//  ▀▀       ▀▀    ▀▀▀▀▀▀▀▀▀▀▀    ▀▀▀▀▀▀▀▀▀▀     ▀▀▀▀▀▀▀▀▀▀▀    ▀         ▀            ▀
//parameters
const port = 8000;
//initialize
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//middlewares
app.get('/', (req, res) => {
  console.log("User requested: " + __dirname);
  res.sendFile(__dirname + '/index.html');
});

app.get('/displayer.js', (req, res) => {
  console.log("User requested: displayer js file");
  console.log(__dirname + "displayer.js");
  res.sendFile(__dirname + "/displayer.js");
});

io.on('connection', function(socket) {
  console.log("socket user " + socket + " connected");
  client = game1.addPlayer();
  socket.emit('client', client);
  
  socket.on('disconnect', function() {
    console.log("socket user disconnected");
  });
  
  socket.on('keyAction', function(key) {
    console.log(key);
    socket.emit('boardUpdate', game1.updateBoard(key));
  });
})

http.listen(port, () => {
  console.log("listening on port: " + port);
});

var clients = {};
