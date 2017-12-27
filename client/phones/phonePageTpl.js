import {UserPhones} from "../../lib/database";

Template.phonePageTpl.onCreated(function () {
    this.subscribe('userPhones');
});

Template.phonePageTpl.helpers({
    phones:function () {
        return UserPhones.find();
    }
});
