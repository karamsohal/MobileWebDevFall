$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            schoolName: "required",
            email: {
                required: true,
                email: true
            },
            joiningDate: {
                required: true,
                joiningDate: true
            },
            phoneNumber: {
                required: true,
                phoneNumber: /^\d{3}-\d{3}-\d{4}$/
            },
            zipCode: {
                required: true,
                pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/
            },
            creditCardNumber: {
                required: true,
                pattern: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
            },
            expirationDate: {
                required: true,
                dateISO: true
            },
            cvv: {
                required: true,
                pattern: /^[0-9]{3,4}$/
            }
        },
        messages: {
            schoolName: "Please enter the name of the school.",
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address."
            },
            joiningDate: {
                required: "Please enter your joining date.",
                joiningDate: "Please enter a valid date."
            },
            phoneNumber: {
                required: "Please enter your phone number.",
                pattern: "Please enter a valid phone number (e.g., (123) 456-7890)."
            },
            zipCode: {
                required: "Please enter your zip code.",
                pattern: "Please enter a valid zip code (e.g., xxxxx or xxxxx-xxxx)."
            },
            creditCardNumber: {
                required: "Please enter your credit card number.",
                pattern: "Please enter a valid credit card number."
            },
            expirationDate: {
                required: "Please enter your card's expiration date.",
                pattern: "Please enter a valid date."
            },
            cvv: {
                required: "Please enter your CVV.",
                pattern: "Please enter a valid CVV (3 or 4 digits)."
            }
        }
    });
});
