"use strict";

import Promise from "bluebird";
import WorkflowSchema from "../model/workflow.model";
import StudentSchema from "../../student/model/student.model";
import ModuleSchema from "../../module/model/module.model";
import ContactSchema from "../../contact/model/contact.model";

let WorkflowDAO = {};

WorkflowDAO.getAll = (workflow) => {
    console.log("Entering WorkflowDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering WorkflowDAO::promise");
        console.log(JSON.stringify(workflow, null, 4));
        WorkflowSchema
            .find({
                where: { CodeId: workflow.studentCode }
            })
            .then((response) => {
                console.log("Entering WorkflowDAO::StudentSchema::create::then");
                console.log("workflow = " + JSON.stringify(response, null, 4))
                resolve(response);
            });
    }
    return new Promise(_promise);
}

WorkflowDAO.create = (workflow) => {
    console.log("Entering WorkflowDAO::create");
    var _promise = (resolve, reject) => {
        console.log("Entering WorkflowDAO::create::promise");
        console.log(JSON.stringify(workflow, null, 4));
        WorkflowSchema
            .findOrCreate({
                where : { CodeId: workflow.studentCode },
                defaults: {
                    CodeId: workflow.studentCode,
                    ModuleId: workflow.module
                }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering ::WorkflowSchema::create::then");
                console.log("newWorkflow = " + JSON.stringify(response, null, 4))
                console.log("created = " + response[1]);
                response[1] ? resolve(response) : reject(false);
            });
    }
    return new Promise(_promise);
}

WorkflowDAO.update = (workflow) => {
    console.log("Entering WorkflowDAO::Update");
    console.log(JSON.stringify(workflow, null, 4));
    var _promise = (resolve, reject) => {
        console.log("Entering WorkflowDAO-Update::promise");

        WorkflowSchema
            .update({ ModuleId: workflow.module },
                { where: { CodeId: workflow.studentCode }
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

export default WorkflowDAO;
