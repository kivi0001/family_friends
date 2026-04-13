import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <SearchBar></SearchBar>
      </section>
      <section>
        <Card></Card>
      </section>
    </main>
  );
}
