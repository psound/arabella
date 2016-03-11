"use strict";

import EmailController from "../controller/email.controller";

export default class EmailRoutes {
    static init(app, router) {
        console.log("Entering EmailRoutes::init()");
        router
            .route("/api/email")
            .get(EmailController.send)
            .post(EmailController.send);
    }
}