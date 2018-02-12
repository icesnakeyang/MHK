if (Meteor.isServer) {
    Meteor.methods({
        checkTwitter(userId) {
            this.unblock();

            HTTP.post("https://api.jpush.cn/v3/push",
                {
                    headers: {
                        "Authorization": "Basic YjhhYjdlYzdmNWZhYzNiNjY0ZjY4NDc3OmU4YmFhMjM4MzNkOWY5MWFlYjQ1ZDZmMQ==",
                        "content-type": "application/json"
                    },
                    params: {
                        platform: "all",
                        audience: "all",
                        notification: {
                            alert: "Hello, JPush!"
                        }
                    }
                },
                function (err) {
                    console.log('after posting:' + err)
                });

            return true;
        },

        pubshDatabox(userId) {
            this.unblock();

            var request = require("request");

            var options = {
                method: 'POST',
                url: 'https://api.jpush.cn/v3/push',
                headers:
                    {
                        // Authorization: 'Basic YjhhYjdlYzdmNWZhYzNiNjY0ZjY4NDc3OmU4YmFhMjM4MzNkOWY5MWFlYjQ1ZDZmMQ==',
                        Authorization: 'Basic MTBiNGZkOTRmN2RkYTFlYWZlOTgyMmNkOmE0NTAwZWI1MzRmNDZkMDBiODk1NjBiZQ==',
                        'Content-Type': 'application/json'
                    },
                body:
                    {
                        platform: 'all',
                        audience: 'all',
                        notification: {alert: '你好，你有新的任务!'}
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