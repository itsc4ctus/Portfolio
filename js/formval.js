function formval() {
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var number = document.getElementById("number").value;

    if (uname == "") {
        alert("Must Enter A Username");
        document.getElementById("uname").focus();
        return false;
    }
    if (email == "") {
        alert("Must Enter An Email");
        document.getElementById("email").focus();
        return false;
    }
    if (message == "") {
        alert("Must Enter A Message");
        document.getElementById("message").focus();
        return false;
    }
    if (number == "") {
        alert("Must Enter A Number");
        document.getElementById("number").focus();
        return false;
    }
    if (number.length != 10) {
        alert("Number must be exactly 10 digits");
        document.getElementById("number").focus();
        return false;
    }

    return true;
}
