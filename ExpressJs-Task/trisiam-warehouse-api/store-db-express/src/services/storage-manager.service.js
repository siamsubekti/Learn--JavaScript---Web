import { getRepository } from "typeorm";
import StorageManager from "../models/storage-manager.model";

export default class StorageManagerService {
    managerRepository() {
        return getRepository(StorageManager);
    }

    findAll() {
        return this.managerRepository().find({relations:['warehouse']});
    }

    findOne(id) {
        return this.managerRepository().findOne(id);
    }

    async create(managerData) {
        const manager = Object.assign(new StorageManager(), managerData);
        return await this.managerRepository().save(manager);
    }

    update(managerData) {
        return this.managerRepository().save(managerData);
    }

    delete(id) {
        return this.managerRepository().delete(id);
    }
}