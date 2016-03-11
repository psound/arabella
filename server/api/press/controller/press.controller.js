"use strict";

import PressDAO from "../dao/press.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class PressController {

    static findAll(req, res) {
        console.log("Entering PressController::findAll");

        PressDAO
            .getAll()
            .then(presss => res.status(200).json(presss))
            .catch(error => res.status(400).json(error));
    }

    static create(req, res) {
        console.log("Entering PressController::create");
        console.log(JSON.stringify(req.body, null, 4));

        PressDAO
            .create(req.body)
            .then(() => res.status(200).json({ message : 'Press Created!' }))
            .catch(error => res.status(400).json(error));
    }

    static getAllActive(req, res) {
        console.log("Entering PressController::findAll");

        PressDAO
            .getAllActive()
            .then(presss => res.status(200).json(presss))
            .catch(error => res.status(400).json(error));
    }

    static updateActive(req, res) {
        console.log("Entering PressController::updateActive");

        PressDAO
            .updateActive(req.body)
            .then(presss => res.status(200).json(presss))
            .catch(error => res.status(400).json(error));
    }
/*
    static login(req, res) {
        console.log("Entering PressController::login");
        console.log(JSON.stringify(req.body, null, 4));

        PressDAO
            .login(req.body)
            .then(() => res.status(200).json({ message : "Successfully Logged In" }))
            .catch(error => res.status(400).json(error));
    }
*/
}
