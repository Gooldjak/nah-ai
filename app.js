const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`server listenig at http://localhost:${PORT}`);
});