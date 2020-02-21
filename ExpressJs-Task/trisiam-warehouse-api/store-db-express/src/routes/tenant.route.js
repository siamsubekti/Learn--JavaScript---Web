import { Router } from 'express';
import TenantService from '../services/tenant.service';
import bodyParser from 'body-parser';

const tenantService = new TenantService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const tenant = await tenantService.findAll();

            res.json({tenant});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;

            const tenant = await tenantService.findOne(id);

            if (tenant) {
                res.json({tenant});
            }else res.status(404).json({message: `ID ${id} not found`});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .post('/', async(req, res) => {
        try {
            let tenant = {...req.body};
            console.log({...req.body});
            tenant = await tenantService.create(tenant);

            res.status(201).json({tenant});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    })
    .use(bodyParser.json())
    .put('/', async(req, res) =>{
        try{
            let tenant = {...req.body};
            const data = await tenantService.findOne(tenant.id);
            if(data){
                tenant = await tenantService.update(tenant);
                res.json({tenant});
            }else res.status(404).json({message:`ID not foundd`});
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
    .delete('/:id', async(req, res) => {
        try{
            const {id} = req.params;
            await tenantService.delete(id);
            res.sendStatus(204);
        } catch(error) {
            res.status(500).json({message : error.message});
        }
    })
