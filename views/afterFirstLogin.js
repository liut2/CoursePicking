

if (Meteor.isClient) {
    Template.baseNavbar.helpers({
        settings: function () {
            return {
                position: "top",
                limit: 10,
                rules: [
                    {
                        
                        collection: Courses,
                        field: "course",
                        template: Template.render,
                        
                        
                    }
                ]
   
                    }
        }
    });
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
