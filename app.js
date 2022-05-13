const express = require('express')
const hbs = require('hbs')
const path = require('path')

// Creates our express server
const app = express()
const port = 3000

// Define path for express
const publicDirectoryPath = path.join(__dirname, './public')
const viewsDirectoryPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Set handlebars and view location
app.set('view engine', 'hbs')
app.set('views' , viewsDirectoryPath)
hbs.registerPartials(partialsPath)

//Serves static files (we need it to import a css file)
app.use(express.static(publicDirectoryPath))

//Sets a basic route
app.get('', (req, res) => {
  res.render('index')
})

//Makes the app listen to port 3000
app.listen(port, () => {
  console.log('app listening on port 3000!')
})