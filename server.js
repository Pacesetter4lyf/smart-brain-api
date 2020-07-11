const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require('knex')
//const bcrypt = require('')
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'me',
    password : 'password',
    database : 'smart-brain'
  }
});

db.select('*').from('users').then( data => {
	//console.log(data);
});

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
	res.send(database.users);
});
app.post("/signin", (req, res) => {signin.handleSignin(req, res, db)});

app.post("/register", (req, res) => {register.handleRegister(req, res, db)})

app.get("/profile/:id", (req, res) => {profile.handleProfileGet(req, res, db)});

app.put("/image", (req, res) => {image.imgCount(req, res, db)});


app.listen(process.env.PORT || 3001, () => {
	console.log(`I am listening on port ${process.env.PORT}`)
})

