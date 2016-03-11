"use strict";

import AdminDAO from "../dao/admin.dao";
import StaticDispatcher from '../../../commons/static/index';

export default class AdminController {

    static login(req, res) {
        console.log("Entering AdminController::login");
        //console.log(JSON.stringify(req.body, null, 4));

        AdminDAO
            .login(req.body)
            .then(() => res.status(200).json({ message : "Successfully Logged In" }))
            .catch(error => res.status(400).json(error));
    }

}
