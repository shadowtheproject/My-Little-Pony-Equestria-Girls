const videos = document.querySelectorAll("#myVideo");
const playButtons = document.querySelectorAll("#playButton");

videos.forEach((video, index) => {

    const playButton = playButtons[index];
    let hideTimer;

    function showButton() {
        playButton.style.display = "block";

        clearTimeout(hideTimer);

        if (!video.paused) {
            hideTimer = setTimeout(() => {
                playButton.style.display = "none";
            }, 2000);
        }
    }

    // Кнопка Play / Pause
    playButton.addEventListener("click", function(event) {
        event.stopPropagation();

        if (video.paused) {
            video.play();
            playButton.textContent = "❚❚";

            hideTimer = setTimeout(() => {
                playButton.style.display = "none";
            }, 2000);

        } else {
            video.pause();
            playButton.textContent = "▶";
            showButton();
        }
    });

    // Нажатие на видео
    video.addEventListener("click", function() {

        if (video.paused) {
            video.play();
            playButton.textContent = "❚❚";
            showButton();

        } else {
            playButton.textContent = "❚❚";
            showButton();
        }

    });

    // Видео закончилось
    video.addEventListener("ended", function() {
        clearTimeout(hideTimer);
        playButton.textContent = "▶";
        playButton.style.display = "block";
    });

});


// ====================
// МЕНЮ
// ====================

const menuBtns = document.querySelectorAll(".menu-btn");
const menus = document.querySelectorAll(".menu");
const closeBtns = document.querySelectorAll(".close");
const overlays = document.querySelectorAll(".overlay");


// Открытие меню
menuBtns.forEach((menuBtn, index) => {
    menuBtn.addEventListener("click", function () {
        menus[index].classList.add("active");
        overlays[index].classList.add("active");
    });
});


// Закрытие меню крестиком
closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", function () {
        menus[index].classList.remove("active");
        overlays[index].classList.remove("active");
    });
});


// Закрытие при нажатии на затемнение
overlays.forEach((overlay, index) => {
    overlay.addEventListener("click", function () {
        menus[index].classList.remove("active");
        overlays[index].classList.remove("active");
    });
});


const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
    audio.addEventListener("play", () => {
        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0;
            }
        });
    });
});

