import PartsOfSpeech from "./components/PartsOfSpeech";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>free dictionary</h1>
      <SearchBar></SearchBar>
      <Results></Results>
      {/* parts of speech */}
      <PartsOfSpeech></PartsOfSpeech>

    </main>
  );
}
