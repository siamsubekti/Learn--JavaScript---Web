import { getRepository as repository } from 'typeorm';
import Post from '../models/post.model';

export default class PostService {
    postRepository() {
        return repository(Post);
    }

    findAll() {
        return this.postRepository().find({ relations: ['user']});
    }

    findOne(){
        return this.postRepository().findOne(id);
    }

    create(postDate) {
        return this.postRepository().save(postDate);
    }

    update(postDate) {
        
    }

    delete(id) {
        return this.postRepository().delete(id);
    }
}