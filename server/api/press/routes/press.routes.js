"use strict";

import PressController from "../controller/press.controller";

export default class PressRoutes {
    static init(router) {

        console.log("Entering PressRoutes::init");

        router
            .route("/api/press")
            .get(PressController.findAll)
            .post(PressController.create);

        router
            .route("/api/press/getAllActive")
            .get(PressController.getAllActive);

        router
            .route("/api/press/updateActive")
            .post(PressController.updateActive);

    }
}
