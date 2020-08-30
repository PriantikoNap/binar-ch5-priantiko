
const express = require('express')
const app = express()
const port = 3001
const fs= require('fs')
app.use('/static', express.static('static'))
app.use('/src', express.static('src'));
app.use('/node_modules', express.static('node_modules'))

app.get('/chapter3', (req, res) => {
    res.sendFile(__dirname + '/static/chapter3/index.html');
  })
  app.get('/chapter4', (req, res) => {
    res.sendFile(__dirname + '/static/chapter4/index.html');
  })
  app.get('/users',(req,res)=>{
      const users = fs.readFileSync('users.json');
      const data = JSON.parse(users);
      const sorted = data.users.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
            return -1 
        if (nameA > nameB)
            return 1
        return 0;
    })
      res.send(sorted);
      
      
  })
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })