"use client";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import useFavorites from "@/store/favorites";

const FavoriteComp = ({ id, breed }) => {
  const {
    favorites,
    setFavorite,
    removeFavorite,
  } = useFavorites();
  if (
    favorites.some(
      (favorite) => favorite.id === id,
    )
  ) {
    return (
      <FaStar
        size={25}
        color="white"
        className="cursor-pointer"
        onClick={() => {
          removeFavorite(id);
        }}
      ></FaStar>
    );
  } else {
    return (
      <FaRegStar
        size={25}
        color="white"
        className="cursor-pointer"
        onClick={() => {
          setFavorite(id, breed);
        }}
      ></FaRegStar>
    );
  }
};

export default FavoriteComp;
