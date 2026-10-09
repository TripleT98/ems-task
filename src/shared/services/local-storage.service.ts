import { Service } from '@angular/core'
import { LocalStorageKeys } from '@shared/models/local-storage.models'
import { StorageService } from '@shared/models/storage.model'

@Service()
export class LocalStorageService extends StorageService<LocalStorageKeys> {
    constructor() {
        super(window['localStorage'])
    }
}