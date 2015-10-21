$(window).load(function() {

    // scroller up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });




    /*
     start menu
     самописная фигня :)
     дополнительных плагинов не нужно
     */
    if ($('.menu__slider').length) {

        $('.menu__slider-item').each( function () {
            if ( !$(this).hasClass("active") ) $(this).hide();
        });

        function chMenu (m1, m2, nb1, nb2) {
            if ( m2.hasClass("active") ) return false;

            nb1.addClass("disabled");
            nb2.removeClass("disabled");

            m2.css({ "position": "absolute", "top": "0", "opacity": "0", "z-index": "10" }).show();
            m2.animate({opacity: 1}, 500, function() {
                m2.css({ "position": "relative", "top": "auto", "z-index": "auto" }).addClass("active");
                m1.hide().removeClass("active");
            });
        }

        $('a.menu__next').click( function() {
            chMenu( $('#menu-p1'), $('#menu-p2'), $('a.menu__next'), $('a.menu__prev') );
            return false;
        });
        $('a.menu__prev').click( function() {
            chMenu( $('#menu-p2'), $('#menu-p1'), $('a.menu__prev'), $('a.menu__next') );
            return false;
        });

    }
    /* end menu */


    /*
     start seo slider
     Необходимо подключение jquery.bxslider.min.js
     */
    if ( $('#seo-slider-wr').length )
    {
        $('#seo-slider-wr').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 5000,
            slideMargin: 0,
            controls: true,
            pager: false,
            auto: true,
            autoControls: false,
            pause: 5000,
            speed: 500,
            adaptiveHeight: true,
            onSlideAfter:function($slideElement, oldIndex, newIndex) {

                $slideElement.find('span.b').trigger('click');
                var obj = $slideElement.find('span.b');
                var objHidden = $slideElement.find('span.bh');

                var cont = objHidden.text();
                var i = 0;

                var myInterval = setInterval( function(){
                    obj.text(i);
                    i++;
                    if (i > cont) {
                        clearInterval(myInterval);
                    }
                }, 40);
            }
        });
    }

    if ( $('#seopg-slider-wr').length )
    {
        $('#seopg-slider-wr').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 5000,
            slideMargin: 0,
            controls: true,
            pager: false,
            auto: false,
            autoControls: false,
            pause: 5000,
            speed: 500,
            adaptiveHeight: false,

        });
    }
    /* end seo slider */



    /*
     start yandex map
     Необходимо подключение http://api-maps.yandex.ru/2.1/?lang=ru_RU
     */
    if ($('#map').length) {


        var myMap, myPlacemark;

        function init(){
            $('#map').html('');
            myMap = new ymaps.Map("map", {
                center: [59.993881, 30.380209],
                zoom: 17,
            });

            myMap.behaviors.disable('scrollZoom');

            myPlacemark = new ymaps.Placemark( [59.993881, 30.380209],
                {
                    iconContent: 'AlkoDesign',
                    hintContent: 'Рекламное агентство Алкодизайн',
                    balloonContentHeader: 'Рекламное агентство Алкодизайн',
                    balloonContentBody: '195220, Санкт-Петербург, просп. Непокоренных, 17, корп.4',
                    balloonContentFooter: '+7 (812) 313-12-41',
                }, {
                    preset: 'islands#redStretchyIcon',
                });

            myMap.geoObjects.add(myPlacemark);
        }
        ymaps.ready(init);
    }
    /* end yandex map */



    /* start seo num animation */
    var seoOnScreen = false;
    $( window ).scroll(function() {
        /* для работы условия необходимо подключать jquery.visible.min.js */
        if ( $('#count-wr').visible() ) {

            if (seoOnScreen) return false;
            seoOnScreen = true;
            var wrapper = $('.seo-slider-wr');

            wrapper.find('.seo-slider-item').each( function() {

                var obj = $(this).find('span.b');
                var objHidden = $(this).find('span.bh');

                var cont = objHidden.text();
                var i = 0;

                var myInterval = setInterval( function(){
                    obj.text(i);
                    i++;
                    if (i > cont) {
                        clearInterval(myInterval);
                    }
                }, 10);


            });

            return false;

        } else {
            seoOnScreen = false;
        }

    });
    /* end seo num animation */


    // animate
    $(window).scroll(function() {
        $('#benefits .container').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("slideUp");
            }
        });
        $('#shares_anim .container').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+800) {
                $(this).addClass("fadeIn");
            }
        });
        $('#partners .container').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+700) {
                $(this).addClass("bigEntrance");
            }
        });
    });


    var stickyNavTop = $('#top-bar').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#top-bar').addClass('fixed_block');
        } else {
            $('#top-bar').removeClass('fixed_block');
        }
    };
    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});
