import { IEvent } from "../Interfaces/Event";
import { ExtentsClient } from "../Client";

const event : IEvent = {
    name: "ready",
    once: true,
    execute: (client: ExtentsClient) => {
        console.log(`${client.user?.tag}에 로그인하였습니다!`);
    }
}

module.exports = event;