$(document).ready(function(){

// 그래픽 팝업창

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  // 윈도우 스크롤
  var web=$('#Web');
  var graphic=$('#Graphic');
  var profile=$('#Profile');
  var contact=$('#Contact');

  $(window).scroll(function(){
    var winTop=$(this).scrollTop()+100;
    if(winTop > web.offset().top && winTop < web.offset().top+web.height()) {
      $('nav ul li a').removeClass('active');
      $('a[href="#Web"]').addClass('active');
    }
    if(winTop > graphic.offset().top && winTop <graphic.offset().top+web.height()) {
      $('nav ul li a').removeClass('active');
      $('a[href="#Graphic"]').addClass('active');
    }
    if(winTop > profile.offset().top && winTop < profile.offset().top+web.height()) {
      $('nav ul li a').removeClass('active');
      $('a[href="#Profile"]').addClass('active');
    }
    if(winTop > contact.offset().top && winTop < contact.offset().top+web.height()) {
      $('nav ul li a').removeClass('active');
      $('a[href="#Contact"]').addClass('active');
    }
  });
 
  // 메뉴(GNB)를 클릭하면 해당 section으로 부드럽게 이동
  $('nav ul li a').click(function(e){
    e.preventDefault();
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
    var $anchor=$(this);
    $('html,body').stop().animate({
      scrollTop:$($anchor.attr('href')).offset().top
    },1000);
  });
  // popup
  var img_num=0;
  var img_total=$('.swiper-slide').length;
  $('.popup').hide();
  $('.swiper-slide').click(function(e){
    e.preventDefault();
    // 클릭한 이미지의 인덱스 번호를 img_num에 저장
    // 인덱스번호는 0부터 시작하고, 이미지의 번호는 1부터 시작하므로 공식에 1을 더해주어야 한다.
    img_num=$(this).index()+1;
    // 클릭한 이미지 a태그의 href속성을 img_attr변수에 저장
    var img_attr=$(this).find('a').attr('href');
    var img_addr='<img src="'+img_attr+'">'
    // 클릭한 swiper-slide의 data 속성값을 txt_addr 변수에 저장
    var txt_addr=$(this).attr('data');
    console.log(txt_addr);
    // txt_addr의 값을 쉼표를 기준으로 잘라서 배열로 만듦, 배열의 인덱스는 5개임(01,2,3,4)
    // str[0]=1
    // str[1]=북커버(BOOK COVER)
    // str[2]=Company of One
    // str[3]=포토샵 & 일러스트레이터
    // str[4]=깔끔하고 귀여운 느낌의 디자인
    var str=txt_addr.split(',',5);
    var txt_str='<div class="slide_des"><div class="slide_title"><i>'+str[0]+'</i>'+str[1]+'</div><div class="slide_sub_title">제목</div><div class="slide_content">'+str[2]+'</div><div class="slide_sub_title">스킬</div><div class="slide_content">'+str[3]+'</div><div class="slide_sub_title">컨셉</div><div class="slide_content">'+str[4]+'</div></div>';
    
    $('.graphic').empty();
    $('.txt').empty();
    $('.graphic').append(img_addr);
    $('.txt').append(txt_str);
    $('.popup').show();
    $('html,body').css('overflow-y','hidden');
  });
  // 팝업창의 닫기 버튼
$('.popup .close').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.popup').hide();
  $('html,body').css('overflow-y','visible');
});
  //팝업창의 오른쪽버튼
  $('.popup .nextBtn').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    img_num++; 
    if(img_num>img_total){
        img_num=1;
    }       
    var img_addr='<img src="img/big'+img_num+'.png">'
    var txt_addr=$('.swiper-slide').eq(img_num-1).attr('data');
    var str=txt_addr.split(',',5); 
    var txt_str='<div class="slide_des"><div class="slide_title"><i>'+str[0]+'</i>'+str[1]+'</div><div class="slide_sub_title">제목</div><div class="slide_content">'+str[2]+'</div><div class="slide_sub_title">스킬</div><div class="slide_content">'+str[3]+'</div><div class="slide_sub_title">컨셉</div><div class="slide_content">'+str[4]+'</div></div>';

    $('.graphic').empty();
    $('.txt').empty();
    $('.graphic').append(img_addr);
    $('.txt').append(txt_str);
    $('.popup').show();
    $('html,body').css('overflow-y','hidden');     
});
//팝업창의 왼쪽 버튼
$('.popup .prevBtn').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    img_num--;
    if(img_num<=0){
        img_num=img_total;
    }   
    var img_addr='<img src="img/big'+img_num+'.png">'
    var txt_addr=$('.swiper-slide').eq(img_num-1).attr('data');
    var str=txt_addr.split(',',5); 
    var txt_str='<div class="slide_des"><div class="slide_title"><i>'+str[0]+'</i>'+str[1]+'</div><div class="slide_sub_title">제목</div><div class="slide_content">'+str[2]+'</div><div class="slide_sub_title">스킬</div><div class="slide_content">'+str[3]+'</div><div class="slide_sub_title">컨셉</div><div class="slide_content">'+str[4]+'</div></div>';

    $('.graphic').empty();
    $('.txt').empty();
    $('.graphic').append(img_addr);
    $('.txt').append(txt_str);
    $('.popup').show();
    $('html,body').css('overflow-y','hidden');
});

  // 팝업창의 왼쪽
  $('.popup .prevBtn').click(function(e){
    e.preventDefault();
    img_num--;
    if(img_num<=0){
      img_num=img_total;
    }
    var img_addr='<img src="img/big'+img_num+'.png">'
    $('.graphic').empty();
    $('.graphic').append(img_addr);
    $('.popup').show();
  });
  // 프로필 스킬
  var tooltiptext;
  $(".tooltip").mouseenter(function(){
    // Get elements:
    var thisStat = $(this);
    var thisTooltip = thisStat.find(".tooltiptext");
    var thisTooltipInner = thisTooltip.find("span");
    // Get data attributes:
    var dataPercentage = thisStat.attr("data-stat");
    var dataSoftware = thisStat.attr("data-soft");
    var dataColor = thisStat.attr("data-color");
    // Rewrite tooltip:
    thisTooltipInner.text(dataSoftware + " " + dataPercentage + "%");
    thisTooltip.css({"background":dataColor, "color":dataColor});
  });
  
  
  // ===================
  // ===================
  // Stat Trigger:
  // ===================
  // ===================
  //Get Stroke Path length:
  var path = document.querySelector('.stat-path');
  var dashLength = path.getTotalLength();
  //Set Stat Path: Initial styles:
  $('.stat-path').css({
    "stroke-dasharray": dashLength,
    "stroke-dashoffset": dashLength
  });
  
  //Stats Handler:
  $(document).mouseenter(function(){
    triggerStats();
  });
  
  function triggerStats(){
    //Add transition:
    $(".stat-path").css({"transition": "1.2s cubic-bezier(0.35, 2, 0.35, 0.3)"});
    //Loop items:
    $(".stat-item").each(function(){
      //This item select:
      var thisStat = $(this);
      var thisPath = $(this).find("svg .stat-path");
      //Get this Stat Item data percentage attribute:
      var dataPercentage = thisStat.attr("data-stat");
      //Convert "dataPercentage" to absolute length:
      var statLength = (dataPercentage/100) * dashLength;
      //Set Stat Path (new styles):
      thisPath.css({
        "stroke-dasharray": dashLength,
        "stroke-dashoffset": (dashLength - statLength)
      });
    });
  };
   // 모바일버전
   $('.menu_icon').click(function(){
    $('nav').animate({
      right:0
    });
  });
  $('.close_btn').click(function(){
    $('nav').animate({
      right:'-100%'
    });
  });
});
