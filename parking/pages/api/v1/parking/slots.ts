import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { 
        query:{id, reg_no, color},
        method,
      } = req
  
    switch (method) {
      case 'DELETE':
        res.status(200).json({id, reg_no})
        break
      case 'GET':
        res.status(200).json({})
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }