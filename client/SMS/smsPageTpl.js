import {UserSMS} from "../../lib/database";

Template.smsPageTpl.onCreated(function () {
    this.subscribe('userSMS');
});

Template.smsPageTpl.helpers({
    smsList: function () {
        smss = UserSMS.find({
            uniqueID: this.phoneId
        }, {sort:{createdTime:-1}}).fetch();
        var ss = new Array();
        var cc=0;
        for (var i of smss) {
            for (var r of i.SMS) {
                ss.push(r);
                cc++;
            }
        }
        return ss;
    }
});