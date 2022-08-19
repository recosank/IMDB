import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/trailer.js'
import {fileURLToPath} from 'url';
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/', router);

const CONNECTION_URL = 'mongodb+srv://imdb:vidaloca@cluster0.on0un.mongodb.net/imdbdb?retryWrites=true&w=majority'

const PORT = 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT,()=>console.log('server start')))
    .catch((err)=>console.log(err.message))

