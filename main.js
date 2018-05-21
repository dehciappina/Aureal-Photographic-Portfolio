

$(document).on('click', '.section', function(rotateImages) {

if(!$(this).hasClass('MAIN_IMG')) {
    $('.fibona1').toggleClass('fibona1').toggleClass('fibona6').toggleClass('MAIN_IMG')
    $('.fibona2').toggleClass('fibona2').toggleClass('fibona1').toggleClass('MAIN_IMG')
    $('.fibona3').toggleClass('fibona3').toggleClass('fibona2')
    $('.fibona4').toggleClass('fibona4').toggleClass('fibona3')
    $('.fibona5').toggleClass('fibona5').toggleClass('fibona4')
    $('.fibona6').toggleClass('fibona6').toggleClass('fibona5')
} else {
    $('.MAIN_IMG').toggleClass('full_mode')
    $('.MAIN_IMG img').toggleClass('full_mode_img')
    $(this).find('.full_mode_text').toggleClass('profile_info_show')
}
})

$('.profile').on('mouseenter', function() {
    
    if(!$(this).hasClass('profile_about_clicked')) {
        $('.profile .photo').addClass('photo_hovered').finish().delay(500).queue(function() {
            $('.hidden_profile_info').finish().addClass('profile_info_show').finish().dequeue()
        })

    }
})

$('.profile').on('mouseleave', function() {
    $('.profile .photo').finish().removeClass('photo_hovered')
    $('.hidden_profile_info').finish().removeClass('profile_info_show').delay(500).queue(function() {
        $('.profile').finish().removeClass('profile_hovered').finish().dequeue()
    })
})


//FIBONA ARROW

$(document).find('.fibona2_arrow, .fibona3_arrow').on('click', function() {
    $('.fibona2').trigger('click')
})

$(document).find('.main_img_zoom').on('click', function() {
    $('.MAIN_IMG').trigger('click')
})


$('.about_button').on('click', function() {
    $('.profile').toggleClass('profile_about_clicked')
    $('.hidden_profile_info').toggleClass('hidden_profile_info_about_clicked')
    $('.intro').toggleClass('intro_about_clicked')
    $('.buttons').toggleClass('hidden')
    $('.personal_info').toggleClass('personal_info_about_clicked')
    $('.profile .photo img'). toggleClass('profile_photo_img_about_clicked')
    $('.profile .photo').toggleClass('profile_photo_about_clicked').toggleClass('photo_hovered').delay(300)
    $('.about_info').delay(500).queue(function() {
        $(this).toggleClass('about_info_shows')
    }).dequeue()
})

$('.contact_button').on('click', function() {
    $('.profile').toggleClass('profile_about_clicked')
    $('.hidden_profile_info').toggleClass('hidden_profile_info_about_clicked')
    $('.intro').toggleClass('intro_about_clicked')
    $('.buttons').toggleClass('hidden')
    $('.personal_info').toggleClass('personal_info_about_clicked')
    $('.profile .photo img'). toggleClass('profile_photo_img_about_clicked')
    $('.profile .photo').toggleClass('profile_photo_about_clicked').toggleClass('photo_hovered')
    $('.contact_info').delay(500).queue(function() {
        $(this).toggleClass('contact_info_shows')
    }).dequeue()
})


$('.close_icon').on('click', function() {
    if($('.about_info').hasClass('about_info_shows')) {
        $('.about_button').trigger('click')
    }

    if ($('.contact_info').hasClass('contact_info_shows')) {
        $('.contact_button').trigger('click')
    }
   
})
