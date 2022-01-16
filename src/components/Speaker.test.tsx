import React from "react"
import renderer from "react-test-renderer"
import Speaker from "./Speaker";
import {SpeakerType} from "../resources/Speaker";
import {SpeakerFilterProvider} from "../contexts/SpeakerFilterContext";

describe('Speaker Component', () => {
  it('displays as before', () => {
    // define speaker object
    const speaker: SpeakerType = {
      id: "0",
      first: "Jane",
      last: "Doe",
      bio: "biography",
      company: "GitHub",
      favorite: true,
      twitterHandle: "janedoe",
      sessions: [{id: "0", title: "Janes session", eventYear: '2021', room: {name: 'Room', capacity: 100}}]
    }

    // create rendered tree of component
    const tree = renderer.create(
      <SpeakerFilterProvider startingShowSessions={true} startingEventYear={"2021"}>
        <Speaker speaker={speaker} updateRecord={() => {
        }} insertRecord={() => {
        }} deleteRecord={() => {
        }}/>
      </SpeakerFilterProvider>
    )

    // snapshot test
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
