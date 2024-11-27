function validateForm() {
    // retrieving form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // avoiding blank input
    if (name === "" || email === "") {
        alert("Name and email are required");
        return false;
    }
    // validating email format using a simple regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    // if all validations pass
    return true;
    }