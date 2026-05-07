import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect(){
    const dbUri = config.get<string>("dbUri")

    try {
        
        await mongoose.connect(dbUri)
        Logger.info("Connection sucess")

    } catch (e) {
        Logger.error("Connection failure")
        Logger.error(`Error: ${e}`)
        process.exit(1)
    }
}


export default connect