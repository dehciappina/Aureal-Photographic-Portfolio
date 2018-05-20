

$('.section').on('click', function(rotateImages) {
    $(document).find('.fibona1').removeClass('img_01').addClass('img_02')
    $(document).find('.fibona2').removeClass('img_02').addClass('img_03')
    $(document).find('.fibona3').removeClass('img_03').addClass('img_06')
    $(document).find('.fibona4').removeClass('img_06').addClass('img_05')
    $(document).find('.fibona5').removeClass('img_05').addClass('img_04')
    $(document).find('.fibona6').removeClass('img_04').addClass('img_02')
    $(document).find('.fibona1').removeClass('img_01').addClass('img_01')

})



/*
$(document).on('click', '.layer1 article', function() {
    $(this).toggleClass('full_mode')
    $('.top_img img, .side_img img').toggleClass('scrollable')
    $('.layer1').toggleClass('layer1_z_index')
})

$(document).on('click', '.layer2', function()  {
    $('.layer1').toggleClass('layer1').toggleClass('layer6')
    $('.layer2').toggleClass('layer2').toggleClass('layer1')
    $('.layer3').toggleClass('layer3').toggleClass('layer2')
    $('.layer4').toggleClass('layer4').toggleClass('layer3')
    $('.layer5').toggleClass('layer5').toggleClass('layer4')
    $('.layer6').toggleClass('layer6').toggleClass('layer5')
})

*/