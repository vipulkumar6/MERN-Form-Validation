import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './routes/productRoute.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

const app = express();

dotenv.config();

const corsOptions = {
    origin: '*', // specify your frontend's origin
    credentials: true, // allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/", route)

const db = process.env.URI;
mongoose.connect(db).then(() => {
    console.log("Mongo DB Connection Successful!")
}).catch(() => {
    console.log("Connection Failed!")
})

app.listen(5000, (req, res) => {
    console.log("Server is running at port 5000")
})