import {check} from "meteor/check";
import {UserPhones} from "./database";

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
    }
});
