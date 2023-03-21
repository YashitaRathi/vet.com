$(document).ready(function(){

$(window).on('scroll load',function(){

    $('#menu').removeClass('fa-time');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
        $('.top').show();
    }
    else{
        $('.top').hide()
    }
});





});