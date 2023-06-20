$(document).ready(function(){
    // video 재생
    $('.videoArea button').click(function(){
        $(this).removeClass('active');
        $('.videoArea video')[0].play()
        $('.videoArea video').prop('controls', true)
    })
    
    // video 정지
    $('.videoArea video').click(function(){
        if($(this).attr('controls')){
            $(this)[0].pause()
            $(this).prop('controls', false)
            $('.videoArea button').addClass('active');
        }
    })

    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();
        const windowHeight = $(this).height()
        $('[data-scroll]').each(function(){
            if($(this).height() > windowHeight) {
                if(scrollTop > ($(this).offset().top - windowHeight / 3)){
                    $('nav ul li').removeClass('active')
                    $('nav ul li').eq($(this).index() - 1).addClass('active')
                }
            } else {
                if(scrollTop > ($(this).offset().top - ((windowHeight - $(this).height()) / 2))){
                    $('nav ul li').removeClass('active')
                    $('nav ul li').eq($(this).index() - 1).addClass('active')
                }
            }
        })
    })
})