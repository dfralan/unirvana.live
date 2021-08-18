var apikey = config.API_KEY;

const auth = apikey;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const loop = document.querySelector(".loop");
const input = document.querySelector("input"); 0
const searchbutton = document.querySelector(".searchbutton");
console.log(process.env);

let pagenr = 8;
let search = false;
let query = "";

input.addEventListener("input", (e) => {
    e.preventDefault();
    query = e.target.value;
});

async function PopularVideos(pagenr) {
    const data = await fetch(
        `https://api.pexels.com/videos/popular?per_page=1&page=${pagenr}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        }
    );
    const result = await data.json();
    document.querySelector(".gallery").innerHTML = "";
    result.videos.forEach((video) => {
        const pic = document.createElement("div");
        pic.innerHTML = `<video class="video" autoplay><source src="${video.video_files[0].link}"></video><p>Art by <b>${video.user.name}</b> from <b>Pexels</b></p>`;
        document.querySelector(".gallery").appendChild(pic);
    });
    document.querySelector(".video").addEventListener("ended", termino)
}

async function SearchVideos(query, pagenr) {
    const data = await fetch(
        `https://api.pexels.com/videos/search?query=${query}&per_page=1&page=${pagenr}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        }
    );
    const result = await data.json();
    document.querySelector(".gallery").innerHTML = "";
    result.videos.forEach((video) => {
        const pic = document.createElement("div");
        pic.innerHTML = `<video class="video" autoplay muted><source src="${video.video_files[0].link}"></video><p>Art by <b>${video.user.name}</b> from <b>Pexels</b></p>`;
        document.querySelector(".gallery").appendChild(pic);
    });
    arregloBTN();
}
function arregloBTN() {
    const btn = document.getElementById("play-pause");
    btn.className = ("pause");
}

searchbutton.addEventListener("click", () => {
    if (input.value === "") return;
    clear();
    search = true;
    SearchVideos(query, pagenr);
    pagenr++;
});

function clear() {
    input.value = "";
    document.querySelector(".gallery").innerHTML = "";
}
const siguiente = () => {
    if (!search) {
        pagenr++;
        PopularVideos(pagenr);
    } else {
        if (query.value === "") return;
        pagenr++;
        SearchVideos(query, pagenr);
    }
    arregloBTN();
}
next.addEventListener("click", siguiente)

prev.addEventListener("click", () => {
    if (!search) {
        pagenr--;
        PopularVideos(pagenr);
    } else {
        if (query.value === "") return;
        pagenr--;
        SearchVideos(query, pagenr);
    }
    arregloBTN();
})


PopularVideos(pagenr);


var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');

function togglePlayPause() {
    var video = document.querySelector('.video');
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }
}

btn.onclick = function () {
    togglePlayPause();
};
var looper = true;
var termino = () => { siguiente() }
loop.addEventListener("click", () => {
    if (looper) { 
        loop.className = "loop";
        document.querySelector(".video").removeEventListener("ended", termino) } else {
        loop.className = "loop active"; document.querySelector(".video").addEventListener("ended", termino)
    }
    looper = !looper;
})
