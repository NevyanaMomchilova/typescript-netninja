import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    
    let doc: HasFormatter;

    let value: [string, string, number];
    value = [tofrom.value, details.value, amount.valueAsNumber];

    if(type.value === "invoice") {
        doc = new Invoice(...value);
    } else {
        doc = new Payment(...value);
    }

    list.render(doc, type.value, "end");
});

