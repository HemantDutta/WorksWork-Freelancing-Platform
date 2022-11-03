var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session');

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

//Admin Password Change
router.post('/admin-change-password', function (req, res, next) {

    if (session.admin_email !== undefined) {
        res.send(session.admin_email);
        let {email, oldPassword, newPassword, confirmPassword} = req.body;
        console.log(`Email = ${email}. oldpassword = ${oldPassword}, newpassword = ${newPassword}, confirmPassword = ${confirmPassword}`);

        let selectSQL = "SELECT * FROM `admintable` WHERE `email` = '" + email + "' AND password='" + oldPassword + "'";

        conn.query(selectSQL, (err, rows) => {
            if (err) throw err;

            if (rows.length > 0) {
                if (newPassword !== confirmPassword) {
                    res.send('noMatch');
                } else {
                    let updateSQL = "UPDATE `admintable` SET `password`='" + newPassword + "' WHERE `email`='" + email + "';"
                    conn.query(updateSQL, (err) => {
                            if (err) throw err;

                            res.send('changed');
                            console.log('changed');
                        }
                    );
                }
            } else {
                res.send("invalid");
            }


        });
    } else {
        res.send('notLoggedIn');
    }

});

router.post('/add-category', function (req, res, next) {
    let {catName, catDes} = req.body;
    console.log(req.body);

    let insertSQL = "INSERT INTO `categories` VALUES ('" + catName + "','" + catDes + "')";

    conn.query(insertSQL, (err) => {
        if (err) throw err;

        res.send('Added');
        console.log('Added');
    });
});

router.get('/get-category', function (req, res, next) {
    let selectSQl = "SELECT * FROM `categories`";

    conn.query(selectSQl, (err, rows) => {
        if (err) throw err;

        res.send(rows);
    });
});

router.get('/get-admin-info', function (req,res,next) {
   let selectSQL = "SELECT * FROM `admintable`";

   conn.query(selectSQL, (err,rows)=>{
       if (err) throw err;

       console.log("Admin Info: "+rows);
       res.send(rows);
   })
});

router.get('/get-cat-details', function (req, res, next) {
    let catname = req.query.catname;
    // let {catname} = req.query;
    console.log(req.query);

    let selectSQL = "SELECT * FROM `categories` WHERE work_category='" + catname + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        res.send(rows);
        console.log(rows);
    });
});

router.get('/admin-seller-info', function (req, res, next) {
    let selectSQL = "SELECT * FROM `freelancer`";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;


        res.send(rows);
    })
});

router.post('/set-seller-status', function (req, res, next) {
    let {sellerID, sellerStat} = req.body;
    console.log("SellerStatus: " + sellerStat);
    console.log("SellerID: " + sellerID);

    let updateSQL = "UPDATE `freelancer` SET `status`='" + sellerStat + "' WHERE `id`='" + sellerID + "'";

    conn.query(updateSQL, (err) => {
        if (err) throw err;

        if (sellerStat === 'Approved') {
            res.send('sellerApproved');
        } else {
            res.send('sellerBlocked');
        }
    })
});

router.post('/send-message', function (req, res, next) {

    let {name, email, subject, message} = req.body;
    console.log("Message Req Body: "+req.body)

    let insertSQL = "INSERT INTO `messages` VALUES ('"+name+"','"+email+"','"+subject+"','"+message+"',null)";

    conn.query(insertSQL, (err)=>{
        if (err) throw err;

        res.send('sent');
    })
});

router.get('/get-messages', function (req,res,next){
   let selectSQL = "SELECT * FROM `messages`";

   conn.query(selectSQL, (err,rows)=>{
       if(err) throw err;

       console.log('Messages: '+rows);
       res.send(rows);
   })
});

router.post('/edit-cat', function (req, res, next) {
    let {newName, newDes, oldName} = req.body;

    let updateSQL = "UPDATE `categories` SET `work_category`='" + newName + "',`description`='" + newDes + "' WHERE `work_category`='" + oldName + "'";

    conn.query(updateSQL, (err) => {
        if (err) throw err;

        res.send('Updated');
        console.log('updated!');
    });
});

router.get('/delete-category', function (req, res, next) {
    let {catName} = req.query;
    console.log(req.query);

    let deleteSQL = "DELETE FROM `categories` WHERE work_category = '" + catName + "';";

    conn.query(deleteSQL, (err) => {
        if (err) throw err;

        res.send('Deleted');
        console.log('Deleted');
    });
});

router.get('/admin-auth', function (req, res, next) {
    console.log(session.admin_email);

    if (session.admin_email !== undefined) {
        res.send('success');
    } else {
        res.send('fail');
    }
});

router.get('/admin-logout', function (req, res, next) {
    session.admin_email = undefined;
    res.send('loggedOut');
});

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;