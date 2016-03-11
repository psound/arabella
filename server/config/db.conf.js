"use strict";

import Sequelize from "sequelize";
import dbConst from '../constants/db.json';

export default class DBConfig {
    static init() {

        const config = {
            env : 'development',
            database : {
                dbName : 'arbella_distractology',
                type : 'mssql',
                server : "76.12.116.168",
                user : "pgarcia",
                password : "Madison1!!",
                pool : {
                    max : 10,
                    min : 0,
                    timeout : 30000
                }
            },
            env : 'production',
            database : {
                dbName : 'arbella_distractology',
                type : 'mssql',
                server : "76.12.116.167",
                user : "pgarcia",
                password : "Madison1!!",
                pool : {
                    max : 10,
                    min : 0,
                    timeout : 30000
                }
            }
        };

        console.log(env);

        let sequelize = new Sequelize(config.database.dbName, config.database.user, config.database.password, {
            host: config.database.server,
            dialect: config.database.type,
            logging: true
        });

        return sequelize;
    }
};
