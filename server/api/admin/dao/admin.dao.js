"use strict";

import Promise from "bluebird";
import AdminSchema from "../model/admin.model";

let AdminDAO = {};

AdminDAO.login = (credentials) => {

    console.log("Entering AdminDAO::login");

    var _promise = (resolve, reject) => {

        console.log("Entering AdminDAO::create::promise");
        //console.log(JSON.stringify(credentials, null, 4));
        //console.log(credentials.username);

        AdminSchema
            .find({
                where : { user: credentials.username, password: credentials.password }
            })
            .catch((e) => {
                console.log('ERR', e);
                reject(e);
            })
            .then((response) => {
                console.log("Entering AdminDAO::StudentSchema::find::then");
                //console.log("response = " + JSON.stringify( response, null, 4 ))

                if ( typeof response === 'undefined' || response === null ) {
                    console.log("Ad inDAO::login::fail");
                    reject({ message : "Unsuccessful in logged in" });
                } else {
                    console.log("AdminDAO::success");
                    //console.log("Cool = " + JSON.stringify(response, null, 4))
                    resolve( response );
                };
            });
    }

    return new Promise(_promise);
}



export default AdminDAO;
