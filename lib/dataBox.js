import {check} from "meteor/check";
import {UserPhones} from "./database";
import {UserLBS} from "./database";
import {UserSMS} from "./database";

Meteor.methods({
    'userPhones.addNewPhone'(data) {
        check(data, Object);
        check(data.remark, String);
        check(data.imei, String);
        check(data.type, String);
        check(data.lastConnectTime, String);

        UserPhones.insert({
            data,
            createdTime: new Date(),
            createdUserId: Meteor.userId()
        })
    },

    'userPhones.delete'(data){
        check(data, Object);

        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }

        UserPhones.remove({
            _id:data._id
        })
    },

    'userSMS.addSMS'(data){
        check(data, Object);

        UserSMS.insert({
            data,
            createdTime:new Date(),
            createdUserId:Meteor.userId()
        })
    },

    'userLBS.addLBS'(data){
        check(data, Object);

        UserLBS.insert({
            data,
            createdTime:new Date(),
            createdUserId:Meteor.userId()
        })
    }
});
