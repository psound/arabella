"use strict";

import nodemailer from 'nodemailer';
import mailerOptions from "../../../config/email.conf.js";

export default class EmailController {

    static send(req, res) {
        console.log("Entering EmailController::send()");
        var reqEmails = "Julie_Jackson@jackmorton.com, Marcy_Singer@jackmorton.com, Brenna.morrissey@arbella.com";
        if(req.body.from == 'contact') {
            // Create a SMTP transporter object
            //const transporter = nodemailer.createTransport(mailerOptions);
            const transporter = nodemailer.createTransport('smtps://distractologyinfo%40gmail.com:Prot4$Car@smtp.gmail.com');

            console.log("este es req:: "+JSON.stringify(req.body, null, 4));
            //console.log("este es res:: "+JSON.stringify(res, null, 4));
            console.log('SEND:: '+req.body.from);
            // setup e-mail data with unicode symbols
            // body.email to send to the email on the form
            const mailOptions = {
                from: 'Distractology Contac Us Form <info@distractology.com>', // sender address
                to: req.body.email, // list of receivers
                subject: 'Arbella Distractology :: Contact Us Confirmation',           // Subject line
                text: 'Thank you for contacting us about participating in our Distractology program. Someone will be in contact with you soon with more details. Kind Regards, The Arbella Insurance Foundation www.distractology.com',        // plaintext body
                html: '<html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Arbella - Distractology101 - Teacher Survey E-mail</title> <style type="text/css"> /* Client-specific Styles */ #outlook a{padding:0;}/* Force Outlook to provide a "view in browser" menu link. */ body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}/* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */ .ExternalClass{width:100%;}/* Force Hotmail to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;}/* Force Hotmail to display normal line spacing. */ #backgroundTable{margin:0; padding:0; width:100% !important; line-height: 100% !important;}img{outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}a img{border:none;}.image_fix{display:block;}p{margin: 0px 0px !important;}table td{border-collapse: collapse;}table{border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;}a{color: #1f62ac;text-decoration: none;text-decoration:none!important;}/*STYLES*/ table[class=full]{width: 100%; clear: both;}/*IPAD STYLES*/ @media only screen and (max-width: 640px){a[href^="tel"], a[href^="sms"]{text-decoration: none; color: #1f62ac; /* or whatever your want */ pointer-events: none; cursor: default;}.mobile_link a[href^="tel"], .mobile_link a[href^="sms"]{text-decoration: default; color: #1f62ac !important; pointer-events: auto; cursor: default;}table[class=devicewidth]{width: 440px!important;text-align:center!important;}td[class=devicewidth]{width: 440px!important;text-align:center!important;}img[class=devicewidth]{width: 440px!important;text-align:center!important;}img[class=banner]{width: 440px!important;height:147px!important;}table[class=devicewidthinner]{width: 420px!important;text-align:center!important;}table[class=icontext]{width: 345px!important;text-align:center!important;}img[class="colimg2"]{width:420px!important;height:243px!important;}table[class="emhide"]{display: none!important;}img[class="logo"]{width:440px!important;height:213px!important;}img[class="sponsor"]{width:200px!important;height:67px!important;}img[class="button"]{width:187px!important;height:41px!important;}}/*IPHONE STYLES*/ @media only screen and (max-width: 480px){a[href^="tel"], a[href^="sms"]{text-decoration: none; color: #9ec459; /* or whatever your want */ pointer-events: none; cursor: default;}.mobile_link a[href^="tel"], .mobile_link a[href^="sms"]{text-decoration: default; color: #9ec459 !important; pointer-events: auto; cursor: default;}.emailCode{font-size:1em !important; ;}table[class=devicewidth]{width: 280px!important;text-align:center!important;}td[class=devicewidth]{width: 280px!important;text-align:center!important;}img[class=devicewidth]{width: 280px!important;text-align:center!important;}img[class=banner]{width: 280px!important;height:93px!important;}table[class=devicewidthinner]{width: 260px!important;text-align:center!important;}table[class=icontext]{width: 186px!important;text-align:center!important;}img[class="colimg2"]{width:260px!important;height:150px!important;}table[class="emhide"]{display: none!important;}img[class="logo"]{width:280px!important;height:136px!important;}img[class="sponsor"]{width:150px!important;height:50px!important;}img[class="button"]{width:150px!important;height:33px!important;}}</style> </head> <body><table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table bgcolor="#ffffff" width="600" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth"> <tbody> <tr> <td align="center"> <a target="_blank" href="http://www.distractology.com"><img width="600" border="0" height="291" alt="" border="0" style="display:block; border:none; outline:none; text-decoration:none;" src="http://emails.jackmorton.net/arbella/2016/header_distractology_email.png" class="logo"></a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table></td></tr></tbody></table> <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table bgcolor="#ffffff" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%" height="20"></td></tr><tr> <td> <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner"> <tbody> <tr> <td style="font-family: Helvetica, arial, sans-serif; font-size: 14px; font-weight:bold; color: #838282; text-align:left;line-height: 24px;"> </td></tr><tr> <td height="5"></td></tr><tr> <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #838282; text-align:left;line-height: 24px;"><p>Thank you for contacting us about participating in our Distractology program.</p><p>Someone will be in contact with you soon with more details.</p><br>Kind Regards,<br>The Arbella Insurance Foundation<br><a href="http://www.distractology.com" target="_blank" style="color:#ed621d;">www.distractology.com</a><br><br></td></tr><tr> <td width="100%" height="40"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table><table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%" height="20"></td></tr><!-- Spacing <tr> <td align="center" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 11px;color: #ffffff"> If you no longer wish to receive emails please <a href="$UNSUB_URL$" style="text-decoration: none; color: #1f62ac">unsubscribe </a> </td></tr><tr> <td width="100%" height="20"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table> </body> </html>'  // html body
            };


            // Send email
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error);
                }

