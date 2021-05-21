document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    imgPhoto = document.getElementById('imgPhoto')
    btnCamera = document.getElementById('btnCamera').onclick = capturePhoto

    pictureSource = navigator.camera.PictureSourceType
    destinationType = navigator.camera.DestinationType
    
    document.getElementById('deviceready').classList.add('ready');
}

function onFail(message) {

    alert('Failed cause of: ' + message);

}

function capturePhoto() {
    
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });

}

function onPhotoDataSuccess(imageData) {

    alert('Photo saved');
    
    imgPhoto.style.display = 'block'
    imgPhoto.src = 'data:image/jpeg;base64,' + imageData
}
