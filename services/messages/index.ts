import { Message } from "../../@types";

class MessageService {
  async uploadMessage(message: Message): Promise<any> {
    await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  }

  async getMessages(): Promise<Message[]> {
    const res = await fetch("/api/messages");
    const messages: Message[] = await res.json().then((res) => res.messages);

    return messages;
  }
}

export default new MessageService();
