"use strict";

import StudentDAO from "../dao/student.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class StudentController {

    static findAll(req, res) {
        console.log("Entering StudentController::findAll");

        StudentDAO
            .getAll()
            .then(students => res.status(200).json(students))
            .catch(error => res.status(400).json(error));
    }

    static create(req, res) {
        console.log("Entering StudentController::create");
        console.log(JSON.stringify(req.body, null, 4));

        StudentDAO
            .create(req.body)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json(error));
    }

    static login(req, res) {
        console.log("Entering StudentController::login");
        console.log(JSON.stringify(req.body, null, 4));

        StudentDAO
            .login(req.body)
            .then(() => res.status(200).json({ message : "Successfully Logged In" }))
            .catch(error => res.status(400).json(error));
    }

    static getStudent(req, res) {
        console.log("Entering StudentController::getStudent");
        console.log(JSON.stringify(req.body, null, 4));

        StudentDAO
            .getStudent(req.body)
            .then(response => res.status(200).json({ message : response }))
            .catch(error => res.status(400).json(error));
    }

}
