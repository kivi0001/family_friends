import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="flex justify-evenly">
      <FiHome size={30} color="grey"></FiHome>
      <FaRegStar
        size={30}
        color="grey"
      ></FaRegStar>
      <RiChat3Line
        size={30}
        color="grey"
      ></RiChat3Line>
      <FiUser size={30} color="grey"></FiUser>
    </section>
  );
};

export default Footer;
