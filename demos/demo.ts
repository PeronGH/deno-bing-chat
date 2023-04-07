import { BingChat } from '../mod.ts'

const api = new BingChat({
  cookie: Deno.env.get('BING_COOKIE') ?? '',
})

const res = await api.sendMessage('who is the CEO of Twitter?')
console.log(res.text)
