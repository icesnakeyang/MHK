import {UserPhones} from "../lib/database";
import {UserSMS} from "../lib/database";
import {UserLBS} from "../lib/database";

Meteor.publish('userPhones', function () {
    return UserPhones.find();
});

Meteor.publish('userSMS', function(){
    return UserSMS.find();
});

Meteor.publish('userLBS', function(){
    return UserLBS.find();
});