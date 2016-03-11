"use strict";

import Promise from "bluebird";
import TourSchema from "../model/tour.model";

let TourDAO = {};

TourDAO.getAll = () => {
    console.log("Entering TourDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering TourDAO::promise");
        TourSchema
            .findAll({
                attributes: ['Id', 'rangeFrom', 'location', 'host', 'audience', 'isActive', 'rangeTo']
            })
            .then((tours, err) => {
                console.log("Entering TourDAO::TourSchema::findAll::then");
                console.log(JSON.stringify(tours, null, 4));
                err ? reject(err) : resolve(tours);
            });
    }
    return new Promise(_promise);
}

TourDAO.create = (tour) => {
    console.log("Entering ToursDAO::create");
    var _promise = (resolve, reject) => {
        console.log("Entering TourDAO::create::promise");
        console.log(JSON.stringify(tour, null, 4));
        console.log(tour.location);

        TourSchema
            .create({
                rangeFrom: tour.rangeFrom,
                location: tour.location,
                host: tour.host,
                audience: tour.audience,
                isActive: 1,
                rangeTo: tour.rangeTo
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering TourDAO::TourSchema::create::then");
                console.log("newTour = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve(response) : resolve('New Tour');
            });
    }
    return new Promise(_promise);
}

TourDAO.getAllActive = () => {

    console.log("Entering TourDAO::getAllActive");
    var _promise = (resolve, reject) => {
        console.log("Entering TourDAO::getAllActivepromise");
        TourSchema
            .findAll({
                where: {
                    isActive: 1,
                    rangeTo: {
                        $gte: new Date()
                    }
                },
                order: [['rangeFrom', 'ASC']]
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((tours, err) => {
                console.log("Entering TourDAO::TourSchema::getAllActive::then");
                console.log(JSON.stringify(tours, null, 4));
                console.log(JSON.stringify(err, null, 4));
                if (typeof response === 'undefined' || response === null) {
                    console.log('here')
                }
                err ? reject(err) : resolve(tours);
            });
    }
    return new Promise(_promise);
}

TourDAO.updateActive = (tour) => {
    console.log("Entering WorkflowDAO::Update");
    console.log(JSON.stringify(tour, null, 4));
    var _promise = (resolve, reject) => {
        console.log("Entering WorkflowDAO-Update::promise");

        TourSchema
            .update({
                isActive: tour.isActive
            }, {
                where: {
                    Id: tour.Id
                }
            })
            .then((response) => {
                console.log("Entering ::WorkflowSchema::Updtaed::then");
                console.log("UpdtaedWorkflow = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve("updated") : resolve("Updated");
            });
    }
    return new Promise(_promise);
}

TourDAO.delete = (tour) => {
    console.log("Entering WorkflowDAO::Delete");
    console.log(JSON.stringify(tour, null, 4));
    var _promise = (resolve, reject) => {
        console.log("Entering WorkflowDAO-Delete::promise");

        TourSchema
            .destroy({
                where: {
                    Id: tour.Id
                }
            })
            .then((response) => {
                console.log("Entering ::WorkflowSchema::Deleted::then");
                console.log("DeletedWorkflow = " + JSON.stringify(response, null, 4))
                console.log("deleted = " + response[1]);
                response[1] ? resolve("Deleted") : resolve("Deleted");
            });
    }
    return new Promise(_promise);
}



export default TourDAO;
