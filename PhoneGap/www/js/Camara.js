function capturePhoto() {
    
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,
                allowEdit: true,
                destinationType: Camera.DestinationType.DATA_URL
            });
        }
    
        function onPhotoDataSuccess(imageData) {
    
            var smallImage = document.getElementById('smallImage');
    
            smallImage.style.display = 'block';
            smallImage.src = "data:image/jpeg;base64," + imageData;
    
        }
    
        function onPhotoURISuccess(imageURI) {
    
            var largeImage = document.getElementById('largeImage');
    
            largeImage.style.display = 'block';
    
            largeImage.src = "data:image/jpeg;base64," + imageURI;
        }
    
        function getPhoto(source) {
            navigator.camera.getPicture(onPhotoURISuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: source
            });
        }
    
    
        function onFail(message) {
            alert(message);
        }
    