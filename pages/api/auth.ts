// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const TOKEN = 'D9TYXYMJWILSAZYZUY3MM44JMHV9JD'
const USERNAME = 'username'
const PASSWORD = 'password'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  if (req.body.username === USERNAME && req.body.password === PASSWORD) {
    res.status(200).json({ api_token: TOKEN })
  } else {
    res.status(404).json({ error: 'Not Found' })
  }
}
