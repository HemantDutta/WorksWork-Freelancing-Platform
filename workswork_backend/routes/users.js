var express = require('express');
const session = require("express-session");
var router = express.Router();

//connect DB
var mysql = require('mysql');

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

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//users authorization
router.get('/user-auth', function (req, res, next) {
    console.log(session.user_email);

    if (session.user_email !== undefined) {
        res.send('success');
    } else {
        res.send('fail');
    }
});

//seller logout
router.get('/freelance-logout', function (req, res, next) {
    session.freelance_email = undefined;
    res.send('success');
});

//seller details for seller page
router.get('/fetch-sellers', function (req, res, next) {
    let selectSQL = "SELECT * FROM `freelancer` WHERE `status` = 'Approved'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        if (rows.length > 0) {
            res.send(rows);
        } else {
            res.send('noData');
        }
    })
});

//Get User Id for Work Profile
router.get('/get-user-id', function (req, res, next) {

    console.log(session.user_email);
    let selectSQL = "SELECT * FROM `work_provider` WHERE email = '" + session.user_email + "';";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        res.send(rows);
    })
});

//User Logout
router.get('/user-logout', function (req, res, next) {
    session.user_email = undefined;
    session.user_id = undefined;
    res.data('loggedOut!')
});

//Get Active Jobs
router.get('/get-active-jobs', function (req,res,next){

    let selectSQL = "SELECT work_profile.title AS work_title, work_profile.cover_photos as work_photos, work_profile.description AS work_description, work_profile.budget_per_hour, bids.bid_amount, work_provider.title AS user_title, work_provider.work_category FROM work_profile INNER JOIN bids ON work_profile.id = bids.work_id INNER JOIN work_provider ON work_profile.work_provider_id = work_provider.id WHERE bids.freelancer_id = '"+session.freelance_id+"' AND work_profile.status = 'active' AND bids.status='Active';";

    conn.query(selectSQL, (err,rows)=>{
        if(err) throw err;

        console.log(rows);
        res.send(rows);
    })
});

//Add Work
router.post('/add-work', function (req, res, next) {
    let {title, description, workProviderId, workingHour, budgetPerHour, lastDateApply} = req.body;
    console.log(req.body);
    let file = req.files.photo;


    let serverPath = "public/images/" + file.name;
    let databasePath = "images/" + file.name;
    file.mv(serverPath, err => {
        if (err) throw err;
    });

    let insertSQL = "INSERT INTO `work_profile` VALUES (null ,'" + title + "','" + databasePath + "','" + description + "','" + workProviderId + "','" + workingHour + "','" + budgetPerHour + "','" + lastDateApply + "','inactive')";

    conn.query(insertSQL, (err) => {
        if (err) throw err;

        res.send('added');
    })
});

//work view
router.get('/work-view', function (req,res,next){
   let {id} = req.query;

   let selectSQL = "SELECT work_profile.*, work_provider.title AS brandTitle, work_provider.work_category FROM work_profile INNER JOIN work_provider ON work_profile.work_provider_id = work_provider.id WHERE work_profile.id = '"+id+"';";

   conn.query(selectSQL, (err,rows)=>{
       if (err) throw err;

       console.log(rows);
       res.send(rows);
   })
});

//User Change Password
router.post('/user-change-password', function (req, res, next) {
    let {oldPassword, newPassword, confirmNewPassword} = req.body;
    console.log(req.body);

    //Retrieving Old Password to check it
    let selectSQL = "SELECT * FROM `work_provider` WHERE email = '" + session.user_email + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        if (rows[0].password !== oldPassword) {
            res.send('oldNoMatch');
        } else if (newPassword !== confirmNewPassword) {
            res.send('noMatch');
        } else {
            let updateSQL = "UPDATE `work_provider` SET `password`='" + newPassword + "' WHERE `email` = '" + session.user_email + "'";

            conn.query(updateSQL, (err) => {
                if (err) throw err;

                res.send('Updated!');
            });
        }
    })
});

//Seller Change Password
router.post('/seller-change-password', function (req, res, next) {
    let {oldPassword, newPassword, confirmNewPassword} = req.body;
    console.log(req.body);

    //Retrieving Old Password to check it
    let selectSQL = "SELECT * FROM `freelancer` WHERE email = '" + session.freelance_email + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        if (rows[0].password !== oldPassword) {
            res.send('oldNoMatch');
        } else if (newPassword !== confirmNewPassword) {
            res.send('noMatch');
        } else {
            let updateSQL = "UPDATE `freelancer` SET `password`='" + newPassword + "' WHERE `email` = '" + session.freelance_email + "'";

            conn.query(updateSQL, (err) => {
                if (err) throw err;

                res.send('Updated!');
            });
        }
    })
});

//Seller info for view page;
router.get('/seller-view', function (req, res, next) {
    let {id} = req.query;
    console.log(req.query);

    let selectSQL = "SELECT * FROM `freelancer` WHERE id = '" + id + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        res.send(rows);
    })
});

