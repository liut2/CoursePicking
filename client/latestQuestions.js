if (Meteor.isClient){
    Template.ask.helpers({
        latestQuestions : function(){
            return LatestQuestion.find({});
        },
        comments : function(){
            var question = this.question;
            return Discussion.find({question : question});
        }
    });
    
    Template.ask.events({
        "click #askInLatest" : function(e,t){
            var question = t.find("#latestQ5").value.trim();
            LatestQuestion.insert({
                question : question
            });
        },
        "click .comment" : function(e,t){
            var comment = t.find(".commentContent").value;
            var question = this.question;
            var username = Meteor.user().profile.username;
            Discussion.insert(
                {question : question,
                 comment : comment,
                 username : username
                }
            );
            
        }
    });
}