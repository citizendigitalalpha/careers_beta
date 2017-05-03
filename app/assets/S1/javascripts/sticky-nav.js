// ===================================== Sticky Scroller - START ===================================== //
// (function moveScroller() {
//      var $anchor = $("#scroller-anchor");
//      var $scroller = $('#scroller');
//
//      var move = function() {
//           var st = $(window).scrollTop();
//           var ot = $anchor.offset().top;
//           if(st > ot) {
//                $scroller.css({
//                     position: "fixed",
//                     top: ""
//                });
//                $scroller.addClass("fixed");
//           } else {
//                if(st <= ot) {
//                     $scroller.css({
//                          position: "relative",
//                          top: ""
//                     });
//                     $scroller.removeClass("fixed");
//                }
//           }
//      };
//
//      $(window).scroll(move);
//      move();
// })();

// $(window).scroll(function () {
//      var threshold = 0;
//      // $("#test").html($(window).scrollTop());
//      if ($(window).scrollTop() >= threshold)
//           $('#sidebar').addClass('fixed');
//      else
//           $('#sidebar').removeClass('fixed');
//      var check = $(".sticky-holder").height() - $("#sidebar").height()-21;
//      if ($(window).scrollTop() >= check)
//           $('#sidebar').addClass('bottom');
//      else
//           $('#sidebar').removeClass('bottom');
// });
// ===================================== Sticky Scroller - END ===================================== //

(function ($) {

    $.fn.stickySidebar = function (options) {

        var config = $.extend({
            headerSelector: 'header',
            navSelector: 'nav',
            contentSelector: '.sticky-holder',
            footerSelector: 'footer',
            sidebarTopMargin: 20,
            footerThreshold: 40
        }, options);

        var fixSidebr = function () {

            var sidebarSelector = $(this);
            var viewportHeight = $(window).height();
            var viewportWidth = $(window).width();
            var documentHeight = $(document).height();
            var headerHeight = $(config.headerSelector).outerHeight();
            var navHeight = $(config.navSelector).outerHeight();
            var sidebarHeight = sidebarSelector.outerHeight();
            var contentHeight = $(config.contentSelector).outerHeight();
            var footerHeight = $(config.footerSelector).outerHeight();
            var scroll_top = $(window).scrollTop();
            var fixPosition = contentHeight - sidebarHeight;
            var breakingPoint1 = headerHeight + navHeight;
            var breakingPoint2 = documentHeight - (sidebarHeight + footerHeight + config.footerThreshold);

            // calculate
            if ((contentHeight > sidebarHeight) && (viewportHeight > sidebarHeight)) {

                if (scroll_top < breakingPoint1) {

                    sidebarSelector.removeClass('sticky');

                } else if ((scroll_top >= breakingPoint1) && (scroll_top < breakingPoint2)) {

                    sidebarSelector.addClass('sticky').css('top', config.sidebarTopMargin);

                } else {

                    var negative = breakingPoint2 - scroll_top;
                    sidebarSelector.addClass('sticky').css('top', negative);

                }

            }
        };

        return this.each(function () {
            $(window).on('scroll', $.proxy(fixSidebr, this));
            $(window).on('resize', $.proxy(fixSidebr, this))
            $.proxy(fixSidebr, this)();
        });

    };

}(jQuery));

$(document).ready(function() {
   $('#sidebar').stickySidebar();
});
