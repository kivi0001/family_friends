import SearchBar from "@/components/SearchBar";
import BreedList from "@/components/Breedlist";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <SearchBar></SearchBar>
      </section>

      <Suspense
        fallback={<div>Loading dogs...</div>}
      >
        <BreedList></BreedList>
      </Suspense>
    </main>
  );
}
