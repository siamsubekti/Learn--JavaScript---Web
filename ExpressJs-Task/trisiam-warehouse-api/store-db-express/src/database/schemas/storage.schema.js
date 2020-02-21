import { EntitySchema } from "typeorm";
import Storage from "../../models/storage.model";

const StorageSchema = new EntitySchema ({
    name : 'Storage',
    target : Storage,
    tableName : 'storage',
    columns : {
        id: {
            type: 'int',
            unique: true,
            generated:'increment',
            nullable:false,
            primary:true,
        },
        capacity: {
            type: 'int',
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
            manifest:{
                target:'Manifest',
                type : 'one-to-many',
                inverseSide: 'storage',
                joinColumn : true,
            },
        }
    })

    export default StorageSchema;