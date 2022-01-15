import {data} from "../../data/SpeakerData";
import React from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import Header from "./Header";

export default function Speakers() {
  return (
    <div className="container-fluid">
      <Header/>
      <SpeakersToolbar/>
      <SpeakersList data={data}/>
    </div>
  )
}
