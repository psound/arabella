"use strict";

import ModuleDAO from "../dao/module.dao";

export default class ModuleController {
  static findAll(req, res) {
    console.log("Entering ModuleController::ModuleDAO::getAll()");
    ModuleDAO
      .getAll()
      .then(modules => res.status(200).json(modules))
      .catch(error => res.status(400).json(error));
  }
}