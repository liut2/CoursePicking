if (Meteor.isClient){
    Template.postListPage.helpers({
        view_course : function(){
            return Session.get("view_course");
        },
        view_professor : function(){
            return Session.get("view_professor");
        },
        postList : function(){
            var course = Session.get("view_course");
            var professor = Session.get("view_professor");
            return ReviewPost.find({course : course, professor : professor}, {sort : {voteSum : -1}});
        }
    });
    
    
    Template.post.events({
        "click .voteUp" : function(t,e){
            var course = this.course;
            var professor = this.professor;
            var createdBy = this.createdBy;
            var id = ReviewPost.findOne({course : course, professor : professor, createdBy : createdBy})._id;
            ReviewPost.update({_id : id}, {$inc : {voteUp : 1}});
            var voteUp = ReviewPost.find({_id : id}).voteUp;
            var voteDown = ReviewPost.find({_id : id}).voteDown;
            var voteSum = voteUp + voteDown;
            ReviewPost.update({_id : id}, {$set : {voteSum : voteSum}});
        },
        
        "click .voteDown" : function(t,e){
            var course = this.course;
            var professor = this.professor;
            console.log(course);
            console.log(professor);
            var createdBy = this.createdBy;
            var id = ReviewPost.findOne({course : course, professor : professor, createdBy : createdBy})._id;
            ReviewPost.update({_id : id}, {$inc : {voteDown : -1}});
            var voteUp = ReviewPost.find({_id : id}).voteUp;
            var voteDown = ReviewPost.find({_id : id}).voteDown;
            var voteSum = voteUp + voteDown;
            ReviewPost.update({_id : id}, {$set : {voteSum : voteSum}});
        }
    });
}