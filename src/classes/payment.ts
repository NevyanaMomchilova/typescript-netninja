import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    constructor(
        public recipient: string,
        public details: string,
        public amount: number,
    ){}

    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}