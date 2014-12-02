if (Meteor.isClient) {
    Template.findBooks.helpers({
        departments: function () {
            return Department.find({},{_id:0, department:1});
        },
        courses_books : function(){
            var department = Session.get("course_book");
            var courseList = Courses.distinct("course");
            console.log(courseList.length);
            return courseList;
            
            //return Courses.find({department : department});
        }
    });
    
    Template.findBooks.events({
        "click #booksQ1" : function(t,e){
            var department = event.target.value;
            console.log(department);
            Session.set("course_book", department);
        }
    });
    


   
}