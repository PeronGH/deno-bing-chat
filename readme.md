# Deno Bing Chat

## Example

```ts
import { BingChatSession } from '../mod.ts'

const session = new BingChatSession(Deno.env.get('BING_COOKIE')!, 'Creative')

console.log('Bing:', await session.say('list 10 words'))
console.log('Bing:', await session.say('which word above is negative?'))
```

## Credits

This project is based on the [bing-chat](https://github.com/transitive-bullshit/bing-chat).
