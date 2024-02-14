import express from 'express';
const app = express();
import connectdb from './db/connect.js';
import web from './routes/web.js';
const port = process.env.PORT || 3000;
import {join} from 'path';
const DATABASE_URL = 'mongodb://127.0.0.1:27017';
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(process.cwd(), "public")));
app.set('view engine', 'ejs');
app.use('/', web)

connectdb(DATABASE_URL)
app.listen(port, () => {
    console.log(`server is connect successfullly http://localhost:${port}`)
})


