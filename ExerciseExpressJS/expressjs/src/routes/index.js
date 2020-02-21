import express from "express";
import userRoute  from "./user.route";
import  postRoute  from "./post.route";

export default express.Router()
    .use('/users', userRoute)
    .use('/post', postRoute)
    .use((req, res, next) => {
        res.status(404).json({message: 'Not Found'});
    });