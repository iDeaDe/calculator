import { PositionInterface, PositionStatus } from './PositionInterface';
import { PositionAddFormInterface } from './PositionAddFormInterface';

class PositionStore {
    private _positions: Array<PositionInterface> = [];

    constructor(initData?: Array<PositionInterface>) {
        if (initData && initData.length > 0) {
            this._positions = initData;
        }
    }

    public add(id: number, form: PositionAddFormInterface): void {
        const position: PositionInterface = {
            id: id,
            name: form.name,
            cost: form.cost,
            unit: form.unit || 'шт.',
            status: PositionStatus.Active
        };

        this._positions.push(position);
    }

    public remove(id: number): void {
        const index = this.findIndexById(id);
        this._positions[index].status = PositionStatus.Deleted;
    }

    public get(id: number): PositionInterface | undefined {
        const index = this.findIndexById(id);

        if (index === -1) {
            return undefined;
        }

        return this._positions[index];
    }

    private findIndexById(id: number): number {
        return this._positions.findIndex(position => position.id === id);
    }

    get data() {
        return this._positions.filter(item => item.status === PositionStatus.Active);
    }

    get fullData() {
        return this._positions;
    }
}

export { PositionStore };