const switchBtn = document.getElementById("switch");
const likeBtn = document.getElementById("like");
const likeSpan = document.getElementById("likeSpan");

let likes = 0;

switchBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        switchBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
    else{
        switchBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});

likeBtn.addEventListener("click", function(){
    likes++;
    likeSpan.textContent = likes;
})