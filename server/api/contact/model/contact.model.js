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

let ContactSchema = sequelize.define("Contact", {
    contactID: { type: Sequelize.INTEGER, field: "contactID", primaryKey: true, autoIncrement: true, allowNull: false },
    firstName: { type: Sequelize.STRING(40), field: "firstName", allowNull: true },
    lastName: { type: Sequelize.STRING(40), field: "lastName", allowNull: true },
    email: { type: Sequelize.STRING(80), field: "email", allowNull: true },
    emailText: { type: Sequelize.STRING(250), field: "emailText", allowNull: true },
    created: { type: Sequelize.DATE, field: "created", allowNull: true }
},{
    tableName: "Contact"
});

export default ContactSchema
