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
    offsets: [0, 2]
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
    offsets: [1, 1, 1, 2]
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
    offsets: [1, 1, 1, 2]
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
    offsets: [2]
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
    offsets: [1, 2]
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
    offsets: [1, 1, 1, 2]
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
    offsets: [1, 2]
  }
},
      boardWidth = 40,
      boardHeight = 30;

class Game {
  constructor() {
    this.board = makeArray(boardWidth, boardHeight);
    this.players = {};
  }
  
  addPlayer() {
    var player = {};
    player.token = makeToken(5);
    player.activePiece = newPiece();
    this.players[player.token] = {
      activePiece: player.activePiece,
    };
    return player;
  }
  
  updateBoard(key) {
    
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
  var arr = new Array(y), i, l;
  for(i = 0, l = y; i < l; i++) {
      arr[i] = new Array(x);
  }
  return arr;
}

function newPiece() {
  var pieces = "ijlzsot";
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
  socket.emit('token', client.token);
  
  socket.on('disconnect', function() {
    console.log("socket user disconnected");
  });
  
  socket.on('keyAction', function(key) {
    console.log(key);
    game1.updateBoard(key);
  });
})

http.listen(port, () => {
  console.log("listening on port: " + port);
});

var clients = {};
