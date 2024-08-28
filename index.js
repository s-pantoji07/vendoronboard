document.getElementById('onboardingForm').addEventListener('submit', function(event) {
    const fileInput = document.getElementById('productImages');
    const files = fileInput.files;

    if (files.length > 5) {
        alert('You can upload a maximum of 5 images.');
        event.preventDefault();
    }

    for (let i = 0; i < files.length; i++) {
        if (files[i].size > 2 * 1024 * 1024) { // 2MB limit
            alert('Each image must be less than 2MB.');
            event.preventDefault();
            break;
        }
    }
});
