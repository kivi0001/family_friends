import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="font-extrabold">
        FamilyFriends
      </h1>
      <FiBell size={25}></FiBell>
    </div>
  );
};

export default Header;
