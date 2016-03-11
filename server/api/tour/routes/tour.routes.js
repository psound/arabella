"use strict";

import TourController from "../controller/tour.controller";

export default class TourRoutes {
    static init(router) {

        console.log("Entering TourRoutes::init");

        router
            .route("/api/tours")
            .get(TourController.findAll)
            .post(TourController.create);

        router
            .route("/api/tours/getAllActive")
            .get(TourController.getAllActive);

        router
            .route("/api/tours/updateActive")
            .post(TourController.updateActive);

        router
            .route("/api/tours/delete")
            .post(TourController.delete);

    }
}
