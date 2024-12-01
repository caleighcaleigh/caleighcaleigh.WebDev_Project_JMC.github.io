function validateForm() {
    // retrieving form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // avoiding blank input
    if (name === "" || email === "") {
        //alert("Name and email are required");
        modalBlankFields.style.display = "block";

        return false;
    }
    // validating email format using a simple regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        modalUnvalidEmail.style.display = "block";
        return false;
    }
    // if all validations pass
    return true;
}

var modalBlankFields = document.getElementById("modalBlankFields");
var modalUnvalidEmail = document.getElementById("modalUnvalidEmail");

// Get the <span> element that closes the modal
var spanBkFd = document.getElementById("closeBkFd");
var spanUvEm = document.getElementById("closeUvEm");

// When the user clicks on <span> (x), close the modal
spanBkFd.onclick = function () {
    modalBlankFields.style.display = "none";
}
spanUvEm.onclick = function () {
    modalUnvalidEmail.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalBlankFields) {
        modalBlankFields.style.display = "none";
    }
    if (event.target == modalUnvalidEmail) {
        modalUnvalidEmail.style.display = "none";
    }
} 