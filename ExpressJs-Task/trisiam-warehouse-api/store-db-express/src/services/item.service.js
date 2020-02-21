import { getRepository } from "typeorm";
import Items from "../models/item.model";

export default class ItemService {
    itemRepository() {
        return getRepository(Items);
    }

    findAll() {
        return this.itemRepository().find();
    }

    findOne(id) {
        return this.itemRepository().findOne(id);
    }

    async create(itemData){
        const item = Object.assign(new Items(), itemData);
        return await this.itemRepository().save(item);
    }

    update(itemData) {
        return this.itemRepository().save(itemData);
    }

    delete(id) {
        return this.itemRepository().delete(id);
    }
}