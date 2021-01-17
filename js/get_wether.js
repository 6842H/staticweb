
var lo="江西省", lc="赣州市"; var localAddress={city:"赣州市", province:"江西省"}
function get_city() {
    $.ajax({url:"http://wthrcdn.etouch.cn/weather_mini",
        data: {'city': localAddress.city},
        success:function(result){
        console.debug(result);
    }});
}
get_city()

