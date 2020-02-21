import { getRepository } from "typeorm";
import Warehouse from "../models/warehouse.model";

export default class WarehouseService {
    warehouseRepository() {
        return getRepository(Warehouse);
    }

    findAll() {
        return this.warehouseRepository().find();
    }

    async create(warehouseData) {
        const warehouse = Object.assign(new warehouse(), warehouseData);
        return await this.warehouseRepository().save(warehouse);
    }

    update(warehouseData) {
        return this.warehouseRepository().save(warehouseData);
    }
}