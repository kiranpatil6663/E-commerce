import express from 'express'
import {listProducts,addProduct,removeProducts,singleProduct} from '../controllers/productController.js'


const productRouter =express.Router();

productRouter.post('/add',upload.fields,addProduct);
productRouter.post('/remove',removeProducts);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts);

export  default productRouter