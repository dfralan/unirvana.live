let auth = '563492ad6f91700001000001abc52aa8330a4e6398cad8081918aaec';

let searchbutton = document.querySelector(".searchbutton");
let playPauseButton = document.getElementById('play-pause');
let playButtonIcon = document.getElementById('playButtonIcon');
let pauseButtonIcon = document.getElementById('pauseButtonIcon');
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let loopButton = document.querySelector(".loop");
let input = document.querySelector("input");

function doPlay() {
    playButtonIcon.style.opacity = "0";
    pauseButtonIcon.style.opacity = "1";
}
function doPause() {
    playButtonIcon.style.opacity = "1";
    pauseButtonIcon.style.opacity = "0";
}

let videoPlayer = document.getElementById("video-player");
let source = videoPlayer.querySelector("source");
let credits = document.querySelector(".credits");

let videos = [];
let currentIndex = 0;
let pagenr = 1;
let query = "";
let search = false;
let looped = false;

let progressBar = document.getElementById("progress");

// Actualizar la barra mientras el video se reproduce
videoPlayer.addEventListener("timeupdate", () => {
    const percentage = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.value = percentage || 0;
});

// Permitir al usuario buscar arrastrando
progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * videoPlayer.duration;
    videoPlayer.currentTime = seekTime;
});


// Función para cargar video actual
function loadVideo(index) {
    if (!videos[index]) return;
    const video = videos[index];
    source.setAttribute("src", video.video_files[0].link);
    videoPlayer.load();
    videoPlayer.play();
    credits.innerHTML = `Art by <b>${video.user.name}</b> from <b>Pexels</b>`;
}

// Función para obtener videos
async function fetchVideos(url) {
    const res = await fetch(url, {
        headers: {
            Authorization: auth
        }
    });
    const data = await res.json();
    if (data.videos.length === 0) return;

    videos = data.videos;
    currentIndex = 0;
    loadVideo(currentIndex);

    // Opcional: guardar en sessionStorage
    sessionStorage.setItem("cachedVideos", JSON.stringify(videos));
    sessionStorage.setItem("cachedSearch", search ? query : "popular");
}

// Siguiente video
function siguiente() {
    currentIndex++;
    if (currentIndex >= videos.length) {
        pagenr++;
        if (search) {
            fetchVideos(`https://api.pexels.com/videos/search?query=${query}&per_page=5&page=${pagenr}`);
        } else {
            fetchVideos(`https://api.pexels.com/videos/popular?per_page=5&page=${pagenr}`);
        }
    } else {
        loadVideo(currentIndex);
    }
    doPlay();
}

// Anterior video
function anterior() {
    if (currentIndex > 0) {
        currentIndex--;
        loadVideo(currentIndex);
    }
}

// Botón búsqueda
searchbutton.addEventListener("click", () => {
    query = input.value.trim();
    if (!query) return;

    search = true;
    pagenr = 1;
    fetchVideos(`https://api.pexels.com/videos/search?query=${query}&per_page=5&page=${pagenr}`);
});

// Botón play/pause
playPauseButton.addEventListener("click", () => {
    if (videoPlayer.paused) {
        doPlay();
        videoPlayer.play();
    } else {
        doPause();
        videoPlayer.pause();
    }
});

// Loop toggle
loopButton.addEventListener("click", () => {
    looped = !looped;
    videoPlayer.loop = looped;
    loopButton.style.fill = looped ? "#FE0060" : "#333";
});

// Siguiente/anterior botones
nextButton.addEventListener("click", siguiente);
prevButton.addEventListener("click", anterior);

// Al terminar video
videoPlayer.addEventListener("ended", () => {
    if (!looped) siguiente();
});

const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    // Entrar en fullscreen de toda la página
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
    fullscreenBtn.style.fill = "#FE0060";
  } else {
    // Salir de fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    fullscreenBtn.style.fill = "#333";
  }
});



// Carga inicial (popular)
fetchVideos(`https://api.pexels.com/videos/popular?per_page=5&page=${pagenr}`);
