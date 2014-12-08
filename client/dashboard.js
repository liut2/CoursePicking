if (Meteor.isClient){
    Template.savedCourses.helpers({
        wishlist : function(){
            var userId = Meteor.userId();
            return Wishlist.find({addedBy : userId});
        }
    });
    Template.savedCourses.events({
        "click a" : function(e,t){
            var course = this.course;
            var professor = this.professor;
            Session.set("view_course", course);
            Session.set("view_professor", professor);
        }
    });
    Template.listOfCourses.helpers({
        courses : function(){
            var major = Meteor.user().profile.major;
            return Courses.find({department: major}, {sort : {course : 1}});
        }
    });
    
    Template.listOfCourses.events({
        "click .contribute" : function(t,e){
             console.log("reviewpost");
            var course = this.course;
            var professor = this.professor;
            var department = this.department;
            console.log(course);
            console.log(professor);
            Session.set("contribute_course", course);
            Session.set("contribute_professor", professor);
            Session.set("contribute_department",department);
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
    
}