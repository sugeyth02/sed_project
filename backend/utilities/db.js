const mongoose = require('mongoose')

const DB_URI = process.env.MONGO_URI

const connect = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected')
  } catch (error) {
    console.error({ error })
    mongoose.connection.close()
  }
}
module.exports = { connect }