import { Router } from 'express';
import RentService from '../services/rent.service';
import bodyParser from 'body-parser';

const rentService = new RentService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const rent = await rentService.findAll();

            res.json({rent});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const rent = await rentService.findOne(id);

            if (rent) {
                res.json({rent});
            }else res.status(404).json({message: `ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async(req, res) => {
        try {
            let rent = {...req.body};
            console.log({...req.body});
            rent = await rentService.create(rent);

            res.status(201).json({rent});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) =>{
        try{
            let rent = {...req.body};
            const data = await rentService.findOne(rent.id);
            if(data){
                rent = await rentService.update(rent);
                res.json({rent});
            }else res.status(404).json({message:`ID not foundd`});
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
    .delete('/:id', async(req, res) => {
        try{
            const {id} = req.params;
            await rentService.delete(id);
            res.sendStatus(204);
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
