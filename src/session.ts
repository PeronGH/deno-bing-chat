import { BingChat } from './bing-chat.ts'
import { ChatMessage, Mode, SendMessageOptions } from './types.ts'

export class BingChatSession {
  #lastResponse: ChatMessage | undefined
  #api: BingChat
  constructor(
    cookie: string,
    public mode: Mode = 'Balanced',
  ) {
    this.#api = new BingChat({ cookie })
  }

  async say(
    text: string,
    onProgress: SendMessageOptions['onProgress'] = () => {},
  ): Promise<string> {
    const res = await this.#api.sendMessage(
      text,
      this.#lastResponse ?? { onProgress },
    )

    this.#lastResponse = res
    return res.text
  }
}
