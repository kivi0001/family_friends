import Link from "next/link";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <Link href="/">
        <h1 className="font-extrabold">
          FamilyFriends
        </h1>
      </Link>
      <FiBell size={25}></FiBell>
    </div>
  );
};

export default Header;
