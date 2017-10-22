let express = require('express');
let app = express();
let iChing = require('i-ching');

let trigrams = () => {
  app.get('/', (req, res) => {
      console.log(req.query);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      let reading = iChing.ask(req.query.question || "");
      res.send(reading);
  });
}

trigrams();
app.listen(process.env.PORT || 3000);
