import express from 'express';
import userRoute from './user.route';
import transactionRoute from './transaction.route';


export default express.Router()
    .use('/users', userRoute)
    .use('/transaction', transactionRoute)
    .use((req, res, next) => {
        res.status(404).json({message : 'Not Found'});
    });
    