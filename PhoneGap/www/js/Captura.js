function captureSuccess(mediaFiles) {
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        uploadFile(mediaFiles[i]);
    }
}

 // Called if something bad happens.
function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
}

// A button will call this function
function captureAudio() {
    $('#details').hide();

    // Launch device audio recording application,
    // allowing user to capture up to 1 audio clips
    navigator.device.capture.captureAudio(captureSuccess, captureError, {
        limit: 1,
        duration: 10
    });
}

// A button will call this function
function captureImage() {
    $('#details').hide();

    // Launch device camera application,
    // allowing user to capture up to 1 images
    navigator.device.capture.captureImage(captureSuccess, captureError, {
        limit: 1
    });
}

function captureVideo() {
    $('#details').hide();

    // Launch device video recording application,
    // allowing user to capture up to 1 video clip
    navigator.device.capture.captureVideo(captureSuccess, captureError, {
        limit: 1,
        duration: 10
    });
}

// Upload files to server
function uploadFile(mediaFile) {
    $('#fullPath').html(mediaFile.fullPath.replace(mediaFile.name, ""));
    $('#name').html(mediaFile.name);
    $('#type').html(mediaFile.type);
    $('#lastModifiedDate').html(mediaFile.lastModifiedDate);
    $('#size').html(mediaFile.size);
    $('#details').show();
    //Upload file using FileTransfer method not shown here
}
