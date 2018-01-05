
/**
 * main layout template
 * navbar
 */
Router.configure({
    layoutTemplate: 'layoutTpl'
});

Router.route('/', function () {
    this.redirect('phonePage');
});

Router.route('dashboard', function () {
    this.render('dashboardTpl');
});

Router.route('/login', function () {
    this.render('loginTpl');
});

Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.redirect('/login');
    } else {
        this.next();
    }
}, {
    except: ['dashboard', '/', 'login','settingsPage']
});

Router.route('settingsPage', function () {
    this.render('settingsPageTpl');
});

Router.route('addPhone', function () {
    this.render('addPhoneTpl');
});

Router.route('phonePage', function () {
    this.render('phonePageTpl');
});

Router.route('smsPage/:_phoneId', function(){
    var phoneId;
    if(this.params._phoneId==='null'){
        phoneId=null;
    }else{
        phoneId=this.params._phoneId
    }
    var data={
        phoneId:phoneId
    };
    this.render('smsPageTpl', {data});
}, {
    name:'smsPage'
});

Router.route('lbsPage/:_phoneId', function(){
    var phoneId;
    if(this.params._phoneId==='null'){
        phoneId=null;
    }else{
        phoneId=this.params._phoneId
    }
    var data={
        phoneId:phoneId
    };
    this.render('lbsPageTpl', {data});
}, {
    name:'lbsPage'
});