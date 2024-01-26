export interface ApiResponse {
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
