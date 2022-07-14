
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  //モーダル
  $('.js-close-modal1').on('click',function (e) {
    $('body').css('overflow-y', 'auto')
    var target = $(this).data('target')
    $(target).fadeOut(300)
  })

  $('.js-open-modal1').on('click',function (e) {
    $('body').css('overflow-y', 'hidden')
    var target = $(this).data('target')
    $(target).fadeIn(300)
  })

  $('.js-close-modal2').on('click',function (e) {
    $('body').css('overflow-y', 'auto')
    var target = $(this).data('target')
    $(target).fadeOut(300)
  })

  $('.js-open-modal2').on('click',function (e) {
    $('body').css('overflow-y', 'hidden')
    var target = $(this).data('target')
    $(target).fadeIn(300)
  })

  $('.js-close-modal3').on('click',function (e) {
    $('body').css('overflow-y', 'auto')
    var target = $(this).data('target')
    $(target).fadeOut(300)
  })

  $('.js-open-modal3').on('click',function (e) {
    $('body').css('overflow-y', 'hidden')
    var target = $(this).data('target')
    $(target).fadeIn(300)
  })

  //スクロールトップ
  /*
  $(function () {
    var page_top = $('#js-scroll-top')
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        page_top.addClass('is-fadein')
      } else {
        page_top.removeClass('is-fadein')
      }
    })
    page_top.on('click', function () {
      $('body,html').animate(
        {
          scrollTop: 0,
        },
        500
      )
      return false
    })
  })*/

  var topBtn = $('.js-scroll-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

});
