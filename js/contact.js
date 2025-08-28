// Get reference to the contact form
const form = document.getElementById('contact-from');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Thank you! Your message has been sent.");
            form.reset(); // Clear the form
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(error => {
        console.error(error);
        alert("Oops! There was a problem submitting your form.");
    });
});