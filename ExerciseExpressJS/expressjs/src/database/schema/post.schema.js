import { EntitySchema } from 'typeorm';
import Post from '../../models/post.model';

const PostSchema = new EntitySchema({
    name : 'Post',
    target : Post,
    tableName : 'posts',
    columns: {
        id: {
            type: 'int',
            unique: true,
            generated: 'increment',
            nullable: false,
            primary: true
        },
        date: {
            type: 'timestamp',
            createDate: true,
        },
        title: {
            type: 'varchar',
            length: 70,
            nullable: false,
        }
    },
    relations : {
         user: {
            target: 'User',
            type: 'many-to-one',
            joinColumn: true,
        }
    }
});

export default PostSchema;