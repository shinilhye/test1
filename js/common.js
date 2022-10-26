$(document).ready(function () { // 문서준비이벤트


    //상단팝업
    $('.popup_close').click(function () {
        $('#popup').slideUp();

    });



    //sitemap
    $('.all_wrap').hide();
    $('.all_menu').click(function () {
        $('.all_wrap').fadeIn();
    });

    $('.all_close').click(function () {
        $('.all_wrap').fadeOut();
    });




    //gnb 

    $('.depth2, .depth2_bg').hide();

    $('.gnb > li').mouseenter(function () {


        $(this).find('.depth2').stop().fadeIn();
        $('.depth2_bg').stop().fadeIn();

    });


    $('.gnb > li').mouseleave(function () {


        $(this).find('.depth2').stop().fadeOut();
        $('.depth2_bg').stop().fadeOut();

    });





    //mdepth2

    $('.mdepth2').hide();
    $('.mgnb > li').click(function () {

        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings.children('.mdepth2').stop().slideUp();

    });





    //.mgnb


    $('.ham').click(function () {
        $('.mgnb_wrap').animate({
            left: '0'
        },1000); /* 1초 동안 */
    });



    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').animate({
            left: '100%'
        });
    });




    //language 영역
    $('.language ul').hide();


    $('.language').click(function () {

        $('.language ul').stop().slideToggle(); //슬라이드 업 다운이 결합된 형태 slideToggle
        $('.down').toggleClass('active') //language 클릭했을때 다운이라는 클래스에 액티브라는 클래스를 추가시켜라 /제거시켜라 - toggle(add/remove)

    });










    //메인배너 슬라이드



    const mb = new Swiper('.mb', {
        // 옵션

        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },


        // 방향 버튼 지정
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        // 페이저 버튼 지정
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',  // 버튼 종류 설정 'bullets' -동그라미 | 'fraction' - 숫자| 'progressbar'- 바
            clickable: true,  // 버튼 클릭 여부
        },


        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 1초 슬라이드가 부드럽게 넘어감 

    });




    // 메인슬라이드 재생 정지  -관공서 페이지에 필수로 들어감

    $('.mb_play').hide();

    $('.mb_pause').on('click', function () {
        mb.autoplay.stop();
        $('.mb_pause').hide();
        $('.mb_play').show();
    });

    $('.mb_play').on('click', function () {
        mb.autoplay.start();
        $('.mb_pause').show();
        $('.mb_play').hide();
    });







    //제품슬라이드 


    const product_list = new Swiper('.product_list', {
        // 옵션



        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },


        //스크롤바 여부 
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false, // hide안하겠다 - 스크롤바 보이게 하겠다 
        },



        spaceBetween: 40,  // 슬라이드 사이 여백 
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '2', // 한 슬라이드에 보여줄 갯수


        // 반응형 슬라이드
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 6,
                spaceBetween: 60,
            },

        },



        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 1초 슬라이드가 부드럽게 넘어감 












    });






    

    // .brand_list 영역

    // .brand_list li 중 첫번째 요소에는 active 클래스를 먼저 추가

    // .brand_list li에 클릭했을 때
    // 클릭한 요소에 active라는 클래스를 추가해라
    /* 추가할 클래스 명앞에 .붙히면안됨 - classname 만쓰면됨 */

    // 클릭한 요소의 형제요소들에는 active라는 클래스를 제거 
    /* 붙혀서 한줄로 표현가능 중복되는 this를 빼고 뒤에다가 붙히면 됨  */
    //$(this).addClass('active');
    //$(this).siblings().removeClass('active'); 를 한줄로 줄인것 



    $('.brand_list li:first-child').addClass('active');


    $('.brand_list li').click(function () {

        $(this).addClass('active').siblings().removeClass('active'); //형제요소- siblings 

    }); //탭메뉴





    //.museum_list영역


    //.museum_list li 중 첫번째 요소에 active 클래스 추가 
    //.museum_list li에 마우스 올렸을때 
    // 마우스 올린요소에 active 클래스 추가

    // 마우스 올린 요소의 형제요소에 active 클래스 제거 



    $('.museum_list li:first-child').addClass('active');
    $('.museum_list li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active')

    });// 아코디언 배너 





//탑버튼

  $('.gotop').hide();

  $(window).scroll(function(){

    /* 1000px 이하로 내려가면 top버튼이 보임 안내려가면 안보임  */
if ($(this).scrollTop() > 1000) { 
    $('.gotop').fadeIn();
} else {
    $('.gotop').fadeOut();
}


  });



  $('.gotop').click(function(){
     $('html,body').animate({
      scrollTop:'0'


     },1500); /* 1.5초/ 단어도 됨- slow */



});





});  // 문서준비이벤트 종료