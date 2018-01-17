Template.smsPageRowTpl.helpers({
    date1:function(){
        let TimeNow = this.date*1;
        let newTime = new Date(TimeNow);

        return moment(newTime).format('YYYY-MM-DD HH:mm:ss');
    }
});