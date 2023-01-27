import express from "express"
import cors from "cors"
import functions from "firebase-functions"
import { getAllDoc, getStuff } from "./src/functions.js"


const app = express()
app.use(express.json())
app.use(cors())

//get 
app.get('/getstuff', getAllDoc)

// post
app.post('/gimme', getStuff)

// conecct to db

export const api = functions.https.onRequest( app )