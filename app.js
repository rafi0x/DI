import express from "express"
import routers from "./routers/index.routes.js"
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', routers);

app.listen('5050', () => console.log(`server on 5050`))