import mongoose from "mongoose";
import config from "config";

async function connect(){
    const dbUri = config.get<string>("dbUri")

    try {
        
        await mongoose.connect(dbUri)
        console.log("Connection sucess")

    } catch (e) {
        console.log("Connection failure")
        console.log(`Error: ${e}`)
    }
}


export default connect