class Rent {
    constructor (id, start_rent, end_rent, tenant_id, storage_manager_id, createAt, updateAt) {
        this.id = id;
        this.start_rent = start_rent;
        this.end_rent = end_rent;
        this.tenant_id = tenant_id;
        this.storage_manager_id = storage_manager_id;
        this.createAt = createAt;
        this.updateAt = updateAt;
    }
}

export default Rent;