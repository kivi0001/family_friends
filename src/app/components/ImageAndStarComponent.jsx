import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const ImageAndStarComponent = () => {
  return (
    <div className="relative max-w-45">
      <div className="absolute top-0 right-0 bg-white/25 rounded-full p-1 m-2">
        <FaRegStar
          size={20}
          color="white"
        ></FaRegStar>
      </div>
      <div className="max-w-45">
        <Image
          src="https://placecats.com/neo/300/200"
          alt="Cat cutie"
          width={300}
          height={200}
          className="object-cover rounded-2xl"
        ></Image>
      </div>
    </div>
  );
};

export default ImageAndStarComponent;
