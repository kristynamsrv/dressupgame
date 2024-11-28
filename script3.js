// Hair, Dress, Top, Skirt, and Pants states
let hairIndex = 0;
let dressIndex = 0;
let topIndex = 0;
let skirtIndex = 0;
let pantsIndex = 0;

// Hair, Dress, Top, Skirt, and Pants arrays
const hairs = [
  "images/Hair1.png",
  "images/Hair2.png",
  "images/Hair3.png",
  "images/Hair4.png",
];

const dresses = [
  "images/Dress1.png",
  "images/Dress2.png",
  "images/Dress3.png",
  "images/Dress4.png",
];

const tops = [
  "images/Top1.png",
  "images/Top2.png",
  "images/Top3.png",
  "images/Top4.png",
  "images/Top5.png",
  "images/Top6.png",
];

const skirts = [
  "images/Skirt1.png",
  "images/Skirt2.png",
  "images/Skirt3.png",
  "images/Skirt4.png",
];

const pants = [
  "images/Pants1.png",
  "images/Pants2.png",
  "images/Pants3.png",
  "images/Pants4.png",
  "images/Pants5.png",
];

// Functions to toggle items
function nextHair() {
  const hair = document.getElementById("hair");
  hairIndex = (hairIndex + 1) % hairs.length; // Cycle through hair
  hair.style.backgroundImage = `url(${hairs[hairIndex]})`;
}

function nextDress() {
  const clothing = document.getElementById("clothing1");
  dressIndex = (dressIndex + 1) % dresses.length; // Cycle through dresses
  clothing.style.backgroundImage = `url(${dresses[dressIndex]})`;
}

function nextTop() {
  const clothing = document.getElementById("clothing2");
  topIndex = (topIndex + 1) % tops.length; // Cycle through tops
  clothing.style.backgroundImage = `url(${tops[topIndex]})`;
}

function nextSkirt() {
  const clothing = document.getElementById("clothing3");
  skirtIndex = (skirtIndex + 1) % skirts.length; // Cycle through skirts
  clothing.style.backgroundImage = `url(${skirts[skirtIndex]})`;
}

function nextPants() {
  const clothing = document.getElementById("clothing4");
  pantsIndex = (pantsIndex + 1) % pants.length; // Cycle through pants
  clothing.style.backgroundImage = `url(${pants[pantsIndex]})`;
}
