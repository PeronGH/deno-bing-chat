import { BingChatSession } from '../mod.ts'

const session = new BingChatSession(Deno.env.get('BING_COOKIE')!, 'Creative')

console.log('Bing:', await session.send('list 10 words'))
await session.send('which word above is negative?', (p) => console.log(p.text))
