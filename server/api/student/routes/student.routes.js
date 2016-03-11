"use strict";

import StudentController from "../controller/student.controller";

export default class StudentRoutes {
    static init(router) {

        console.log("Entering StudentRoutes::init");

        router
            .route("/api/students")
            .get(StudentController.findAll)
            .post(StudentController.create);

        router
            .route("/api/students/login")
            .post(StudentController.login);

        router
            .route("/api/students/getStudent")
            .post(StudentController.getStudent);

    }
}
