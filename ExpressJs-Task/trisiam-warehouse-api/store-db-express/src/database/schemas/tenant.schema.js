import { EntitySchema } from "typeorm";
import Tenant from "../../models/tenant.model";

const TenantSchema = new EntitySchema ({
    name : 'Tenant',
    target : Tenant,
    tableName : 'tenant',
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
        address : {
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
            rent:{
                target:'Rent',
                type : 'one-to-many',
                inverseSide: 'rent',
                joinColumn : true,
                cascade : true,
            }
        }
    })

    export default TenantSchema;