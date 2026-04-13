import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <section className="flex justify-between p-4">
      <div className="bg-[#F2968F] rotate-90 rounded-full">
        <IoSearch
          className="m-3"
          size={25}
          color="white"
        ></IoSearch>
      </div>
      <input
        className="min-w-85 border rounded-full border-[#CACACD] px-4"
        type="text"
        placeholder="search breeds"
      />
    </section>
  );
};

export default SearchBar;
