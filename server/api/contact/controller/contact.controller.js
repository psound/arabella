"use strict";

import ContactDAO from "../dao/contact.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class ContactController {

    static findAll(req, res) {
        console.log("Entering ContactController::findAll");

        ContactDAO
            .getAll()
            .then(contacts => res.status(200).json(contacts))
            .catch(error => res.status(400).json(error));
    }

    static create(req, res) {
        console.log("Entering ContactController::create");
        console.log(JSON.stringify(req.body, null, 4));

        ContactDAO
            .create(req.body)
            .then(() => res.status(200).json({ message : 'Contact Created!' }))
            .catch(error => res.status(400).json(error));
    }
/*
    static login(req, res) {
        console.log("Entering ContactController::login");
        console.log(JSON.stringify(req.body, null, 4));

        ContactDAO
            .login(req.body)
            .then(() => res.status(200).json({ message : "Successfully Logged In" }))
            .catch(error => res.status(400).json(error));
    }
*/
}
