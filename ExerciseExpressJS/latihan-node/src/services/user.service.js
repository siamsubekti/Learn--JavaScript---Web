import { getRepository } from 'typeorm';
import Users from '../models/user.model';

export default class UserService{
    userRepository(){
        return getRepository(Users);
    }

    findAll(){
        return this.userRepository().find();
    }

    findOne(id){
        return this.userRepository().findOne(id);
    }

    async create(userData){
        const user = Object.assign(new Users(), userData);
        return await this.userRepository().save(user);
    }

    update(userData){
        return this.userRepository().save(userData);
    }

    delete(id){
        return this.userRepository().delete(id);
    }
}