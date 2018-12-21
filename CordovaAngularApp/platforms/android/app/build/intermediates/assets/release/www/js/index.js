var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById("exampleSubmit").addEventListener("click", loginUser);
        document.getElementById("exampleCamera").addEventListener("click", exampleCamera);
        document.getElementById("examplePicture").addEventListener("click", examplePicture);
        document.getElementById("examplePlus").addEventListener("click", examplePlus);
        document.getElementById("exampleMinus").addEventListener("click", exampleMinus);
        document.getElementById("exampleMulti").addEventListener("click", exampleMulti);
        document.getElementById("exampleDivide").addEventListener("click", exampleDivide);
        document.getElementById("exampleSearch").addEventListener("click", exampleSearch);
        document.getElementById("exampleMailTo").addEventListener("click", exampleMailTo);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        

        console.log('Received Event: ' + id);
    }
};

app.initialize();
