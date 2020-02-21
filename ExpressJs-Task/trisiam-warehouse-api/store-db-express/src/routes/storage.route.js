import { Router } from 'express';
import StorageService from '../services/storage.service';
import bodyParser from 'body-parser';

const storageService = new StorageService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const storage = await storageService.findAll();

            res.json({storage});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const storage = await storageService.findOne(id);

            if (storage) {
                res.json({storage});
            }else res.status(404).json({message: `ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async(req, res) => {
        try {
            let storage = {...req.body};
            console.log({...req.body});
            storage = await storageService.create(storage);

            res.status(201).json({storage});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) =>{
        try{
            let storage = {...req.body};
            const data = await storageService.findOne(storage.id);
            if(data){
                storage = await storageService.update(storage);
                res.json({storage});
            }else res.status(404).json({message:`ID not foundd`});
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
    .delete('/:id', async(req, res) => {
        try{
            const {id} = req.params;
            await storageService.delete(id);
            res.sendStatus(204);
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
