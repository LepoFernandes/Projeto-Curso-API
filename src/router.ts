import {Router, Request, Response} from "express"
import { createMovie } from "./controllers/movieController"

const router = Router()

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API is working!")
})
.post("/movie", createMovie)

export default router