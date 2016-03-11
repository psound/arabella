"use strict";

import EducatorController from "../controller/educator.controller";

export default class EducatorRoutes {
    static init(router) {

        console.log("Entering EducatorRoutes::init");

        router
            .route("/api/educators")
            .get(EducatorController.findAll)
            .post(EducatorController.create);

        /*router
            .route("/api/students/login")
            .post(StudentController.login);*/

    }
}
