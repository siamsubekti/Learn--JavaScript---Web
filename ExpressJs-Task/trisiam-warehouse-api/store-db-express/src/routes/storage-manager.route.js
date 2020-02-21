import { Router } from 'express';
import ManagerService from '../services/storage-manager.service';
import bodyParser from 'body-parser';

const managerService = new ManagerService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const manager = await managerService.findAll();

            res.json({manager});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const manager = await manifestService.findOne(id);

            if (manager) {
                res.json({manager});
            }else res.status(404).json({message: `ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async(req, res) => {
        try {
            let manager = {...req.body};
            console.log({...req.body});
            manager = await managerService.create(manager);

            res.status(201).json({manager});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) =>{
        try{
            let manager = {...req.body};
            const data = await managerService.findOne(manager.id);
            if(data){
                manager = await managerService.update(manager);
                res.json({manager});
            }else res.status(404).json({message:`ID not foundd`});
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
    .delete('/:id', async(req, res) => {
        try{
            const {id} = req.params;
            await managerService.delete(id);
            res.sendStatus(204);
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
