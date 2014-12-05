

if (Meteor.isClient) {
    Template.afterFirstLoginContent.helpers({
        major : function(){
            return Meteor.user().profile.major;
        }
    });
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
    
    Template.listOfCourses.events({
        "click .contribute" : function(t,e){
             console.log("reviewpost");
            var course = this.course;
            var professor = this.professor;
            console.log(course);
            console.log(professor);
            Session.set("contribute_course", course);
            Session.set("contribute_professor", professor);
            console.log("reviewpost");
            Router.go("reviewPost");
        },
        "click .view" : function(t,e){
            console.log("view");
            var course = this.course;
            var professor = this.professor;
            console.log(course);
            console.log(professor);
            Session.set("view_course", course);
            Session.set("view_professor", professor);
            Router.go("postList");
        }
       
    });
    
    Template.logout.events({
        "click .logout" : function(e,t){
            e.preventDefault();
            Meteor.logout();
            console.log("logout");
            Router.go("home");
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
   
  });
}
