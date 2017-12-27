Template.layoutTpl.helpers({
    role: function(){
        return Session.get('role');
    }
});

Template.layoutTpl.events({
    'click #logout':function(event, template){
        AccountsTemplates.logout();
    }
});