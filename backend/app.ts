import * as express from "express";
import * as cors from 'cors';


import { appDataSource } from './app-data-source';
appDataSource.initialize().then(() => console.log("Veri tabani basarili bir sekilde getirildi.."))


import todoRouter from './routes/Todos';


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/todos", todoRouter);


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3001, function () {
    console.log("http://localhost:3001 started")
})
