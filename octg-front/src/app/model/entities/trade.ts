export class Trade {
    id:number;
    tradeType:string;
    symbol:string;
    entryDate:Date;
    entryPrice:number;
    numberOfUnits:number;
    exitPrice:number;
    exitDate:Date;
    isClosed:string;
    successStatus:string;
}

/*{
    "id":"number",
    "tradeType":"string",
    "symbol":"string",
    "entryDate":"Date",
    "entryPrice":"number",
    "numberOfUnits":"number",
    "exitPrice":"number",
    "exitDate":"Date",
    "isClosed":"string",
    "successStatus":"string"
}*/