import { EntitySchema } from "typeorm";
import StorageManager from "../../models/storage-manager.model";

const StorageManagerSchema = new EntitySchema ({
    name : 'StorageManager',
    target : StorageManager,
    tableName : 'storage_manager',
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
        email : {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        phone : {
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
            warehouse:{
                target:'Warehouse',
                type : 'many-to-one',
                joinColumn : true,
            }
        }
    })

    export default StorageManagerSchema;