// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '174836217294261', //  App ID
        'clientSecret'  : '70a08d335847e43bb5dc9e91cb734rf', //  App Secret
        'callbackURL'   : '/auth/facebook/callback'
        // 'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        // 'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'googleAuth' : {
        'clientID'      : '836472167867-442p09lv3e7s0o5qhmnf6qejj6l516nh.apps.googleusercontent.com',
        'clientSecret'  : '_Cg_57AuhwpWx4BI1yYaGwoF',
        'callbackURL'   : '/auth/google/callback'
    }

};
