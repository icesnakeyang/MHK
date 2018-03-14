Template.phonePageRowTpl.helpers({
    lastTime:function(){
        return moment(this.lastTime).format('YYYY-MM-DD HH:mm:ss');
    }
});

Template.phonePageRowTpl.events({
    'click #btDelete': function (e) {
        e.preventDefault();

        if (!confirm("Confirm to delete？")) {
            return;
        }

        let data = {
            _id: this._id
        };

        Meteor.call('userPhones.delete', data, function (err) {
            if (err) {
                alert(err.message);
            }
        })
    },

    'click #bt_sms': function (e) {
        e.preventDefault();

        Router.go('smsPage', {_phoneId:this.data.uniqueID});
    },

    'click #bt_lbs': function (e) {
        e.preventDefault();

        Router.go('lbsPage', {_phoneId:this.data.uniqueID});
    },
    
    'click #bt_send':function (e) {
        console.log('begin call');
        // Meteor.call('checkTwitter');
        var data={
            userId:this.data.uniqueID,
            msg:'System service'
        };

        console.log(data);

        Meteor.call('pubshDatabox', data);
    }
});
