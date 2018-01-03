Template.phonePageRowTpl.helpers({
});

Template.phonePageRowTpl.events({
    'click #btDelete':function (e) {
        e.preventDefault();

        if (!confirm("Confirm to delete？")) {
            return;
        }

        let data={
            _id:this._id
        };

        Meteor.call('userPhones.delete', data, function (err) {
            if(err) {
                alert(err.message);
            }
        })
    }
});
