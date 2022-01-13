import React from "react";
import Speaker from "./Speaker";
import renderer from "react-test-renderer"

describe("speaker component", () => {
  const testSpeaker = {
    id: "1",
    bio: "bio",
    first: "Jane",
    last: "Doe",
    company: "GitHub",
    twitterHandle: "janedoe",
    favorite: true,
    sessions: [{id: "1", title: "session title", room: {name: "room", capacity: 10}, eventYear: "2022"}]
  }

  it("makes sure the speaker component renders correctly", () => {
    const tree = renderer.create(
      <Speaker speaker={testSpeaker}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
