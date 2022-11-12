import type { NextApiRequest, NextApiResponse } from 'next'
import { SlotReq } from '../../../models/slot-req';
import { ParkingService } from '../../../service/parking-service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body: { reg_no, color, type }, method } = req
  let slot_request = new SlotReq(reg_no, color, type);
  let parkingSvc = new ParkingService();
  switch (method) {
    case 'POST':
      if (slot_request.reg_no == null
        || slot_request.color == null
        || slot_request.type == null) {
        res.status(422).json({ error_message: "invalid request" })
        return
      }
      if (!parkingSvc.isSlotAvailable()) {
        res.status(400).json({ error_message: "slots are full" })
        return
      }

      res.status(200).json({ success: true })
      break

    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}