let thImg01 = "https://cdn.talkesport.com/wp-content/uploads/CSGO-Operation-10-Details.jpg"
let thImg02 = "https://image.cnbcfm.com/api/v1/image/106560246-1591029813185copy-of-v_brand_promo_horizontal_offwhite.jpg?v=1591029886&w=929&h=523"
let thImg03 = "https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1621944801"
let thImg04 = "https://staticg.sportskeeda.com/editor/2020/07/b8627-15956757487346-800.jpg"
let thImg05 = "http://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg"

const tImgs = [thImg01, thImg02, thImg03, thImg04, thImg05];

let bgImg01 = "https://wallpapercave.com/wp/wp1810702.png"
let bgImg02 = "https://wallpaperaccess.com/full/3037903.jpg"
let bgImg03 = "https://wallpaperaccess.com/full/158905.jpg"
let bgImg04 = "pubg.jpg"
let bgImg05 = "https://wallpaperaccess.com/full/1470806.jpg"

const bgImgs = [bgImg01, bgImg02, bgImg03, bgImg04, bgImg05]

const headings = ['CS:GO', 'Valorant', 'Cyber Punk', 'PUBG', 'COD']

const thImages = document.querySelectorAll("img");
const bgImg = document.querySelector(".box");
const heading = document.querySelector("#gameHead");
const bar = document.querySelector("#progressBar");
const num = document.querySelector("#numDisplay");
const content = document.querySelector("p");
const divImg = document.querySelector("#imgContainer");

let n = 0;

const updateThImg = function (n) {
    divImg.classList.add('hide')

    setTimeout(() => {
        for (let img of thImages) {
            img.style.content = `url(${tImgs[(n + 1) % 5]})`;
            n++;
        }
    }, 300)
    setTimeout(() => {
        divImg.classList.remove('hide');
    }, 300)
}

const changeText = () => {
    heading.classList.add('hide');
    num.classList.add('hide');
    content.classList.add('hide');

    setTimeout(() => {
        heading.innerText = headings[n];
        num.innerText = `0${n + 1}`;
    }, 200)
    setTimeout(function () {
        num.classList.remove('hide');
        heading.classList.remove('hide');
        content.classList.remove('hide');
    }, 200);
}

const updateBgImg = function (n) {
    bgImg.style.backgroundImage = `url(${bgImgs[n]})`;
    changeText();
}

const updateBar = function (n) {
    m = n * 25;
    bar.setAttribute('aria-valuenow', `${m}`);
    bar.style.width = `${m}%`;
}

updateBar(n);
updateBgImg(n);
updateThImg(n);

const previous = document.querySelector("#previous")
const next = document.querySelector("#next");

previous.addEventListener('click', function () {
    n--;
    if (n < 0) {
        n += 5;
    }
    n %= 5;
    updateBgImg(n);
    updateThImg(n);
    updateBar(n);
})

next.addEventListener('click', function () {
    n++;
    n %= 5;
    updateBgImg(n);
    updateThImg(n);
    updateBar(n);
})

thImages[0].addEventListener('click', function () {
    n += 1;
    n %= 5;
    updateBgImg(n);
    updateThImg(n);
    updateBar(n);
})

thImages[1].addEventListener('click', function () {
    n += 2;
    n %= 5;
    updateBgImg(n);
    updateThImg(n);
    updateBar(n);
})

thImages[2].addEventListener('click', function () {
    n += 3;
    n %= 5;
    updateBgImg(n);
    updateThImg(n);
    updateBar(n);
})

thImages[3].addEventListener('click', function () {
    n += 4;
    n %= 5;
    updateBgImg(n);
    updateThImg(n);
    updateBar(n);
})

