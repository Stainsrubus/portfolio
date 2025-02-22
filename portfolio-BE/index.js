import express from 'express'
import dotenv from 'dotenv'
import portfolioRoutes from './src/routes/index.js'
import cors from 'cors'

dotenv.config()
const app=express()

const PORT=process.env.PORT 
app.use(express.json())
app.use(cors())
app.use('/',portfolioRoutes) 

app.listen(PORT,()=>console.log(`server listening to port ${PORT}`))