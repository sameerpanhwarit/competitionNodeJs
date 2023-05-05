const express = require('express');
const app = express();

app.use(express.static('public_html'));
app.set('view engine', 'ejs');

let port = 3000;
let win = 0;
let lose = 0;
let visited = 0;
let mynumber = 3;

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/competition', (req, res) => {
  visited++;
  const number = Math.floor(Math.random() * 10) + 1;
  let message1 = '';
  let message2 = '';
  
  if (number === mynumber) {
    win++;
    message1 ="Congratulations";
    message2 ="your are the lucky winner for our competition";
  } else {
    lose++;
    message1 ="Sorry, no Win";
    message2 ="Thanks for entering in our competition";
  }

  const data = {
    win: win,
    lose: lose,
    visited: visited,
    msg1: message1,
    msg2: message2
  };

  res.render('competition', data);
});

app.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`);
  console.log("Type Ctrl+C to shut down the web server");
});
