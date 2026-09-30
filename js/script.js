function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("Name cannot be empty");
        return false;
    }

    if (email == "") {
        alert("Email cannot be empty");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return false;
    }

    if (phone != "") {

        if (phone.length != 10 || isNaN(phone)) {
            alert("Phone number must contain 10 digits");
            return false;
        }
    }

    if (message == "") {
        alert("Message cannot be empty");
        return false;
    }

    if (message.length < 10) {
        alert("Message must contain at least 10 characters");
        return false;
    }

    alert("Form submitted successfully");

    return true;
}






