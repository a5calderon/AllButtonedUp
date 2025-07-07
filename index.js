const items = {
    hair: ["images/hair/braidedHoops.png", "images/hair/bun.png","images/hair/ponytail.png","images/hair/shortHair.png","images/hair/twoBraidsIn.png","images/hair/twoBraidsOut.png","images/hair/twoBuns.png","images/hair/twoPigtails.png"],
    mouth: ["images/mouths/biggerSadFace.png","images/mouths/bigSmile.png", "images/mouths/kissyFace.png","images/mouths/miniOpenMouth.png","images/mouths/openMouth.png","images/mouths/sadFace.png","images/mouths/slightSmile.png","images/mouths/smallSmile.png","images/mouths/straightFace.png","images/mouths/tongue.png"],
    accessories: ["images/accessories/bearHat.png","images/accessories/blueHat.png","images/accessories/circleGlasses.png","images/accessories/greenHat.png", "images/accessories/heartGlasses.png","images/accessories/rabbitEarmufs.png","images/accessories/strawberryHat.png","images/accessories/yellowHat.png"],
    shirts: ["images/shirts/cropTop.png","images/shirts/greenShirt.png","images/shirts/purpleShirt.png","images/shirts/redShirt.png","images/shirts/whiteShirt.png"],
    pants: ["images/bottoms/baggyJeans.png","images/bottoms/flaredJeans.png","images/bottoms/foldedJeans.png","images/bottoms/jeanSkirt.png","images/bottoms/patchedJeans.png","images/bottoms/pinkSkirt.png","images/bottoms/whiteSkirt.png"],
    dresses: ["images/fullFit/overalls.png","images/fullFit/whiteDress.png","images/fullFit/yellowDress.png"],
    socks: ["images/socks/beigeSocks.png","images/socks/tights.png","images/socks/whiteSocks.png"],
    shoes: ["images/shoes/boots.png","images/shoes/flats.png","images/shoes/maryJanes.png","images/shoes/sandals.png"]
};

let currentCategory = "hair";
let currentIndex = 0;

const girlImage = document.querySelector('.girl');
const categoryImages = {
    hair: document.createElement('img'),
    mouth: document.createElement('img'),
    accessories: document.createElement('img'),
    shirts: document.createElement('img'),
    pants: document.createElement('img'),
    dresses: document.createElement('img'),
    socks: document.createElement('img'),
    shoes: document.createElement('img')
};

const imgWrap = document.querySelector('.imgWrap');
for (let key in categoryImages) {
    categoryImages[key].classList.add('layer', key); 
    imgWrap.appendChild(categoryImages[key]);
}

const forwardButton = document.getElementById('forwardButton');
const backButton = document.getElementById('backButton');
const confirmButton = document.getElementById('confirmButton');

const categoryButtons = document.querySelectorAll('.category-btn');

// Category selection logic
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.getAttribute('data-category');
        currentIndex = 0;
        updateImage();
    });
});

// Next item
forwardButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items[currentCategory].length;
    updateImage();
});

// Previous item
backButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items[currentCategory].length) % items[currentCategory].length;
    updateImage();
});

// Confirm button
confirmButton.addEventListener('click', () => {
    console.log(`Confirmed: ${items[currentCategory][currentIndex]}`);
});

// Update the displayed image
function updateImage() {
    const imagePath = items[currentCategory][currentIndex];
    categoryImages[currentCategory].src = imagePath;

    // Handle one-piece logic: Hide shirts and bottoms if wearing a one-piece
    if (currentCategory === 'dresses') {
        categoryImages.shirts.src = '';
        categoryImages.pants.src = '';
    }
    if (currentCategory === 'shirts' || currentCategory === 'pants') {
        categoryImages.dresses.src = '';
    }
}