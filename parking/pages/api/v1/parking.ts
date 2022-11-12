import type { NextApiRequest, NextApiResponse } from 'next'
import { ParkingReq } from '../../models/parking-req';
import { ParkingService } from '../../service/parking-service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body: { name, capacity }, method } = req
  let parking_request = new ParkingReq(name, capacity);
  let parkingSvc = new ParkingService();

  switch (method) {
    case 'POST':
      if (parking_request.capacity == null
        || parking_request.capacity <= 0
        || parking_request.name == null) {
        res.status(422).json({ error_message: "invalid request" })
        return
      }

      if (parking_request.capacity > 0) {
        let create_response = parkingSvc.create(parking_request)
        res.status(200).json(create_response)
        return
      }

      break

    case 'PUT':
      let update_response = parkingSvc.update(parking_request)
      res.status(200).json(update_response)
      break

    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}