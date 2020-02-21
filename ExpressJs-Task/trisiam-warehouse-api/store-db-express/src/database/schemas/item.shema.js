import { EntitySchema } from "typeorm";
import Item from "../../models/item.model";

const ItemSchema = new EntitySchema ({
    name : 'Item',
    target : Item,
    tableName : 'item',
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
                inverseSide: 'manifest',
                joinColumn : true,
                cascade : true,
            }
        }
    })

    export default ItemSchema;