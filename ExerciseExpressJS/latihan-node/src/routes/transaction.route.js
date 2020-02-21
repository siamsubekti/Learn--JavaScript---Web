import { Router } from 'express';
import bodyParse from 'body-parser';
import TransactionService from '../services/transaction.service';

const transactionService = new TransactionService();

export default Router()
    .get('/', async(req, res) => {
        try{
            const data = await transactionService.findAll();

            res.json({data});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParse.json())
    .post('/', async(req,res) => {
        try{
            let transaction = await transactionService.create(req.body);

            res.json({transaction});
        } catch {
            res.status(500).json({message: error.message});
        }
    })