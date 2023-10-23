$(document).ready(function(){

    // 휠로일정 스크롤 이동
    var $html =$('html');
    var page = 1;
    var lastPage = $('section').length;
    //console.log(lastPage);

    $html.animate({scrollTop:0},10);

    window.addEventListener('wheel',function(e){
        e.preventDefault();
    },{passive:false});

    $(window).on('wheel',function(e){


    if($html.is(":animated")) return;
    if(e.originalEvent.deltaY >0){
    if(page== lastPage) return;
    page++;
    } else if (e.originalEvent.deltaY < 0){
    if(page==1) return;
    page--;
    }
    var posTop = (page-1)*$(window).height();
    $html.animate({scrollTop:posTop});
    });

    //모달 서식

    const ch=$('#ch');

    $('#c_btn').click(function(){
      $('.modal').hide();
    });

    if($.cookie('popup')=='none'){
      $('.modal').hide();
    }
  
    function closeModal(){
      if(ch.is(':checked')){
        $.cookie('popup','none',{expires:5,path:'/'});
      }
      $('.modal').hide();
    }
  
    $('.modal #c_btn').click(function(){
      closeModal();
    });

    //네비게이션 클릭 시 섹션 이동
    let gnb = $('.gnb li');
    let s_idx=0;


    gnb.click(function(){

      $('.gnb a img').removeClass('block');
      $(this).find('a img').addClass('block');

      let index = $(this).index();
      // console.log(index);
      $('html, body').stop().animate({scrollTop:$('main section').eq(index).offset().top-1},400, 'easeOutCubic');
      return false;

    });

    $(window).scroll(function(i){
      $('main section').each(function(i){
        let scroll = $(window).scrollTop(); 
        s_idx = $(this).index(); 

        console.log(s_idx); //0
  
        // 만약 현재 스크롤 값이 n 번째 콘텐츠의 위에서 떨어진 값보다 크면
        if(scroll>=$('section').eq(s_idx).offset().top-1){
          // $('.gnb a img').removeClass('block');
          //해당하는 n번째 nav a img 태그에 서식을 적용하고 그 외 나머지는 block 서식을 제거한다.
          gnb.eq(s_idx).find('a').find('img').addClass('block').parent().parent().siblings().find('img').removeClass('block');
        }
      });
    });


    // 작업중
    $('.design_photo> ul> li').click(function(){
      swal("작업중!","불편을 드려 죄송합니다","error");
      return false;
    });


    
});