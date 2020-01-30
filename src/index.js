require('dotenv').config()

const app = require('./app')

const Main = async app => (
  await app.listen(app.get('port')),
  console.log(`Server running in http://localhost:${app.get('port')}`)
)

Main(app);
