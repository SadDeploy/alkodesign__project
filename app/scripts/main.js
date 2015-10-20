

$(window).load(function() {
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
});
