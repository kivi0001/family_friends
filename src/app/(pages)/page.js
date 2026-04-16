import SearchBar from "@/components/SearchBar";
import BreedList from "@/components/Breedlist";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <main className="">
      <section className="">
        <SearchBar></SearchBar>
      </section>

      <Suspense
        fallback={
          <div className="flex justify-center my-4 font-bold text-indigo-500 ">
            Loading dogs...
          </div>
        }
      >
        <BreedList
          searchParams={searchParams}
        ></BreedList>
      </Suspense>
    </main>
  );
}
