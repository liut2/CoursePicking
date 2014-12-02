Courses = new Meteor.Collection("courses");

if (Meteor.isClient) {
    Template.listOfCourses.helpers({
        courses : function(){
            var major = Session.get("currentMajor");
            return Courses.find({department: "computer science"}, {sort : {professor : 1, course : 1}});
        }
    });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
   
  });
}
