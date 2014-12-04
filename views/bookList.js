
if (Meteor.isClient){
    Template.bookListContent.helpers({
        bookList : function(){
            var course = Session.get("findBooks_course");
            console.log(course);
            return Books.find({course : course}, {sort : {price : 1}});
        }
    });
}