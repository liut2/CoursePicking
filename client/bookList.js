
if (Meteor.isClient){
    Template.bookItem.events({
        "click button" : function(t,e){
            
            var email = this.soldByEmail;
            var bookName = this.bookName;
            
            var CurrentUsername = Meteor.user().profile.username;
            var CurrentEmail = Meteor.user().emails[0].address;
            
            var to      = email;
            var subject = CurrentUsername+" is interested in your textbook sale";
            var text    = CurrentUsername+" wants to buy your textbook "+bookName+" .Here is his/her email address: "+CurrentEmail+" , you can directly contact him/her and get the deal done.       Sent from coursepicking.com";
            console.log(CurrentEmail);
            Meteor.call("email", to, subject, text);
            Router.go("success");
        }
    });
    
    Template.bookListContent.helpers({
        bookList : function(){
            var course = Session.get("findBooks_course");
            console.log(course);
            return Books.find({course : course}, {sort : {price : 1}});
        }
    });
}