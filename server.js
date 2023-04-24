const express = require('express')
const app = express()
const port = 3000

const hasExtension = /(.+)\.[a-zA-Z0-9]{2,5}/;

app.get('*', (req, res, next) => {
    console.log('___ _!_!_ ___', req.url)

    if ( req.url === "/" ) {} 
    else if (req.url && !req.url.match(hasExtension)) {
        req.url = `${req.url}.html`
    }

    next()
})

app.post('/queryAI', (req, res, next) => {
  next()
})

app.use(express.static('public'))


app.get('*', function(req, res){
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})