import React from "react";
import Card from "./card";

const CardsGroup = ({ data }) => {
  return (
    <div className="grid grid-cols-4 justify-center gap-2">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          status={item.status}
          species={item.species}
          origin={item.origin.name}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardsGroup;
