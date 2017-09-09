 var express     = require("express"),
     router      = express.Router(),
     Campground  = require("../models/campground"),
     Comment     = require("../models/comment"),
     middleware  = require("../middleware");
 
 //INDEX ROUTE
 router.get("/", function(req, res){
    //   Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:allcampgrounds});
        }
    });
       
    });
    
    //CREATE ROUTE
    router.post("/",middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name,price: price, image: image, description: desc, author: author};
//   Creat a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCampground){
        if(err){
            console.log(err);
        } else {
            // redirect back to campground page
            res.redirect("/campgrounds");
        }
    });
});

//NEW ROUTE
router.get("/new",middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//  SHOW - show more info about one campground
 router.get("/:id", function(req, res) {
     //find the campground with provided id
     Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
     });
 });
 
 //EDIT
router.get("/:id/edit",middleware.checkCampgoundOwnership, function(req, res) {
        Campground.findById(req.params.id, function(err, foundCampground){
                    res.render("campgrounds/edit", {campground: foundCampground});
        });
    });
//UPDATE
 router.put("/:id", middleware.checkCampgoundOwnership, function(req, res){
     Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
         if(err){
             console.log(err);
             res.redirect("/campgrounds");
         } else {
             res.redirect("/campgrounds/" + req.params.id);
         }
     });
 });
 
 //DESTROY
 router.delete("/:id",middleware.checkCampgoundOwnership, function(req, res){
     Campground.findByIdAndRemove(req.params.id, function(err){
         if(err){
             res.redirect("/campgrounds");
         } else {
             res.redirect("/campgrounds");
         }
     });
 });

 
 module.exports   =   router;