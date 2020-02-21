import { getRepository } from 'typeorm';
import User from '../models/user.model';

export default class UserService {
    userRepository() {
        return getRepository(User);
    }

    findAll() {
        return this.userRepository().find();
    }

    findOne(id) {
        return this.userRepository().findOne(id);
    }
    findOne(avatar) {
        return this.userRepository().findOne(avatar);
    }
    async create(userData) {
        const user = Object.assign(new User(), userData)
        return await this.userRepository().save(user);
    }
    update(userData) {
        return this.userRepository().save(userData)
    }
    delete(id) {
        return this.userRepository().delete(id);
    }

}