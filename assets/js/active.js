
(function ($) {
    "use strict";
    
    function sliders() {
//        if ($.fn.owlCarousel) {}
    }

    function plugins() {
//        $(window).stellar();
        
//        $('select').niceSelect();     
//        $('.videoBtn').magnificPopup({
//            disableOn: 0,
//            type: 'iframe',
//            mainClass: 'mfp-zoom',
//            removalDelay: 160,
//            preloader: true,
//            fixedContentPos: false
//        });
        
        $('nav ul.menu').slicknav({
            appendTo: '.menu_col'
        });
    }
    
    function pluginsWl() {
//        $('.masonry-wrap').masonry({
//          itemSelector: '.masonry-grid'
//        });
    }

    function customCode() {
        $('.sub-menu').siblings('a').addClass('sub-siblings');
        $('.mega-menu').siblings('a').closest('li').addClass('mega-par');
        $('.search_icon, .search_close').click(function() {
            $('.search_form').toggleClass('active');
        });
        
        $('.mega-menu').siblings('a').closest('li').on('click', function() {
            $('this').find('.menu-column').css('display','block');
        });
    }
    
    function heightConfig() {
        
//        var sth = -1;
//        $('.sth').each(function () {
//            if ($(this).height() > sth) {
//                sth = $(this).height();
//            }
//        });
//        $('.sth').height(sth);
//        
    }
    
    function accordion() {
//        var dd = $('dd');
//        dd.filter(':nth-child(n+4)').hide();
//        $('dl.accordion').on('click', 'dt', function(){
//            $(this)
//            .addClass('active')
//            .siblings('dt')
//            .removeClass('active');
//
//            $(this)
//                .next()
//                .slideDown()
//                .siblings('dd')
//                .slideUp();
//        });
    }
    
    $(document).ready(function () {
        plugins();
        customCode();
        accordion();
        sliders();
        heightConfig();
    });
    
    $(window).load(function () {
        heightConfig();
        pluginsWl();
    });
    
    
})(jQuery);