import express from "express";

import cors from 'cors';

import DataAccess from './dal/dataacess.js';



const instance = express();




instance.use(express.json());

instance.use(express.urlencoded({extended:false}));



instance.use(cors({

  origin: '*',

  methods: '*',

  allowedHeaders: '*'

}));

const port = process.env.PORT || 7013;

const dal = new DataAccess();



instance.post("/api/register",dal.createUser);
instance.post("/api/login",dal.login);
instance.get("/api/testApi",dal.testApi);
instance.post("/api/testApipost",dal.testApi);




instance.listen(port, () => {

    console.log(`Server Started on Port ${port}`);

  });