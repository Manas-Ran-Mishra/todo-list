const express=require('express')
const app = express()
const PORT = 8000
const data=require('./about.json')

var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});