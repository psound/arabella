"use strict";

import ModuleController from "../controller/module.controller";

export default class ModuleRoutes {
    static init(router) {
        console.log("Entering ModuleRoutes::init");
        router
            .route("/api/modules")
            .get(ModuleController.findAll);
    }
}