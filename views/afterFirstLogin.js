

if (Meteor.isClient) {
    Template.listOfCourses.helpers({
        courses : function(){
            var major = Session.get("currentMajor");
            return Courses.find({department: "computer science"}, {sort : {professor : 1, course : 1}});
        }
    });
  
    Template.logout.events({
        "click .logout" : function(e,t){
            e.preventDefault();
            Meteor.logout();
            console.log("logout");
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
   
  });
}
