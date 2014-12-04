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
    
    Template.findBooks.events({
        "submit form" : function(e,t){
            e.preventDefault();
            var course = t.find("#booksQ1").value;
            console.log(course);
            Session.set("findBooks_course", course);
            Router.go("booklist");
        }
    });
    Template.sellBooks.events({
            "submit form" : function(e,t){
                e.preventDefault();
                var course = t.find("#booksQ2").value;
                var bookName = t.find("#booksQ4").value;
                var condition = t.find("#booksQ5").value;
                var price = t.find("#booksQ6").value;
                var userId = Meteor.userId();
                var username = Meteor.user().profile.username;
                Books.insert({
                    soldBy : userId,
                    username : username,
                    course : course,
                    bookName : bookName,
                    condition : condition,
                    price : price
                    
                });
                
                console.log("you've sold the book");
                Router.go("success");
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