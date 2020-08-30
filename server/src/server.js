const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const poi = fs.readFileSync('poi.json','utf8')

app.get('/api', (req, res) => {
  res.send(poi);
});

app.listen(port, () => console.log(`Listening on port ${port}`));