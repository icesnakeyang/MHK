import {UserLBS} from "../../lib/database";
Template.lbsPageTpl.onCreated(function(){
    this.subscribe('userLBS');
});

Template.lbsPageTpl.helpers({
    lbsList:function(){
        lbss=UserLBS.find({
            'data.uniqueID':this.phoneId
        },{
            sort:{createdTime:-1}
        }).fetch();
        return lbss;
    }

});