export class Product{
    private _id:number;
    private _name : string;
    private _type : string;
    private _cost:number
    private _quantity:number
    private _time:string
    private _describe:string


    constructor(id: number, name: string, type: string, cost: number, quantity: number, time: string, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._cost = cost;
        this._quantity = quantity;
        this._time = time;
        this._describe = describe;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get cost(): number {
        return this._cost;
    }

    set cost(value: number) {
        this._cost = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }
}