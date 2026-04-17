import { Suspense } from "react";
import Card from "./Card";

const BreedList = ({ searchParams }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center">
          Loading details...
        </div>
      }
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-center">
        <FetchBreed
          searchParams={searchParams}
        ></FetchBreed>
      </div>
    </Suspense>
  );
};

const FetchBreed = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });

    const breeds = await response.json();

    return breeds.map((breed) => (
      <div key={breed.id}>
        <Card
          id={breed.id}
          breedName={breed.name}
          origin={breed.origin}
          imgsrc={breed.image.url}
          temperament={breed.temperament}
        ></Card>
      </div>
    ));
  } catch (error) {
    return (
      <p className="flex justify-center">
        Oooops... Der skete en fejl under
        indlæsningen!
      </p>
    );
  }
};

export default BreedList;
