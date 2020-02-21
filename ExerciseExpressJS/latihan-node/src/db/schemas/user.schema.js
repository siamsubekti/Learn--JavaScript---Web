import { EntitySchema } from 'typeorm';
import User from '../../models/user.model';

const UserSchema = new EntitySchema({
    name: 'User',
    target: User,
    tableName: 'users',
    columns: {
         id:{
             type: 'varchar',
             length: 70,
             unique: true,
             generated:'uuid',
             nullable:false,
             primary:true,
         },
         fullname:{
             type: 'varchar',
             length: 100,
             nullable: false,
         },
         email:{
             type:'varchar',
             length:100,
             nullable:false,
         },
         birthdate: {
             type:'date',
             nullable:false,
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
        transaction:{
            target:'Transaction',
            type : 'one-to-many',
            inverseSide: 'user',
            joinColumn : true,
            cascade : true,
        }
    }
})

export default UserSchema;