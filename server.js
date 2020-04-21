const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')  //model
const app = express()


mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use( express.static( "public"));

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls  })
})

app.get('/why-us?',async(req,res)=>{
  res.render('why-us?')
})
app.get('/features',async(req,res)=>{
  res.render('features')
})
app.get('/pricing',async(req,res)=>{
  res.render('pricing')
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})



app.listen(process.env.PORT || 5000);



//npm init
// npm i express mongoose ejs 
//npm i --save-dev nodemon
//npm i shortid

