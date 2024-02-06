let sectionsArray = [];
let nowPlayingBtn = document.getElementById('nowPlaying');

let popularBtn = document.getElementById('popular');
let topRatedBtn = document.getElementById('topRated');
let trendingBtn = document.getElementById('trending');
let upCamingBtn = document.getElementById('upCaming');


// Validation

let passInput = document.getElementById('pass');
let repassInput = document.getElementById('repass');

let mailError = document.getElementById('mailError');
let phoneError = document.getElementById('phoneError');
let rePassError = document.getElementById('rePassError');
let ageError = document.getElementById('ageError');

// right Part
let barsIcon = document.getElementById('bars');
let xmarkIcon = document.getElementById('xmark');
let liftPartNav = document.getElementById('liftPartNav');
let sideNav = document.getElementById('sideNav');
let searchSection = document.getElementById('searchSection');


barsIcon.addEventListener('click', function() {
    barsIcon.setAttribute("style", "display:none");
    xmarkIcon.removeAttribute("style");
    sideNav.setAttribute("style", "transform: translateX(0);transition: 0.5s all;");
})
xmarkIcon.addEventListener('click', function() {
    barsIcon.removeAttribute("style");
    xmarkIcon.setAttribute("style", "display:none");
    sideNav.setAttribute("style", "transform: translateX(-200px);transition: 0.5s all;");
})

let categories_Display = document.querySelector('.categories');


nowPlayingBtn.addEventListener('click', function() {
    let y = new XMLHttpRequest();

    y.open('get', `https://api.themoviedb.org/3/movie/now_playing?api_key=f30e9996729faa8f14f7a1be79d8c087`);
    y.send();
    y.addEventListener('loadend', function() {
        if (y.status == 200) {
            let cartona = "";
            sectionsArray = JSON.parse(y.response).results;
            console.log(sectionsArray);
            for (let i = 0; i < sectionsArray.length; i++) {
                if (i < 25 && i >= 0)
                    cartona += `<div class="col-lg-4">
                <div class="section position-relative ">
                    <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                    <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                    <div class="inner_overlay">
                <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                <p class="overview_animate">${sectionsArray[i].overview}</p>
                <p>release_date: ${sectionsArray[i].release_date}</p>
                <h3>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                </h3>
                <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                </div>
            </div>

                </div>
            </div>`;
            }
            categories_Display.innerHTML = cartona;
        }
    })
})

popularBtn.addEventListener('click', function() {
    let y = new XMLHttpRequest();
    y.open('get', `https://api.themoviedb.org/3/movie/popular?api_key=f30e9996729faa8f14f7a1be79d8c087`);
    y.send();
    y.addEventListener('loadend', function() {
        if (y.status == 200) {
            let cartona = "";
            sectionsArray = JSON.parse(y.response).results;
            console.log(sectionsArray);
            for (let i = 0; i < sectionsArray.length; i++) {
                if (i < 25 && i >= 0)
                    cartona += `<div class="col-lg-4">
                <div class="section position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                    <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                    <div class="inner_overlay">
                <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                <p class="overview_animate">${sectionsArray[i].overview}</p>
                <p>release_date: ${sectionsArray[i].release_date}</p>
                <h3>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                </h3>
                <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                </div>
            </div>

                </div>
            </div>`;
            }
            categories_Display.innerHTML = cartona;
        }
    })

})

topRatedBtn.addEventListener('click', function() {
    let y = new XMLHttpRequest();
    y.open('get', `https://api.themoviedb.org/3/movie/top_rated?api_key=f30e9996729faa8f14f7a1be79d8c087`);
    y.send();
    y.addEventListener('loadend', function() {
        if (y.status == 200) {
            let cartona = "";
            sectionsArray = JSON.parse(y.response).results;
            console.log(sectionsArray);
            for (let i = 0; i < sectionsArray.length; i++) {
                if (i < 25 && i >= 0)
                    cartona += `<div class="col-lg-4">
                <div class="section position-relative ">
                    <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                    <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                    <div class="inner_overlay">
                <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                <p class="overview_animate">${sectionsArray[i].overview}</p>
                <p>release_date: ${sectionsArray[i].release_date}</p>
                <h3>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                </h3>
                <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                </div>
            </div>

                </div>
            </div>`;
            }
            categories_Display.innerHTML = cartona;
        }
    })
})

trendingBtn.addEventListener('click', function() {
    let y = new XMLHttpRequest();
    y.open('get', `https://api.themoviedb.org/3/trending/movie/day?api_key=f30e9996729faa8f14f7a1be79d8c087`);
    y.send();
    y.addEventListener('loadend', function() {
        if (y.status == 200) {
            let cartona = "";
            sectionsArray = JSON.parse(y.response).results;
            console.log(sectionsArray);
            for (let i = 0; i < sectionsArray.length; i++) {
                if (i < 25 && i >= 0)
                    cartona += `<div class="col-lg-4">
                <div class="section position-relative ">
                    <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                    <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                    <div class="inner_overlay">
                <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                <p class="overview_animate">${sectionsArray[i].overview}</p>
                <p>release_date: ${sectionsArray[i].release_date}</p>
                <h3>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                </h3>
                <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                </div>
            </div>

                </div>
            </div>`;
            }
            categories_Display.innerHTML = cartona;
        }
    })

})

