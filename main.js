
$( document ).ready(function() {

urlList = [

    'https://images.unsplash.com/photo-1505325681473-5e712b2eadca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42268883c25739c07af3d28d8f2030de&auto=format&fit=crop&w=1934&q=80',

    'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5833de7a1cd089654a83634831a2cd40&auto=format&fit=crop&w=2013&q=80',

    'https://images.unsplash.com/photo-1470688090067-6d429c0b2600?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e341064a06ee77cd4ea4ba29971271f&auto=format&fit=crop&w=1053&q=80',

    'https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af394daae4bdbc4a95dc2204984b790d&auto=format&fit=crop&w=1050&q=80',

    'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-0.3.5&s=69889c3ac2e7fd3cb0519cc250ad3b79&auto=format&fit=crop&w=1951&q=80',

    'https://images.unsplash.com/photo-1522968612903-47b4f32c995c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6e116cd16fd3adc9a775b999f590417&auto=format&fit=crop&w=1900&q=80',

    'https://images.unsplash.com/photo-1525514141732-08da15eef5ef?ixlib=rb-0.3.5&s=2e0216f8f823c345e48e75865164c6ef&auto=format&fit=crop&w=2134&q=80',

    'https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0038573a81b1169576b6674a3ce202&auto=format&fit=crop&w=776&q=80',


    'https://images.unsplash.com/photo-1519827737530-b255e4d1d0af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adbba1760be6ef305d1532a3c626f9c1&auto=format&fit=crop&w=1852&q=80',
    
    'https://images.unsplash.com/photo-1506385033657-f2a330f9f9c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e17c283cb5f7efed4b2f6bc49d88d4b5&auto=format&fit=crop&w=1951&q=80',

    'https://images.unsplash.com/photo-1525300198725-6f6bd3ce295c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f0b78f0f6210cf7b9a9a99395686bf5&auto=format&fit=crop&w=1866&q=80',

    'https://images.unsplash.com/photo-1525377411535-0cacd7ffe6fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fad61054be723285bf879a0fbf1c6350&auto=format&fit=crop&w=1868&q=80',

    'https://images.unsplash.com/photo-1512925971204-7b6457b669d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf261002886950caaf03a67d3f1ba542&auto=format&fit=crop&w=1868&q=80',

    'https://images.unsplash.com/photo-1499792914147-5e4c9a4a9684?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=161799cf6c9503ea10fbdb38afd88dca&auto=format&fit=crop&w=1922&q=80',

    'https://images.unsplash.com/photo-1516042536124-b1593f31505d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3d161e348d105e3072c5b5d14c67561&auto=format&fit=crop&w=1950&q=80',

    'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a1e18bbc6a4e23019c69e60eae0d0d2&auto=format&fit=crop&w=1891&q=80'
]

var urlListUpdate = 0

function setImgs() {

    $(document).find('.fibona1 img').addClass('hide').delay(400).queue(function() {
        $(this).attr('src', urlList[0 + urlListUpdate]).removeClass('hide').dequeue()
    })

    var delayValue = 600
    
    $(document).find('.fibona2 img').addClass('fibona2_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona2_out').attr('src', urlList[1 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona3 img').addClass('fibona3_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona3_out').attr('src', urlList[2 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona4 img').addClass('fibona4_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona4_out').attr('src', urlList[3 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona5 img').addClass('fibona5_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona5_out').attr('src', urlList[4 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona6 img').addClass('fibona6_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona6_out').attr('src', urlList[5 + urlListUpdate]).dequeue()
    })
    verifyBackButton()

}

indexLimit = urlList.length


$(document).on('click', '.section', function() {

    if(!$(this).hasClass('MAIN_IMG')) {
        if(urlListUpdate < indexLimit - 2) {
            urlListUpdate++
            setImgs()
            console.log('fsdanodasnkadskp')
        }
    } else {
        $('.MAIN_IMG').toggleClass('full_mode')
        $('.MAIN_IMG img').toggleClass('full_mode_img')
        $(this).find('.full_mode_text').toggleClass('profile_info_show')
    }
})

function verifyBackButton() {

    if(urlListUpdate < 1) {
        $('.main_img_back').hide()
    } else {
        $('.main_img_back').show()
    }
}

verifyBackButton()


$(document).on('click', '.main_img_back', function() {

    if(urlListUpdate > 0) {
        urlListUpdate--
        setImgs()
    }
})

/* 
$(document).on('click', '.section', function(rotateImages) {

if(!$(this).hasClass('MAIN_IMG')) {
    $('.fibona1').toggleClass('MAIN_IMG').toggle()
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
*/
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

$(document).find('.fibona2_arrow, .fibona3_arrow, .fibona4_arrow').on('click', function() {
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







})