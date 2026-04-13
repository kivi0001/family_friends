import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const ImageAndStarComponent = () => {
  return (
    <div>
      <div className="">
        <FaRegStar></FaRegStar>
      </div>
      <Image
        src="https://placecats.com/neo/300/200"
        alt="Cat cutie"
        width={200}
        height={200}
      ></Image>
    </div>
  );
};

export default ImageAndStarComponent;
