import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Card = ({ breedGroup, origin, imgsrc }) => {
  return (
    <div className="mx-auto max-w-45 my-2 bg-white rounded-2xl pb-3 shadow-sm">
      <div className="relative max-w-45">
        <div className="absolute top-0 right-0 bg-white/25 rounded-full p-1 m-2">
          <FaRegStar
            size={20}
            color="white"
          ></FaRegStar>
        </div>
        <div className="">
          <Image
            src={imgsrc}
            alt="Cat cutie"
            width={300}
            height={200}
            className="object-cover rounded-2xl"
          ></Image>
        </div>
      </div>
      <h2 className="mx-3 mt-1 font-bold text-base">
        {breedGroup}
      </h2>
      <h3 className="mx-3 text-gray-400 text-xs">
        {origin}
      </h3>
    </div>
  );
};

export default Card;
