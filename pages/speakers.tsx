import React from "react";
import SpeakersRenderProps from "../src/components/SpeakersRenderProps";
import Image from "next/image";

const Speakers = () => {
  return (
    <SpeakersRenderProps>
      {({ speakers }) => {
        return (
          <div>
            {speakers.map(({ imageSrc, name }) => {
              return (
                <Image
                  src={`images/${imageSrc}.jpg`}
                  alt={name}
                  key={imageSrc}
                  width="300"
                />
              );
            })}
          </div>
        );
      }}
    </SpeakersRenderProps>
  );
};

export default Speakers;
