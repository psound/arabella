"use strict";

import Promise from "bluebird";
import EducatorSchema from "../model/educator.model";

let EducatorDAO = {};

EducatorDAO.getAll = () => {
    console.log("Entering EducatorDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering EducatorDAO::promise");
        EducatorSchema
            .findAll({
                attributes: ['firstName', 'lastName', 'email', 'emailText']
            })
            .then((educators, err) => {
                console.log("Entering EducatorDAO::EducatorSchema::findAll::then");
                console.log(JSON.stringify(educators, null, 4));
                err ? reject(err) : resolve(educators);
            });
    }
    return new Promise(_promise);
}

EducatorDAO.create = (educator) => {
    console.log("Entering EducatorsDAO::create");
    var _promise = (resolve, reject) => {
        console.log("Entering EducatorDAO::create::promise");
        console.log(JSON.stringify(educator, null, 4));
        console.log(educator.email);

        //const preSimulatorQuestion2 = student.preSimulatorQuestion2.toString();
        //const postSimulatorQuestion1 = student.postSimulatorQuestion1.join(",");

        //console.log("preSimulatorQuestion2 : " + preSimulatorQuestion2);
        //console.log("postSimulatorQuestion1 : " + postSimulatorQuestion1);

        EducatorSchema
            .findOrCreate({
                where : { email: educator.email },
                defaults: {
                    name: educator.name,
                    email: educator.email,
                    city: educator.city,
                    state: educator.state,
                    school: educator.school
                }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering EducatorDAO::EducatorSchema::create::then");
                console.log("newEducator = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve(response) : reject(false);
            });
    }
    return new Promise(_promise);
}

/*
EducatorDAO.login = (credentials) => {

    console.log("Entering EducatorDAO::login");

    var _promise = (resolve, reject) => {

        console.log("Entering EducatorDAO::create::promise");
        console.log(JSON.stringify(credentials, null, 4));
        console.log(credentials.code);
        console.log(credentials.email);

        EducatorSchema
            .find({
                where : { email: credentials.email, code: credentials.code }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering EducatorDAO::EducatorSchema::find::then");
                console.log("response = " + JSON.stringify( response, null, 4 ))

                if ( typeof response === 'undefined' || response === null ) {
                    console.log("ConatctDAO::login::fail");
                    reject({ message : "Unsuccessful in logged in" });
                } else {
                    console.log("EducatorDAO::login::success");
                    resolve( response );
                };
            });
    }

    return new Promise(_promise);
}*/

export default EducatorDAO;
