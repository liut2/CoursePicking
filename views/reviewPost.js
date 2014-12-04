if (Meteor.isClient){
    Template.reviewPostContent.helpers({
        review_course : function(){
            return Session.get("review_course");
        },
        review_professor : function(){
            return Session.get("review_professor");
        }
    });
    
    Template.reviewPostContent.events({
        "submit form" : function(e,t){
            e.preventDefault();
            var answer1 = t.find("#reviewQ1").value;
            var answer2 = t.find("#reviewQ2").value;
            var answer3 = t.find("#reviewQ3").value;
            var answer4 = t.find("#reviewQ4").value;
            var answer5 = t.find("#reviewQ5").value;
            var course = Session.get("review_course");
            var professor = Session.get("review_professor");
            var userId = Meteor.userId();
            var username = Meteor.user().profile.username;
            ReviewPost.insert({
                createdBy : userId,
                username : username,
                course : course,
                professor : professor,
                answer1 : answer1,
                answer2 : answer2,
                answer3 : answer3,
                answer4 : answer4,
                answer5 : answer5
            });
            var id = Courses.findOne({course : course, professor : professor})._id;
            console.log("reviewed succussfully");
            Courses.update({_id : id},
                           {$inc : {countPost : 1}}
                        
            );
            console.log("count is"+id);
            Router.go("success");
        
        }
    });
}