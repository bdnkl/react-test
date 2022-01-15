import React from "react";
import {SpeakerType} from "../resources/speaker";
import Speaker from "./Speaker";

export default function SpeakersList({data}: { data: SpeakerType[] }) {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker: SpeakerType) => {
          return <Speaker key={speaker.id} speaker={speaker}/>;
        })}
      </div>
    </div>
  )
}
