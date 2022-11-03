var express = require('express');
var router = express.Router();
var session = require('express-session');
//connect DB
var mysql = require('mysql');
const e = require("express");
const nodemailer = require('nodemailer');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "worksworkdb"
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});


//Admin Login
router.post('/admin-login', function (req, res) {
    console.log(req.body);
    let {email, password} = req.body;

    let selectSQl = "SELECT * FROM `admintable` WHERE `email` = '" + email + "'";

    conn.query(selectSQl, (err, rows) => {
        if (err) throw err;

        if (rows.length > 0) {
            if (rows[0].password === password) {
                session.admin_email = email;
                console.log(session.admin_email);

                res.send('Success');
                console.log('success');
            } else {
                res.send('IncorrectPassword');
            }
        } else {
            res.send('invalidEmail');
        }
    })
});

//Admin Forgot Password
router.get('/admin-forgot-password', function (req, res, next) {
    let {adminEmail} = req.query;
    console.log(req.query);

    let selectSQL = "SELECT * FROM `admintable` WHERE email = '" + adminEmail + "';";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        if (rows.length > 0) {
            let characters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm@#$%&[]{}()";
            let newPassword = "";

            let email = rows[0].email;

            let length = characters.length;

            for (let i = 1; i <= 8; i++) {
                let index = Math.floor(Math.random() * length);

                newPassword += characters[index];
            }
            console.log(newPassword);

            const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "wsw.nodemailer@gmail.com",
                    pass: "09402977"
                }
            });

            const options = {
                from: "wsw.nodemailer@gmail.com",
                to: email,
                subject: "Password Recovery",
                html: "<h1 style='color: #000000'>New Password</h1><p>Your new password <span style='color: #07ff00'>" + newPassword + "</span></p>"
            }

            transport.sendMail(options, (err) => {
                if (err) {
                    console.log(err);
                    res.send('error');
                } else {
                    let update = "UPDATE `admintable` SET `password`='" + newPassword + "' WHERE email = '" + email + "';";
                    conn.query(update, err => {
                        if (err) throw err;

                        console.log("Email Sent Successfully.");
                        res.send('success');
                    });
                }
            });

        } else {
            res.send('invalidusername');
        }
    });
})

//User Forgot Password
router.get('/user-forgot-password', function (req, res, next) {
    let {userEmail} = req.query;

    let selectSQL = "SELECT * FROM `work_provider` WHERE email = '" + userEmail + "';";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        if (rows.length > 0) {
            let characters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm@#$%&[]{}()";
            let newPassword = "";

            let email = rows[0].email;

            let length = characters.length;

            for (let i = 1; i <= 8; i++) {
                let index = Math.floor(Math.random() * length);

                newPassword += characters[index];
            }
            console.log(newPassword);

            const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "wsw.nodemailer@gmail.com",
                    pass: "09402977"
                }
            });

            const options = {
                from: "wsw.nodemailer@gmail.com",
                to: email,
                subject: "Password Recovery",
                html: "<h1 style='color: #000000'>New Password</h1><p>Your new password <span style='color: #07ff00'>" + newPassword + "</span></p>"
            }

            transport.sendMail(options, (err) => {
                if (err) {
                    console.log(err);
                    res.send('error');
                } else {
                    let update = "UPDATE `work_provider` SET `password`='" + newPassword + "' WHERE email = '" + email + "';";
                    conn.query(update, err => {
                        if (err) throw err;

                        console.log("Email Sent Successfully.");
                        res.send('success');
                    });
                }
            });

        } else {
            res.send('invalidusername');
        }
    })
});

//Seller Forgot Password
router.get('/seller-forgot-password', function (req, res, next) {
    let {sellerEmail} = req.query;

    let selectSQL = "SELECT * FROM `freelancer` WHERE email = '" + sellerEmail + "';";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        if (rows.length > 0) {
            let characters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm@#$%&[]{}()";
            let newPassword = "";

            let email = rows[0].email;

            let length = characters.length;

            for (let i = 1; i <= 8; i++) {
                let index = Math.floor(Math.random() * length);

                newPassword += characters[index];
            }
            console.log(newPassword);

            const transport = nodemailer.createTransport({
                service: "yahoo",
                auth: {
                    user: "wsw_test_email@yahoo.com",
                    pass: "PvUcw+KparE4LYe"
                }
            });

            const options = {
                from: "wsw.nodemailer@gmail.com",
                to: email,
                subject: "Password Recovery",
                html: "<h1 style='color: #000000'>New Password</h1><p>Your new password <span style='color: #07ff00'>" + newPassword + "</span></p>"
            }

            transport.sendMail(options, (err) => {
                if (err) {
                    console.log(err);
                    res.send('error');
                } else {
                    let update = "UPDATE `freelancer` SET `password`='" + newPassword + "' WHERE email = '" + email + "';";
                    conn.query(update, err => {
                        if (err) throw err;

                        console.log("Email Sent Successfully.");
                        res.send('success');
                    });
                }
            });

        } else {
            res.send('invalidusername');
        }
    })
});

