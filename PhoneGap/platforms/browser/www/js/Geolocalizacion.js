document.addEventListener("deviceready", onDeviceReady, false);

    var watchID = null;

    function onDeviceReady() {
        // Throw an error if no update is received
        var options = {
            timeout: 50000
        };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
            'Longitude: ' + position.coords.longitude + '<br />' +
            'Altitude: ' + position.coords.altitude + '<br />' +
            'Accuracy: ' + position.coords.accuracy + '<br />' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
            'Heading: ' + position.coords.heading + '<br />' +
            'Speed: ' + position.coords.speed + '<br />' +
            'Timestamp: ' + position.timestamp + '<br />';

        var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            zoom: 4,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });

    }

    function onError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }