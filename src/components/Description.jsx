const Description = ({ description }) => {
  return (
    <div className="my-4">
      <h3 className="text-gray-400">
        Breed description
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default Description;
