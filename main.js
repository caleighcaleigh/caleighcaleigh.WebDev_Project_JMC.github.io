document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");

    const fields = {
        fname: document.getElementById("fname"),
        lname: document.getElementById("lname"),
        email: document.getElementById("email"),
        service: document.getElementById("service"),
        inquiryType: document.getElementById("inquiryType"),
        date: document.getElementById("date"),
    };

    const errors = {
        fname: document.getElementById("fnameError"),
        lname: document.getElementById("lnameError"),
        email: document.getElementById("emailError"),
        service: document.getElementById("serviceError"),
        inquiryType: document.getElementById("inquiryTypeError"),
        date: document.getElementById("dateError"),
    };

    function validateField(field, errorElement, errorMessage, condition) {
        if (condition(field.value)) {
            errorElement.textContent = errorMessage;
            field.style.borderColor = "#f44336";
            return false;
        } else {
            errorElement.textContent = "";
            field.style.borderColor = "";
            return true;
        }
    }

    function validateForm() {
        let isValid = true;

        isValid &= validateField(
            fields.fname,
            errors.fname,
            "First name is required.",
            value => value.trim() === ""
        );

        isValid &= validateField(
            fields.lname,
            errors.lname,
            "Last name is required.",
            value => value.trim() === ""
        );

        isValid &= validateField(
            fields.email,
            errors.email,
            "Please enter a valid email.",
            value => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        );

        isValid &= validateField(
            fields.service,
            errors.service,
            "Please select a service.",
            value => value === ""
        );

        isValid &= validateField(
            fields.inquiryType,
            errors.inquiryType,
            "Please select an inquiry type.",
            value => value === ""
        );

        isValid &= validateField(
            fields.date,
            errors.date,
            "Please select a date.",
            value => value === ""
        );

        return Boolean(isValid);
    }

    form.addEventListener("submit", (event) => {
        const isValid = validateForm();
        if (!isValid) {
            event.preventDefault();
        }
    });
});
