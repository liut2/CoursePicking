if (Meteor.isClient) {
    Template.baseNavbar.events({
        "click .search" : function(e,t){
            var course = t.find("#searchCourse").value;
            Session.set("searchCourse", course);
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
        recommendCourses : function(){
            return Courses.find({}, {sort : {professor : 1, course : 1}});
        }
    });
  
}
