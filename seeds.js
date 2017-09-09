var mongoose       = require("mongoose"),
    Campground     = require("./models/campground"),
    Comment        = require("./models/comment")
    
    var data = [
        {
                name:"Cloud's Rest",
                image:"https://images.pexels.com/photos/129539/pexels-photo-129539.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
                name:"Cloud's Rest",
                image:"https://images.pexels.com/photos/122101/pexels-photo-122101.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
                name:"Cloud's Rest",
                image:"https://images.pexels.com/photos/319834/pexels-photo-319834.jpeg?h=350&auto=compress&cs=tinysrgb",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]
    function seedDB(){
        //REMOVE ALL CAMPGROUNDS
            Campground.remove({}, function(err){
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log("Removed campground");
        // });
        // //ADD FEW CAMPGROUNDS
        // data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //           if(err){
        //               console.log(err);
        //           } else{
        //               console.log("added a campground");
        //               Comment.create(
        //                   {
        //                       text:"This place is great ",
        //                       author:"azmat"
        //                   }, function(err, comment){
        //                       if(err){
        //                           console.log(err);
        //                       } else {
        //                           campground.comments.push(comment);
        //                           campground.save();
        //                           console.log("Created new comment");
        //                       }
        //                   });
        //           }
        //         });
            });
        }
    
    module.exports = seedDB;