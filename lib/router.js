
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