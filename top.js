{
    var app = new Vue({
        el: '#app',
        data: {
            bpi: null,
        },
        mounted: function () {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    // console.log(json.bpi.USD.rate_float);
                    this.bpi = json.bpi;
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                })
        }
    })
}