new Swiper('.property-wrapper', {
  loop: true,
  spacebetween: 10,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const modals = [
    { images: document.querySelectorAll('.modal-container1 .main-img img') },
    { images: document.querySelectorAll('.modal-container2 .main-img img') },
    { images: document.querySelectorAll('.modal-container3 .main-img img') },
    { images: document.querySelectorAll('.modal-container4 .main-img img') }
  ];

  modals.forEach(modal => {
    const nextButton = modal.images[0].closest('.modal-container').querySelector('.modal-right-button');
    const prevButton = modal.images[0].closest('.modal-container').querySelector('.modal-left-button');
    let currentIndex = 0;

    function updateImage(index) {
      modal.images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
      });
    }

    updateImage(currentIndex);

    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % modal.images.length;
      updateImage(currentIndex);
    });

    prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + modal.images.length) % modal.images.length;
      updateImage(currentIndex);
    });
  });
});



document.querySelector('.open-modal1').addEventListener('click', function(event) {
  event.preventDefault();
const modalContainer = document.querySelector('.modal-container1');
modalContainer.style.display = 'block'; 
});
document.querySelector('.open-modal2').addEventListener('click', function(event) {
  event.preventDefault();
const modalContainer = document.querySelector('.modal-container2');
modalContainer.style.display = 'block'; 
});
document.querySelector('.open-modal3').addEventListener('click', function(event) {
  event.preventDefault();
const modalContainer = document.querySelector('.modal-container3');
modalContainer.style.display = 'block'; 
});
document.querySelector('.open-modal4').addEventListener('click', function(event) {
  event.preventDefault();
const modalContainer = document.querySelector('.modal-container4');
modalContainer.style.display = 'block'; 
});

const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const modalContainer = button.closest('.modal-container');
    modalContainer.style.display = 'none';
  });
});

const buttons = document.querySelectorAll('.btnInquire-now');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
});

const inquireBtn = document.querySelectorAll('.inquire-now');
inquireBtn.forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
});



const menuList = document.querySelector('.menu ul');
const menuButton = document.querySelector('.menu svg');

menuButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the default action
  if (menuList.style.display === 'block') {
    menuList.style.transition = 'transform 0.5s ease';
    menuList.style.transform = 'translateX(100%)';
    setTimeout(() => {
      menuList.style.display = 'none';
    }, 500);
  } else {
    menuList.style.display = 'block';
    menuList.style.transform = 'translateX(100%)';
    setTimeout(() => {
      menuList.style.transition = 'transform 0.5s ease';
      menuList.style.transform = 'translateX(0)';
    }, 10);
  }

  // Rotate the button
  menuButton.style.transition = 'transform 0.5s ease';
  menuButton.style.transform = menuButton.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
});



// Popups control functions
let inquirePopup = document.getElementById("inquire-popup");
let contactPopup = document.getElementById("contact-popup");

function inquireOpenPopup() {
  inquirePopup.classList.add("inquire-open-popup");
}

function inquireClosePopup() {
  inquirePopup.classList.remove("inquire-open-popup");
}

function contactOpenPopup() {
  contactPopup.classList.add("contact-open-popup");
}

function contactClosePopup() {
  contactPopup.classList.remove("contact-open-popup");
}