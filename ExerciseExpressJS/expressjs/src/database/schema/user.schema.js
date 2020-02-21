import { EntitySchema } from 'typeorm';
import User from '../../models/user.model';

const UserSchema = new EntitySchema({
    name : 'User',
    target : User,
    tableName : 'users',
    columns: {
        id: {
            type: 'int',
            unique: true,
            generated: 'increment',
            nullable: false,
            primary: true
        },
        fullname: {
            type: 'varchar',
            length: 70,
            nullable: false,
        },
        email: {
            type: 'varchar',
            length: 70,
            nullable: false,
        },
        birthdate: {
            type: 'date',
            nullable: false,
        },
        createdAt: {
            type: 'timestamp',
            updateDate: true
        },
        updatedAt: {
            type: 'timestamp',
            updateDate: true
        }
    },
    relations: {
        post: {
            target: 'Post',
            type: 'one-to-many',
            inverseSide: 'user',
            joinColumn : true,
            cascade : true,
        }
    }
})

export default UserSchema;