import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './connectDB.js'
import todoRouter from './routes/todoRouter.js'
import errorHandlerMiddleware from './errors/error-handler.js'

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config()

app.use('/',todoRouter)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

const start = async() => {
    try {
      await connectDB()
      app.listen(port, () => {
          console.log(`server running on port ${port}`)
        })
    } catch (error) {
      console.log(error)
    }
  }

start();
