{
    var app = new Vue({
        el: '#app',
        data: {
            bpi: null,
        },
        mounted: function () {
            // fetchを使ったAPIの取得について
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    console.log(json);
                    this.bpi = json.bpi;
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                })
        }
    })
}