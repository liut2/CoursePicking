Router.configure({
    layoutTemplate: "appLayout"
});


Router.route("/", {
    name : "home",
    template : "check"
    
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