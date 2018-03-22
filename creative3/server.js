const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

app.options('*', cors())

let items = [];
let id = 0;

app.get('/api/items', (req, res) => {
  res.send(items);
});

app.put('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = items.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = items[index];
  item.flavor = req.body.flavor;
  item.text = req.body.text;
  item.name = req.body.name;
  res.send(item);
});

app.post('/api/items', (req, res) => {
  id = id + 1;
  let item = {id:id, name:req.body.name, flavor:req.body.flavor, text:req.body.text};
  items.push(item);
  res.send(item);
});

app.delete('/api/items/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = items.map(item => {return item.id}).indexOf(id);
    if (removeIndex === -1) {
        res.status(404).send("Sorry, that item doesn't exist");
        return;
    }
    items.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
