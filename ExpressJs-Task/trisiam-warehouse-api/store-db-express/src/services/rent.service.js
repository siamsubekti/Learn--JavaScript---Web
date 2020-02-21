import { getRepository } from "typeorm";
import Rent from "../models/rent.model";

export default class RentService {
    rentRepository() {
        return getRepository(Rent);
    }

    findAll() {
        return this.rentRepository().find({relations:['storage', 'storage_manager', 'tenant']});
    }

    findOne(id) {
        return this.rentRepository().findOne(id);
    }

    async create(rentData) {
        const rent = Object.assign(new Rent(), rentData);
        return await this.rentRepository().save(rent);
    }

    update(rentData) {
        return this.rentRepository().save(rentData);
    }

    delete(id) {
        return this.rentRepository().delete(id);
    }
}