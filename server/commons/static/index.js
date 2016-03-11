"use strict";

import fs from 'fs';

export default class StaticDispatcher {

    static sendIndex(req, res) {
        var _root = process.cwd();
        res.setHeader('Content-Type', 'text/html');
		//res.writeHead(200,{"Content-Type": "audio/mpeg"});
        fs.createReadStream(_root + '/client/__tmp/index.html').pipe(res);
    }

}
