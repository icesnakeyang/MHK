import {UserSMS} from "../../lib/database";
Template.smsPageTpl.onCreated(function(){
    this.subscribe('userSMS');
});

Template.smsPageTpl.helpers({
    smsList:function(){
        smss=UserSMS.find({
            'data.uniqueID':this.phoneId
        });
        return smss;
    }
});