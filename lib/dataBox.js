import {check} from "meteor/check";
import {UserPhones} from "./database";

Meteor.methods({
    'userPhones.addNewPhone'(data) {
        check(data, Object);

        console.log(data);

        UserPhones.insert({
            data,
            createdTime: new Date(),
            createdUserId: Meteor.userId()
        })
    }
});
