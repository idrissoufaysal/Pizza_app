import { log } from "console"
import { pizzas } from "../../data"


export const GET=async()=>{
    try {
        return Response.json(pizzas)
    } catch (error) {
        if(error instanceof Error) console.log(error.message);
        
    }
}