if (Meteor.isClient){
    Template.ask.helpers({
        latestQuestions : function(){
            return LatestQuestion.find({});
        }
    });
    
    Template.ask.events({
        "click #askInLatest" : function(e,t){
            var question = t.find("#latestQ5").value.trim();
            LatestQuestion.insert({
                question : question
            });
        }
    });
}