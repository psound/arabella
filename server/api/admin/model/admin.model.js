"use strict";

import Sequelize from "sequelize";
import Utility from '../../../config/utility';

let utility = new Utility();
let sequelize = new Sequelize(utility.DB_NAME, utility.DB_USER, utility.DB_PASSWORD, {
    host: utility.DB_SERVER,
    dialect: "mssql",
    logging: true,
    define: {
        timestamps: false,
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
});

let AdminSchema = sequelize.define("Users", {
    Id: { type: Sequelize.INTEGER, field: "Id", primaryKey: true, autoIncrement: true, allowNull: false },
    user: { type: Sequelize.STRING(60), field: "User", allowNull: true },
    password: { type: Sequelize.STRING(60), field: "password", allowNull: true },
    created: { type: Sequelize.DATE, field: "created", allowNull: true }
},{
    tableName: "Users"
});

export default AdminSchema
