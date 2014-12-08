if (Meteor.isClient) {
    Template.baseNavbar.helpers({
        settings: function () {
            return {
                position: "top",
                limit: 10,
                rules: [
                    {   collection: Courses,
                        field: "course",
                        template: Template.render,
                    }
                ]
                    }
        }
    });
    Template.logout.events({
        "click .logout" : function(e,t){
            e.preventDefault();
            Meteor.logout();
            console.log("logout");
            Router.go("home");
        }
    });
}

