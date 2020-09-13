import React from "react";
import Card from "./Card";

const Cardlist = ({ items }) => {
  return (
    <section className="cardlist">
      {Object.values(items).map((item, i) => {
        return <Card key={i} data={item}></Card>;
      })}
    </section>
  );
};

export default Cardlist;
