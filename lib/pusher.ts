import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1528250",
  key: "6249b145438b6827363f",
  secret: "672d7dc1bf506ced1945",
  cluster: "mt1",
  useTLS: true,
});

export const clientPusher = new ClientPusher("6249b145438b6827363f", {
  cluster: "mt1",
  forceTLS: true,
});
