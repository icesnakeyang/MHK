import {UserPhones} from "../lib/database";

Meteor.publish('userPhones', function () {
    return UserPhones.find();
});