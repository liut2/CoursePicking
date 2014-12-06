if (Meteor.isServer) {
    Meteor.startup(function () {
        process.env.MAIL_URL = "smtp://coursepicking%40gmail.com:shawnparker0924@smtp.gmail.com:465/";
    });
    
    Meteor.methods({
        email: function (to, subject, text) {
            Email.send({
                from: "coursepicking@gmail.com",
                to:   to, 
                subject: subject, 
                html: text
            });
        }
    });
}