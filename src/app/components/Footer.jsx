import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="flex">
      <FiHome></FiHome>
      <FaRegStar></FaRegStar>
      <IoChatbubbleOutline></IoChatbubbleOutline>
      <FiUser></FiUser>
    </section>
  );
};

export default Footer;
