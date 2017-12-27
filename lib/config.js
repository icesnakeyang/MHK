if(Meteor.isClient){
    Meteor.startup(function () {
        // T9n.setLanguage('zh-CN');
        T9n.setLanguage('en');
    })
}

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        required: true,
        displayName:'Username',
        placeholder:'Please input your username'
    },

    {
        _id: 'password',
        type: 'password',
        required: true,
        displayName:'Password',
        placeholder:'Please input your password',
        re:/^[a-zA-Z]\w{5,15}$/,
        errStr:'At least 6 characters, the first character must be letter'
    }
]);