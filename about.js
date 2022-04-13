const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const images = document.querySelectorAll(".about-img");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");

    //hide other images
    images.forEach(function (image) {
      image.classList.remove("active");
    });
    const imgElement = document.getElementById(id + "img");
    imgElement.classList.add("active");
  }
});

//text on banner
let typed = new Typed(".typed", {
  strings: ["Biryani", "Drinks", "Desert", "Main Course"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//Scroll to top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var top = document.getElementById("top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
