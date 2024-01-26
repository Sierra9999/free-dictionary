import MeaningsList from "./components/MeaningsList";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import WordContext from "./contexts/WordContext";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>free dictionary</h1>
      <SearchBar></SearchBar>
      <h1>noun</h1>
      <MeaningsList meanings={["something","someone"]} ></MeaningsList>
    </main>
  );
}
