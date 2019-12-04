const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src'));

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname + '/src/'
  })
})

app.listen(8080, () => {
  console.log("Server is running on port 8080! :building_construction:");
});