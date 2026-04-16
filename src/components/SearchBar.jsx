import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <section>
      <form className="flex justify-between p-4">
        <button
          type="submit"
          className="bg-[#F2968F] rotate-90 rounded-full"
        >
          <IoSearch
            className="m-3"
            size={25}
            color="white"
          ></IoSearch>
        </button>
        <input
          className="min-w-75 border rounded-full border-[#CACACD] px-4"
          type="search"
          name="query"
          placeholder="search breeds"
        />
      </form>
    </section>
  );
};

export default SearchBar;
