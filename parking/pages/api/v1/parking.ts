import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query:{type, color}, method} = req
  
    switch (method) {
      case 'GET':
        res.status(200).json({ })
        break
      case 'POST':
        res.status(200).json({ })
        break
      case 'PATCH':
        res.status(200).json({ })
        break
      default:
        res.setHeader('Allow', ['POST', 'PATCH'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }