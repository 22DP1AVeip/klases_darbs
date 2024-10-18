
var modals = document.querySelectorAll(".modal");
var btns = document.querySelectorAll(".myBtn");
var spans = document.querySelectorAll(".close");


btns.forEach(function (btn, index) {
    btn.onclick = function () {
        modals[index].style.display = "block"; 
        document.body.classList.add("modal-open");

            modals[index].scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
    };
});

spans.forEach(function (span, index) {
    span.onclick = function (event) {
        event.stopPropagation(); 
        modals[index].style.display = "none"; 
        document.body.classList.remove("modal-open");
    };
});


modals.forEach(function (modal) {
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; 
            document.body.classList.remove("modal-open");
        }
    };
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modals.forEach(function (modal) {
            modal.style.display = "none"; 
            document.body.classList.remove("modal-open");
        });
    }
});
