import express from 'express';
import { getdata, register } from '../controller/productController.js';

const route = express.Router();

route.post('/register', register);
route.get('/getdata', getdata);

export default route;