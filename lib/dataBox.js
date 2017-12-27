import {check} from "meteor/check";
import {UserPhones} from "./database";

Meteor.methods({
    'userPhones.addNewPhone'(data) {
        check(data, Object);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        UserPhones.insert({
            data,
            createdTime: new Date(),
            createdUserId: Meteor.userId()
        })
    }
});
