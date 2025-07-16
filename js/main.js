$(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

    var bodyEl = document.body,
        openbtn = document.getElementById( 'open-button' ),
        closebtn = document.getElementById( 'close-button' ),
        isOpen = false; // Set to true to make the menu active by default

    function init() {
        initEvents();
        toggleMenu(); // Automatically toggle the menu to show it by default
    }

    function initEvents() {
        openbtn.addEventListener( 'click', toggleMenu );
        if( closebtn ) {
            closebtn.addEventListener( 'click', toggleMenu );
        }
    }

    function toggleMenu() {
        if( isOpen ) {
            classie.remove( bodyEl, 'show-menu' );
        }
        else {
            classie.add( bodyEl, 'show-menu' );
        }
        isOpen = !isOpen;
    }

    init();

})();