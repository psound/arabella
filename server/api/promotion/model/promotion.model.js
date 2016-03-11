"use strict";

import Sequelize from "sequelize";
import Utility from '../../../config/utility';

let utility = new Utility();
let sequelize = new Sequelize(utility.DB_NAME, utility.DB_USER, utility.DB_PASSWORD, {
    host: utility.DB_SERVER,
    dialect: "mssql",
    logging: true
});

let PromotionSchema = sequelize.define("Promotion", {
    promotionId: { type: Sequelize.INTEGER, field: "PromotionId", primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: Sequelize.STRING(50), field: "Name", allowNull: false },
    active: { type: Sequelize.BOOLEAN, field: "Active", allowNull: false },
    created: { type: Sequelize.DATE, field: "Created", allowNull: false }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: "Promotion"
});

export default PromotionSchema;
