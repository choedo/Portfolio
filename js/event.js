$(document).ready(function() {
    var main = $('#main_in');

    main.css({paddingTop: '50px', opacity: 0}).animate({paddingTop: 0, opacity: 1}, 1000);

    var menu = $('ul.mn > li');
    var contents = $('#wrap section');

    // 새로고침했을 때를 대비
    var st = $(window).scrollTop();
    if(st > 0) {
        $('#header').css({backgroundColor: '#FFFFFF'});
    }else {
        $('#header').css({backgroundColor: 'transparent'});
    }

    // 메뉴 클릭 이벤트
    menu.click(function() {
        var tg = $(this);
        var i = tg.index();

        var section = contents.eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({scrollTop: tt});
    });

    $(window).scroll(function() {
        var sct = $(window).scrollTop();

        if(sct > 0) {
            $('#header').css({backgroundColor: 'rgba(255, 255, 255, 0.8)'});
        }else {
            $('#header').css({backgroundColor: 'transparent'});
        }
                
        contents.each(function() {
            var tg = $(this);
            var i = tg.index() - 1;

            if(tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        });
    });
});

// 스킬 그래프
(function($) {
    "use strict";
    $(function() {
        function animated_contens() {
            $('.box_in').each(function(i) {
                var $this = $(this);
                var skills = $this.data('width');
    
                $this.css({'width' : skills + '%'});
            });
        }

        $(window).scroll(function() {
            var scrollTop = $(document).scrollTop();

            if(scrollTop >= 660) {
                if(jQuery().appear) {
                    $('.box').appear().on('appear', function() {
                        animated_contens();
                    });
                }else {
                    animated_contens();
                }
            }
        });
    });
    
}(jQuery));