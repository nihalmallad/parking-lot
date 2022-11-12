import PriorityQueue from "priority-queue-typescript";
import { ParkingReq } from "../models/parking-req";
import { ParkingResp } from "../models/parking-resp";

let INIT_CAPACITY = 10
let freeSlots = new PriorityQueue<number>(INIT_CAPACITY);

export interface Parking {
    create(request: ParkingReq): ParkingResp;
    update(request: ParkingReq): ParkingResp;
    allocate(): number | null
    isSlotAvailable(): boolean;
}

export class ParkingService implements Parking {
    public constructor() { }
    isSlotAvailable(): boolean {
        return freeSlots.size() != 0
    }
    create(request: ParkingReq): ParkingResp {
        freeSlots = new PriorityQueue<number>(request.capacity);

        for (let i = 1; i <= request.capacity; i++) {
            freeSlots.add(i);
        }
        return new ParkingResp(freeSlots.size())
    }

    update(request: ParkingReq): ParkingResp {
        let size = freeSlots.size()
        for (let i = 1; i <= request.capacity; i++) {
            freeSlots.add(size + i);
        }
        return new ParkingResp(freeSlots.size())
    }

    allocate(): number | null {
        return freeSlots.poll()
    }
}