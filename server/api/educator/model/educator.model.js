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

let EducatorSchema = sequelize.define("Educator", {
    EducatorID: { type: Sequelize.INTEGER, field: "EducatorID", primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: Sequelize.STRING(50), field: "Name", allowNull: true },
    email: { type: Sequelize.STRING(60), field: "Email", allowNull: true },
    school: { type: Sequelize.STRING(120), field: "School", allowNull: true },
    city: { type: Sequelize.STRING(60), field: "City", allowNull: true },
    state: { type: Sequelize.STRING(50), field: "State", allowNull: true },
    created: { type: Sequelize.DATE, field: "created", allowNull: true }
},{
    tableName: "Educators"
});

export default EducatorSchema
