if (Meteor.isClient){
    Template.login.events({
        'submit form': function(event, template){
            event.preventDefault();
            var emailVar = template.find('#login-email').value;
            var passwordVar = template.find('#login-password').value;
            console.log("Form submitted.");
        }
    });
    Template.register.events({
      'click #register-submit': function(event, template){
          event.preventDefault();
          var emailVar = template.find('#register-email').value;
          var passwordVar = template.find('#register-password').value;
          Accounts.createUser({
              email: emailVar,
              password: passwordVar
          });
          Router.autodirect("/courses");
      }
    });
}