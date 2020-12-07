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
  //обработка форм
  $(".form").each(function(){
    $(this).validate({
      errorClass:"invalid",
      messages: {
        name: {
          required: "Please enter a name",
          minlength: "The name should not be shorter than 2 letters"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone is required",   
        },
      },
    });
  });
  $(document).ready(function(){
    $('.phone').mask('+7(000)-000-00-00');
  });
});