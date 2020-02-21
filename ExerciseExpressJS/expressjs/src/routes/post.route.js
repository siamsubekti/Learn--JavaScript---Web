import { Router } from "express";
import  bodyParse  from "body-parser";
import PostService from "../service/post.service";

const postService = new PostService();

export default Router()
    .get('/', async(req, res) => {
        try {
            const data = await postService.findAll();

            res.json({data});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })
    .use(bodyParse.json())
    .post('/', async(req, res) => {
        try {
            let post = await postService.create(req.body);

            res.json({post});
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    })