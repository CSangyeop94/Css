// trigger

$(function(){
    $('.trigger').click(function(){
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
    });

    $('section, .menu a').click(function(){
        $('.gnb').removeClass('active');
        $('.trigger').removeClass('active');
    });

    // Smooth Scrolling 
    // $('.menu a, .gototop').click(function(e){
    //     $.scrollTo(this.hash || 0, 900);
    // });

    // Change Css with Scroll - 브라우저가 이동할때.
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('header, .gototop').addClass('active');
        }else{
            $('header, .gototop').addClass('active');
        }
    });
});