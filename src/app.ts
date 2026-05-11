//ENV variables
require("dotenv").config();

import express from "express"
import config from "config"

const app = express()

//JSON middleware
app.use(express.json())

//DB
import db from "../config/db"


//ROUTES
import router from "./router"


//Logger
import Logger from "../config/logger"


//MIDDLEWARE
import morganMiddleware from "./middleware/morganMiddleware"

app.use(morganMiddleware)

app.use("/api/", router)


//app port
const port = config.get<number>("port")


app.listen(port, async () => {
    await db()
    Logger.info(`Aplicacao funcionando na porta: ${port}`)
})
