 var express     = require("express"),
     router      = express.Router(),
     passport    = require("passport"),
     User        = require("../models/user");


//route Route
router.get("/", function(req, res){
        res.render("landing");
    });
    
 //====================
 ///AUTH ROUTES
 //====================
 
 //SIGN UP ROUTE
 router.get("/register", function(req, res) {
    res.render("register"); 
 });
 
 //handle signup logic
 router.post("/register", function(req, res) {
    // res.send("up route")
    
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            req.flash("error", err.message);
            return res.render("register");
        } 
        passport.authenticate("local")(req, res, function(){
             req.flash("success", "Welcome to YelpCamp  " + user.username);
              res.redirect("/campgrounds");
        });
    });
 });
 
 // LOGIN ROUTE
 router.get("/login", function(req, res) {
     res.render("login");
 });
 //Handle LOGIN logic
 router.post("/login", passport.authenticate("local", {successRedirect: "/campgrounds",failureRedirect: "/login"}), function(req, res) {
     
 });
 
 //LOGOUT ROUTE
 router.get("/logout", function(req, res) {
     req.logout();
     req.flash("success", "Successfully logged out");
     res.redirect("/campgrounds");
 });
 //middleware
 function isLoggedIn(req, res, next){
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect("/login");
 }
 
 module.exports   =   router;