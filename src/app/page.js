import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <SearchBar></SearchBar>
      </section>
      <section className="grid grid-cols-2 justify-center">
        <Card></Card>
        <Card></Card>
      </section>
      <section className="">
        <div className="relative w-85 h-90">
          <IoIosArrowBack
            size={20}
            className="absolute top-2 left-2 bg-white p-1 rounded-full z-10"
          ></IoIosArrowBack>

          <FaRegStar
            size={20}
            color="white"
            className="absolute top-2 right-2 bg-white/25 rounded-full p-1 z-10"
          ></FaRegStar>

          <div className="flex ">
            <Image
              src="https://placecats.com/neo/300/200"
              width={40}
              height={40}
            ></Image>
            <h3>Breed</h3>
          </div>

          <Image
            src="https://placecats.com/neo/300/200"
            alt="Cat cutie"
            width={340}
            height={360}
            className="object-cover rounded-2xl"
          ></Image>
        </div>
      </section>
    </main>
  );
}
