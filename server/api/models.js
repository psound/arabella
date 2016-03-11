"use strict";

//import Promise from "bluebird";
//import Sequelize from "sequelize";
//import Utility from '../config/utility';
//import _ from "lodash";
//import { StudentSchema, RoleSchema } from "./student/model/student.model.js";
//import ModuleSchema from "./module/model/module.model.js";
//import WorkflowSchema from "./workflow/model/workflow.model.js";

/*
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

let RoleSchema = sequelize.define("Role", {
    roleId: { type: Sequelize.INTEGER, field: "RoleId", primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: Sequelize.STRING(25), field: "Name", allowNull: false }
},{
    tableName: "Role"
});

let StudentSchema = sequelize.define("Student", {
    studentId: { type: Sequelize.INTEGER, field: "StudentId", primaryKey: true, autoIncrement: true, allowNull: false },
    email: { type: Sequelize.STRING(100), field: "Email", allowNull: false },
    code: { type: Sequelize.INTEGER, field: "Code", allowNull: false },
    firstName: { type: Sequelize.STRING(50), field: "FirstName", allowNull: true },
    lastName: { type: Sequelize.STRING(50), field: "LastName", allowNull: true },
    city: { type: Sequelize.STRING(50), field: "City", allowNull: true },
    state: { type: Sequelize.STRING(2), field: "State", allowNull: true },
    active: { type: Sequelize.BOOLEAN, field: "Active", allowNull: false },
    created: { type: Sequelize.DATE, field: "Created", allowNull: false }
},{
    tableName: "Student"
});

StudentSchema.belongsTo(RoleSchema, {
    foreignKey: {
        name: 'roleId',
        allowNull: false
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

let WorkflowSchema = sequelize.define("Workflow", {
    studentId: { type: Sequelize.INTEGER, field: "StudentId", primaryKey: true, allowNull: false },
    moduleId: { type: Sequelize.INTEGER, field: "ModuleId", primaryKey: true, allowNull: false },
    created : { type : Sequelize.DATE, defaultValue : Sequelize.NOW }
}, {
    tableName: "Workflow"
});

WorkflowSchema.belongsTo(StudentSchema, {
    foreignKey: { name: "studentId", allowNull: false }
});

WorkflowSchema.belongsTo(ModuleSchema, {
    foreignKey: { name: "moduleId", allowNull: false }
});
*/

let StudentDAO = {};
let WorkflowDAO = {};
let ContactDAO = {};
let EducatorDAO = {};
let TourDAO = {};
let PressDAO = {};
let AdminDAO = {};

/*
StudentDAO.getAll = () => {
    console.log("Entering StudentDAO.getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering StudentDAO.promise");
        StudentSchema
            .findAll({
                attributes: ['studentId', 'email', 'code', 'firstName', 'lastName'],
                include : [
                    { model : RoleSchema, attributes: ["name"] }
                ]
            })
            .then((err, students) => {
                console.log("Entering StudentDAO.findAll().then()");
                console.log(JSON.stringify(students, null, 4));
                err ? reject(err) : resolve(students);
            });
    }
    return new Promise(_promise);
}

WorkflowDAO.getAll = () => {
    console.log("Entering WorkflowDAO.getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering WorkflowDAO.promise");
        WorkflowSchema
            .findAll({
                //include: [StudentSchema, ModuleSchema]
                include : [{
                    model : StudentSchema, as: "Student",
                    where : {
                        email : "ryan@jackmorton.com"
                    },
                    include : [{
                        model : RoleSchema, as: "Role"
                    }]
                },{
                    model : ModuleSchema, as: "Module"
                }]
            })
            .then((err, workflows) => {
                console.log("Entering WorkflowDAO.findAll().then()");
                err ? reject(err) : resolve(workflows);
            });
    }
    return new Promise(_promise);
}
*/

module.exports = {
    WorkflowDAO: WorkflowDAO,
    StudentDAO: StudentDAO,
    ContactDAO: ContactDAO,
    EducatorDAO: EducatorDAO,
    TourDAO: TourDAO,
    PressDAO: PressDAO,
    AdminDAO: AdminDAO
};
