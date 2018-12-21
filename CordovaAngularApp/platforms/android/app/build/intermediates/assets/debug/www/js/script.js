// JavaScript source code
function loginUser() {
    if (document.getElementById("exampleInputEmail1").value !== '') {
        if (document.getElementById("exampleInputPassword1").value === 'test') {
            document.getElementById("frmLogin").style.display = "none";
            document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-warning'><span>Welcome back " + document.getElementById("exampleInputEmail1").value + "!</span></div>";
            document.getElementById("divLoggedInFeature").style.display = "block";
            return true;
        } else {
            document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-danger'><span>Failed! Please try again</span></div>";
        }
    }
}

function exampleCamera() {
    navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onCameraSuccess(imageData) {
        document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-info'><span>Success! Loading Image...</span></div>";
        document.getElementById('exampleImage').src = "data:image/jpeg;base64," + imageData;
        document.getElementById('exampleImage').style.width = "300px";
        document.getElementById('exampleImage').style.height = "300px";
        document.getElementById('exampleImage').style.display = "block";
        document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-info'><span>Success! Loaded</span></div>";
    }

    function onCameraFail(message) {
        document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-danger'><span>Failed because: " + message + "</span></div>";
    } 
}

function examplePicture() {
    navigator.camera.getPicture(onPictureSuccess, onPictureFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });

    function onPictureSuccess(imageURL) {
        document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-info'><span>Success! Loading Image..." + imageURL + "</span></div>";
        document.getElementById('exampleImage').src = imageURL;
        document.getElementById('exampleImage').style.width = "300px";
        document.getElementById('exampleImage').style.height = "300px";
        document.getElementById('exampleImage').style.display = "block";
        document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-info'><span>Success! Loaded</span></div>";
    }

    function onPictureFail(message) {
        document.getElementById("divLoggedIn").innerHTML = "<div class='alert alert-danger'><span>Failed because: " + message + "</span></div>";
    }
}

function ValidateInputs() {
    if (document.getElementById("exampleCalText1").value === "") {
        document.getElementById("exampleCalText1").style.border.color = "red";
        return false;
    }
    document.getElementById("exampleCalText1").style.border.color = "green";
    
    if (document.getElementById("exampleCalText2").value === "") {
        document.getElementById("exampleCalText2").style.border.color = "red";
        return false;
    }
    document.getElementById("exampleCalText2").style.border.color = "green";
    
    if (isNan(document.getElementById("exampleCalText1").value)) {
        document.getElementById("exampleCalText1").style.border.color = "red";
        return false;
    }
    document.getElementById("exampleCalText1").style.border.color = "green";
    
    if (isNan(document.getElementById("exampleCalText1").value)) {
        document.getElementById("exampleCalText1").style.border.color = "red";
        return false;
    }
    document.getElementById("exampleCalText2").style.border.color = "green";
    return true;
}

function examplePlus() {
    if ( ValidateInputs) {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Your result:" + (parseInt(document.getElementById("exampleCalText1").value) + parseInt(document.getElementById("exampleCalText2").value)) + "</span></div>";
    } else {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Invalid Inputs</span></div>";
    }
}

function exampleMinus() {
    if ( ValidateInputs) {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Your result:" + (parseInt(document.getElementById("exampleCalText1").value) - parseInt(document.getElementById("exampleCalText2").value)) + "</span></div>";
    } else {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Invalid Inputs</span></div>";
    }
}

function exampleMulti() {
    if ( ValidateInputs) {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Your result:" + (parseInt(document.getElementById("exampleCalText1").value) * parseInt(document.getElementById("exampleCalText2").value)) + "</span></div>";
    } else {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Invalid Inputs</span></div>";
    }
}

function exampleDivide() {
    if ( ValidateInputs) {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Your result:" + (parseInt(document.getElementById("exampleCalText1").value) / parseInt(document.getElementById("exampleCalText2").value)) + "</span></div>";
    } else {
        document.getElementById("divExampleCalc").innerHTML = "<div class='alert alert-info'><span>Invalid Inputs</span></div>";
    }
}

function exampleSearch() {
    if (document.getElementById("txtexampleSearch").value === "") {
        document.getElementById("txtexampleSearch").style.border.color = "red";
        document.getElementById("exampleSearchList").innerHTML = "<div class='alert alert-info'><span>Invalid Inputs</span></div>";
        return;
    }
    document.getElementById("txtexampleSearch").style.border.color = "green";
    $("#exampleSearchList").html("<div class='alert alert-warning'><span>Loading...</span></div>");
    
    $.ajax({
           type: "GET",
           url: "https://reqres.in/api/users?page=1&per_page=24",
        success: function (respon) {
            var tempStr = '';
            $.each(respon.data, function (index, element) {
                tempStr += '<tr><td><img src="' + element.avatar + '" />' + element.first_name + ' ' + element.last_name + '</td></tr>';
            });
            $("#exampleSearchList").html('<table><tbody>' + tempStr + '</tbody></table>');
           }
    });
}

function exampleMailTo() {
    window.location = 'mailto:' + $("#exampleEmail").val() + '?subject=Test App';
}
