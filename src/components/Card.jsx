"use client";
import Image from "next/image";

import Link from "next/link";
import FavoriteComp from "./FavoriteComp";

const Card = ({
  id,
  breedGroup,
  origin,
  imgsrc,
}) => {
  return (
    <div className="mx-auto max-w-45 my-2 bg-white rounded-2xl pb-3 shadow-sm">
      <div className="relative max-w-45">
        <div className="absolute top-0 right-0 bg-white/25 rounded-full p-1 m-2">
          <FavoriteComp
            id={id}
            breed={breedGroup}
          ></FavoriteComp>
        </div>
        <Link href={`/friend/${id}`}>
          <div className="">
            <Image
              src={imgsrc}
              alt="image of dog"
              width={300}
              height={200}
              className="object-cover aspect-3/2 object-top rounded-2xl"
            ></Image>
          </div>
        </Link>
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
