$(document).ready(function () {
  $(window).on('resize', function () {
    if (window.innerWidth > 768) {
      $('.right-img>img').attr('src', './images/image-hero-desktop.png')
      $('br').show()
    } else {
      $('.right-img>img').attr('src', './images/image-hero-mobile.png')
    }
  })

  $('.menu-icon').click(function () {
    $('#header ul').css('transform', 'translateX(0%)')
    $('.simple').addClass('black-screen')
  })
  $('.close-icon').click(function () {
    $('#header ul').css('transform', 'translateX(100%)')
    $('.simple').removeClass('black-screen')
  })
})