                console.log("Message sent...");
                console.log("API Response Info: " + JSON.stringify(info, null, 4));

                return ("Email Sent!");
            });

            // Create a SMTP transporter object
            //const transporter = nodemailer.createTransport(mailerOptions);
            const transporter2 = nodemailer.createTransport('smtps://distractologyinfo%40gmail.com:Prot4$Car@smtp.gmail.com');

            console.log("este es req:: "+JSON.stringify(req.body, null, 4));
            //console.log("este es res:: "+JSON.stringify(res, null, 4));
            console.log('SEND:: '+req.body.from);
            // setup e-mail data with unicode symbols
            // body.email to send to the email on the form
            const mailOptions2 = {
                from: 'Distractology Contac Us Form <info@distractology.com>', // sender address
                to: reqEmails, // list of receivers
                subject: 'Arbella Distractology :: Contact Request Form',           // Subject line
                text: 'There has been a contact form with no html entered.',        // plaintext body
                html: '<html><body><p>Email from Distractology Contact Form:</p><br><br><b>Name: </b>'+req.body.firstName+'&nbsp;'+req.body.lastName+'<br><b>Email: </b>'+req.body.email+'<br><b>Comment: </b>'+req.body.emailText+'</body></html>'
            };


            // Send email
            transporter2.sendMail(mailOptions2, function(error, info) {
                if (error) {
                    return console.log(error);
                }

                console.log("Message sent...");
                console.log("API Response Info: " + JSON.stringify(info, null, 4));

                return res.status(200).json({ message: "Email Sent!" });
            });
        }
        if(req.body.from == 'elearning') {
            // Create a SMTP transporter object
            //const transporter = nodemailer.createTransport(mailerOptions);
            const transporter = nodemailer.createTransport('smtps://distractologyinfo%40gmail.com:Prot4$Car@smtp.gmail.com');

            console.log("este es req:: "+JSON.stringify(req.body, null, 4));
            //console.log("este es res:: "+JSON.stringify(res, null, 4));
            console.log('SEND:: '+req.body.from);
            // setup e-mail data with unicode symbols
            // body.email to send to the email on the form
            const mailOptions = {
                from: 'Elerning Certificate <info@distractology.com>', // sender address
                to: req.body.email, // list of receivers
                subject: 'Arbella Distractology :: ELEARNING Confirmation',           // Subject line
                text: 'Thank you for contacting us about participating in our Distractology program. Someone will be in contact with you soon with more details. Kind Regards, The Arbella Insurance Foundation www.distractology.com',        // plaintext body
                html: '<html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Arbella - Distractology101 - Teacher Survey E-mail</title> <style type="text/css"> /* Client-specific Styles */ #outlook a{padding:0;}/* Force Outlook to provide a "view in browser" menu link. */ body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}/* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */ .ExternalClass{width:100%;}/* Force Hotmail to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;}/* Force Hotmail to display normal line spacing. */ #backgroundTable{margin:0; padding:0; width:100% !important; line-height: 100% !important;}img{outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}a img{border:none;}.image_fix{display:block;}p{margin: 0px 0px !important;}table td{border-collapse: collapse;}table{border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;}a{color: #1f62ac;text-decoration: none;text-decoration:none!important;}/*STYLES*/ table[class=full]{width: 100%; clear: both;}/*IPAD STYLES*/ @media only screen and (max-width: 640px){a[href^="tel"], a[href^="sms"]{text-decoration: none; color: #1f62ac; /* or whatever your want */ pointer-events: none; cursor: default;}.mobile_link a[href^="tel"], .mobile_link a[href^="sms"]{text-decoration: default; color: #1f62ac !important; pointer-events: auto; cursor: default;}table[class=devicewidth]{width: 440px!important;text-align:center!important;}td[class=devicewidth]{width: 440px!important;text-align:center!important;}img[class=devicewidth]{width: 440px!important;text-align:center!important;}img[class=banner]{width: 440px!important;height:147px!important;}table[class=devicewidthinner]{width: 420px!important;text-align:center!important;}table[class=icontext]{width: 345px!important;text-align:center!important;}img[class="colimg2"]{width:420px!important;height:243px!important;}table[class="emhide"]{display: none!important;}img[class="logo"]{width:440px!important;height:213px!important;}img[class="sponsor"]{width:200px!important;height:67px!important;}img[class="button"]{width:187px!important;height:41px!important;}}/*IPHONE STYLES*/ @media only screen and (max-width: 480px){a[href^="tel"], a[href^="sms"]{text-decoration: none; color: #9ec459; /* or whatever your want */ pointer-events: none; cursor: default;}.mobile_link a[href^="tel"], .mobile_link a[href^="sms"]{text-decoration: default; color: #9ec459 !important; pointer-events: auto; cursor: default;}.emailCode{font-size:1em !important; ;}table[class=devicewidth]{width: 280px!important;text-align:center!important;}td[class=devicewidth]{width: 280px!important;text-align:center!important;}img[class=devicewidth]{width: 280px!important;text-align:center!important;}img[class=banner]{width: 280px!important;height:93px!important;}table[class=devicewidthinner]{width: 260px!important;text-align:center!important;}table[class=icontext]{width: 186px!important;text-align:center!important;}img[class="colimg2"]{width:260px!important;height:150px!important;}table[class="emhide"]{display: none!important;}img[class="logo"]{width:280px!important;height:136px!important;}img[class="sponsor"]{width:150px!important;height:50px!important;}img[class="button"]{width:150px!important;height:33px!important;}}</style> </head> <body><table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table bgcolor="#ffffff" width="600" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth"> <tbody> <tr> <td align="center"> <a target="_blank" href="http://www.distractology.com"><img width="600" border="0" height="291" alt="" border="0" style="display:block; border:none; outline:none; text-decoration:none;" src="http://emails.jackmorton.net/arbella/2016/header_distractology_email.png" class="logo"></a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table></td></tr></tbody></table> <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table bgcolor="#ffffff" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%" height="20"></td></tr><tr> <td> <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner"> <tbody> <tr> <td style="font-family: Helvetica, arial, sans-serif; font-size: 14px; font-weight:bold; color: #838282; text-align:left;line-height: 24px;"> </td></tr><tr> <td height="5"></td></tr><tr> <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #838282; text-align:left;line-height: 24px;"><p>Thank you for participating in our Distractology program.</p><p>You can download your certificate.<br><a href="'+req.body.glink+'">Click Here:</a></p><br>Kind Regards,<br>The Arbella Insurance Foundation<br><a href="http://www.distractology.com" target="_blank" style="color:#ed621d;">www.distractology.com</a><br><br></td></tr><tr> <td width="100%" height="40"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table><table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%" height="20"></td></tr><!-- Spacing <tr> <td align="center" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 11px;color: #ffffff"> If you no longer wish to receive emails please <a href="$UNSUB_URL$" style="text-decoration: none; color: #1f62ac">unsubscribe </a> </td></tr><tr> <td width="100%" height="20"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table> </body> </html>'  // html body
            };

            // Send email
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error);
                }

                console.log("Message sent...");
                console.log("API Response Info: " + JSON.stringify(info, null, 4));

                return res.status(200).json({ message: "Email Sent!" });
            });
        }
        if(req.body.from == 'recover') {
            // Create a SMTP transporter object
            //const transporter = nodemailer.createTransport(mailerOptions);
            const transporter = nodemailer.createTransport('smtps://distractologyinfo%40gmail.com:Prot4$Car@smtp.gmail.com');

            console.log("este es req:: "+JSON.stringify(req.body, null, 4));
            //console.log("este es res:: "+JSON.stringify(res, null, 4));
            console.log('SEND:: '+req.body.code);
            // setup e-mail data with unicode symbols
            // body.email to send to the email on the form
            const mailOptions = {
                from: 'E-Learning - Recover <info@distractology.com>', // sender address
                to: req.body.email, // list of receivers
                subject: 'Arbella Distractology :: Code Recover',           // Subject line
                text: 'Thank you for contacting us about participating in our Distractology program. Here is your code: '+req.body.code+', The Arbella Insurance Foundation www.distractology.com',        // plaintext body
                html: '<html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Arbella - Distractology101 - Teacher Survey E-mail</title> <style type="text/css"> /* Client-specific Styles */ #outlook a{padding:0;}/* Force Outlook to provide a "view in browser" menu link. */ body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}/* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */ .ExternalClass{width:100%;}/* Force Hotmail to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;}/* Force Hotmail to display normal line spacing. */ #backgroundTable{margin:0; padding:0; width:100% !important; line-height: 100% !important;}img{outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}a img{border:none;}.image_fix{display:block;}p{margin: 0px 0px !important;}table td{border-collapse: collapse;}table{border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;}a{color: #1f62ac;text-decoration: none;text-decoration:none!important;}/*STYLES*/ table[class=full]{width: 100%; clear: both;}/*IPAD STYLES*/ @media only screen and (max-width: 640px){a[href^="tel"], a[href^="sms"]{text-decoration: none; color: #1f62ac; /* or whatever your want */ pointer-events: none; cursor: default;}.mobile_link a[href^="tel"], .mobile_link a[href^="sms"]{text-decoration: default; color: #1f62ac !important; pointer-events: auto; cursor: default;}table[class=devicewidth]{width: 440px!important;text-align:center!important;}td[class=devicewidth]{width: 440px!important;text-align:center!important;}img[class=devicewidth]{width: 440px!important;text-align:center!important;}img[class=banner]{width: 440px!important;height:147px!important;}table[class=devicewidthinner]{width: 420px!important;text-align:center!important;}table[class=icontext]{width: 345px!important;text-align:center!important;}img[class="colimg2"]{width:420px!important;height:243px!important;}table[class="emhide"]{display: none!important;}img[class="logo"]{width:440px!important;height:213px!important;}img[class="sponsor"]{width:200px!important;height:67px!important;}img[class="button"]{width:187px!important;height:41px!important;}}/*IPHONE STYLES*/ @media only screen and (max-width: 480px){a[href^="tel"], a[href^="sms"]{text-decoration: none; color: #9ec459; /* or whatever your want */ pointer-events: none; cursor: default;}.mobile_link a[href^="tel"], .mobile_link a[href^="sms"]{text-decoration: default; color: #9ec459 !important; pointer-events: auto; cursor: default;}.emailCode{font-size:1em !important; ;}table[class=devicewidth]{width: 280px!important;text-align:center!important;}td[class=devicewidth]{width: 280px!important;text-align:center!important;}img[class=devicewidth]{width: 280px!important;text-align:center!important;}img[class=banner]{width: 280px!important;height:93px!important;}table[class=devicewidthinner]{width: 260px!important;text-align:center!important;}table[class=icontext]{width: 186px!important;text-align:center!important;}img[class="colimg2"]{width:260px!important;height:150px!important;}table[class="emhide"]{display: none!important;}img[class="logo"]{width:280px!important;height:136px!important;}img[class="sponsor"]{width:150px!important;height:50px!important;}img[class="button"]{width:150px!important;height:33px!important;}}</style> </head> <body><table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table bgcolor="#ffffff" width="600" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth"> <tbody> <tr> <td align="center"> <a target="_blank" href="http://www.distractology.com"><img width="600" border="0" height="291" alt="" border="0" style="display:block; border:none; outline:none; text-decoration:none;" src="http://emails.jackmorton.net/arbella/2016/header_distractology_email.png" class="logo"></a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table></td></tr></tbody></table> <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table bgcolor="#ffffff" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%" height="20"></td></tr><tr> <td> <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner"> <tbody> <tr> <td style="font-family: Helvetica, arial, sans-serif; font-size: 14px; font-weight:bold; color: #838282; text-align:left;line-height: 24px;"> </td></tr><tr> <td height="5"></td></tr><tr> <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #838282; text-align:left;line-height: 24px;"><p>Here is your code '+req.body.code+'.</p><br>Kind Regards,<br>The Arbella Insurance Foundation<br><a href="http://www.distractology.com" target="_blank" style="color:#ed621d;">www.distractology.com</a><br><br></td></tr><tr> <td width="100%" height="40"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table><table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable"> <tbody> <tr> <td> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%"> <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth"> <tbody> <tr> <td width="100%" height="20"></td></tr><!-- Spacing <tr> <td align="center" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 11px;color: #ffffff"> If you no longer wish to receive emails please <a href="$UNSUB_URL$" style="text-decoration: none; color: #1f62ac">unsubscribe </a> </td></tr><tr> <td width="100%" height="20"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table> </body> </html>'  // html body
            };


            // Send email
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error);
                }

                console.log("Message sent...");
                console.log("API Response Info: " + JSON.stringify(info, null, 4));

                return res.status(200).json({ message: "Email Sent!" });
            });
        }
    }
}
