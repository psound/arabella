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

let PressSchema = sequelize.define("Press", {
    Id: { type: Sequelize.INTEGER, field: "CopyId", primaryKey: true, autoIncrement: true, allowNull: false },
    copy: { type: Sequelize.STRING(4000), field: "Copy", allowNull: true },
    version: { type: Sequelize.STRING(6), field: "Version", allowNull: true },
    created: { type: Sequelize.DATE, field: "Created", allowNull: true },
    isActive: { type: Sequelize.BLOB, field: "isActive", allowNull: false }
},{
    tableName: "Press"
});

export default PressSchema
