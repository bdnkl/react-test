import Image from "next/image";
import React from "react";
import withData from "../src/components/withData";

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return (
          <Image src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc} width="300" height="300"/>
        );
      })}
    </div>
  );
};

export default withData(2)(Speakers);
