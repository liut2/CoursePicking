if (Meteor.isClient){
    Template.reviewPostContent.helpers({
        contribute_course : function(){
            return Session.get("contribute_course");
        },
        contribute_professor : function(){
            return Session.get("contribute_professor");
        }
    });
    
    Template.reviewPostContent.events({
        "submit form" : function(e,t){
            e.preventDefault();
            var answer1 = t.find("#reviewQ1").value.trim();
            var answer2 = t.find("#reviewQ2").value.trim();
            var answer3 = t.find("#reviewQ3").value.trim();
            var answer4 = t.find("#reviewQ4").value.trim();
            var answer5 = t.find("#reviewQ5").value.trim();
            var course = Session.get("contribute_course");
            var professor = Session.get("contribute_professor");
            var userId = Meteor.userId();
            var username = Meteor.user().profile.username;
            var createdByEmail = Meteor.user().emails[0].address;
            ReviewPost.insert({
                createdByEmail : createdByEmail,
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