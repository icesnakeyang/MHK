Template.lbsPageRowTpl.helpers({
    date1:function(){
        return moment(this.createdTime).format('YYYY-MM-DD HH:mm:ss');
    }
});