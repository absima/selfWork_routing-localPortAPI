// http://localhost:8080/users/91283712?sort=price

import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"); // Update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




app.get('/', (req, res) => res.send(`
    <h1>hello welcome to my website</h1>
    <a href="/news">go to news page</a>`));


import dataCont from './continent.json' assert { type: 'json' };
 
app.get('/dataContinent', (req, res) => res.send(
  dataCont
));
    
app.get('/news', (req, res) => res.send('this is the news page welcome!'));
app.get('/data', (req, res) => res.json({name:"bruno", bio:"i like coding"}));

app.get('/users/:id', (req, res) => {
    console.log(req.params.id); // 1
    console.log(req.query); // name
    res.send("sorry database is offline, try again later")
});
   

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));




// import express from 'express';
// const app = express();
// const port = process.env.PORT || 8080;

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/news', (req, res) => res.send('this is the news page welcome!'));

// app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
