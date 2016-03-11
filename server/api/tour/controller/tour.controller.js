"use strict";

import TourDAO from "../dao/tour.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class TourController {

    static findAll(req, res) {
        console.log("Entering TourController::findAll");

        TourDAO
            .getAll()
            .then(tours => res.status(200).json(tours))
            .catch(error => res.status(400).json(error));
    }

    static create(req, res) {
        console.log("Entering TourController::create");
        console.log(JSON.stringify(req.body, null, 4));

        TourDAO
            .create(req.body)
            .then(() => res.status(200).json({ message : 'Tour Created!' }))
            .catch(error => res.status(400).json(error));
    }

    static getAllActive(req, res) {
        console.log("Entering TourController::findAll");

        TourDAO
            .getAllActive()
            .then(tours => res.status(200).json(tours))
            .catch(error => res.status(400).json(error));
    }

    static updateActive(req, res) {
        console.log("Entering TourController::updateActive");

        TourDAO
            .updateActive(req.body)
            .then(tours => res.status(200).json(tours))
            .catch(error => res.status(400).json(error));
    }

    static delete(req, res) {
        console.log("Entering TourController::Delete");

        TourDAO
            .delete(req.body)
            .then(tours => res.status(200).json(tours))
            .catch(error => res.status(400).json(error));
    }

}
