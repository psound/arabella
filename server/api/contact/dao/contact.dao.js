"use strict";

import Promise from "bluebird";
import ContactSchema from "../model/contact.model";

let ContactDAO = {};

ContactDAO.getAll = () => {
    console.log("Entering ContactDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering ContactDAO::promise");
        ContactSchema
            .findAll({
                attributes: ['firstName', 'lastName', 'email', 'emailText']
            })
            .then((contacts, err) => {
                console.log("Entering ContactDAO::ContactSchema::findAll::then");
                console.log(JSON.stringify(contacts, null, 4));
                err ? reject(err) : resolve(contacts);
            });
    }
    return new Promise(_promise);
}

ContactDAO.create = (contact) => {
    console.log("Entering ContactsDAO::create");
    var _promise = (resolve, reject) => {
        console.log("Entering ContactDAO::create::promise");
        console.log(JSON.stringify(contact, null, 4));
        console.log(contact.email);
        console.log('r::' +resolve);
        console.log('j::' +reject);

        //const preSimulatorQuestion2 = student.preSimulatorQuestion2.toString();
        //const postSimulatorQuestion1 = student.postSimulatorQuestion1.join(",");

        //console.log("preSimulatorQuestion2 : " + preSimulatorQuestion2);
        //console.log("postSimulatorQuestion1 : " + postSimulatorQuestion1);

        ContactSchema
            .create({
                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    email: contact.email,
                    emailText: contact.emailText
            })
            /*.catch((e) => {
                console.log('ERR', e);
                reject(e);
            })*/
            .then((response) => {
                console.log("Entering ContactDAO::ContactSchema::create::then");
                console.log("newContact = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve('created') : resolve("Created");
            });
    }
    return new Promise(_promise);
}

/*
ContactDAO.login = (credentials) => {

    console.log("Entering ContactDAO::login");

    var _promise = (resolve, reject) => {

        console.log("Entering ContactDAO::create::promise");
        console.log(JSON.stringify(credentials, null, 4));
        console.log(credentials.code);
        console.log(credentials.email);

        ContactSchema
            .find({
                where : { email: credentials.email, code: credentials.code }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering ContactDAO::ContactSchema::find::then");
                console.log("response = " + JSON.stringify( response, null, 4 ))

                if ( typeof response === 'undefined' || response === null ) {
                    console.log("ConatctDAO::login::fail");
                    reject({ message : "Unsuccessful in logged in" });
                } else {
                    console.log("ContactDAO::login::success");
                    resolve( response );
                };
            });
    }

    return new Promise(_promise);
}*/

export default ContactDAO;
