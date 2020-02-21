import { EntitySchema } from 'typeorm';
import Transaction from '../../models/transaction.model';

const TransactionSchema = new EntitySchema({
    name : 'Transaction',
    target : Transaction,
    tableName : 'transactions',
    columns: {
        id:{
            type: 'int',
            unique : true,
            generated: 'increment',
            nullable: false,
            primary: true,
        },
        tanggal:{
            type: 'timestamp',
            createDate: true,
        },
        nama:{
            type: 'varchar',
            length: 50,
        }
    },
    relations : {
        user:{
            target:'User',
            type: 'many-to-one',
            joinColumn:true,
        }
    }
})

export default TransactionSchema;