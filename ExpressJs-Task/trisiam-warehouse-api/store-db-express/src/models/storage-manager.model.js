class StorageManager {
    constructor (id, name, email, phone, warehouse_id, createAt, updateAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.warehouse_id = warehouse_id;
        this.createAt = createAt;
        this.updateAt = updateAt;
    }
}

export default StorageManager;