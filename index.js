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
    this.players[player.token] = {
      
    }
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
  console.log("User requested: " + __dirname)
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log("socket user connected");
  socket.on('disconnect', function() {
    console.log("socket user disconnected");
  });
})

// app.use('/', express.static(path.join(__dirname, 'public')));
// 
// app.get('/play/*/currState', function (req, res, err) {
// 
// });
//start
http.listen(port, () => {
  console.log("listening on port: " + port)
});

var clients = {};
