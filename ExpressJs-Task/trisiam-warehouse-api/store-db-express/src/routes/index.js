import express from "express";
import warehouseRoute from "./warehouse.route";
import itemRoute from "./item.route";
import manifestRoute from "./manifest.route";
import rentRoute from "./rent.route";
import managerRoute from "./storage-manager.route";
import storageRoute from "./storage.route";
import tenantRoute from "./tenant.route";

// const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

export default express.Router()
    .use('/api', swaggerUi.serve)
    .get('/api', swaggerUi.setup(swaggerDocument))
    .use('/warehouse', warehouseRoute)
    .use('/tenant', tenantRoute)
    .use('/storage', storageRoute)
    .use('/manager', managerRoute)
    .use('/rent', rentRoute)
    .use('/manifest', manifestRoute)
    .use('/item', itemRoute)
    .use((req, res, next) => {
        res.status(404).json({message : 'Not Found'});
    });