'use strict';

import mailer from 'express-mailer';

export default class EmailDispatcher {
    static send(app) {
        
        mailer.extend(app, {
            from: 'no-reply@example.com',
            host: 'smtp.gmail.com',             // hostname
            secureConnection: true,             // use SSL
            port: 465,                          // port for secure SMTP
            transportMethod: 'SMTP',            // default is SMTP. Accepts anything that nodemailer accepts
            auth: {
                user: 'ryancmartin1976@gmail.com',
                pass: 'Madison1!!'
            }
        });
        
        app.mailer.send('email', {
            to: 'ryancmartin1976@gmail.com',    // REQUIRED. This can be a comma delimited string just like a normal email to field. 
            subject: 'Test Email',              // REQUIRED.
            otherProperty: 'Other Property'     // All additional properties are also passed to the template as local variables.
        }, function (err) {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
        });
        
        app.get('/render-mail', function (req, res) {
            app.mailer.render('email', {
                to: 'test@localhost',
                subject: 'Test Email',
                pretty: true
            },
            function (err, email) {
                if (err) {
                    console.log('Sending Mail Failed!');
                    console.log(err);
                    return;
                };
                res.header('Content-Type', 'text/plain');
                res.send(email);
            });
        });

        // Send mail via the application object:
        app.get('/send-mail-via-app', function (req, res) {
            res.render('send-mail-via-app', {
                title: 'Send Mail Via App'
            });
        });

        app.post('/send-mail-via-app', function (req, res) {
            app.mailer.send('email', {
                to: 'ryancmartin1976@gmail.com',
                subject: 'Test Email'
            }, function (err) {
                if (err) {
                    console.log('Sending Mail Failed!');
                    console.log(err);
                    return;
                };
                res.redirect('/');
            });
        });
        
    }
}