//User Login
router.post('/user-login', function (req, res, next) {
    let {email, password} = req.body;

    let selectSQL = "SELECT * FROM `work_provider` WHERE email = '" + email + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        if (rows.length > 0) {
            if (rows[0].password === password) {
                session.user_email = email;
                session.user_id = rows[0].id;
                res.send('success');
            } else {
                res.send('IncorrectPassword');
            }
        } else {
            res.send('invalidEmail');
        }
    });
});

//Add Admin Form
router.post('/addadmin', function (req, res) {
    let {email, password, confirmpassword, fullname, mobile, type} = req.body;
    console.log(req.body);
    let selectSQL = "SELECT * FROM `admintable` WHERE `email` = '" + email + "'";
    let insertSQL = "INSERT INTO `admintable` VALUES ('" + email + "', '" + password + "','" + fullname + "','" + mobile + "','" + type + "')";
    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        if (rows > 0) {
            res.send('Duplicate')
        } else {
            conn.query(insertSQL, (err) => {
                if (err) throw err;
                res.send('Inserted!');
            });
        }
    });
});

//Search Work
router.get('/search-work', function (req, res, next) {
    let {search} = req.query;

    let selectSQL = "SELECT work_profile.id, work_profile.title AS worktitle, work_profile.cover_photos, work_profile.description, work_profile.work_provider_id, work_provider.title, work_provider.work_category FROM work_profile INNER JOIN work_provider ON work_profile.work_provider_id = work_provider.id WHERE work_profile.title LIKE '%" + search + "%' OR work_profile.description LIKE '%" + search + "%' OR work_provider.title LIKE '%" + search + "%' OR work_provider.work_category LIKE '%" + search + "%';"

    conn.query(selectSQL, (err, rows) => {
        if (rows.length > 0) {
            console.log(rows);
            res.send(rows);
        } else {
            res.send('noResult');
        }
    });
});

//User Sign UP
router.post('/user-signup', function (req, res, next) {
    let {
        title,
        firstName,
        lastName,
        email,
        mobile,
        password,
        confirmPassword,
        category
    } = req.body;

    if (password === confirmPassword) {
        let insertSQL = "INSERT INTO `work_provider` VALUES" +
            " (null,'" + title + "','" + firstName + "','" + lastName + "','" + email + "','" + mobile + "','" + password + "','" + category + "', 'Paid')";
        conn.query(insertSQL, (err) => {
            if (err) throw err;

            res.send('inserted');
        });
    } else {
        res.send('noMatch');
    }

});

//Seller Sign Up
router.post('/freelance-signup', function (req, res, next) {
    console.log(req.body);
    let {
        firstname,
        lastname,
        mobile,
        email,
        qualification,
        description,
        password,
        confirmpassword,
        category
    } = req.body;


    let file = req.files.photo;
    let serverPath = "public/images/" + file.name;
    let databasePath = "images/" + file.name;
    file.mv(serverPath, err => {
        if (err) throw err;
    });
    let file2 = req.files.vphoto;
    let serverPath2 = "public/images/" + file2.name;
    let databasePath2 = "images/" + file2.name;
    file2.mv(serverPath2, err => {
        if (err) throw err;
    });


    if (password === confirmpassword) {
        let insertSQL = "INSERT INTO `freelancer` VALUES" +
            " (null, '" + firstname + "', '" + lastname + "','" + mobile + "','" + email + "','" + qualification + "','" + description + "','" + password + "','" + databasePath + "', null, '" + category + "', 'Pending', '"+databasePath2+"')";
        conn.query(insertSQL, (err) => {
            if (err) throw err;
        });
        res.send('success');
    } else {
        res.send('noMatch');

    }
});

// SELECT work_profile.title,work_profile.cover_photos,work_profile.description,work_profile.work_provider_id, work_provider.title, work_provider.work_category FROM work_profile INNER JOIN work_provider ON work_profile.work_provider_id = work_provider.id;

//User Info for Work Page
router.get('/get-work-info', function (req, res, next) {

    let selectSQL = "SELECT work_profile.id ,work_profile.title AS worktitle,work_profile.cover_photos,work_profile.description,work_profile.work_provider_id, work_provider.title, work_provider.work_category FROM work_profile INNER JOIN work_provider ON work_profile.work_provider_id = work_provider.id WHERE work_profile.status = 'inactive';";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        res.send(rows);
    })
});

//To Check if USER is already logged in
router.get('/is-user-logged-in', function (req, res, next) {
    if (session.user_email !== undefined) {
        res.send('alreadyLoggedIn');
        console.log('Logged In Already');
    }
});

//Seller Login
router.post('/freelance-login', function (req, res, next) {
    let {email, password} = req.body;

    let selectSQL = "SELECT * FROM `freelancer` WHERE email = '" + email + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        if (rows.length > 0) {
            if (rows[0].password !== password) {
                res.send('invalidPass');
            } else {
                if (rows[0].status === 'Approved') {
                    session.freelance_email = email;
                    session.freelance_id = rows[0].id;
                    res.send('success');
                } else if (rows[0].status === 'Pending') {
                    res.send('Pending');
                } else {
                    res.send('Blocked');
                }
            }
        } else {
            res.send('invalidEmail');
        }
    });
});

module.exports = router;
