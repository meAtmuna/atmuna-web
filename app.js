const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        switchBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
    else{
        switchBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});