"use strict";

import EducatorDAO from "../dao/educator.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class EducatorController {

    static findAll(req, res) {
        console.log("Entering EducatorController::findAll");

        EducatorDAO
            .getAll()
            .then(educators => res.status(200).json(educators))
            .catch(error => res.status(400).json(error));
    }

    static create(req, res) {
        console.log("Entering EducatorController::create");
        console.log(JSON.stringify(req.body, null, 4));

        EducatorDAO
            .create(req.body)
            .then(() => res.status(200).json({ message : 'Educator Created!' }))
            .catch(error => res.status(400).json(error));
    }
/*
    static login(req, res) {
        console.log("Entering EducatorController::login");
        console.log(JSON.stringify(req.body, null, 4));

        EducatorDAO
            .login(req.body)
            .then(() => res.status(200).json({ message : "Successfully Logged In" }))
            .catch(error => res.status(400).json(error));
    }
*/
}
