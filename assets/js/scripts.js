(function ($) {
  // Sticky Header on Scroll
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var $mainMenu = $('header');

    if (scrollTop > 0) {
      $mainMenu.addClass('is-sticky').css({
        'position': 'fixed',
        'width': '100%',
        'left': '0',
        'top': '0'
      });
    } else {
      $mainMenu.removeClass('is-sticky').removeAttr('style');
    }
  });

  var owl = $(".five-desktech-owl");
  owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    items: 5,
    margin: 10,
    loop: true,
    nav: true,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="96" viewBox="0 0 50 96" fill="none">
      <g clip-path="url(#clip0_11_98)">
        <path d="M37.0075 84.202L13.0743 48.7677L37.2815 13.52" stroke="#E7E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_11_98">
          <rect width="94.2433" height="48.1409" fill="white" transform="translate(0.859375 95.0557) rotate(-89.7779)"/>
        </clipPath>
      </defs>
    </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="95" viewBox="0 0 49 95" fill="none">
        <g clip-path="url(#clip0_11_96)">
          <path d="M12.0793 83.2956L36.2896 48.048L12.3533 12.6137" stroke="#E7E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_11_96">
            <rect width="94.2433" height="48.1469" fill="white" transform="matrix(0.00387648 -0.999992 -0.999992 -0.00387648 48.1465 94.4292)"/>
          </clipPath>
        </defs>
      </svg>`

    ],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 5,
      },

      1366: {
        items: 5,
      },
    },
  });
  $('.value').each(function () {
    var $this = $(this);
    var target = parseInt($this.attr('data-target'));
    var current = 0;
    var increment = target / 100;

    function countUp() {
      current += increment;
      if (current < target) {
        $this.text('+' + Math.ceil(current));
        setTimeout(countUp, 20);
      } else {
        $this.text(target < 2023 ? target : '+' + target);
      }
    }

    countUp();
  });

})(jQuery);
// $(document).ready(function () {
//   $('#exampleModal').modal('show');
// });