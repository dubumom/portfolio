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

    gnb.click(function(){
      let i = $(this).index();
      console.log(i); //2,3,4,5,6
  
      $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-1},400, 'easeOutCubic');
      return false;
    });




    
});