import {body} from "express-validator"

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("The title is mandatory.")
            .isLength({ min: 5 })
            .withMessage("The title must be at least 5 characters long."),
        body("raiting")
            .isNumeric()
            .withMessage("It needs to be a number.")
            .custom((value: number) =>{
                if(value < 0 || value > 10){
                    throw new Error("It needs to be between 0 and 10.")
                }
                return true
            }),
        body("description")
            .isString()
            .withMessage("Description is mandatory."),
        body("director")
            .isString()
            .withMessage("Director name is mandatory."),
        body("poster")
            .isURL()
            .withMessage("The image must be a URL.")
    
    ]
}