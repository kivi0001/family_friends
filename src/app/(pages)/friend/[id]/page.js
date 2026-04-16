import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Description from "@/components/Description";
import History from "@/components/History";
import Link from "next/link";
import Characteristics from "@/components/Characteristics";
import FavoriteComp from "@/components/FavoriteComp";

const Detail = async ({ params }) => {
  "use cache";
  const { id } = await params;

  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  const breed = await response.json();

  return (
    <main className="">
      <section className="flex justify-center flex-col">
        <section className="self-center">
          <div className="relative w-85 h-90">
            <Link href="/">
              <IoIosArrowBack
                size={30}
                className="m-4 absolute top-2 left-2 bg-white p-1 rounded-full z-10"
              ></IoIosArrowBack>
            </Link>
            <div className="m-4 absolute top-2 right-2 bg-white/25 rounded-full p-1 z-10">
              <FavoriteComp
                id={breed.id}
                breed={breed.name}
              ></FavoriteComp>
            </div>

            <div className="flex gap-4 rounded-2xl absolute bottom-10 left-4 px-3 py-2 bg-white/35">
              <Image
                src={breed.image.url}
                alt="picture of dog"
                width={40}
                height={40}
                className="aspect-square object-cover rounded-lg"
              ></Image>
              <h3 className="text-white">
                {breed.name}
              </h3>
            </div>

            <Image
              src={breed.image.url}
              alt="thumbnail picture of dog"
              width={340}
              height={360}
              className="object-cover rounded-2xl aspect-square"
            ></Image>
          </div>
        </section>
        <div className="self-center m-4 w-85">
          <h2 className="text-[28px] font-bold">
            {breed.name}
          </h2>
          <div className="temper-div">
            <Characteristics
              tempStr={breed.temperament}
            ></Characteristics>
          </div>
          <Description
            description={breed.description}
          ></Description>
          <History
            history={breed.history}
          ></History>
        </div>
      </section>
    </main>
  );
};

export default Detail;
