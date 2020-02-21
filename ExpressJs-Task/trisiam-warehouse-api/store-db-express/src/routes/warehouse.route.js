import { Router } from "express";
import WarehouseService from "../services/warehouse.service";
import bodyParser from "body-parser";

const warehouseService = new WarehouseService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const warehouse = await warehouseService.findAll();

            res.json({warehouse});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const warehouse = await warehouseService.findOne(id);

            if (warehouse){
                res.json({warehouse}); 
            } else res.status(404).json({message: `ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async (req, res) => {
        try {
            let warehouse = {...req.body};
            console.log({...req.body});
            warehouse = await warehouseService.create(warehouse);

            res.status(201).json({warehouse});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) => {
        try {
            let warehouse = {...req.body};
            const data = await warehouseService.findOne(warehouse.id);
            if(data){
                warehouse = await warehouseService.update(warehouse);
                res.json({warehouse});
            }else res.status(404).json({message:`ID not foundd`});
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })