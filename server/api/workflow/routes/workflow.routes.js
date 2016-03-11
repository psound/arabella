"use strict";

import WorkflowController from "../controller/workflow.controller";

export default class WorkflowRoutes {
    static init(router) {
        console.log("Entering WorkflowRoutes::init");
        router
            .route("/api/workflows")
            //.get(WorkflowController.findAll)
            .post(WorkflowController.create);

        router
            .route("/api/workflows/update")
            .post(WorkflowController.update);

        router
            .route("/api/workflows/findAll")
            .post(WorkflowController.findAll);
    }
}
