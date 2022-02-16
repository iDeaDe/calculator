import { StorageInterface, StorageData } from './StorageInterface';

class LocalStorage implements StorageInterface {
  private data: StorageData = {};

  private localStorageKeyName = 'user_data';

  constructor() {
    this.loadData();
  }

  getElement(key: string): unknown {
    return this.data[key];
  }

  async saveData(): Promise<boolean> {
    const dataToSave = JSON.stringify(this.data);
    localStorage.setItem(this.localStorageKeyName, dataToSave);
    return true;
  }

  setElement(key: string, value: Record<string, never>): void {
    this.data[key] = value;
    return undefined;
  }

  loadData(): void {
    const data = localStorage.getItem(this.localStorageKeyName) || '{}';

    const parsedData = JSON.parse(data);
    if (typeof parsedData !== 'object') {
      this.data = {};
      return;
    }

    this.data = parsedData;
  }

  getAll(): StorageData {
    return this.data;
  }

  setData(data: StorageData): void {
    this.data = data;
  }
}

export default LocalStorage;
