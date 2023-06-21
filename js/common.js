const mobileSize = 900;
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

    $('header button').click(function(){
        $(this).toggleClass('active')
        $('header nav').toggleClass('active');
    })

    // 스크롤 네비게이션
    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();
        const windowHeight = $(this).height()
        $('[data-scroll]').each(function(){
            if($(this).height() > windowHeight) {
                if(scrollTop > ($(this).offset().top - windowHeight / 5)){
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

    // 네비게이션 클릭
    $('nav ul li a').click(function(e){
        e.preventDefault();
    })
    $('nav ul li').click(function(){
        const idx = $(this).index();
        const select = $('[data-scroll]').eq(idx);
        const selectOffsetTop = select.offset().top;
        const selectHeight = select.innerHeight();
        const windowHeight = $(window).height();
        const moveY = selectHeight < windowHeight ? selectOffsetTop - ((windowHeight - selectHeight) / 2) : selectOffsetTop;
        $('html').animate({scrollTop: moveY})
        if($(window).width() < mobileSize){
            $('nav').removeClass('active')
            $('header button').removeClass('active')
        }
    })

    
    
    // 팝업

    // 팝업 열기
    $('[data-popupOpen]').click(function(){
        $('.'+$(this).attr('data-popupOpen')).addClass('active');
    })
    // 팝업 닫기
    $('[data-popupClose]').click(function(){
        $('.'+$(this).attr('data-popupClose')).removeClass('active');
    })
    $('.popupArea').click(function(){
        $(this).removeClass('active');
    })

    var countriesAPI = 'https://restcountries.com/v3.1/all';
    $.ajax({
        url: countriesAPI,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // 국가 이름별로 정렬
            var countries = data.sort((a, b) => a.name.common < b.name.common ? -1 : 1); 
            // 리스트 추가
            countriesList(countries)
        
            // 국가 클릭시 리스트 
            $('.select input[type="text"][readonly]').click(function(e){
                e.stopPropagation();
                $('.countryList').addClass('active');
                $(this).prop('readonly',false);
                countriesList(countries)
            })

            // 팝업 안 클릭시 국가 리스트 제거
            $('.popupArea > div').click(function(e){
                e.stopPropagation();
                if(!$('.countryList').hasClass('active')){return}
                $('.countryList').removeClass('active');
                $('.select input[type="text"]').prop('readonly',true);
                let data = countries.filter((a) => a.name.common === $('.select input[type="text"]').val());
                if(!data.length){
                    $('.select input[type="text"]').val('')
                }
            })
            
            // 국가 검색
            $('.select input[type="text"]').on('input',function(){
                let data;
                if($(this).val()){
                    data = countries.filter((a) => a.name.common.includes($(this).val()))
                } else {
                    data = countries;
                }
                countriesList(data);
            })

        },
        error: function(xhr, status, error) {
            // API 요청이 실패한 경우 에러 처리 로직
            console.log('API 요청 실패:', error);
        }
    });
    
    // 국가 리스트 목록 함수
    function countriesList (list){
        // 초기화
        $('.countryList').empty();

        // 리스트 추가
        list.forEach(function(country , idx) {
            $('.countryList').append(`<div><img src="${country.flags.png}" alt="${country.name.common}">${country.name.common}</div>`)
        });

        // 리스트 클릭시
        $('.countryList > div').click(function(e){
            e.stopPropagation();
            $('.countryList').removeClass('active')
            $('.select input[type="text"]').val($(this).text());
            $('.select input[type="text"]').prop('readonly',true);
        })
    }

    // send 클릭
    $('input[type="submit"]').click(function(e){
        e.preventDefault();
    })

    // 슬라이더
    sliderResize();
    // 리사이징 슬라이더
    $(window).resize(function(){
        sliderResize();
    })

})
function sliderResize(){
    
    if($(window).width() < mobileSize){
        // 모바일
        $('.swiper ol').addClass('swiper-wrapper')
        $('.swiper ol li').addClass('swiper-slide')
        swiper = new Swiper('.swiper', {
            loop: true
        });
    } else{
        // PC
        $('.swiper ol').removeClass()
        $('.swiper ol li').removeClass()
    }
}