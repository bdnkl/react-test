import React from "react";
import {useSpeakerContext} from "../contexts/SpeakerContext";

function SpeakerDelete() {
  const {speaker, deleteRecord} = useSpeakerContext();

  return (
    <span className="session" style={{width: '100%'}}>
      <a href="#" className="remSes">
        <i
          onClick={(e) => {
            e.preventDefault();
            if (
              window.confirm("Are you sure you want to delete this speaker?")
            ) {
              deleteRecord(speaker);
            }
          }}
        >
          -
        </i>
      </a>
      <span className="padL2">Delete Speaker</span>
    </span>
  );
}

export default SpeakerDelete;
