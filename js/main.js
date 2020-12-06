$(document).ready(function (){
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: 'ccoverflow',
  })
  var hotelSlider = new Swiper('.hotel-slider', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  })
  
  var menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', function() {
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom__visible')
  });
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay_visible')
    modalDialog.addClass('modal__dialog_visible')

  }
  function closeModal(event){
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay_visible')
    modalDialog.removeClass('modal__dialog_visible')
  }
});