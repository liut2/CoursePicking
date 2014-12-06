Router.configure({
    layoutTemplate: "appLayout"
});

Router.route("/askquestions", {
    name : "askquestions",
    template : "askQuestionsPage"
});

Router.route("/email", {
    name : "email",
    template : "emailForm"
});
Router.route("/postlist", {
    name : "postList",
    template: "postListPage"
});

Router.route("/success",{
    name : "success",
    template : "success"
});
Router.route("/booklist",{
    name: "booklist",
    template: "bookListPage"
});

Router.route("/", {
    name : "home",
    template : "check"
    
});

Router.route("/auto",{
    name: "auto",
    template: "auto"
});

Router.route("/search", {
    name : "search",
    template : "searchPage"
});

Router.route("/reviewpost", {
    name : "reviewPost",
    template : "reviewPostPage"
});

Router.route("/dashboard", {
    name : "dashboard",
    template : "dashboardPage"
});

Router.route("/books",{
    name : "books",
    template : "booksPage"
});

Router.route("/latestquestions", {
    name : "latestquestions",
    template : "latestQuestionsPage"
});