"use strict";

import AdminController from "../controller/admin.controller";

export default class AdminRoutes {
    static init(router) {

        console.log("Entering AdminRoutes::init");

        router
            .route("/api/admin/login")
            .post(AdminController.login);

    }
}
