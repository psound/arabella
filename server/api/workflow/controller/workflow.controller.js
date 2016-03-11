"use strict";

import WorkflowDAO from "../dao/workflow.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class WorkflowController {

  static findAll(req, res) {
    console.log("Entering WorkflowController::findAll");
    console.log(JSON.stringify(req.body, null, 4));
    WorkflowDAO
      .getAll(req.body)
      .then(response => res.status(200).json({ message : response }))
      .catch(error => res.status(400).json(error));
  }

  static create(req, res) {
      console.log("Entering WorkflowController::create");
      console.log(JSON.stringify(req.body, null, 4));

      WorkflowDAO
          .create(req.body)
          .then(() => res.status(200).json({ message : 'Workflow Created!' }))
          .catch(error => res.status(400).json(error));
  }

  static update(req, res) {
      console.log("Entering WorkflowController::update");
      console.log(JSON.stringify(req.body, null, 4));

      WorkflowDAO
          .update(req.body)
          .then(() => res.status(200).json({ message : 'Workflow Updated!' }));
          //.catch(error => res.status(400).json(error));
  }
}
