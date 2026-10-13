export type User = {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  name: string;
  primaryEmailAddress: { emailAddress: string };
  imageUrl: string;
};

export type RemoteParticipants = {
  socketId: string;
  userId: string;
  userName: string;
  stream?: MediaStream | null;
  audioEnabled: boolean;
  videoEnabled: boolean;
};
