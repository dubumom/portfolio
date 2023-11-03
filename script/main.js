
  $(document).ready(function(){

    // 인트로
      $('.title span').fadeOut(100);
      $('.title span').delay(100).fadeIn();
      $('.title span').delay(200).fadeOut();
      $('.title span').delay(300).fadeIn();
      $('.title span').delay(400).fadeOut();

      $('#Ebene_1, .open_img, .open_video').stop().hide();

      $('.open_img').delay(2500).fadeIn();
      $('.open_video').delay(2500).fadeIn();
      $('.open_video').delay(3000).fadeOut();

      $('#Ebene_1').delay(6000).fadeIn();

    // 오프닝 후 메인 서식 올라오기
    $('main').hide();

    setTimeout(show01, 8000);
    function show01() {
      $('main').show();
    }

    $('.aside').hide();
    setTimeout(show02, 8000);
    function show02(){
      $('.aside').fadeIn();
    }

    $('.modal').hide();
    setTimeout(show03, 9000);
    function show03(){
      $('.modal').fadeIn();
    }

    $('main section:first-child').delay(8000).animate({bottom:0},1000);

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
            $(this).css("height",percentage + "px");

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
      $('.profile_photo img:first-child').stop().animate({top:'375px'});
      $('.profile_photo img:nth-child(2)').stop().animate({top:'325px'});
      $('.profile_photo img:nth-child(3)').stop().animate({top:'275px'});
      $('.profile_photo img:nth-child(4)').stop().animate({top:'225px'});
      $('.profile_photo img:last-child').stop().animate({top:'175px'});
    }
    

    // 프로필 - 마우스 호버 시
    $('.profile_photo').mouseenter(function(){
      $('.profile_photo img').css('transform','rotate(50deg');
      $('.profile_photo img:first-child').stop().animate({top:'530px'});
      $('.profile_photo img:nth-child(2)').stop().animate({top:'350px'});
      $('.profile_photo img:nth-child(2)').css('transform','rotate(0deg');
      $('.profile_photo img:nth-child(3)').stop().animate({top:'480px'});
      $('.profile_photo img:nth-child(4)').stop().animate({top:'150px'});
      $('.profile_photo img:last-child').stop().animate({top:'100px'});
    });

    $('.profile_photo').mouseleave(function(){
      $('.profile_photo img').css('transform','rotate(35deg');
      $('.profile_photo img:first-child').stop().animate({top:'375px'});
      $('.profile_photo img:nth-child(2)').stop().animate({top:'325px'});
      $('.profile_photo img:nth-child(3)').stop().animate({top:'275px'});
      $('.profile_photo img:nth-child(4)').stop().animate({top:'225px'});
      $('.profile_photo img:last-child').stop().animate({top:'175px'});
    });



  //퍼플리싱 - 무한슬라이드

    let mleft = -202;

    // 필름01
    function moveLeft01(){
      $('.film01 > ul').css('margin-left',mleft); /*-202 씩 이동하기*/
      mleft -= 1;

      //console.log(mleft);

      if(mleft == -203){
        $('.film01> ul> li:first-child').insertAfter('.film01> ul> li:last-child');
      }else if (mleft == -404){
        mleft = -202;
      }

    };

    let Timer01 = setInterval(moveLeft01,100);

    //마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
    $('.pub_box01 .film01').hover(function(){
      clearInterval(Timer01);
    },function(){
      clearInterval(Timer01);
      Timer01 = setInterval(moveLeft01,100);
    });

    // 필름02
    function moveLeft02(){
      $('.film02 > ul').css('margin-left',mleft);
      mleft -= 1;


      if(mleft == -203){
        $('.film02> ul> li:first-child').insertAfter('.film02> ul> li:last-child');
      }else if (mleft == -404){
        mleft = -202;
      }
    };

    let Timer04 = setInterval(moveLeft02,100);

    $('.pub_box01 .film02').hover(function(){
      clearInterval(Timer04);
    },function(){
      clearInterval(Timer04);
      Timer04 = setInterval(moveLeft02,100);
    });

    // 필름03
    function moveLeft03(){
      $('.film03 > ul').css('margin-left',mleft);
      mleft -= 1;


      if(mleft == -203){
        $('.film03> ul> li:first-child').insertAfter('.film03> ul> li:last-child');
      }else if (mleft == -404){
        mleft = -202;
      }
    };

    let Timer05 = setInterval(moveLeft03,100);

    $('.pub_box02 .film03').hover(function(){
      clearInterval(Timer05);
    },function(){
      clearInterval(Timer05);
      Timer05 = setInterval(moveLeft03,100);
    });

    // 필름04
    function moveLeft04(){
      $('.film04 > ul').css('margin-left',mleft);
      mleft -= 1;


      if(mleft == -203){
        $('.film04> ul> li:first-child').insertAfter('.film04> ul> li:last-child');
      }else if (mleft == -404){
        mleft = -202;
      }
    };

    let Timer06 = setInterval(moveLeft04,100);

    $('.pub_box02 .film04').hover(function(){
      clearInterval(Timer06);
    },function(){
      clearInterval(Timer06);
      Timer06 = setInterval(moveLeft04,100);
    });

    // 필름05
    function moveLeft05(){
      $('.film05 > ul').css('margin-left',mleft);
      mleft -= 1;


      if(mleft == -203){
        $('.film05> ul> li:first-child').insertAfter('.film05> ul> li:last-child');
      }else if (mleft == -404){
        mleft = -202;
      }
    };

    let Timer07 = setInterval(moveLeft05,100);

    $('.pub_box03 .film05').hover(function(){
      clearInterval(Timer07);
    },function(){
      clearInterval(Timer07);
      Timer07 = setInterval(moveLeft05,100);
    });

    // 필름06
    function moveLeft06(){
      $('.film06 > ul').css('margin-left',mleft);
      mleft -= 1;


      if(mleft == -203){
        $('.film06> ul> li:first-child').insertAfter('.film06> ul> li:last-child');
      }else if (mleft == -404){
        mleft = -202;
      }
    };

    let Timer08 = setInterval(moveLeft06,100);

    $('.pub_box03 .film06').hover(function(){
      clearInterval(Timer08);
    },function(){
      clearInterval(Timer08);
      Timer08 = setInterval(moveLeft06,100);
    });





    // 퍼블리싱 - 제목 클릭 시 이미지 변경
    function changeImg(){
      $('.responsive').attr("src", "./images/responsive.png");
      $('.adaptive').attr("src","./images/adaptive_hover.png");
      $('.one').attr("src","./images/onepage_hover.png");
    }

        //반응형 클릭 시
    $('.responsive').click(function(){

      //이미지 변경
      changeImg();
      $('.responsive').attr("src","./images/responsive_hover.png");
      $('.adaptive').attr("src","./images/adaptive.png");
      $('.one').attr("src","./images/onepage.png");

      $(this).css('margin-bottom','50px');
      $('.adaptive').css('margin-bottom','0px');
      $('.one').css('margin-bottom','0px');

      //내용 변경
      $('.pub_photo').addClass('hidden')
      $('.pub_box01').removeClass('hidden');
    });

        //적응형 클릭 시
    $('.adaptive').click(function(){

      //이미지 변경
      changeImg();
      $('.responsive').attr("src", "./images/responsive.png");
      $('.one').attr("src","./images/onepage.png");

      $(this).css('margin-bottom','50px');
      $('.responsive').css('margin-bottom','0px');
      $('.one').css('margin-bottom','0px');

      //내용변경
      $('.pub_photo').addClass('hidden')
      $('.pub_box02').removeClass('hidden');
    });

        //원페이지 클릭 시
    $('.one').click(function(){
      //이미지 변경
      changeImg();
      $('.responsive').attr("src", "./images/responsive.png");
      $('.adaptive').attr("src","./images/adaptive.png");

      $(this).css('margin-bottom','50px');
      $('.responsive').css('margin-bottom','0px');
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
        // console.log(dBottom);
  
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

      // 스크롤 이벤트

      $(window).scroll(function(){
        let sPos = Math.ceil(($(this).scrollTop()/$(this).height())*100);
        // console.log(sPos);

        if(sPos>90 && sPos<=100) {
          // alert('확인');
          $('.line02').stop().animate({'width':'485px'},1000);
        } else {
          $('.line02').stop().animate({'width':'0px'},1000);
        }


      if(sPos==200) {
        // alert('확인');
        $('.sportright').stop().animate({'width':'300px'},2000);
      } else {
        $('.sportright').stop().animate({'width':'0px'},2000);
      }
    });


    //  디자인 클릭 이벤트

      //시장하시죠
    $('.ayh').click(function(){
      $('.explan01, .col, .dp, .design_caption> ul> li').hide();
      $('.ex01, .col01').show();
      return false;
    });

      //뮤지엄고
    $('.mu').click(function(){
      $('.explan01, .col, .dp, .design_caption> ul> li').hide();
      $('.ex02, .col02').show().css('z-index','10');
      return false;
    });

    //판다월드
    $('.pan').click(function(){
      $('.explan01, .col, .dp, .design_caption> ul> li').hide();
      $('.ex03, .col03').show().css('z-index','10');
      return false;
    });

    //오뚜기
    $('.oh').click(function(){
      $('.explan01, .col, .dp, .design_caption> ul> li').hide();
      $('.ex04, .col04').show().css('z-index','10');
      return false;
    });



















  }); 