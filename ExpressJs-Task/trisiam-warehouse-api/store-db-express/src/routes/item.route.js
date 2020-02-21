import { Router } from "express";
import ItemService from "../services/item.service";
import bodyParser from "body-parser";

const itemService = new ItemService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const item =  await itemService.findAll();

            res.json({item});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const data =  await itemService.findOne(id);

            if (data) {
                res.json({data});
            } else res.status(404).json({message:`ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async (req, res) => {
        try {
            let item = await itemService.create(req.body);

            res.json({item});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) => {
        try {
            let item = {...req.body};
            const data = await itemService.findOne(item.id);

            if (data) {
                item = await itemService.update(item);
                res.json({item});
            } else res.status(404).json({message : `ID not found`});
        } catch (error) {
            res.status(500).json({message :error.message});
        }
    })
    .delete('/', async (req, res) => {
        try {
            const {id} = req.params;
            await itemService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })