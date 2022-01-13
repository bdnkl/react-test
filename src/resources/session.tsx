type RoomType = {
    name: string;
    capacity: number;
}

export type SessionType = {
    id: string;
    title: string;
    eventYear: string;
    room: RoomType;
}
