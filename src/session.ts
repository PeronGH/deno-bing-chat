import { BingChat } from './bing-chat.ts'
import { ChatMessage, SendMessageOptions, Variant } from './types.ts'

export class BingChatSession {
  #lastResponse: ChatMessage | undefined
  #api: BingChat
  constructor(
    cookie: string,
    public mode: Variant = 'Balanced',
  ) {
    this.#api = new BingChat({ cookie })
  }

  async send(
    text: string,
    onProgress: SendMessageOptions['onProgress'] = () => {},
  ): Promise<string> {
    const res = await this.#api.sendMessage(
      text,
      this.#lastResponse
        ? { ...this.#lastResponse, onProgress }
        : { onProgress },
    )

    this.#lastResponse = res
    return res.text
  }
}
