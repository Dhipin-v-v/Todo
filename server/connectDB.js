import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/todoApp'
const password = process.env.MONGO_PASSWORD

const connectDB = () => {
  const uri = mongoUri.replace('<password>', password)
  return mongoose.connect(uri)
}

export default connectDB
