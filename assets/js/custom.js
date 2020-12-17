//cart product quantity javascript function
    $('.visibility-cart').on('click',function(){
       
       var $btn =  $(this);
       var $cart = $('.cart');
       console.log($btn);
       
       if ($btn.hasClass('is-open')) {
          $btn.removeClass('is-open');
          $btn.text('O')
          $cart.removeClass('is-open');     
          $cart.addClass('is-closed');
          $btn.addClass('is-closed');
       } else {
          $btn.addClass('is-open');
          $btn.text('X')
          $cart.addClass('is-open');     
          $cart.removeClass('is-closed');
          $btn.removeClass('is-closed');
       }
     
                       
     });
     
         // SHOPPING CART PLUS OR MINUS
         $('a.qty-minus').on('click', function(e) {
             e.preventDefault();
             var $this = $(this);
             var $input = $this.closest('div').find('input');
             var value = parseInt($input.val());
         
             if (value > 1) {
                 value = value - 1;
             } else {
                 value = 0;
             }
         
         $input.val(value);
             
         });
     
         $('a.qty-plus').on('click', function(e) {
             e.preventDefault();
             var $this = $(this);
             var $input = $this.closest('div').find('input');
             var value = parseInt($input.val());
     
             if (value < 100) {
             value = value + 1;
             } else {
                 value =100;
             }
     
             $input.val(value);
         });
     
     // RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
     $('input').on('blur', function(){
     
         var input = $(this);
         var value = parseInt($(this).val());
     
             if (value < 0 || isNaN(value)) {
                 input.val(0);
             } else if
                 (value > 100) {
                 input.val(100);
             }
     });



// megamenu
$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up  
    $(window).resize(function () {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });

            // do something here
        }
    });

    // document ready  
})



//  price-rang
var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

var lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value = this.value
};


//cart product quantity javascript function
$('.visibility-cart').on('click', function () {

    var $btn = $(this);
    var $cart = $('.cart');
    console.log($btn);

    if ($btn.hasClass('is-open')) {
        $btn.removeClass('is-open');
        $btn.text('O')
        $cart.removeClass('is-open');
        $cart.addClass('is-closed');
        $btn.addClass('is-closed');
    } else {
        $btn.addClass('is-open');
        $btn.text('X')
        $cart.addClass('is-open');
        $cart.removeClass('is-closed');
        $btn.removeClass('is-closed');
    }


});

// SHOPPING CART PLUS OR MINUS
$('a.qty-minus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('a.qty-plus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});

// RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
$('input').on('blur', function () {

    var input = $(this);
    var value = parseInt($(this).val());

    if (value < 0 || isNaN(value)) {
        input.val(0);
    } else if
        (value > 100) {
        input.val(100);
    }
});