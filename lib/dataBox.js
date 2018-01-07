import {check} from "meteor/check";
import {UserPhones} from "./database";
import {UserLBS} from "./database";
import {UserSMS} from "./database";

Meteor.methods({
    'userPhones.addNewPhone'(data) {
        console.log('add phone');
        check(data, Object);

        UserPhones.insert({
            data,
            createdTime: new Date(),
            createdUserId: Meteor.userId()
        })
    },

    'userPhones.delete'(data) {
        check(data, Object);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        UserPhones.remove({
            _id: data._id
        })
    },

    'userSMS.addSMS'(data) {
        check(data, Object);

        UserSMS.insert({
            data,
            createdTime: new Date(),
            createdUserId: Meteor.userId()
        })
    },

    'userLBS.addLBS'(data) {
        check(data, Object);

        UserLBS.insert({
            data,
            createdTime: new Date(),
            createdUserId: Meteor.userId()
        })
    },

    'mhk.addData'(data) {
        console.log(0);
        check(data, Object);
        console.log(1);
        check(data.uniqueID, String);
        console.log(2);
        //首先判断是否已经有该设备，没有就添加一个
        console.log(3);
        let thePhone = UserPhones.findOne({
            'data.uniqueID': data.uniqueID
        });
        if (!thePhone) {
            let data1 = {
                uniqueID: data.uniqueID,
                model: data.model
            };
            console.log('data:' + data1);
            UserPhones.insert({
                data: data1,
                createdTime: new Date(),
                createdUser: Meteor.userId()
            })
        } else {
            UserPhones.update({
                'data.uniqueID': thePhone.data.uniqueID
            }, {
                $set: {
                    lastTime: new Date()
                }
            })
        }

        // 判断是否有新的GPS坐标，有就添加一个
        if (data.longitude && data.latitude) {
            let data1 = {
                longitude: data.longitude,
                latitude: data.latitude,
                uniqueID: data.uniqueID,
                model: data.model,
            };
            UserLBS.insert({
                data: data1,
                createdTime: new Date(),
                createdUserId: Meteor.userId()
            })
        }

        // 判断是否有SMS，有就添加进去
        if (data.messageList) {
            let data1 = {
                messageList: data.messageList,
                uniqueID: data.uniqueID,
                model: data.model,
            };

            UserSMS.insert({
                data: data1,
                createdTime: new Date(),
                createdUserId: Meteor.userId()
            })
        }
    }
});
