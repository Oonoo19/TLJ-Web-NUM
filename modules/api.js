import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import cors from 'cors';
//import category from './routes/category.js';
import pg from "pg";

//const cors = require("cors");
const { Pool } = pg;
const port = 5002;
const app = express();
app.use(cors());
// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace * with your client's origin URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//app.use(cors());


const options = {
    definition: {
        openapi: '3.0.0',
        info:{
            title:'WebAPI demo api',
            version: '1.0.0',
        },
    },
    //apis: ['./index3.js','./routes/*.js'],
    apis: ['./modules/api.js'],
};
const returnSuccess = {success: true};
const openapiSpec = await swaggerJSDoc(options);

const UIoptions = {
    explorer:true
};

app.use(express.json());
//app.use("/category",category);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(openapiSpec,UIoptions));


const pool = new Pool({
    host:"localhost",
    port: "5432",
    database:"tlj",
    user: "postgres",
    password:"root"
});
/**
 *  @openapi
 *  /products:
 *  get:
 *      description: Welcome to swagger-jsdocs
 *      responses:
 *          200:
 *              description: Returns a mysterious string.
 */
app.get('/products',(req,res)=>{
    pool.query(`select json_agg("products".*) as products
    from products`,(err,data)=> {
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify(data.rows[0]));
        res.end();
    });
    // pool.query(`select *from products`,(err,data)=>{
    //     for (const row of data.rows){
    //         res.send(`{"products":[{"id":${row.id},"name":${row.name}}]}`);
    //     }
    //     res.end();
    // });
    
})
/**
 *   @openapi 
 *   /products:
 *    post:
 *      summary: Create a new product
 *      requestBody: 
 *          description: Optional description in *Markdown*
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name : 
 *                              type: string
 *                          description:
 *                              type: string
 *                          price:
 *                              type: integer
 *                          image:
 *                              type: string
 *      responses:
 *          201:
 *              description: product added successfully.
 *          402: 
 *              description: product name is invalid.
 *          422: 
 *              description: already exists or has an error.
 *                          
 */  
app.post('/products',(req,res)=>{
    const {id,name,description,price,image} = req.body;
    pool.query(`insert into Products(id, name , description,price,image) values ($1,$2,$3,$4,$5)`,[id, name , description,price,image],(err,data)=>{
        res.status(201).send(returnSuccess);
    })
});

app.listen(port,()=>{
    console.log(`Server is listening at http: //localhost:port`)
})

export default pool;

