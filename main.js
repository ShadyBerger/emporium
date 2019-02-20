// When the user scrolls the page, execute myFunction 
window.onscroll = function () { scrollNav() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//themes Dark & Light
var img1 = document.querySelectorAll('img');
function darkTheme() {
  document.querySelector('body').style.backgroundColor = "black";
  document.querySelector('div').style.backgroundColor = "black";
  document.getElementById('navbar').style.background = "#494956";
  document.getElementsByClassName('shop-at')[0].style.backgroundColor = "black";
  document.getElementsByClassName('greyBG')[0].style.backgroundColor = "#494956";
  document.getElementsByClassName('greyBG')[1].style.backgroundColor = "#494956";
  document.getElementsByClassName('redBG')[0].style.backgroundColor = "#7c0f0f";
  document.querySelector('.redBG > p').style.color = "black";
  document.querySelector('.redBG > h3').style.color = "black";
  document.querySelector('.redBG > i').style.color = "black";
  document.getElementsByClassName('shop-at-2stLine')[0].style.color = "white";
  for (i = 0; i < 10; i++) {
    document.getElementsByClassName('fa-circle')[i].style.color = "white";
  }
  for (i = 0; i < 100; i++) {
    img1[i].style.opacity = "0.7";
  };

  document.getElementsByClassName('modal-content')[0].style.backgroundColor = "#494956";
  document.getElementsByClassName('panel')[0].style.backgroundColor = "#494956";
};


function lightTheme() {
  document.querySelector('body').style.backgroundColor = "white";
  document.querySelector('div').style.backgroundColor = "white";
  document.getElementById('navbar').style.background = "white";
  document.getElementsByClassName('shop-at')[0].style.backgroundColor = "#f3f3f3";
  document.getElementsByClassName('greyBG')[0].style.backgroundColor = "#f3f3f3";
  document.getElementsByClassName('greyBG')[1].style.backgroundColor = "#f3f3f3";
  document.getElementsByClassName('redBG')[0].style.backgroundColor = "#bd584e";
  document.querySelector('.redBG > p').style.color = "white";
  document.querySelector('.redBG > h3').style.color = "white";
  document.querySelector('.redBG > i').style.color = "white";
  document.getElementsByClassName('shop-at-2stLine')[0].style.color = "black"
  for (i = 0; i < 10; i++) {
    document.getElementsByClassName('fa-circle')[i].style.color = "black";
  }
  for (i = 0; i < 100; i++) {
    img1[i].style.opacity = "1";
  };

  document.getElementsByClassName('modal-content')[0].style.backgroundColor = "white";
  document.getElementsByClassName('panel')[0].style.backgroundColor = "white";
}


let buttons0 = document.getElementsByClassName('buttons0')[0];
let buttons1 = document.getElementsByClassName('buttons1')[0];
let buttons2 = document.getElementsByClassName('buttons2')[0];
let buttons3 = document.getElementsByClassName('buttons3')[0];
let buttons4 = document.getElementsByClassName('buttons4')[0];
let buttons5 = document.getElementsByClassName('buttons5')[0];
let buttons6 = document.getElementsByClassName('buttons6')[0];

let slideDiv = document.getElementsByClassName('slide')[0];
let colMza = document.querySelectorAll(".col > img")

function slide(event) {
  console.dir(event.currentTarget.dataset.position);
  let pos = event.currentTarget.dataset.position;
  slideDiv.style.transform = 'translateX(' + -14.28 * pos + '%)'
  // slideDiv.style.transform = `translateX( ${-14.28 * pos}%)`
  slideDiv.style.transition = 'all 1s ease'
  event.preventDefault()
}

buttons0.addEventListener('click', slide)
buttons1.addEventListener('click', slide)
buttons2.addEventListener('click', slide)
buttons3.addEventListener('click', slide)
buttons4.addEventListener('click', slide)
buttons5.addEventListener('click', slide)
buttons6.addEventListener('click', slide)


// function slide2() {
//   slideDiv.style.transform = 'translateX(-28.56%)'
//   slideDiv.style.transition = 'all 1s ease'
//   event.preventDefault()
// }
// buttons2.addEventListener('click', slide2)

// function slideMza () {
//   for(i=0;i<colMza.length; i++){

//   }
// }

