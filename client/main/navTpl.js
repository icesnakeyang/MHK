
Template.navTpl.onCreated(function () {

});

Template.navTpl.helpers({
    role: function () {
        return Session.get('role');
    },

    islogin: function () {
        if (Meteor.user()) {
            return true;
        }
        return false;
    },

    email: function () {
        if (Meteor.user()) {
            return Meteor.user().emails[0].address;
        }
    },

    userInfo: function () {
        if (Meteor.user()) {
            return Meteor.user();
        }
    },

    isAdmin: function () {
        if (Meteor.user()) {
            userRole = TypedUsers.findOne({
                userId: Meteor.userId(),
                'admin.administrator': true
            });
            if(userRole){
                return true;
            }
        }
        return false;
    }
});