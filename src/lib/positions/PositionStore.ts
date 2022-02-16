import { PositionInterface } from './PositionInterface';
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
            unit: form.unit || 'шт.'
        };

        this._positions.push(position);
    }

    public remove(id: number): void {
        const index = this._positions.findIndex(position => {
            return position.id === id;
        });

        this._positions.splice(index, 1);
    }

    get data() {
        return this._positions;
    }
}

export { PositionStore };