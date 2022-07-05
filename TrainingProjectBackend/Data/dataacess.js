import { Sequelize } from "sequelize";

import pkg from "sequelize";

//import jsonwebtoken from "jsonwebtoken";

const { DataTypes } = pkg;

import role from "./../models/role.js";
import employees from "./../models/employees.js";
import registration from "./../models/registration.js";
import status from "./../models/status.js";
import userinformation from "./../models/userinformation.js";

const sequelize = new Sequelize("Project", "postgres", "R00t", {
    host: "localhost",
    port: 5432,
    dialect: "postgres"
});
sequelize.authenticate().then(
    (authenticate) => {
      console.log("====================================");
      console.log(`Connection Successful`);
      console.log("====================================");
    },
    (error) => {
      console.log(`Connection failed due to error occured: ${error.message}`);
    }
  );

const jwtSettings = {

    jwtSecret: "123456",

};



class AuthLogic {

    constructor() {

        employees.init(sequelize, DataTypes);
        role.init(sequelize, DataTypes);
        registration.init(sequelize, DataTypes);
        status.init(sequelize, DataTypes);
        userinformation.init(sequelize, DataTypes);

    }

    async testApi(req, resp) {
        console.log("API working")
        return resp.status(201).send({ message: `API called` });
    }

    async testApiPost(req, resp) {

        console.log(" post API working")
        console.log(req);
    }

    async login(req, resp) {
        const user = req.body;
        console.log("Post");
        console.log(user);
        await sequelize.sync({ force: false });
        const checkLogin = await userinformation.findOne({
            where: { email: user.email, userpassword: user.userpassword },
        });

        if (checkLogin !== null) {
            return resp.status(201).send({ message: `Username and pass is correct`, data: checkLogin.toJSON });
        } else {
            return resp.status(409).send({ message: `Incorrect Data` });
        }
    }

    async createUser(req, resp) {
        const user = req.body;

        await sequelize.sync({ force: false });

        const findUser = await userinformation.findOne({

            where: { email: user.email },

        });

        if (findUser !== null) {

            return resp

                .status(409)

                .send({ message: `User ${user.email} is already present` });

        }

        const userCreated = await userinformation.create({


            customername: user.customername,
            userpassword: user.userpassword,
            state: user.state,
            city: user.city,
            email: user.email,
            address: user.address,
            roleid: '5',
            primarycontactnumber: user.primarycontactnumber,
            mobilenumber: user.mobilenumber,
        });

        return resp

            .status(201)

            .send({ message: `User ${user.username} is registered successfully` });

    }



}



export default AuthLogic;
