import { getRepository } from "typeorm";
import Manifest from "../models/manifest.model";

export default class ManifestService {
    manifestRepository() {
        return getRepository(Manifest);
    }

    findAll() {
        return this.manifestRepository().find({relations:['item','storage']});
    }

    findOne(id) {
        return this.manifestRepository().findOne(id);
    }

    async create(manifestData) {
        const manifest = Object.assign(new Manifest(), manifestData);
        return await this.manifestRepository().save(manifest);
    }

    update(manifestData) {
        return this.manifestRepository().save(manifestData);
    }

    delete(id) {
        return this.manifestRepository().delete(id);
    }
}