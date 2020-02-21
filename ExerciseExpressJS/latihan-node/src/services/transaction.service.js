import { getRepository } from 'typeorm';
import Transaction from '../models/transaction.model';

export default class TransactionService{
    transactionService(){
        return getRepository(Transaction);
    }

    findAll(){
        return this.transactionService().find({relations:['user']});
    }

    findOne(id){
        return this.transactionService().findOne(id);
    }

    create(data){
        return this.transactionService().save(data);
    }

    update(data){
        return this.transactionService().save(data);
    }

    delete(id){
        return this.transactionService().delete(id);
    }
}