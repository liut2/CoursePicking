

Router.route("/", function(){
    this.layout("appLayout");
    this.render("checkIfLogin");
});

Router.route("/courses", function(){
    this.layout("appLayout");
    this.render("afterFirstLoginPage");
});

Router.route("/search", function(){
    this.layout("appLayout");
    this.render("searchPage");
});

Router.route("/reviewpost", function(){
    this.layout("appLayout");
    this.render("reviewPostPage");
});

Router.route("/dashboard", function(){
    this.layout("appLayout");
    this.render("dashboardPage");
});

Router.route("/books", function(){
    this.layout("appLayout");
    this.render("booksPage");
});

Router.route("/latestquestions", function(){
    this.layout("appLayout");
    this.render("latestQuestionsPage");
});