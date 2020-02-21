import { EntitySchema } from "typeorm";
import Manifest from "../../models/manifest.model";

const ManifestSchema = new EntitySchema ({
    name : 'Manifest',
    target : Manifest,
    tableName : 'manifest',
    columns : {
        id: {
            type: 'int',
            unique: true,
            generated:'increment',
            nullable:false,
            primary:true,
        },
        amount : {
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
            item:{
                target:'Item',
                type : 'many-to-one',
                joinColumn : true,
            },
            storage: {
                target:'Storage',
                type : 'many-to-one',
                joinColumn : true,
            }
        }
    })

    export default ManifestSchema;