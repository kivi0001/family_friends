const Characteristics = ({ tempStr }) => {
  /* SPLIT STRING UD I ET ARRAY */
  const tempArr = tempStr.split(", ");
  console.log(tempArr);

  /* LAV ET TILSVARENDE ARRAY AF FARVER */
  const tempColors = [
    "#ACD7FF",
    "#EDA8B3",
    "#C5E59C",
    "#F1E689",
    "#EDC4A8",
    "#EEC6FA",
    "#FFDAF5",
  ];

  return (
    <div className="max-w-fit flex gap-1 flex-wrap rounded-full">
      {/*  MAP IGENNEM DIT ARRAY VED BRUG AF "INDHOLD I STRENG"/TEMPER OG PLADS I ARRAY/INDEX PROPS */}
      {tempArr.map((temper, index) => (
        <h3
          /* ANVEND UNIK KEY TIL LISTE ELEMENTER */
          key={index}
          /* TILFØJ STYLE UDFRA NUVÆRENDE INDEX, OG TILSVARENDE INDEX PÅ FARVE-ARRAY */
          style={{
            backgroundColor: tempColors[index],
          }}
          className="my-1 p-2 rounded-full text-[#6B8B42] text-[13px]"
        >
          {/* FÅ VIST ET ENKELT ARRAYOBJEKT AD GANGEN, OG GØR FØRSTE BOGSTAV STORT, RESTEN SMÅT */}
          {temper.substring(0, 1).toUpperCase() +
            temper.substring(1).toLowerCase()}
        </h3>
      ))}
    </div>
  );
};
export default Characteristics;

/* FØRSTE/TIDLIGE FORSØG: */

/*   return (
    <div
      color={tempColors}
      className=" max-w-fit p-1 rounded-full"
    >
      <h3 className="m-2 text-[#6B8B42] text-[13px]">
        {tempArr}
      </h3>
    </div>
  );
}; */

/* 
{ artsState.map( (art)=>{return (

<div key={art.id}> <Artwork /> </div> )}) } */
