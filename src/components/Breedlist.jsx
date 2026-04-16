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
  try {
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
      <div key={breed.id}>
        <Card
          id={breed.id}
          breedGroup={breed.breed_group}
          origin={breed.origin}
          imgsrc={breed.image.url}
          temperament={breed.temperament}
        ></Card>
      </div>
    ));
  } catch (error) {
    return (
      <p>
        Oooops... Der skete en fejl under
        indlæsningen!
      </p>
    );
  }
};

export default BreedList;
