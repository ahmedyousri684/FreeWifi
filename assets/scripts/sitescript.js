var urlParams = new URLSearchParams(window.location.search);
var _mac = urlParams.get('mac')?.replaceAll(':', '');
urlParams = window.location.search.replace('?', '');
var sessionId;
var deviceId;

var GetSession = function () {
    var url =
        'https://erfreewifi.com/api/session?filter=%7B%22username%22%3A%22' +
        _mac +
        '%22%7D&sort=-id&offset=0&limit=1&calculate_count=true';
    //	var url="https://197.44.151.55:443/api/session?filter={'username':'"+_mac+"'}&sort=-id&offset=0&limit=1&calculate_count=true"
    $.ajax({
        type: 'Get',
        url: url,
        contentType: 'application/json; charset=utf-8',
        headers: {
            Authorization: 'Bearer eb8e110bd1a6f6107f7aa2f9bab33649755192a7'
        },
        Accept: '*/*',
        success: function (res) {
            console.log('res:', res);
            sessionId = res._embedded.items[0].id;
        },
        error: function (error) {
            console.log('error: ', error);
        }
    });
};

var authDevice = function () {
    var dataParams = {
        Param: urlParams
    };
    //var _mac= urlParams.get('mac');
    var url = 'https://newsmartgroup.net/api/FreeWifi/auth';
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        url: url,
        data: JSON.stringify(dataParams),
        Accept: '*/*',
        success: function (res) {
            console.log('res:', res);
            deviceId = res.deviceId;
        },
        error: function (error) {
            console.log('error: ', error);
        }
    });
};

var WatchingAds = function () {
    //var _mac= urlParams.get('mac');
    var url = 'https://newsmartgroup.net/api/FreeWifi/NewAds/' + deviceId;
    $.ajax({
        type: 'post',
        url: url,
        contentType: 'application/json; charset=utf-8',
        Accept: '*/*',
        success: function (res) {
            console.log('res:', res);
        },
        error: function (error) {
            console.log('error: ', error);
        }
    });
};

var ConnectDevice = function () {
    //var _mac= urlParams.get('mac');
    var url = 'https://newsmartgroup.net/api/FreeWifi/ConnectDevices/' + deviceId;
    $.ajax({
        type: 'post',
        url: url,
        contentType: 'application/json; charset=utf-8',
        Accept: '*/*',
        success: function (res) {
            console.log('res:', res);
        },
        error: function (error) {
            console.log('error: ', error);
        }
    });
};

var SetRole = function () {
    var data = {
        confirm_reauthorize: true,
        reauthorize_profile: 'Final_Role [authenticated]'
    };

    var url = 'https://erfreewifi.com/api/session/' + sessionId + '/reauthorize';
    //var url="https://192.168.20.5/api/session/"+sessionId+"/reauthorize"

    $.ajax({
        type: 'Post',
        url: url,
        data: JSON.stringify(data),
        headers: {
            Authorization: 'Bearer eb8e110bd1a6f6107f7aa2f9bab33649755192a7',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json; charset=utf-8',
        Accept: '*/*',
        success: function (res) {
            console.log('res:', res);
        },
        error: function (error) {
            console.log('error: ', error);
        }
    });
};

var Islive = false;
authDevice();

let currentDate = new Date();

var seconds = 60;
var startVedio = seconds - 1;

var x = setInterval(function () {
    document.getElementById('BtnRedirect').innerHTML = ' ?????????? ???????? ???????????? ?????????????????? ?????? ' + seconds;
    if (startVedio == seconds) {
        $('#playButton').click();
    }
    CheckVisibility();
    if (seconds == 55) {
        WatchingAds();
    }
    if (seconds < 1) {
        clearInterval(x);

        window.location.href = '/ConnectInternet.html?session=' + sessionId;
    }

    if (seconds < 7 && Islive == false) {
        Islive = true;

        ConnectDevice();
    }
}, 1000);

var CheckVisibility = function () {
    if (document.webkitVisibilityState == 'visible' || document.visibilityState == 'visible') {
        seconds = seconds - 1;
    }
};

GetSession();
