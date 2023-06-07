$(function() {
    // ハンバーガーメニュー
    $('.hamburger').on('click', function() {
        if($('#header,html').hasClass('open')) {
            $('#header,html').removeClass('open');
        } else {
            $('#header,html').addClass('open');
        }
    });
    $('#mask').on('click', function() {
        $('#header,html').removeClass('open');
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
    // コンテンツスライダー
    $('.sp_slider').slick({
        infinity:true,
        slidesToShow:1,
        sliderToShow:1,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
    })
});