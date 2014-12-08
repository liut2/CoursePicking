if (Meteor.isClient){
    Template.login.events({
        //event for handling login
        'submit form': function(event, template){
            event.preventDefault();
            var emailVar = template.find('#login-email').value;
            var passwordVar = template.find('#login-password').value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });
    
    Template.register.events({
        'submit form': function(event, template){
            //event for handling registering
            event.preventDefault();
            var emailVar = template.find('#register-email').value;
            var passwordVar = template.find('#register-password').value;
            var usernameVar = template.find("#register-username").value;
            var majorVar = template.find("#register-major").value;
            Accounts.createUser({
                email: emailVar,
                password: passwordVar,
                profile : {
                    username: usernameVar,
                    major: majorVar
                }
                
            });
        }
    });
}