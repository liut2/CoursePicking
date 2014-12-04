

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
    
    Template.listOfCourses.events({
        "click .contribute" : function(t,e){
             console.log("reviewpost");
            var course = this.course;
            var professor = this.professor;
            console.log(course);
            console.log(professor);
            Session.set("review_course", course);
            Session.set("review_professor", professor);
            console.log("reviewpost");
            Router.go("reviewPost");
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
