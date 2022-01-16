/**
 * Room
 */
const roomDefault = {
  name: "Room",
  capacity: 1
}

type RoomType = {
  name: string,
  capacity?: number
};


/**
 * Session
 */
export const sessionDefault = {
  id: "0",
  title: "Session Title",
  eventYear: "2022",
  room: roomDefault
}
export type SessionType = {
  id: string,
  title: string,
  eventYear: string,
  room: RoomType
};


/**
 * Speaker
 */
export const speakerDefault = {
  id: '0',
  first: 'Jane',
  last: 'Doe',
  company: 'GitHub',
  bio: 'None',
  twitterHandle: 'janestwitter',
  favorite: true,
  sessions: Array<SessionType>(),
}
export type SpeakerType = typeof speakerDefault;
