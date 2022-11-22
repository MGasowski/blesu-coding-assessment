import type { NextApiRequest, NextApiResponse } from 'next'

const TOKEN = 'D9TYXYMJWILSAZYZUY3MM44JMHV9JD'

const MOCK_DATA = [
  {
    _id: 1,
    name: 'Adam',
    surname: 'Kowalski',
  },
  {
    _id: 2,
    name: 'Katarzyna',
    surname: 'Nowacka',
  },
  {
    _id: 3,
    name: 'Andrzej',
    surname: 'Kaczmarski',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.api_token === TOKEN) {
    res.status(200).json({ data: MOCK_DATA })
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
}
