
  $(document).ready(function(){

    // 인트로
      $('.title span').fadeOut(100);
      $('.title span').delay(100).fadeIn();
      $('.title span').delay(200).fadeOut();
      $('.title span').delay(300).fadeIn();
      $('.title span').delay(400).fadeOut();
      $('.title span').delay(500).fadeIn();
      $('.title span').delay(4500).fadeOut();    

    $('svg, .title h1, #timer').css('opacity','0').delay(3500).animate({'opacity':'1'},300);

    // 5,4,3,2,1 카운트 다운 - 자바스크립트
    timer=document.getElementById("timer");
    startSecond="8";
    setInterval("timer.innerHTML=startSecond;startSecond--;",1000);

    const outline = document.querySelector(".moving-outline circle");
    const outlineLength = outline.getTotalLength();
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = 0;

    let duration = 60;
    let elapsed = 0;
    animate(elapsed);
    function animate(offset) {
      setTimeout(() => {
        elapsed++;
        if (elapsed > duration * 2) elapsed = 0;
        animate((elapsed / duration) * outlineLength);
      }, 10);
      outline.style.strokeDashoffset = offset;
    }

    // 오프닝 후 메인 서식 올라오기
    $('main').hide();

    setTimeout(show01, 8500);
    function show01() {
      $('main').show();
    }

    $('.aside').hide();
    setTimeout(show02, 8900);
    function show02(){
      $('.aside').show();
    }

    $('.modal').hide();
    setTimeout(show03, 9100);
    function show03(){
      $('.modal').show();
    }

    $('main section:first-child').delay(8600).animate({bottom:0},1000);

    // 프로필 - 스킬 그래프 효과

    var piesiteFired = 0;
    var $win = $(window),
    $win_height = $(window).height(),
    windowPercentage = $(window).height() * 0.9;

    $win.on("scroll", scrollReveal);
    function scrollReveal(){
      var scrolled = $win.scrollTop();

      $('.trigger').each(function(){
        var $this = $(this),
        offsetTop = $this.offset().top;
        if(
          scrolled + windowPercentage > offsetTop ||
          $win_height > offsetTop
        ){
          $(this).each(function(key, bar){
            var percentage = $(this).data("percentage");
            $(this).css("height",percentage + "%");

            $(this).prop("Counter", 0).animate(
              {
                Counter: $(this).data("percentage")
              },
              {
                duration: 2000,
                easing: "swing",
                step: function(now){
                  $(this).text(Math.ceil(now));
                }
              }
            );
          });

        }else{
          $(this).each(function(key,bar){
            $(this).css("height",0);
          });
        }
      });
    }
    scrollReveal();

    //프로필 - 사진 효과

    setTimeout(rotate, 8900);

    function rotate(){   
      
      $('.profile_photo img').css('transform','rotate(35deg');
      $('.profile_photo img:first-child').animate({top:'375px'});
      $('.profile_photo img:nth-child(2)').animate({top:'325px'});
      $('.profile_photo img:nth-child(3)').animate({top:'275px'});
      $('.profile_photo img:nth-child(4)').animate({top:'225px'});
      $('.profile_photo img:last-child').animate({top:'175px'});
    }
    

  //퍼플리싱 - 무한슬라이드

    let mleft = -230;

    function moveLeft(){
      $('.pub_photo > .film > ul').animate({'margin-left':mleft},100); /*-230 씩 이동하기*/
      mleft-=2;

      // console.log(mleft);

      if(mleft==-232){
        $('.pub_photo > .film01 > ul > li:first-child').insertAfter('.pub_photo > .film01 > ul li:last-child');
      }else if(mleft==-460){
        mleft=-230;
      }
    };

    let Timer01 = setInterval(moveLeft, 20);

    //마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
    $('.pub_photo > .film  ul').hover(function(){
      clearInterval(Timer01);
    },function(){
      clearInterval(Timer01);
      Timer01 = setInterval(moveLeft,20);
    });

    // 퍼블리싱 - 제목 클릭 시 이미지 변경
    function changeImg(){
      $('.reponsive').attr("src", "./images/responsive.png");
      $('.adaptive').attr("src","./images/adaptive_hover.png");
      $('.one').attr("src","./images/onepage_hover.png");
    }

    $('.reponsive').click(function(){

      //이미지 변경
      changeImg();
      $('.adaptive').attr("src","./images/adaptive.png");
      $('.one').attr("src","./images/onepage.png");

      $(this).css('margin-bottom','50px');
      $('.adaptive').css('margin-bottom','0px');
      $('.one').css('margin-bottom','0px');

      //내용 변경
      $('.pub_photo').addClass('hidden')
      $('.pub_box01').removeClass('hidden');
    });

    $('.adaptive').click(function(){

      //이미지 변경
      changeImg();
      $('.reponsive').attr("src", "./images/responsive.png");
      $('.one').attr("src","./images/onepage.png");

      $(this).css('margin-bottom','50px');
      $('.reponsive').css('margin-bottom','0px');
      $('.one').css('margin-bottom','0px');

      //내용변경
      $('.pub_photo').addClass('hidden')
      $('.pub_box02').removeClass('hidden');
    });

    $('.one').click(function(){
      //이미지 변경
      changeImg();
      $('.reponsive').attr("src", "./images/responsive.png");
      $('.adaptive').attr("src","./images/adaptive.png");

      $(this).css('margin-bottom','50px');
      $('.reponsive').css('margin-bottom','0px');
      $('.adaptive').css('margin-bottom','0px');

      //내용변경
      $('.pub_photo').addClass('hidden')
      $('.pub_box03').removeClass('hidden');
      // $('.pub_photo').addClass('hidden');     
    });

      //퍼플리싱 - 이미지 마스크
        //const txt = $('.camera> div> span');

        //function moveTxt(){
          //txt.animate({'right':'1920px'},20000,function(){
            //txt.css('right','-1920px');
          //});
        //}
        //moveTxt();
        //setInterval(moveTxt,20000);

      //디자인 - 무한슬라이드
          // 위로
      let dTop = -230;

      function moveTop(){

        $('.design_film> .des_film01').css('margin-top',dTop);
        dTop-=2; 
  
        if(dTop==-232){
        $('.design_film> .des_film01> li:first-child').insertAfter('.design_film> .des_film01 li:last-child');
        }else if(dTop==-460){
          dTop=-230;
        }
      };
  
      let Timer02 = setInterval(moveTop, 60);
  
      //마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
      $('.design_film> .des_film01').hover(function(){
        clearInterval(Timer02);
      },function(){
        clearInterval(Timer02);
        Timer02 = setInterval(moveTop,60);
      });

      //아래로 

      let dBottom = -230;

      function moveBottom(){

        $('.design_film> .des_film02').css('margin-bottom',dBottom);
        dBottom -= 2; 
        console.log(dBottom);
  
        if(dBottom == -232){
        $('.design_film> .des_film02> li:last-child').insertBefore('.design_film> .des_film02 li:first-child');
        }else if(dBottom == -460){
          dBottom = -230;
        }
      };

      let Timer03 = setInterval(moveBottom, 60);
  
      //마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
      $('.design_film> .des_film02').hover(function(){
        clearInterval(Timer03);
      },function(){
        clearInterval(Timer03);
        Timer03 = setInterval(moveBottom,60);
      });

      $('.lp img:last-child').mouseenter(function(){
        $('.lp img').css('top','15%');
      });
      $('.lp img:last-child').mouseleave(function(){
        $('.lp img').css('top','30%');
      });



  
    }); 