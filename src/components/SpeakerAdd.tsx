import React from "react";
import withAuth from "./withAuth";
import { UserType } from "../resources/User";
import { speakerDefault, SpeakerType } from "../resources/Speaker";

interface SpeakerAddInterface {
  eventYear: string;
  insertRecord: (speaker: SpeakerType) => void;
  loggedInUser: UserType;
}

export function SpeakerAdd({
  eventYear,
  insertRecord,
  loggedInUser,
}: SpeakerAddInterface) {
  if (!loggedInUser || loggedInUser.length === 0) return null;

  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter first and last name:", "");
          const firstLastArray = firstLast.split(" ");
          insertRecord({
            ...speakerDefault,
            id: "99999",
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: "Bio not entered yet",
            sessions: [
              {
                id: "88888",
                title: `New Session For ${firstLastArray[0]}`,
                room: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}

export default withAuth(SpeakerAdd);
