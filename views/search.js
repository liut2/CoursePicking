if (Meteor.isClient) {
    Template.searchCourse.helpers({
        selectedCourses : function(){
            console.log(Courses.find({professor: "Tom"}, {sort : {professor : 1, course : 1}}).count());
            return Courses.find({course: "calculus 3"}, {sort : {professor : 1, course : 1}});
        }
    });
    
    Template.recommendCourses.helpers({
        recommendCourses : function(){
            return Courses.find({}, {sort : {professor : 1, course : 1}});
        }
    });
  
    Template.recommendProfessors.helpers({
        recommendCourses : function(){
            return Courses.find({}, {sort : {professor : 1, course : 1}});
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
   
  
  });
}
