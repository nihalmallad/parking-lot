export class ParkingReq {
    name: string;
    capacity: number;
    constructor(name: string, capacity: number){
        this.name = name;
        this.capacity = capacity;
    }
}