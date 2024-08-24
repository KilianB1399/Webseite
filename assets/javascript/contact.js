document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Create a new FormData object
    const formData = new FormData(event.target);

    // Send form data to the server using Fetch API
    fetch('php/send_email.php', {  // Update the path to match the location of your PHP file
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Get response as text
    .then(data => {
        alert(data); // Show response message
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors to the console
        alert('There was an error sending your message. Please try again later.');
    });
});
