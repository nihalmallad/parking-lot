import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case 'DELETE':
    res.status(204).json({error_message:"Deleted"})
      break

    default:
      res.setHeader('Allow', ['DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}