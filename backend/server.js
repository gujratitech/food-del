import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './config/db.js';

//app config
const app = express();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//db connection
connectDB();

app.get('/', (req, res) => {
    res.send('API WORKING!');
})

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})

