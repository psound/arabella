"use strict";

import ContactController from "../controller/contact.controller";

export default class ContactRoutes {
    static init(router) {

        console.log("Entering ContactRoutes::init");

        router
            .route("/api/contacts")
            .get(ContactController.findAll)
            .post(ContactController.create);

        /*router
            .route("/api/students/login")
            .post(StudentController.login);*/

    }
}
