import { ApiResponse } from "../types/ApiTypes"


export default async function fetchWord(word: string) : Promise<ApiResponse | null >  {
    try {
        const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const response = await request.json()
        return response[0]
    } catch (error) {
        console.log("the request went wrong",error)
        return null
    }

}