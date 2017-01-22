/**
 * Created by skwow on 12/25/2016.
 */


function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this,
            args = arguments,
            later = function() {
                timeout = null;
                func.apply(context, args);
            };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}



$(document).ready(function(){
    var blankSrc = "#";
    var gameSrc = "gameDodgeIt.html";
    $('#btnClick').on('click',function(){
        if($('#1').css('display')!='none'){
            $('#2').show().siblings('div').hide();
            $('#gameFrame').attr('src',gameSrc);
        }else if($('#2').css('display')!='none'){
            $('#1').show().siblings('div').hide();
            $('#gameFrame').attr('src',blankSrc);
        }
    });
    jQuery('nav').css({opacity:0.01});
    $(window).scroll(debounce(function(){
        var temp= $(window).scrollTop();
        jQuery('#ww').css({opacity: 50/(temp+0.01)});
        jQuery('nav').css({opacity:temp/400});
        if(temp>=200)
        {
            $('#games').removeClass('bounceInRight').addClass('bounceOutLeft');
        }else{
            $('#games').removeClass('bounceOutLeft').addClass('bounceInRight');
        }
        if(temp>=400)
        {
            $('nav').removeClass('bounceOutUp').addClass('bounceInDown');
        }else{
            $('nav').removeClass('bounceInDown').addClass('bounceOutUp');
        }
    },500));
});
