if (Meteor.isClient) {
    Template.baseNavbar.events({
        "click .search" : function(e,t){
            var course = t.find("#searchCourse").value;
            
            Session.set("searchCourse", course);
            course = "";
            Router.go("search");
        }
    });
    Template.searchCourse.helpers({
        selectedCourses : function(){
            var course = Session.get("searchCourse");
            return Courses.find({course: course}, {sort : {professor : 1}});
        }
    });
    Template.searchCourse.events({
        "click .addToWishlist" : function(e,t){
            var course = this.course;
            var professor = this.professor;
            var userId = Meteor.userId();
            console.log(userId);
            Wishlist.insert(
                {course : course,
                 professor : professor,
                 addedBy : userId
                }
            );
            Router.go("success");
        }
    });
    Template.recommendCourses.helpers({
        department : function(){
            var course = Session.get("searchCourse");
            var department = Courses.findOne({course : course}).department;
            console.log(department + "  "+course);
            Session.set("searchDepartment",department);
           
            return department
        },
        recommendCourses : function(){
            var department = Session.get("searchDepartment");
            return Courses.find({department : department}, {sort : {professor : 1, course : 1}});
        }
    });
  
}
