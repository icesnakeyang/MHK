if (Meteor.isServer) {
    Meteor.methods({
        pubshDatabox(data) {
            this.unblock();

            var request = require("request");

            var options = {
                method: 'POST',
                url: 'https://api.jpush.cn/v3/push',
                headers:
                    {
                        Authorization: 'Basic MzE2YmZlY2M5YmMyMTg2YzdlMWI3NDRhOjk4YmMxYzQyMjIyNzZmZTgyZDBkZjI1NA==',
                        'Content-Type': 'application/json'
                    },
                body:
                    {
                        platform: 'all',
                        audience: {
                            "alias": [data.userId]
                        },
                        notification: {alert: data.msg}
                    },
                json: true
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);

                console.log(body);
            });

            return true;
        }
    });
}