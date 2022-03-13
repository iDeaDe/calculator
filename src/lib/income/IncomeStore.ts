import { IncomeInterface, IncomeStatus } from './IncomeInterface';
import { format, parse } from 'date-fns';
import { PositionStore } from '../positions/PositionStore';
import { IncomeAddFormInterface } from './IncomeAddFormInterface';

interface IncomeIndex {
    count: number,
    sum: number,
    child: Record<string, IncomeIndex>,
    income: Record<number, IncomeInterface>
}

class IncomeStore {
    private _store: Array<IncomeInterface>;
    private _index: Record<number, IncomeIndex> = {};
    private _positions: PositionStore;

    constructor(data: Array<IncomeInterface>, positions: PositionStore) {
        this._store = data;
        this._positions = positions;
        this.reindex(true);
    }

    public add(id: number, form: IncomeAddFormInterface) {
        const item = {
            id: id,
            positionId: form.positionId,
            date: format(form.date, 'dd.MM.yyyy'),
            count: form.count,
            status: IncomeStatus.Active
        } as IncomeInterface;

        this._store.push(item);
        this.reindex();
    }

    public remove(id: number) {
        const itemIndex = this._store.findIndex(el => el.id === id);
        this._store.splice(itemIndex, 1);
        this.reindex();
    }

    private async reindex(full: boolean = false) {
        if (full) {
            this._index = {};
        }

        for (const item of this._store) {
            const entryDate = parse(item.date, 'dd.MM.yyyy', new Date());
            const entryYear = entryDate.getFullYear();
            const entryMonth = entryDate.getMonth() + 1;
            const entryDay = entryDate.getDate();

            this.createIfNotExists(this._index, entryYear);
            this.createIfNotExists(this._index[entryYear].child, entryMonth);
            this.createIfNotExists(this._index[entryYear].child[entryMonth].child, entryDay);

            const dayIncomes = this._index[entryYear].child[entryMonth].child[entryDay].income;

            if (!dayIncomes[item.id]) {
                const position = this._positions.get(item.positionId);
                const sum = item.count * (position?.cost || 0);

                const year = this._index[entryYear];
                const month = year.child[entryMonth];
                const day = month.child[entryDay];

                year.count += item.count;
                year.sum += sum;
                month.count += item.count;
                month.sum += sum;
                day.count += item.count;
                day.sum += sum;
                dayIncomes[item.id] = item;
            }
        }
    }

    createIfNotExists(obj: Record<number, IncomeIndex>, item: number) {
        if (!obj[item]) {
            obj[item] = {
                sum: 0,
                count: 0,
                child: {},
                income: {}
            }
        }
    }

    get data(): Record<number, IncomeIndex> {
        return this._index;
    }

    get fullData(): Array<IncomeInterface> {
        return this._store;
    }
}

export { IncomeStore, IncomeIndex };