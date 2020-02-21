import { Router } from 'express';
import UserService from "../service/user.service";
import  bodyParse  from "body-parser";

const userService = new UserService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const data = await userService.findAll();
            res.json({data});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const data = await userService.findOne(id);

            if (data) {
                res.json({data});
            } else {
                res.status(404).json({message : `ID ${id} not found`});
            }
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParse.json())
    .post('/', async(req, res) => {
        try {
            let user = {...req.body};
            console.log({...req.body});
            user = await userService.create(user);

            res.status(201).json({user});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParse.json())
    .put('/', async(req, res) => {
        try {
            let user = {...req.body};
            const data = await userService.findOne(user.id);
            if (data) {
                user = await userService.update(user);
                res.json({user});
            } else res.status(404).json({message: `ID not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .delete('/:id', async(req, res) => {
        try {
            const {id} = req.params;
            await userService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    })