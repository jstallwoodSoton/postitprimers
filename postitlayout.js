const BODY = document.body;
const DARKMODE = document.getElementById("darkmode");
DARKMODE.addEventListener("change", function() {
    if(DARKMODE.checked) {
        BODY.classList.remove("light-mode");
        BODY.classList.add("dark-mode");
    }
    else {
        BODY.classList.add("light-mode");
        BODY.classList.remove("dark-mode");
    }
});