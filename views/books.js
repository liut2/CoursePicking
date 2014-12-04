if (Meteor.isClient) {
    Template.findBooks.helpers({
        settings: function () {
            return {
                position: "top",
                limit: 10,
                rules: [
                    {
                        
                        collection: Courses,
                        field: "course",
                        template: Template.render,
                        
                        
                    }
                ]
   
                    }
        }
    });
    
    Template.sellBooks.helpers({
        settings: function () {
            return {
                position: "top",
                limit: 10,
                rules: [
                    {
                        
                        collection: Courses,
                        field: "course",
                        template: Template.render
                    }
                ]
   
                    }
        }
    });


   
}