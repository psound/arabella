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

let TourSchema = sequelize.define("Tour", {
    Id: { type: Sequelize.INTEGER, field: "Id", primaryKey: true, autoIncrement: true, allowNull: false },
    rangeFrom: { type: Sequelize.DATEONLY(), field: "RangeFrom", allowNull: true },
    location: { type: Sequelize.STRING(60), field: "Location", allowNull: true },
    host: { type: Sequelize.STRING(60), field: "Host", allowNull: true },
    created: { type: Sequelize.DATE, field: "created", allowNull: true },
    audience: { type: Sequelize.STRING(60), field: "Audience", allowNull: true },
    isActive: { type: Sequelize.BLOB, field: "isActive", allowNull: false },
    rangeTo: { type: Sequelize.DATEONLY(), field: "RangeTo", allowNull: true }
},{
    tableName: "Tours"
});

export default TourSchema
