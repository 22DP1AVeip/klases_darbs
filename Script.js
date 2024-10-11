// Get all modals, buttons, and close spans
var modals = document.querySelectorAll(".modal");
var btns = document.querySelectorAll(".myBtn");
var spans = document.querySelectorAll(".close");

// Open modal on button click
btns.forEach(function (btn, index) {
    btn.onclick = function () {
        modals[index].style.display = "block"; // Show the corresponding modal
        document.body.classList.add("modal-open");
    };
});

// Close modal when close button is clicked
spans.forEach(function (span, index) {
    span.onclick = function (event) {
        event.stopPropagation(); // Prevent event from bubbling up
        modals[index].style.display = "none"; // Hide the corresponding modal
        document.body.classList.remove("modal-open");
    };
});

// Close modal when clicking outside the modal content
modals.forEach(function (modal) {
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
            document.body.classList.remove("modal-open");
        }
    };
});

// Close modal on pressing the 'Esc' key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modals.forEach(function (modal) {
            modal.style.display = "none"; // Hide the modal
            document.body.classList.remove("modal-open");
        });
    }
});
