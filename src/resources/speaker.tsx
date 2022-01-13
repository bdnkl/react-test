import {SessionType} from "./session";

export type SpeakerType = {
  id: string;
  first: string;
  last: string;
  company: string;
  bio: string;
  twitterHandle: string;
  favorite: boolean;
  sessions: Array<SessionType>;
}
