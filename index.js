const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())

require('./plugins/db.js')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
  console.log('serve is running 3000 port')
})