$(function() {
    // ハンバーガーメニュー
    $('.hamburger').on('click', function() {
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#navi').on('click', function() {
        $('#header').removeClass('open');
    });
    // コンテンツフェードイン
      $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });
    // メインジュアルスライダー
    $('#slider').slick({
        infinity:true,
        slidesToShow:1,
        sliderToShow:1,
        autoplay:true,
        autoplaySpeed:4000,
        fade:true,
        speed:900,
        arrows:false,
        accessibility:false,
        swipe:false,
        pauseOnHover:false,
    })
    $('.sp_slider').slick({
        infinity:true,
        slidesToShow:1,
        sliderToShow:1,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
    })
});