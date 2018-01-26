Template.lbsPageRowTpl.helpers({
    date1:function(){
        return moment(this.createdTime).format('YYYY-MM-DD HH:mm:ss');
    }
});

Template.lbsPageRowTpl.events({
   'click #openMap'(e){
       e.preventDefault();
       var url='https://www.gps-coordinates.net/latitude-longitude/';
       url=url+this.data.latitude+'/'+this.data.longitude;
       url=url+'/10/roadmap';
       window.open(url, '_blank');
   }
});