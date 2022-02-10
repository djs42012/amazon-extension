
const pageContents = $('#pageContent');
const rhf = $('#rhf');
const skipLink = $('#skiplink');
const contentsParent = document.getElementById('pageContent').parentElement;
const rhfParent = document.getElementById('rhf').parentElement; 
const navBar = document.getElementById('navbar');
// remove contents
pageContents.remove();
rhf.remove();
skipLink.remove();

// const imagesArray = ['src/bezosBuyingSuchThings.jpg', 'src/bezosBroke.jpg', 'src/bezosBrokeMotherfucker.jpg', 'src/bezosFinanciallyRecover.jpg', 'src/bezosNeck.jpg', 'src/bezosSpaceships.jpg', 'src/bezosThreeCommas.jpg', 'src/bezosTooExpensive.jpg'];


const imgurArray = ['https://imgur.com/IOoZ1FO.jpg','https://imgur.com/aPuArjv.jpg', 'https://imgur.com/0QUZo01.jpg', 'https://imgur.com/GM0F4FS.jpg', 'https://imgur.com/z5qVOpb.jpg', 'https://imgur.com/20ZykdP.jpg', 'https://imgur.com/GWTobE6.jpg', 'https://imgur.com/i7xeRR1.jpg']

function chooseMeme() {
    const selectedMeme = imgurArray[Math.floor((Math.random() * imgurArray.length))];
    const meme = document.createElement("img");
    meme.setAttribute('id', 'meme')
    meme.setAttribute('src', selectedMeme);
    navBar.append(meme);
    meme.style.width = "45%";
    meme.style.marginLeft = "auto";
    meme.style.marginRight = "auto";
}
    
chooseMeme();
const song = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
song.play();