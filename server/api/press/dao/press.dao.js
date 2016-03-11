"use strict";

import Promise from "bluebird";
import PressSchema from "../model/press.model";

let PressDAO = {};

PressDAO.getAll = () => {
    console.log("Entering PressDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering PressDAO::promise");
        PressSchema
            .findAll({
                attributes: ['copyId', 'copy', 'version', 'isActive']
            })
            .then((presss, err) => {
                console.log("Entering PressDAO::PressSchema::findAll::then");
                console.log(JSON.stringify(presss, null, 4));
                err ? reject(err) : resolve(presss);
            });
    }
    return new Promise(_promise);
}

PressDAO.create = (press) => {
    console.log("Entering PresssDAO::create");
    var _promise = (resolve, reject) => {
        console.log("Entering PressDAO::create::promise");
        console.log(JSON.stringify(press, null, 4));
        console.log(press.location);

        PressSchema
            .create({
                copy: press.rangeFrom,
                version: press.location,
                isActive: 1
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering PressDAO::PressSchema::create::then");
                console.log("newPress = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve(response) : resolve('New Press');
            });
    }
    return new Promise(_promise);
}

PressDAO.getAllActive = (copy) => {

    console.log("Entering PressDAO::getAllActive");
    var _promise = (resolve, reject) => {
        console.log("Entering PressDAO::getAllActivepromise");
        PressSchema
            .findAll({
                where: {
                    isActive: 1,
                    version: copy.version
                },
                order: [['rangeFrom', 'ASC']]
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((presss, err) => {
                console.log("Entering PressDAO::PressSchema::getAllActive::then");
                console.log(JSON.stringify(presss, null, 4));
                console.log(JSON.stringify(err, null, 4));
                if (typeof response === 'undefined' || response === null) {
                    console.log('here')
                }
                err ? reject(err) : resolve(presss);
            });
    }
    return new Promise(_promise);
}

PressDAO.updateActive = (press) => {
    console.log("Entering PressDAO::Update");
    console.log(JSON.stringify(press, null, 4));
    var _promise = (resolve, reject) => {
        console.log("Entering PressDAO-Update::promise");

        PressSchema
            .update({
                copy: press.copy
            }, {
                where: {
                    copyId: press.copyId
                }
            })
            .then((response) => {
                console.log("Entering ::PressSchema::Updtaed::then");
                console.log("UpdtaedPress = " + JSON.stringify(response, null, 4))
                console.log("updated = " + response[1]);
                response[1] ? resolve("updated") : resolve("Updated");
            });
    }
    return new Promise(_promise);
}

export default PressDAO;
