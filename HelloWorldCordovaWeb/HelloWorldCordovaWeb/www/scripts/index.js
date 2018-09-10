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
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //var parentElement = document.getElementById('deviceready');
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

    
        document.querySelector('#colorButton').addEventListener('click', buttonClick_onColorChange, false);

        var watchId = navigator.accelerometer.watchAcceleration(onSuccess, onFailure, { frequency: 100 });

    };

    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    function onSuccess(a)
    {
        x1 = a.x;
        y1 = a.y;
        z1 = a.z;
    }

    setInterval(function () {
        var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

        if (change > 25)
        {
            onColorChange();
        }

        x2 = x1;
        y2 = y1;
        z2 = z1;

    }, 100);

    function onFailure(error)
    {
        console.dir(error);
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function buttonClick_onColorChange(e) {
        alert('Changing color..');
        onColorChange(e);
    };

    function onColorChange(e)
    {
        document.querySelector('body').style.backgroundColor = getRandomColor();
        document.querySelector('#colorButton').style.color = getRandomColor();
    };

    function getRandomColor()
    {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return hue;
    };

} )();