if (Meteor.isClient){
    Template.success.events({
        "click Button" : function(t,e){
            Router.go("/");
        }
    });
}