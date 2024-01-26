export interface ApiResponseData {
    word: string;
    phonetic: string;
    phonetics: {
      text: string;
      audio: string;
    }[];
    meanings: {
      partOfSpeech: string;
      definitions: {
        definition: string;
        synonyms: string[];
        antonyms: string[];
      }[];
      synonyms: string[];
      antonyms: string[];
    }[];
    license: {
      name: string;
      url: string;
    };
    sourceUrls: string[];
  }

type ApiResponse = ApiResponseData | null


export default async function fetchWord(word: string) : Promise<ApiResponse>  {
    try {
        const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const response = await request.json()
        return response[0]
    } catch (error) {
        console.log("the request went wrong",error)
        return null
    }

}