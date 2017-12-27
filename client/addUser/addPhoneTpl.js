Template.addPhoneTpl.events({
    'click #btSubmit':function (e, tpl) {
        e.preventDefault();

        const data={
            remark:tpl.$('#remark').val(),
            imei:tpl.$('#imei').val(),
            type:tpl.$('#type').val(),
            lastConnectTime:tpl.$('#lastConnectTime').val()
        };

        console.log(data);

        Meteor.call('userPhones.addNewPhone',data);

        Router.go('phonePage');
    }
});