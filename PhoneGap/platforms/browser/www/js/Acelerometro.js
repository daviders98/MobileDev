var watchID = null;

    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        $('#stop').show();
        $('#start').hide();

        var options = {
            frequency: 1000
        }; // Update every 1 seconds

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    function onSuccess(acceleration) {
        $('#dataX').html(acceleration.x);
        $('#dataY').html(acceleration.y);
        $('#dataZ').html(acceleration.z);
        $('#timeStamp').html(acceleration.timestamp);
    };

    function onError() {
        alert('onError!');
    };

    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;

            $('#start').show();
            $('#stop').hide();
        }

    }