//edit user profile
router.post('/edit-profile', function (req, res, next) {

    let {title, firstname, lastName, mobile, category} = req.body;

    let updateSQL = "UPDATE `work_provider` SET `title`='" + title + "',`first_name`='" + firstname + "',`last_name`='" + lastName + "',`mobile`='" + mobile + "', `work_category`='" + category + "' WHERE `email`= '" + session.user_email + "'";

    conn.query(updateSQL, (err) => {
        if (err) throw err;

        res.send('updated');
    });
});

//seller auth
router.get('/seller-auth', function (req, res, next) {
    if (session.freelance_email !== undefined) {
        res.send('success');
    } else {
        res.send('fail');
    }
});

//Seller Edit Profile
router.post('/edit-seller-profile', function (req, res, next) {
    let {firstName, lastName, mobile, qualification, description, category} = req.body;
    console.log(req.body);

    let updateSQL = "";

    if (req.files !== null) {
        let file = req.files.photo;
        let serverPath = "public/images/" + file.name;
        let databasePath = "images/" + file.name;
        file.mv(serverPath, err => {
            if (err) throw err;
        });

        updateSQL = "UPDATE `freelancer` SET `first_name`='" + firstName + "', `last_name`='" + lastName + "', `mobile`='" + mobile + "', `qualification`='" + qualification + "', `description`='" + description + "', `cover_photo`='" + databasePath + "', `category`='" + category + "' WHERE `email`='" + session.freelance_email + "'";
    } else {
        updateSQL = "UPDATE `freelancer` SET `first_name`='" + firstName + "', `last_name`='" + lastName + "', `mobile`='" + mobile + "', `qualification`='" + qualification + "', `description`='" + description + "', `category`='" + category + "' WHERE `email`='" + session.freelance_email + "'";

    }

    conn.query(updateSQL, (err) => {
        if (err) throw err;

        res.send('updated!');
    })
});

//seller info for dashboard
router.get('/fetch-seller-info', function (req, res, next) {

    let selectSQL = "SELECT * FROM `freelancer` WHERE email = '" + session.freelance_email + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        res.send(rows);
    })
});

//Send Bid
router.post('/send-bid', function(req,res,next){
   let {bidAmount, message, workID, freelancerID} = req.body;
   console.log(req.body);

   let insertSQL = "INSERT INTO `bids` VALUES (null, '"+ bidAmount +"', '"+ workID +"', '"+ freelancerID +"', '"+ message +"', 'Pending')";

   conn.query(insertSQL, (err)=>{
       if (err) throw err;

       res.send('sent');
   })
});

//Get-bid-info
router.get('/get-bid-info', function (req,res,next){

   let selectSQL = "SELECT bids.*, work_profile.title, work_profile.budget_per_hour, work_profile.work_provider_id, freelancer.first_name, freelancer.last_name FROM bids INNER JOIN work_profile ON bids.work_id = work_profile.id INNER JOIN freelancer ON bids.freelancer_id = freelancer.id WHERE work_profile.work_provider_id = '"+session.user_id+"';";

   conn.query(selectSQL, (err,rows)=>{
       if (err) throw err;

       console.log('Bid Info'+rows);
       res.send(rows);
   });
});


//set Bid Status
router.post('/set-status', function(req,res, next){
   let {bidID, action} = req.body;
   console.log(req.body);

   let updateSQL = "UPDATE `bids` SET `status`='"+action+"' WHERE `id`='"+bidID+"'";

   conn.query(updateSQL, (err)=>{
       if (err) throw err;


       if(action==='Active'){
           res.send('BidApproved');
           let updateSQL = "UPDATE work_profile INNER JOIN bids ON work_profile.id = bids.work_id SET work_profile.status = 'active' WHERE bids.id = '"+bidID+"';";
           conn.query(updateSQL, (err)=>{
               if (err) throw err;

               console.log('Job Activated');
           });
       }
       else{
           res.send('BidRejected');
           let updateSQL = "UPDATE work_profile INNER JOIN bids ON work_profile.id = bids.work_id SET work_profile.status = 'inactive' WHERE bids.id = '"+bidID+"';";
           conn.query(updateSQL, (err)=>{
               if (err) throw err;

               console.log('Job Inactive');
           });
       }
   })
});

//User profile information for Profile Edit Page
router.get('/get-user-profile', function (req, res, next) {

    let selectSQL = "SELECT * FROM `work_provider` WHERE email = '" + session.user_email + "'";

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        res.send(rows);
    });
});

//Get Jobs from particular user
router.get('/getJobs', function (req, res, next) {

    let selectSQL = "SELECT work_profile.id,work_profile.title AS worktitle,work_profile.cover_photos,work_profile.description,work_profile.work_provider_id, work_provider.title, work_provider.work_category FROM work_profile INNER JOIN work_provider ON work_profile.work_provider_id = work_provider.id WHERE work_provider.email = '" + session.user_email + "';"

    conn.query(selectSQL, (err, rows) => {
        if (err) throw err;

        res.send(rows);
        console.log(rows);
    });
});

//user Email for Change password
router.get('/get-user-email', function (req, res, next) {
    console.log('email retrieved: ' + session.user_email);
    res.send(session.user_email);
});
module.exports = router;
