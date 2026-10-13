import { isNonNullable } from '@shared/utils/validation';

export class StorageService<Keys extends string> {
    constructor(private webStorage: Storage) {}

    set(key: Keys, value: unknown): boolean {
        try {
            this.webStorage.setItem(key, JSON.stringify(value ?? null));
        } catch (e: unknown) {
            console.error('[StorageService] set', { key }, e);
            return false;
        }

        return true;
    }

    get<T>(key: Keys): T | null {
        try {
            const item: string | null = this.webStorage.getItem(key);
            return isNonNullable(item) ? (JSON.parse(item) as T) : null;
        } catch (e) {
            console.error('[StorageService] get', { key }, e);
            return null;
        }
    }

    remove(...keys: Keys[]): boolean {
        try {
            keys.forEach((key: Keys) => this.webStorage.removeItem(key));
        } catch (e) {
            console.error('[StorageService] remove', { keys }, e);
            return false;
        }

        return true;
    }
}
