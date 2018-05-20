

$(document).on('click', '.section', function(rotateImages) {

if(!$(this).hasClass('MAIN_IMG')) {

    $(document).find('.fibona1').toggleClass('img_01').toggleClass('img_02')
    $(document).find('.fibona2').toggleClass('img_02').toggleClass('img_03')
    $(document).find('.fibona3').toggleClass('img_03').toggleClass('img_06')
    $(document).find('.fibona4').toggleClass('img_06').toggleClass('img_05')
    $(document).find('.fibona5').toggleClass('img_05').toggleClass('img_04')
    $(document).find('.fibona6').toggleClass('img_04').toggleClass('img_01')
    $(document).find('.fibona1').toggleClass('img_01').toggleClass('img_01')
}

})