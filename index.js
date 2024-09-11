document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = 'Thank you for contacting us!';
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Something went wrong. Please try again.';
    });
});
