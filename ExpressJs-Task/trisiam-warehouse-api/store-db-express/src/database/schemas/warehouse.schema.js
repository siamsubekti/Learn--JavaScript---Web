import { EntitySchema } from "typeorm";
import Warehouse from "../../models/warehouse.model";

const WarehouseSchema = new EntitySchema ({
    name : 'Warehouse',
    target : Warehouse,
    tableName : 'warehouse',
    columns : {
        id: {
            type: 'int',
            unique: true,
            generated:'increment',
            nullable:false,
            primary:true,
        },
        name: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        address : {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        createdAt:{
            type:'timestamp',
            createDate: true,
         },
         updatedAt:{
             type:'timestamp',
             updateDate: true,
         }
    },
    relations:{
        storage_manager:{
            target:'StorageManager',
            type : 'one-to-many',
            inverseSide: 'manager',
            joinColumn : true,
            cascade : true,
        }
    }
})

export default WarehouseSchema;