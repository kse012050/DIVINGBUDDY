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
})