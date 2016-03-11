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

let StudentSchema = sequelize.define("Student", {
    studentId: { type: Sequelize.INTEGER, field: "StudentId", primaryKey: true, autoIncrement: true, allowNull: false },
    code: { type: Sequelize.STRING(20), field: "Code", allowNull: false },
    email: { type: Sequelize.STRING(100), field: "Email", allowNull: false },
    firstname: { type: Sequelize.STRING(100), field: "FirstName", allowNull: true },
    address: { type: Sequelize.STRING(100), field: "Address", allowNull: true },
    city: { type: Sequelize.STRING(50), field: "City", allowNull: true },
    state: { type: Sequelize.STRING(2), field: "State", allowNull: true },
    zip: { type: Sequelize.STRING(10), field: "Zip", allowNull: true },
    cellPhone: { type: Sequelize.STRING(15), field: "CellPhone", allowNull: true },
    dobMonth: { type: Sequelize.STRING(2), field: "DOBMonth", allowNull: true },
    dobYear: { type: Sequelize.STRING(4), field: "DOBYear", allowNull: true },
    licenseNumber: { type: Sequelize.STRING(15), field: "LicenseNumber", allowNull: true },
    preSimulatorQuestion1: { type: Sequelize.STRING(50), field: "PreSimulatorQuestion1", allowNull: true },
    preSimulatorQuestion2: { type: Sequelize.STRING(250), field: "PreSimulatorQuestion2", allowNull: true },
    preSimulatorQuestion3: { type: Sequelize.STRING(50), field: "PreSimulatorQuestion3", allowNull: true },
    postSimulatorQuestion1: { type: Sequelize.STRING(250), field: "PostSimulatorQuestion1", allowNull: true },
    active: { type: Sequelize.BOOLEAN, field: "Active", allowNull: true },
    surveyType: { type: Sequelize.STRING(1), field: "SurveyType", allowNull: false },
    location: { type: Sequelize.STRING(100), field: "Location", allowNull: true },
    agency: { type: Sequelize.STRING(100), field: "Agency", allowNull: true },
    lastname: { type: Sequelize.STRING(100), field: "LastName", allowNull: true },
    created: { type: Sequelize.DATE, field: "Created", allowNull: true }
},{
    tableName: "Student"
});

export default StudentSchema
