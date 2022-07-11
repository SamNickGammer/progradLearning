const clickPopUp = document.querySelectorAll('.clickPopUp');
const popupMenu = document.querySelector('.popupMenu');
const overlay = document.querySelector('.overlay');

clickPopUp.forEach(function (item) {
  item.addEventListener('click', function () {
    popupMenu.classList.add('active');
    overlay.classList.add('active');
    popupMenu.style.backgroundImage = `url(${item.name})`;
  });
});

overlay.addEventListener('click', function () {
  popupMenu.classList.remove('active');
  overlay.classList.remove('active');
});