upCamingBtn.addEventListener('click', function() {
    let y = new XMLHttpRequest();
    y.open('get', `https://api.themoviedb.org/3/movie/upcoming?api_key=f30e9996729faa8f14f7a1be79d8c087`);
    y.send();
    y.addEventListener('loadend', function() {
        if (y.status == 200) {
            let cartona = "";
            sectionsArray = JSON.parse(y.response).results;
            console.log(sectionsArray);
            for (let i = 0; i < sectionsArray.length; i++) {
                if (i < 25 && i >= 0)
                    cartona += `<div class="col-lg-4">
                <div class="section position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                    <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                    <div class="inner_overlay">
                <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                <p class="overview_animate">${sectionsArray[i].overview}</p>
                <p>release_date: ${sectionsArray[i].release_date}</p>
                <h3>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                </h3>
                <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                </div>
            </div>

                </div>
            </div>`;
            }
            categories_Display.innerHTML = cartona;
        }
    })
})

function searchByName(x) {
    if (x != "") {
        let y = new XMLHttpRequest();
        y.open('get', `https://api.themoviedb.org/3/search/movie?query=${x}&api_key=f30e9996729faa8f14f7a1be79d8c087&language=en-US&include_adult=false`);
        y.send();
        y.addEventListener('loadend', function() {
            if (y.status == 200) {
                let cartona = "";
                sectionsArray = JSON.parse(y.response).results;
                console.log(sectionsArray);
                for (let i = 0; i < sectionsArray.length; i++) {
                    if (i < 25 && i >= 0)
                        cartona += `<div class="col-lg-4">
                    <div class="section position-relative">
                        <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                        <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                        <div class="inner_overlay">
                    <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                    <p class="overview_animate">${sectionsArray[i].overview}</p>
                    <p>release_date: ${sectionsArray[i].release_date}</p>
                    <h3>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                    </h3>
                    <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                    </div>
                </div>
    
                    </div>
                </div>`;
                }
                categories_Display.innerHTML = cartona;
            }
        })
    } else {
        displayDefualt();
    }
}


function displayDefualt() {
    let y = new XMLHttpRequest();
    y.open('get', `https://api.themoviedb.org/3/trending/all/day?api_key=f30e9996729faa8f14f7a1be79d8c087`);
    y.send();
    y.addEventListener('loadend', function() {
        if (y.status == 200) {
            let cartona = "";
            sectionsArray = JSON.parse(y.response).results;
            console.log(sectionsArray);
            for (let i = 0; i < sectionsArray.length; i++) {
                if (i < 25 && i >= 0)
                    cartona += `<div class="col-lg-4">
                <div class="section position-relative ">
                    <img src="https://image.tmdb.org/t/p/w500${sectionsArray[i].poster_path}" class="w-100 myImg" alt="${sectionsArray[i].poster_path}">
                    <div class="overlay_section text-white d-flex flex-column px-3 py-4 align-align-items-start">
                    <div class="inner_overlay">
                <h3 class="text-center">${sectionsArray[i].original_title!=undefined ? sectionsArray[i].original_title : sectionsArray[i].original_name}</h3>
                <p class="overview_animate">${sectionsArray[i].overview}</p>
                <p>release_date: ${sectionsArray[i].release_date}</p>
                <h3>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                    <i class="fa-solid fa-star text-warning fs-6"></i>
                </h3>
                <h3 class="my_border">${sectionsArray[i].vote_average}</h3>
                </div>
            </div>

                </div>
            </div>`;
            }
            categories_Display.innerHTML = cartona;
        }
    })
}

displayDefualt();


function validateMail(mailInput) {
    let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    return regx.test(mailInput)
}

function MailValidation(x) {
    if (validateMail(x) == true) {
        mailError.innerHTML = "";
    } else if (x == "") {
        mailError.innerHTML = "";
    } else {
        mailError.innerHTML = "Invalid Mail , try example@domain.com";
    }
}

function validatePhone(PhoneInput) {
    let regx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi;
    return regx.test(PhoneInput);
}

function phoneValidation(x) {
    if (validatePhone(x) == true) {
        phoneError.innerHTML = "";
    } else if (x == "") {
        phoneError.innerHTML = "";
    } else {
        phoneError.innerHTML = "Invalid Phone Number";
    }
}

function validatePassword(PasswordInput) {
    let regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi;
    return regx.test(PasswordInput);
}

function passValidation(x) {
    if (validatePassword(x) == true) {
        passError.innerHTML = "";
    } else if (x == "") {
        passError.innerHTML = "";
    } else {
        passError.innerHTML = "PassWord must contain numbers & letters at least 8 character";
    }
}

function repassValidation(x) {
    if (passInput.value == x || x == "") {
        rePassError.innerHTML = "";
    } else {
        rePassError.innerHTML = "Password not match";
    }
}

function ageValidation(x) {
    if (x < 16 || x > 60) {
        ageError.innerHTML = "Your Age must be over +16 and bellow +60";
    } else {
        ageError.innerHTML = "";
    }
}