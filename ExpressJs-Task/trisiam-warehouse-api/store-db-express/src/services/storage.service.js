import { getRepository } from "typeorm";
import Storage from "../models/storage.model";

export default class StorageService {
    storageRepository() {
        return getRepository(Storage);
    }

    findAll() {
        return this.storageRepository().find({relations:['manifest']});
    }

    findOne(id) {
        return this.storageRepository().findOne(id);
    }

    async create(storageData) {
        const storage = Object.assign(new Storage(), storageData);
        return await this.storageRepository().save(storage);
    }

    update(storageData) {
        return this.storageRepository().save(storageData);
    }

    delete(id) {
        return this.storageRepository().delete(id);
    }   
}