"use strict";

import Promise from "bluebird";
import ModuleSchema from "../model/module.model";

let ModuleDAO = {};

ModuleDAO.getAll = () => {
    console.log("Entering ModuleDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering ModuleDAO::promise");
        ModuleSchema
          .findAll()
          .then((modules, err) => {
              console.log("Entering ModuleDAO::ModuleSchema::findAll::then");
              err ? reject(err) : resolve(modules);
          });
    }
    return new Promise(_promise);
}

export default ModuleDAO;
