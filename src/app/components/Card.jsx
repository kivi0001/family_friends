import ImageAndStarComponent from "./ImageAndStarComponent";

const Card = () => {
  return (
    <div className="mx-auto my-2 bg-white rounded-2xl pb-3 shadow-sm">
      <ImageAndStarComponent></ImageAndStarComponent>
      <h2 className="mx-3 mt-1 font-bold text-base">
        Breed
      </h2>
      <h3 className="mx-3 text-gray-400 text-xs">
        Origin
      </h3>
    </div>
  );
};

export default Card;
