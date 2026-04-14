import Card from "./Card";

const BreedList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-center">
      <FetchBreed></FetchBreed>
    </div>
  );
};

const FetchBreed = async () => {
  "use server";
  const response = await fetch(
    "https://api.thedogapi.com/v1/breeds",
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  const breeds = await response.json();

  return breeds.map((breed) => (
    <Card
      key={breed.id}
      breedGroup={breed.breed_group}
      origin={breed.origin}
      imgsrc={breed.image.url}
    ></Card>
  ));
};

export default BreedList;
