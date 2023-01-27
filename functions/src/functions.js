import  {dbConnect} from "./dbConnect.js"
import { mongo_credentials } from "../secrets.js"

export async function getAllDoc(req, res) {
    const db = dbConnect();
    const collection = await db.collection(collectionName).find({}).limit(10).toArray()
    console.table(collection)
    res.send(collection)
}


export async function getStuff(req, res){
    const newDoc = req.body

    const db = dbConnect()

    await db.collection(mongo_credentials.collection).insertOne(newDoc)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        res.status(201).send('new doc inserted')
}