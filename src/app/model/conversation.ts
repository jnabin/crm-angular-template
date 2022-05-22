export interface Message {
  id: number,
  body: string,
  image: any,
  time: string,
  me: boolean
}
export interface Conversation {
  name: string,
  latestMessage: string,
  photo: string,
  time: string,
  status: boolean,
  latestMessageRead: boolean,
  messages: Message[],
  isSelected: boolean
}
