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
        check(data, Object);
        check(data.uniqueID, String);
        //首先判断是否已经有该设备，没有就添加一个
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
            // 设备已存在，更新同步时间
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
        console.log('begin sms');
        if (data.messageList) {
            let theSMSList=new Array();
            for(var row of data.messageList){
                var theSMS=UserSMS.find({
                    'data.uniqueID':data.uniqueID
                }).fetch();
                if(theSMS.length) {
                    for(var r of theSMS) {
                        var needAdd=true;
                        for(var rr of r.data.messageList){
                            if(rr.content==row.content){
                                needAdd=false;
                            }
                        }
                        if(needAdd){
                            theSMSList.push(row);
                        }
                    }
                }else{
                    theSMSList=data.messageList;
                }
            }
            if(theSMSList.length) {
                console.log(theSMSList.length);
                let SMS = {
                    messageList: theSMSList,
                    uniqueID: data.uniqueID,
                    model: data.model,
                };
                UserSMS.insert({
                    SMS: theSMSList,
                    createdTime: new Date(),
                    createdUserId: Meteor.userId()
                })
            }
        }
    }
});
