export class SlotReq {
    reg_no: string;
    color: string;
    type: string;
    constructor(reg_no: string, color: string, type: string) {
        this.reg_no = reg_no;
        this.color = color;
        this.type = type;
    }
}