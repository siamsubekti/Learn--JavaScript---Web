import { Router } from 'express';
import ManifestService from '../services/manifest.service';
import bodyParser from 'body-parser';

const manifestService = new ManifestService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const manifest = await manifestService.findAll();

            res.json({manifest});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const data = await manifestService.findOne(id);

            if (data) {
                res.json({data});
            }else res.status(404).json({message: `ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async(req, res) => {
        try {
            let manifest = {...req.body};
            console.log({...req.body});
            manifest = await manifestService.create(manifest);

            res.status(201).json({manifest});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) =>{
        try{
            let manifest = {...req.body};
            const data = await manifestService.findOne(manifest.id);
            if(data){
                manifest = await manifestService.update(manifest);
                res.json({manifest});
            }else res.status(404).json({message:`ID not foundd`});
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
    .delete('/:id', async(req, res) => {
        try{
            const {id} = req.params;
            await manifestService.delete(id);
            res.sendStatus(204);
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
