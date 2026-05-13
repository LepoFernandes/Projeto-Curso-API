import {Router, Request, Response} from "express"
import { createMovie } from "./controllers/movieController"


//VALIDATIONS 
import {validate} from "./middleware/handleValidation"
import { movieCreateValidation } from "./middleware/movieValidation"


const router = Router()

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API is working!")
})
.post("/movie", movieCreateValidation(), validate , createMovie)

export default router