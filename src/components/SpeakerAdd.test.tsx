import React from "react";
import renderer from "react-test-renderer";
import {SpeakerType} from "../resources/Speaker";
import {SpeakerFilterProvider} from "../contexts/SpeakerFilterContext";
import {SpeakerAdd} from "./SpeakerAdd";

describe("Speaker Add Component", () => {
  // define speaker object
  // const speaker: SpeakerType = {
  //   id: "0",
  //   first: "Jane",
  //   last: "Doe",
  //   bio: "biography",
  //   company: "GitHub",
  //   favorite: true,
  //   twitterHandle: "janedoe",
  //   sessions: [
  //     {
  //       id: "0",
  //       title: "Janes session",
  //       eventYear: "2021",
  //       room: {name: "Room", capacity: 100},
  //     },
  //   ],
  // };

  it("renders correctly", () => {
    // create rendered tree of component
    const tree = renderer.create(
      <SpeakerFilterProvider
        startingShowSessions={true}
        startingEventYear={"2021"}
      >
        <SpeakerAdd
          eventYear="2019"
          insertRecord={(speaker: SpeakerType) => {
            console.log(speaker)
            /** TODO add a mockup for inserting records */
          }}
          loggedInUser="Jane"
        />
      </SpeakerFilterProvider>
    );

    // snapshot test
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
