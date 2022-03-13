import { StorageData, StorageInterface } from './StorageInterface';

// todo: заставить это работать
class IndexedDbStorage implements StorageInterface {
    private _db?: IDBDatabase;

    private DB_NAME = 'income_calculator';
    private DB_DATA_KEY = 'user_data';

    constructor() {
        const dbOpen = indexedDB.open(this.DB_NAME, 1);

        dbOpen.addEventListener('success', () => {
            this._db = dbOpen.result;
        });
    }

    getAll(): StorageData {
        const transaction = this._db?.transaction([ this.DB_DATA_KEY ], 'readonly');
        const objectStore = transaction.objectStore(this.DB_DATA_KEY);
    }

    getElement(key: string): unknown {
        return undefined;
    }

    loadData(): void {
    }

    saveData(): Promise<boolean> {
        return Promise.resolve(false);
    }

    setData(data: StorageData): void {
    }

    setElement(key: string, value: StorageData): void {
    }

}

export { IndexedDbStorage };