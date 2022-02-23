import { IncomeInterface } from './IncomeInterface';

type IncomeStoreData = Record<string, IncomeInterface>;

class IncomeStore {
    private _store: Record<string, object>;

    constructor(data: IncomeStoreData) {
        this._store = data;
    }

    public add(date: Date, data: IncomeStoreData) {
    }

    public remove(date: Date, data: IncomeInterface) {
    }

    get data(): Array {
        return this._store;
    }
}