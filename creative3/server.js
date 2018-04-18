const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

app.options('*', cors())

// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];  
const knex = require('knex')(config);

// bcrypt setup
let bcrypt = require('bcrypt');
const saltRounds = 10;

let items = [];
let id = 0;

//log in
app.post('/api/login', (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user === undefined) {
      res.status(403).send("Invalid credentials");
      throw new Error('abort');
    }
    return [bcrypt.compare(req.body.password, user.hash),user];
  }).spread((result,user) => {
    if (result)
      res.status(200).json({user:{username:user.username,name:user.name,id:user.id}});
    else
      res.status(403).send("Invalid credentials");
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});

//registering
app.post('/api/users', (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.username || !req.body.name)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user !== undefined) {
      res.status(403).send("Email address already exists");
      throw new Error('abort');
    }
    return knex('users').where('username',req.body.username).first();
  }).then(user => {
    if (user !== undefined) {
      res.status(409).send("User name already exists");
      throw new Error('abort');
    }
    return bcrypt.hash(req.body.password, saltRounds);
  }).then(hash => {
    return knex('users').insert({email: req.body.email, hash: hash, username:req.body.username,
                 name:req.body.name, role: 'user'});
  }).then(ids => {
    return knex('users').where('id',ids[0]).first().select('username','name','id');
  }).then(user => {
    res.status(200).json({user:user});
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});

//ordering
app.post('/api/users/:id/orders', (req, res) => {
  let id = parseInt(req.params.id);
  knex('users').where('id',id).first().then(user => {
    return knex('orders').insert({userID: id, flavor:req.body.flavor, time:req.body.text, orderNumber: 1, totalOrders: 1});
  }).then(ids => {
    return knex('orders').where('userID', id);//fix this
  }).then(order => {
    res.status(200).json({order:order});
    return;
  }).catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
});

//getting orders
app.get('/api/users/:id/orders', (req, res) => {
  let id = parseInt(req.params.id);
  knex('users').join('orders','users.id','orders.userID')
    .where('users.id',id)
    .orderBy('time','desc')
    .select('flavor','time','name').then(order => {
      res.status(200).json({order:order});
    }).catch(error => {
      res.status(500).json({ error });
    });
});

app.delete('/api/users/:id/orders/:time', (req,res) => {
  // id of the person who is following
  let id = parseInt(req.params.id);
  // id of the person who is being followed
  let time  = parseInt(req.params.time);
  // make sure both of these users exist
  knex('users').where('id',id).first().then(user => {
    return knex('users').where('id',id).first();
  }).then(user => {
    // delete the entry in the followers table
    return knex('orders').where({'userID':id,time:time}).first().del();
  }).then(ids => {
    res.sendStatus(200);
    return;
  }).catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
});


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


app.listen(3000, () => console.log('Server listening on port 3000!'))
