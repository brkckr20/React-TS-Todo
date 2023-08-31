import * as express from "express";

import { appDataSource } from './app-data-source';
appDataSource.initialize().then(() => console.log("Veri tabani basarili bir sekilde getirildi.."))


const app = express();

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3001, function () {
    console.log("http://localhost:3001 started")
})
