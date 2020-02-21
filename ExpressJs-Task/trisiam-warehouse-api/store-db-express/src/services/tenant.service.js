import { getRepository } from "typeorm";
import Tenant from "../models/tenant.model";

export default class TenantService {
    tenantRepository() {
        return getRepository(Tenant);
    }

    findAll() {
        return this.tenantRepository().find();
    }

    findOne(id) {
        return this.tenantRepository().findOne(id);
    }

    async create(tenantData) {
        const tenant = Object.assign(new Tenant(), tenantData);
        return await this.tenantRepository().save(tenant);
    }

    update(tenantData) {
        return this.tenantRepository().save(tenantData);
    }

    delete(id) {
        return this.tenantRepository().delete(id);
    }
}