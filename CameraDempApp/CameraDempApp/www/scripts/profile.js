// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        var name = decodeURI(getQueryStringValue('name'));

        document.querySelector('#spnName').innerHTML = ' : Hello ' + (name ? name : "Mr X");

        document.querySelector('#btnProfilePhoto').addEventListener('click', changePicture, false);
    };

    function changePicture(event) {
        event.preventDefault();
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
            encodingType: 0     // 0=JPG 1=PNG
        };

        navigator.camera.getPicture(
            function (imgData) {
                document.querySelector('#divProfilePic').setAttribute('style', 'visibility:visible');
                document.querySelector('#imgpp').setAttribute('src', "data:image/jpeg;base64," + imgData);
            },
            function () {
                alert('Error taking picture', 'Error');
            },
            options);

        return false;
    };

    function getQueryStringValue(key) {

        var qrStr = window.location.search;
        return qrStr.split("?")[1].split("=")[1];

    };  

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();