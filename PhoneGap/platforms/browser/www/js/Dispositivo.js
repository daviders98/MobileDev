document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {

        $('#model').html(device.model);
        $('#cordova').html(device.cordova);
        $('#platform').html(device.platform);
        $('#uuid').html(device.uuid);
        $('#version').html(device.version);

    }