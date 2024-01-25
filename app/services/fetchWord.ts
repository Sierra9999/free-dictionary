export default async function fetchWord(word: string) {
    const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const response = await request.json()
    console.log(response)
    return response
}