type StorageData = Record<string, unknown>;

interface StorageInterface {
  getElement(key: string): unknown;
  setElement(key: string, value: StorageData): void;

  saveData(): Promise<boolean>;
  loadData(): void;

  getAll(): StorageData;
  setData(data: StorageData): void;
}

export { StorageInterface, StorageData };
