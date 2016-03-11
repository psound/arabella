"use strict";

import Promise from "bluebird";
import StudentSchema from "../model/student.model";

let StudentDAO = {};

StudentDAO.getAll = () => {
    console.log("Entering StudentDAO::getAll");
    var _promise = (resolve, reject) => {


        var today = new Date();
        var lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

        console.log("Entering StudentDAO::promise");
        StudentSchema
            .findAll({
                where: {
                    Created: {
                        $between: [lastWeek.toISOString(), today.toISOString()]
                    }
                }
            })
            .then((students, err) => {
                console.log("Entering StudentDAO::StudentSchema::findAll::then");
                console.log(JSON.stringify(students, null, 4));
                err ? reject(err) : resolve(students);
            });
    }
    return new Promise(_promise);
}

StudentDAO.create = (student) => {
    console.log("Entering StudentDAO::create");
    var _promise = (resolve, reject) => {
        console.log("Entering StudentDAO::create::promise");
        console.log(JSON.stringify(student, null, 4));
        console.log(student.code);
        console.log(student.email);

        const preSimulatorQuestion2 = student.preSimulatorQuestion2.toString();
        const postSimulatorQuestion1 = student.postSimulatorQuestion1.join(",");

        console.log("preSimulatorQuestion2 : " + preSimulatorQuestion2);
        console.log("postSimulatorQuestion1 : " + postSimulatorQuestion1);

        StudentSchema
            .findOrCreate({
                where : { email: student.email },
                defaults: {
                    surveyType: student.surveyType,
                    code: student.code,
                    email: student.email,
                    firstname: student.firstName,
                    address: student.address,
                    city: student.city,
                    state: student.state,
                    zip: student.zip,
                    cellPhone: student.cellPhone,
                    dobMonth: student.dobMonth,
                    dobDay: student.dobDay,
                    dobYear: student.dobYear,
                    licenseType: student.licenseType,
                    licenseNumber: student.licenseNumber,
                    preSimulatorQuestion1: student.preSimulatorQuestion1,
                    preSimulatorQuestion2: preSimulatorQuestion2,
                    preSimulatorQuestion3: student.preSimulatorQuestion3,
                    postSimulatorQuestion1: postSimulatorQuestion1,
                    location: student.location,
                    agency: student.agency,
                    lastname: student.lastName
                }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering StudentDAO::StudentSchema::create::then");
                console.log("newStudent = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve(response) : reject(student.email);
            });
    }
    return new Promise(_promise);
}

StudentDAO.login = (credentials) => {

    console.log("Entering StudentDAO::login");

    var _promise = (resolve, reject) => {

        console.log("Entering StudentDAO::create::promise");
        console.log(JSON.stringify(credentials, null, 4));
        console.log(credentials.code);
        console.log(credentials.email);

        StudentSchema
            .find({
                where : { email: credentials.email, code: credentials.code }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering StudentDAO::StudentSchema::find::then");
                console.log("response = " + JSON.stringify( response, null, 4 ))

                if ( typeof response === 'undefined' || response === null ) {
                    console.log("StudentDAO::login::fail");
                    reject({ message : "Unsuccessful in logged in" });
                } else {
                    console.log("StudentDAO::success");
                    console.log("theStudent = " + JSON.stringify(response, null, 4))
                    resolve( response );
                };
            });
    }

    return new Promise(_promise);
}

StudentDAO.getStudent = (credentials) => {

    console.log("Entering StudentDAO::getStudent");

    var _promise = (resolve, reject) => {

        console.log("Entering getStudentDAO::create::promise");
        console.log(JSON.stringify(credentials, null, 4));
        console.log(credentials.code);
        console.log(credentials.email);

        StudentSchema
            .find({
                where : { email: credentials.email }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering getStudentDAO::getStudentSchema::find::then");
                console.log("response = " + JSON.stringify( response, null, 4 ))

                if ( typeof response === 'undefined' || response === null ) {
                    console.log("getStudentDAO::login::fail");
                    reject({ message : "Unsuccessful in logged in" });
                } else {
                    console.log("getStudentDAO::login::success");
                    resolve( response );
                };
            });
    }

    return new Promise(_promise);
}
export default StudentDAO;
