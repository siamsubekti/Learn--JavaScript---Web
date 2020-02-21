import { EntitySchema } from "typeorm";
import Rent from "../../models/rent.model";

const RentSchema = new EntitySchema ({
    name : 'Rent',
    target : Rent,
    tableName : 'rent',
    columns : {
        id: {
            type: 'int',
            unique: true,
            generated:'increment',
            nullable:false,
            primary:true,
        },
        start_rent: {
            type: 'date',
            nullable: false,
        },
        end_rent: {
            type: 'date',
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
            type : 'many-to-one',
            joinColumn : true,
        },
        tenant:{
            target:'Tenant',
            type : 'many-to-one',
            inverseSide: 'tenant',
            joinColumn : true,
        },
        storage: {
            target:'Storage',
            type : 'many-to-many',
            joinTable : true,
            cascade : true,
        }
    }
})

export default RentSchema;