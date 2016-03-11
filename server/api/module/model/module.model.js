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

let ModuleSchema = sequelize.define("Module", {
    moduleId: { type: Sequelize.INTEGER, field: "ModuleId", primaryKey: true, autoIncrement: true, allowNull: false },
    step: { type: Sequelize.INTEGER, field: "Step", allowNull: false },
    name: { type: Sequelize.STRING(50), field: "Name", allowNull: true },
    active: { type: Sequelize.BOOLEAN, field: "Active", allowNull: false },
    created: { type: Sequelize.DATE, field: "Created", allowNull: false }
},{
    tableName: "Module"
});

export default ModuleSchema;