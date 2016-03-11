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

let WorkflowSchema = sequelize.define("Workflow", {
    id: { type: Sequelize.INTEGER, field: "id", primaryKey: true, autoIncrement: true, allowNull: false },
    CodeId: { type: Sequelize.STRING(20), field: "codeId", primaryKey: false, allowNull: true },
    ModuleId: { type: Sequelize.INTEGER, field: "ModuleId", primaryKey: false, allowNull: true },
    Created : { type: Sequelize.DATE, field: "Created", allowNull: true }
}, {
    tableName: "Workflow"
});



export default WorkflowSchema;
